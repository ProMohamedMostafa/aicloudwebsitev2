"use client";

import Image from "next/image";
import "./PortfolioHero.css";

export default function PortfolioHero() {
  return (
    <section className="portfolio-hero">
      {/* SVG image on the right side - hidden on medium and small screens */}
      <div className="hero-decore" aria-hidden="true">
        <Image
          src="/assets/images/hero-right.svg"
          alt=""
          fill
          style={{ objectFit: "contain" }}
        />
      </div>

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
                <Image
                  src="/assets/images/ecommerce-hero-img-dashboard.webp"
                  alt="Dashboard"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <span>Dashboard</span>
            </div>

            <div className="service-icon-item">
              <div className="service-icon-circle">
                <Image
                  src="/assets/images/ecommerce-hero-img-app.webp"
                  alt="Application"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <span>Application</span>
            </div>

            <div className="service-icon-item">
              <div className="service-icon-circle">
                <Image
                  src="/assets/images/ecommerce-hero-img-website.webp"
                  alt="Website"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <span>Website</span>
            </div>
          </div>
        </div>

        {/* Right image placeholder */}
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