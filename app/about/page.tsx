"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useI18n } from "../i18n/context";
import "./about.css";

export default function AboutPage() {
  const { t } = useI18n();

  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const sadeemSectionRef = useRef(null);
  const sadeemLogoRef = useRef(null);
  const sadeemDescriptionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const masterTl = gsap.timeline();
      masterTl.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8, ease: "power2.inOut" });
      masterTl.fromTo(containerRef.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" });
      masterTl.fromTo(titleRef.current, { opacity: 0, y: 80, backgroundPosition: "200% 0%" }, { opacity: 1, y: 0, backgroundPosition: "0% 0%", duration: 1.2, ease: "power3.out" });
      masterTl.fromTo(subtitleRef.current, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1, ease: "back.out(1.2)" }, "-=0.5");
      masterTl.fromTo(descriptionRef.current, { opacity: 0, y: 60, rotationX: 90 }, { opacity: 1, y: 0, rotationX: 0, duration: 1, ease: "back.out(1.2)" }, "-=0.3");
      masterTl.fromTo(sadeemSectionRef.current, { opacity: 0, y: 80 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.2");
      masterTl.fromTo(sadeemLogoRef.current, { opacity: 0, scale: 0.8, rotation: -10 }, { opacity: 1, scale: 1, rotation: 0, duration: 0.8, ease: "back.out(1.4)" }, "-=0.5");
      masterTl.fromTo(sadeemDescriptionRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.3");
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="about-section" ref={sectionRef}>
      <div className="about-container" ref={containerRef}>
        <div className="about-hero">
          <div className="about-hero-content">
            <h1 className="about-title" ref={titleRef}>
              {t("aboutPage.title")}
            </h1>
            <h2 className="about-subtitle" ref={subtitleRef}>
              {t("aboutPage.subtitle")}
            </h2>

            <div className="content-split">
              <div className="left-content">
                <p className="about-description" ref={descriptionRef}>
                  {t("aboutPage.description")}
                </p>
              </div>

              <div className="right-content">
                <div className="sadeem-logo-container" ref={sadeemLogoRef}>
                  <div className="sadeem-logo-placeholder">
                    <img src="/assets/images/sadeem-logo.svg" alt="Sadeem Logo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sadeem-section" ref={sadeemSectionRef}>
          <div className="sadeem-content">
            <div className="sadeem-description" ref={sadeemDescriptionRef}>
              <h3>{t("aboutPage.foundationTitle")}</h3>
              <p>{t("aboutPage.p1")}</p>
              <p>{t("aboutPage.p2")}</p>
              <p>{t("aboutPage.p3")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
