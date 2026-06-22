import { motion } from "framer-motion";
import { User, Award, CheckCircle2, ShieldCheck } from "lucide-react";
import GlassCard from "../components/GlassCard";
import { personalInfo } from "../data/personalInfo";

export default function About() {
  // Map icons to the 4 stats dynamically
  const statIcons = [Award, CheckCircle2, ShieldCheck, User];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-brand-dark">
      {/* Background soft light ambient glows */}
      <div className="absolute top-[30%] right-[5%] w-[400px] h-[400px] radial-glow-indigo opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <span className="text-xs font-bold text-brand-accent tracking-widest uppercase mb-2 block">
            01 . Personal Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-textPrimary tracking-tight">
            My Background & Engineering Philosophy
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-accent to-brand-violet rounded-full mt-4" />
        </div>

        {/* Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Bio Story & Career Objective */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-brand-textSecondary text-sm sm:text-base leading-relaxed"
          >
            <div className="space-y-4">
              {personalInfo.aboutBio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Career Objective Box */}
            <div className="p-5 md:p-6 rounded-2xl border border-brand-border bg-white/[0.01] relative overflow-hidden">
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-brand-accent rounded-l-full" />
              <h3 className="text-brand-textPrimary font-bold text-base mb-2 font-sans">
                Professional Trajectory
              </h3>
              <p className="text-brand-textSecondary text-xs sm:text-sm">
                {personalInfo.objective}
              </p>
            </div>
          </motion.div>

          {/* Right Column: Statistics Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {personalInfo.stats.map((stat, idx) => {
              const Icon = statIcons[idx % statIcons.length];
              return (
                <GlassCard
                  key={idx}
                  hoverEffect={true}
                  delay={idx * 0.1}
                  className="flex flex-col justify-between aspect-square p-5"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold">
                    <Icon size={20} />
                  </div>
                  <div className="mt-6">
                    <span className="text-3xl md:text-4xl font-extrabold text-gradient-gold font-sans tracking-tight block">
                      {stat.value}
                    </span>
                    <span className="text-xs font-semibold text-brand-textMuted uppercase tracking-wider mt-1 block">
                      {stat.label}
                    </span>
                  </div>
                </GlassCard>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
