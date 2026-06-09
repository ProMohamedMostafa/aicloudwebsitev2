"use client";

import "./PortfolioCTA.css";
import { useI18n } from "@/app/i18n/context";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioCTA() {
  const { t, dir } = useI18n();
  const isRTL = dir === "rtl";

  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      // Text content fades up from slightly below
      const contentChildren = contentRef.current?.children;
      if (contentChildren) {
        gsap.fromTo(
          Array.from(contentChildren),
          { opacity: 0, y: 32 },
          {
            opacity: 1, y: 0, duration: 0.65,
            stagger: 0.14, ease: "power3.out",
            scrollTrigger: { trigger: contentRef.current, start: "top 85%", once: true },
          }
        );
      }

      // CTA image slides in from the far side (right in LTR, left in RTL)
      const imageX = isRTL ? -70 : 70;
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: imageX, scale: 0.95 },
        {
          opacity: 1, x: 0, scale: 1, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: imageRef.current, start: "top 85%", once: true },
        }
      );

      // Subtle continuous float on the CTA image
      gsap.to(imageRef.current, {
        y: -12,
        duration: 3.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 0.9,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isRTL]);

  return (
    <section className="portfolio-cta" ref={sectionRef}>
      <div className="cta-glow" aria-hidden="true" />
      <div className={`cta-inner ${isRTL ? "cta-inner--rtl" : ""}`}>
        <div className="cta-content" ref={contentRef}>
          <h2 className="cta-title">{t("portfolio.cta.title")}</h2>
          <p className="cta-description">{t("portfolio.cta.description")}</p>
          <div className="cta-buttons">
            <a href="#contact" className="cta-btn cta-btn--primary">{t("portfolio.cta.primary")}</a>
            <a href="#contact" className="cta-btn cta-btn--secondary">{t("portfolio.cta.secondary")}</a>
          </div>
        </div>
        <div className="cta-image-area" ref={imageRef}>
          <img src="/assets/images/CTA-image.webp" alt="Product Dashboard Preview" className="cta-image" />
        </div>
      </div>
    </section>
  );
}
