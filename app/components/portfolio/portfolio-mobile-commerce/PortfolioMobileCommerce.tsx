"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import "./PortfolioMobileCommerce.css";

const SCREENS = [
  { src: "/assets/images/home.webp",           label: "Home"        },
  { src: "/assets/images/products.webp",       label: "Products"    },
  { src: "/assets/images/my-cart.webp",        label: "My Cart"     },
  { src: "/assets/images/my-favourite.webp",   label: "Favourites"  },
  { src: "/assets/images/my-favourite-2.webp", label: "Favourites 2"},
  { src: "/assets/images/wallet-1.webp",       label: "Wallet"      },
  { src: "/assets/images/wallet-2.webp",       label: "Wallet 2"    },
  { src: "/assets/images/order-1.webp",        label: "Orders"      },
  { src: "/assets/images/order-2.webp",        label: "Orders 2"    },
];

const FRAME = "/assets/images/frame.webp";
const TOTAL  = SCREENS.length;

function wrap(i: number) {
  return ((i % TOTAL) + TOTAL) % TOTAL;
}

// ── Slot definitions ────────────────────────────────────────────────────────
//
// ROOT CAUSE OF LAG:
// Animating CSS `width` and `height` triggers Layout → Paint → Composite
// on every animation frame — the most expensive pipeline possible.
//
// FIX:
// Every card is rendered at one fixed size (BASE_W × BASE_H).
// Visual resizing is done with transform: scale() which is ONLY compositor.
// No layout reflow. No paint. Pure GPU. Zero jank.
//
// scale values = target_width / BASE_W  (e.g. 100/210 ≈ 0.476)

const BASE_W = 210; // px — all cards share this fixed rendered size
const BASE_H = 420; // px

const SLOTS = [
  { tx: -310, scale: 0.476, opacity: 0.40, zIndex: 0 },
  { tx: -200, scale: 0.714, opacity: 0.68, zIndex: 1 },
  { tx:     0, scale: 1.000, opacity: 1.00, zIndex: 2 },
  { tx:   200, scale: 0.714, opacity: 0.68, zIndex: 1 },
  { tx:   310, scale: 0.476, opacity: 0.40, zIndex: 0 },
] as const;

const OFF_LEFT  = { tx: -520, scale: 0.38, opacity: 0, zIndex: -1 } as const;
const OFF_RIGHT = { tx:  520, scale: 0.38, opacity: 0, zIndex: -1 } as const;

type Slot = (typeof SLOTS)[number] | typeof OFF_LEFT | typeof OFF_RIGHT;

// Only transform + opacity are animated — both compositor-only properties.
// width/height are fixed constants → the browser never re-runs layout.
function cardStyle(slot: Slot): React.CSSProperties {
  return {
    transform: `translateX(calc(-50% + ${slot.tx}px)) translateY(-50%) scale(${slot.scale})`,
    opacity:   slot.opacity,
    zIndex:    slot.zIndex,
    width:    `${BASE_W}px`,
    height:   `${BASE_H}px`,
  };
}

export default function PortfolioMobileCommerce() {
  const [center, setCenter] = useState(0);
  const lockRef = useRef(false);

  // ── Eager GPU decode ──────────────────────────────────────────────────────
  // HTMLImageElement.decode() forces the browser to decompress and upload
  // each image to the GPU *before* any user interaction occurs.
  // Without this, the browser decodes lazily on the frame the image first
  // becomes visible → causes the 1-frame freeze/lag you were seeing.
  useEffect(() => {
    [...SCREENS.map((s) => s.src), FRAME].forEach((src) => {
      const img = new Image();
      img.src = src;
      img.decode().catch(() => {}); // fire-and-forget; errors are benign
    });
  }, []);

  const navigate = useCallback((dir: "left" | "right") => {
    if (lockRef.current) return;
    lockRef.current = true;
    setCenter((prev) => wrap(dir === "right" ? prev + 1 : prev - 1));
    setTimeout(() => { lockRef.current = false; }, 520);
  }, []);

  return (
    <section className="portfolio-mobile-commerce">
      {/* Preload sink keeps images in the HTTP/memory cache */}
      <div aria-hidden="true" className="preload-sink">
        {SCREENS.map((s) => (
          <img key={s.src} src={s.src} alt="" />
        ))}
        <img src={FRAME} alt="" />
      </div>

      <div className="mobile-commerce-inner">
        {/* ── Header ── */}
        <div className="mobile-commerce-header">
          <h2 className="mobile-commerce-title">
            Modern Mobile Commerce Experience
          </h2>
          <p className="mobile-commerce-subtitle">
            From product discovery to secure checkout, our mobile applications
            deliver fast, scalable, and user-focused shopping experiences.
          </p>
        </div>

        {/* ── Mockup Display ── */}
        <div className="mobile-commerce-mockups">
          <button
            className="mockup-arrow mockup-arrow--left"
            aria-label="Previous"
            onClick={() => navigate("left")}
          >
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="23" stroke="#000" strokeWidth="2" />
              <polyline
                points="28,16 20,24 28,32"
                stroke="#000" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" fill="none"
              />
            </svg>
          </button>

          <div className="mockup-stage">
            {SCREENS.map((screen, screenIdx) => {
              let offset = screenIdx - center;
              if (offset >  TOTAL / 2) offset -= TOTAL;
              if (offset < -TOTAL / 2) offset += TOTAL;

              const inView = offset >= -2 && offset <= 2;
              const slot: Slot = inView
                ? SLOTS[offset + 2]
                : offset > 0 ? OFF_RIGHT : OFF_LEFT;

              const isCenter = offset === 0;

              return (
                <div
                  key={screenIdx}
                  className={`mockup-card${isCenter ? " mockup-card--center" : ""}`}
                  style={cardStyle(slot)}
                >
                  <img
                    src={screen.src}
                    alt={screen.label}
                    className="mockup-card__img"
                    draggable={false}
                    // Boost LCP for the initially-visible center image
                    {...(screenIdx === 0 ? { fetchPriority: "high" } : {})}
                  />
                </div>
              );
            })}

            <img
              src={FRAME}
              alt=""
              className="mockup-frame-overlay"
              draggable={false}
              aria-hidden="true"
            />
          </div>

          <button
            className="mockup-arrow mockup-arrow--right"
            aria-label="Next"
            onClick={() => navigate("right")}
          >
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="23" stroke="#000" strokeWidth="2" />
              <polyline
                points="20,16 28,24 20,32"
                stroke="#000" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" fill="none"
              />
            </svg>
          </button>
        </div>

        {/* ── Dots ── */}
        <div className="mockup-dots" aria-label="Carousel position">
          {SCREENS.map((_, i) => (
            <button
              key={i}
              className={`mockup-dot${i === center ? " mockup-dot--active" : ""}`}
              aria-label={`Go to screen ${i + 1}`}
              onClick={() => { if (i !== center) navigate(i > center ? "right" : "left"); }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}