"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useI18n } from "@/app/i18n/context";
import "./alsalam-features.css";

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  {
    key: "feature1",
    image: "/assets/images/alsalam/feature-companies.png",
    imageAlt: "Companies management screen",
    width: 667,
    height: 504,
    reverse: false, // image on right, text on left
  },
  {
    key: "feature2",
    image: "/assets/images/alsalam/feature-product-details.png",
    imageAlt: "Product details and registration requirements screen",
    width: 710,
    height: 504,
    reverse: true, // image on left, text on right
  },
  {
    key: "feature3",
    image: "/assets/images/alsalam/feature-products-list.png",
    imageAlt: "Products list screen",
    width: 710,
    height: 504,
    reverse: false,
  },
  {
    key: "feature4",
    image: "/assets/images/alsalam/feature-roles-permissions.png",
    imageAlt: "Roles and permissions screen",
    width: 710,
    height: 504,
    reverse: true,
  },
] as const;

const CHECK_COUNTS: Record<(typeof FEATURES)[number]["key"], number> = {
  feature1: 3,
  feature2: 3,
  feature3: 3,
  feature4: 3,
};

export default function AlsalamFeatures() {
  const { t, dir } = useI18n();
  const isRTL = dir === "rtl";

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const rowsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      gsap.from(headerRef.current, {
        opacity: 0,
        y: 24,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });

      const rows = rowsRef.current?.querySelectorAll(".alsalam-feature-row");
      rows?.forEach((row) => {
        const textEl = row.querySelector(".alsalam-feature-text");
        const imageEl = row.querySelector(".alsalam-feature-image");
        const rowReversed = row.getAttribute("data-reverse") === "true";

        // Text slides from the side it visually sits on, image from the other
        const textFromX = rowReversed ? 40 : -40;
        const imageFromX = rowReversed ? -40 : 40;

        gsap.set(textEl, { opacity: 0, x: textFromX });
        gsap.set(imageEl, { opacity: 0, x: imageFromX, scale: 0.97 });

        gsap.to(textEl, {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: row, start: "top 80%" },
        });
        gsap.to(imageEl, {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: row, start: "top 80%" },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isRTL]);

  return (
    <section
      ref={sectionRef}
      className="alsalam-features w-full bg-white px-6 py-16 md:px-12 md:py-20 lg:px-20"
      dir={dir}
    >
      <div className="mx-auto flex w-full max-w-[1352px] flex-col items-center gap-20 lg:gap-28">
        {/* Header */}
        <div ref={headerRef} className="flex flex-col items-center gap-4 text-center">
          <h2 className="max-w-[1248px] text-[28px] font-extrabold leading-[1.2] text-[#0F172A] sm:text-3xl lg:text-[36px]">
            {t("alsalamPage.features.title")}
          </h2>
          <p className="max-w-[926px] text-base leading-[1.5] text-[#64748B] sm:text-lg">
            {t("alsalamPage.features.description")}
          </p>
        </div>

        {/* Rows */}
        <div ref={rowsRef} className="flex w-full flex-col gap-20 lg:gap-28">
          {FEATURES.map((feature) => (
            <div
              key={feature.key}
              data-reverse={feature.reverse}
              className={`alsalam-feature-row flex w-full flex-col items-center gap-10 lg:gap-20 ${
                feature.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              {/* Text column */}
              <div className="alsalam-feature-text flex w-full flex-col items-start gap-7 lg:w-1/2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#006738]/25 bg-[#E7FBF2] px-3.5 py-1.5">
                  <span className="h-1.5 w-1.5 flex-none rounded-full bg-[#006738]" />
                  <span className="text-[11px] font-bold uppercase tracking-[1.6px] text-[#006738]">
                    {t(`alsalamPage.features.${feature.key}.badge`)}
                  </span>
                </span>

                <h3 className="text-[26px] font-bold leading-[1.15] text-[#0F172A] sm:text-3xl lg:text-[32px]">
                  {t(`alsalamPage.features.${feature.key}.title`)}
                </h3>

                <p className="text-base leading-[1.7] text-[#64748B]">
                  {t(`alsalamPage.features.${feature.key}.description`)}
                </p>

                <ul className="flex w-full flex-col items-start gap-3.5">
                  {Array.from({ length: CHECK_COUNTS[feature.key] }).map(
                    (_, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2.5 text-sm font-medium leading-[1.2] text-[#1E293B]"
                      >
                        <span className="flex h-[22px] w-[22px] flex-none items-center justify-center rounded-full bg-[#E7FBF2]">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              d="M2 6.2 4.6 9 10 3"
                              stroke="#006738"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        {t(`alsalamPage.features.${feature.key}.check${i + 1}`)}
                      </li>
                    ),
                  )}
                </ul>
              </div>

              {/* Image column */}
              <div className="alsalam-feature-image flex w-full justify-center lg:w-1/2">
                <div className="alsalam-feature-image-frame w-full max-w-[646px] overflow-hidden rounded-[20px] p-2.5">
                  <Image
                    src={feature.image}
                    alt={feature.imageAlt}
                    width={feature.width}
                    height={feature.height}
                    className="h-auto w-full rounded-2xl object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
