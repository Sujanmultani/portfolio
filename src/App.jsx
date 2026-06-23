import { BrowserRouter } from "react-router-dom";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import Timeline from "./sections/Timeline";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import useScrollSpy from "./hooks/useScrollSpy";

import { useScroll, useSpring, motion } from "framer-motion";

// List of page section IDs for scroll highlighting tracking
const sectionIds = [
  "home",
  "about",
  "skills",
  "projects",
  "services",
  "timeline",
  "testimonials",
  "contact"
];

function AppContent() {
  const activeSection = useScrollSpy(sectionIds);
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-brand-cream overflow-x-hidden selection:bg-brand-amber/20 selection:text-brand-ink">
      {/* Scroll Progress Indicator - Film Reel counter style */}
      <motion.div 
        className="fixed right-0 top-0 bottom-0 w-[3px] bg-brand-amber origin-top z-50 pointer-events-none"
        style={{ scaleY }}
      />

      {/* Premium cursor follower */}
      <CustomCursor />

      {/* Persistent global layout components */}
      <Navbar activeSection={activeSection} />

      {/* Main Single Page Layout */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Timeline />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
