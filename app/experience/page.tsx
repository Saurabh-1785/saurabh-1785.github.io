"use client";

import { useState } from "react";
import SpotlightGrid from "@/components/SpotlightGrid";

const experiences = [
  {
    title: "Google Developers Groups Ludhiana - NITH Chapter",
    description: "Actively involved in organizing technical workshops, hackathons, and community meetups to foster technological innovation and peer-to-peer learning. Working with the NITH Chapter to bridge the gap between academic learning and industry standards through Google technology-focused initiatives and collaborative projects.",
    duration: "2024 - Present",
    tags: ["Community", "Leadership", "Technical Events"]
  },
  {
    title: "TEDxNIT Hamirpur",
    description: "The official TEDx NIT Hamirpur 2026 website, designed and developed to represent the organization’s digital presence. Built with a modern, responsive interface, it delivers a seamless user experience across devices while showcasing events, speakers, and initiatives. The platform ensures structured content delivery, smooth navigation, and a professional interface for engaging audiences and promoting TEDx activities effectively.",
    duration: "2024 - Present",
    tags: ["Web Dev", "Branding", "Responsive Design"]
  }
];

export default function ExperiencePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto py-10 md:py-20">
      <div className="text-center mb-16 md:mb-24">
        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-foreground">
          Experience
        </h1>
      </div>

      <SpotlightGrid className="flex flex-col gap-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            data-spotlight-card
            className={`group bg-card border-[1.5px] rounded-[24px] transition-all duration-500 overflow-hidden relative cursor-pointer ${
              openIndex === index 
                ? "border-accent shadow-[0_0_30px_rgba(20,184,166,0.1)] dark:shadow-[0_0_30px_rgba(13,148,136,0.2)]" 
                : "border-edge hover:border-edge-hover"
            }`}
            onClick={() => toggleAccordion(index)}
          >
            {/* Horizontal Bar Header */}
            <div className="px-6 md:px-10 py-6 md:py-8 flex items-center justify-between">
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-10 w-full">
                <h3 className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
                  openIndex === index ? "text-accent" : "text-foreground group-hover:text-foreground"
                }`}>
                  {exp.title}
                </h3>
                <div className="flex items-center gap-3 md:ml-auto">
                  <span className="text-secondary text-[11px] font-extrabold tracking-[0.2em] uppercase opacity-50">
                    {exp.duration}
                  </span>
                </div>
              </div>
              <div className={`ml-6 shrink-0 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                openIndex === index ? 'rotate-180' : ''
              }`}>
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                  openIndex === index 
                    ? "bg-accent border-accent text-white" 
                    : "bg-transparent border-edge/30 text-secondary group-hover:border-accent/40 group-hover:bg-accent/5 group-hover:text-accent"
                }`}>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Expandable Content section */}
            <div
              className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 md:px-10 pb-8 md:pb-10 pt-2 text-secondary text-base md:text-lg leading-relaxed border-t border-edge/10 bg-edge/5 dark:bg-edge/10">
                  <div className={`transition-all duration-500 max-w-3xl ${
                    openIndex === index ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}>
                    <p className="mb-6 opacity-90">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                       {exp.tags.map(tag => (
                         <span key={tag} className="text-[10px] md:text-[11px] font-bold text-accent px-3 py-1.5 bg-accent/10 rounded-full uppercase tracking-widest border border-accent/20">
                            {tag}
                         </span>
                       ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </SpotlightGrid>
      
      <div className="mt-16 text-center">
        <p className="text-secondary text-sm opacity-60">
          More experiences coming soon...
        </p>
      </div>
    </div>
  );
}
