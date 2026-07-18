"use client";

import { motion, useReducedMotion } from "framer-motion";

const shapes = [
  "left-[7%] top-[16%] h-10 w-10 bg-accent-blue",
  "right-[9%] top-[24%] h-8 w-8 rounded-full bg-accent-pink",
  "left-[12%] top-[62%] h-12 w-12 rotate-12 bg-accent-green",
  "right-[14%] top-[68%] h-10 w-10 bg-primary",
  "left-[45%] top-[38%] h-7 w-7 rounded-full bg-surface",
];

export function BackgroundShapes() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {shapes.map((shape, index) => (
        <motion.div
          key={shape}
          className={`absolute rounded-2xl border-[3px] border-ink opacity-45 shadow-[4px_4px_0_var(--shadow)] ${shape}`}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  y: [0, index % 2 === 0 ? 16 : -16, 0],
                  rotate: [0, index % 2 === 0 ? 7 : -7, 0],
                }
          }
          transition={{
            duration: 5 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      <div className="absolute left-[78%] top-[44%] text-4xl font-black text-foreground opacity-40">
        *
      </div>
    </div>
  );
}
