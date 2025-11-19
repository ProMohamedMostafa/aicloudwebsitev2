"use client";

import "./about.css";
import { useAboutAnimation } from "../../hooks/useAboutAnimation";

export default function AboutClient() {
  const {
    sectionRef,
    containerRef,
    titleRef,
    subtitleRef,
    descriptionRef,
    sadeemSectionRef,
    sadeemLogoRef,
    sadeemDescriptionRef,
  } = useAboutAnimation();

  return (
    <div className="about-section" ref={sectionRef}>
      <div className="about-container" ref={containerRef}>
        {/* Main Content - Split Layout */}
        <div className="about-hero">
          <div className="about-hero-content">
            <h1 className="about-title" ref={titleRef}>
              About AI Cloud
            </h1>
            <h2 className="about-subtitle" ref={subtitleRef}>
              Smart Technology Powered by Sadeem Medical
            </h2>

            <div className="content-split">
              <div className="left-content">
                <p className="about-description" ref={descriptionRef}>
                  AI Cloud is a smart technology provider powered by Sadeem
                  Medical, one of Saudi Arabia's leading healthcare companies.
                  Backed by over 15 years of expertise, this partnership brings
                  together Sadeem's reliability and AI Cloud's innovation to
                  deliver intelligent solutions across sectors.
                </p>
              </div>

              <div className="right-content">
                <div className="sadeem-logo-container" ref={sadeemLogoRef}>
                  <div className="sadeem-logo-placeholder">
                    <img
                      src="/assets/images/sadeem-logo.svg"
                      alt="Sadeem Logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sadeem Medical Section */}
        <div className="sadeem-section" ref={sadeemSectionRef}>
          <div className="sadeem-content">
            <div className="sadeem-description" ref={sadeemDescriptionRef}>
              <h3>Our Foundation</h3>
              <p>
                AI Cloud is proud to be a subsidiary of Sadeem Medical — a
                trusted name in the healthcare sector with over 15 years of
                experience in the Saudi market.
              </p>
              <p>
                This strong foundation empowers AI Cloud to extend Sadeem's
                legacy of excellence into the fields of smart facility
                management and AI-powered IoT platforms.
              </p>
              <p>
                Our collaboration ensures that clients benefit from the
                reliability of a well-established medical leader, combined with
                the innovation and agility of a next-generation technology
                provider.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
