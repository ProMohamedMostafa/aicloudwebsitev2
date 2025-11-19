"use client";

import { useServicesAnimation } from "@/hooks/useServicesAnimation";
import { services } from "../../data/servicesData";
import "./services.css"; // Your CSS imported here

export default function ServicesClient() {
  const {
    sectionRef,
    titleRef,
    descriptionRef,
    benefitsRef,
    carouselRef,
    addToCarouselRefs,
  } = useServicesAnimation();

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
