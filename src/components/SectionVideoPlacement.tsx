import React, { useEffect, useRef, useState } from 'react';

interface Placement {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface ChromaSettings {
  intensity: number;
  blur: number;
}

interface SectionVideoPlacementProps {
  sectionId: string;
  src: string;
  alt: string;
  label: string;
  defaultPlacement: Placement;
  placementConfigUrl?: string;
  fileName: string;
  flipHorizontal?: boolean;
}
const MIN_WIDTH = 12;
const MIN_HEIGHT = 12;
const MAX_WIDTH = 240;
const MAX_HEIGHT = 240;
const MIN_X = -150;
const MAX_X = 250;
const MIN_Y = -150;
const MAX_Y = 250;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export const SectionVideoPlacement: React.FC<SectionVideoPlacementProps> = ({
  sectionId,
  src,
  alt,
  label,
  defaultPlacement,
  placementConfigUrl,
  fileName,
  flipHorizontal = false,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const frameRequestRef = useRef<number | null>(null);
  const activeRef = useRef(false);
  const [placement, setPlacement] = useState<Placement>(defaultPlacement);
  const [chromaSettings, setChromaSettings] = useState<ChromaSettings>({ intensity: 60, blur: 0 });

  useEffect(() => {
    if (!placementConfigUrl) {
      setPlacement(defaultPlacement);
      return;
    }

    const controller = new AbortController();

    const loadPlacementConfig = async () => {
      try {
        const response = await fetch(placementConfigUrl, { signal: controller.signal });
        if (!response.ok) {
          throw new Error(`Failed to load placement config: ${response.status}`);
        }

        const config = (await response.json()) as {
          placement?: Placement;
          chromaSettings?: ChromaSettings;
          flipHorizontal?: boolean;
        };

        if (config.placement) {
          setPlacement(config.placement);
        }

        if (config.chromaSettings) {
          setChromaSettings(config.chromaSettings);
        }

        if (typeof config.chromaSettings === 'undefined') {
          setChromaSettings({ intensity: 60, blur: 0 });
        }
      } catch {
        setPlacement(defaultPlacement);
        setChromaSettings({ intensity: 60, blur: 0 });
      }
    };

    void loadPlacementConfig();

    return () => controller.abort();
  }, [defaultPlacement, placementConfigUrl]);

  const drawFrameWithChromaKey = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas || video.videoWidth === 0 || video.videoHeight === 0) {
      return;
    }

    if (canvas.width !== video.videoWidth || canvas.height !== video.videoHeight) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
    }

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) {
      return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const { data } = frame;

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);

      const intensity = chromaSettings.intensity;
      const greenThreshold = 70 - intensity * 0.4;
      const greenDominanceThreshold = 24 - intensity * 0.14;

      const isGreenScreenPixel =
        g > greenThreshold &&
        g > r * 1.2 &&
        g > b * 1.12 &&
        g - r > greenDominanceThreshold &&
        g - b > greenDominanceThreshold - 5;

      if (isGreenScreenPixel) {
        data[i + 3] = 0;
        continue;
      }

      if (g > r && g > b) {
        data[i + 1] = Math.min(g, Math.max(r, b) + 20);
      }
    }

    ctx.putImageData(frame, 0, 0);
  };

  const stopRenderLoop = () => {
    if (frameRequestRef.current !== null) {
      cancelAnimationFrame(frameRequestRef.current);
      frameRequestRef.current = null;
    }
  };

  const startRenderLoop = () => {
    stopRenderLoop();

    const render = () => {
      const video = videoRef.current;
      drawFrameWithChromaKey();

      if (video && !video.paused && !video.ended) {
        frameRequestRef.current = requestAnimationFrame(render);
      } else {
        frameRequestRef.current = null;
      }
    };

    frameRequestRef.current = requestAnimationFrame(render);
  };

  useEffect(() => {
    const section = document.getElementById(sectionId);
    const video = videoRef.current;

    if (!section || !video) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;

        if (isVisible && !activeRef.current) {
          activeRef.current = true;
          video.currentTime = 0;
          const playPromise = video.play();
          if (playPromise) {
            playPromise
              .then(() => startRenderLoop())
              .catch(() => undefined);
          }
          return;
        }

        if (!isVisible && activeRef.current) {
          activeRef.current = false;
          video.pause();
          video.currentTime = 0;
          drawFrameWithChromaKey();
          stopRenderLoop();
        }
      },
      { threshold: [0], rootMargin: '-35% 0px -35% 0px' }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      stopRenderLoop();
    };
  }, [sectionId]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    const onPlay = () => startRenderLoop();
    const onPause = () => {
      drawFrameWithChromaKey();
      stopRenderLoop();
    };
    const onEnded = () => {
      drawFrameWithChromaKey();
      stopRenderLoop();
    };
    const onSeeked = () => drawFrameWithChromaKey();
    const onLoaded = () => drawFrameWithChromaKey();

    video.addEventListener('play', onPlay);
    video.addEventListener('pause', onPause);
    video.addEventListener('ended', onEnded);
    video.addEventListener('seeked', onSeeked);
    video.addEventListener('loadeddata', onLoaded);

    return () => {
      video.removeEventListener('play', onPlay);
      video.removeEventListener('pause', onPause);
      video.removeEventListener('ended', onEnded);
      video.removeEventListener('seeked', onSeeked);
      video.removeEventListener('loadeddata', onLoaded);
      stopRenderLoop();
    };
  }, []);

  const videoStyle: React.CSSProperties = flipHorizontal ? { transform: 'scaleX(-1)' } : {};

  return (
    <div className="absolute inset-0 z-20 overflow-visible pointer-events-none">
      <div
        className="absolute z-20 overflow-visible pointer-events-none select-none"
        style={{
          left: `${placement.x}%`,
          top: `${placement.y}%`,
          width: `${placement.width}%`,
          height: `${placement.height}%`,
        }}
      >
        <video
          ref={videoRef}
          src={src}
          aria-label={alt}
          muted
          playsInline
          preload="metadata"
          onEnded={() => videoRef.current?.pause()}
          className="absolute inset-0 w-full h-full object-cover opacity-0 pointer-events-none"
          style={videoStyle}
        />

        <canvas
          ref={canvasRef}
          className="w-full h-full pointer-events-none"
          style={{ ...videoStyle, filter: `blur(${chromaSettings.blur}px)` }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
};
