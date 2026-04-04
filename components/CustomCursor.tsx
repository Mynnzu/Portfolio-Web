"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CustomCursor() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const cursorX = useSpring(x, { stiffness: 500, damping: 35, mass: 0.2 });
  const cursorY = useSpring(y, { stiffness: 500, damping: 35, mass: 0.2 });

  useEffect(() => {
    const move = (event: MouseEvent) => {
      x.set(event.clientX - 7);
      y.set(event.clientY - 7);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[70] hidden h-3.5 w-3.5 rounded-full bg-[var(--accent-primary)] mix-blend-screen md:block"
      style={{ x: cursorX, y: cursorY }}
    />
  );
}
