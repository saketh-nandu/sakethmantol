import React from 'react';
import { motion } from 'motion/react';
import { Camera } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const portraitImage = new URL('../../assets/portrait.png', import.meta.url).href;

  return (
    <section id="about" className="relative w-full bg-[#FFFFFF] py-28 sm:py-36 border-t border-[#ECECEC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <span className="text-xs uppercase font-mono tracking-widest text-[#555555]">
            01 / About
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#111111] mt-3 hover:translate-x-3 transition-transform duration-300 inline-block cursor-pointer">
            Who I Am
          </h2>
        </motion.div>

        {/* Two-Column Editorial Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Self Portrait Placeholder + Accent Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-8 lg:sticky lg:top-28"
          >
            {/* Self Portrait Demo Placeholder */}
            <div className="relative w-full aspect-[4/5] bg-[#FAFAFA] border border-[#ECECEC] overflow-hidden flex flex-col items-center justify-center p-8 text-center group hover:border-[#111111] transition-all">
              <img
                src={portraitImage}
                alt="Portrait placeholder"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#111111]/10" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#111111] font-medium">
                Self Portrait Placeholder
              </span>
              <p className="text-xs font-sans text-[#555555] font-light mt-1.5 max-w-xs">
                Reserved space for Saketh Mantol's portrait photograph.
              </p>
              <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 bg-[#FFFFFF] border border-[#ECECEC] text-[10px] font-mono text-[#555555]">
                <Camera size={12} />
                <span>Replace with your image</span>
              </div>
              <div className="absolute top-3 right-3 px-2 py-0.5 bg-[#111111] text-[#FFFFFF] text-[9px] font-mono uppercase tracking-widest">
                Portrait Slot
              </div>
            </div>

            <p className="font-display text-xl sm:text-2xl leading-relaxed font-semibold text-[#111111] hover:translate-x-1 transition-transform duration-300">
              "I see software as architecture and story as its soul. The goal isn't just to write code that runs, but to build worlds that endure."
            </p>

            <div className="pt-6 border-t border-[#ECECEC] space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-[#555555]">
                <span>Focus</span>
                <span className="text-[#111111]">AI Systems & Cinematic Narrative</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-[#555555]">
                <span>Base</span>
                <span className="text-[#111111]">Secunderabad / Hyderabad, India</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-[#555555]">
                <span>Affiliation</span>
                <span className="text-[#111111]">HITAM & SUSA Open Source</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Personal Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7 space-y-8 font-sans-body text-base sm:text-lg leading-relaxed text-[#555555] font-light"
          >
            <p>
              My journey began not in corporate boardrooms, but in quiet rooms filled with logic puzzles, terminal prompts, and blank notebooks. I’ve always been obsessed with how complex systems function — whether that system is an artificial intelligence compiler, a political republic in a trilogy, or an emotional bond on film.
            </p>

            <div className="space-y-4">
              <h3 className="font-heading text-xl sm:text-2xl text-[#111111] font-bold tracking-tight hover:translate-x-2 transition-transform duration-300 inline-block cursor-pointer">
                Curiosity over Convention
              </h3>
              <p>
                I believe formal education gives you the grammar, but curiosity gives you the language. During my technical diploma in Artificial Intelligence and Machine Learning at the Government Institute of Electronics, I realized I didn't want to just execute assignments; I wanted to create tools. That drive led to <strong className="text-[#111111] font-medium">SUSA</strong>, a universal scripting language ecosystem engineered to strip away syntactic clutter so developers can think clearly.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-heading text-xl sm:text-2xl text-[#111111] font-bold tracking-tight hover:translate-x-2 transition-transform duration-300 inline-block cursor-pointer">
                Software & Cinema as Twin Pillars
              </h3>
              <p>
                To me, a software engineer who cannot tell a story is missing half the picture. Software is the vessel; narrative is the intent. Outside of building RAG systems like <strong className="text-[#111111] font-medium">MediRAG</strong> or learning platforms like <strong className="text-[#111111] font-medium">StudyHub</strong>, I spend my time world-building — writing screenplays like <strong className="text-[#111111] font-medium">IKSHARA</strong> and designing mythological sci-fi universes like <strong className="text-[#111111] font-medium">Devaverse</strong>.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-heading text-xl sm:text-2xl text-[#111111] font-bold tracking-tight hover:translate-x-2 transition-transform duration-300 inline-block cursor-pointer">
                The Long-Term Vision
              </h3>
              <p>
                As I pursue my B.Tech in CSE (AI & ML) at HITAM, my horizon remains clear: to evolve into an AI product builder who designs software that feels like magic and directs films that leave a lasting emotional mark. I measure success by craftsmanship, depth, and the quiet satisfaction of creating something that matters.
              </p>
            </div>

            {/* Core Values Minimalist Checklist */}
            <div className="pt-8 border-t border-[#ECECEC] grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div>
                <span className="block text-xs font-mono text-[#555555] uppercase tracking-wider mb-1">01 / Method</span>
                <span className="font-heading text-lg text-[#111111]">First Principles</span>
              </div>
              <div>
                <span className="block text-xs font-mono text-[#555555] uppercase tracking-wider mb-1">02 / Aesthetic</span>
                <span className="font-heading text-lg text-[#111111]">Swiss Elegance</span>
              </div>
              <div>
                <span className="block text-xs font-mono text-[#555555] uppercase tracking-wider mb-1">03 / Mindset</span>
                <span className="font-heading text-lg text-[#111111]">Unrelenting Craft</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
