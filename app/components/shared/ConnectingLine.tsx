// components/ConnectingLine.tsx
"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ConnectingLineProps {
  color?: string;
  thickness?: number;
  startElement?: string;
  endElement?: string;
}

export default function ConnectingLine({
  color = "#3B82F6",
  thickness = 2,
  startElement = ".hero-container",
  endElement = ".modern-services",
}: ConnectingLineProps) {
  const lineRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lineRef.current || !pathRef.current || !containerRef.current) return;

    const updateLinePath = () => {
      const startEl = document.querySelector(startElement);
      const endEl = document.querySelector(endElement);

      if (!startEl || !endEl) return;

      const startRect = startEl.getBoundingClientRect();
      const endRect = endEl.getBoundingClientRect();
      const containerRect = containerRef.current!.getBoundingClientRect();

      const startX = 50; // Center of SVG
      const startY = 0;
      const endX = 50; // Center of SVG
      const endY = containerRect.height;

      // Create a curved path
      const controlX1 = 50;
      const controlY1 = containerRect.height * 0.3;
      const controlX2 = 50;
      const controlY2 = containerRect.height * 0.7;

      const pathData = `M ${startX},${startY} 
                       C ${controlX1},${controlY1} 
                         ${controlX2},${controlY2} 
                         ${endX},${endY}`;

      pathRef.current!.setAttribute("d", pathData);

      // Animate the line drawing
      const pathLength = pathRef.current!.getTotalLength();

      gsap.set(pathRef.current, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
          markers: false,
        },
      });

      tl.to(pathRef.current, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.inOut",
      });
    };

    // Initialize and update on resize
    updateLinePath();
    window.addEventListener("resize", updateLinePath);

    return () => {
      window.removeEventListener("resize", updateLinePath);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [startElement, endElement]);

  return (
    <div ref={containerRef} className="connecting-line-container">
      <svg
        ref={lineRef}
        className="connecting-line"
        viewBox="0 0 100 800"
        preserveAspectRatio="none"
      >
        <path
          ref={pathRef}
          fill="none"
          stroke={color}
          strokeWidth={thickness}
          strokeLinecap="round"
          strokeDasharray="5,5"
        />
      </svg>
    </div>
  );
}
