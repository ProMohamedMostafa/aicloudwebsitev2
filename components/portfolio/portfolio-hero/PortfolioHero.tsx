"use client";

import "./PortfolioHero.css";

export default function PortfolioHero() {
  return (
    <section className="portfolio-hero">
      {/* Decorative diagonal background */}
      <div className="hero-decore" aria-hidden="true" />

      <div className="hero-inner">
        {/* Left Content */}
        <div className="hero-content">
          <div className="hero-text-group">
            <h1 className="hero-title">
              Transform Your Store into a Smart Commerce Experience
            </h1>
            <p className="hero-description">
              We design and develop scalable e-commerce platforms, mobile apps,
              and intelligent commerce systems that help brands sell faster,
              manage smarter, and grow digitally.
            </p>
          </div>

          <a href="#contact" className="hero-btn">
            Start Your Project
          </a>

          {/* Service Icons */}
          <div className="hero-service-icons">
            <div className="service-icon-item">
              <div className="service-icon-circle">
                {/* Dashboard icon placeholder */}
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <rect
                    x="4"
                    y="4"
                    width="14"
                    height="14"
                    rx="2"
                    stroke="#0061B7"
                    strokeWidth="2"
                    fill="none"
                  />
                  <rect
                    x="22"
                    y="4"
                    width="14"
                    height="14"
                    rx="2"
                    stroke="#0061B7"
                    strokeWidth="2"
                    fill="none"
                  />
                  <rect
                    x="4"
                    y="22"
                    width="14"
                    height="14"
                    rx="2"
                    stroke="#0061B7"
                    strokeWidth="2"
                    fill="none"
                  />
                  <rect
                    x="22"
                    y="22"
                    width="14"
                    height="14"
                    rx="2"
                    stroke="#0061B7"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
              <span>Dashboard</span>
            </div>

            <div className="service-icon-item">
              <div className="service-icon-circle">
                {/* Application icon placeholder */}
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <rect
                    x="10"
                    y="2"
                    width="20"
                    height="36"
                    rx="3"
                    stroke="#0061B7"
                    strokeWidth="2"
                    fill="none"
                  />
                  <line
                    x1="20"
                    y1="32"
                    x2="20"
                    y2="32"
                    stroke="#0061B7"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span>Application</span>
            </div>

            <div className="service-icon-item">
              <div className="service-icon-circle">
                {/* Website icon placeholder */}
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <rect
                    x="3"
                    y="7"
                    width="34"
                    height="26"
                    rx="2"
                    stroke="#0061B7"
                    strokeWidth="2"
                    fill="none"
                  />
                  <line
                    x1="3"
                    y1="14"
                    x2="37"
                    y2="14"
                    stroke="#0061B7"
                    strokeWidth="2"
                  />
                  <circle cx="9" cy="10.5" r="1.5" fill="#0061B7" />
                  <circle cx="15" cy="10.5" r="1.5" fill="#0061B7" />
                </svg>
              </div>
              <span>Website</span>
            </div>
          </div>
        </div>

        {/* Right image placeholder */}
        <div className="hero-image-area">
          <div className="hero-image-placeholder">
            <div className="hero-image-inner">
              {/* Image will be placed here */}
              <span className="image-placeholder-label">Hero Image</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
