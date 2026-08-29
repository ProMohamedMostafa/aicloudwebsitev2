"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useI18n } from "@/app/i18n/context";
import "./alsalam-final-cta.css";

gsap.registerPlugin(ScrollTrigger);

export default function AlsalamFinalCTA() {
  const { t, dir } = useI18n();

  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      gsap.from(contentRef.current?.children ?? [], {
        opacity: 0,
        y: 24,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="alsalam-final-cta w-full px-6 py-20 md:px-16 lg:px-20 lg:py-24"
      dir={dir}
    >
      <div
        ref={contentRef}
        className="mx-auto flex w-full max-w-[1352px] flex-col items-center gap-8 text-center"
      >
        <div className="flex flex-col items-center gap-4">
          <h2 className="max-w-[1352px] text-[28px] font-bold leading-[1.2] text-white sm:text-3xl lg:text-[40px]">
            {t("alsalamPage.finalCta.title")}
          </h2>
          <p className="max-w-[900px] text-sm leading-[1.6] text-[#E7FBF2] sm:text-base">
            {t("alsalamPage.finalCta.description")}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex h-[41px] items-center justify-center rounded-lg bg-white px-7 text-sm font-semibold text-[#006738] transition-opacity hover:opacity-90"
          >
            {t("alsalamPage.finalCta.primaryCta")}
          </a>
          <a
            href="#contact"
            className="inline-flex h-10 items-center justify-center rounded-lg border border-white px-6 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            {t("alsalamPage.finalCta.secondaryCta")}
          </a>
        </div>
      </div>
    </section>
  );
}
