import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "../data/personalInfo";
import { cn } from "../lib/utils";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#timeline" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar({ activeSection = "" }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile navigation is active
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileOpen]);

  const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen);
  const closeMobileMenu = () => setIsMobileOpen(false);

  // Hamburger line animations
  const line1Variants = {
    closed: { rotate: 0, y: 0 },
    opened: { rotate: 45, y: 6 }
  };
  const line2Variants = {
    closed: { opacity: 1 },
    opened: { opacity: 0 }
  };
  const line3Variants = {
    closed: { rotate: 0, y: 0 },
    opened: { rotate: -45, y: -6 }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-500",
          isScrolled 
            ? "py-4 bg-brand-cream/90 backdrop-blur-md border-b border-brand-line shadow-sm" 
            : "py-6 bg-transparent border-b border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          {/* Logo Name */}
          <a 
            href="#home" 
            className="font-display italic font-bold text-2xl text-brand-ink tracking-tight hover:text-brand-amber transition-colors duration-300 focus:outline-none"
            onClick={closeMobileMenu}
          >
            {personalInfo.name.split(" ")[0]}
            <span className="text-brand-amber">.</span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={cn(
                        "font-sans text-[10px] font-bold tracking-[0.2em] uppercase transition-all relative py-1 hover:text-brand-ink focus:outline-none select-none",
                        isActive ? "text-brand-amber" : "text-brand-inkMuted"
                      )}
                    >
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="activeIndicator"
                          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-brand-amber"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Actions CTA Buttons */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="/resume.pdf"
              download
              target="_blank"
              className="font-sans text-[10px] font-bold tracking-[0.15em] uppercase text-brand-inkSoft hover:text-brand-amber transition-colors underline underline-offset-4 decoration-brand-line hover:decoration-brand-amber"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="font-sans text-[10px] font-bold tracking-[0.15em] uppercase text-brand-ink hover:text-brand-amber transition-colors underline underline-offset-4 decoration-brand-amber"
            >
              Let's Talk
            </a>
          </div>

          {/* Hamburger Menu Toggle button */}
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
            className="lg:hidden flex flex-col gap-1.5 justify-center items-center w-10 h-10 rounded-xl border border-brand-line bg-brand-paper hover:bg-brand-cream transition-all focus:outline-none z-50 select-none"
          >
            <motion.span
              variants={line1Variants}
              animate={isMobileOpen ? "opened" : "closed"}
              transition={{ duration: 0.2 }}
              className="w-5 h-0.5 bg-brand-ink rounded-full block origin-center"
            />
            <motion.span
              variants={line2Variants}
              animate={isMobileOpen ? "opened" : "closed"}
              transition={{ duration: 0.2 }}
              className="w-5 h-0.5 bg-brand-ink rounded-full block origin-center"
            />
            <motion.span
              variants={line3Variants}
              animate={isMobileOpen ? "opened" : "closed"}
              transition={{ duration: 0.2 }}
              className="w-5 h-0.5 bg-brand-ink rounded-full block origin-center"
            />
          </button>
        </div>
      </header>

      {/* Mobile Glass Menu Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            {/* Dark overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
              className="fixed inset-0 bg-brand-ink/10 backdrop-blur-sm"
            />

            {/* Slider Drawer panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-full bg-brand-cream border-l border-brand-line shadow-2xl p-8 pt-24 flex flex-col justify-between z-50"
            >
              {/* Menu lists */}
              <nav className="flex flex-col gap-8">
                <span className="font-sans text-[10px] font-bold text-brand-inkMuted uppercase tracking-widest border-b border-brand-line pb-2">
                  Navigation Directory
                </span>
                <ul className="flex flex-col gap-4">
                  {navLinks.map((link, idx) => {
                    const isActive = activeSection === link.href.substring(1);
                    return (
                      <motion.li
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        key={link.href}
                      >
                        <a
                          href={link.href}
                          onClick={closeMobileMenu}
                          className={cn(
                            "font-sans text-xs font-bold tracking-widest uppercase block py-2 select-none hover:text-brand-amber transition-colors",
                            isActive ? "text-brand-amber" : "text-brand-ink"
                          )}
                        >
                          {link.label}
                        </a>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              {/* Action buttons footer */}
              <div className="flex flex-col gap-4 mt-auto">
                <a
                  href="/resume.pdf"
                  download
                  target="_blank"
                  onClick={closeMobileMenu}
                  className="font-sans text-[11px] font-bold tracking-[0.15em] uppercase text-brand-inkSoft hover:text-brand-amber transition-colors text-center py-2.5 border border-brand-line rounded-xl hover:bg-brand-paper"
                >
                  Resume
                </a>
                <a
                  href="#contact"
                  onClick={closeMobileMenu}
                  className="font-sans text-[11px] font-bold tracking-[0.15em] uppercase bg-brand-amber text-brand-cream hover:bg-brand-amberDeep transition-colors text-center py-2.5 rounded-xl"
                >
                  Let's Talk
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
