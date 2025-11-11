// VisualSection.tsx
"use client";

import { motion } from "framer-motion";

interface VisualSectionProps {
  mousePosition: { x: number; y: number };
  onMouseMove?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export default function VisualSection({
  mousePosition,
  onMouseMove,
}: VisualSectionProps) {
  return (
    <motion.div
      className="visual-section"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      onMouseMove={onMouseMove}
    >
      <div className="visual-container">
        <div className="w-full h-full flex items-center justify-center">
          <motion.div
            className="relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            {/* Dashboard/Platform Preview */}
            <motion.div
              className="relative"
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Main Dashboard */}
              <motion.div
                className="dashboard-preview"
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(59, 130, 246, 0.3)",
                    "0 0 30px rgba(59, 130, 246, 0.6)",
                    "0 0 0px rgba(59, 130, 246, 0.3)",
                  ],
                  x: mousePosition.x * 10,
                  y: mousePosition.y * 10,
                  rotateY: mousePosition.x * 5,
                  rotateX: -mousePosition.y * 5,
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                {/* Dashboard Header */}
                <div className="dashboard-header">
                  <div className="window-controls">
                    <div className="control-dot control-red"></div>
                    <div className="control-dot control-yellow"></div>
                    <div className="control-dot control-green"></div>
                  </div>
                  <div className="address-bar">
                    <div className="address-icon"></div>
                    <div className="address-text"></div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="dashboard-content">
                  {/* Analytics Cards */}
                  <div className="analytics-grid">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="analytics-card"
                        animate={{
                          opacity: [0.7, 1, 0.7],
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      >
                        <div className="card-label"></div>
                        <div className="card-value"></div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Chart Area */}
                  <div className="chart-area">
                    <div className="chart-bars">
                      {[40, 60, 45, 70, 55, 85, 65, 90].map((height, i) => (
                        <motion.div
                          key={i}
                          className="chart-bar"
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{
                            duration: 1,
                            delay: 0.5 + i * 0.1,
                            repeat: Infinity,
                            repeatDelay: 2,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Activity Indicators */}
                  <div className="activity-indicators">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="activity-indicator"
                        animate={{
                          scaleX: [0, 1, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.7,
                        }}
                        style={{ transformOrigin: "left" }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating Cards */}
            <motion.div
              className="floating-card card-right"
              animate={{
                y: [0, 8, 0],
                rotateZ: [-2, 2, -2],
                x: mousePosition.x * 5,
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="card-header">
                <div className="card-icon">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <div className="card-icon-bg"></div>
              </div>
              <motion.div
                className="card-value-large"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                +127%
              </motion.div>
              <div className="card-indicator indicator-white"></div>
            </motion.div>

            <motion.div
              className="floating-card card-left"
              animate={{
                y: [0, -8, 0],
                rotateZ: [2, -2, 2],
                x: -mousePosition.x * 5,
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="card-header">
                <div className="card-icon">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="card-icon-bg"></div>
              </div>
              <motion.div
                className="card-value-medium"
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              >
                Secure
              </motion.div>
              <div className="card-indicator indicator-green"></div>
            </motion.div>

            {/* Data Flow Particles */}
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={i}
                className="data-particle"
                animate={{
                  x: [0, 60 * Math.cos((i * Math.PI) / 3), 0],
                  y: [0, 60 * Math.sin((i * Math.PI) / 3), 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
