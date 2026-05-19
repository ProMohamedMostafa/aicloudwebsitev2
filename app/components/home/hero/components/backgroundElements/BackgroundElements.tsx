// BackgroundElements.tsx — no framer-motion, CSS-driven animations
"use client";

import { RefObject } from "react";

interface BackgroundElementsProps {
  gradientRef: RefObject<HTMLDivElement | null>;
}

export default function BackgroundElements({ gradientRef }: BackgroundElementsProps) {
  return (
    <>
      {/* Mouse-following gradient — updated via direct DOM ref, no re-render */}
      <div ref={gradientRef} className="mouse-gradient" />

      {/* Pure CSS animated orbs — GPU-composited, no JS */}
      <div className="animated-background" aria-hidden="true">
        <div className="circle-1" />
        <div className="circle-2" />
        <div className="circle-3" />
        <div className="circle-4" />
        <div className="circle-5" />
      </div>

      {/* Grid pattern overlay */}
      <div className="grid-overlay">
        <div className="grid-pattern" />
      </div>
    </>
  );
}
