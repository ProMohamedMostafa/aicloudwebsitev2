"use client";

import Image from "next/image";
import "./PortfolioHero.css";
import { useI18n } from "@/app/i18n/context";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioHero() {
  const { t, dir } = useI18n();
  const isRTL = dir === "rtl";

  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Respect prefers-reduced-motion ──────────────────────────────
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Text content slides in from the content side
      const contentX = isRTL ? 60 : -60;
      const imageX = isRTL ? -60 : 60;

      gsap.set(
        [titleRef.current, descRef.current, btnRef.current, iconsRef.current],
        {
          opacity: 0,
          x: contentX,
        },
      );
      gsap.set(imageRef.current, { opacity: 0, x: imageX, scale: 0.96 });

      tl.to(titleRef.current, { opacity: 1, x: 0, duration: 0.75 })
        .to(descRef.current, { opacity: 1, x: 0, duration: 0.6 }, "-=0.45")
        .to(btnRef.current, { opacity: 1, x: 0, duration: 0.5 }, "-=0.35")
        .to(iconsRef.current, { opacity: 1, x: 0, duration: 0.6 }, "-=0.3")
        .to(
          imageRef.current,
          { opacity: 1, x: 0, scale: 1, duration: 0.8 },
          "-=0.7",
        );

      // Subtle float on the hero image (runs forever, no ScrollTrigger needed)
      gsap.to(imageRef.current, {
        y: -14,
        duration: 3.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1.2,
      });

      // Individual service icons stagger in
      const iconItems =
        iconsRef.current?.querySelectorAll(".service-icon-item");
      if (iconItems && iconItems.length) {
        gsap.fromTo(
          iconItems,
          { opacity: 0, y: 24, scale: 0.85 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.12,
            ease: "back.out(1.6)",
            delay: 0.9,
          },
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [isRTL]);

  return (
    <section className="portfolio-hero" ref={sectionRef}>
      {/* SVG background decor */}
      <div
        className="hero-decore"
        aria-hidden="true"
        style={
          isRTL
            ? { right: "auto", left: "-15%", transform: "scaleX(-1)" }
            : { left: "auto", right: "-15%", transform: "none" }
        }
      >
        <Image
          src="/assets/images/hero-right.svg"
          alt=""
          fill
          sizes="(max-width: 768px) 0vw, 40vw"
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className={`hero-inner ${isRTL ? "hero-inner--rtl" : ""}`}>
        {/* Text Content */}
        <div className="hero-content">
          <div className="hero-text-group">
            <h1 className="hero-title" ref={titleRef}>
              {t("portfolio.hero.title")}
            </h1>
            <p className="hero-description" ref={descRef}>
              {t("portfolio.hero.description")}
            </p>
          </div>

          <a href="#contact" className="hero-btn" ref={btnRef}>
            {t("portfolio.hero.cta")}
          </a>

          {/* Service Icons */}
          <div className="hero-service-icons" ref={iconsRef}>
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
              <span>{t("portfolio.hero.dashboard")}</span>
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
              <span>{t("portfolio.hero.application")}</span>
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
              <span>{t("portfolio.hero.website")}</span>
            </div>
          </div>
        </div>

        {/* Hero main image */}
        <div className="hero-image-area">
          <div className="hero-image-placeholder" ref={imageRef}>
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
