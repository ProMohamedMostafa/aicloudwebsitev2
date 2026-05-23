"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import "./services.css";
import ContactUsButton from "../../shared/components/ContactUsButton/ContactUsButton";
import { useI18n } from "@/app/i18n/context";
import Link from "next/link";

// Service icons — keep static since features/icons don't change with lang
const serviceIcons = ["🌐", "📱", "🔗", "🤖", "☁️", "🎨"];
const serviceFeatures = [
  ["React/Next.js", "TypeScript", "Responsive Design", "SEO Optimized"],
  ["iOS & Android", "Cross-Platform", "Native Performance", "App Store Ready"],
  ["Smart Devices", "Real-time Data", "Cloud Integration", "Analytics Dashboard"],
  ["Machine Learning", "AI Models", "Data Analysis", "Automation"],
  ["AWS/Azure", "Scalable Infrastructure", "DevOps", "CI/CD Pipelines"],
  ["User Research", "Prototyping", "UI Design", "Usability Testing"],
];
const serviceKeys = ["webDev", "appDev", "iot", "ai", "cloud", "design"] as const;

export default function Services() {
  const { t } = useI18n();
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
            {t("services.title")}{" "}
            <span className="gradient-text">{t("services.titleHighlight")}</span>
          </h2>
          <p className="services-subtitle">{t("services.subtitle")}</p>
        </div>

        <div className="services-grid">
          {serviceKeys.map((key, index) => (
            <div
              key={key}
              className={`service-card scroll-fade ${visible ? "visible" : ""} ${activeService === index ? "active" : ""}`}
              style={{ transitionDelay: `${index * 80}ms` }}
              onMouseEnter={() => handleServiceHover(index)}
              onFocus={() => handleServiceHover(index)}
            >
              <div className="service-header">
                <div className="service-icon">{serviceIcons[index]}</div>
                <h3 className="service-title">{t(`services.items.${key}.title`)}</h3>
              </div>

              <p className="service-description">{t(`services.items.${key}.description`)}</p>

              <div className="service-features">
                {serviceFeatures[index].map((feature, fi) => (
                  <span key={fi} className="feature-tag">{feature}</span>
                ))}
              </div>

              <Link
                href="/contact"
                className="learn-more-btn"
                aria-label={`Learn more about ${t(`services.items.${key}.title`)}`}
              >
                {t("services.learnMore")}
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
