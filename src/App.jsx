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

  return (
    <div className="relative min-h-screen bg-brand-dark overflow-x-hidden selection:bg-brand-accent/30 selection:text-brand-textPrimary">
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
