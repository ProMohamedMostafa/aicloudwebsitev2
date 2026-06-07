"use client";

import Image from "next/image";
import "./PortfolioHero.css";
import { useI18n } from "@/app/i18n/context";

export default function PortfolioHero() {
  const { t, dir } = useI18n();
  const isRTL = dir === "rtl";

  return (
    <section className="portfolio-hero">
      {/* SVG background decor — flipped horizontally in RTL so it sits on the LEFT */}
      <div
        className="hero-decore"
        aria-hidden="true"
        style={isRTL ? { right: "auto", left: "-15%", transform: "scaleX(-1)" } : undefined}
      >
        <Image
          src="/assets/images/hero-right.svg"
          alt=""
          fill
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className={`hero-inner ${isRTL ? "hero-inner--rtl" : ""}`}>
        {/* Text Content — in RTL this moves to the right side */}
        <div className="hero-content">
          <div className="hero-text-group">
            <h1 className="hero-title">{t("portfolio.hero.title")}</h1>
            <p className="hero-description">{t("portfolio.hero.description")}</p>
          </div>

          <a href="#contact" className="hero-btn">
            {t("portfolio.hero.cta")}
          </a>

          {/* Service Icons */}
          <div className="hero-service-icons">
            <div className="service-icon-item">
              <div className="service-icon-circle">
                <Image src="/assets/images/ecommerce-hero-img-dashboard.webp" alt="Dashboard" width={80} height={80} className="object-contain" />
              </div>
              <span>{t("portfolio.hero.dashboard")}</span>
            </div>
            <div className="service-icon-item">
              <div className="service-icon-circle">
                <Image src="/assets/images/ecommerce-hero-img-app.webp" alt="Application" width={80} height={80} className="object-contain" />
              </div>
              <span>{t("portfolio.hero.application")}</span>
            </div>
            <div className="service-icon-item">
              <div className="service-icon-circle">
                <Image src="/assets/images/ecommerce-hero-img-website.webp" alt="Website" width={80} height={80} className="object-contain" />
              </div>
              <span>{t("portfolio.hero.website")}</span>
            </div>
          </div>
        </div>

        {/* Hero main image */}
        <div className="hero-image-area">
          <div className="hero-image-placeholder">
            <Image
              src="/assets/images/ecommerce-hero-main-img.webp"
              alt="Hero Image"
              width={600}
              height={600}
              priority
              className="object-contain w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
