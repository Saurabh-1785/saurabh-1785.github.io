"use client";

import React, { useRef, useCallback, useEffect, useState } from "react";

/**
 * SpotlightGrid — a lightweight wrapper that adds a mouse-following
 * spotlight + per-card border-glow effect to its children grid.
 */

interface SpotlightGridProps {
  children: React.ReactNode;
  className?: string;
  /** Radius (px) of the spotlight influence area */
  radius?: number;
  /** RGB string for the glow color, e.g. "20, 184, 166" */
  glowRgb?: string;
}

export default function SpotlightGrid({
  children,
  className = "",
  radius = 350,
  glowRgb = "20, 184, 166",
}: SpotlightGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const spotRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const rafRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, inside: false });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const updateCards = useCallback(() => {
    const grid = gridRef.current;
    if (!grid || !mouseRef.current.inside) return;

    if (!cardsRef.current.length) {
      cardsRef.current = Array.from(grid.querySelectorAll<HTMLElement>("[data-spotlight-card]"));
    }

    const { x, y } = mouseRef.current;
    const cards = cardsRef.current;

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const relX = ((x - rect.left) / rect.width) * 100;
      const relY = ((y - rect.top) / rect.height) * 100;

      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dist = Math.hypot(x - cx, y - cy) - Math.max(rect.width, rect.height) / 2;
      const intensity = Math.max(0, 1 - Math.max(0, dist) / radius);

      card.style.setProperty("--glow-x", `${relX}%`);
      card.style.setProperty("--glow-y", `${relY}%`);
      card.style.setProperty("--glow-intensity", intensity.toFixed(3));
    });

    if (spotRef.current) {
      spotRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      spotRef.current.style.opacity = "1";
    }
  }, [radius]);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, inside: true };
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateCards);
    },
    [updateCards]
  );

  const handleMouseLeave = useCallback(() => {
    mouseRef.current.inside = false;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    // Reset all cards
    const grid = gridRef.current;
    if (grid) {
      grid
        .querySelectorAll<HTMLElement>("[data-spotlight-card]")
        .forEach((card) => {
          card.style.setProperty("--glow-intensity", "0");
        });
    }
    if (spotRef.current) spotRef.current.style.opacity = "0";
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const grid = gridRef.current;
    if (!grid) return;

    grid.addEventListener("mousemove", handleMouseMove);
    grid.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      grid.removeEventListener("mousemove", handleMouseMove);
      grid.removeEventListener("mouseleave", handleMouseLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isMobile, handleMouseMove, handleMouseLeave]);

  return (
    <div ref={gridRef} className={`relative ${className}`}>
      {!isMobile && (
        <div
          ref={spotRef}
          className="pointer-events-none fixed z-0 rounded-full opacity-0"
          style={{
            width: radius * 2,
            height: radius * 2,
            background: `radial-gradient(circle, rgba(${glowRgb}, 0.07) 0%, rgba(${glowRgb}, 0.03) 40%, transparent 70%)`,
            transition: "opacity 0.3s ease",
          }}
        />
      )}
      {children}
    </div>
  );
}
