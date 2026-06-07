"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import "./clean-tech-about.css";
import { useI18n } from "@/app/i18n/context";

export default function CleanTechAbout() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const logoRef = useRef(null);
  const imageRef = useRef(null);
  const greenLineRef = useRef(null);
  const missionRef = useRef(null);
  const { t } = useI18n();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const masterTl = gsap.timeline();
      masterTl.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8, ease: "power2.inOut" });
      masterTl.fromTo(greenLineRef.current, { scaleY: 0, transformOrigin: "top center" }, { scaleY: 1, duration: 1.2, ease: "power3.out" });
      masterTl.fromTo(containerRef.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" });
      masterTl.fromTo(titleRef.current, { opacity: 0, y: 80, backgroundPosition: "200% 0%" }, { opacity: 1, y: 0, backgroundPosition: "0% 0%", duration: 1.2, ease: "power3.out" });
      masterTl.fromTo(missionRef.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }, "-=0.4");
      masterTl.fromTo(logoRef.current, { opacity: 0, scale: 0.8, rotation: -10 }, { opacity: 1, scale: 1, rotation: 0, duration: 0.8, ease: "back.out(1.4)" }, "-=0.5");
      masterTl.fromTo(imageRef.current, { opacity: 0, x: 100, scale: 0.9 }, { opacity: 1, x: 0, scale: 1, duration: 1, ease: "power3.out" }, "-=0.3");
      masterTl.fromTo(descriptionRef.current, { opacity: 0, y: 60, rotationX: 90 }, { opacity: 1, y: 0, rotationX: 0, duration: 1, ease: "back.out(1.2)" }, "-=0.3");
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="clean-tech-about-section" ref={sectionRef}>
      <div className="clean-tech-section-borders">
        <div className="clean-tech-about-container" ref={containerRef}>
          <div className="clean-tech-about-content">
            <h1 className="clean-tech-about-title" ref={titleRef}>
              {t("cleanTech.about.title")}
            </h1>

            <div className="clean-tech-content-layout">
              {/* Left Column */}
              <div className="clean-tech-left-column">
                <div className="clean-tech-mission-container" ref={missionRef}>
                  <h2 className="clean-tech-mission-title">{t("cleanTech.about.missionTitle")}</h2>
                  <p className="clean-tech-mission-text">{t("cleanTech.about.missionText")}</p>
                </div>
                <div className="clean-tech-logo-container" ref={logoRef}></div>
                <div className="clean-tech-description-container">
                  <p className="clean-tech-about-description" ref={descriptionRef}>
                    {t("cleanTech.about.description")}
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="clean-tech-right-column">
                <div className="clean-tech-image-container" ref={imageRef}>
                  <div className="clean-tech-image-wrapper">
                    <img src="/assets/images/Smart-operating.png" alt="CleanTech System in Action" className="clean-tech-feature-image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
