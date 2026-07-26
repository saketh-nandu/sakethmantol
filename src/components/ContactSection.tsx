import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, ArrowUpRight, CheckCircle2, Send } from 'lucide-react';
import { SectionVideoPlacement } from './SectionVideoPlacement';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const contactVideo = new URL('../../assets/contact us climbling.mp4', import.meta.url).href;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative w-full bg-[#FFFFFF] py-28 sm:py-36 border-t border-[#ECECEC] overflow-hidden">
      <div className="hidden lg:block">
        <SectionVideoPlacement
          sectionId="contact"
          src={contactVideo}
          alt="Contact section video"
          label="Contact Video"
          placementConfigUrl="/contact-climbing-placement.json"
          fileName="contact-climbing-placement.json"
          defaultPlacement={{ x: 58, y: 16, width: 30, height: 42 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Connections Content */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-10 text-left"
          >
            {/* Header */}
            <div className="space-y-4">
              <span className="text-xs uppercase font-mono tracking-widest text-[#555555]">
                08 / Connections
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#111111] leading-tight hover:translate-x-3 transition-transform duration-300 inline-block cursor-pointer">
                Let's build something meaningful.
              </h2>
              <p className="font-display font-medium text-lg sm:text-xl text-[#555555] pt-2">
                Open for research collaborations, AI product engineering, language design discussions, and cinematic projects.
              </p>
            </div>

            {/* Email Badge */}
            <div>
              <a
                href="mailto:nandusaketh5@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#111111] text-[#FFFFFF] font-mono text-sm sm:text-base tracking-wider hover:bg-[#333333] transition-colors cursor-pointer"
              >
                <Mail size={16} />
                <span>nandusaketh5@gmail.com</span>
                <ArrowUpRight size={16} />
              </a>
            </div>

            {/* Direct Contact Form */}
            <div className="pt-8 border-t border-[#ECECEC]">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 bg-[#FAFAFA] border border-[#ECECEC] space-y-3 text-left"
                >
                  <CheckCircle2 size={32} className="text-[#111111]" />
                  <h3 className="font-heading text-2xl text-[#111111]">Message Received</h3>
                  <p className="font-sans-body text-sm text-[#555555] font-light">
                    Thank you for reaching out. Saketh will read your note and respond shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <span className="block text-xs font-mono uppercase tracking-widest text-[#555555] mb-4">
                    Or Send a Direct Note
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full bg-[#FAFAFA] border border-[#ECECEC] px-4 py-3 text-xs font-sans-body text-[#111111] placeholder-[#555555] focus:outline-none focus:border-[#111111]"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full bg-[#FAFAFA] border border-[#ECECEC] px-4 py-3 text-xs font-sans-body text-[#111111] placeholder-[#555555] focus:outline-none focus:border-[#111111]"
                    />
                  </div>

                  <textarea
                    rows={4}
                    placeholder="Share your thoughts, project scope, or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="w-full bg-[#FAFAFA] border border-[#ECECEC] px-4 py-3 text-xs font-sans-body text-[#111111] placeholder-[#555555] focus:outline-none focus:border-[#111111]"
                  />

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#FFFFFF] border border-[#ECECEC] text-[#111111] hover:bg-[#111111] hover:text-[#FFFFFF] text-xs font-mono uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send size={14} />
                    <span>Transmit Message</span>
                  </button>
                </form>
              )}
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-[#ECECEC] flex flex-wrap items-center gap-8 text-xs font-mono text-[#555555]">
              <a
                href="https://github.com/saketh-nandu"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#111111] transition-colors flex items-center gap-2"
              >
                <Github size={14} />
                <span>GitHub</span>
              </a>
              <a
                href="https://in.linkedin.com/in/sakethmantol"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#111111] transition-colors flex items-center gap-2"
              >
                <Linkedin size={14} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://x.com/saketh_mantol"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#111111] transition-colors flex items-center gap-2"
              >
                {/* X (formerly Twitter) logo */}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.261 5.635 5.903-5.635Zm-1.161 17.52h1.833L7.084 4.126H5.117Z" />
                </svg>
                <span>X</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Typography Statement - Hidden on mobile/tablet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:flex lg:col-span-5 h-full flex-col justify-center"
          >
            <div className="relative w-full aspect-[4/5] bg-[#111111] border border-[#111111] p-8 sm:p-10 md:p-12 flex flex-col justify-center items-start text-left hover:bg-[#1A1A1A] transition-all">
              <span className="text-xs font-mono uppercase tracking-[0.22em] text-[#D4D4D4]">
                choose what u want
              </span>
              <h3 className="mt-5 font-heading text-4xl xl:text-5xl 2xl:text-6xl leading-[0.95] font-extrabold tracking-tight text-[#FFFFFF] uppercase">
                DIRECTOR OR DEVELOPER
              </h3>
              <p className="mt-5 max-w-sm font-sans-body text-sm text-[#E5E5E5] font-light leading-relaxed">
                Build with vision, or direct with story. The choice shapes the journey.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
