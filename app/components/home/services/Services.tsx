"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import "./services.css";
import ContactUsButton from "../../shared/components/ContactUsButton/ContactUsButton";
import { services } from "@/app/data/servicesData";
import Link from "next/link";

export default function Services() {
  const [activeService, setActiveService] = useState(0);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleServiceHover = useCallback((index: number) => setActiveService(index), []);

  return (
    <div ref={sectionRef} className="modern-services">
      <div className="services-background">
        <div className="gradient-orb-1" />
        <div className="gradient-orb-2" />
        <div className="grid-pattern" />
      </div>

      <div className="services-container">
        <div className={`services-header scroll-fade ${visible ? "visible" : ""}`}>
          <h2 className="services-title">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="services-subtitle">
            Comprehensive digital solutions designed to elevate your business
            and deliver exceptional user experiences
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`service-card scroll-fade ${visible ? "visible" : ""} ${activeService === index ? "active" : ""}`}
              style={{ transitionDelay: `${index * 80}ms` }}
              onMouseEnter={() => handleServiceHover(index)}
              onFocus={() => handleServiceHover(index)}
            >
              <div className="service-header">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
              </div>

              <p className="service-description">{service.description}</p>

              <div className="service-features">
                {service.features.map((feature, fi) => (
                  <span key={fi} className="feature-tag">{feature}</span>
                ))}
              </div>

              <Link
                href="/contact"
                className="learn-more-btn"
                aria-label={`Learn more about ${service.title}`}
              >
                Learn More
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>

              <div className="service-hover-indicator" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
