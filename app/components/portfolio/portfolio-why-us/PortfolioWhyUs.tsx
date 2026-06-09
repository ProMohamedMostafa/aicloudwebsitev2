"use client";

import "./PortfolioWhyUs.css";
import { useI18n } from "@/app/i18n/context";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const scalableIcon      = (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="6" rx="1" stroke="#0061B7" strokeWidth="2" fill="none" /><rect x="2" y="11" width="20" height="6" rx="1" stroke="#0061B7" strokeWidth="2" fill="none" /><line x1="6" y1="5" x2="6" y2="5" stroke="#0061B7" strokeWidth="2.5" strokeLinecap="round" /><line x1="6" y1="14" x2="6" y2="14" stroke="#0061B7" strokeWidth="2.5" strokeLinecap="round" /></svg>);
const fastIcon          = (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#0061B7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>);
const uxIcon            = (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="2" y="3" width="20" height="18" rx="2" stroke="#0061B7" strokeWidth="2" fill="none" /><circle cx="8" cy="10" r="2" stroke="#0061B7" strokeWidth="2" fill="none" /><path d="M2 19l5-5 4 4 4-5 5 6" stroke="#0061B7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>);
const secureIcon        = (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.5C16.5 22.15 20 17.25 20 12V6L12 2z" stroke="#0061B7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" /><path d="M9 12l2 2 4-4" stroke="#0061B7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>);
const multiplatformIcon = (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="2" y="3" width="20" height="14" rx="2" stroke="#0061B7" strokeWidth="2" fill="none" /><line x1="8" y1="21" x2="16" y2="21" stroke="#0061B7" strokeWidth="2" strokeLinecap="round" /><line x1="12" y1="17" x2="12" y2="21" stroke="#0061B7" strokeWidth="2" strokeLinecap="round" /></svg>);
const customIcon        = (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="#0061B7" strokeWidth="2" fill="none" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" stroke="#0061B7" strokeWidth="2" fill="none" /></svg>);

export default function PortfolioWhyUs() {
  const { t } = useI18n();

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const reasons = [
    { key: "scalable",   icon: scalableIcon,      titleKey: "portfolio.whyUs.scalable",    descKey: "portfolio.whyUs.scalableDesc" },
    { key: "fast",       icon: fastIcon,           titleKey: "portfolio.whyUs.fast",        descKey: "portfolio.whyUs.fastDesc" },
    { key: "ux",         icon: uxIcon,             titleKey: "portfolio.whyUs.ux",          descKey: "portfolio.whyUs.uxDesc" },
    { key: "secure",     icon: secureIcon,         titleKey: "portfolio.whyUs.secure",      descKey: "portfolio.whyUs.secureDesc" },
    { key: "support",    icon: multiplatformIcon,  titleKey: "portfolio.whyUs.support",     descKey: "portfolio.whyUs.supportDesc" },
    { key: "integrated", icon: customIcon,         titleKey: "portfolio.whyUs.integrated",  descKey: "portfolio.whyUs.integratedDesc" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      // Header
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 36 },
        {
          opacity: 1, y: 0, duration: 0.65, ease: "power3.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 85%", once: true },
        }
      );

      // Cards: row 1 (indices 0,1,2) from left; row 2 (indices 3,4,5) from right
      // Grid is 3 columns, so items 0-2 are row 1, items 3-5 are row 2
      const cards = Array.from(gridRef.current?.querySelectorAll(".why-us-card") ?? []);
      const row1 = cards.slice(0, 3);
      const row2 = cards.slice(3, 6);

      gsap.fromTo(
        row1,
        { opacity: 0, x: -50, y: 20 },
        {
          opacity: 1, x: 0, y: 0, duration: 0.6,
          stagger: 0.12, ease: "power3.out",
          scrollTrigger: { trigger: gridRef.current, start: "top 82%", once: true },
        }
      );
      gsap.fromTo(
        row2,
        { opacity: 0, x: 50, y: 20 },
        {
          opacity: 1, x: 0, y: 0, duration: 0.6,
          stagger: 0.12, ease: "power3.out",
          scrollTrigger: { trigger: gridRef.current, start: "top 82%", once: true },
          delay: 0.18,
        }
      );

      // Icon pulse on entrance — subtle scale spring per card icon
      const iconBgs = gridRef.current?.querySelectorAll(".why-us-icon-bg");
      if (iconBgs) {
        gsap.fromTo(
          iconBgs,
          { scale: 0.6, opacity: 0 },
          {
            scale: 1, opacity: 1, duration: 0.45,
            stagger: 0.1, ease: "back.out(2)",
            scrollTrigger: { trigger: gridRef.current, start: "top 80%", once: true },
            delay: 0.2,
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="portfolio-why-us" ref={sectionRef}>
      <div className="why-us-inner">
        <div className="why-us-header" ref={headerRef}>
          <div className="why-us-badge">{t("portfolio.whyUs.title")}</div>
          <h2 className="why-us-title">{t("portfolio.whyUs.title")}</h2>
          <p className="why-us-subtitle">{t("portfolio.whyUs.subtitle")}</p>
        </div>

        <div className="why-us-grid" ref={gridRef}>
          {reasons.map((reason) => (
            <div className="why-us-card" key={reason.key}>
              <div className="why-us-card-gradient" />
              <div className="why-us-icon-wrap">
                <div className="why-us-icon-bg">{reason.icon}</div>
              </div>
              <h3 className="why-us-card-title">{t(reason.titleKey)}</h3>
              <p className="why-us-card-desc">{t(reason.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
