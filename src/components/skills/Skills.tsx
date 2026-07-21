"use client";

import { MotionSection } from "@/components/ui/MotionSection";
// import { accentClasses, skillGroups } from "@/lib/portfolio-data";
// import type { Accent } from "@/types/portfolio";

// const shadowClasses: Record<Accent, string> = {
//   yellow: "bg-yellow-400/35 dark:bg-yellow-300/25",
//   blue: "bg-sky-500/35 dark:bg-sky-400/25",
//   pink: "bg-pink-500/35 dark:bg-pink-400/25",
//   green: "bg-emerald-500/35 dark:bg-emerald-400/25",
//   white: "bg-zinc-400/35 dark:bg-zinc-200/20",
// };

export function Skills() {
  return (
    <MotionSection id="skills" className="section-shell">
      <div className="flex flex-col gap-4">
        <div className="mb-12 flex items-center gap-5">
          <div className="relative shrink-0">
            <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-md bg-foreground" />

            <div className="relative flex h-12 w-12 items-center justify-center rounded-md border-[3px] border-foreground bg-primary">
              <span className="text-lg font-black text-primary-foreground">
                03
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
                Skills
              </span>
            </div>
          </div>
        </div>

        <h2 className="section-title">More than just code</h2>

        <p className="text-lg leading-8 text-foreground/75">
          It&apos;s not just about writing code, but I also understand of
          aspects of software development, hardware, and IoT. My skills is
          limited due to my experience, but I am always eager to learn and
          improve.
        </p>
      </div>

      <div className="mt-12 rounded-3xl border-[3px] border-dashed border-foreground bg-surface p-12 text-center">
        <span className="rounded-full border-[2px] border-foreground bg-background px-4 py-2 text-xs font-black uppercase tracking-[0.3em]">
          Under Construction
        </span>

        <h3 className="mt-6 text-4xl font-black">Skills Section</h3>

        <p className="mt-4 text-foreground/70">
          This section is being crafted with care.
        </p>
      </div>

      {/* <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className="group relative transition-transform duration-200 hover:-translate-y-1.5 sm:hover:-translate-y-2"
          >
            <div
              className={`absolute inset-0 translate-x-2 translate-y-2 rounded-2xl sm:translate-x-3 sm:translate-y-3 sm:rounded-[28px] ${shadowClasses[group.accent]}`}
            />

            <div className="relative flex h-full flex-col rounded-2xl border-2 border-foreground bg-surface p-5 focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2 focus-within:ring-offset-background sm:rounded-[28px] sm:border-[3px] sm:p-7">
              <span
                className={`mb-5 inline-flex w-fit rounded-full border-2 border-foreground px-3.5 py-1 text-[10px] font-black uppercase tracking-[0.24em] sm:mb-6 sm:border-[3px] sm:px-4 sm:py-1.5 sm:text-[11px] sm:tracking-[0.28em] ${accentClasses[group.accent]}`}
              >
                {group.title}
              </span>

              <p className="mb-6 line-clamp-4 text-sm leading-6 text-foreground/70 sm:mb-7 sm:text-base sm:leading-7">
                {group.description}
              </p>

              <div className="mt-auto flex flex-wrap gap-2.5 sm:gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    tabIndex={0}
                    className="rounded-full border-2 border-foreground bg-background px-3.5 py-1.5 text-xs font-bold transition-transform duration-150 hover:-rotate-1 active:-rotate-1 sm:border-[3px] sm:px-4 sm:py-2 sm:text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div> */}
    </MotionSection>
  );
}
