import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RESEARCH_PAPERS } from '../data/portfolioData';
import { FileText, FileType2, ArrowUpRight, X } from 'lucide-react';

export const ResearchSection: React.FC = () => {
  const [selectedPaper, setSelectedPaper] = useState<(typeof RESEARCH_PAPERS)[number] | null>(null);
  const [docxHtml, setDocxHtml] = useState<string>('');
  const [docxLoading, setDocxLoading] = useState(false);
  const [docxError, setDocxError] = useState<string>('');

  const getViewerUrl = (paper: (typeof RESEARCH_PAPERS)[number]) => {
    const absoluteUrl = new URL(paper.fileUrl, window.location.origin).toString();
    return absoluteUrl;
  };

  useEffect(() => {
    let isMounted = true;

    const loadDocx = async () => {
      if (!selectedPaper || selectedPaper.fileType !== 'docx') {
        setDocxHtml('');
        setDocxLoading(false);
        setDocxError('');
        return;
      }

      setDocxLoading(true);
      setDocxError('');
      setDocxHtml('');

      try {
        const response = await fetch(selectedPaper.fileUrl);
        if (!response.ok) {
          throw new Error('Unable to load document source.');
        }

        const arrayBuffer = await response.arrayBuffer();
        const mammoth = await import('mammoth/mammoth.browser');
        const result = await mammoth.convertToHtml({ arrayBuffer });

        if (isMounted) {
          setDocxHtml(result.value);
        }
      } catch (error) {
        if (isMounted) {
          setDocxError('Unable to render this DOCX file in-browser right now.');
        }
      } finally {
        if (isMounted) {
          setDocxLoading(false);
        }
      }
    };

    loadDocx();

    return () => {
      isMounted = false;
    };
  }, [selectedPaper]);

  return (
    <section id="research" className="w-full bg-[#FFFFFF] py-28 sm:py-36 border-t border-[#ECECEC]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-[#555555]">
              09 / Research & Concept Papers
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#111111] mt-3 hover:translate-x-3 transition-transform duration-300 inline-block cursor-pointer">
              Research & Papers
            </h2>
          </div>
          <p className="max-w-md font-sans-body text-sm sm:text-base text-[#555555] font-light leading-relaxed">
            Concept notes, research briefs, and long-form documents presented in a readable, journal-like experience.
          </p>
        </motion.div>

        <div className="divide-y divide-[#ECECEC] border-t border-b border-[#ECECEC]">
          {RESEARCH_PAPERS.map((paper, index) => (
            <motion.article
              key={paper.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group py-8 sm:py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-[#FAFAFA] px-4 transition-colors"
            >
              <div className="max-w-3xl space-y-3">
                <div className="flex items-center space-x-4 text-xs font-mono text-[#555555]">
                  <span>{paper.category}</span>
                  <span>•</span>
                  <span>{paper.year}</span>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl text-[#111111] group-hover:translate-x-2 group-hover:text-[#333333] transition-all duration-200 font-bold tracking-tight leading-tight">
                  {paper.title}
                </h3>

                <p className="font-sans-body text-sm text-[#555555] font-light leading-relaxed">
                  {paper.summary}
                </p>
              </div>

              <div className="flex items-center gap-4 shrink-0">
                <span className="flex items-center gap-1.5 text-xs font-mono text-[#555555]">
                  {paper.fileType === 'pdf' ? <FileText size={14} /> : <FileType2 size={14} />}
                  <span>{paper.fileType.toUpperCase()}</span>
                </span>
                <button
                  onClick={() => setSelectedPaper(paper)}
                  className="inline-flex items-center gap-2 rounded-full border border-[#ECECEC] px-4 py-2 text-xs font-mono uppercase tracking-wider text-[#111111] transition-colors hover:bg-[#111111] hover:text-[#FFFFFF]"
                >
                  <span>Read</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedPaper && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[130] flex items-center justify-center bg-[#111111]/80 px-3 py-4 sm:px-6 sm:py-8"
          >
            <motion.div
              initial={{ y: 20, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="relative flex h-full w-full max-w-6xl flex-col overflow-hidden rounded-none border border-[#ECECEC] bg-[#FFFFFF] shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-[#ECECEC] bg-[#FFFFFF] px-4 py-3 sm:px-6">
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#555555]">Read-only preview</p>
                  <h3 className="font-heading text-lg text-[#111111]">{selectedPaper.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedPaper(null)}
                  className="rounded-full p-2 text-[#111111] transition-colors hover:bg-[#FAFAFA]"
                  aria-label="Close document preview"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto bg-[#FAFAFA] p-2 sm:p-4">
                {selectedPaper.fileType === 'pdf' ? (
                  <iframe
                    src={getViewerUrl(selectedPaper)}
                    title={selectedPaper.title}
                    className="h-full min-h-[70vh] w-full border-0"
                  />
                ) : (
                  <div className="mx-auto w-full max-w-4xl bg-[#FFFFFF] border border-[#ECECEC] min-h-[70vh]">
                    {docxLoading && (
                      <div className="px-6 py-10 text-sm font-mono uppercase tracking-wider text-[#555555]">
                        Rendering document...
                      </div>
                    )}

                    {!docxLoading && docxError && (
                      <div className="px-6 py-10 text-sm text-[#b91c1c] font-sans-body">
                        {docxError}
                      </div>
                    )}

                    {!docxLoading && !docxError && (
                      <article
                        className="docx-content px-6 py-8 sm:px-10 sm:py-10 font-sans-body text-[#111111] leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: docxHtml }}
                      />
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
