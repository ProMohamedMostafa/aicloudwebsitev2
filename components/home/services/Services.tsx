"use client";

import { useRef, useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import "./services.css";
import ContactUsButton from "../../shared/components/ContactUsButton/ContactUsButton";
import { services } from "@/data/servicesData";
import { useRouter } from "next/navigation";

export default function Services() {
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ctaRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleLearnMore = () => {
    router.push("/contact");
  };
  return (
    <div className="modern-services">
      {/* Background Elements */}
      <div className="services-background">
        <div className="gradient-orb-1"></div>
        <div className="gradient-orb-2"></div>
        <div className="grid-pattern"></div>
      </div>

      <div className="services-container">
        {/* Header */}
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="services-title">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="services-subtitle">
            Comprehensive digital solutions designed to elevate your business
            and deliver exceptional user experiences
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={`service-card ${
                activeService === index ? "active" : ""
              }`}
              variants={itemVariants}
              onMouseEnter={() => setActiveService(index)}
              onFocus={() => setActiveService(index)}
            >
              <div className="service-header">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
              </div>

              <p className="service-description">{service.description}</p>

              <div className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <span key={featureIndex} className="feature-tag">
                    {feature}
                  </span>
                ))}
              </div>

              {/* Learn More Button */}
              <motion.button
                className="learn-more-btn"
                onClick={() => handleLearnMore()}
                aria-label={`Learn more about ${service.title}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                Learn More
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.button>

              <div className="service-hover-indicator"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
