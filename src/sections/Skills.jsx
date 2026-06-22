import { motion } from "framer-motion";
import { Laptop, Database, Server, Settings } from "lucide-react";
import GlassCard from "../components/GlassCard";
import { skillCategories } from "../data/skills";

export default function Skills() {
  // Map index to Category Header Icons
  const categoryIcons = [Laptop, Server, Database, Settings];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-brand-darker bg-dots-pattern">
      {/* Background glow spot */}
      <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] radial-glow-emerald opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold text-brand-accent tracking-widest uppercase mb-2 block">
            02 . Core Stack
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-textPrimary tracking-tight">
            Technical Capabilities & Tools
          </h2>
          <p className="text-brand-textSecondary text-sm sm:text-base mt-3">
            An overview of the languages, frameworks, databases, and continuous delivery tools I leverage to build digital products.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-accent to-brand-violet rounded-full mt-4 mx-auto" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIdx) => {
            const Icon = categoryIcons[catIdx % categoryIcons.length];
            return (
              <GlassCard
                key={category.id}
                delay={catIdx * 0.1}
                hoverEffect={true}
                className="flex flex-col h-full justify-between"
              >
                {/* Header */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/15 flex items-center justify-center text-indigo-400">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-brand-textPrimary font-sans">
                        {category.title}
                      </h3>
                      <p className="text-brand-textMuted text-xs mt-0.5">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Chips */}
                  <div className="flex flex-wrap gap-2.5 mt-6">
                    {category.skills.map((skill, skIdx) => (
                      <motion.span
                        key={skIdx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: skIdx * 0.03 }}
                        whileHover={{ y: -2, scale: 1.05 }}
                        className="px-3.5 py-2 text-xs font-semibold font-sans bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 hover:bg-indigo-500/5 rounded-xl text-brand-textSecondary hover:text-indigo-400 transition-all duration-300 cursor-default"
                      >
                        {skill.name}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
