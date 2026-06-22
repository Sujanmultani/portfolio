import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon, WhatsappIcon } from "./SocialIcons";
import { personalInfo } from "../data/personalInfo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="glass-panel border-t border-brand-border/60 py-12 relative overflow-hidden bg-brand-darker select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Top Grid row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pb-8 border-b border-brand-border/40">
          
          {/* Logo Name & Tagline */}
          <div className="text-left space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-accent to-brand-violet flex items-center justify-center font-sans font-black text-white text-base">
                S
              </div>
              <span className="font-sans font-bold text-lg text-brand-textPrimary tracking-tight">
                {personalInfo.name.split(" ")[0]}
                <span className="text-brand-accent">.</span>
              </span>
            </div>
            <p className="text-brand-textMuted text-xs leading-relaxed max-w-xs">
              Designing and coding high-fidelity, high-throughput digital interfaces since 2023.
            </p>
          </div>

          {/* Center Links List */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2 justify-start md:justify-center">
            <a href="#about" className="text-xs font-semibold text-brand-textSecondary hover:text-brand-accent transition-colors">
              About
            </a>
            <a href="#skills" className="text-xs font-semibold text-brand-textSecondary hover:text-brand-accent transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-xs font-semibold text-brand-textSecondary hover:text-brand-accent transition-colors">
              Projects
            </a>
            <a href="#services" className="text-xs font-semibold text-brand-textSecondary hover:text-brand-accent transition-colors">
              Services
            </a>
            <a href="#contact" className="text-xs font-semibold text-brand-textSecondary hover:text-brand-accent transition-colors">
              Contact
            </a>
          </nav>

          {/* Social Row & Scroll To Top */}
          <div className="flex items-center justify-between md:justify-end gap-6 w-full">
            {/* Social channels */}
            <div className="flex gap-3">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-brand-textSecondary hover:text-brand-textPrimary transition-colors"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-brand-textSecondary hover:text-brand-textPrimary transition-colors"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={personalInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-brand-textSecondary hover:text-brand-textPrimary transition-colors"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={`https://wa.me/${personalInfo.socials.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-brand-textSecondary hover:text-brand-textPrimary transition-colors"
              >
                <WhatsappIcon size={18} />
              </a>
            </div>

            {/* Back to top bullet */}
            <button
              onClick={handleScrollToTop}
              aria-label="Back to Top"
              className="w-9 h-9 rounded-xl border border-brand-border bg-brand-card hover:bg-white/5 text-brand-textSecondary hover:text-brand-textPrimary transition-colors flex items-center justify-center focus:outline-none"
            >
              <ArrowUp size={16} />
            </button>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-[10px] font-bold text-brand-textMuted uppercase tracking-widest">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-[10px] font-bold text-brand-textMuted uppercase tracking-widest">
            Built with <span className="text-brand-accent">React</span> &amp; <span className="text-brand-accent">Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
