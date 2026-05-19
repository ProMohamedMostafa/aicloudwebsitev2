"use client";

import { useRef, useLayoutEffect } from "react";
import ContactUsButton from "../components/shared/components/ContactUsButton/ContactUsButton";
import { services } from "../data/servicesData";
import "./services.css";
import gsap from "gsap";

export default function Services() {
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToCarouselRefs = (el: HTMLDivElement | null) => {
    if (el && !carouselItemsRef.current.includes(el)) {
      carouselItemsRef.current.push(el);
    }
  };

  return (
    <div className="services-page" ref={sectionRef}>
      {/* Main Content Section */}
      <section className="services-main-content">
        {/* Left Side - Description */}
        <div className="services-description">
          <h2 ref={titleRef}>What We Offer</h2>
          <p ref={descriptionRef}>
            We provide cutting-edge digital solutions tailored to your business
            needs. Our comprehensive services are designed to drive innovation
            and deliver exceptional results that propel your business forward in
            the digital landscape.
          </p>
          <div className="key-benefits" ref={benefitsRef}>
            <h3>Why Choose Us?</h3>
            <ul>
              <li>Expert team with proven track record</li>
              <li>Custom solutions for your unique needs</li>
              <li>Cutting-edge technology stack</li>
              <li>Timely delivery and ongoing support</li>
            </ul>
          </div>
        </div>

        {/* Right Side - Vertical Carousel */}
        <div className="vertical-carousel-wrapper" ref={carouselRef}>
          <div className="vertical-carousel">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="carousel__item"
                ref={addToCarouselRefs}
              >
                <div className="carousel__item-head">{service.icon}</div>
                <div className="carousel__item-body">
                  <p className="title">{service.title}</p>
                  <p className="description">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
