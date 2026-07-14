import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 30, stiffness: 350 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Disable on mobile/touch devices
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest(
        "a, button, [role='button'], .project-card",
      );
      if (isInteractive) {
        setIsHovered(true);
        if (target.closest(".project-card")) {
          setCursorText("VIEW");
        } else {
          setCursorText("");
        }
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isVisible, cursorX, cursorY]);

  // Keep it hidden on mobile
  if (
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches
  ) {
    return null;
  }

  if (!isVisible) return null;

  return (
    <motion.div
      className="hidden md:flex pointer-events-none fixed top-0 left-0 w-8 h-8 rounded-full border z-50 items-center justify-center text-[8px] font-mono font-bold select-none"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        backgroundColor: isHovered ? "rgba(138, 29, 58, 0.08)" : "transparent",
        borderColor: isHovered
          ? "var(--color-midnight)"
          : "rgba(138, 29, 58, 0.35)",
        color: "var(--color-midnight)",
      }}
      animate={{
        scale: isHovered ? 1.6 : 1.0,
      }}
      transition={{ duration: 0.1 }}
    >
      {cursorText && <span className="tracking-widest">{cursorText}</span>}
    </motion.div>
  );
}
