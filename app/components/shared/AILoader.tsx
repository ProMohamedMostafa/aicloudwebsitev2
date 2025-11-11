"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

const SoftwareHouseLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<SVGSVGElement>(null);

  // Software house related particle positions
  const particlePositions = Array.from({ length: 12 }, (_, i) => {
    const angle = (i * 30 * Math.PI) / 180;
    return {
      left: 50 + 40 * Math.cos(angle),
      top: 50 + 40 * Math.sin(angle),
    };
  });

  useEffect(() => {
    setMounted(true);

    // Hide body overflow to prevent scrolling during loader
    document.body.style.overflow = "hidden";

    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return Math.min(prev + Math.random() * 15, 100);
      });
    }, 200);

    // GSAP animations - only run on client
    if (mounted) {
      const tl = gsap.timeline();

      // Logo animation
      if (logoRef.current) {
        tl.fromTo(
          logoRef.current,
          { scale: 0, rotation: -180 },
          { scale: 1, rotation: 0, duration: 1.5, ease: "elastic.out(1, 0.5)" }
        );
      }

      // Particle animation
      if (particlesRef.current) {
        const particles = particlesRef.current.children;
        gsap.fromTo(
          particles,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.7)",
            repeat: -1,
            yoyo: true,
          }
        );
      }
    }

    // Complete loading after 3-4 seconds
    const completeTimeout = setTimeout(() => {
      setIsLoading(false);
      clearInterval(progressInterval);
      // Restore body overflow
      document.body.style.overflow = "unset";
    }, 3500);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(completeTimeout);
      // Cleanup: restore body overflow
      document.body.style.overflow = "unset";
    };
  }, [mounted]);

  const createSoftwareIcons = () => {
    const icons = [
      "💻",
      "⚡",
      "🔧",
      "🚀",
      "📱",
      "🌐",
      "💾",
      "🔒",
      "📊",
      "🛠️",
      "🎯",
      "✨",
    ];

    return particlePositions.map((position, i) => (
      <div
        key={i}
        className="absolute text-lg opacity-70"
        style={{
          left: `${position.left}%`,
          top: `${position.top}%`,
        }}
      >
        {icons[i]}
      </div>
    ));
  };

  // Don't render anything during SSR to avoid hydration issues
  if (!mounted) {
    return null;
  }

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          ref={loaderRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-linear-to-br from-slate-100 via-blue-50 to-purple-50"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" },
          }}
        >
          {/* Animated Background Elements - Software House Theme */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Code Window */}
            <div className="absolute top-1/4 left-1/4 w-32 h-20 bg-blue-100 rounded-lg mix-blend-multiply opacity-40 animate-pulse border border-blue-200">
              <div className="p-2">
                <div className="flex space-x-1 mb-1">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
                <div className="text-xs text-blue-600 font-mono">
                  {"<Code/>"}
                </div>
              </div>
            </div>

            {/* Mobile App */}
            <div className="absolute bottom-1/3 right-1/4 w-16 h-24 bg-purple-100 rounded-xl mix-blend-multiply opacity-50 animate-pulse delay-1000 border border-purple-200">
              <div className="p-1">
                <div className="w-4 h-4 bg-purple-300 rounded-full mx-auto mb-1"></div>
                <div className="space-y-1">
                  <div className="w-full h-1 bg-purple-300 rounded"></div>
                  <div className="w-3/4 h-1 bg-purple-300 rounded"></div>
                </div>
              </div>
            </div>

            {/* Server/Cloud */}
            <div className="absolute top-1/3 right-1/3 w-20 h-16 bg-cyan-100 rounded-lg mix-blend-multiply opacity-40 animate-pulse delay-500 border border-cyan-200">
              <div className="p-2 text-center">
                <div className="text-xs text-cyan-600 font-mono">Server</div>
                <div className="w-3 h-3 bg-cyan-400 rounded-full mx-auto mt-1"></div>
              </div>
            </div>
          </div>

          {/* Main Loader Content */}
          <div className="relative z-10 flex flex-col items-center justify-center space-y-8">
            {/* Animated Logo - Software House Theme */}
            <div className="relative">
              <motion.svg
                ref={logoRef}
                width="120"
                height="120"
                viewBox="0 0 120 120"
                className="drop-shadow-2xl"
              >
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#00AAFF" />
                    <stop offset="50%" stopColor="#667EEA" />
                    <stop offset="100%" stopColor="#764BA2" />
                  </linearGradient>
                </defs>
              </motion.svg>

              {/* Rotating Software Icons */}
              <div ref={particlesRef} className="absolute inset-0">
                {createSoftwareIcons()}
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
                className="text-3xl font-bold bg-linear-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                AI CLOUD
              </motion.h2>
              <motion.p
                className="text-slate-600 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                Building Digital Excellence
              </motion.p>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              className="w-64 bg-slate-200 rounded-full h-2 overflow-hidden"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 1.2 }}
            >
              <motion.div
                className="h-full bg-linear-to-r from-cyan-500 to-blue-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Percentage */}
            <motion.div
              className="text-cyan-600 font-mono text-lg font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              {Math.round(progress)}%
            </motion.div>
          </div>

          {/* Floating Software House Elements */}
          <div className="absolute bottom-10 left-10 text-slate-500 text-sm">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6 }}
            >
              • Web Development
            </motion.div>
          </div>
          <div className="absolute bottom-10 right-10 text-slate-500 text-sm">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8 }}
            >
              • Mobile Apps •
            </motion.div>
          </div>
          <div className="absolute top-10 left-10 text-slate-500 text-sm">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.0 }}
            >
              • Cloud Solutions
            </motion.div>
          </div>
          <div className="absolute top-10 right-10 text-slate-500 text-sm">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2 }}
            >
              • UI/UX Design •
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SoftwareHouseLoader;
