"use client";

import { partners } from "../../data/partnersData";
import "./partners.css";
import { usePartnersAnimation } from "../../hooks/usePartnersAnimation";

export default function PartnersClient() {
  const { sectionRef, containerRef, titleRef, descriptionRef, addToCardsRef } =
    usePartnersAnimation();

  return (
    <div className="partners-section" ref={sectionRef}>
      <div className="partners-container" ref={containerRef}>
        {/* Hero Content on Left */}
        <div className="partners-hero">
          <div className="partners-hero-content">
            <h1 className="partners-title" ref={titleRef}>
              Our Valued Partners
            </h1>
            <p className="partners-description" ref={descriptionRef}>
              At AI Cloud, we're proud to support a diverse network of valued
              clients — from government authorities and smart cities to
              universities and innovation districts. Their trust empowers us to
              deliver smarter, more impactful solutions that drive sustainable
              progress across the Kingdom.
            </p>
          </div>
        </div>

        {/* Cards Grid on Right */}
        <div className="partners-cards-section">
          <div className="partners-cards-grid">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="partner-card"
                ref={addToCardsRef}
                style={{
                  opacity: 0,
                  transform: "translateY(60px) rotateY(15deg)",
                }}
              >
                <div className="partner-card-image">
                  <img
                    src={partner.img}
                    alt={partner.title}
                    className="partner-image"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
