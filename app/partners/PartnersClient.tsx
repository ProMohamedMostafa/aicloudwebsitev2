"use client";

import { partners } from "../../data/partnersData";
import "./partners.css";
import { usePartnersAnimation } from "../../hooks/usePartnersAnimation";
import { useI18n } from "@/app/i18n/context";

export default function PartnersClient() {
  const { sectionRef, containerRef, titleRef, descriptionRef, addToCardsRef } = usePartnersAnimation();
  const { t } = useI18n();

  return (
    <div className="partners-section" ref={sectionRef}>
      <div className="partners-container" ref={containerRef}>
        <div className="partners-hero">
          <div className="partners-hero-content">
            <h1 className="partners-title" ref={titleRef}>{t("partnersPage.title")}</h1>
            <p className="partners-description" ref={descriptionRef}>{t("partnersPage.description")}</p>
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
