// BackgroundElements.tsx
"use client";

import { motion } from "framer-motion";

interface BackgroundElementsProps {
  mousePosition: { x: number; y: number };
}

export default function BackgroundElements({
  mousePosition,
}: BackgroundElementsProps) {
  return (
    <>
      {/* Mouse-following gradient */}
      <div
        className="mouse-gradient"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${
            mousePosition.y * 100
          }%, rgba(59, 130, 246, 0.8) 0%, rgba(37, 99, 235, 0.4) 30%, transparent 70%)`,
        }}
      />

      {/* Animated background elements with mouse interaction */}
      <div className="animated-background">
        <motion.div
          className="circle-1"
          animate={{
            x: mousePosition.x * 20 - 10,
            y: mousePosition.y * 20 - 10,
            scale: 1 + mousePosition.x * 0.1,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        />

        <motion.div
          className="circle-2"
          animate={{
            x: -mousePosition.x * 30 + 15,
            y: mousePosition.y * 25 - 12.5,
            scale: 1 + mousePosition.y * 0.1,
          }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        />

        <motion.div
          className="circle-3"
          animate={{
            x: mousePosition.x * 40 - 20,
            y: -mousePosition.y * 35 + 17.5,
            scale: 0.9 + (mousePosition.x + mousePosition.y) * 0.1,
          }}
          transition={{ type: "spring", stiffness: 60, damping: 20 }}
        />

        {/* Additional floating elements that react to mouse */}
        <motion.div
          className="circle-4"
          animate={{
            x: mousePosition.x * 50 - 25,
            y: -mousePosition.y * 40 + 20,
            rotate: mousePosition.x * 20,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 15 }}
        />

        <motion.div
          className="circle-5"
          animate={{
            x: -mousePosition.x * 35 + 17.5,
            y: mousePosition.y * 45 - 22.5,
            rotate: -mousePosition.y * 25,
          }}
          transition={{ type: "spring", stiffness: 45, damping: 15 }}
        />
      </div>

      {/* Grid pattern overlay with mouse interaction */}
      <motion.div
        className="grid-overlay"
        animate={{
          backgroundPosition: `${mousePosition.x * 20}px ${
            mousePosition.y * 20
          }px`,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
      >
        <div className="grid-pattern" />
      </motion.div>
    </>
  );
}
