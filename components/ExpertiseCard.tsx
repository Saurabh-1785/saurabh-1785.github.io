import React from "react";

interface ExpertiseCardProps {
  skills: string[];
}

export default function ExpertiseCard({ skills }: ExpertiseCardProps) {
  return (
    <div data-spotlight-card className="bg-card border-[1.5px] border-edge rounded-[20px] p-7 transition-colors duration-200 delay-75 hover:border-edge-hover overflow-hidden md:col-span-3 lg:col-span-3 flex flex-col gap-4">
      <h3 className="text-sm font-semibold text-label uppercase tracking-wide">
        Expertise
      </h3>
      <div className="flex flex-wrap md:flex-nowrap md:overflow-x-auto gap-2.5 pb-2 md:pb-0 no-scrollbar">
        {skills.map((skill) => (
          <span
            className="py-2 px-[18px] border-[1.5px] border-edge rounded-3xl text-[13px] font-medium text-secondary transition-all duration-200 delay-75 hover:bg-btn-hover hover:text-foreground"
            key={skill}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
