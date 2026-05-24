"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import "./about.css";

export default function AboutPage() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const sadeemSectionRef = useRef(null);
  const sadeemLogoRef = useRef(null);
  const sadeemDescriptionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Master timeline
      const masterTl = gsap.timeline();

      // Section entrance
      masterTl.fromTo(
        sectionRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: "power2.inOut" }
      );

      // Container slide in
      masterTl.fromTo(
        containerRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );

      // Title animation with gradient reveal
      masterTl.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 80,
          backgroundPosition: "200% 0%",
        },
        {
          opacity: 1,
          y: 0,
          backgroundPosition: "0% 0%",
          duration: 1.2,
          ease: "power3.out",
        }
      );

      // Subtitle animation
      masterTl.fromTo(
        subtitleRef.current,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "back.out(1.2)",
        },
        "-=0.5"
      );

      // Main description animation
      masterTl.fromTo(
        descriptionRef.current,
        {
          opacity: 0,
          y: 60,
          rotationX: 90,
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1,
          ease: "back.out(1.2)",
        },
        "-=0.3"
      );

      // Sadeem section animation
      masterTl.fromTo(
        sadeemSectionRef.current,
        {
          opacity: 0,
          y: 80,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.2"
      );

      // Sadeem logo animation
      masterTl.fromTo(
        sadeemLogoRef.current,
        {
          opacity: 0,
          scale: 0.8,
          rotation: -10,
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: "back.out(1.4)",
        },
        "-=0.5"
      );

      // Sadeem description animation
      masterTl.fromTo(
        sadeemDescriptionRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.3"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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
