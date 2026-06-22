import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";
import { GithubIcon } from "../components/SocialIcons";
import GlassCard from "../components/GlassCard";
import ProjectModal from "../components/ProjectModal";
import { projects } from "../data/projects";
import { isPlaceholderLink } from "../lib/utils";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openCaseStudy = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeCaseStudy = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-brand-dark">
      {/* Background ambient light gradients */}
      <div className="absolute top-[40%] right-[10%] w-[550px] h-[550px] radial-glow-indigo opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <span className="text-xs font-bold text-brand-accent tracking-widest uppercase mb-2 block">
            03 . Selected Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-textPrimary tracking-tight">
            Featured Full Stack Creations
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-accent to-brand-violet rounded-full mt-4" />
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <GlassCard
              key={project.id}
              delay={idx * 0.15}
              hoverEffect={true}
              className="flex flex-col h-full justify-between group p-0 pb-6 rounded-2xl overflow-hidden"
            >
              <div>
                {/* Visual Thumbnail Gradient wrapper with Device Mockups */}
                <div className="h-56 w-full overflow-hidden relative border-b border-brand-border/60">
                  <div
                    className={`absolute inset-0 bg-gradient-to-tr ${project.thumbnailColor} bg-grid-pattern flex items-center justify-center p-4`}
                  >
                    <div className="absolute inset-0 bg-black/35" />
                    
                    {project.deviceType === "browser" ? (
                      /* Browser Mockup */
                      <motion.div 
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="w-[85%] h-[85%] rounded-lg bg-[#0a0b0d] border border-white/10 shadow-2xl flex flex-col overflow-hidden relative transition-colors"
                      >
                        {/* Browser Header/Bar */}
                        <div className="h-6 bg-white/[0.03] border-b border-white/5 px-3 flex items-center gap-1.5 shrink-0">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
                          <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/60" />
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
                          <div className="w-24 h-3 rounded-md bg-white/5 mx-auto flex items-center justify-center">
                            <span className="text-[7px] text-white/30 font-sans tracking-wide">sujanmultani.dev</span>
                          </div>
                        </div>
                        {/* Browser Content */}
                        <div className="flex-1 p-3 flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-br from-indigo-950/40 to-slate-950/40">
                          <Code2 className="text-white/30 group-hover:text-indigo-400 transition-colors duration-300" size={32} />
                          <span className="text-[9px] text-brand-textMuted mt-1.5 font-mono">{project.title}</span>
                        </div>
                      </motion.div>
                    ) : project.deviceType === "phone" ? (
                      /* Phone Mockup */
                      <motion.div 
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="w-[45%] h-[95%] rounded-2xl bg-[#0a0b0d] border-2 border-white/10 shadow-2xl flex flex-col overflow-hidden relative transition-colors"
                      >
                        {/* Speaker / Notch */}
                        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-14 h-3 rounded-full bg-[#16181d] flex items-center justify-center z-20">
                          <div className="w-5 h-0.5 rounded-full bg-white/10" />
                        </div>
                        {/* Screen Content */}
                        <div className="flex-1 pt-5 p-3 flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-b from-emerald-950/40 to-slate-950/40">
                          <Code2 className="text-white/30 group-hover:text-emerald-400 transition-colors duration-300" size={28} />
                          <span className="text-[9px] text-brand-textMuted mt-1.5 font-mono text-center leading-none">{project.title}</span>
                        </div>
                      </motion.div>
                    ) : (
                      /* Default/IoT Mockup */
                      <motion.div 
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="w-[75%] h-[80%] rounded-xl bg-[#0a0b0d]/90 border border-white/10 shadow-2xl flex flex-col items-center justify-center p-4 relative overflow-hidden"
                      >
                        <div className="absolute top-0 right-0 w-6 h-6 border-r border-t border-amber-500/20" />
                        <div className="absolute bottom-0 left-0 w-6 h-6 border-l border-b border-amber-500/20" />
                        <Code2 className="text-white/30 group-hover:text-amber-500 transition-colors duration-300" size={36} />
                        <span className="text-[9px] text-brand-textMuted mt-2 font-mono">{project.title}</span>
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Card Text Content */}
                <div className="p-6 md:p-8 pb-3 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-brand-textPrimary font-sans group-hover:text-brand-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-brand-textMuted text-xs font-medium uppercase tracking-wider mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>
                  
                  <p className="text-brand-textSecondary text-sm leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span key={tag} className="text-[10px] font-semibold px-2 py-0.5 rounded bg-white/5 border border-white/5 text-brand-textSecondary">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/10">
                        +{project.tags.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action row at bottom */}
              <div className="px-6 md:px-8 pt-4 border-t border-brand-border/40 flex items-center justify-between mt-auto">
                <button
                  onClick={() => openCaseStudy(project)}
                  className="text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors uppercase tracking-wider focus:outline-none select-none"
                >
                  View Case Study →
                </button>
                
                {/* External links */}
                <div className="flex items-center gap-2">
                  {project.github && (
                    isPlaceholderLink(project.github) ? (
                      <span
                        title="GitHub Repository Coming Soon"
                        className="w-8 h-8 rounded-lg border border-brand-border bg-brand-card text-brand-textMuted opacity-45 flex items-center justify-center cursor-not-allowed select-none"
                      >
                        <GithubIcon size={15} />
                      </span>
                    ) : (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Repository"
                        className="w-8 h-8 rounded-lg border border-brand-border bg-brand-card hover:bg-white/5 text-brand-textSecondary hover:text-brand-textPrimary transition-colors flex items-center justify-center focus:outline-none"
                      >
                        <GithubIcon size={15} />
                      </a>
                    )
                  )}
                  {project.live && (
                    isPlaceholderLink(project.live) ? (
                      <span
                        title="Live Preview Coming Soon"
                        className="w-8 h-8 rounded-lg border border-brand-border bg-brand-card text-brand-textMuted opacity-45 flex items-center justify-center cursor-not-allowed select-none"
                      >
                        <ExternalLink size={15} />
                      </span>
                    ) : (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live Demo"
                        className="w-8 h-8 rounded-lg border border-brand-border bg-brand-card hover:bg-white/5 text-brand-textSecondary hover:text-brand-textPrimary transition-colors flex items-center justify-center focus:outline-none"
                      >
                        <ExternalLink size={15} />
                      </a>
                    )
                  )}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

      </div>

      {/* Case Study Detail Modal Overlay */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeCaseStudy}
      />
    </section>
  );
}
