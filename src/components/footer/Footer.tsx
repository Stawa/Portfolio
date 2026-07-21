import { Download, Mail } from "lucide-react";
import { siGithub, siX } from "simple-icons";
import type { SimpleIcon } from "simple-icons";

function SimpleIcon({ icon }: { icon: SimpleIcon }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 fill-current"
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  );
}

const iconLinkedIn = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 382 382"
    className="h-5 w-5 fill-current"
    aria-hidden="true"
  >
    <path
      fill="currentColor"
      d="M347.445 0H34.555C15.471 0 0 15.471 0 34.555v312.889C0 366.529 15.471 382 34.555 382h312.889C366.529 382 382 366.529 382 347.444V34.555C382 15.471 366.529 0 347.445 0zM118.207 329.844c0 5.554-4.502 10.056-10.056 10.056H65.345c-5.554 0-10.056-4.502-10.056-10.056V150.403c0-5.554 4.502-10.056 10.056-10.056h42.806c5.554 0 10.056 4.502 10.056 10.056V329.844zM86.748 123.432c-22.459 0-40.666-18.207-40.666-40.666S64.289 42.1 86.748 42.1s40.666 18.207 40.666 40.666-18.206 40.666-40.666 40.666zM341.91 330.654c0 5.106-4.14 9.246-9.246 9.246H286.73c-5.106 0-9.246-4.14-9.246-9.246v-84.168c0-12.556 3.683-55.021-32.813-55.021-28.309 0-34.051 29.066-35.204 42.11v97.079c0 5.106-4.139 9.246-9.246 9.246h-44.426c-5.106 0-9.246-4.14-9.246-9.246V149.593c0-5.106 4.14-9.246 9.246-9.246h44.426c5.106 0 9.246 4.14 9.246 9.246v15.655c10.497-15.753 26.097-27.912 59.312-27.912 73.552 0 73.131 68.716 73.131 106.472v86.846z"
    />
  </svg>
);

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Stawa",
    icon: <SimpleIcon icon={siGithub} />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/swarupa-damodara/",
    icon: iconLinkedIn,
  },
  {
    label: "X",
    href: "https://x.com/damodara_2008",
    icon: <SimpleIcon icon={siX} />,
  },
];

export function Footer() {
  return (
    <footer
      id="footer"
      className="border-t-[3px] border-ink bg-background text-foreground select-none"
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border-[3px] border-ink bg-surface p-6 shadow-[10px_10px_0_var(--shadow)] sm:p-8 lg:p-12">
          <div
            className="absolute -right-10 -top-10 h-36 w-36 rounded-full border-[3px] border-ink bg-accent-green"
            aria-hidden="true"
          />

          <p className="font-mono text-xs font-black uppercase tracking-widest text-accent-blue">
            Contact
          </p>

          <h2 className="mt-4 text-5xl font-black uppercase leading-none sm:text-6xl lg:text-7xl">
            Let&apos;s Connect.
          </h2>

          <p className="mt-5 max-w-xl text-lg leading-8 text-foreground/75">
            Whether it&apos;s a project, an internship, or a simple conversation
            about technology, my inbox is always open.
          </p>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t-[3px] border-ink pt-6">
            <a
              href="mailto:damodaraswarupa@gmail.com"
              className="inline-flex items-center gap-2 font-black uppercase underline decoration-primary decoration-[3px] underline-offset-4 transition-colors hover:text-primary"
            >
              <Mail className="h-4 w-4" />
              Email Me
            </a>

            <a
              href="/CV.pdf"
              download
              className="inline-flex items-center gap-2 transition-colors hover:text-primary"
            >
              <Download className="h-4 w-4" />

              <span className="font-black uppercase underline decoration-accent-blue decoration-[3px] underline-offset-4">
                Download CV
              </span>

              <span className="font-mono text-sm font-semibold text-foreground/60">
                • Updated 17 Jul 2026
              </span>
            </a>
          </div>
        </div>

        <div className="mt-10 grid gap-8 border-t-[3px] border-b-[3px] border-ink pt-8 pb-8 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div className="font-mono text-sm lg:text-start sm:text-center font-black uppercase text-foreground/70">
            &copy; Copyright 2026 Swarupa Damodara - All rights reserved.
          </div>
          <div className="flex flex-wrap gap-4 lg:justify-end sm:justify-center">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="focus-brutal inline-flex items-center gap-2 font-black uppercase text-foreground underline decoration-accent-blue decoration-4 underline-offset-4 transition-colors hover:text-primary"
              >
                {link.icon}
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
