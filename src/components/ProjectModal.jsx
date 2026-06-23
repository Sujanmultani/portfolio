import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import Button from "./Button";
import { isPlaceholderLink } from "../lib/utils";

export default function ProjectModal({ project, isOpen, onClose }) {
  const modalRef = useRef(null);
  const previousActiveElement = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      previousActiveElement.current = document.activeElement;

      // Move focus into the modal
      if (modalRef.current) {
        const focusable = modalRef.current.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex="0"]');
        if (focusable.length > 0) {
          focusable[0].focus();
        } else {
          modalRef.current.focus();
        }
      }

      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          onClose();
          return;
        }

        if (e.key === "Tab") {
          if (!modalRef.current) return;
          const focusable = modalRef.current.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex="0"]');
          if (focusable.length === 0) {
            e.preventDefault();
            return;
          }

          const firstEl = focusable[0];
          const lastEl = focusable[focusable.length - 1];

          if (e.shiftKey) {
            if (document.activeElement === firstEl) {
              lastEl.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastEl) {
              firstEl.focus();
              e.preventDefault();
            }
          }
        }
      };

      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "";
        
        // Restore focus to trigger element
        if (previousActiveElement.current) {
          previousActiveElement.current.focus();
        }
      };
    }
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto custom-scrollbar">
          {/* Overlay background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-ink/35 backdrop-blur-md"
          />

          {/* Case Study Card */}
          <motion.div
            ref={modalRef}
            tabIndex="-1"
            initial={{ opacity: 0, y: 60, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{ type: "spring", damping: 30, stiffness: 220 }}
            className="w-full max-w-4xl bg-brand-cream rounded-2xl md:rounded-3xl border border-brand-line shadow-2xl relative overflow-hidden z-10 my-8 flex flex-col focus:outline-none"
          >
            {/* Colored ambient banner blur */}
            <div className={`absolute top-0 left-0 right-0 h-44 bg-gradient-to-b ${project.thumbnailColor} opacity-10 blur-2xl -z-10`} />

            {/* Header info */}
            <div className="p-6 md:p-8 pb-4 flex justify-between items-start border-b border-brand-line">
              <div>
                <span className="text-[10px] font-bold text-brand-amber tracking-wider uppercase mb-1 block">Project Case Study</span>
                <h3 className="text-2xl md:text-3xl font-bold font-display text-brand-ink leading-tight">{project.title}</h3>
                <p className="text-brand-inkSoft text-sm mt-1 font-sans">{project.subtitle}</p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close Case Study"
                className="p-2 hover:bg-brand-paper rounded-full text-brand-inkSoft hover:text-brand-ink transition-colors focus:outline-none"
              >
                <X size={22} />
              </button>
            </div>

            {/* Body of Case study */}
            <div className="p-6 md:p-8 overflow-y-auto max-h-[60vh] custom-scrollbar space-y-8">
              {/* Short intro & link row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                <div className="md:col-span-2">
                  <h4 className="text-[10px] font-bold text-brand-inkMuted uppercase tracking-wider mb-2 font-sans">Overview</h4>
                  <p className="text-brand-inkSoft text-sm md:text-base leading-relaxed font-sans">{project.shortDescription}</p>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-col gap-2 justify-center pt-2 md:pt-0">
                  {project.live && (
                    <Button
                      href={isPlaceholderLink(project.live) ? undefined : project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="sm"
                      variant="primary"
                      icon={ExternalLink}
                      className="w-full justify-center"
                      disabled={isPlaceholderLink(project.live)}
                      title={isPlaceholderLink(project.live) ? "Live Demo Coming Soon" : undefined}
                    >
                      {isPlaceholderLink(project.live) ? "Demo Coming Soon" : "Live Preview"}
                    </Button>
                  )}
                  {project.github && (
                    <Button
                      href={isPlaceholderLink(project.github) ? undefined : project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="sm"
                      variant="secondary"
                      icon={GithubIcon}
                      className="w-full justify-center"
                      disabled={isPlaceholderLink(project.github)}
                      title={isPlaceholderLink(project.github) ? "GitHub Repository Coming Soon" : undefined}
                    >
                      {isPlaceholderLink(project.github) ? "Repo Coming Soon" : "GitHub Source"}
                    </Button>
                  )}
                </div>
              </div>

              <hr className="border-brand-line" />

              {/* Problem/Solution Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Col */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-[10px] font-bold text-brand-amber uppercase tracking-widest mb-2 flex items-center gap-1.5 font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-amber inline-block"></span>
                      The Challenge
                    </h4>
                    <p className="text-brand-inkSoft text-sm leading-relaxed font-sans">{project.caseStudy.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-brand-ink uppercase tracking-widest mb-2 flex items-center gap-1.5 font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-ink inline-block"></span>
                      My Responsibility
                    </h4>
                    <p className="text-brand-inkSoft text-sm leading-relaxed font-sans">{project.caseStudy.role}</p>
                  </div>
                </div>

                {/* Right Col */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-[10px] font-bold text-brand-amber uppercase tracking-widest mb-2 flex items-center gap-1.5 font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-amber inline-block"></span>
                      The Solution
                    </h4>
                    <p className="text-brand-inkSoft text-sm leading-relaxed font-sans">{project.caseStudy.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-brand-ink uppercase tracking-widest mb-2 flex items-center gap-1.5 font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-ink inline-block"></span>
                      Key Outcomes
                    </h4>
                    <p className="text-brand-inkSoft text-sm leading-relaxed font-sans">{project.caseStudy.outcome}</p>
                  </div>
                </div>
              </div>

              {/* Technologies list */}
              <div>
                <h4 className="text-[10px] font-bold text-brand-inkMuted uppercase tracking-wider mb-3 font-sans">Technologies Leveraged</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1.5 rounded bg-brand-amberLight/50 text-brand-amberDeep border border-brand-amber/10 uppercase tracking-wide font-sans font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Detailed Features */}
              <div>
                <h4 className="text-[10px] font-bold text-brand-inkMuted uppercase tracking-wider mb-4 font-sans">Core Architectural Features</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.caseStudy.features.map((feature, idx) => (
                    <div key={idx} className="flex gap-3 items-start bg-brand-paper/30 p-4 rounded-xl border border-brand-line hover:border-brand-amber transition-colors">
                      <CheckCircle className="text-brand-amber shrink-0 mt-0.5" size={16} />
                      <p className="text-brand-inkSoft text-xs md:text-sm leading-relaxed font-sans">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer row */}
            <div className="p-6 md:p-8 pt-4 border-t border-brand-line flex justify-end gap-3 bg-brand-paper/50">
              <Button size="sm" variant="ghost" onClick={onClose}>
                Close
              </Button>
              <Button size="sm" variant="primary" onClick={onClose}>
                Done Reading
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
