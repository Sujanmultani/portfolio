import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { isPlaceholderLink } from "../lib/utils";
import { cn } from "../lib/utils";

const BrowserMockup = ({ project }) => {
  return (
    <div className="w-full aspect-[16/10] rounded-xl border border-brand-line bg-brand-paper shadow-lg overflow-hidden flex flex-col relative">
      {/* Browser Bar */}
      <div className="h-8 bg-brand-cream border-b border-brand-line px-4 flex items-center gap-1.5 shrink-0">
        <div className="w-2 h-2 rounded-full bg-red-400/50" />
        <div className="w-2 h-2 rounded-full bg-yellow-400/50" />
        <div className="w-2 h-2 rounded-full bg-green-400/50" />
        <div className="h-5 px-3 rounded bg-brand-paper border border-brand-line text-[9px] text-brand-inkMuted mx-auto flex items-center justify-center font-mono w-48 select-none">
          sujanmultani.dev/{project.id}
        </div>
      </div>
      {/* Content */}
      <div className={`flex-1 bg-gradient-to-tr ${project.thumbnailColor} p-6 md:p-8 flex flex-col justify-between items-start text-white relative`}>
        <div className="absolute inset-0 bg-brand-ink/35 pointer-events-none" />
        <div className="relative z-10 space-y-2">
          <span className="text-[9px] tracking-widest font-bold uppercase text-brand-amberLight bg-brand-amber/20 px-2 py-0.5 rounded">
            Web Application
          </span>
          <h4 className="font-display text-2xl md:text-3xl font-bold leading-tight pt-1">
            {project.title}
          </h4>
        </div>
        <div className="relative z-10 w-full flex items-baseline justify-between border-t border-white/10 pt-4 mt-auto">
          <span className="text-[9px] font-bold tracking-widest uppercase text-white/50">Interface mock coming soon</span>
          <span className="font-mono text-[9px] text-white/40">MERN Stack</span>
        </div>
      </div>
    </div>
  );
};

const PhoneMockup = ({ project }) => {
  return (
    <div className="w-60 sm:w-64 aspect-[9/18] rounded-[36px] border-4 border-brand-ink bg-brand-ink p-1.5 shadow-2xl flex flex-col relative overflow-hidden">
      {/* Notch */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-4 rounded-full bg-brand-ink flex items-center justify-center z-20">
        <div className="w-5 h-0.5 rounded-full bg-white/15" />
      </div>
      {/* Screen */}
      <div className={`flex-1 rounded-[28px] overflow-hidden bg-gradient-to-b ${project.thumbnailColor} p-5 flex flex-col justify-between items-start text-white relative`}>
        <div className="absolute inset-0 bg-brand-ink/35 pointer-events-none" />
        <div className="relative z-10 space-y-2 pt-6">
          <span className="text-[9px] tracking-widest font-bold uppercase text-brand-amberLight bg-brand-amber/20 px-2 py-0.5 rounded">
            Mobile SDK
          </span>
          <h4 className="font-display text-xl font-bold leading-tight pt-1">
            {project.title}
          </h4>
        </div>
        <div className="relative z-10 w-full flex flex-col gap-1 border-t border-white/10 pt-4 mt-auto">
          <span className="text-[8px] font-bold tracking-widest uppercase text-white/50">B2B Crop Trading Marketplace</span>
          <span className="font-mono text-[8px] text-white/40">Kotlin / Android SDK</span>
        </div>
      </div>
    </div>
  );
};

const DeviceMockup = ({ project }) => {
  return (
    <div className="w-full aspect-[16/10] rounded-xl border border-brand-line bg-brand-paper shadow-lg p-6 flex flex-col justify-between items-start text-brand-ink relative overflow-hidden">
      <div className="absolute inset-0 bg-dots-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-16 h-16 border-r border-t border-brand-amber/15" />
      <div className="absolute bottom-0 left-0 w-16 h-16 border-l border-b border-brand-amber/15" />
      <div className="relative z-10 space-y-2">
        <span className="text-[9px] tracking-widest font-bold uppercase text-brand-amber bg-brand-amberLight/40 px-2 py-0.5 rounded">
          IoT Platform
        </span>
        <h4 className="font-display text-2xl font-bold leading-tight pt-1">
          {project.title}
        </h4>
      </div>
      <div className="relative z-10 w-full flex items-baseline justify-between border-t border-brand-line pt-4 mt-auto">
        <span className="text-[8px] font-bold tracking-widest uppercase text-brand-inkMuted">Arduino Controller</span>
        <span className="font-mono text-[9px] text-brand-amber font-bold">Automation &amp; Sensors</span>
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="bg-brand-cream relative">
      
      {/* Chapter Header Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-24 relative z-10">
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 border-b border-brand-line pb-6"
          >
            <span className="font-display italic text-2xl md:text-3xl text-brand-amber">
              03
            </span>
            <span className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-brand-inkMuted">
              — Selected Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-brand-ink md:ml-auto mt-2 md:mt-0">
              Creations.
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Alternating Project Sections */}
      <div className="w-full">
        {projects.map((project, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div 
              key={project.id} 
              className={cn(
                "py-20 md:py-28 min-h-[80vh] flex items-center border-b border-brand-line",
                isEven ? "bg-brand-cream" : "bg-brand-paper"
              )}
            >
              <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                  
                  {/* Left Column: Alternates Mockup / Copy */}
                  <div className={cn("lg:col-span-6 flex justify-center items-center w-full", isEven ? "lg:order-1" : "lg:order-2")}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.94, y: 15 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full flex justify-center"
                    >
                      {project.deviceType === "browser" ? (
                        <BrowserMockup project={project} />
                      ) : project.deviceType === "phone" ? (
                        <PhoneMockup project={project} />
                      ) : (
                        <DeviceMockup project={project} />
                      )}
                    </motion.div>
                  </div>

                  {/* Right Column: Case Study Text Details */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className={cn("lg:col-span-6 space-y-6 text-left", isEven ? "lg:order-2" : "lg:order-1")}
                  >
                    <div>
                      <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-brand-inkMuted block mb-1">
                        {project.subtitle}
                      </span>
                      <h3 className="font-display text-3xl md:text-4xl font-bold text-brand-ink leading-tight">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-brand-inkSoft text-base leading-relaxed font-sans">
                      {project.shortDescription}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-brand-line pt-6">
                      <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-amber mb-1.5">
                          The Challenge
                        </h4>
                        <p className="text-brand-inkSoft text-xs leading-relaxed">
                          {project.caseStudy.problem}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-amber mb-1.5">
                          The Solution
                        </h4>
                        <p className="text-brand-inkSoft text-xs leading-relaxed">
                          {project.caseStudy.solution}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2 border-t border-brand-line pt-6 text-xs text-brand-inkSoft">
                      <div>
                        <span className="font-bold text-brand-ink uppercase text-[9px] tracking-[0.15em] mr-2">Responsibility:</span>
                        {project.caseStudy.role}
                      </div>
                      <div>
                        <span className="font-bold text-brand-ink uppercase text-[9px] tracking-[0.15em] mr-2">Outcomes:</span>
                        {project.caseStudy.outcome}
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-[9px] font-semibold tracking-wider px-2.5 py-1 rounded bg-brand-amberLight/40 text-brand-amberDeep uppercase">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Minimal under-line action buttons */}
                    <div className="flex items-center gap-6 pt-4 border-t border-brand-line">
                      {project.github && (
                        <a
                          href={isPlaceholderLink(project.github) ? undefined : project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            "font-sans text-[10px] font-bold tracking-[0.15em] uppercase transition-colors underline underline-offset-8",
                            isPlaceholderLink(project.github) 
                              ? "text-brand-inkMuted/40 decoration-transparent cursor-not-allowed" 
                              : "text-brand-inkSoft hover:text-brand-amber decoration-brand-line hover:decoration-brand-amber"
                          )}
                        >
                          GitHub Source {isPlaceholderLink(project.github) && "(Soon)"}
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={isPlaceholderLink(project.live) ? undefined : project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            "font-sans text-[10px] font-bold tracking-[0.15em] uppercase transition-colors underline underline-offset-8",
                            isPlaceholderLink(project.live) 
                              ? "text-brand-inkMuted/40 decoration-transparent cursor-not-allowed" 
                              : "text-brand-ink hover:text-brand-amber decoration-brand-amber hover:decoration-brand-amberDeep"
                          )}
                        >
                          Live Preview {isPlaceholderLink(project.live) && "(Soon)"}
                        </a>
                      )}
                    </div>
                  </motion.div>

                </div>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
