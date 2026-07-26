import React from 'react';
import { motion } from 'motion/react';
import { SKILL_GROUPS } from '../data/portfolioData';

// Simple SVG logos for known technologies
const SKILL_LOGOS: Record<string, React.ReactNode> = {
  'Python': (
    <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="none">
      <path d="M11.998 2C6.48 2 6.818 4.363 6.818 4.363L6.824 6.81h5.27v.728H4.527S2 7.228 2 12.818c0 5.59 3.09 5.394 3.09 5.394h1.846v-2.595s-.1-3.09 3.04-3.09h5.24s2.94.047 2.94-2.843V5.406S18.625 2 11.998 2zm-2.91 1.682a.95.95 0 0 1 .953.948.95.95 0 0 1-.952.948.95.95 0 0 1-.953-.948.95.95 0 0 1 .952-.948z" fill="#3776AB"/>
      <path d="M12.002 22c5.518 0 5.18-2.363 5.18-2.363l-.006-2.447h-5.27v-.728h7.567S22 16.772 22 11.182c0-5.59-3.09-5.394-3.09-5.394h-1.846v2.595s.1 3.09-3.04 3.09h-5.24s-2.94-.047-2.94 2.843v4.278S5.375 22 12.002 22zm2.91-1.682a.95.95 0 0 1-.953-.948.95.95 0 0 1 .952-.948.95.95 0 0 1 .953.948.95.95 0 0 1-.952.948z" fill="#FFD43B"/>
    </svg>
  ),
  'Java': (
    <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="none">
      <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218" fill="#E76F00"/>
      <path d="M13.439 11.374c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0 0-8.216 2.051-4.292 6.573" fill="#E76F00"/>
      <path d="M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118" fill="#E76F00"/>
      <path d="M14.401 2S16.7 4.3 12.208 7.73c-3.634 2.87-.829 4.507-.001 6.375-2.122-1.914-3.677-3.596-2.632-5.164C11.113 6.753 15.368 5.642 14.401 2" fill="#E76F00"/>
      <path d="M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0 0 .553.457 3.393.639" fill="#E76F00"/>
    </svg>
  ),
  'TypeScript': (
    <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="none">
      <rect width="24" height="24" rx="3" fill="#3178C6"/>
      <path d="M13.83 15.83v1.73c.28.14.62.25 1 .32.4.07.81.1 1.24.1.42 0 .82-.04 1.2-.13.38-.09.71-.23.99-.43.28-.2.5-.46.67-.78.16-.32.24-.72.24-1.19 0-.34-.05-.64-.15-.89-.1-.25-.25-.48-.44-.67a3.2 3.2 0 0 0-.68-.52 7.7 7.7 0 0 0-.88-.43 6.5 6.5 0 0 1-.58-.26 1.6 1.6 0 0 1-.38-.26.96.96 0 0 1-.21-.3.9.9 0 0 1-.07-.37c0-.13.03-.24.08-.35.05-.1.13-.19.23-.26.1-.07.22-.13.37-.17.14-.04.3-.06.48-.06.13 0 .26.01.4.04.14.02.27.06.4.11.13.05.25.12.36.2.11.08.2.17.28.28v-1.6a3.9 3.9 0 0 0-.87-.24 6.1 6.1 0 0 0-1.08-.09c-.41 0-.8.05-1.17.14-.37.09-.7.24-.98.44-.28.2-.5.46-.66.77-.16.31-.24.69-.24 1.13 0 .56.15 1.04.46 1.43.31.39.78.72 1.42.99l.6.26c.19.08.35.17.49.26.14.09.25.19.33.3.08.11.12.24.12.38 0 .13-.02.25-.07.36-.05.11-.13.2-.23.28-.1.08-.24.14-.4.18-.16.04-.35.06-.56.06-.37 0-.73-.07-1.07-.2a3.4 3.4 0 0 1-.92-.57zm-2.67-4.3H9v-1.4H5.5v1.4H3.35v9.28h1.9V13.5H7.2v7.31h1.9V13.5h2.06v-2z" fill="white"/>
    </svg>
  ),
  'JavaScript': (
    <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="none">
      <rect width="24" height="24" fill="#F7DF1E"/>
      <path d="M6.284 19.513l1.578-.955c.304.539.581.994 1.246.994.638 0 1.04-.249 1.04-1.218V12.14h1.938v6.22c0 2.007-1.176 2.921-2.894 2.921-1.551 0-2.451-.804-2.908-1.768zm6.025-.194l1.579-.969c.415.677.955 1.176 1.91 1.176.802 0 1.314-.401 1.314-.955 0-.663-.526-.898-1.412-1.286l-.484-.208c-1.399-.595-2.328-1.343-2.328-2.921 0-1.454 1.107-2.562 2.839-2.562 1.232 0 2.117.429 2.756 1.551l-1.51.97c-.332-.595-.69-.829-1.246-.829-.567 0-.928.36-.928.829 0 .58.36.815 1.19 1.176l.484.208c1.648.705 2.577 1.426 2.577 3.046 0 1.745-1.37 2.7-3.211 2.7-1.8 0-2.963-.857-3.53-1.926z" fill="#323330"/>
    </svg>
  ),
  'Dart': (
    <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="none">
      <path d="M4.105 18.188L2 13.666l5.96-5.96 4.556 1.08L4.105 18.188zm-.663-4.94l.507 2.17 6.496-6.497-1.836-.435-5.167 4.762z" fill="#01579B"/>
      <path d="M6.612 20.785l-.795-.795 1.74-1.74.795.795-1.74 1.74zm1.587 1.587l-.795-.795 6.71-6.71.795.795-6.71 6.71z" fill="#40C4FF"/>
      <path d="M8.2 22.372c.495.495 1.155.628 1.482.3l6.04-6.041c.328-.328.195-.987-.3-1.482l-4.524-4.524-7.222 7.222L8.2 22.372z" fill="#40C4FF"/>
      <path d="M9.682 8.385L15.722 2.3c.328-.328.195-.987-.3-1.482L10.9.818C10.405.323 9.745.19 9.418.518l-6.04 6.04c-.328.329-.195.988.3 1.483l4.524 4.523.742-.742-5.266-5.265 5.3-5.3 3.722 1 .7 3.722-3.718 3.718.742.742 1.26-1.26" fill="#29B6F6"/>
      <path d="M9.682 8.385l.742.742 5.266 5.265L14.94 15.1l-.742-.742-5.266-5.266.75-.707z" fill="#01579B"/>
    </svg>
  ),
  'C / C++': (
    <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="none">
      <path d="M10.5 15.97l.41 2.44c-.26.14-.68.27-1.24.39-.57.13-1.24.2-2.01.2-2.21-.04-3.87-.7-4.98-1.96C1.58 15.77 1 14.16 1 12.1c.05-2.29.72-4.08 2.02-5.38C4.32 5.42 5.96 4.75 7.9 4.75c.75 0 1.4.07 1.94.2.54.13.94.27 1.18.4l-.41 2.48-.76-.28c-.29-.09-.68-.13-1.18-.13-1.17.02-2.08.41-2.74 1.17-.66.76-1 1.84-1.03 3.22.02 1.32.35 2.37.99 3.14.65.78 1.56 1.18 2.74 1.2l1.18-.13.69-.31z" fill="#00599C"/>
      <path d="M13.38 7.91H15V6.27h1.58v1.64h1.57v1.56h-1.57v1.64H15V9.47h-1.62V7.91zm5.33 0h1.62V6.27H22v1.64h-1.57v1.56H22V10.8h-1.57v-1.33h-1.62V7.91z" fill="#00599C"/>
    </svg>
  ),
  'SUSA Scripting': (
    <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="none">
      <rect width="24" height="24" rx="4" fill="#111111"/>
      <text x="4" y="17" fontSize="11" fontWeight="bold" fill="white" fontFamily="monospace">S</text>
    </svg>
  ),
  'React': (
    <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="none">
      <circle cx="12" cy="12" r="2.05" fill="#61DAFB"/>
      <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.2" fill="none"/>
      <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)"/>
    </svg>
  ),
  'Python (AI/ML)': (
    <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="none">
      <path d="M11.998 2C6.48 2 6.818 4.363 6.818 4.363L6.824 6.81h5.27v.728H4.527S2 7.228 2 12.818c0 5.59 3.09 5.394 3.09 5.394h1.846v-2.595s-.1-3.09 3.04-3.09h5.24s2.94.047 2.94-2.843V5.406S18.625 2 11.998 2zm-2.91 1.682a.95.95 0 0 1 .953.948.95.95 0 0 1-.952.948.95.95 0 0 1-.953-.948.95.95 0 0 1 .952-.948z" fill="#3776AB"/>
      <path d="M12.002 22c5.518 0 5.18-2.363 5.18-2.363l-.006-2.447h-5.27v-.728h7.567S22 16.772 22 11.182c0-5.59-3.09-5.394-3.09-5.394h-1.846v2.595s.1 3.09-3.04 3.09h-5.24s-2.94-.047-2.94 2.843v4.278S5.375 22 12.002 22zm2.91-1.682a.95.95 0 0 1-.953-.948.95.95 0 0 1 .952-.948.95.95 0 0 1 .953.948.95.95 0 0 1-.952.948z" fill="#FFD43B"/>
    </svg>
  ),
  'Docker & Containers': (
    <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="none">
      <path d="M13.14 9.27h1.93v1.86h-1.93zm-2.27 0h1.93v1.86h-1.93zm-2.27 0h1.93v1.86H8.6zm2.27-2.18h1.93v1.86h-1.93zm2.27 0h1.93v1.86h-1.93zm2.27 2.18h1.93v1.86h-1.93zm4.31 1.67c-.05-.38-.26-.7-.6-.94l-.38-.24-.15.42c-.12.34-.18.7-.16 1.06.02.21.1.54.29.77-.28.15-.66.19-1.01.19H3.19c-.25.9-.2 2.36.73 3.32.71.75 1.76 1.13 3.13 1.13 2.97 0 5.18-1.37 6.2-3.86h.54c.88 0 2.03-.02 2.54-.93.03-.04.12-.23.15-.27l-.47-.65z" fill="#2496ED"/>
      <path d="M6.38 11.13H4.45V9.27h1.93v1.86zm2.27 0H6.72V9.27h1.93v1.86zm2.27 0H9V9.27h1.93v1.86zm-4.54-2.18H4.45V7.09h1.93v1.86zm2.27 0H6.72V7.09h1.93v1.86z" fill="#2496ED"/>
    </svg>
  ),
  'Git': (
    <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="none">
      <path d="M23.546 10.93L13.067.452a1.55 1.55 0 0 0-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 0 1 2.327 2.341l2.658 2.66a1.838 1.838 0 1 1-1.1 1.059l-2.48-2.48v6.514a1.838 1.838 0 1 1-1.512-.043V9.117a1.838 1.838 0 0 1-.997-2.414L7.614 3.964 .45 11.127a1.55 1.55 0 0 0 0 2.187L10.93 23.796a1.55 1.55 0 0 0 2.187 0l10.43-10.43a1.55 1.55 0 0 0 0-2.186" fill="#F05032"/>
    </svg>
  ),
  'Linux Administration': (
    <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="none">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-8v4h4l-5 8z" fill="#FCC624"/>
    </svg>
  ),
  'Figma': (
    <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="none">
      <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" fill="#0ACF83"/>
      <path d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z" fill="#A259FF"/>
      <path d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z" fill="#F24E1E"/>
      <path d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z" fill="#FF7262"/>
      <path d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z" fill="#1ABCFE"/>
    </svg>
  ),
  'Node.js': (
    <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="none">
      <path d="M12 1.85L2 7.4v9.2l10 5.55 10-5.55V7.4L12 1.85zm7.75 14.1L12 20.3l-7.75-4.35V8.05L12 3.7l7.75 4.35v7.9z" fill="#339933"/>
      <path d="M12 6.35L7.25 9v5.3L12 16.95l4.75-2.65V9L12 6.35zm3.5 8L12 15.7l-3.5-1.35V9.65L12 8.3l3.5 1.35v4.7z" fill="#339933"/>
    </svg>
  ),
  'PyTorch': (
    <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="none">
      <path d="M12.005 0L4.952 7.053a9.865 9.865 0 0 0 0 14.012 9.866 9.866 0 0 0 14.012 0 9.866 9.866 0 0 0 0-14.012L16.526 9.48a4.97 4.97 0 0 1 0 7.032 4.97 4.97 0 0 1-7.032 0 4.97 4.97 0 0 1 0-7.032l2.511-2.511L12.005 0z" fill="#EE4C2C"/>
      <circle cx="16.707" cy="7.293" r="1.414" fill="#EE4C2C"/>
    </svg>
  ),
  'Version Control': (
    <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="none">
      <path d="M23.546 10.93L13.067.452a1.55 1.55 0 0 0-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 0 1 2.327 2.341l2.658 2.66a1.838 1.838 0 1 1-1.1 1.059l-2.48-2.48v6.514a1.838 1.838 0 1 1-1.512-.043V9.117a1.838 1.838 0 0 1-.997-2.414L7.614 3.964.45 11.127a1.55 1.55 0 0 0 0 2.187L10.93 23.796a1.55 1.55 0 0 0 2.187 0l10.43-10.43a1.55 1.55 0 0 0 0-2.186" fill="#F05032"/>
    </svg>
  ),
};


export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="w-full bg-[#FFFFFF] py-28 sm:py-36 border-t border-[#ECECEC]">
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
              05 / Competencies
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#111111] mt-3 hover:translate-x-3 transition-transform duration-300 inline-block cursor-pointer">
              Craft & Capabilities
            </h2>
          </div>
          <p className="max-w-md font-sans-body text-sm sm:text-base text-[#555555] font-light leading-relaxed">
            No superficial percentage bars or rating stars. Pure typographic organization of tools, architectures, and creative domains.
          </p>
        </motion.div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_GROUPS.map((group, groupIdx) => (
            <motion.div
              key={groupIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: groupIdx * 0.08 }}
              className="bg-[#FAFAFA] border border-[#ECECEC] p-8 space-y-6 hover:border-[#111111]/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between border-b border-[#ECECEC] pb-4">
                <h3 className="font-heading text-xl text-[#111111] font-bold tracking-tight hover:translate-x-2 transition-transform duration-200 inline-block cursor-pointer">
                  {group.category}
                </h3>
                <span className="text-xs font-mono text-[#555555]">0{groupIdx + 1}</span>
              </div>

              <ul className="space-y-4">
                {group.skills.map((skill, skillIdx) => {
                  const logo = SKILL_LOGOS[skill.name];
                  return (
                    <li key={skillIdx} className="group/item flex flex-col space-y-0.5">
                      <div className="flex items-center gap-2">
                        {logo && (
                          <span className="opacity-80 group-hover/item:opacity-100 transition-opacity">
                            {logo}
                          </span>
                        )}
                        <span className="font-display font-semibold text-base text-[#111111] group-hover/item:translate-x-1 transition-transform duration-200 cursor-pointer">
                          {skill.name}
                        </span>
                      </div>
                      {skill.note && (
                        <span className="font-sans-body text-xs text-[#555555] font-light pl-6">
                          {skill.note}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
