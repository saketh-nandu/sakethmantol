import React from 'react';
import { motion } from 'motion/react';
import { WaterBackground } from './WaterBackground';
import { SectionVideoPlacement } from './SectionVideoPlacement';

interface HeroSectionProps {
  onScrollClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollClick }) => {
  const landingVideo = new URL('../../assets/landingpage.mp4', import.meta.url).href;

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[700px] bg-[#FFFFFF] flex flex-col justify-between items-center px-6 py-12 md:py-16 text-center select-none overflow-hidden"
    >
      {/* Interactive Water Background Animation */}
      <WaterBackground />

      <div className="hidden lg:block">
        <SectionVideoPlacement
          sectionId="hero"
          src={landingVideo}
          alt="Landing page video"
          label="Landing Page Video"
          placementConfigUrl="/hero-landingpage-placement.json"
          fileName="hero-landingpage-placement.json"
          defaultPlacement={{ x: 58, y: 28, width: 28, height: 34 }}
        />
      </div>

      {/* Top spacer to balance layout */}
      <div className="w-full h-12 z-10"></div>

      {/* Main Centered Content */}
      <div className="max-w-6xl w-full mx-auto flex flex-col items-center justify-center my-auto px-2 z-10 pointer-events-auto">
        {/* Massive Typographic Name */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex flex-col items-center justify-center"
        >
          <h1 className="font-sans-body font-extrabold text-[12vw] sm:text-[10vw] md:text-[8.5vw] lg:text-[7.5vw] leading-[0.9] tracking-[-0.03em] text-[#111111] uppercase text-center cursor-default">
            SAKETH
            <br />
            MANTOL
          </h1>
        </motion.div>

        {/* Director • Developer Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-10 mb-2"
        >
          <p className="font-sans-body font-normal text-base sm:text-lg md:text-xl text-[#555555] tracking-wide">
            Director <span className="mx-2 text-[#111111] font-bold">•</span> Developer
          </p>

          <div className="mt-5 space-y-2 max-w-2xl mx-auto">
            <p className="font-display text-sm sm:text-base text-[#333333] font-medium leading-relaxed">
              "I design intelligent systems like stories, and direct stories like systems."
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#666666]">
              Craft. Clarity. Cinema.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.button
        onClick={onScrollClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="group cursor-pointer focus:outline-none flex flex-col items-center space-y-2 mb-2 z-10"
        aria-label="Scroll to About section"
      >
        <span className="text-[10px] uppercase font-mono tracking-widest text-[#555555] group-hover:text-[#111111] transition-colors">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-lg text-[#111111] font-light"
        >
          ↓
        </motion.span>
      </motion.button>
    </section>
  );
};

