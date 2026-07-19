"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BrutalButton } from "@/components/ui/BrutalButton";

export function Hero() {
  return (
    <section
      id="home"
      className="section-shell grid min-h-[calc(100svh-6rem)] items-center gap-16 pt-10 lg:grid-cols-[1.1fr_0.9fr]"
    >
      {/* LEFT */}
      <div>
        <motion.h1
          className="mt-7 text-6xl font-black leading-[0.9] sm:text-7xl md:text-8xl xl:text-9xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.55 }}
        >
          Less <span className="text-accent-pink">Talk.</span>
          <br />
          More <span className="text-accent-blue">Action.</span>
        </motion.h1>

        <motion.p
          className="mt-8 max-w-2xl text-lg font-semibold leading-8 text-justify text-neutral-700 sm:text-xl dark:text-neutral-300"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.55 }}
        >
          I have lots of ideas, and I enjoy turning them into software. Not
          every project is useful, but that doesn&apos;t stop me from building.
          I love to learn and explore new technologies.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.34, duration: 0.55 }}
        >
          <BrutalButton href="#projects" variant="dark">
            View Projects
          </BrutalButton>

          <BrutalButton href="#footer" variant="yellow">
            Contact Me
          </BrutalButton>
        </motion.div>
      </div>

      {/* RIGHT */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="relative mx-auto flex aspect-square w-full max-w-lg items-center justify-center"
      >
        {/* rotating decoration */}
        <motion.div
          className="absolute inset-0 rounded-[40px] border-4 border-black bg-accent-yellow"
          animate={{ rotate: [0, 3, -3, 0] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* blue block */}
        <motion.div
          className="absolute -right-6 -top-6 h-40 w-40 brutal-border bg-accent-blue shadow-[8px_8px_0_var(--black)]"
          animate={{
            y: [0, -12, 0],
            rotate: [0, 6, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* pink block */}
        <motion.div
          className="absolute -bottom-5 -left-5 h-28 w-28 brutal-border bg-accent-pink shadow-[8px_8px_0_var(--black)]"
          animate={{
            y: [0, 10, 0],
            rotate: [0, -8, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* profile card */}
        <motion.div
          whileHover={{
            rotate: -2,
            y: -8,
          }}
          transition={{
            type: "spring",
            stiffness: 250,
          }}
          className="relative z-10 w-[82%] rounded-[28px] brutal-border bg-surface p-6 shadow-[14px_14px_0_var(--black)]"
        >
          <div className="relative aspect-square overflow-hidden rounded-2xl brutal-border">
            <Image
              src="https://avatars.githubusercontent.com/u/69102292?v=4"
              alt="Swarupa Damodara"
              fill
              priority
              sizes="(max-width: 768px) 80vw, 320px"
              className="object-cover"
            />
          </div>

          <div className="mt-5 text-center">
            <h3 className="text-3xl font-black">Swarupa Damodara</h3>

            <p className="mt-2 font-bold text-neutral-600 dark:text-neutral-400">
              Software Developer • Indonesia
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
