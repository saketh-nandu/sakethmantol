import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { JournalArticle } from '../types';
import { X, Clock, Calendar, Bookmark } from 'lucide-react';

interface JournalModalProps {
  article: JournalArticle | null;
  onClose: () => void;
}

export const JournalModal: React.FC<JournalModalProps> = ({ article, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (article) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [article, onClose]);

  if (!article) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[110] overflow-y-auto bg-[#111111]/60 backdrop-blur-sm flex justify-center items-start p-4 sm:p-6 md:p-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl bg-[#FFFFFF] border border-[#ECECEC] shadow-2xl overflow-hidden my-auto"
        >
          {/* Header */}
          <div className="sticky top-0 z-20 bg-[#FFFFFF]/90 backdrop-blur-md border-b border-[#ECECEC] px-6 py-4 flex items-center justify-between">
            <span className="text-xs font-mono text-[#555555] uppercase tracking-wider">
              {article.category}
            </span>
            <button
              onClick={onClose}
              className="p-2 text-[#111111] hover:bg-[#FAFAFA] transition-colors cursor-pointer focus:outline-none"
              aria-label="Close article reader"
            >
              <X size={20} />
            </button>
          </div>

          {/* Reader Article Body */}
          <div className="p-8 sm:p-12 md:p-16 space-y-8 max-h-[82vh] overflow-y-auto no-scrollbar">
            {/* Title & Meta */}
            <div className="space-y-4 border-b border-[#ECECEC] pb-8">
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111] leading-tight">
                {article.title}
              </h1>

              <div className="flex items-center space-x-6 text-xs font-mono text-[#555555]">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} />
                  <span>{article.date}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={13} />
                  <span>{article.readTime}</span>
                </span>
              </div>
            </div>

            {/* Excerpt */}
            <p className="font-display font-medium text-lg sm:text-xl text-[#333333] leading-relaxed">
              "{article.excerpt}"
            </p>

            {/* Content Formatting */}
            <div className="font-sans-body text-base sm:text-lg text-[#111111] font-light leading-relaxed space-y-6 pt-4">
              {article.content.split('\n\n').map((paragraph, idx) => {
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={idx} className="font-heading text-2xl text-[#111111] font-normal pt-4">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                return <p key={idx}>{paragraph}</p>;
              })}
            </div>

            {/* Article Footer */}
            <div className="pt-12 border-t border-[#ECECEC] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-xs font-mono text-[#555555]">
                <span>Author: </span>
                <strong className="text-[#111111] font-medium">Saketh Mantol</strong>
              </div>
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-[#111111] text-[#FFFFFF] text-xs font-mono uppercase tracking-wider hover:bg-[#333333] transition-colors cursor-pointer w-fit"
              >
                Done Reading
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
