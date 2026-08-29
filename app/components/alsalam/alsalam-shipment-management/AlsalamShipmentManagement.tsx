"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useI18n } from "@/app/i18n/context";
import "./alsalam-shipment-management.css";

gsap.registerPlugin(ScrollTrigger);

const FEATURE_KEYS = ["feature1", "feature2", "feature3", "feature4"] as const;

export default function AlsalamShipmentManagement() {
  const { t, dir } = useI18n();
  const isRTL = dir === "rtl";

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

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

      const imageX = isRTL ? 40 : -40;
      gsap.set(imageRef.current, { opacity: 0, x: imageX, scale: 0.97 });
      gsap.to(imageRef.current, {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: imageRef.current, start: "top 80%" },
      });

      const items = listRef.current?.querySelectorAll(".alsalam-mgmt-feature");
      if (items && items.length) {
        gsap.from(items, {
          opacity: 0,
          y: 20,
          duration: 0.5,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: listRef.current, start: "top 85%" },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [isRTL]);

  return (
    <section
      ref={sectionRef}
      className="alsalam-shipment-management w-full px-6 py-16 md:px-16 md:py-20 lg:px-24 lg:py-24"
      dir={dir}
    >
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center gap-12">
        {/* Header */}
        <div ref={headerRef} className="flex flex-col items-center gap-4 text-center">
          <span className="text-sm font-bold uppercase tracking-wide text-[#006738]">
            {t("alsalamPage.shipmentManagement.eyebrow")}
          </span>
          <h2 className="max-w-[1320px] text-[28px] font-extrabold leading-[1.2] text-[#0F172A] sm:text-3xl lg:text-[36px]">
            {t("alsalamPage.shipmentManagement.title")}
          </h2>
          <p className="max-w-[926px] text-base leading-[1.5] text-[#64748B] sm:text-lg">
            {t("alsalamPage.shipmentManagement.description")}
          </p>
        </div>

        {/* Content row */}
        <div className="flex w-full flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Dashboard mockup */}
          <div
            ref={imageRef}
            className="alsalam-mgmt-image w-full max-w-[600px] flex-none overflow-hidden rounded-xl lg:w-[600px]"
          >
            <Image
              src="/assets/images/alsalam/shipment-dashboard-mockup.png"
              alt="All Shipments dashboard preview"
              width={611}
              height={420}
              className="h-auto w-full rounded-xl object-contain"
            />
          </div>

          {/* Feature list */}
          <div ref={listRef} className="flex w-full flex-1 flex-col items-start gap-8">
            {FEATURE_KEYS.map((key) => (
              <div
                key={key}
                className="alsalam-mgmt-feature flex w-full items-start gap-3"
              >
                <span className="flex h-6 w-6 flex-none items-center justify-center rounded-[10px] bg-[#ECFDF5]">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                    <path
                      d="M1.5 5.2 3.8 7.5 8.5 2"
                      stroke="#10B981"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div className="flex flex-1 flex-col items-start gap-2">
                  <h3 className="text-lg font-bold leading-[1.3] text-[#0F172A] sm:text-xl">
                    {t(`alsalamPage.shipmentManagement.${key}.title`)}
                  </h3>
                  <p className="text-sm leading-[1.4] text-[#64748B] sm:text-base">
                    {t(`alsalamPage.shipmentManagement.${key}.description`)}
                  </p>
                </div>
              </div>
            ))}

            {/* Stats banner */}
            <div className="alsalam-mgmt-stats flex w-full items-center rounded-lg bg-[#EDFAF2] px-4 py-3.5">
              <p className="text-[13px] leading-[1.3] text-[#006638]">
                {t("alsalamPage.shipmentManagement.statsBanner")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
