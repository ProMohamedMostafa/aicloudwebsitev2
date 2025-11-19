// Corrected VisualSection.tsx
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
    <div className="visual-section" onMouseMove={onMouseMove}>
      <div className="visual-container">
        <div className="w-full h-full flex items-center justify-center">
          <div className="relative">
            {/* Simplified Dashboard Preview */}
            <motion.div
              className="dashboard-preview"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: 1,
                // Reduced motion for performance
                x: mousePosition.x * 5, // Reduced from 10
                y: mousePosition.y * 5, // Reduced from 10
              }}
              transition={{ duration: 0.5 }}
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
                {/* Static Analytics Cards - removed animations */}
                <div className="analytics-grid">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="analytics-card">
                      <div className="card-label"></div>
                      <div className="card-value"></div>
                    </div>
                  ))}
                </div>

                {/* Static Chart Area - removed bar animations */}
                <div className="chart-area">
                  <div className="chart-bars">
                    {[40, 60, 45, 70, 55, 85, 65, 90].map((height, i) => (
                      <div
                        key={i}
                        className="chart-bar"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Static Activity Indicators */}
                <div className="activity-indicators">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="activity-indicator" />
                  ))}
                </div>
              </div>
            </motion.div>

           
          </div>
        </div>
      </div>
    </div>
  );
}
