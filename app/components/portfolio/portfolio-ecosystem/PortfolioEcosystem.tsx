"use client";

import Image from "next/image";
import { useState } from "react";
import "./PortfolioEcosystem.css";
import { useI18n } from "@/app/i18n/context";

// ── Icons (original blue #0061B7 stroke, matching original file) ──────────
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
  "/assets/images/ecommerce-hero-main-img.webp",
  "/assets/images/ecommerce-hero-img-dashboard.webp",
  "/assets/images/ecommerce-hero-img-app.webp",
];

export default function PortfolioEcosystem() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t, dir } = useI18n();

  // All 6 original service cards, now with translation keys
  const services = [
    { key: "mobileApps",        titleKey: "portfolio.ecosystem.mobileApps",        descKey: "portfolio.ecosystem.mobileAppsDesc",        icon: mobileIcon },
    { key: "ecommerceWebsites", titleKey: "portfolio.ecosystem.ecommerceWebsites", descKey: "portfolio.ecosystem.ecommerceWebsitesDesc",  icon: webIcon },
    { key: "adminDashboard",    titleKey: "portfolio.ecosystem.adminDashboard",     descKey: "portfolio.ecosystem.adminDashboardDesc",     icon: dashIcon },
    { key: "payment",           titleKey: "portfolio.ecosystem.payment",            descKey: "portfolio.ecosystem.paymentDesc",            icon: payIcon },
    { key: "conversion",        titleKey: "portfolio.ecosystem.conversion",         descKey: "portfolio.ecosystem.conversionDesc",         icon: conversionIcon },
    { key: "multiVendor",       titleKey: "portfolio.ecosystem.multiVendor",        descKey: "portfolio.ecosystem.multiVendorDesc",        icon: multiVendorIcon },
  ];

  return (
    <section className="portfolio-ecosystem">
      <div className="ecosystem-inner">
        {/* Header */}
        <div className="ecosystem-header">
          <h2 className="ecosystem-title">{t("portfolio.ecosystem.title")}</h2>
          <p className="ecosystem-subtitle">{t("portfolio.ecosystem.subtitle")}</p>
        </div>

        {/* In RTL reverse the two-column layout so mockup goes right, cards go left */}
        <div className={`ecosystem-grid-layout ${dir === "rtl" ? "ecosystem-grid-layout--rtl" : ""}`}>

          {/* Image carousel (left in LTR, right in RTL) */}
          <div className="ecosystem-mockup">
            <div className="ecosystem-mockup-placeholder">
              <div className="mockup-image-container">
                <Image
                  src={ecosystemImages[currentImageIndex]}
                  alt={`Ecosystem mockup ${currentImageIndex + 1}`}
                  fill
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

          {/* Service cards grid — 2 columns × 3 rows = 6 cards (original layout) */}
          <div className="ecosystem-services">
            {services.map((service) => (
              <div className="service-card" key={service.key}>
                {/* Icon */}
                <div className="service-card-icon">
                  <div className="service-icon-bg">{service.icon}</div>
                </div>
                {/* Text */}
                <div className="service-card-body">
                  <h3 className="service-card-title">{t(service.titleKey)}</h3>
                  <p className="service-card-desc">{t(service.descKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
