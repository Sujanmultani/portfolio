import { motion } from "framer-motion";
import { Mail, ArrowRight, Download, Server, Database, Code } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "../components/SocialIcons";
import Button from "../components/Button";
import Badge from "../components/Badge";
import { personalInfo } from "../data/personalInfo";
import sujanPhoto from "../assets/sujan.jpg";

export default function Hero() {
  // Framer Motion staggered child reveal configurations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] // Custom premium easeOut cubic curve
      }
    }
  };

  // Social icon details
  const socialIcons = [
    { icon: GithubIcon, href: personalInfo.socials.github, label: "GitHub" },
    { icon: LinkedinIcon, href: personalInfo.socials.linkedin, label: "LinkedIn" },
    { icon: InstagramIcon, href: personalInfo.socials.instagram, label: "Instagram" },
    { icon: Mail, href: `mailto:${personalInfo.socials.email}`, label: "Email" }
  ];

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center justify-center pt-28 pb-20 md:pt-36 overflow-hidden bg-grid-pattern"
    >
      {/* Heavy Radial Glowing backgrounds behind components */}
      <div className="absolute top-[20%] left-[10%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] radial-glow-indigo pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] radial-glow-violet pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Availability Pill */}
            <motion.div variants={itemVariants} className="inline-block">
              <Badge text="Available for Freelance & Full-Time Roles" variant="success" />
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              variants={itemVariants} 
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-brand-textPrimary font-sans"
            >
              I Build Fast, Scalable & <br />
              <span className="text-gradient-accent">Production-Ready Web Apps</span>
            </motion.h1>

            {/* Subheadline description */}
            <motion.p 
              variants={itemVariants} 
              className="text-brand-textSecondary text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl"
            >
              {personalInfo.heroIntro}
            </motion.p>

            {/* Credential pill */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 items-center">
              <Badge text={personalInfo.credentialBadge} variant="gold" icon={Code} />
            </motion.div>

            {/* Call to Actions */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
              <Button href="#projects" variant="primary" size="md" icon={ArrowRight}>
                View My Work
              </Button>
              <Button href="/resume.pdf" download target="_blank" variant="secondary" size="md" icon={Download} iconPosition="left">
                Download CV
              </Button>
            </motion.div>

            {/* Social Icons row */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 pt-4 border-t border-brand-border/40 w-max">
              <span className="text-xs font-semibold text-brand-textMuted uppercase tracking-wider">Connect:</span>
              <div className="flex gap-2">
                {socialIcons.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-xl border border-brand-border bg-brand-card hover:bg-brand-accent/10 hover:border-brand-accent/50 text-brand-textSecondary hover:text-brand-accent transition-all duration-300 flex items-center justify-center focus:outline-none"
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual Image Column */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 relative flex items-center justify-center"
            >
              {/* Outer decorative spinning ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-indigo-500/20 animate-spin-slow" />
              
              {/* Middle animated pulsing ring */}
              <div className="absolute inset-4 rounded-full border border-brand-border/60 animate-pulse-glow" />

              {/* Glowing background behind core */}
              <div className="absolute inset-10 rounded-full bg-gradient-to-tr from-brand-accent/30 to-brand-violet/30 blur-2xl animate-pulse" />

              {/* Core Avatar Card */}
              <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full glass-card border-gradient-glow flex items-center justify-center shadow-2xl relative z-10 overflow-hidden group">
                <img
                  src={sujanPhoto}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 select-none pointer-events-none"
                />
                {/* Thin theme overlay */}
                <div className="absolute inset-0 bg-indigo-950/10 mix-blend-color-burn" />
              </div>

              {/* Floating Tech Stack Chip 1 (React) */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[10%] left-[5%] glass-card p-3 rounded-2xl border border-indigo-500/20 shadow-lg flex items-center gap-2 z-20 hover:border-brand-accent/50 transition-colors cursor-default"
              >
                <Code className="text-indigo-400" size={16} />
                <span className="text-xs font-semibold text-brand-textPrimary">React</span>
              </motion.div>

              {/* Floating Tech Stack Chip 2 (Node) */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-[20%] left-[-5%] glass-card p-3 rounded-2xl border border-emerald-500/20 shadow-lg flex items-center gap-2 z-20 hover:border-brand-emerald/50 transition-colors cursor-default"
              >
                <Server className="text-emerald-400" size={16} />
                <span className="text-xs font-semibold text-brand-textPrimary">Node.js</span>
              </motion.div>

              {/* Floating Tech Stack Chip 3 (MongoDB) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                className="absolute top-[40%] right-[-8%] glass-card p-3 rounded-2xl border border-violet-500/20 shadow-lg flex items-center gap-2 z-20 hover:border-brand-violet/50 transition-colors cursor-default"
              >
                <Database className="text-violet-400" size={16} />
                <span className="text-xs font-semibold text-brand-textPrimary">MongoDB</span>
              </motion.div>
            </motion.div>
          </div>

        </div>

        {/* Animated scroll down indicator */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-6 left-0 right-0 mx-auto w-max flex flex-col items-center gap-2 text-brand-textMuted hover:text-brand-textPrimary transition-colors z-10"
        >
          <a href="#about" aria-label="Scroll Down" className="flex flex-col items-center gap-2 select-none group focus:outline-none">
            <span className="text-[10px] uppercase font-bold tracking-widest group-hover:text-brand-accent transition-colors">
              Explore Portfolio
            </span>
            <div className="w-6 h-10 rounded-full border-2 border-brand-border flex items-start justify-center p-1.5 group-hover:border-brand-accent transition-colors">
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-brand-textSecondary group-hover:bg-brand-accent transition-colors"
              />
            </div>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
