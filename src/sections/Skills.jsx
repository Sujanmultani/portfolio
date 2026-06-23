import { motion } from "framer-motion";
import { skillCategories } from "../data/skills";
import { cn } from "../lib/utils";

const MarqueeRow = ({ skills, speedClass = "animate-marquee-left" }) => {
  // Repeat the skills array multiple times to ensure enough horizontal volume for seamless scrolling
  const repeatedSkills = [...skills, ...skills, ...skills, ...skills];

  return (
    <div className="w-full overflow-hidden py-4 relative group">
      <div 
        className={cn(
          "flex whitespace-nowrap gap-4 shrink-0",
          speedClass,
          "hover:[animation-play-state:paused]"
        )}
      >
        <div className="flex gap-4 shrink-0">
          {repeatedSkills.map((skill, idx) => (
            <span 
              key={idx}
              className="inline-block px-6 py-3 font-sans text-xs md:text-sm font-semibold tracking-widest uppercase bg-brand-paper border border-brand-line text-brand-inkSoft hover:border-brand-amber hover:text-brand-ink transition-colors rounded-xl select-none cursor-default"
            >
              {skill.name}
            </span>
          ))}
        </div>
        <div className="flex gap-4 shrink-0">
          {repeatedSkills.map((skill, idx) => (
            <span 
              key={`dup-${idx}`}
              className="inline-block px-6 py-3 font-sans text-xs md:text-sm font-semibold tracking-widest uppercase bg-brand-paper border border-brand-line text-brand-inkSoft hover:border-brand-amber hover:text-brand-ink transition-colors rounded-xl select-none cursor-default"
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Skills() {
  const frontendSkills = skillCategories.find(c => c.id === "frontend")?.skills || [];
  const backendSkills = [
    ...(skillCategories.find(c => c.id === "backend")?.skills || []),
    ...(skillCategories.find(c => c.id === "database")?.skills || [])
  ];
  const toolsSkills = skillCategories.find(c => c.id === "mobile-tools")?.skills || [];

  return (
    <section id="skills" className="py-28 relative overflow-hidden bg-brand-cream border-t border-b border-brand-line">
      {/* Background warm light glow */}
      <div className="absolute top-[30%] right-[-10%] w-[450px] h-[450px] radial-glow-amber opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Chapter Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 border-b border-brand-line pb-6"
          >
            <span className="font-display italic text-2xl md:text-3xl text-brand-amber">
              02
            </span>
            <span className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-brand-inkMuted">
              — Core Stack
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-brand-ink md:ml-auto mt-2 md:mt-0">
              Technical Cap.
            </h2>
          </motion.div>
        </div>

        {/* Marquee rows showing skills grouped into categories */}
        <div className="space-y-6 max-w-6xl mx-auto">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-inkMuted pl-2 block mb-2">Frontend</span>
            <MarqueeRow skills={frontendSkills} speedClass="animate-marquee-left" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-inkMuted pl-2 block mb-2">Backend &amp; Database</span>
            <MarqueeRow skills={backendSkills} speedClass="animate-marquee-right" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-inkMuted pl-2 block mb-2">Tools &amp; Mobile</span>
            <MarqueeRow skills={toolsSkills} speedClass="animate-marquee-left-fast" />
          </div>
        </div>

      </div>
    </section>
  );
}
