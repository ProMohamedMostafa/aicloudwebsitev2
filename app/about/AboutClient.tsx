"use client";

import "./about.css";
import { useAboutAnimation } from "@/hooks/useAboutAnimation";
import { useI18n } from "@/app/i18n/context";

export default function AboutClient() {
  const {
    sectionRef, containerRef, titleRef, subtitleRef, descriptionRef,
    sadeemSectionRef, sadeemLogoRef, sadeemDescriptionRef,
  } = useAboutAnimation();
  const { t } = useI18n();

  return (
    <div className="about-section" ref={sectionRef}>
      <div className="about-container" ref={containerRef}>
        <div className="about-hero">
          <div className="about-hero-content">
            <h1 className="about-title" ref={titleRef}>{t("aboutPage.title")}</h1>
            <h2 className="about-subtitle" ref={subtitleRef}>{t("aboutPage.subtitle")}</h2>

            <div className="content-split">
              <div className="left-content">
                <p className="about-description" ref={descriptionRef}>{t("aboutPage.description")}</p>
              </div>
              <div className="right-content">
                <div className="sadeem-logo-container" ref={sadeemLogoRef}>
                  <div className="sadeem-logo-placeholder">
                    <img src="/assets/images/sadeem-logo.svg" alt="Sadeem Logo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sadeem-section" ref={sadeemSectionRef}>
          <div className="sadeem-content">
            <div className="sadeem-description" ref={sadeemDescriptionRef}>
              <h3>{t("aboutPage.foundationTitle")}</h3>
              <p>{t("aboutPage.foundation1")}</p>
              <p>{t("aboutPage.foundation2")}</p>
              <p>{t("aboutPage.foundation3")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
