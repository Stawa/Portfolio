"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 500);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <motion.a
      href="#home"
      aria-label="Back to top"
      className={`focus-brutal fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-2xl border-[3px] border-ink bg-primary text-primary-foreground shadow-[6px_6px_0_var(--shadow)] transition-all duration-300 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-8 opacity-0"
      }`}
      initial={false}
      whileHover={{
        x: -4,
        y: -4,
        transition: {
          duration: 0.01,
          ease: "easeOut",
        },
      }}
      whileTap={{
        x: 0,
        y: 0,
        scale: 0.95,
      }}
      transition={{
        duration: 0.05,
        ease: "easeOut",
      }}
    >
      <ArrowUp className="h-6 w-6 stroke-[3]" />
    </motion.a>
  );
}
