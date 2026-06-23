import { motion } from "framer-motion";
import { personalInfo } from "../data/personalInfo";

export default function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden bg-brand-cream">
      {/* Background warm light glow */}
      <div className="absolute top-[20%] -left-[10%] w-[400px] h-[400px] radial-glow-amber opacity-60 pointer-events-none" />

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
              01
            </span>
            <span className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-brand-inkMuted">
              — Personal Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-brand-ink md:ml-auto mt-2 md:mt-0">
              About Me.
            </h2>
          </motion.div>
        </div>

        {/* Full-width editorial layout */}
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Pull-quote large italic opening */}
          {personalInfo.aboutBio && personalInfo.aboutBio.length > 0 && (
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-display italic text-xl sm:text-2xl md:text-3xl text-brand-ink leading-relaxed border-l-2 border-brand-amber pl-6 sm:pl-8"
            >
              {personalInfo.aboutBio[0]}
            </motion.p>
          )}

          {/* Narrow centered columns for biological copy */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pl-6 sm:pl-8">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-8 space-y-6 text-brand-inkSoft text-base leading-relaxed font-sans"
            >
              {personalInfo.aboutBio && personalInfo.aboutBio.slice(1).map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </motion.div>

            {/* Side Callout Career Objective */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-4 p-6 rounded-2xl bg-brand-paper/50 border border-brand-line self-start space-y-3"
            >
              <h3 className="text-brand-ink font-bold text-[10px] uppercase tracking-widest">
                Professional Focus
              </h3>
              <p className="text-brand-inkSoft text-sm leading-relaxed italic">
                "{personalInfo.objective}"
              </p>
            </motion.div>
          </div>

        </div>

        {/* Stats shown as a simple horizontal row of huge serif numbers - no cards/boxes */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 border-t border-b border-brand-line py-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {personalInfo.stats.map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <span className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-brand-amber block">
                  {stat.value}
                </span>
                <span className="text-[10px] font-bold text-brand-inkMuted uppercase tracking-[0.2em] block">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
