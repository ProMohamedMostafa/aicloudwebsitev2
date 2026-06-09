"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import "./PortfolioEcosystem.css";
import { useI18n } from "@/app/i18n/context";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ── Icons ──────────────────────────────────────────────────────────────
const mobileIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="5" y="1" width="14" height="22" rx="2" stroke="#0061B7" strokeWidth="2" fill="none" />
    <line x1="12" y1="18" x2="12" y2="18" stroke="#0061B7" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);
const webIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="3" width="20" height="18" rx="2" stroke="#0061B7" strokeWidth="2" fill="none" />
    <line x1="2" y1="8" x2="22" y2="8" stroke="#0061B7" strokeWidth="2" />
  </svg>
);
const dashIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="9" height="9" rx="1" stroke="#0061B7" strokeWidth="2" fill="none" />
    <rect x="13" y="2" width="9" height="9" rx="1" stroke="#0061B7" strokeWidth="2" fill="none" />
    <rect x="13" y="13" width="9" height="9" rx="1" stroke="#0061B7" strokeWidth="2" fill="none" />
    <rect x="2" y="13" width="9" height="9" rx="1" stroke="#0061B7" strokeWidth="2" fill="none" />
  </svg>
);
const payIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="5" width="20" height="14" rx="2" stroke="#0061B7" strokeWidth="2" fill="none" />
    <line x1="2" y1="10" x2="22" y2="10" stroke="#0061B7" strokeWidth="2" />
  </svg>
);
const conversionIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" stroke="#0061B7" strokeWidth="2" fill="none" strokeLinejoin="round" strokeLinecap="round" />
  </svg>
);
const multiVendorIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="#0061B7" strokeWidth="2" fill="none" />
    <polyline points="9,22 9,12 15,12 15,22" stroke="#0061B7" strokeWidth="2" fill="none" />
  </svg>
);

const ecosystemImages = [
  "/assets/images/ecosystem-1.webp",
  "/assets/images/ecosystem-2.webp",
  "/assets/images/ecosystem-3.webp",
];

// Helper to generate star elements
const renderStars = () => {
  const stars = [];
  for (let i = 1; i <= 14; i++) {
    stars.push(<div key={`star-${i}`} className={`star star-${i}`} />);
  }
  return stars;
};

export default function PortfolioEcosystem() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t, dir } = useI18n();

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  const services = [
    { key: "mobileApps",        titleKey: "portfolio.ecosystem.mobileApps",        descKey: "portfolio.ecosystem.mobileAppsDesc",        icon: mobileIcon },
    { key: "ecommerceWebsites", titleKey: "portfolio.ecosystem.ecommerceWebsites", descKey: "portfolio.ecosystem.ecommerceWebsitesDesc",  icon: webIcon },
    { key: "adminDashboard",    titleKey: "portfolio.ecosystem.adminDashboard",     descKey: "portfolio.ecosystem.adminDashboardDesc",     icon: dashIcon },
    { key: "payment",           titleKey: "portfolio.ecosystem.payment",            descKey: "portfolio.ecosystem.paymentDesc",            icon: payIcon },
    { key: "conversion",        titleKey: "portfolio.ecosystem.conversion",         descKey: "portfolio.ecosystem.conversionDesc",         icon: conversionIcon },
    { key: "multiVendor",       titleKey: "portfolio.ecosystem.multiVendor",        descKey: "portfolio.ecosystem.multiVendorDesc",        icon: multiVendorIcon },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const isRTL = dir === "rtl";

      // Header fades up
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 85%", once: true },
        }
      );

      // Mockup slides in from the left (or right in RTL)
      gsap.fromTo(
        mockupRef.current,
        { opacity: 0, x: isRTL ? 60 : -60, scale: 0.95 },
        {
          opacity: 1, x: 0, scale: 1, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: mockupRef.current, start: "top 82%", once: true },
        }
      );

      // Service cards stagger in from the right (or left in RTL)
      const cards = servicesRef.current?.querySelectorAll(".eco-service-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, x: isRTL ? -40 : 40, y: 20 },
          {
            opacity: 1, x: 0, y: 0, duration: 0.55,
            stagger: 0.1, ease: "power2.out",
            scrollTrigger: { trigger: servicesRef.current, start: "top 82%", once: true },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [dir]);

  return (
    <section className="portfolio-ecosystem" ref={sectionRef}>
      <div className="ecosystem-inner">
        {/* Header */}
        <div className="ecosystem-header" ref={headerRef}>
          <h2 className="ecosystem-title">{t("portfolio.ecosystem.title")}</h2>
          <p className="ecosystem-subtitle">{t("portfolio.ecosystem.subtitle")}</p>
        </div>

        <div className={`ecosystem-grid-layout ${dir === "rtl" ? "ecosystem-grid-layout--rtl" : ""}`}>

          {/* Image carousel */}
          <div className="ecosystem-mockup" ref={mockupRef}>
            <div className="ecosystem-mockup-placeholder">
              <div className="mockup-image-container">
                <Image
                  src={ecosystemImages[currentImageIndex]}
                  alt={`Ecosystem mockup ${currentImageIndex + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "contain" }}
                  className="mockup-image"
                  priority={currentImageIndex === 0}
                />
              </div>
              <div className="pager-dots">
                {ecosystemImages.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${currentImageIndex === index ? "dot--active" : ""}`}
                    onClick={() => setCurrentImageIndex(index)}
                    aria-label={`View image ${index + 1}`}
                    type="button"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Service cards grid */}
          <div className="ecosystem-services" ref={servicesRef}>
            {services.map((service) => (
              <div className="eco-service-card" key={service.key}>
                {/* Stars effect - now visible on hover */}
                {renderStars()}
                <div className="eco-service-card-icon">
                  <div className="eco-service-icon-bg">{service.icon}</div>
                </div>
                <div className="eco-service-card-body">
                  <h3 className="eco-service-card-title">{t(service.titleKey)}</h3>
                  <p className="eco-service-card-desc">{t(service.descKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}