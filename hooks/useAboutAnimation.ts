"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

export function useAboutAnimation() {
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

  return {
    sectionRef,
    containerRef,
    titleRef,
    subtitleRef,
    descriptionRef,
    sadeemSectionRef,
    sadeemLogoRef,
    sadeemDescriptionRef,
  };
}
