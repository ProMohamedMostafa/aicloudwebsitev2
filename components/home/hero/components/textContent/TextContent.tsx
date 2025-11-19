// Optimized TextContent.tsx - Remove unnecessary animations
"use client";

import ContactUsButton from "@/components/shared/components/ContactUsButton/ContactUsButton";

interface TextContentProps {
  onMouseMove?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export default function TextContent({ onMouseMove }: TextContentProps) {
  return (
    <div className="text-content" onMouseMove={onMouseMove}>
      <h1 className="title animate-fade-in">
        Advanced Solutions to manage{" "}
        <span className="gradient-text">your business</span>
      </h1>

      <p className="subtitle animate-fade-in-delayed">
        Advanced solutions to manage your business and provide services powered
        by artificial intelligence.
      </p>

      <div className="cta-container animate-fade-in-more-delayed">
        <ContactUsButton />
      </div>
    </div>
  );
}