/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { JourneySection } from './components/JourneySection';
import { ProjectsSection } from './components/ProjectsSection';
import { CreativeSection } from './components/CreativeSection';
import { SkillsSection } from './components/SkillsSection';
import { GallerySection } from './components/GallerySection';
import { JournalSection } from './components/JournalSection';
import { MusicSection } from './components/MusicSection';
import { ResearchSection } from './components/ResearchSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProtectionOverlay } from './components/ProtectionOverlay';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'journey', 'projects', 'creative', 'skills', 'gallery', 'journal', 'music', 'research', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#111111] font-sans-body selection:bg-[#111111] selection:text-[#FFFFFF] antialiased">
      {/* Sticky Header */}
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

      {/* Main Page Sections */}
      <main className="w-full overflow-hidden">
        <HeroSection onScrollClick={() => scrollToSection('about')} />
        <AboutSection />
        <JourneySection />
        <ProjectsSection />
        <CreativeSection />
        <SkillsSection />
        <GallerySection />
        <JournalSection />
        <MusicSection />
        <ResearchSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Content Protection Overlay */}
      <ProtectionOverlay />
    </div>
  );
}
