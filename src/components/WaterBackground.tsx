import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const WaterBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    
    // Camera directly facing the XY plane (facing the user straight on, NO slant)
    const aspect = container.clientWidth / container.clientHeight;
    const camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 100);
    camera.position.set(0, 0, 14);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    container.appendChild(renderer.domElement);

    // Flat 3D plane directly facing the screen/user (XY Plane)
    const gridSegments = 128;
    const planeWidth = 28 * aspect;
    const planeHeight = 28;
    const geometry = new THREE.PlaneGeometry(planeWidth, planeHeight, gridSegments, gridSegments);

    // Store up to 16 mouse ripple drop points: (x, y, startTime, intensity)
    const maxRipples = 16;
    const ripplesData = new Float32Array(maxRipples * 4); // [x, y, time, intensity]

    // Custom Shader Material for realistic clear/silver 3D liquid (NO BLUE)
    const waterUniforms = {
      uTime: { value: 0 },
      uRipples: { value: ripplesData },
      uSunDirection: { value: new THREE.Vector3(0.5, 0.8, 1.0).normalize() },
      uBaseColor: { value: new THREE.Color('#111111') }, // Pure dark/silver accent
      uHighlightColor: { value: new THREE.Color('#ffffff') }, // Crisp white specular
    };

    const vertexShader = `
      uniform float uTime;
      uniform vec4 uRipples[16]; // x, y, startTime, intensity
      
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      varying float vDisplacement;
      
      // Simplex-like wave functions for natural ambient liquid flow
      float wave(vec2 pos, vec2 dir, float freq, float speed) {
        return sin(dot(pos, dir) * freq + uTime * speed);
      }

      void main() {
        vec3 pos = position;
        
        // 1. Base organic water undulating waves along Z axis (toward/away from screen)
        float h = 0.0;
        h += wave(pos.xy, vec2(1.0, 0.5), 0.35, 1.2) * 0.22;
        h += wave(pos.xy, vec2(-0.6, 0.8), 0.65, 1.5) * 0.12;
        h += wave(pos.xy, vec2(0.3, -0.9), 1.1, 2.0) * 0.06;
        
        // 2. Interactive 3D Cursor Ripples directly on screen plane (XY)
        for (int i = 0; i < 16; i++) {
          vec4 rip = uRipples[i];
          float ripTime = rip.z;
          float intensity = rip.w;
          
          if (intensity > 0.001) {
            float dt = uTime - ripTime;
            if (dt > 0.0 && dt < 4.0) {
              float dist = distance(pos.xy, rip.xy);
              float waveRadius = dt * 6.0; // Propagation speed
              float ring = dist - waveRadius;
              
              // Concentric damped sine wave displacement along Z
              if (abs(ring) < 3.2) {
                float attenuation = exp(-dt * 0.9) * exp(-dist * 0.18) * intensity;
                float rippleVal = sin(ring * 3.2) * attenuation * 0.55;
                h += rippleVal;
              }
            }
          }
        }

        pos.z += h;
        vDisplacement = h;

        // Calculate surface normal for realistic metallic/glass light glints
        float delta = 0.08;
        
        // Neighbor samples
        vec3 posDx = position + vec3(delta, 0.0, 0.0);
        float hDx = wave(posDx.xy, vec2(1.0, 0.5), 0.35, 1.2) * 0.22 + wave(posDx.xy, vec2(-0.6, 0.8), 0.65, 1.5) * 0.12;
        
        vec3 posDy = position + vec3(0.0, delta, 0.0);
        float hDy = wave(posDy.xy, vec2(1.0, 0.5), 0.35, 1.2) * 0.22 + wave(posDy.xy, vec2(-0.6, 0.8), 0.65, 1.5) * 0.12;

        // Add ripple perturbations to normals
        for (int i = 0; i < 16; i++) {
          vec4 rip = uRipples[i];
          float dt = uTime - rip.z;
          float intensity = rip.w;
          if (intensity > 0.001 && dt > 0.0 && dt < 4.0) {
            float distDx = distance(posDx.xy, rip.xy);
            float distDy = distance(posDy.xy, rip.xy);
            float ringDx = distDx - dt * 6.0;
            float ringDy = distDy - dt * 6.0;
            if (abs(ringDx) < 3.2) hDx += sin(ringDx * 3.2) * exp(-dt * 0.9) * exp(-distDx * 0.18) * intensity * 0.55;
            if (abs(ringDy) < 3.2) hDy += sin(ringDy * 3.2) * exp(-dt * 0.9) * exp(-distDy * 0.18) * intensity * 0.55;
          }
        }

        vec3 tangentX = vec3(delta, 0.0, hDx - h);
        vec3 tangentY = vec3(0.0, delta, hDy - h);
        vec3 calcNormal = normalize(cross(tangentX, tangentY));

        vNormal = normalMatrix * calcNormal;
        vec4 worldPos = modelMatrix * vec4(pos, 1.0);
        vWorldPosition = worldPos.xyz;

        gl_Position = projectionMatrix * viewMatrix * worldPos;
      }
    `;

    const fragmentShader = `
      uniform vec3 uSunDirection;
      uniform vec3 uBaseColor;
      uniform vec3 uHighlightColor;
      
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      varying float vDisplacement;

      void main() {
        vec3 normal = normalize(vNormal);
        vec3 viewDir = normalize(cameraPosition - vWorldPosition);
        
        // Fresnel reflection
        float fresnel = pow(1.0 - max(dot(viewDir, normal), 0.0), 3.0);
        
        // Specular glint from light source (pure silver/white)
        vec3 halfDir = normalize(uSunDirection + viewDir);
        float spec = pow(max(dot(normal, halfDir), 0.0), 96.0);
        
        // Pure neutral clear liquid shadow & light (Zero Blue)
        float lightIntensity = dot(normal, uSunDirection) * 0.5 + 0.5;
        vec3 silverBase = mix(vec3(0.12), vec3(0.85), lightIntensity);
        
        // Specular highlights & glassy edge fresnel
        vec3 finalColor = silverBase + uHighlightColor * spec * 1.6 + vec3(0.95) * fresnel * 0.4;
        
        // Soft opacity falloff towards screen border
        float distFromCenter = length(vWorldPosition.xy) / 14.0;
        float alpha = (1.0 - smoothstep(0.6, 1.0, distFromCenter)) * (0.35 + abs(vDisplacement) * 0.6);

        gl_FragColor = vec4(finalColor, clamp(alpha, 0.0, 0.65));
      }
    `;

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: waterUniforms,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Raycasting directly onto XY plane (facing user)
    const raycaster = new THREE.Raycaster();
    const mouseVec = new THREE.Vector2(-999, -999);
    const planeTarget = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    const intersectPoint = new THREE.Vector3();

    let rippleIndex = 0;
    let lastRippleTime = 0;
    let lastPoint = new THREE.Vector3();

    // Function to trigger a powerful water splash at a given screen coordinate
    const triggerSplash = (clientX: number, clientY: number, power = 2.2) => {
      const rect = container.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      mouseVec.x = (x / container.clientWidth) * 2 - 1;
      mouseVec.y = -(y / container.clientHeight) * 2 + 1;

      raycaster.setFromCamera(mouseVec, camera);
      if (raycaster.ray.intersectPlane(planeTarget, intersectPoint)) {
        const currentTime = clock.getElapsedTime();

        // Main splash impact ripple
        const idx1 = rippleIndex % maxRipples;
        ripplesData[idx1 * 4 + 0] = intersectPoint.x;
        ripplesData[idx1 * 4 + 1] = intersectPoint.y;
        ripplesData[idx1 * 4 + 2] = currentTime;
        ripplesData[idx1 * 4 + 3] = power;
        rippleIndex++;

        // Secondary echoing splash ring slightly delayed
        setTimeout(() => {
          const idx2 = rippleIndex % maxRipples;
          ripplesData[idx2 * 4 + 0] = intersectPoint.x;
          ripplesData[idx2 * 4 + 1] = intersectPoint.y;
          ripplesData[idx2 * 4 + 2] = clock.getElapsedTime();
          ripplesData[idx2 * 4 + 3] = power * 0.65;
          rippleIndex++;
        }, 80);
      }
    };

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      if ('touches' in event && event.touches.length > 0) {
        const touch = event.touches[0];
        triggerSplash(touch.clientX, touch.clientY, 2.5);
      } else if ('clientX' in event) {
        triggerSplash((event as MouseEvent).clientX, (event as MouseEvent).clientY, 2.5);
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      mouseVec.x = (x / container.clientWidth) * 2 - 1;
      mouseVec.y = -(y / container.clientHeight) * 2 + 1;

      raycaster.setFromCamera(mouseVec, camera);
      if (raycaster.ray.intersectPlane(planeTarget, intersectPoint)) {
        const currentTime = clock.getElapsedTime();
        const distMoved = intersectPoint.distanceTo(lastPoint);

        if (distMoved > 0.35 && currentTime - lastRippleTime > 0.035) {
          const idx = rippleIndex % maxRipples;
          ripplesData[idx * 4 + 0] = intersectPoint.x;
          ripplesData[idx * 4 + 1] = intersectPoint.y;
          ripplesData[idx * 4 + 2] = currentTime;
          ripplesData[idx * 4 + 3] = Math.min(1.2, distMoved * 0.9 + 0.3);

          rippleIndex++;
          lastRippleTime = currentTime;
          lastPoint.copy(intersectPoint);
        }
      }
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        const touch = event.touches[0];
        const rect = container.getBoundingClientRect();
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;

        mouseVec.x = (x / container.clientWidth) * 2 - 1;
        mouseVec.y = -(y / container.clientHeight) * 2 + 1;

        raycaster.setFromCamera(mouseVec, camera);
        if (raycaster.ray.intersectPlane(planeTarget, intersectPoint)) {
          const currentTime = clock.getElapsedTime();
          const idx = rippleIndex % maxRipples;
          ripplesData[idx * 4 + 0] = intersectPoint.x;
          ripplesData[idx * 4 + 1] = intersectPoint.y;
          ripplesData[idx * 4 + 2] = currentTime;
          ripplesData[idx * 4 + 3] = 0.8;

          rippleIndex++;
          lastRippleTime = currentTime;
        }
      }
    };

    window.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('touchstart', handlePointerDown, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Handle Window Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      const newAspect = w / h;
      camera.aspect = newAspect;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(container);

    // Animation Loop
    const clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      waterUniforms.uTime.value = elapsedTime;

      // Subtle parallax camera shift directly facing user
      camera.position.x += (mouseVec.x * 0.8 - camera.position.x) * 0.04;
      camera.position.y += (mouseVec.y * 0.8 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('touchstart', handlePointerDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
      
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-auto z-0 overflow-hidden"
    />
  );
};
