import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GalleryItem } from '../types';
import { X, MapPin, Calendar } from 'lucide-react';

interface GalleryModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-[#111111]/80 backdrop-blur-md flex justify-center items-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-5xl w-full bg-[#FFFFFF] border border-[#ECECEC] shadow-2xl overflow-hidden my-auto"
        >
          {/* Header */}
          <div className="bg-[#FFFFFF] border-b border-[#ECECEC] px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-widest bg-[#111111] text-[#FFFFFF]">
                {item.category}
              </span>
              <span className="text-xs font-mono text-[#555555]">
                {item.title}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#111111] hover:bg-[#FAFAFA] transition-colors cursor-pointer focus:outline-none"
              aria-label="Close image lightbox"
            >
              <X size={20} />
            </button>
          </div>

          {/* Full Image Display */}
          <div className="bg-[#FAFAFA] max-h-[75vh] flex items-center justify-center p-4 sm:p-8 overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="max-h-[65vh] w-auto max-w-full object-contain border border-[#ECECEC]"
            />
          </div>

          {/* Footer Meta */}
          <div className="bg-[#FFFFFF] border-t border-[#ECECEC] p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#555555]">
            <div className="flex items-center gap-4">
              {item.location && (
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-[#111111]" />
                  <span>{item.location}</span>
                </span>
              )}
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-[#111111]" />
                <span>{item.date}</span>
              </span>
            </div>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-[#111111] text-[#FFFFFF] text-[11px] font-mono uppercase tracking-wider hover:bg-[#333333] transition-colors cursor-pointer"
            >
              Close Lightbox
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
