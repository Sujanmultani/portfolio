import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Calendar, MapPin, CheckCircle } from "lucide-react";
import { timelineData } from "../data/timeline";

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
    <section id="timeline" ref={sectionRef} className="py-28 relative overflow-hidden bg-brand-cream">
      {/* Background warm light glow */}
      <div className="absolute top-[20%] right-[-10%] w-[450px] h-[450px] radial-glow-amber opacity-40 pointer-events-none" />

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
              05
            </span>
            <span className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-brand-inkMuted">
              — Career Map
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-brand-ink md:ml-auto mt-2 md:mt-0">
              Timeline.
            </h2>
          </motion.div>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto pl-10 md:pl-16">
          
          {/* Animated Vertical Line track (Film strip reel line) */}
          <motion.div
            style={{ scaleY }}
            className="absolute top-4 bottom-4 left-4 md:left-8 w-[1px] bg-brand-amber origin-top rounded-full z-0"
          />

          {/* Secondary background line track */}
          <div className="absolute top-4 bottom-4 left-4 md:left-8 w-[1px] bg-brand-line rounded-full z-0" />

          {/* Timeline Nodes list */}
          <div className="space-y-12">
            {timelineData.map((item, idx) => {
              return (
                <div key={item.id} className="relative z-10">
                  
                  {/* Square Film-Frame marker node */}
                  <motion.div
                    initial={{ scale: 0.7, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute -left-[30px] md:-left-[46px] w-[20px] h-[24px] border border-brand-ink bg-brand-cream flex flex-col justify-between p-0.5 select-none shrink-0 translate-y-[8px]"
                  >
                    <div className="flex justify-between w-full h-[2px]">
                      <div className="w-[2px] h-[2px] bg-brand-ink/50" />
                      <div className="w-[2px] h-[2px] bg-brand-ink/50" />
                    </div>
                    <div className="w-1.5 h-1.5 bg-brand-amber mx-auto rounded-none" />
                    <div className="flex justify-between w-full h-[2px]">
                      <div className="w-[2px] h-[2px] bg-brand-ink/50" />
                      <div className="w-[2px] h-[2px] bg-brand-ink/50" />
                    </div>
                  </motion.div>

                  {/* Content Container (Editorial style) */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="p-6 md:p-8 bg-brand-paper/40 border border-brand-line hover:border-brand-amber transition-all duration-300 rounded-xl space-y-4"
                  >
                    {/* Header info */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-brand-ink font-display leading-snug">
                          {item.role}
                        </h3>
                        <p className="text-brand-inkSoft text-sm font-semibold mt-0.5">
                          {item.company}
                        </p>
                      </div>
                      
                      {/* Duration Tag */}
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-amberLight/35 border border-brand-amber/10 text-brand-amberDeep w-max shrink-0 font-sans">
                        <Calendar size={12} className="text-brand-amber" />
                        {item.duration}
                      </span>
                    </div>

                    {/* Metadata details (Location) */}
                    <div className="flex items-center gap-1 text-brand-inkMuted text-xs">
                      <MapPin size={12} className="text-brand-inkMuted" />
                      <span>{item.location}</span>
                    </div>

                    {/* Description */}
                    <p className="text-brand-inkSoft text-sm leading-relaxed font-sans">
                      {item.description}
                    </p>

                    {/* Bullets lists */}
                    {item.bullets && item.bullets.length > 0 && (
                      <ul className="space-y-2 mt-4 border-t border-brand-line pt-4 font-sans">
                        {item.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex gap-2.5 items-start text-xs md:text-sm text-brand-inkSoft">
                            <CheckCircle size={14} className="text-brand-amber shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
