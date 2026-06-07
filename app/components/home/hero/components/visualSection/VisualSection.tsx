"use client";

import { useI18n } from "@/app/i18n/context";

export default function VisualSection() {
  const { dir } = useI18n();
  const isRTL = dir === "rtl";

  return (
    <div className="visual-section hero-fade-in" style={{ "--delay": "200ms" } as React.CSSProperties}>
      <div className="visual-container">
        <div className="w-full h-full flex items-center justify-center">
          {/* Wrapper that flips horizontally in RTL so background perspective mirrors */}
          <div className={`visual-scene ${isRTL ? "visual-scene--rtl" : ""}`}>
            {/* Dashboard floats via CSS keyframe */}
            <div className="dashboard-float">
              <div className="dashboard-preview dashboard-glow">
                {/* Dashboard Header */}
                <div className="dashboard-header">
                  <div className="window-controls">
                    <div className="control-dot control-red" />
                    <div className="control-dot control-yellow" />
                    <div className="control-dot control-green" />
                  </div>
                  <div className="address-bar">
                    <div className="address-icon" />
                    <div className="address-text" />
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="dashboard-content">
                  <div className="analytics-grid">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="analytics-card card-pulse"
                        style={{ animationDelay: `${i * 0.3}s` }}
                      >
                        <div className="card-label" />
                        <div className="card-value" />
                      </div>
                    ))}
                  </div>

                  <div className="chart-area">
                    <div className="chart-bars">
                      {[40, 60, 45, 70, 55, 85, 65, 90].map((height, i) => (
                        <div
                          key={i}
                          className="chart-bar chart-bar-grow"
                          style={{
                            "--bar-height": `${height}%`,
                            animationDelay: `${0.5 + i * 0.1}s`,
                          } as React.CSSProperties}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="activity-indicators">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="activity-indicator activity-sweep"
                        style={{ animationDelay: `${i * 0.7}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Cards — positions swap in RTL via CSS */}
            <div className={`floating-card ${isRTL ? "card-left" : "card-right"} card-float-right`}>
              <div className="card-header">
                <div className="card-icon">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <div className="card-icon-bg" />
              </div>
              <div className="card-value-large value-pulse"></div>
              <div className="card-indicator indicator-white" />
            </div>

            <div className={`floating-card ${isRTL ? "card-right" : "card-left"} card-float-left`}>
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
                <div className="card-icon-bg" />
              </div>
              <div className="card-value-medium opacity-pulse">Secure</div>
              <div className="card-indicator indicator-green" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
