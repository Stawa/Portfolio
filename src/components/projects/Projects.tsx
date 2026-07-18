"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Archive, ArrowUpRight, Lock } from "lucide-react";
import { siGithub } from "simple-icons";

import { BrutalButton } from "@/components/ui/BrutalButton";
import {
  MotionSection,
  itemVariants,
  staggerContainer,
} from "@/components/ui/MotionSection";
import { accentClasses } from "@/lib/portfolio-data";
import type { Project } from "@/types/portfolio";

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

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const accents = ["yellow", "blue", "pink", "green"] as const;

  useEffect(() => {
    let ignore = false;

    async function loadProjects() {
      try {
        const res = await fetch("/api/projects");

        if (!res.ok) {
          throw new Error("Failed to fetch projects");
        }

        const data: Project[] = await res.json();

        if (!ignore) {
          setProjects(data);
        }
      } catch (err) {
        console.error(err);

        if (!ignore) {
          setError("Unable to load projects.");
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    loadProjects();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <MotionSection id="projects" className="section-shell">
      <div className="flex flex-col gap-4">
        <div className="mb-12 flex items-center gap-5">
          <div className="relative shrink-0">
            <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-md bg-foreground" />

            <div className="relative flex h-12 w-12 items-center justify-center rounded-md border-[3px] border-foreground bg-primary">
              <span className="text-lg font-black text-primary-foreground">
                02
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
                Projects
              </span>
            </div>
          </div>
        </div>

        <h2 className="section-title">
          A collection of software I&apos;ve built.
        </h2>
        <p className="text-lg leading-8 text-foreground/80">
          There are many projects I have worked on, some of them are open-source
          and available on GitHub, while others are private or archived.
        </p>
      </div>

      {loading ? (
        <div className="mt-12 flex h-48 items-center justify-center rounded-3xl border-[3px] border-foreground bg-surface">
          <p className="text-sm font-black uppercase tracking-widest">
            Loading Projects...
          </p>
        </div>
      ) : error ? (
        <div className="mt-12 flex h-48 items-center justify-center rounded-3xl border-[3px] border-foreground bg-surface">
          <p className="text-sm font-black uppercase tracking-widest text-red-500">
            {error}
          </p>
        </div>
      ) : projects.length === 0 ? (
        <div className="mt-12 flex h-48 items-center justify-center rounded-3xl border-[3px] border-foreground bg-surface">
          <p className="text-sm font-black uppercase tracking-widest">
            No Projects Found
          </p>
        </div>
      ) : (
        <motion.div
          className="mt-12 grid gap-6 lg:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {projects.map((project, index) => {
            const accent = project.accent ?? accents[index % accents.length];
            const tech = project.topics;

            return (
              <motion.article
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="group flex h-full flex-col rounded-3xl border-[3px] border-foreground bg-surface p-7"
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl border-[3px] border-foreground ${
                      accentClasses[accent]
                    }`}
                  >
                    <GithubIcon className="h-6 w-6" />
                  </div>
                  {project.archived && (
                    <span className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-zinc-100 px-3 py-1 text-[10px] font-black uppercase tracking-wider dark:bg-zinc-900">
                      <Archive className="h-3.5 w-3.5" />
                      Archived
                    </span>
                  )}
                </div>

                <div className="mt-6">
                  <h3 className="text-2xl font-black">{project.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-foreground/70">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border-2 border-foreground bg-background px-3 py-1 text-[10px] font-black uppercase"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex gap-3 pt-8">
                  {project.github ? (
                    <BrutalButton
                      href={project.github}
                      variant="light"
                      target="_blank"
                      icon={<GithubIcon className="h-4 w-4" />}
                      showArrow={false}
                      className="flex-1 justify-center"
                    >
                      GitHub
                    </BrutalButton>
                  ) : (
                    <BrutalButton
                      variant="light"
                      icon={<Lock className="h-4 w-4" />}
                      showArrow={false}
                      className="flex-1 cursor-default justify-center opacity-60"
                    >
                      Private
                    </BrutalButton>
                  )}

                  {project.demo && (
                    <BrutalButton
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      icon={<ArrowUpRight className="h-4 w-4" />}
                      variant={accent === "white" ? "yellow" : accent}
                      className="flex-1 justify-center"
                    >
                      Demo
                    </BrutalButton>
                  )}
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      )}
    </MotionSection>
  );
}
