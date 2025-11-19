// Optimized Hero.tsx - Remove particles.js and use CSS alternatives
"use client";

import { useRef, useState, useEffect } from "react";
import "./hero.css";
import BackgroundElements from "./components/backgroundElements/BackgroundElements";
import TextContent from "./components/textContent/TextContent";
import VisualSection from "./components/visualSection/VisualSection";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Remove particles.js entirely - use CSS animations instead
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const x = (clientX - left) / width;
    const y = (clientY - top) / height;

    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={heroRef}
      className="hero-container"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* CSS-based particles replacement */}
      <div className="css-particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>

      <BackgroundElements mousePosition={mousePosition} />

      <div className="content-container">
        <div className="grid-layout">
          <TextContent onMouseMove={handleMouseMove} />
          <VisualSection
            mousePosition={mousePosition}
            onMouseMove={handleMouseMove}
          />
        </div>
      </div>
    </div>
  );
}
