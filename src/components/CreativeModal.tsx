import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CreativeWork } from '../types';
import { X, Film, BookOpen, Feather, Compass, Users } from 'lucide-react';

interface CreativeModalProps {
  work: CreativeWork | null;
  onClose: () => void;
}

export const CreativeModal: React.FC<CreativeModalProps> = ({ work, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (work) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [work, onClose]);

  if (!work) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[110] overflow-y-auto bg-[#111111]/60 backdrop-blur-sm flex justify-center items-start p-4 pt-24 sm:p-6 md:p-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-[#FFFFFF] border border-[#ECECEC] shadow-2xl overflow-hidden mt-20 sm:my-auto"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 bg-[#FFFFFF]/90 backdrop-blur-md border-b border-[#ECECEC] px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-widest bg-[#111111] text-[#FFFFFF]">
                {work.type}
              </span>
              {work.universe && (
                <span className="text-xs font-mono text-[#555555] hidden sm:inline-block">
                  • {work.universe}
                </span>
              )}
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#111111] hover:bg-[#FAFAFA] transition-colors cursor-pointer focus:outline-none"
              aria-label="Close creative work modal"
            >
              <X size={20} />
            </button>
          </div>

          {/* Modal Main Content */}
          <div className="p-6 sm:p-10 md:p-12 space-y-10 max-h-[82vh] overflow-y-auto no-scrollbar">
            {/* Title & Logline */}
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#555555]">
                {work.status}
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-[#111111] leading-tight">
                {work.title}
              </h2>
              <p className="font-display font-medium text-lg sm:text-xl text-[#333333] max-w-2xl leading-relaxed">
                "{work.logline}"
              </p>
            </div>

            {/* Cover Image */}
            <div className="w-full aspect-[21/9] bg-[#FAFAFA] border border-[#ECECEC] overflow-hidden">
              <img
                src={work.coverImage}
                alt={work.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Full Story Premise (Spoiler Free) */}
            <div className="space-y-4 border-t border-[#ECECEC] pt-8">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#555555]">
                Narrative Concept & Premise
              </h3>
              <p className="font-sans-body text-base sm:text-lg leading-relaxed text-[#111111] font-light">
                {work.fullPremise}
              </p>
            </div>

            {/* Recurring Themes */}
            <div className="space-y-4 border-t border-[#ECECEC] pt-8">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#555555]">
                Central Narrative Themes
              </h3>
              <div className="flex flex-wrap gap-2">
                {work.themes.map((theme, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-[#FAFAFA] border border-[#ECECEC] text-xs font-sans-body text-[#111111]"
                  >
                    • {theme}
                  </span>
                ))}
              </div>
            </div>

            {/* Characters (If defined) */}
            {work.characters && work.characters.length > 0 && (
              <div className="space-y-4 border-t border-[#ECECEC] pt-8">
                <h3 className="font-mono text-xs uppercase tracking-widest text-[#555555]">
                  Character Profiles
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {work.characters.map((char, idx) => (
                    <div key={idx} className="p-4 bg-[#FAFAFA] border border-[#ECECEC] space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-heading text-lg text-[#111111]">{char.name}</span>
                        <span className="text-[10px] font-mono uppercase text-[#555555]">{char.role}</span>
                      </div>
                      <p className="font-sans-body text-xs text-[#555555] font-light leading-relaxed">
                        {char.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Close Button */}
            <div className="pt-8 border-t border-[#ECECEC] flex justify-end">
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-[#111111] text-[#FFFFFF] text-xs font-mono uppercase tracking-wider hover:bg-[#333333] transition-colors cursor-pointer"
              >
                Return to Creative Universe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
