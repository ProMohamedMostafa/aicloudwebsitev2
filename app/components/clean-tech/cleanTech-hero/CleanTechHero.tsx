"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import "./clean-tech-hero.css";
import { useI18n } from "@/app/i18n/context";

export default function CleanTechHero() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const additionalRef = useRef(null);
  const imageRef = useRef(null);
  const ctaRef = useRef(null);
  const { t, dir } = useI18n();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const masterTl = gsap.timeline();
      masterTl.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8, ease: "power2.inOut" });
      masterTl.fromTo(containerRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" });
      masterTl.fromTo(subtitleRef.current, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1, ease: "back.out(1.2)" }, "-=0.6");
      masterTl.fromTo(descriptionRef.current, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1, ease: "back.out(1.2)" }, "-=0.5");
      masterTl.fromTo(additionalRef.current, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1, ease: "back.out(1.2)" }, "-=0.4");
      masterTl.fromTo(imageRef.current, { opacity: 0, scale: 0.8, rotationY: 15 }, { opacity: 1, scale: 1, rotationY: 0, duration: 1.2, ease: "power3.out" }, "-=0.8");
      masterTl.fromTo(ctaRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: "back.out(1.4)" }, "-=0.3");
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="clean-tech-hero-section" ref={sectionRef}>
      <div className={`clean-tech-hero-container ${dir === "rtl" ? "clean-tech-hero-container--rtl" : ""}`} ref={containerRef}>
        {/* Content Section */}
        <div className="clean-tech-hero-content">
          <div className="clean-tech-logo-wrapper">
            <img src="/assets/images/cleanTech-logo.svg" alt="CleanTech Logo" className="clean-tech-logo" />
          </div>
          <h2 className="clean-tech-subtitle" ref={subtitleRef}>
            {t("cleanTech.hero.subtitle")}
          </h2>
          <p className="clean-tech-description" ref={descriptionRef}>
            {t("cleanTech.hero.description")}
          </p>
          <p className="clean-tech-additional" ref={additionalRef}>
            {t("cleanTech.hero.additional")}
          </p>
          <button
            className="clean-tech-cta"
            ref={ctaRef}
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {t("cleanTech.hero.cta")}
          </button>
        </div>

        {/* Image Section */}
        <div className="clean-tech-hero-image" ref={imageRef}>
          <div className="image-container">
            <img src="/assets/images/clean-tech-product.webp" alt="CleanTech Platform Dashboard" className="hero-platform-image" />
            <div className="image-overlay"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
