"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import "./clean-tech-about.css";

export default function CleanTechAbout() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const logoRef = useRef(null);
  const imageRef = useRef(null);
  const greenLineRef = useRef(null);
  const missionRef = useRef(null); // New ref for mission text

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

      // Green line animation - from top to bottom
      masterTl.fromTo(
        greenLineRef.current,
        {
          scaleY: 0,
          transformOrigin: "top center",
        },
        {
          scaleY: 1,
          duration: 1.2,
          ease: "power3.out",
        }
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

      // Mission text animation
      masterTl.fromTo(
        missionRef.current,
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.4"
      );

      // Logo animation
      masterTl.fromTo(
        logoRef.current,
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

      // Right image animation
      masterTl.fromTo(
        imageRef.current,
        {
          opacity: 0,
          x: 100,
          scale: 0.9,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.3"
      );

      // Description animation
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="clean-tech-about-section" ref={sectionRef}>
      {/* Add border top and bottom within the about section */}
      <div className="clean-tech-section-borders">
        <div className="clean-tech-about-container" ref={containerRef}>
          <div className="clean-tech-about-content">
            <h1 className="clean-tech-about-title" ref={titleRef}>
              About CleanTech
            </h1>

            <div className="clean-tech-content-layout">
              {/* Left Column - Mission, Logo and Description */}
              <div className="clean-tech-left-column">
                {/* Added mission text */}
                <div className="clean-tech-mission-container" ref={missionRef}>
                  <h2 className="clean-tech-mission-title">Our Mission</h2>
                  <p className="clean-tech-mission-text">
                    Revolutionizing hygiene through smart technology
                  </p>
                </div>

                <div className="clean-tech-logo-container" ref={logoRef}></div>

                <div className="clean-tech-description-container">
                  <p
                    className="clean-tech-about-description"
                    ref={descriptionRef}
                  >
                    Clean Tech is an intelligent system designed to enhance
                    hygiene management in both public and private spaces. By
                    using smart sensors, it continuously monitors cleanliness
                    levels and automatically sends notifications to cleaners or
                    supervisors when action is needed ensuring timely and
                    efficient cleaning operations.
                  </p>
                </div>
              </div>

              {/* Right Column - Feature Image */}
              <div className="clean-tech-right-column">
                <div className="clean-tech-image-container" ref={imageRef}>
                  <div className="clean-tech-image-wrapper">
                    <img
                      src="/assets/images/Smart-operating.png"
                      alt="CleanTech System in Action"
                      className="clean-tech-feature-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
