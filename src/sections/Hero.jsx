import { motion } from "framer-motion";
import { Mail, Code } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "../components/SocialIcons";
import Button from "../components/Button";
import Badge from "../components/Badge";
import { personalInfo } from "../data/personalInfo";
import sujanPhoto from "../assets/sujan.jpg";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const socialIcons = [
    { icon: GithubIcon, href: personalInfo.socials.github, label: "GitHub" },
    { icon: LinkedinIcon, href: personalInfo.socials.linkedin, label: "LinkedIn" },
    { icon: InstagramIcon, href: personalInfo.socials.instagram, label: "Instagram" },
    { icon: Mail, href: `mailto:${personalInfo.socials.email}`, label: "Email" }
  ];

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center pt-28 pb-20 md:pt-36 overflow-hidden bg-grid-pattern bg-brand-cream"
    >
      {/* Soft warm radial-gradient glow */}
      <div className="absolute -top-[10%] -right-[10%] w-[500px] md:w-[800px] h-[500px] md:h-[800px] radial-glow-amber pointer-events-none opacity-80" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-8 text-left"
          >
            {/* Availability Badge */}
            <motion.div variants={itemVariants} className="inline-block">
              <Badge text="Available for Freelance & Full-Time" variant="success" />
            </motion.div>

            {/* Headline with sequential line reveal */}
            <div className="space-y-1 font-display">
              <h1 className="text-[38px] sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-brand-ink">
                <span className="block overflow-hidden py-1">
                  <motion.span className="block" initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}>
                    I Build Fast,
                  </motion.span>
                </span>
                <span className="block overflow-hidden py-1">
                  <motion.span className="block" initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}>
                    Scalable &amp;
                  </motion.span>
                </span>
                <span className="block overflow-hidden py-1 text-brand-amber">
                  <motion.span className="block" initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}>
                    Production-Ready Apps
                  </motion.span>
                </span>
              </h1>
            </div>

            {/* Subheadline description */}
            <motion.p 
              variants={itemVariants} 
              className="text-brand-inkSoft text-base sm:text-lg md:text-xl leading-relaxed max-w-xl font-sans"
            >
              {personalInfo.heroIntro}
            </motion.p>

            {/* Credentials */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 items-center">
              <Badge text={personalInfo.credentialBadge} variant="gold" icon={Code} />
            </motion.div>

            {/* Action buttons */}
            <motion.div variants={itemVariants} className="flex items-center gap-8 pt-2">
              <Button href="#projects" variant="primary" size="md">
                View Selected Work
              </Button>
              <a 
                href="/resume.pdf" 
                download 
                target="_blank" 
                className="font-sans text-[11px] font-bold tracking-[0.15em] uppercase text-brand-inkSoft hover:text-brand-amber transition-colors underline underline-offset-8 decoration-brand-line hover:decoration-brand-amber"
              >
                Download CV
              </a>
            </motion.div>

            {/* Social Icons row */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 pt-6 border-t border-brand-line max-w-sm">
              <span className="text-[10px] font-bold text-brand-inkMuted uppercase tracking-widest">Connect:</span>
              <div className="flex gap-4">
                {socialIcons.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-brand-inkMuted hover:text-brand-amber transition-colors duration-300"
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual Image Column - Cinematic Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center relative">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-72 h-96 sm:w-80 sm:h-[420px] md:w-96 md:h-[480px] relative overflow-hidden rounded-t-[120px] rounded-b-[40px] border border-brand-line shadow-xl bg-brand-paper"
            >
              {/* Wipe-in image reveal wrapper */}
              <motion.div
                initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
                animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="w-full h-full relative"
              >
                {/* Underlay / base color */}
                <div className="absolute inset-0 bg-[#EADCC9]" />

                {/* Duotone graded image */}
                <img
                  src={sujanPhoto}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-85 contrast-[1.1] transition-transform duration-700 hover:scale-105 select-none pointer-events-none"
                />

                {/* Graded highlight overlays */}
                <div className="absolute inset-0 bg-brand-amber/15 mix-blend-color-dodge pointer-events-none" />
                <div className="absolute inset-0 bg-[#ECE0D0]/30 mix-blend-color-burn pointer-events-none" />

                {/* Soft Vignette overlay */}
                <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(21,19,15,0.35)] pointer-events-none" />
              </motion.div>
            </motion.div>
          </div>

        </div>

        {/* Animated scroll down indicator - film reel vertical line */}
        <div className="hidden md:flex absolute bottom-8 left-6 md:left-8 flex-col items-start gap-3 z-10 select-none pointer-events-none">
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-brand-inkMuted">
            Scroll to Explore
          </span>
          <div className="h-16 w-[1px] bg-brand-line relative overflow-hidden">
            <motion.div 
              animate={{ 
                top: ["-100%", "100%"] 
              }}
              transition={{ 
                duration: 2.2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute left-0 w-full h-8 bg-brand-amber"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
