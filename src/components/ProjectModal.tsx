import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { X, ExternalLink, Github, Code, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-[#111111]/60 backdrop-blur-sm flex justify-center items-start p-4 sm:p-6 md:p-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl bg-[#FFFFFF] border border-[#ECECEC] shadow-2xl overflow-hidden my-auto"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 bg-[#FFFFFF]/90 backdrop-blur-md border-b border-[#ECECEC] px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-widest bg-[#FAFAFA] border border-[#ECECEC] text-[#555555]">
                {project.category}
              </span>
              <span className="text-xs font-mono text-[#555555] hidden sm:inline-block">
                • {project.title}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#111111] hover:bg-[#FAFAFA] transition-colors cursor-pointer focus:outline-none"
              aria-label="Close project modal"
            >
              <X size={20} />
            </button>
          </div>

          {/* Modal Main Body */}
          <div className="p-6 sm:p-10 md:p-14 space-y-12 max-h-[82vh] overflow-y-auto no-scrollbar">
            {/* Title & Tagline */}
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#555555]">
                {project.subtitle}
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#111111] leading-tight">
                {project.title}
              </h2>
              <p className="font-display font-medium text-xl sm:text-2xl text-[#333333] max-w-3xl">
                "{project.tagline}"
              </p>
            </div>

            {/* Hero Image — only shown when project has one */}
            {project.heroImage && (
              <div className="w-full aspect-[16/9] bg-[#FAFAFA] border border-[#ECECEC] overflow-hidden">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Links Bar */}
            <div className="flex flex-wrap items-center gap-4 pt-2 border-b border-[#ECECEC] pb-8">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111111] text-[#FFFFFF] text-xs font-mono uppercase tracking-wider hover:bg-[#333333] transition-colors cursor-pointer"
                >
                  <Github size={14} />
                  <span>View Source Code</span>
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FFFFFF] border border-[#ECECEC] text-[#111111] text-xs font-mono uppercase tracking-wider hover:bg-[#FAFAFA] transition-colors cursor-pointer"
                >
                  <ExternalLink size={14} />
                  <span>Live Application</span>
                </a>
              )}
            </div>

            {/* Overview / Description */}
            <div className="space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#555555]">
                01 / Executive Overview
              </h3>
              <p className="font-sans-body text-base sm:text-lg leading-relaxed text-[#111111] font-light">
                {project.description}
              </p>
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-[#ECECEC]">
              <div className="bg-[#FAFAFA] border border-[#ECECEC] p-6 space-y-3">
                <h4 className="font-heading text-xl text-[#111111]">The Core Problem</h4>
                <p className="font-sans-body text-sm text-[#555555] leading-relaxed">
                  {project.problem}
                </p>
              </div>
              <div className="bg-[#FAFAFA] border border-[#ECECEC] p-6 space-y-3">
                <h4 className="font-heading text-xl text-[#111111]">The Architectural Solution</h4>
                <p className="font-sans-body text-sm text-[#555555] leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* SUSA Code Snippet (If available) */}
            {project.codeSnippet && (
              <div className="space-y-3 pt-6 border-t border-[#ECECEC]">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#555555]">
                    Code Syntax Preview — {project.codeSnippet.filename}
                  </span>
                  <span className="text-[10px] font-mono text-[#555555]">
                    {project.codeSnippet.language}
                  </span>
                </div>
                <div className="bg-[#111111] text-[#FAFAFA] p-6 font-mono text-xs sm:text-sm overflow-x-auto leading-relaxed border border-[#333333]">
                  <pre>{project.codeSnippet.code}</pre>
                </div>
              </div>
            )}

            {/* System Architecture */}
            <div className="space-y-4 pt-6 border-t border-[#ECECEC]">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#555555]">
                02 / System Architecture
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.architecture.map((arch, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-3 bg-[#FAFAFA] border border-[#ECECEC]">
                    <CheckCircle2 size={16} className="text-[#111111] mt-0.5 shrink-0" />
                    <span className="font-sans-body text-sm text-[#111111]">{arch}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies Grid */}
            <div className="space-y-4 pt-6 border-t border-[#ECECEC]">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#555555]">
                03 / Engineering Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-[#FAFAFA] border border-[#ECECEC] text-xs font-mono text-[#111111]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Challenges & Roadmap */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-[#ECECEC]">
              <div className="space-y-3">
                <h4 className="font-heading text-xl text-[#111111]">Technical Challenges Handled</h4>
                <ul className="space-y-2 font-sans-body text-xs sm:text-sm text-[#555555]">
                  {project.challenges.map((c, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#111111] font-bold">•</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-heading text-xl text-[#111111]">Future Roadmap</h4>
                <ul className="space-y-2 font-sans-body text-xs sm:text-sm text-[#555555]">
                  {project.futureRoadmap.map((r, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <ArrowRight size={14} className="text-[#111111] shrink-0 mt-1" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Close Modal Footer */}
            <div className="pt-8 border-t border-[#ECECEC] flex justify-end">
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-[#111111] text-[#FFFFFF] text-xs font-mono uppercase tracking-wider hover:bg-[#333333] transition-colors cursor-pointer"
              >
                Close Specification
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
