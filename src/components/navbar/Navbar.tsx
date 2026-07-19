"use client";

import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "achievements", label: "Achievements" },
  { id: "footer", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const { scrollY } = useScroll();

  const handleMobileNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    event.preventDefault();
    setOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (!element) return;
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      window.history.replaceState(null, "", `#${id}`);
    }, 250);
  };

  useEffect(() => {
    return scrollY.on("change", (latest) => setScrolled(latest > 24));
  }, [scrollY]);

  useEffect(() => {
    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActive(visible.target.id);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: 0.05,
      },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-3 z-40 mx-auto w-[calc(100%-1rem)] max-w-7xl transition-all duration-300 sm:top-4 ${
        scrolled ? "mt-2" : "mt-4"
      }`}
    >
      <nav
        className={`overflow-hidden rounded-2xl border-[2px] border-ink backdrop-blur-md transition-all duration-300 ${
          scrolled
            ? "bg-surface/95 shadow-[5px_5px_0_var(--shadow)]"
            : "bg-surface/88 shadow-[4px_4px_0_var(--shadow)]"
        }`}
        aria-label="Primary navigation"
      >
        <div
          className={`flex items-center justify-between gap-5 px-5 transition-all duration-300 sm:px-7 lg:px-8 ${scrolled ? "py-3" : "py-4"}`}
        >
          <a
            href="#home"
            className="focus-brutal group inline-flex items-center gap-2 font-black uppercase tracking-normal text-foreground"
            onClick={() => setOpen(false)}
            aria-label="Go to home"
          >
            <span className="text-xl leading-none">SD</span>
            <span
              className="h-2 w-2 rounded-full bg-primary transition-transform group-hover:scale-125"
              aria-hidden="true"
            />
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`focus-brutal rounded-lg px-3 py-2 text-xs font-black uppercase transition-colors ${
                  active === section.id
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/80 hover:bg-muted"
                }`}
              >
                {section.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            className="focus-brutal flex h-10 w-10 items-center justify-center rounded-xl text-foreground transition-colors hover:bg-muted lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="relative block h-4 w-5" aria-hidden="true">
              <span
                className={`absolute left-0 top-0 h-[3px] w-5 bg-ink transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 top-[6px] h-[3px] w-5 bg-ink transition-opacity ${open ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`absolute left-0 top-3 h-[3px] w-5 bg-ink transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              className="border-t-2 border-ink/70 bg-surface/98 lg:hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="grid gap-1 px-5 py-4 sm:px-7">
                {sections.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`focus-brutal rounded-lg px-3 py-3 text-sm font-black uppercase transition-colors ${
                      active === item.id
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground/80 hover:bg-muted hover:text-foreground"
                    }`}
                    onClick={(event) => handleMobileNavClick(event, item.id)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </nav>
    </header>
  );
}
