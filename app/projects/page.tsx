"use client";

import { useState } from "react";

const projects = [
  {
    title: "PathBound",
    description: `
    Problem:
    Traditional currency exchange and remittance systems expose users to unpredictable exchange rates and hidden fees. In volatile markets, users often receive significantly less than expected, with little transparency or control over the conversion rate. Additionally, there is no mechanism to set conditions like minimum acceptable rates or timing, leaving users dependent on centralized intermediaries.

    Solution:
    PathBound addresses this by enabling rate-protected exchange intents using blockchain-based path payments. Users can define a minimum acceptable exchange rate and a valid time window for execution, ensuring better control and predictability. Funds remain secure under user custody until execution, and transactions are processed atomically, guaranteeing that exchanges either complete fully at the desired rate or not at all.`,
    tech: ["NEXT.JS", "REACT", "TAILWIND"],
    status: "Completed" as const,
    links: [
      { label: "Live Demo", href: "https://pathbound.vercel.app/" },
      { label: "View Code", href: "https://github.com/Saurabh-1785/PathBound" },
    ],
  },
  {
    title: "ResumeFlow",
    description: `
      An AI-powered CV generator that converts user input into a polished, ATS-optimized resume with professional formatting. It leverages real-time LaTeX compilation to provide instant preview and high-quality PDF output, ensuring accuracy, customization, and a seamless resume-building experience across devices.`,
    tech: ["REACT", "NODE.JS", "CSS"],
    status: "Completed" as const,
    links: [
      { label: "Live Demo", href: "https://resume-flow-project.vercel.app/" },
      { label: "View Code", href: "https://github.com/Saurabh-1785/ResumeFlow.git" },
    ],
  },
  {
    title: "CodeSync",
    description: `
    Problem:
    Traditional code collaboration relies on version control systems that are not truly real-time, leading to delays, merge conflicts, and inefficient teamwork. Developers often struggle with tracking changes, coordinating edits, and maintaining consistency when multiple people work on the same file simultaneously.

    Solution:
    CodeSync solves this by providing a real-time collaborative coding environment where multiple developers can edit code simultaneously with instant synchronization. Features like live cursors, user presence, and conflict-free editing using CRDTs ensure smooth collaboration. With built-in syntax highlighting and independent undo/redo history, it creates a seamless and efficient coding experience for teams working together from anywhere.`,
    tech: ["REACT", "SOCKET.IO", "NODE.JS"],
    status: "Completed" as const,
    links: [
      { label: "Live Demo", href: "https://code-sync-iv3p.vercel.app/" },
      { label: "View Code", href: "https://github.com/Saurabh-1785/CodeSync.git" },
    ],
  },
  {
    title: "VeriJS",
    description:
      "A JavaScript verification and testing utility that helps developers validate code logic and catch errors early.",
    tech: ["JAVASCRIPT", "NODE.JS"],
    status: "In Progress" as const,
    links: [
      { label: "Live Demo", href: "https://veri-js-lake.vercel.app/" },
      { label: "View Code", href: "https://github.com/Saurabh-1785/VeriJS.git" },
    ],
  },
  {
    title: "Interactive Tip Calculator",
    description:
      "A very effective platform to calculate Tip amount and its distribution among every individual.",
    tech: ["HTML", "CSS", "JAVASCRIPT"],
    status: "Completed" as const,
    links: [
      { label: "Live Demo", href: "https://saurabh-1785.github.io/interactive-tip-calculator/" },
      { label: "View Code", href: "https://github.com/Saurabh-1785/interactive-tip-calculator" },
    ],
  },
  {
    title: "Alternate Site Designs",
    description:
      "Figma based alternate design for various websites like Amazon, YouTube, and more — exploring modern UI patterns.",
    tech: ["FIGMA"],
    status: "In Progress" as const,
    links: [
      { label: "View", href: "https://www.figma.com/design/85sA25E2qpJEFeIbyxxelf/Alternate-design-sites?node-id=0-1&t=mPPWaAYJ0SUyhF9y-1" },
    ],
  },
  {
    title: "DevBoard",
    description:
      "A developer dashboard that aggregates GitHub stats, task management, and project tracking in one unified interface.",
    tech: ["REACT", "TYPESCRIPT", "TAILWIND"],
    status: "In Progress" as const,
    links: [
      { label: "View Code", href: "#" },
    ],
  },
  {
    title: "SnapNote",
    description:
      "A lightweight note-taking app with markdown support, tag-based organization, and cloud sync for seamless productivity.",
    tech: ["NEXT.JS", "MONGODB", "CSS"],
    status: "Completed" as const,
    links: [
      { label: "Live Demo", href: "#" },
      { label: "View Code", href: "#" },
    ],
  },
  {
    title: "QuizForge",
    description:
      "An interactive quiz platform where users can create, share, and attempt quizzes with real-time scoring and leaderboards.",
    tech: ["REACT", "FIREBASE", "TAILWIND"],
    status: "Completed" as const,
    links: [
      { label: "Live Demo", href: "#" },
      { label: "View Code", href: "#" },
    ],
  },
  {
    title: "BudgetBuddy",
    description:
      "A personal finance tracker that helps users manage expenses, set budgets, and visualize spending patterns with charts.",
    tech: ["REACT", "CHART.JS", "NODE.JS"],
    status: "Completed" as const,
    links: [
      { label: "Live Demo", href: "#" },
      { label: "View Code", href: "#" },
    ],
  },
  {
    title: "LinkTree Clone",
    description:
      "A customizable link-in-bio page builder with theme options, analytics tracking, and drag-and-drop link ordering.",
    tech: ["HTML", "CSS", "JAVASCRIPT"],
    status: "Completed" as const,
    links: [
      { label: "Live Demo", href: "#" },
      { label: "View Code", href: "#" },
    ],
  },
  {
    title: "CloudDeploy CLI",
    description:
      "A command-line tool that simplifies deploying web apps to cloud providers with one-command setup and configuration.",
    tech: ["NODE.JS", "PYTHON", "DOCKER"],
    status: "In Progress" as const,
    links: [
      { label: "View Code", href: "#" },
    ],
  },
];

// All projects data is defined at the top of the file

export default function ProjectsPage() {
  const [infoOpen, setInfoOpen] = useState<string | null>(null);

  return (
    <>
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold mb-3 text-foreground">
          My Projects
        </h2>
        <p className="text-muted text-base">
          Here are some of the projects I&apos;ve built recently
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => {
          const githubLink = project.links.find(
            (l) => l.label === "View Code" || (l.label === "View" && l.href.includes("github.com"))
          )?.href;
          const demoLink = project.links.find(
            (l) => l.label === "Live Demo" || (l.label === "View" && !l.href.includes("github.com"))
          )?.href;

          return (
            <div
              key={project.title}
              className="bg-card border-[1.5px] border-edge rounded-[20px] transition-colors duration-200 delay-75 hover:border-edge-hover overflow-hidden relative flex flex-col"
            >
              {/* Logo/Header */}
              <div className="h-[120px] bg-white dark:bg-black" />

              {/* Card Body */}
              <div className="px-5 md:px-6 pt-4 md:pt-5 pb-5 md:pb-6 bg-edge/10 dark:bg-edge/20 relative flex-1 flex flex-col">
                <h4 className="text-lg font-bold mb-3 text-foreground">
                  {project.title}
                </h4>

                <div className="flex gap-4 items-center">
                  {/* Info Button */}
                  <button
                    onClick={() => setInfoOpen(project.title)}
                    className="text-secondary transition-all duration-200 delay-75 flex items-center hover:text-accent hover:scale-[1.15] bg-transparent border-none cursor-pointer p-0"
                    aria-label={`Info about ${project.title}`}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="16" x2="12" y2="12" />
                      <line x1="12" y1="8" x2="12.01" y2="8" />
                    </svg>
                  </button>

                  {githubLink && (
                    <a
                      href={githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub`}
                      className="text-secondary transition-all duration-200 delay-75 flex items-center hover:text-accent hover:scale-[1.15]"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                  )}

                  {demoLink && (
                    <a
                      href={demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} Live Demo`}
                      className="text-secondary transition-all duration-200 delay-75 flex items-center hover:text-accent hover:scale-[1.15]"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                </div>

                <span className="absolute bottom-5 right-5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border-[1.5px] border-edge bg-card-alt text-secondary transition-all duration-200 delay-75 hover:bg-btn-hover hover:border-edge-hover">
                  {project.status}
                </span>
              </div>
            </div>
          );
        })}
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
            className="relative bg-card border-[1.5px] border-edge rounded-[20px] p-8 max-w-md w-full shadow-[0_24px_64px_var(--shadow)] animate-[modalIn_0.2s_ease-out]"
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
                  <div className="flex gap-2 flex-wrap mb-4">
                    {project.tech.map((tag) => (
                      <span
                        className="bg-card-alt text-secondary px-3 py-1 rounded-3xl text-[11px] font-semibold border-[1.5px] border-edge transition-all duration-200 delay-75 hover:bg-btn hover:text-btn-text hover:border-btn"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
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
    </>
  );
}
