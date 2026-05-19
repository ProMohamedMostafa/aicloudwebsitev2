"use client";

import "./PortfolioBusinessTypes.css";

const businessTypes = [
  { label: "Fashion Store", image: "/assets/images/fashionStore.webp" },
  { label: "Electronics Store", image: "/assets/images/electronics.webp" },
  { label: "Restaurant & Food", image: "/assets/images/resturant.webp" },
  { label: "Beauty & Cosmetics", image: "/assets/images/beauty.webp" },
  { label: "Furniture Store", image: "/assets/images/furnuture.webp" },
  { label: "Grocery Store", image: "/assets/images/grocery.webp" },
  { label: "Pharmacy", image: "/assets/images/pharmacy.webp" },
  { label: "Multi-Vendor", image: "/assets/images/vendors.webp" },
];

export default function PortfolioBusinessTypes() {
  return (
    <section className="portfolio-business-types">
      <div className="business-inner">
        {/* Header */}
        <div className="business-header">
          <h2 className="business-title">Built for Every Business Type</h2>
          <p className="business-subtitle">
            Flexible commerce solutions tailored for different industries and
            business models.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="business-grid">
          {businessTypes.map((item) => (
            <div className="business-card" key={item.label}>
              {/* Image area */}
              <div className="business-card-image">
                <div className="business-image-wrapper">
                  <img 
                    src={item.image} 
                    alt={item.label}
                    className="business-image"
                  />
                </div>
                {/* Small icon overlay */}
                <div className="business-card-icon-overlay">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect
                      x="1"
                      y="1"
                      width="14"
                      height="14"
                      rx="2"
                      stroke="#fff"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <line
                      x1="1"
                      y1="5"
                      x2="15"
                      y2="5"
                      stroke="#fff"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
              </div>
              {/* Label */}
              <div className="business-card-label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}