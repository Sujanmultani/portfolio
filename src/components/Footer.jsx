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
    <footer className="bg-brand-ink text-brand-cream py-16 relative overflow-hidden select-none border-t border-brand-ink">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Top Grid row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pb-8 border-b border-brand-cream/10">
          
          {/* Logo Name & Tagline */}
          <div className="text-left space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-display italic font-bold text-xl text-brand-cream">
                {personalInfo.name}
                <span className="text-brand-amber">.</span>
              </span>
            </div>
            <p className="text-brand-paper/60 text-xs leading-relaxed max-w-xs font-sans">
              Designing and coding high-fidelity, high-throughput digital interfaces since 2023.
            </p>
          </div>

          {/* Center Links List */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2 justify-start md:justify-center font-sans">
            <a href="#about" className="text-xs font-bold uppercase tracking-wider text-brand-paper/85 hover:text-brand-amber transition-colors">
              About
            </a>
            <a href="#skills" className="text-xs font-bold uppercase tracking-wider text-brand-paper/85 hover:text-brand-amber transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-xs font-bold uppercase tracking-wider text-brand-paper/85 hover:text-brand-amber transition-colors">
              Projects
            </a>
            <a href="#services" className="text-xs font-bold uppercase tracking-wider text-brand-paper/85 hover:text-brand-amber transition-colors">
              Services
            </a>
            <a href="#contact" className="text-xs font-bold uppercase tracking-wider text-brand-paper/85 hover:text-brand-amber transition-colors">
              Contact
            </a>
          </nav>

          {/* Social Row & Scroll To Top */}
          <div className="flex items-center justify-between md:justify-end gap-6 w-full">
            {/* Social channels */}
            <div className="flex gap-4">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-brand-paper/70 hover:text-brand-amber transition-colors"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-brand-paper/70 hover:text-brand-amber transition-colors"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href={personalInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-brand-paper/70 hover:text-brand-amber transition-colors"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={`https://wa.me/${personalInfo.socials.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-brand-paper/70 hover:text-brand-amber transition-colors"
              >
                <WhatsappIcon size={16} />
              </a>
            </div>

            {/* Back to top bullet */}
            <button
              onClick={handleScrollToTop}
              aria-label="Back to Top"
              className="w-9 h-9 rounded-xl border border-brand-cream/10 bg-white/5 hover:bg-white/10 text-brand-paper hover:text-brand-cream transition-colors flex items-center justify-center focus:outline-none"
            >
              <ArrowUp size={16} />
            </button>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 font-sans">
          <p className="text-[10px] font-bold text-brand-paper/50 uppercase tracking-[0.2em]">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-[10px] font-bold text-brand-paper/50 uppercase tracking-[0.2em]">
            Built with <span className="text-brand-cream underline decoration-brand-amber">React</span> &amp; <span className="text-brand-cream underline decoration-brand-amber">Tailwind CSS</span>
          </p>
        </div>

        {/* Continuous slow scroller marquee tagline at bottom */}
        <div className="w-full overflow-hidden border-t border-brand-cream/10 mt-12 pt-6">
          <div className="flex whitespace-nowrap gap-8 animate-marquee-left hover:[animation-play-state:paused] text-brand-paper/20 text-[9px] font-bold uppercase tracking-[0.25em]">
            <div className="flex gap-8 shrink-0">
              <span>DESIGNED &amp; ENGINEERED BY SUJAN MULTANI &bull; CREATIVE PORTFOLIO &bull; FREELANCE DEVELOPER &bull; MCA CANDIDATE &bull;</span>
              <span>DESIGNED &amp; ENGINEERED BY SUJAN MULTANI &bull; CREATIVE PORTFOLIO &bull; FREELANCE DEVELOPER &bull; MCA CANDIDATE &bull;</span>
            </div>
            <div className="flex gap-8 shrink-0">
              <span>DESIGNED &amp; ENGINEERED BY SUJAN MULTANI &bull; CREATIVE PORTFOLIO &bull; FREELANCE DEVELOPER &bull; MCA CANDIDATE &bull;</span>
              <span>DESIGNED &amp; ENGINEERED BY SUJAN MULTANI &bull; CREATIVE PORTFOLIO &bull; FREELANCE DEVELOPER &bull; MCA CANDIDATE &bull;</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
