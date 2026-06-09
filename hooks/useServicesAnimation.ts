"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

export function useServicesAnimation() {
  const ctaRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef(null);
  const descriptionRef = useRef(null);
  const titleRef = useRef(null);
  const benefitsRef = useRef(null);
  const carouselRef = useRef(null);
  const carouselItemsRef = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Initial hide elements
      gsap.set(
        [
          titleRef.current,
          descriptionRef.current,
          benefitsRef.current,
          ...carouselItemsRef.current,
        ],
        {
          opacity: 0,
          y: 30,
        }
      );

      // Main timeline
      const mainTl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      // Section entrance
      mainTl.fromTo(
        sectionRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8 }
      );

      // Description section animation
      mainTl
        .to(
          titleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
          },
          "+=0.2"
        )
        .to(
          descriptionRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.3"
        )
        .to(
          benefitsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.2"
        );

      // Carousel container animation
      mainTl.fromTo(
        carouselRef.current,
        {
          opacity: 0,
          scale: 0.8,
          rotationY: 15,
        },
        {
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 1.2,
          ease: "back.out(1.4)",
        },
        "-=0.5"
      );

      // Carousel items staggered animation
      mainTl.to(
        carouselItemsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: {
            amount: 1,
            from: "start",
          },
          ease: "power2.out",
        },
        "-=0.3"
      );

      // CTA button animation
      if (ctaRef.current) {
        mainTl.fromTo(
          ctaRef.current,
          {
            opacity: 0,
            scale: 0.5,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "elastic.out(1, 0.8)",
          },
          "-=0.2"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToCarouselRefs = (el: HTMLDivElement | null) => {
    if (el && !carouselItemsRef.current.includes(el)) {
      carouselItemsRef.current.push(el);
    }
  };

  return {
    ctaRef,
    sectionRef,
    descriptionRef,
    titleRef,
    benefitsRef,
    carouselRef,
    addToCarouselRefs,
  };
}
