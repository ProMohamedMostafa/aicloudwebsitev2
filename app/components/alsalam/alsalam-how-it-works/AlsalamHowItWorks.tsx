"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useI18n } from "@/app/i18n/context";
import "./alsalam-how-it-works.css";

gsap.registerPlugin(ScrollTrigger);

const STEP_KEYS = ["step1", "step2", "step3"] as const;

export default function AlsalamHowItWorks() {
  const { t, dir } = useI18n();

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

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
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      const stepItems =
        stepsRef.current?.querySelectorAll(".alsalam-step");
      if (stepItems && stepItems.length) {
        gsap.from(stepItems, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: stepsRef.current,
            start: "top 85%",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="alsalam-how-it-works w-full bg-white px-6 py-16 md:px-12 md:py-20 lg:px-20"
      dir={dir}
    >
      <div className="mx-auto flex w-full max-w-[1352px] flex-col items-center gap-14">
        {/* Header */}
        <div
          ref={headerRef}
          className="flex flex-col items-center gap-3 text-center"
        >
          <h2 className="max-w-[689px] text-2xl font-bold leading-[1.15] text-[#0F172A] sm:text-3xl lg:text-[32px]">
            {t("alsalamPage.howItWorks.title")}
          </h2>
          <p className="max-w-[689px] text-sm font-medium leading-[1.7] text-[#006738]">
            {t("alsalamPage.howItWorks.description")}
          </p>
        </div>

        {/* Steps */}
        <div ref={stepsRef} className="relative w-full">
          {/* Dashed connector line */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-9 hidden border-t-2 border-dashed border-[#E5E7EB] md:block"
            aria-hidden="true"
          />

          <div className="relative z-[1] flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-between md:gap-6">
            {STEP_KEYS.map((key, index) => (
              <div
                key={key}
                className="alsalam-step flex w-full flex-1 flex-col items-center gap-4 text-center"
              >
                <div className="flex h-[72px] w-[72px] flex-none items-center justify-center rounded-full bg-[#006738]">
                  <span className="font-[Outfit,var(--font-geist-sans),sans-serif] text-[28px] font-extrabold leading-none text-white">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="max-w-[397px] text-lg font-semibold leading-[1.3] text-[#0F172A] sm:text-xl">
                  {t(`alsalamPage.howItWorks.${key}.title`)}
                </h3>
                <p className="max-w-[434px] text-sm leading-[1.6] text-[#4B5563]">
                  {t(`alsalamPage.howItWorks.${key}.body`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
