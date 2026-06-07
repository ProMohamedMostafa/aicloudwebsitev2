"use client";

import "./PortfolioCTA.css";
import { useI18n } from "@/app/i18n/context";

export default function PortfolioCTA() {
  const { t, dir } = useI18n();

  return (
    <section className="portfolio-cta">
      <div className="cta-glow" aria-hidden="true" />
      <div className={`cta-inner ${dir === "rtl" ? "cta-inner--rtl" : ""}`}>
        <div className="cta-content">
          <h2 className="cta-title">{t("portfolio.cta.title")}</h2>
          <p className="cta-description">{t("portfolio.cta.description")}</p>
          <div className="cta-buttons">
            <a href="#contact" className="cta-btn cta-btn--primary">{t("portfolio.cta.primary")}</a>
            <a href="#contact" className="cta-btn cta-btn--secondary">{t("portfolio.cta.secondary")}</a>
          </div>
        </div>
        <div className="cta-image-area">
          <img src="/assets/images/CTA-image.webp" alt="Product Dashboard Preview" className="cta-image" />
        </div>
      </div>
    </section>
  );
}
