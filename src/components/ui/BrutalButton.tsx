"use client";

import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type BrutalButtonProps = HTMLMotionProps<"a"> & {
  children: ReactNode;
  variant?: "dark" | "light" | "yellow" | "blue" | "pink" | "green";
  icon?: ReactNode;
  showArrow?: boolean;
};

const variants = {
  dark: "bg-foreground text-primary-foreground",
  light: "bg-surface text-foreground",
  yellow: "bg-primary text-primary-foreground",
  blue: "bg-accent-blue text-primary-foreground",
  pink: "bg-accent-pink text-primary-foreground",
  green: "bg-accent-green text-primary-foreground",
};

export function BrutalButton({
  children,
  className = "",
  variant = "light",
  icon,
  showArrow = false,
  ...props
}: BrutalButtonProps) {
  return (
    <motion.a
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 18,
        mass: 0.8,
      }}
      className={`
        group
        relative
        inline-flex
        min-h-14
        items-center
        justify-center
        gap-2
        overflow-hidden
        rounded-xl
        border-4
        border-black
        px-6
        py-3
        text-sm
        font-black
        uppercase
        tracking-wide
        shadow-[8px_8px_0_0_#000]
        transition-all
        duration-150
        hover:shadow-[12px_12px_0_0_#000]
        active:shadow-[2px_2px_0_0_#000]
        focus-visible:outline-none
        focus-visible:ring-4
        focus-visible:ring-black/20
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {/* subtle shine */}
      <span className="absolute inset-0 -translate-x-full bg-white/15 transition-transform duration-500 group-hover:translate-x-full" />

      <span className="relative z-10 flex items-center gap-2">
        {icon}
        {children}
      </span>

      {showArrow && (
        <motion.span
          className="relative z-10"
          initial={{ x: 0 }}
          whileHover={{ x: 3 }}
        >
          <ArrowUpRight size={18} strokeWidth={3} />
        </motion.span>
      )}
    </motion.a>
  );
}
