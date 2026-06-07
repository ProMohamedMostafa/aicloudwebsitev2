"use client";

import "./PortfolioFeatures.css";
import { useI18n } from "@/app/i18n/context";

const websiteFeatures = ["Smart Product Search", "Secure Checkout", "Reviews & Ratings", "Real-time Order Tracking", "SEO-Optimised Storefront", "Responsive Design"];
const dashboardFeatures = ["Orders Management", "Inventory Tracking", "Revenue Analytics", "Customer Insights", "Staff Permissions", "Delivery Management"];
const mobileFeatures = ["Push Notifications", "Wishlist & Favourites", "In-App Checkout", "Order Tracking", "Loyalty Rewards", "Offline Mode"];

const websiteIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="3" width="20" height="18" rx="2" stroke="#0061B7" strokeWidth="2" fill="none" />
    <line x1="2" y1="8" x2="22" y2="8" stroke="#0061B7" strokeWidth="2" />
  </svg>
);
const dashboardIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="9" height="9" rx="1" stroke="#0061B7" strokeWidth="2" fill="none" />
    <rect x="13" y="2" width="9" height="9" rx="1" stroke="#0061B7" strokeWidth="2" fill="none" />
    <rect x="13" y="13" width="9" height="9" rx="1" stroke="#0061B7" strokeWidth="2" fill="none" />
    <rect x="2" y="13" width="9" height="9" rx="1" stroke="#0061B7" strokeWidth="2" fill="none" />
  </svg>
);
const mobileIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="5" y="1" width="14" height="22" rx="2" stroke="#0061B7" strokeWidth="2" fill="none" />
    <line x1="12" y1="18" x2="12" y2="18" stroke="#0061B7" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export default function PortfolioFeatures() {
  const { t } = useI18n();

  const featureColumns = [
    { key: "website", icon: websiteIcon, headingKey: "portfolio.features.websiteHeading", descKey: "portfolio.features.websiteDesc", features: websiteFeatures },
    { key: "dashboard", icon: dashboardIcon, headingKey: "portfolio.features.dashboardHeading", descKey: "portfolio.features.dashboardDesc", features: dashboardFeatures },
    { key: "mobile", icon: mobileIcon, headingKey: "portfolio.features.mobileHeading", descKey: "portfolio.features.mobileDesc", features: mobileFeatures },
  ];

  return (
    <section className="portfolio-features">
      <div className="features-inner">
        <div className="features-header">
          <div className="features-badge">Powerful Ecosystem Features</div>
          <h2 className="features-title">Everything you need to scale</h2>
          <p className="features-subtitle">
            A complete, AI-powered toolkit designed for high-performance e-commerce brands.
          </p>
        </div>

        <div className="features-cards">
          {featureColumns.map((col) => (
            <div className="feature-card" key={col.key}>
              <div className="feature-card-icon-wrap">
                <div className="feature-card-icon-bg">{col.icon}</div>
              </div>
              <h3 className="feature-card-heading">{t(col.headingKey)}</h3>
              <p className="feature-card-desc">{t(col.descKey)}</p>
              <ul className="feature-list">
                {col.features.map((item) => (
                  <li className="feature-list-item" key={item}>
                    <span className="feature-check">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="#0061B7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
