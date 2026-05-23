"use client";

import { useRef, useLayoutEffect } from "react";
import ContactUsButton from "../components/shared/components/ContactUsButton/ContactUsButton";
import { useI18n } from "../i18n/context";
import "./services.css";
import gsap from "gsap";

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
  const ctaRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef(null);
  const descriptionRef = useRef(null);
  const titleRef = useRef(null);
  const benefitsRef = useRef(null);
  const carouselRef = useRef(null);
  const carouselItemsRef = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([titleRef.current, descriptionRef.current, benefitsRef.current, ...carouselItemsRef.current], { opacity: 0, y: 30 });
      const mainTl = gsap.timeline({ defaults: { ease: "power3.out" } });
      mainTl.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8 });
      mainTl.to(titleRef.current, { opacity: 1, y: 0, duration: 1 }, "+=0.2");
      mainTl.to(descriptionRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=0.3");
      mainTl.to(benefitsRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=0.2");
      mainTl.fromTo(carouselRef.current, { opacity: 0, scale: 0.8, rotationY: 15 }, { opacity: 1, scale: 1, rotationY: 0, duration: 1.2, ease: "back.out(1.4)" }, "-=0.5");
      mainTl.to(carouselItemsRef.current, { opacity: 1, y: 0, duration: 0.6, stagger: { amount: 1, from: "start" }, ease: "power2.out" }, "-=0.3");
      mainTl.fromTo(ctaRef.current, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 0.6, ease: "elastic.out(1, 0.8)" }, "-=0.2");
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const addToCarouselRefs = (el: HTMLDivElement | null) => {
    if (el && !carouselItemsRef.current.includes(el)) carouselItemsRef.current.push(el);
  };

  return (
    <div className="services-page" ref={sectionRef}>
      <section className="services-main-content">
        <div className="services-description">
          <h2 ref={titleRef}>{t("servicesPage.whatWeOffer")}</h2>
          <p ref={descriptionRef}>{t("servicesPage.description")}</p>
          <div className="key-benefits" ref={benefitsRef}>
            <h3>{t("servicesPage.whyChooseUs")}</h3>
            <ul>
              <li>{t("servicesPage.benefit1")}</li>
              <li>{t("servicesPage.benefit2")}</li>
              <li>{t("servicesPage.benefit3")}</li>
              <li>{t("servicesPage.benefit4")}</li>
            </ul>
          </div>
        </div>

        <div className="vertical-carousel-wrapper" ref={carouselRef}>
          <div className="vertical-carousel">
            {serviceKeys.map((key, index) => (
              <div key={key} className="carousel__item" ref={addToCarouselRefs}>
                <div className="carousel__item-head">{serviceIcons[index]}</div>
                <div className="carousel__item-body">
                  <p className="title">{t(`services.items.${key}.title`)}</p>
                  <p className="description">{t(`services.items.${key}.description`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
