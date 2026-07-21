"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, TrophyIcon } from "lucide-react";
import { useState } from "react";
import { BrutalButton } from "@/components/ui/BrutalButton";
import { MotionSection } from "@/components/ui/MotionSection";
import { achievements } from "@/lib/portfolio-data";
import { siGithub } from "simple-icons";
import Image from "next/image";

const GithubIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d={siGithub.path} />
  </svg>
);

export function Achievements() {
  const [open, setOpen] = useState<number | null>(null);

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

        <h2 className="section-title">Recognition through innovation.</h2>

        <p className="text-lg leading-8 text-foreground/75">
          Each milestone is evidence of the success of a challenge, the
          accomplishment of an idea, and the fervor for developing technology
          that serves a purpose.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {achievements.map((achievement, index) => {
          const isOpen = open === index;

          return (
            <article key={achievement.title} className="group relative">
              <div className="absolute inset-0 translate-x-2.5 translate-y-2.5 rounded-[28px] bg-primary/35" />

              <div
                onClick={() => setOpen(isOpen ? null : index)}
                className="relative cursor-pointer rounded-[28px] border-[3px] border-foreground bg-surface transition-all duration-200 hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-3xl transition-transform duration-300 group-hover:rotate-6">
                      {achievement.icon && (
                        <Image
                          src={`/${achievement.icon}`}
                          alt={achievement.title}
                          className="h-full w-full object-cover"
                          width={150}
                          height={150}
                        />
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-xl font-black">
                        {achievement.title}
                      </h3>

                      <p className="mt-1 text-sm text-foreground/75">
                        {achievement.label}
                      </p>
                    </div>

                    <ChevronDown
                      className={`mt-1 h-6 w-6 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  <AnimatePresence mode="wait" initial={false}>
                    {isOpen && (
                      <motion.div
                        className="overflow-hidden"
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{
                          height: {
                            duration: 0.35,
                            ease: [0.4, 0, 0.2, 1],
                          },
                        }}
                      >
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{
                            opacity: {
                              duration: 0.18,
                            },
                            y: {
                              duration: 0.22,
                              ease: [0.4, 0, 0.2, 1],
                            },
                          }}
                        >
                          <div className="pt-6 pb-8">
                            <p className="text-sm leading-7 text-justify text-foreground/75">
                              {achievement.description}
                            </p>

                            <div className="mt-5 flex flex-wrap gap-2">
                              {[
                                achievement.award,
                                achievement.category,
                                achievement.year?.toString(),
                              ]
                                .filter((v): v is string => !!v)
                                .map((tag) => (
                                  <span
                                    key={tag}
                                    className="rounded-full border-[2px] border-foreground bg-background px-3 py-1 text-xs font-bold transition-transform hover:-rotate-2"
                                  >
                                    {tag}
                                  </span>
                                ))}
                            </div>

                            {(achievement.projectUrl ||
                              achievement.competitionUrl) && (
                              <div className="mt-8 border-t-[3px] border-dashed border-foreground pt-6">
                                <div className="flex flex-wrap gap-3">
                                  {achievement.projectUrl && (
                                    <div
                                      className="min-w-[180px] flex-1"
                                      onClick={(e) => e.stopPropagation()}
                                    >
                                      <BrutalButton
                                        href={achievement.projectUrl}
                                        variant="light"
                                        target="_blank"
                                        icon={
                                          <GithubIcon className="h-4 w-4" />
                                        }
                                        showArrow={false}
                                        className="w-full"
                                      >
                                        View Project
                                      </BrutalButton>
                                    </div>
                                  )}

                                  {achievement.competitionUrl && (
                                    <div
                                      className="min-w-[180px] flex-1"
                                      onClick={(e) => e.stopPropagation()}
                                    >
                                      <BrutalButton
                                        href={achievement.competitionUrl}
                                        variant="yellow"
                                        target="_blank"
                                        icon={
                                          <TrophyIcon className="h-4 w-4" />
                                        }
                                        showArrow={false}
                                        className="w-full"
                                      >
                                        View Competition
                                      </BrutalButton>
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </MotionSection>
  );
}
