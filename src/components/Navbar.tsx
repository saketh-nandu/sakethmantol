import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'journey', label: 'Journey' },
    { id: 'projects', label: 'Projects' },
    { id: 'creative', label: 'Creative' },
    { id: 'skills', label: 'Skills' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'journal', label: 'Journal' },
    { id: 'music', label: 'Music' },
    { id: 'research', label: 'Research' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FFFFFF] border-b border-[#ECECEC] py-4 shadow-xs'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Left: Monogram Logo SM */}
          <button
            onClick={() => handleItemClick('hero')}
            className="group flex items-center gap-2 text-left cursor-pointer focus:outline-none"
            aria-label="Saketh Mantol Home"
          >
            <span className="font-display font-extrabold text-xl tracking-tighter text-[#111111] group-hover:opacity-70 transition-opacity">
              SM
            </span>
            <span className="hidden sm:inline-block text-xs font-mono uppercase tracking-widest text-[#555555] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              • Saketh Mantol
            </span>
          </button>

          {/* Center: Nothing (Strict layout rule) */}
          <div className="hidden md:block"></div>

          {/* Right: Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-sans-body tracking-tight">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`relative py-1 transition-colors cursor-pointer focus:outline-none ${
                    isActive ? 'text-[#111111] font-semibold' : 'text-[#555555] hover:text-[#111111]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#111111]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#111111] hover:text-[#555555] cursor-pointer focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[90] bg-[#FFFFFF] pt-24 px-8 pb-12 flex flex-col justify-between md:hidden"
          >
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-widest text-[#555555] font-mono mb-4">
                Navigation
              </p>
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item.id)}
                    className="text-left font-serif-editorial text-3xl font-light text-[#111111] hover:pl-2 transition-all cursor-pointer"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-[#ECECEC] pt-6 flex justify-between items-center text-xs text-[#555555]">
              <span>Saketh Mantol</span>
              <span>Director • Developer</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
