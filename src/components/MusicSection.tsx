import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MUSIC_TRACKS } from '../data/portfolioData';
import { MusicTrack } from '../types';
import { Play, Pause, Music2, ArrowRight } from 'lucide-react';
import { SectionVideoPlacement } from './SectionVideoPlacement';

export const MusicSection: React.FC = () => {
  const [activeTrackId, setActiveTrackId] = useState<string | null>(null);
  const [playing, setPlaying] = useState(false);
  const headphonesVideo = new URL('../../assets/headphones.mp4', import.meta.url).href;

  const togglePlayback = (track: MusicTrack) => {
    if (activeTrackId === track.id && playing) {
      setPlaying(false);
      return;
    }

    setActiveTrackId(track.id);
    setPlaying(true);
  };

  return (
    <section id="music" className="relative w-full bg-[#FAFAFA] py-28 sm:py-36 border-t border-[#ECECEC] overflow-hidden">
      <div className="hidden lg:block">
        <SectionVideoPlacement
          sectionId="music"
          src={headphonesVideo}
          alt="Music section video"
          label="Music Video"
          placementConfigUrl="/music-headphones-placement.json"
          fileName="music-headphones-placement.json"
          defaultPlacement={{ x: -0.31, y: 5.2, width: 55.0, height: 20.74 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-12 md:mb-16">
          <div className="hidden lg:block lg:col-span-5" style={{ minHeight: '380px' }} />

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-4"
          >
            <span className="text-xs uppercase font-mono tracking-widest text-[#555555]">
              08 / Music Concepts
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#111111] hover:translate-x-3 transition-transform duration-300 inline-block cursor-pointer">
              Music Concepts
            </h2>
            <p className="font-sans-body text-base text-[#555555] font-light leading-relaxed max-w-2xl pt-2">
              A curated set of playable audio concepts for cinematic, atmospheric, and narrative-driven moods.
            </p>
          </motion.div>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {MUSIC_TRACKS.map((track, index) => {
            const isActive = activeTrackId === track.id && playing;
            return (
              <motion.article
                key={track.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="group bg-[#FFFFFF] border border-[#ECECEC] overflow-hidden shadow-[0_10px_40px_rgba(17,17,17,0.04)]"
              >
                <div className={`relative ${track.aspectRatio ?? 'aspect-[4/3]'} bg-gradient-to-br ${track.accent} p-6 flex items-end justify-between`}>
                  <div className="text-[#FFFFFF]">
                    <p className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-80">Audio Concept</p>
                    <h3 className="font-heading text-2xl mt-2">{track.title}</h3>
                  </div>
                  <button
                    onClick={() => togglePlayback(track)}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-sm text-white transition-transform hover:scale-105"
                    aria-label={`Play ${track.title}`}
                  >
                    {isActive ? <Pause size={18} /> : <Play size={18} />}
                  </button>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-[#555555]">
                    <Music2 size={14} />
                    <span>{track.subtitle}</span>
                  </div>
                  <p className="font-sans-body text-sm text-[#555555] leading-relaxed">{track.description}</p>

                  <div className="rounded-lg border border-[#ECECEC] bg-[#FAFAFA] p-3">
                    <audio controls className="w-full" preload="metadata">
                      <source src={track.fileUrl} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
