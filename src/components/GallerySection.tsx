import React, { useState } from 'react';
import { motion } from 'motion/react';
import { GALLERY_ITEMS } from '../data/portfolioData';
import { GalleryItem } from '../types';
import { GalleryModal } from './GalleryModal';
import { Maximize2 } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Concept Art', 'Devaverse', 'Stories'];

  const filteredItems = filter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === filter);

  const col1 = filteredItems.filter((_, i) => i % 3 === 0);
  const col2 = filteredItems.filter((_, i) => i % 3 === 1);
  const col3 = filteredItems.filter((_, i) => i % 3 === 2);

  const getCardHeight = (idx: number, colOffset: number) => {
    const base = [44, 56, 64, 72, 80, 88][idx % 6];
    const offset = colOffset % 2 === 0 ? 0 : 6;
    return `${base + offset}px`;
  };

  const renderCard = (item: GalleryItem, idx: number, colOffset: number) => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, y: 30 + colOffset * 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: idx * 0.07 + colOffset * 0.04 }}
      onClick={() => setSelectedImage(item)}
      className="group relative bg-[#111111] overflow-hidden cursor-pointer select-none mb-5"
      style={{
        transform: `rotate(${((idx + colOffset) % 2 === 0 ? 1 : -1) * ((idx % 3) * 0.35)}deg)`,
        minHeight: getCardHeight(idx, colOffset),
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
      whileHover={{
        scale: 1.03,
        rotate: 0,
        zIndex: 10,
        boxShadow: '0 20px 60px rgba(0,0,0,0.35)',
      }}
    >
      {/* Image */}
      <div className="w-full h-full overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
          style={{ display: 'block' }}
        />
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/95 via-[#111111]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-between">
        <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest text-[#FAFAFA]/60">
          <span>{item.category}</span>
          <Maximize2 size={14} className="text-[#FAFAFA]/80" />
        </div>
        <div className="space-y-1">
          <h3 className="font-heading text-lg font-bold tracking-tight text-[#FFFFFF] translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            {item.title}
          </h3>
          {item.location && (
            <p className="font-sans-body text-[11px] text-[#ECECEC]/70 font-light">
              {item.location} · {item.date}
            </p>
          )}
        </div>
      </div>

      {/* Category tag always visible */}
      <div className="absolute top-3 left-3 px-2 py-0.5 bg-[#111111]/70 text-[#FAFAFA] text-[9px] font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {item.category}
      </div>
    </motion.div>
  );

  return (
    <section id="gallery" className="w-full bg-[#111111] py-28 sm:py-36 border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-[#666666]">
              06 / Visual Archives
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#FFFFFF] mt-3 hover:translate-x-3 transition-transform duration-300 inline-block cursor-pointer">
              Gallery
            </h2>
          </div>
          <p className="max-w-md font-sans-body text-sm sm:text-base text-[#888888] font-light leading-relaxed">
            Concept art, world-building visuals, and cinematic design explorations from across Saketh's creative universes.
          </p>
        </motion.div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-[#222222] pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer focus:outline-none ${
                filter === cat
                  ? 'bg-[#FFFFFF] text-[#111111]'
                  : 'bg-transparent text-[#666666] border border-[#333333] hover:text-[#FFFFFF] hover:border-[#FFFFFF]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Messy Masonry 3-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 items-start">
          {/* Column 1 */}
          <div className="flex flex-col gap-0 sm:mt-0">
            {col1.map((item, idx) => renderCard(item, idx, 0))}
          </div>
          {/* Column 2 — offset down for messy feel */}
          <div className="flex flex-col gap-0 lg:mt-10">
            {col2.map((item, idx) => renderCard(item, idx, 1))}
          </div>
          {/* Column 3 — offset up slightly */}
          <div className="flex flex-col gap-0 lg:mt-4">
            {col3.map((item, idx) => renderCard(item, idx, 2))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <GalleryModal item={selectedImage} onClose={() => setSelectedImage(null)} />
    </section>
  );
};
