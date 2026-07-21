"use client";

import { motion } from "framer-motion";
import {
  MotionSection,
  itemVariants,
  staggerContainer,
} from "@/components/ui/MotionSection";

export function About() {
  return (
    <MotionSection id="about" className="section-shell">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="mb-12 flex items-center gap-5">
          <div className="relative shrink-0">
            <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-md bg-foreground" />

            <div className="relative flex h-12 w-12 items-center justify-center rounded-md border-[3px] border-foreground bg-primary">
              <span className="text-lg font-black text-primary-foreground">
                01
              </span>
            </div>
          </div>
          <div className="relative h-[3px] flex-1 bg-foreground">
            <div className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[2px] border-[3px] border-foreground bg-accent-pink" />
            <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-foreground" />
          </div>
          <div className="relative shrink-0">
            <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-md bg-foreground" />
            <div className="relative rounded-md border-[3px] border-foreground bg-surface px-5 py-2">
              <span className="text-xs font-black uppercase tracking-[0.28em] text-foreground">
                About
              </span>
            </div>
          </div>
        </div>

        <motion.h2
          variants={itemVariants}
          className="mt-4 max-w-5xl text-5xl font-black leading-[0.9] md:text-7xl xl:text-8xl"
        >
          Who I am
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="mt-8 space-y-6 text-lg leading-8 text-foreground/80"
        >
          <p>
            Hello, I&apos;m{" "}
            <span className="font-black text-foreground">Swarupa Damodara</span>
            , a <span className="font-bold">Software Engineering student</span>{" "}
            from Indonesia who enjoys turning ideas into software.
          </p>

          <div className="border-l-4 border-black pl-6 dark:border-white">
            <p>
              My interest in technology started in junior high school, where I
              learned
              <span className="font-semibold text-foreground">
                {" "}
                Python, Node.js, JavaScript, and TypeScript
              </span>{" "}
              while building Discord bots and experimenting with APIs. Seeing
              different services communicate with each other sparked my
              curiosity and motivated me to keep exploring.
            </p>

            <p>
              During senior high school, I expanded into
              <span className="font-semibold text-foreground">
                {" "}
                Backend development
              </span>
              ,{" "}
              <span className="font-semibold text-foreground">
                {" "}
                API development
              </span>
              , and <span className="font-semibold text-foreground">
                {" "}
                IoT
              </span>{" "}
              discovering that I enjoyed building things as much as learning how
              they worked.
            </p>
          </div>

          <div className="mt-8 border-l-[4px] border-foreground pl-6">
            <blockquote className="mt-4 italic leading-7 font-semibold text-foreground">
              This may sounds like a lot, but honestly, I&apos;m not a master of
              all these technologies. I may forget some syntax, or struggle with
              certain concepts.
            </blockquote>
          </div>
        </motion.div>
      </motion.div>
    </MotionSection>
  );
}
