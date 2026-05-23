"use client";

import { partners } from "../data/partnersData";
import "./partners.css";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useI18n } from "../i18n/context";

export default function Partners() {
  const { t } = useI18n();
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const masterTl = gsap.timeline();
      masterTl.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8, ease: "power2.inOut" });
      masterTl.fromTo(containerRef.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" });
      masterTl.fromTo(titleRef.current, { opacity: 0, y: 80, backgroundPosition: "200% 0%" }, { opacity: 1, y: 0, backgroundPosition: "0% 0%", duration: 1.2, ease: "power3.out" });
      masterTl.fromTo(descriptionRef.current, { opacity: 0, y: 60, rotationX: 90 }, { opacity: 1, y: 0, rotationX: 0, duration: 1, ease: "back.out(1.2)" }, "-=0.5");
      masterTl.to(cardsRef.current, { opacity: 1, y: 0, rotationY: 0, duration: 0.8, stagger: { each: 0.1, grid: [2, Math.ceil(partners.length / 2)], from: "center" }, ease: "back.out(1.4)" }, "-=0.3");
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const addToCardsRef = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) cardsRef.current.push(el);
  };

  return (
    <div className="partners-section" ref={sectionRef}>
      <div className="partners-container" ref={containerRef}>
        <div className="partners-hero">
          <div className="partners-hero-content">
            <h1 className="partners-title" ref={titleRef}>
              {t("partnersPage.title")}
            </h1>
            <p className="partners-description" ref={descriptionRef}>
              {t("partnersPage.description")}
            </p>
          </div>
        </div>

        <div className="partners-cards-section">
          <div className="partners-cards-grid">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="partner-card"
                ref={addToCardsRef}
                style={{ opacity: 0, transform: "translateY(60px) rotateY(15deg)" }}
              >
                <div className="partner-card-image">
                  <img src={partner.img} alt={partner.title} className="partner-image" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
