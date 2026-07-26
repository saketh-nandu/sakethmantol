import React, { useState } from 'react';
import { motion } from 'motion/react';
import { JOURNAL_ARTICLES } from '../data/portfolioData';
import { JournalArticle } from '../types';
import { JournalModal } from './JournalModal';
import { ArrowUpRight, Clock } from 'lucide-react';

export const JournalSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);

  return (
    <section id="journal" className="w-full bg-[#FFFFFF] py-28 sm:py-36 border-t border-[#ECECEC]">
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
              07 / Writings & Essays
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#111111] mt-3 hover:translate-x-3 transition-transform duration-300 inline-block cursor-pointer">
              Journal
            </h2>
          </div>
          <p className="max-w-md font-sans-body text-sm sm:text-base text-[#555555] font-light leading-relaxed">
            Reflections on compiler design, world-building lore, Swiss editorial philosophy, and grounded AI architectures.
          </p>
        </motion.div>

        {/* Medium-Style Editorial List (No Cards) */}
        <div className="divide-y divide-[#ECECEC] border-t border-b border-[#ECECEC]">
          {JOURNAL_ARTICLES.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              onClick={() => setSelectedArticle(article)}
              className="group py-8 sm:py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-[#FAFAFA] px-4 transition-colors cursor-pointer"
            >
              {/* Left Title & Excerpt */}
              <div className="max-w-3xl space-y-3">
                <div className="flex items-center space-x-4 text-xs font-mono text-[#555555]">
                  <span>{article.category}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl text-[#111111] group-hover:translate-x-2 group-hover:text-[#333333] transition-all duration-200 font-bold tracking-tight leading-tight">
                  {article.title}
                </h3>

                <p className="font-sans-body text-sm text-[#555555] font-light line-clamp-2 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              {/* Right Reading Time & Arrow */}
              <div className="flex items-center space-x-6 text-xs font-mono text-[#555555] shrink-0">
                <span className="flex items-center gap-1.5">
                  <Clock size={14} />
                  <span>{article.readTime}</span>
                </span>
                <ArrowUpRight size={18} className="text-[#111111] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      <JournalModal article={selectedArticle} onClose={() => setSelectedArticle(null)} />
    </section>
  );
};
