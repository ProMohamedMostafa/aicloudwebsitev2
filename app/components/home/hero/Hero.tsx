// Hero.tsx - Alternative CDN approach
"use client";

import { useRef, useState, useEffect } from "react";

import "./hero.css";
import BackgroundElements from "./components/backgroundElements/BackgroundElements";
import TextContent from "./components/textContent/TextContent";
import VisualSection from "./components/visualSection/VisualSection";

declare global {
  interface Window {
    particlesJS: any;
  }
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Load particles.js from CDN
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
    script.async = true;

    script.onload = () => {
      if (window.particlesJS && particlesRef.current) {
        window.particlesJS("particles-js", {
          particles: {
            number: {
              value: 70,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
            },
            opacity: {
              value: 0.3,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "grab",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 140,
                line_linked: {
                  opacity: 0.4,
                },
              },
              push: {
                particles_nb: 4,
              },
            },
          },
          retina_detect: true,
        });
      }
    };

    document.head.appendChild(script);

    // Cleanup function
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      if (particlesRef.current) {
        particlesRef.current.innerHTML = "";
      }
    };
  }, []);

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
      {/* Particles.js container */}
      <div
        id="particles-js"
        ref={particlesRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      />

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
