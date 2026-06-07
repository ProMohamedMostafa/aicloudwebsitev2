"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import "./services.css";
import Link from "next/link";
import { useI18n } from "@/app/i18n/context";

export default function Services() {
  const [activeService, setActiveService] = useState(0);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t, tArr, dir } = useI18n();

  const serviceKeys = [
    { key: "services.webDev", icon: "🌐" },
    { key: "services.appDev", icon: "📱" },
    { key: "services.iot", icon: "🔗" },
    { key: "services.ai", icon: "🤖" },
    { key: "services.cloud", icon: "☁️" },
    { key: "services.ux", icon: "🎨" },
  ];

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
            {t("services.titleHighlight") && t("services.titleHighlight") !== "services.titleHighlight" && (
              <span className="gradient-text">{t("services.titleHighlight")}</span>
            )}
          </h2>
          <p className="services-subtitle">{t("services.subtitle")}</p>
        </div>

        <div className="services-grid">
          {serviceKeys.map((svc, index) => (
            <div
              key={svc.key}
              className={`service-card scroll-fade ${visible ? "visible" : ""} ${activeService === index ? "active" : ""}`}
              style={{ transitionDelay: `${index * 80}ms` }}
              onMouseEnter={() => handleServiceHover(index)}
              onFocus={() => handleServiceHover(index)}
            >
              <div className="service-header">
                <div className="service-icon">{svc.icon}</div>
                <h3 className="service-title">{t(`${svc.key}.title`)}</h3>
              </div>

              <p className="service-description">{t(`${svc.key}.description`)}</p>

              <div className="service-features">
                {tArr(`${svc.key}.features`).map((feature, fi) => (
                  <span key={fi} className="feature-tag">{feature}</span>
                ))}
              </div>

              <Link
                href="/contact"
                className="learn-more-btn"
                aria-label={`Learn more about ${t(`${svc.key}.title`)}`}
              >
                {t("services.learnMore")}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  style={dir === "rtl" ? { transform: "scaleX(-1)" } : undefined}
                >
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
