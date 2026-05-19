// Hero.tsx
"use client";

import { useRef, useCallback } from "react";
import "./hero.css";
import BackgroundElements from "./components/backgroundElements/BackgroundElements";
import TextContent from "./components/textContent/TextContent";
import VisualSection from "./components/visualSection/VisualSection";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  // Store position in a ref — no state, no re-renders on mousemove
  const mousePos = useRef({ x: 0, y: 0 });
  const gradientRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    mousePos.current = { x, y };
    // Directly update the gradient DOM node — no React re-render
    if (gradientRef.current) {
      gradientRef.current.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(59,130,246,0.6) 0%, rgba(37,99,235,0.3) 30%, transparent 70%)`;
    }
  }, []);

  return (
    <div
      ref={heroRef}
      className="hero-container"
      onMouseMove={handleMouseMove}
    >
      {/* CSS-only particles — zero JS, zero layout cost */}
      <div className="css-particles" aria-hidden="true">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="css-particle" />
        ))}
      </div>

      <BackgroundElements gradientRef={gradientRef} />

      <div className="content-container">
        <div className="grid-layout">
          <TextContent />
          <VisualSection />
        </div>
      </div>
    </div>
  );
}
