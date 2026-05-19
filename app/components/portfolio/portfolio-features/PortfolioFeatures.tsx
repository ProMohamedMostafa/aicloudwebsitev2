"use client";

import "./PortfolioFeatures.css";

const featureColumns = [
  {
    key: "website",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="18" rx="2" stroke="#0061B7" strokeWidth="2" fill="none" />
        <line x1="2" y1="8" x2="22" y2="8" stroke="#0061B7" strokeWidth="2" />
      </svg>
    ),
    heading: "Website Features",
    description:
      "Deliver a lightning-fast, highly optimized shopping experience to your customers.",
    features: [
      "Smart Product Search",
      "Secure Checkout",
      "Reviews & Ratings",
      "Real-time Order Tracking",
      "SEO-Optimised Storefront",
      "Responsive Design",
    ],
  },
  {
    key: "dashboard",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="9" height="9" rx="1" stroke="#0061B7" strokeWidth="2" fill="none" />
        <rect x="13" y="2" width="9" height="9" rx="1" stroke="#0061B7" strokeWidth="2" fill="none" />
        <rect x="13" y="13" width="9" height="9" rx="1" stroke="#0061B7" strokeWidth="2" fill="none" />
        <rect x="2" y="13" width="9" height="9" rx="1" stroke="#0061B7" strokeWidth="2" fill="none" />
      </svg>
    ),
    heading: "Dashboard Features",
    description:
      "Manage your entire business from a single, powerful command center.",
    features: [
      "Orders Management",
      "Inventory Tracking",
      "Revenue Analytics",
      "Customer Insights",
      "Staff Permissions",
      "Delivery Management",
    ],
  },
  {
    key: "mobile",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="1" width="14" height="22" rx="2" stroke="#0061B7" strokeWidth="2" fill="none" />
        <line x1="12" y1="18" x2="12" y2="18" stroke="#0061B7" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    heading: "Mobile App Features",
    description:
      "Engage users on the go with a native, seamless mobile shopping app.",
    features: [
      "Push Notifications",
      "Mobile Payments",
      "User Profiles",
      "One-tap Reordering",
      "Saved Addresses",
      "Fast Mobile Experience",
    ],
  },
];

export default function PortfolioFeatures() {
  return (
    <section className="portfolio-features">
      <div className="features-inner">
        {/* Badge + Header */}
        <div className="features-header">
          <div className="features-badge">Powerful Ecosystem Features</div>
          <h2 className="features-title">Everything you need to scale</h2>
          <p className="features-subtitle">
            A complete, AI-powered toolkit designed for high-performance
            e-commerce brands.
          </p>
        </div>

        {/* Three Feature Cards */}
        <div className="features-cards">
          {featureColumns.map((col) => (
            <div className="feature-card" key={col.key}>
              {/* Icon */}
              <div className="feature-card-icon-wrap">
                <div className="feature-card-icon-bg">{col.icon}</div>
              </div>

              {/* Heading */}
              <h3 className="feature-card-heading">{col.heading}</h3>

              {/* Description */}
              <p className="feature-card-desc">{col.description}</p>

              {/* Feature list */}
              <ul className="feature-list">
                {col.features.map((item) => (
                  <li className="feature-list-item" key={item}>
                    <span className="feature-check">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M2 6l3 3 5-5"
                          stroke="#0061B7"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
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