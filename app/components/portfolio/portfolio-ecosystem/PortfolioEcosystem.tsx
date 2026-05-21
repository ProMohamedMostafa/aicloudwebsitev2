"use client";

import Image from "next/image";
import { useState } from "react";
import "./PortfolioEcosystem.css";

const services = [
  {
    title: "Mobile Commerce Apps",
    description: "iOS & Android shopping apps",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect
          x="5"
          y="1"
          width="14"
          height="22"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <line
          x1="12"
          y1="18"
          x2="12"
          y2="18"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "E-commerce Websites",
    description: "Modern scalable online stores.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect
          x="2"
          y="3"
          width="20"
          height="18"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <line
          x1="2"
          y1="8"
          x2="22"
          y2="8"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    title: "Admin Dashboards",
    description: "Advanced analytics & management.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect
          x="2"
          y="2"
          width="9"
          height="9"
          rx="1"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <rect
          x="13"
          y="2"
          width="9"
          height="9"
          rx="1"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <rect
          x="13"
          y="13"
          width="9"
          height="9"
          rx="1"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <rect
          x="2"
          y="13"
          width="9"
          height="9"
          rx="1"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
  },
  {
    title: "Payment & Shipping Integration",
    description: "Seamless checkout systems.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect
          x="2"
          y="5"
          width="20"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <line
          x1="2"
          y1="10"
          x2="22"
          y2="10"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    title: "Conversion Optimization",
    description: "Improve sales with smart user experiences.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <polyline
          points="22,12 18,12 15,21 9,3 6,12 2,12"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Multi-Vendor Marketplace Systems",
    description: "Advanced scalable marketplace platforms.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <polyline
          points="9,22 9,12 15,12 15,22"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
  },
];

const ecosystemImages = [
  "/assets/images/ecosystem-1.webp",
  "/assets/images/ecosystem-2.webp",
  "/assets/images/ecosystem-3.webp",
];

// Star positions (updated to use star shapes and adjusted styling)
const stars = [
  { cls: "star-1", w: 20, h: 20, l: 254, t: 37 },
  { cls: "star-2", w: 20, h: 20, l: 46, t: 32 },
  { cls: "star-3", w: 15, h: 15, l: 79, t: 8 },
  { cls: "star-4", w: 15, h: 15, l: 295, t: 88 },
  { cls: "star-5", w: 20, h: 20, l: 8, t: 113 },
  { cls: "star-6", w: 15, h: 15, l: 39, t: 92 },
  { cls: "star-7", w: 10, h: 10, l: 101, t: 42 },
  { cls: "star-8", w: 10, h: 10, l: 214, t: 47 },
  { cls: "star-9", w: 15, h: 15, l: 11, t: 16 },
  { cls: "star-10", w: 15, h: 15, l: 218, t: 13 },
  { cls: "star-11", w: 10, h: 10, l: 19, t: 67 },
  { cls: "star-12", w: 10, h: 10, l: 295, t: 13 },
  { cls: "star-13", w: 10, h: 10, l: 295, t: 120 },
  { cls: "star-14", w: 15, h: 15, l: 288, t: 52 },
];

// Star SVG component (4-point sparkle star)
const StarShape = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L13.5 9.5L21 11L13.5 12.5L12 20L10.5 12.5L3 11L10.5 9.5L12 2Z"
      fill="#ACD8FF"
      stroke="#ACD8FF"
      strokeWidth="1"
      strokeLinejoin="round"
    />
  </svg>
);

export default function PortfolioEcosystem() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <section className="portfolio-ecosystem">
      <div className="ecosystem-inner">
        <div className="ecosystem-header">
          <h2 className="ecosystem-title">Complete E-commerce Ecosystem</h2>
          <p className="ecosystem-subtitle">
            We build fully connected commerce experiences combining websites,
            mobile apps, AI systems, operations, and analytics into one scalable
            ecosystem.
          </p>
        </div>

        <div className="ecosystem-grid-layout">
          {/* Left: image carousel */}
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

          {/* Right: service cards grid */}
          <div className="ecosystem-services">
            {services.map((service) => (
              <div className="service-card" key={service.title}>
                {/* Decorative stars - now using StarShape component */}
                {stars.map((s) => (
                  <span
                    key={s.cls}
                    className={`star ${s.cls}`}
                    style={{
                      width: s.w,
                      height: s.h,
                      left: s.l,
                      top: s.t,
                      position: "absolute",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    aria-hidden="true"
                  >
                    <StarShape size={s.w} />
                  </span>
                ))}

                <div className="service-card-icon">
                  <div className="service-icon-bg">{service.icon}</div>
                </div>
                <div className="service-card-body">
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-desc">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}