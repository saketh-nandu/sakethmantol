import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { SectionVideoPlacement } from './SectionVideoPlacement';
import { ArrowUpRight, Code, Layers, Sparkles, ExternalLink, Github } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const directionVideo = new URL('../../assets/project and story need to be change direction.mp4', import.meta.url).href;
  const susaLogo = new URL('../../assets/projects/susa logo.png', import.meta.url).href;

  const flagshipProject = PROJECTS[0]; // SUSA
  const secondaryProjects = PROJECTS.slice(1);

  return (
    <section id="projects" className="relative w-full bg-[#FFFFFF] py-28 sm:py-36 border-t border-[#ECECEC] overflow-hidden">
      <div className="hidden lg:block">
        <SectionVideoPlacement
          sectionId="projects"
          src={directionVideo}
          alt="Project section video"
          label="Project Video"
          placementConfigUrl="/projects-direction-placement.json"
          fileName="projects-direction-placement.json"
          defaultPlacement={{ x: 56, y: 16, width: 30, height: 38 }}
          flipHorizontal
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="relative z-10 mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <span className="text-xs uppercase font-mono tracking-widest text-[#555555]">
              03 / Selected Works
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#111111] mt-3 hover:translate-x-3 transition-transform duration-300 inline-block cursor-pointer">
              Software & Systems
            </h2>
            <p className="font-sans-body text-base text-[#555555] font-light leading-relaxed max-w-2xl pt-2">
              Every project represents a deep engineering undertaking — designed with precision, complete problem-solution architecture, and enduring craftsmanship.
            </p>

            <div className="pt-4 flex flex-wrap gap-6 text-xs font-mono text-[#555555]">
              <span className="flex items-center gap-1.5">
                <Code size={14} className="text-[#111111]" />
                <span>Compiler Systems</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Layers size={14} className="text-[#111111]" />
                <span>Distributed Storage</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles size={14} className="text-[#111111]" />
                <span>AI Engineering</span>
              </span>
            </div>
          </motion.div>
        </div>

        {/* FLAGSHIP HERO PROJECT: SUSA Programming Language */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="relative z-10 mb-20 bg-[#FAFAFA] border border-[#ECECEC] p-8 sm:p-12 md:p-16 hover:border-[#111111]/40 transition-all duration-300"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-widest bg-[#111111] text-[#FFFFFF]">
                  Flagship Ecosystem
                </span>
                <span className="text-xs font-mono text-[#555555]">• SUSA Scripting Architecture</span>
              </div>

              {/* SUSA Logo */}
              <div className="flex items-center gap-4">
                <img
                  src={susaLogo}
                  alt="SUSA Programming Language Logo"
                  className="h-14 w-auto object-contain"
                />
              </div>

              <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111] leading-tight hover:translate-x-2 transition-transform duration-200 cursor-pointer">
                {flagshipProject.title}
              </h3>

              <p className="font-display font-medium text-lg sm:text-xl text-[#333333]">
                "{flagshipProject.tagline}"
              </p>

              <p className="font-sans-body text-base text-[#555555] font-light leading-relaxed">
                {flagshipProject.description}
              </p>

              {/* Quick Tech Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {flagshipProject.technologies.slice(0, 5).map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-[#FFFFFF] border border-[#ECECEC] text-[11px] font-mono text-[#111111]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <button
                  onClick={() => setSelectedProject(flagshipProject)}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-[#111111] text-[#FFFFFF] text-xs font-mono uppercase tracking-wider hover:bg-[#333333] transition-colors cursor-pointer"
                >
                  <span>Explore Full SUSA Specification</span>
                  <ArrowUpRight size={16} />
                </button>
                {flagshipProject.github && (
                  <a
                    href={flagshipProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 border border-[#ECECEC] text-[#111111] text-xs font-mono uppercase tracking-wider hover:border-[#111111] transition-colors"
                  >
                    <Github size={14} />
                    <span>GitHub</span>
                  </a>
                )}
                {flagshipProject.link && (
                  <a
                    href={flagshipProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 border border-[#ECECEC] text-[#111111] text-xs font-mono uppercase tracking-wider hover:border-[#111111] transition-colors"
                  >
                    <ExternalLink size={14} />
                    <span>Website</span>
                  </a>
                )}
              </div>
            </div>

            {/* Right: Code Preview Card */}
            <div className="lg:col-span-5 bg-[#111111] border border-[#333333] p-6 text-[#FAFAFA] font-mono text-xs space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-[#333333] pb-3 text-[11px] text-[#555555]">
                <span>susa-compiler/examples/main.susa</span>
                <span className="text-[#FAFAFA]">SUSA v1.0</span>
              </div>
              <pre className="overflow-x-auto text-xs leading-relaxed text-[#ECECEC] whitespace-pre">
{`# If-else statements
LET age = 18
IF age >= 18:
START:
  PRINT "You are an adult"
END:
ELSE:
START:
  PRINT "You are a minor"
END:

# For loop example
LOOP i = 1 FOR 5 TIMES:
START:
  PRINT "Count: " + i
END:`}
              </pre>
              <div className="pt-2 border-t border-[#333333] flex items-center justify-between text-[10px] text-[#555555]">
                <span>✓ Lexer Tokenized</span>
                <span>✓ AST Parsed</span>
                <span>✓ Bytecode Ready</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* SECONDARY PROJECTS GRID */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {secondaryProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group bg-[#FAFAFA] border border-[#ECECEC] p-6 hover:border-[#111111]/40 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Title-only card — no demo images */}
                <div className="w-full aspect-[16/10] bg-[#111111] flex items-center justify-center overflow-hidden relative">
                  <span className="font-heading text-xl sm:text-2xl font-bold text-[#FFFFFF] tracking-tight text-center px-4 leading-tight group-hover:scale-105 transition-transform duration-300">
                    {project.title}
                  </span>
                  <div className="absolute inset-0 border border-[#333333] pointer-events-none" />
                </div>

                {/* Category */}
                <span className="inline-block text-[10px] font-mono uppercase tracking-widest text-[#555555]">
                  {project.category}
                </span>

                {/* Tagline */}
                <p className="font-sans-body text-xs sm:text-sm text-[#555555] line-clamp-3 leading-relaxed font-light">
                  {project.tagline}
                </p>
              </div>

              {/* Action Link Footer */}
              <div className="pt-6 mt-6 border-t border-[#ECECEC] flex items-center justify-between text-xs font-mono text-[#111111]">
                <div className="flex items-center gap-4">
                  <span>View Architecture</span>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-[#555555] hover:text-[#111111] transition-colors"
                    >
                      <Github size={12} />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA — replaces "Personal Projects" */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mt-16 border-t border-[#ECECEC] pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div className="space-y-1">
            <p className="font-heading text-xl font-bold text-[#111111] tracking-tight">
              For more projects, reach out to my GitHub.
            </p>
            <p className="text-xs font-mono text-[#555555]">
              Open source work, experiments, and ongoing builds.
            </p>
          </div>
          <a
            href="https://github.com/saketh-nandu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-[#111111] text-[#FFFFFF] text-xs font-mono uppercase tracking-wider hover:bg-[#333333] transition-colors whitespace-nowrap"
          >
            <Github size={14} />
            <span>github.com/saketh-nandu</span>
            <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>

      {/* Detail Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
