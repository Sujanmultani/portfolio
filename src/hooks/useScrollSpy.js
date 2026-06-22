import { useState, useEffect, useRef } from "react";

/**
 * Custom React hook that tracks scroll position and returns the ID of the section currently in view.
 * @param {string[]} ids - List of section IDs to monitor.
 * @param {number} offset - Pixel offset from the top to trigger section active change.
 * @returns {string} - Active section ID.
 */
export default function useScrollSpy(ids, offset = 140) {
  const [activeId, setActiveId] = useState("");
  const activeIdRef = useRef("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;
      
      // Document height parameters
      const isAtBottom = (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50;

      // If at the very bottom, make the last section active
      if (isAtBottom && ids.length > 0) {
        const lastId = ids[ids.length - 1];
        if (activeIdRef.current !== lastId) {
          activeIdRef.current = lastId;
          setActiveId(lastId);
        }
        return;
      }

      // If at the very top, make the first section active
      if (window.scrollY < 60 && ids.length > 0) {
        const firstId = ids[0];
        if (activeIdRef.current !== firstId) {
          activeIdRef.current = firstId;
          setActiveId(firstId);
        }
        return;
      }

      let currentActiveId = "";
      
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentActiveId = id;
          }
        }
      }

      if (currentActiveId && currentActiveId !== activeIdRef.current) {
        activeIdRef.current = currentActiveId;
        setActiveId(currentActiveId);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial run on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ids, offset]);

  return activeId;
}
