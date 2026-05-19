"use client";

import "./PortfolioCTA.css";

export default function PortfolioCTA() {
  return (
    <section className="portfolio-cta">
     

      {/* Radial glow */}
      <div className="cta-glow" aria-hidden="true" />

      <div className="cta-inner">
        {/* Left text content */}
        <div className="cta-content">
          <h2 className="cta-title">
            Ready to Launch Your Commerce Platform?
          </h2>
          <p className="cta-description">
            Let AI Cloud help you build a scalable digital commerce experience
            with powerful dashboards, mobile apps, and modern e-commerce
            solutions.
          </p>

          {/* Buttons */}
          <div className="cta-buttons">
            <a href="#contact" className="cta-btn cta-btn--primary">
              Start Your Project
            </a>
            <a href="#contact" className="cta-btn cta-btn--secondary">
              Contact Us
            </a>
          </div>
        </div>

        {/* Right image */}
        <div className="cta-image-area">
          <img 
            src="/assets/images/CTA-image.webp" 
            alt="Product Dashboard Preview"
            className="cta-image"
          />
        </div>
      </div>
    </section>
  );
}