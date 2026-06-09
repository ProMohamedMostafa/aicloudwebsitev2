"use client";

import "./PortfolioFeatures.css";
import { useI18n } from "@/app/i18n/context";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const websiteIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="3" width="20" height="18" rx="2" stroke="#0061B7" strokeWidth="2" fill="none" />
    <line x1="2" y1="8" x2="22" y2="8" stroke="#0061B7" strokeWidth="2" />
  </svg>
);
const dashboardIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="9" height="9" rx="1" stroke="#0061B7" strokeWidth="2" fill="none" />
    <rect x="13" y="2" width="9" height="9" rx="1" stroke="#0061B7" strokeWidth="2" fill="none" />
    <rect x="13" y="13" width="9" height="9" rx="1" stroke="#0061B7" strokeWidth="2" fill="none" />
    <rect x="2" y="13" width="9" height="9" rx="1" stroke="#0061B7" strokeWidth="2" fill="none" />
  </svg>
);
const mobileIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="5" y="1" width="14" height="22" rx="2" stroke="#0061B7" strokeWidth="2" fill="none" />
    <line x1="12" y1="18" x2="12" y2="18" stroke="#0061B7" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export default function PortfolioFeatures() {
  const { t, tArr } = useI18n();

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const featureColumns = [
    { key: "website",   icon: websiteIcon,   headingKey: "portfolio.features.websiteHeading",   descKey: "portfolio.features.websiteDesc",   featuresKey: "portfolio.features.websiteFeatures" },
    { key: "dashboard", icon: dashboardIcon, headingKey: "portfolio.features.dashboardHeading", descKey: "portfolio.features.dashboardDesc", featuresKey: "portfolio.features.dashboardFeatures" },
    { key: "mobile",    icon: mobileIcon,    headingKey: "portfolio.features.mobileHeading",    descKey: "portfolio.features.mobileDesc",    featuresKey: "portfolio.features.mobileFeatures" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      // Badge + title + subtitle slide up
      const headerChildren = headerRef.current?.children;
      if (headerChildren) {
        gsap.fromTo(
          Array.from(headerChildren),
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.6,
            stagger: 0.12, ease: "power3.out",
            scrollTrigger: { trigger: headerRef.current, start: "top 85%", once: true },
          }
        );
      }

      // 3 feature cards slide up with stagger
      const cards = cardsRef.current?.querySelectorAll(".feature-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, duration: 0.65,
            stagger: 0.15, ease: "power3.out",
            scrollTrigger: { trigger: cardsRef.current, start: "top 82%", once: true },
          }
        );
      }

      // Feature list items inside each card cascade in after card appears
      const listItems = cardsRef.current?.querySelectorAll(".feature-list-item");
      if (listItems) {
        gsap.fromTo(
          listItems,
          { opacity: 0, x: -16 },
          {
            opacity: 1, x: 0, duration: 0.35,
            stagger: 0.04, ease: "power2.out",
            scrollTrigger: { trigger: cardsRef.current, start: "top 75%", once: true },
            delay: 0.3,
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="portfolio-features" ref={sectionRef}>
      <div className="features-inner">
        <div className="features-header" ref={headerRef}>
          <div className="features-badge">{t("portfolio.features.badge")}</div>
          <h2 className="features-title">{t("portfolio.features.title")}</h2>
          <p className="features-subtitle">{t("portfolio.features.subtitle")}</p>
        </div>

        <div className="features-cards" ref={cardsRef}>
          {featureColumns.map((col) => {
            const features = tArr(col.featuresKey);
            return (
              <div className="feature-card" key={col.key}>
                <div className="feature-card-icon-wrap">
                  <div className="feature-card-icon-bg">{col.icon}</div>
                </div>
                <h3 className="feature-card-heading">{t(col.headingKey)}</h3>
                <p className="feature-card-desc">{t(col.descKey)}</p>
                <ul className="feature-list">
                  {features.map((item) => (
                    <li className="feature-list-item" key={item}>
                      <span className="feature-check">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke="#0061B7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
