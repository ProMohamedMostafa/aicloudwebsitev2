"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";

const CleanTechLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const aiLogoRef = useRef<HTMLDivElement>(null);
  const cleanTechLogoRef = useRef<HTMLDivElement>(null);
  const morphPathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = "hidden";

    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return Math.min(prev + Math.random() * 20, 100);
      });
    }, 200);

    // GSAP Morphing Animation
    if (mounted) {
      const tl = gsap.timeline();

      // Initial AI Cloud logo appearance
      tl.fromTo(
        aiLogoRef.current,
        { scale: 0, rotation: -180, opacity: 0 },
        {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 1.2,
          ease: "elastic.out(1, 0.5)",
        }
      )
        .to(aiLogoRef.current, {
          scale: 1.1,
          duration: 0.3,
          ease: "power2.inOut",
          repeat: 1,
          yoyo: true,
        })
        // Morph to CleanTech logo
        .to(aiLogoRef.current, {
          scale: 0.8,
          opacity: 0.5,
          duration: 0.5,
          ease: "power2.inOut",
        })
        .to(aiLogoRef.current, {
          scale: 0,
          opacity: 0,
          duration: 0.8,
          ease: "power2.in",
        })
        .fromTo(
          cleanTechLogoRef.current,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.2, ease: "back.out(1.7)" },
          "-=0.5"
        )
        // CleanTech logo animations
        .to(cleanTechLogoRef.current, {
          scale: 1.1,
          duration: 0.4,
          ease: "power2.inOut",
          repeat: 2,
          yoyo: true,
        });

      // Background particles animation
      if (containerRef.current) {
        const particles = containerRef.current.querySelectorAll(".particle");
        gsap.fromTo(
          particles,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: "back.out(1.7)",
            repeat: -1,
            yoyo: true,
          }
        );
      }

      // Floating elements animation
      const floatingElements =
        containerRef.current?.querySelectorAll(".floating-element");
      if (floatingElements) {
        floatingElements.forEach((element) => {
          gsap.to(element, {
            y: -20,
            duration: 2,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          });
        });
      }
    }

    // Complete loading after animation sequence
    const completeTimeout = setTimeout(() => {
      setIsLoading(false);
      clearInterval(progressInterval);
      document.body.style.overflow = "unset";
    }, 5000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(completeTimeout);
      document.body.style.overflow = "unset";
    };
  }, [mounted]);

  const createParticles = () => {
    return Array.from({ length: 8 }, (_, i) => {
      const angle = (i * 45 * Math.PI) / 180;
      const radius = 60 + Math.random() * 20;
      return (
        <div
          key={i}
          className="particle absolute w-3 h-3 bg-linear-to-r from-green-400 to-emerald-500 rounded-full"
          style={{
            left: `${50 + radius * Math.cos(angle)}%`,
            top: `${50 + radius * Math.sin(angle)}%`,
          }}
        />
      );
    });
  };

  const createFloatingIcons = () => {
    const icons = [
      { icon: "🖥️", class: "top-10 left-1/4" }, // System / Computers
      { icon: "📡", class: "top-20 right-1/4" }, // Sensors / Connectivity
      { icon: "⚙️", class: "bottom-20 left-1/3" }, // Tasks / Automation
      { icon: "📊", class: "bottom-10 right-1/3" }, // Analytics / Reports
    ];

    return icons.map((item, i) => (
      <div
        key={i}
        className={`floating-element absolute text-2xl opacity-60 ${item.class}`}
      >
        {item.icon}
      </div>
    ));
  };

  if (!mounted) {
    return null;
  }

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          ref={loaderRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-linear-to-br from-emerald-50 via-green-50 to-teal-50"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" },
          }}
        >
          {/* Animated Background Elements */}
          <div ref={containerRef} className="absolute inset-0 overflow-hidden">
            {/* Gradient Orbs */}
            <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-emerald-200 rounded-full mix-blend-multiply opacity-30 animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-teal-200 rounded-full mix-blend-multiply opacity-40 animate-pulse delay-1000"></div>
            <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-green-200 rounded-full mix-blend-multiply opacity-30 animate-pulse delay-500"></div>

            {/* Particles */}
            {createParticles()}

            {/* Floating Icons */}
            {createFloatingIcons()}
          </div>

          {/* Main Loader Content */}
          <div className="relative z-10 flex flex-col items-center justify-center space-y-8">
            {/* Logo Container */}
            <div className="relative w-48 h-48">
              {/* AI Cloud Logo */}
              <div
                ref={aiLogoRef}
                className="absolute inset-0 flex items-center justify-center opacity-0"
              >
                <motion.div
                  className="relative w-32 h-32"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src="/assets/images/ai_logo.svg" // Update this path
                    alt="AI Cloud"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </motion.div>
              </div>

              {/* CleanTech Logo */}
              <div
                ref={cleanTechLogoRef}
                className="absolute inset-0 flex items-center justify-center opacity-0"
              >
                <motion.div
                  className="relative w-32 h-32"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src="/assets/images/cleanTech-logo.svg" // Update this path
                    alt="CleanTech"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </motion.div>
              </div>
            </div>

            {/* Loading Text */}
            <motion.div
              className="text-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.h2
                className="text-4xl font-bold bg-linear-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                AI Cloud → CleanTech
              </motion.h2>
              <motion.p
                className="text-slate-600 text-lg max-w-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                Transforming AI Innovation into Sustainable Solutions
              </motion.p>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              className="w-80 bg-slate-200 rounded-full h-3 overflow-hidden shadow-inner"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 1.4 }}
            >
              <motion.div
                className="h-full bg-linear-to-r from-emerald-500 to-green-500 rounded-full shadow-lg"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Percentage */}
            <motion.div
              className="text-emerald-600 font-mono text-xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
            >
              {Math.round(progress)}%
            </motion.div>
          </div>

          {/* Tech Specs */}
          <div className="absolute bottom-10 left-10 text-slate-600 text-sm">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2 }}
            >
              • Sustainable AI •
            </motion.div>
          </div>
          <div className="absolute bottom-10 right-10 text-slate-600 text-sm">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.2 }}
            >
              • Green Technology •
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CleanTechLoader;
