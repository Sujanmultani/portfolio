import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 35, stiffness: 350, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Apply cursor:none to HTML when custom cursor is active
    document.documentElement.classList.add("custom-cursor-enabled");

    // Event delegation on document level for hover states
    const handleMouseOver = (e) => {
      if (e.target && e.target.closest('a, button, [role="button"], input, textarea, select, .interactive-hover')) {
        setIsHovered(true);
      }
    };

    const handleMouseOut = (e) => {
      const related = e.relatedTarget;
      if (!related || !related.closest('a, button, [role="button"], input, textarea, select, .interactive-hover')) {
        setIsHovered(false);
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.documentElement.classList.remove("custom-cursor-enabled");
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Small Core Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-indigo-400 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      {/* Large Ambient Glow Follower */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border border-indigo-400/35 bg-indigo-500/5 hidden md:block"
        animate={{
          width: isHovered ? 55 : 24,
          height: isHovered ? 55 : 24,
          opacity: 1,
          borderColor: isHovered ? "rgba(139, 92, 246, 0.65)" : "rgba(99, 102, 241, 0.35)",
          backgroundColor: isHovered ? "rgba(139, 92, 246, 0.08)" : "rgba(99, 102, 241, 0.02)"
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
