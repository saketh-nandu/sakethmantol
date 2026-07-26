import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CREATIVE_WORKS } from '../data/portfolioData';
import { CreativeWork } from '../types';
import { CreativeModal } from './CreativeModal';
import { SectionVideoPlacement } from './SectionVideoPlacement';
import { Film, BookOpen, Feather, Sparkles, ArrowRight } from 'lucide-react';

export const CreativeSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [selectedWork, setSelectedWork] = useState<CreativeWork | null>(null);
  const creativeVideo = new URL('../../assets/project and story need to be change direction.mp4', import.meta.url).href;

  const categories = ['All', 'Cinema', 'Books', 'Stories', 'Writing'];

  const filteredWorks = filter === 'All'
    ? CREATIVE_WORKS
    : CREATIVE_WORKS.filter((w) => w.type === filter);

  return (
    <section id="creative" className="relative w-full bg-[#FAFAFA] py-28 sm:py-36 border-t border-[#ECECEC] overflow-hidden">
      <div className="hidden lg:block">
        <SectionVideoPlacement
          sectionId="creative"
          src={creativeVideo}
          alt="Creative section video"
          label="Creative Video"
          placementConfigUrl="/creative-direction-placement.json"
          fileName="creative-direction-placement.json"
          defaultPlacement={{ x: 7, y: 18, width: 32, height: 40 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-12 md:mb-16">
          {/* Empty left spacer sized to match video figure height */}
          <div className="hidden lg:block lg:col-span-5" style={{ minHeight: '380px' }} />

          {/* Right Column: Context & Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-4"
          >
            <span className="text-xs uppercase font-mono tracking-widest text-[#555555]">
              04 / Storytelling & Cinema
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#111111] hover:translate-x-3 transition-transform duration-300 inline-block cursor-pointer">
              Creative Universe
            </h2>
            <p className="font-sans-body text-base text-[#555555] font-light leading-relaxed max-w-2xl pt-2">
              Original story concepts, mythological sci-fi universes, political thrillers, and screenplay treatments crafted with cinematic vision.
            </p>
            <p className="font-display font-medium text-lg sm:text-xl text-[#111111] pt-2">
              "Whether it's software, cinema or imagination, every story begins with curiosity."
            </p>
          </motion.div>
        </div>

        {/* Category Filters */}
        <div className="relative z-10 flex flex-wrap items-center gap-2 mb-12 border-b border-[#ECECEC] pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer focus:outline-none ${
                filter === cat
                  ? 'bg-[#111111] text-[#FFFFFF]'
                  : 'bg-[#FFFFFF] text-[#555555] border border-[#ECECEC] hover:text-[#111111] hover:border-[#111111]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Works Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorks.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => setSelectedWork(work)}
              className="group bg-[#FFFFFF] border border-[#ECECEC] p-8 hover:border-[#111111]/40 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Type & Status */}
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-2.5 py-0.5 bg-[#FAFAFA] border border-[#ECECEC] text-[#111111]">
                    {work.type}
                  </span>
                  <span className="text-[#555555] text-[10px]">{work.status}</span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-3xl font-bold tracking-tight text-[#111111] group-hover:translate-x-1 group-hover:text-[#333333] transition-all duration-200 leading-tight">
                  {work.title}
                </h3>

                {/* Logline */}
                <p className="font-sans-body text-sm text-[#555555] font-light leading-relaxed">
                  "{work.logline}"
                </p>

                {/* Cover Preview Image */}
                <div className="w-full aspect-[16/9] bg-[#FAFAFA] border border-[#ECECEC] overflow-hidden">
                  <img
                    src={work.coverImage}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-[#ECECEC] flex items-center justify-between text-xs font-mono text-[#111111]">
                <span>Read Story Concept</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <CreativeModal work={selectedWork} onClose={() => setSelectedWork(null)} />
    </section>
  );
};
