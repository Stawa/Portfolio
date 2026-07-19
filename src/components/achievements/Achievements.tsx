"use client";

// import { motion } from "framer-motion";
import {
  MotionSection,
  // itemVariants,
  // staggerContainer,
} from "@/components/ui/MotionSection";
// import { achievements, accentClasses } from "@/lib/portfolio-data";

export function Achievements() {
  return (
    <MotionSection id="achievements" className="section-shell">
      <div className="flex flex-col gap-4">
        <div className="mb-12 flex items-center gap-5">
          <div className="relative shrink-0">
            <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-md bg-foreground" />

            <div className="relative flex h-12 w-12 items-center justify-center rounded-md border-[3px] border-foreground bg-primary">
              <span className="text-lg font-black text-primary-foreground">
                04
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
              <span className="text-xs font-black uppercase tracking-[0.28em]">
                Achievements
              </span>
            </div>
          </div>
        </div>

        {/* <h2 className="section-title">Coming Soon.</h2> */}
      </div>

      <div className="mt-12 rounded-3xl border-[3px] border-dashed border-foreground bg-surface p-12 text-center">
        <span className="rounded-full border-[2px] border-foreground bg-background px-4 py-2 text-xs font-black uppercase tracking-[0.3em]">
          Under Construction
        </span>

        <h3 className="mt-6 text-4xl font-black">Achievements Section</h3>

        <p className="mt-4 text-foreground/70">
          This section is being crafted with care.
        </p>
      </div>
    </MotionSection>
  );
}
