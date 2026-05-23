// CleanTechHero.tsx
"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import "./clean-tech-hero.css";

export default function CleanTechHero() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const additionalRef = useRef(null);
  const imageRef = useRef(null);
  const ctaRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const masterTl = gsap.timeline();

      // Section entrance
      masterTl.fromTo(
        sectionRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: "power2.inOut" }
      );

      // Container animation
      masterTl.fromTo(
        containerRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );

      // Title animation with gradient reveal
      masterTl.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 80,
          backgroundPosition: "200% 0%",
        },
        {
          opacity: 1,
          y: 0,
          backgroundPosition: "0% 0%",
          duration: 1.2,
          ease: "power3.out",
        }
      );

      // Subtitle animation
      masterTl.fromTo(
        subtitleRef.current,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "back.out(1.2)",
        },
        "-=0.6"
      );

      // Description animation
      masterTl.fromTo(
        descriptionRef.current,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "back.out(1.2)",
        },
        "-=0.5"
      );

      // Additional text animation
      masterTl.fromTo(
        additionalRef.current,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "back.out(1.2)",
        },
        "-=0.4"
      );

      // Image animation
      masterTl.fromTo(
        imageRef.current,
        {
          opacity: 0,
          scale: 0.8,
          rotationY: 15,
        },
        {
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=0.8"
      );

      // CTA button animation
      masterTl.fromTo(
        ctaRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.4)",
        },
        "-=0.3"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="clean-tech-hero-section" ref={sectionRef}>

      <div className="clean-tech-hero-container" ref={containerRef}>
        {/* Content Section */}
        <div className="clean-tech-hero-content">
          <div className="clean-tech-logo-wrapper">
            <img
              src="/assets/images/cleanTech-logo.svg"
              alt="CleanTech Logo"
              className="clean-tech-logo"
            />
          </div>
          <h2 className="clean-tech-subtitle" ref={subtitleRef}>
            Smart operating solutions for more productive facilities
          </h2>
          <p className="clean-tech-description" ref={descriptionRef}>
            An intelligent platform for cleaning and facility management —
            combining sensors, real-time dashboards, and automation tools to
            track attendance, shifts, tasks, and stock from one central hub.
          </p>
          <p className="clean-tech-additional" ref={additionalRef}>
            We offer an integrated facility management system that goes beyond
            mere cleaning, to include meticulously organizing every detail of
            daily work.
          </p>
          <button
            className="clean-tech-cta"
            ref={ctaRef}
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Book a Service
          </button>
        </div>

        {/* Image Section */}
        <div className="clean-tech-hero-image" ref={imageRef}>
          <div className="image-container">
            <img
              src="/assets/images/clean-tech-product.webp"
              alt="CleanTech Platform Dashboard"
              className="hero-platform-image"
            />
            <div className="image-overlay"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
