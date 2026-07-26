import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { JOURNEY } from '../data/portfolioData';
import { ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

export const JourneySection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(3); // Default expanded to SUSA / Hackathons

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="journey" className="w-full bg-[#FAFAFA] py-28 sm:py-36 border-t border-[#ECECEC]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-[#555555]">
              02 / Timeline
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#111111] mt-3 hover:translate-x-3 transition-transform duration-300 inline-block cursor-pointer">
              The Journey
            </h2>
          </div>
          <p className="max-w-md font-sans-body text-sm sm:text-base text-[#555555] font-light leading-relaxed">
            From early school days exploring code to engineering custom languages and building AI products. Click any milestone to read the deeper narrative.
          </p>
        </motion.div>

        {/* Vertical Timeline List */}
        <div className="relative border-l border-[#ECECEC] ml-4 md:ml-32 space-y-12">
          {JOURNEY.map((item, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative pl-8 md:pl-12 group"
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute -left-[6.5px] top-2 w-[13px] h-[13px] rounded-full border transition-all duration-300 ${
                    isExpanded
                      ? 'bg-[#111111] border-[#111111] scale-125'
                      : 'bg-[#FFFFFF] border-[#111111] group-hover:scale-110'
                  }`}
                />

                {/* Timeline Card */}
                <div className="bg-[#FFFFFF] border border-[#ECECEC] p-6 sm:p-8 hover:border-[#111111]/30 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    {/* Years on Left/Top */}
                    <span className="font-mono text-xs uppercase tracking-widest text-[#555555] font-semibold">
                      {item.year}
                    </span>
                    <span className="inline-block px-3 py-1 bg-[#FAFAFA] border border-[#ECECEC] text-[11px] font-mono text-[#555555] w-fit">
                      {item.type}
                    </span>
                  </div>

                  {/* Title & Institution */}
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[#111111] leading-tight hover:translate-x-2 transition-transform duration-200 cursor-pointer">
                    {item.title}
                  </h3>
                  <p className="font-sans-body text-sm text-[#555555] font-normal mt-1">
                    {item.institution}
                  </p>

                  {/* Summary */}
                  <p className="font-sans-body text-base text-[#555555] font-light leading-relaxed mt-4">
                    {item.summary}
                  </p>

                  {/* Expand / Collapse Button */}
                  <button
                    onClick={() => toggleExpand(index)}
                    className="mt-6 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#111111] hover:text-[#555555] cursor-pointer focus:outline-none transition-colors"
                  >
                    <span>{isExpanded ? 'Collapse Story' : 'Read Deep Narrative'}</span>
                    {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </button>

                  {/* Expanded Content Drawer */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 mt-6 border-t border-[#ECECEC] space-y-4">
                          <p className="font-display font-semibold text-base sm:text-lg text-[#111111] leading-relaxed">
                            "{item.expandedContent}"
                          </p>

                          <div className="space-y-2">
                            <span className="text-xs font-mono text-[#555555] uppercase tracking-wider block">
                              Key Accomplishments & Insights
                            </span>
                            <ul className="space-y-2 font-sans-body text-sm text-[#555555]">
                              {item.highlights.map((h, hIdx) => (
                                <li key={hIdx} className="flex items-start gap-2">
                                  <span className="text-[#111111] font-bold select-none">•</span>
                                  <span>{h}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
