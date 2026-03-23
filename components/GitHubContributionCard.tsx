"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

type ThemeMode = "light" | "dark";

export default function GitHubContributionCard() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.getAttribute("data-theme") === "dark"
        ? "dark"
        : "light";
    }
    return "light";
  });

  useEffect(() => {
    const syncTheme = () => {
      setTheme(
        document.documentElement.getAttribute("data-theme") === "dark"
          ? "dark"
          : "light"
      );
    };

    syncTheme();

    const observer = new MutationObserver(syncTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="col-span-1 md:col-span-2 lg:col-span-4 bg-code border-[1.5px] border-edge rounded-[20px] transition-colors duration-200 delay-75 hover:border-edge-hover p-4 md:p-6 overflow-hidden">
      <h3 className="text-sm font-semibold text-label uppercase tracking-wide">
        GitHub Contributions
      </h3>
      <div className="mt-4 flex justify-center overflow-hidden [&_svg]:max-w-full [&_svg]:h-auto">
        <GitHubCalendar
          username="Saurabh-1785"
          year="last"
          colorScheme={theme}
          blockSize={12}
          blockMargin={4}
          fontSize={14}
          showTotalCount
          showWeekdayLabels
          showColorLegend
          showMonthLabels
          theme={{
            light: ["var(--color-card-alt)", "var(--color-accent)"],
            dark: ["var(--color-card-alt)", "var(--color-accent)"],
          }}
        />
      </div>
    </section>
  );
}