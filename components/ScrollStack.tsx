"use client";

import React, { useEffect, useRef, useCallback } from "react";
import type { ReactNode } from "react";

/* ─────────── ScrollStackItem ─────────── */
export interface ScrollStackItemProps {
  children: ReactNode;
  className?: string;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({
  children,
  className = "",
}) => (
  <div
    className={`scroll-stack-card ${className}`.trim()}
    style={{
      position: "relative",
      width: "100%",
      transformOrigin: "top center",
      willChange: "transform",
      backfaceVisibility: "hidden",
    }}
  >
    {children}
  </div>
);

interface ScrollStackProps {
  children: ReactNode;
  className?: string;
  cardGap?: number;
  scaleStep?: number;
  stackGap?: number;
  pinOffset?: number;
}

const clamp = (v: number, lo: number, hi: number) =>
  Math.min(hi, Math.max(lo, v));

export default function ScrollStack({
  children,
  className = "",
  cardGap = 32,
  scaleStep = 0.035,
  stackGap = 12,
  pinOffset = 0.15,
}: ScrollStackProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const prevRef = useRef<string[]>([]);

  const update = useCallback(() => {
    const cards = cardsRef.current;
    if (!cards.length) return;

    const scrollY = window.scrollY;
    const vh = window.innerHeight;
    const pinTop = vh * pinOffset;
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const sentinel = wrapper.querySelector<HTMLElement>(".scroll-stack-end");
    const wrapperTop = wrapper.getBoundingClientRect().top + scrollY;
    const sentinelTop = sentinel
      ? sentinel.getBoundingClientRect().top + scrollY
      : wrapperTop + wrapper.offsetHeight;

    cards.forEach((card, i) => {
      const cachedTop = parseFloat(card.dataset.naturalTop || "0");
      const pinStart = cachedTop - pinTop - stackGap * i;
      const pinEnd = sentinelTop - vh * 0.55;

      let translateY = 0;
      const isPinned = scrollY >= pinStart && scrollY <= pinEnd;

      if (isPinned) {
        translateY = scrollY - cachedTop + pinTop + stackGap * i;
      } else if (scrollY > pinEnd) {
        translateY = pinEnd - cachedTop + pinTop + stackGap * i;
      }

      const progress = clamp((scrollY - pinStart) / (vh * 0.5), 0, 1);
      const targetScale = 1 - (cards.length - 1 - i) * scaleStep;
      const scale = 1 - progress * (1 - targetScale);

      let blur = 0;
      let opacity = 1;
      let topIndex = -1;

      for (let j = 0; j < cards.length; j++) {
        const jTop = parseFloat(cards[j].dataset.naturalTop || "0");
        if (scrollY >= jTop - pinTop - stackGap * j) {
          topIndex = j;
        }
      }

      if (i < topIndex) {
        const depth = topIndex - i;
        blur = Math.min(depth * 1.5, 4);
        opacity = Math.max(1 - depth * 0.15, 0.4);
      }

      const ty = Math.round(translateY * 10) / 10;
      const sc = Math.round(scale * 1000) / 1000;
      const bl = Math.round(blur * 10) / 10;
      const op = Math.round(opacity * 100) / 100;
      
      const key = `${ty}|${sc}|${bl}|${op}`;

      if (prevRef.current[i] !== key) {
        prevRef.current[i] = key;
        card.style.transform = `translate3d(0,${ty}px,0) scale(${sc})`;
        card.style.filter = bl > 0 ? `blur(${bl}px)` : "none";
        card.style.opacity = op.toString();
        card.style.zIndex = (i + 1).toString();
      }
    });
  }, [pinOffset, scaleStep, stackGap]);

  useEffect(() => {
    const initPositions = () => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;
      const cards = Array.from(wrapper.querySelectorAll<HTMLElement>(".scroll-stack-card"));
      cardsRef.current = cards;
      
      const wrapperTop = wrapper.getBoundingClientRect().top + window.scrollY;
      
      cards.forEach((card, i) => {
        const originalTransform = card.style.transform;
        card.style.transform = "none";
        const naturalTop = card.offsetTop + wrapperTop;
        card.dataset.naturalTop = naturalTop.toString();
        card.style.transform = originalTransform;

        if (i < cards.length - 1) {
          card.style.marginBottom = `${cardGap}px`;
        }
      });
      update();
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          update();
          ticking = false;
        });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", initPositions, { passive: true });
    
    const timer = setTimeout(initPositions, 100);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", initPositions);
      clearTimeout(timer);
    };
  }, [update, cardGap]);

  return (
    <div ref={wrapperRef} className={className}>
      {children}
      <div className="scroll-stack-end w-full h-px" />
    </div>
  );
}
