"use client";

import ContactUsButton from "@/app/components/shared/components/ContactUsButton/ContactUsButton";
import { useRef, useEffect } from "react";

interface TextContentProps {
  onMouseMove?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export default function TextContent({ onMouseMove }: TextContentProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!titleRef.current || !subtitleRef.current || !ctaRef.current) {
      return;
    }

    // Simple fade-in animation on mount
    const elements = [titleRef.current, subtitleRef.current, ctaRef.current];
    elements.forEach((el, index) => {
      el.style.opacity = "0";
      el.style.transform = `translateY(${30 - index * 10}px)`;
      setTimeout(() => {
        el.style.transition = "all 0.8s ease-out";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, index * 200);
    });
  }, []);

  return (
    <div className="text-content" onMouseMove={onMouseMove}>
      <h1 ref={titleRef} className="title">
        Advanced Solutions to manage{" "}
        <span className="gradient-text">your business</span>
      </h1>

      <p ref={subtitleRef} className="subtitle">
        Advanced solutions to manage your business and provide services powered
        by artificial intelligence.
      </p>

      <div ref={ctaRef} className="cta-container">
        <ContactUsButton />
      </div>
    </div>
  );
}
