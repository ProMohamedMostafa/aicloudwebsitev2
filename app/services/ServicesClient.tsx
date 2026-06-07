"use client";

import { useServicesAnimation } from "@/hooks/useServicesAnimation";
import "./services.css";
import { useI18n } from "@/app/i18n/context";

export default function ServicesClient() {
  const { sectionRef, titleRef, descriptionRef, benefitsRef, carouselRef, addToCarouselRefs } = useServicesAnimation();
  const { t, tArr } = useI18n();

  const serviceKeys = [
    { key: "services.webDev", icon: "🌐" },
    { key: "services.appDev", icon: "📱" },
    { key: "services.iot", icon: "🔗" },
    { key: "services.ai", icon: "🤖" },
    { key: "services.cloud", icon: "☁️" },
    { key: "services.ux", icon: "🎨" },
  ];

  return (
    <div className="services-page" ref={sectionRef}>
      <section className="services-main-content">
        <div className="services-description">
          <h2 ref={titleRef}>{t("servicesPage.title")}</h2>
          <p ref={descriptionRef}>{t("servicesPage.description")}</p>
          <div className="key-benefits" ref={benefitsRef}>
            <h3>{t("servicesPage.whyChooseUs")}</h3>
            <ul>
              <li>{t("servicesPage.reason1")}</li>
              <li>{t("servicesPage.reason2")}</li>
              <li>{t("servicesPage.reason3")}</li>
              <li>{t("servicesPage.reason4")}</li>
            </ul>
          </div>
        </div>

        <div className="vertical-carousel-wrapper" ref={carouselRef}>
          <div className="vertical-carousel">
            {serviceKeys.map((svc) => (
              <div key={svc.key} className="carousel__item" ref={addToCarouselRefs}>
                <div className="carousel__item-head">{svc.icon}</div>
                <div className="carousel__item-body">
                  <p className="title">{t(`${svc.key}.title`)}</p>
                  <p className="description">{t(`${svc.key}.description`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
