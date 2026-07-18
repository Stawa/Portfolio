"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

type IntroGateProps = {
  shouldShow: boolean;
};

export function IntroGate({ shouldShow }: IntroGateProps) {
  const [visible, setVisible] = useState(shouldShow);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Initializing Experience...");
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!visible) return;

    let frame: number;

    const duration = prefersReducedMotion ? 100 : 3000;
    const start = performance.now();

    const update = (time: number) => {
      const elapsed = time - start;
      const value = Math.min(100, Math.round((elapsed / duration) * 100));

      setProgress(value);

      if (value < 100) {
        frame = requestAnimationFrame(update);
      } else {
        setStatus("Welcome to my portfolio!");

        setTimeout(
          () => {
            setVisible(false);
          },
          prefersReducedMotion ? 100 : 300,
        );
      }
    };

    frame = requestAnimationFrame(update);

    return () => cancelAnimationFrame(frame);
  }, [visible, prefersReducedMotion]);

  useEffect(() => {
    if (!shouldShow) return;

    document.cookie =
      "portfolio_intro_seen=true; max-age=600; path=/; SameSite=Lax";

    const timeout = window.setTimeout(
      () => setVisible(false),
      prefersReducedMotion ? 400 : 2500,
    );

    return () => window.clearTimeout(timeout);
  }, [prefersReducedMotion, shouldShow]);

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          className="fixed inset-0 z-[999] overflow-hidden bg-background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -24,
          }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="relative flex h-full items-center justify-center px-6 select-none">
            <div className="w-full max-w-5xl text-center">
              <motion.p
                className="font-mono text-[11px] font-black uppercase tracking-[0.45em] text-primary sm:text-xs"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                Portfolio 2026
              </motion.p>

              <motion.h1
                className="mt-5 text-[clamp(3rem,12vw,7.5rem)] font-black uppercase leading-[0.88] tracking-[-0.05em]"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.25,
                }}
              >
                <motion.span
                  className="block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.25,
                  }}
                >
                  SWARUPA
                </motion.span>

                <motion.span
                  className="block text-primary"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.4,
                  }}
                >
                  DAMODARA
                </motion.span>
              </motion.h1>

              <motion.p
                className="mx-auto mt-6 max-w-2xl text-base font-medium leading-8 text-foreground/70 sm:text-lg md:text-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 0.7,
                }}
              >
                Turning garbage ideas into garbage projects. i think?
              </motion.p>

              <motion.p
                className="mt-3 text-sm font-medium uppercase tracking-[0.25em] text-foreground/45"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 0.85,
                }}
              >
                Bali · Indonesia
              </motion.p>

              <motion.div
                className="mx-auto mt-12 w-full max-w-xs sm:max-w-sm"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.95,
                  duration: 0.25,
                }}
              >
                <div className="mb-3 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/50">
                  <motion.span
                    key={status}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {status}
                  </motion.span>

                  <span>{progress}%</span>
                </div>

                <div className="relative h-[6px] overflow-hidden rounded-full border-2 border-ink bg-background">
                  <div
                    className="absolute inset-y-0 left-0 bg-primary transition-[width] duration-75 ease-linear"
                    style={{
                      width: `${progress}%`,
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
