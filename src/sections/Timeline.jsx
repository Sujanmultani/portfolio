import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle } from "lucide-react";
import { timelineData } from "../data/timeline";
import GlassCard from "../components/GlassCard";

export default function Timeline() {
  const sectionRef = useRef(null);

  // Link scroll depth of section to progress line scale
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 80%"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 25,
    restDelta: 0.001
  });

  return (
    <section id="timeline" ref={sectionRef} className="py-24 relative overflow-hidden bg-brand-dark">
      {/* Background ambient light */}
      <div className="absolute top-[20%] left-[5%] w-[450px] h-[450px] radial-glow-indigo opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <span className="text-xs font-bold text-brand-accent tracking-widest uppercase mb-2 block">
            05 . Career Map
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-textPrimary tracking-tight">
            Work History & Education
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-accent to-brand-violet rounded-full mt-4" />
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto pl-10 md:pl-16">
          
          {/* Animated Vertical Line track */}
          <motion.div
            style={{ scaleY }}
            className="absolute top-4 bottom-4 left-4 md:left-8 w-0.5 bg-gradient-to-b from-brand-accent via-brand-violet to-brand-emerald origin-top rounded-full z-0"
          />

          {/* Secondary background line track */}
          <div className="absolute top-4 bottom-4 left-4 md:left-8 w-0.5 bg-white/5 rounded-full z-0" />

          {/* Timeline Nodes list */}
          <div className="space-y-12">
            {timelineData.map((item, idx) => {
              const IsWork = item.type === "experience";
              const Icon = IsWork ? Briefcase : GraduationCap;
              
              return (
                <div key={item.id} className="relative z-10">
                  {/* Left Side Icon Bullet Node */}
                  <motion.div
                    initial={{ scale: 0.7, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", damping: 15, stiffness: 200, delay: idx * 0.1 }}
                    className={`absolute -left-10 md:-left-16 w-8 h-8 md:w-10 md:h-10 rounded-xl border flex items-center justify-center translate-x-[-50%] translate-y-[10%] shadow-lg ${
                      IsWork 
                        ? "bg-indigo-500/10 border-indigo-500/30 text-indigo-400" 
                        : "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                    }`}
                  >
                    <Icon size={16} className="md:w-5 md:h-5" />
                  </motion.div>

                  {/* Right Side Content Card Wrapper */}
                  <GlassCard
                    animateOnScroll={true}
                    delay={idx * 0.15}
                    hoverEffect={true}
                    className="p-6 md:p-8"
                  >
                    {/* Header grid */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-brand-textPrimary font-sans">
                          {item.role}
                        </h3>
                        <p className="text-brand-textSecondary text-sm font-semibold mt-0.5">
                          {item.company}
                        </p>
                      </div>
                      
                      {/* Timeframe pill badge */}
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-brand-border text-brand-textSecondary w-max shrink-0">
                        <Calendar size={12} className="text-brand-accent" />
                        {item.duration}
                      </span>
                    </div>

                    {/* Metadata details (Location) */}
                    <div className="flex items-center gap-1 text-brand-textMuted text-xs mb-4">
                      <MapPin size={12} />
                      <span>{item.location}</span>
                    </div>

                    {/* Description Paragraph */}
                    <p className="text-brand-textSecondary text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Bullets lists */}
                    {item.bullets && item.bullets.length > 0 && (
                      <ul className="space-y-2 mt-4 border-t border-brand-border/40 pt-4">
                        {item.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex gap-2.5 items-start text-xs md:text-sm text-brand-textSecondary">
                            <CheckCircle size={14} className="text-brand-accent shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </GlassCard>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
