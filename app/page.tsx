"use client";

import Link from "next/link";
import { useState } from "react";

const skills = [
  "Python",
  "C/C++",
  "JavaScript",
  "React",
  "Next.js",
  "HTML/CSS",
  "Git",
  "Linux",
  "Figma",
];

const projects = [
  {
    title: "PathBound",
    description:
      "A platform to discover and navigate personalized learning paths for career growth and skill development.",
    github: "https://github.com/Saurabh-1785/PathBound",
    demo: "https://pathbound.vercel.app/",
    status: "Completed" as const,
  },
  {
    title: "ResumeFlow",
    description:
      "An intuitive resume builder that helps users create professional resumes with customizable templates and real-time preview.",
    github: "https://github.com/Saurabh-1785/ResumeFlow.git",
    demo: "https://resume-flow-project.vercel.app/",
    status: "Completed" as const,
  },
  {
    title: "CodeSync",
    description:
      "A real-time collaborative code editor that allows multiple developers to write and sync code simultaneously.",
    github: "https://github.com/Saurabh-1785/CodeSync.git",
    demo: "https://code-sync-iv3p.vercel.app/",
    status: "Completed" as const,
  },
  {
    title: "VeriJS",
    description:
      "A JavaScript verification and testing utility that helps developers validate code logic and catch errors early.",
    github: "https://github.com/Saurabh-1785/VeriJS.git",
    demo: "https://veri-js-lake.vercel.app/",
    status: "In Progress" as const,
  },
];

export default function HomePage() {
  const [infoOpen, setInfoOpen] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-hidden">
      {/* Hero Card */}
      <div className="bg-card border-[1.5px] border-edge rounded-[20px] overflow-hidden transition-colors duration-200 delay-75 hover:border-edge-hover relative p-4 flex flex-col items-center md:min-h-[420px] lg:row-span-2">
        {/* Photo — hidden on mobile */}
        <div className="hidden md:flex w-full flex-1 rounded-2xl overflow-hidden">
          <img
            src="/Saurabh(white).webp"
            alt="Saurabh Chauhan"
            className="w-full h-full object-cover block dark:hidden"
          />
          <img
            src="/Saurabh(dark).webp"
            alt="Saurabh Chauhan"
            className="w-full h-full object-cover hidden dark:block"
          />
        </div>
        {/* Desktop name */}
        <h1 className="hidden md:block text-[28px] md:text-[32px] font-extrabold leading-[1.15] text-foreground text-center pt-4 pb-2">
          Saurabh<br />
          Chauhan
        </h1>
        {/* Mobile name + subtitle */}
        <div className="flex md:hidden flex-col items-center py-4 gap-1">
          <h1 className="text-2xl font-extrabold leading-tight text-foreground text-center">
            Saurabh Chauhan
          </h1>
          <p className="text-sm text-muted font-medium tracking-wide">
            Full-Stack Developer
          </p>
        </div>
      </div>

      {/* About Card */}
      <div className="bg-card border-[1.5px] border-edge rounded-[20px] p-7 transition-colors duration-200 delay-75 hover:border-edge-hover overflow-hidden lg:col-span-2 flex flex-col gap-4">
        <h3 className="text-sm font-semibold text-label uppercase tracking-wide">
          About
        </h3>
        <p className="text-[15px] text-secondary leading-[1.7] flex-1">
          Hello, my name is Saurabh Chauhan, and I&apos;m a software development enthusiast with a keen interest
          in creating efficient, effective, and robust digital solutions. My area of expertise includes backend
          development and algorithms. My area of interest involves creating high-performance solutions,
          solving complex computational problems, and creating solutions with strong engineering principles and real-world applicability.
        </p>
        <Link
          href="/projects"
          className="flex items-center justify-between py-3.5 px-5 bg-btn text-btn-text no-underline rounded-xl text-sm font-semibold transition-colors duration-200 delay-75 hover:bg-btn-hover focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
        >
          View My Work
          <span className="text-lg">↗</span>
        </Link>
      </div>

      {/* Social + CV Card */}
      <div className="bg-card border-[1.5px] border-edge rounded-[20px] transition-colors duration-200 delay-75 hover:border-edge-hover overflow-hidden flex flex-col">
        <div className="flex-1 flex items-center justify-center gap-8 p-6 border-b border-edge">
          <a
            href="https://github.com/Saurabh-1785"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-foreground transition-all duration-200 delay-75 flex items-center hover:text-muted hover:scale-[1.15]"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/saurabh-chauhan-a96413323/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-foreground transition-all duration-200 delay-75 flex items-center hover:text-muted hover:scale-[1.15]"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="mailto:saurabhchauhan1785@gmail.com"
            aria-label="Email"
            className="text-foreground transition-all duration-200 delay-75 flex items-center hover:text-muted hover:scale-[1.15]"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 4L12 13L2 4" />
            </svg>
          </a>
        </div>
        <div className="flex-1 flex items-center justify-center gap-5 p-6">
          <span className="text-4xl font-extrabold text-foreground leading-none">CV</span>
          <a
            href="/Resume.pdf"
            target="_blank"
            className="flex items-center gap-2 py-2 px-5 border-[1.5px] border-edge rounded-3xl bg-card text-foreground no-underline text-sm font-medium transition-all duration-200 delay-75 hover:bg-btn hover:text-btn-text hover:border-btn"
          >
            Download <span className="text-base">↓</span>
          </a>
        </div>
      </div>

      {/* Expertise Card */}
      <div className="bg-card border-[1.5px] border-edge rounded-[20px] p-7 transition-colors duration-200 delay-75 hover:border-edge-hover overflow-hidden md:col-span-2 lg:col-span-3 flex flex-col gap-4">
        <h3 className="text-sm font-semibold text-label uppercase tracking-wide">
          Expertise
        </h3>
        <div className="flex flex-wrap gap-2.5">
          {skills.map((skill) => (
            <span
              className="py-2 px-[18px] border-[1.5px] border-edge rounded-3xl text-[13px] font-medium text-secondary transition-all duration-200 delay-75 hover:bg-btn hover:text-btn-text hover:border-btn"
              key={skill}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div className="md:col-span-2 flex flex-col gap-4 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-card border-[1.5px] border-edge rounded-[20px] transition-colors duration-200 delay-75 hover:border-edge-hover overflow-hidden relative"
            >
              <div className="h-[120px] md:h-[140px] bg-white dark:bg-black" />
              <div className="px-5 md:px-6 pt-4 md:pt-5 pb-5 md:pb-6">
                <h4 className="text-base font-bold mb-2.5">
                  {project.title}
                </h4>
                <div className="flex gap-3 items-center">
                  {/* Info Button */}
                  <button
                    onClick={() => setInfoOpen(project.title)}
                    className="text-foreground transition-all duration-200 delay-75 flex items-center hover:text-accent hover:scale-[1.15] bg-transparent border-none cursor-pointer p-0"
                    aria-label={`Info about ${project.title}`}
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="16" x2="12" y2="12" />
                      <line x1="12" y1="8" x2="12.01" y2="8" />
                    </svg>
                  </button>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub`}
                      className="text-foreground transition-all duration-200 delay-75 flex items-center hover:text-accent hover:scale-[1.15]"
                    >
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} Live Demo`}
                      className="text-foreground transition-all duration-200 delay-75 flex items-center hover:text-accent hover:scale-[1.15]"
                    >
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border-[1.5px] border-edge bg-card-alt text-secondary transition-colors duration-200 delay-75 ${project.status === "Completed"
                      ? "hover:bg-btn hover:text-btn-text hover:border-btn"
                      : "hover:bg-btn hover:text-btn-text hover:border-btn"
                      }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link
          href="/projects"
          className="flex items-center justify-between py-3.5 px-5 bg-btn text-btn-text no-underline rounded-xl text-sm font-semibold transition-colors duration-200 delay-75 hover:bg-btn-hover focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
        >
          View All Projects
          <span className="text-lg">↗</span>
        </Link>
      </div>

      {/* Stats Bar */}
      <div className="col-span-1 md:col-span-2 bg-code border-[1.5px] border-edge rounded-[20px] overflow-hidden transition-colors duration-200 delay-75 hover:border-edge-hover h-full">
        <div className="flex flex-wrap h-full">
          <div className="w-1/2 flex flex-col items-center justify-center text-center border-r border-b border-edge p-4 md:p-6">
            <p className="text-3xl md:text-4xl font-extrabold text-code-text leading-none">15+</p>
            <p className="text-code-text text-xs md:text-sm font-medium mt-2">Projects</p>
          </div>
          <div className="w-1/2 flex flex-col items-center justify-center text-center border-b border-edge p-4 md:p-6">
            <p className="text-3xl md:text-4xl font-extrabold text-code-text leading-none">215+</p>
            <p className="text-code-text text-xs md:text-sm font-medium mt-2">GitHub Commits</p>
          </div>
          <div className="w-1/2 flex flex-col items-center justify-center text-center border-r border-edge p-4 md:p-6">
            <p className="text-3xl md:text-4xl font-extrabold text-code-text leading-none">280+</p>
            <p className="text-code-text text-xs md:text-sm font-medium mt-2">Contributions Made</p>
          </div>
          <div className="w-1/2 flex flex-col items-center justify-center text-center p-4 md:p-6">
            <p className="text-3xl md:text-4xl font-extrabold text-code-text leading-none">3</p>
            <p className="text-code-text text-xs md:text-sm font-medium mt-2">Events Organized</p>
          </div>
        </div>
      </div>

      {/* Info Modal */}
      {infoOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          onClick={() => setInfoOpen(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

          {/* Modal Card */}
          <div
            className="relative bg-card border-[1.5px] border-edge rounded-[20px] p-6 md:p-8 max-w-md w-full shadow-[0_24px_64px_var(--shadow)] animate-[modalIn_0.2s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setInfoOpen(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full border-[1.5px] border-edge bg-transparent text-foreground cursor-pointer flex items-center justify-center transition-all duration-200 delay-75 hover:bg-btn hover:text-btn-text hover:border-btn"
              aria-label="Close modal"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {(() => {
              const project = projects.find((p) => p.title === infoOpen);
              if (!project) return null;
              return (
                <>
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-xl font-bold text-foreground">
                      {project.title}
                    </h3>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border-[1.5px] ${project.status === "Completed"
                        ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-500/30"
                        : "bg-amber-500/15 text-amber-700 dark:text-amber-400 border-amber-500/30"
                        }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className="text-secondary text-[15px] leading-[1.8]">
                    {project.description}
                  </p>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
}
