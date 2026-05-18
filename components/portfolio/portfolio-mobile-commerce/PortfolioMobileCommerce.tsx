"use client";

import "./PortfolioMobileCommerce.css";

export default function PortfolioMobileCommerce() {
  return (
    <section className="portfolio-mobile-commerce">
      <div className="mobile-commerce-inner">
        {/* Header */}
        <div className="mobile-commerce-header">
          <h2 className="mobile-commerce-title">
            Modern Mobile Commerce Experience
          </h2>
          <p className="mobile-commerce-subtitle">
            From product discovery to secure checkout, our mobile applications
            deliver fast, scalable, and user-focused shopping experiences.
          </p>
        </div>

        {/* Mockup Display */}
        <div className="mobile-commerce-mockups">
          {/* Left arrow */}
          <button className="mockup-arrow mockup-arrow--left" aria-label="Previous">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="23" stroke="#000" strokeWidth="2" />
              <polyline
                points="28,16 20,24 28,32"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </button>

          {/* Screens row */}
          <div className="mockup-screens">
            {/* Far left screen - small */}
            <div className="screen-placeholder screen-placeholder--sm screen-placeholder--left">
              <span>Profile</span>
            </div>

            {/* Secondary left */}
            <div className="screen-placeholder screen-placeholder--md screen-placeholder--secondary-left">
              <span>Products</span>
            </div>

            {/* Center / main phone */}
            <div className="screen-placeholder screen-placeholder--main">
              <div className="phone-frame">
                <span>Main App Screen</span>
              </div>
            </div>

            {/* Secondary right */}
            <div className="screen-placeholder screen-placeholder--md screen-placeholder--secondary-right">
              <span>Wallet</span>
            </div>

            {/* Far right screen - small */}
            <div className="screen-placeholder screen-placeholder--sm screen-placeholder--right">
              <span>My Cart</span>
            </div>
          </div>

          {/* Right arrow */}
          <button className="mockup-arrow mockup-arrow--right" aria-label="Next">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="23" stroke="#000" strokeWidth="2" />
              <polyline
                points="20,16 28,24 20,32"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
