"use client";

import "./PortfolioBusinessTypes.css";
import { useI18n } from "@/app/i18n/context";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioBusinessTypes() {
  const { t } = useI18n();

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const businessTypes = [
    { labelKey: "portfolio.businessTypes.fashion",    image: "/assets/images/fashionStore.webp" },
    { labelKey: "portfolio.businessTypes.electronics", image: "/assets/images/electronics.webp" },
    { labelKey: "portfolio.businessTypes.restaurant",  image: "/assets/images/resturant.webp" },
    { labelKey: "portfolio.businessTypes.beauty",      image: "/assets/images/beauty.webp" },
    { labelKey: "portfolio.businessTypes.furniture",   image: "/assets/images/furnuture.webp" },
    { labelKey: "portfolio.businessTypes.grocery",     image: "/assets/images/grocery.webp" },
    { labelKey: "portfolio.businessTypes.pharmacy",    image: "/assets/images/pharmacy.webp" },
    { labelKey: "portfolio.businessTypes.multiVendor", image: "/assets/images/vendors.webp" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      // Header fades up
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 36 },
        {
          opacity: 1, y: 0, duration: 0.65, ease: "power3.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 85%", once: true },
        }
      );

      // Cards stagger in with a pop — scale from 0.85 + fade
      const cards = gridRef.current?.querySelectorAll(".business-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 32, scale: 0.88 },
          {
            opacity: 1, y: 0, scale: 1,
            duration: 0.5,
            stagger: {
              amount: 0.55,   // total stagger spread across all cards
              from: "start",
            },
            ease: "back.out(1.4)",
            scrollTrigger: { trigger: gridRef.current, start: "top 82%", once: true },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="portfolio-business-types" ref={sectionRef}>
      <div className="business-inner">
        <div className="business-header" ref={headerRef}>
          <h2 className="business-title">{t("portfolio.businessTypes.title")}</h2>
          <p className="business-subtitle">{t("portfolio.businessTypes.subtitle")}</p>
        </div>

        <div className="business-grid" ref={gridRef}>
          {businessTypes.map((item) => (
            <div className="business-card" key={item.labelKey}>
              <div className="business-card-image">
                <div className="business-image-wrapper">
                  <img src={item.image} alt={t(item.labelKey)} className="business-image" />
                </div>
                <div className="business-card-icon-overlay">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="1" y="1" width="14" height="14" rx="2" stroke="#fff" strokeWidth="1.5" fill="none" />
                    <line x1="1" y1="5" x2="15" y2="5" stroke="#fff" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              <div className="business-card-label">
                <span>{t(item.labelKey)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
