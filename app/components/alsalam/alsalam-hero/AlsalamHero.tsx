"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useI18n } from "@/app/i18n/context";
import "./alsalam-hero.css";

export default function AlsalamHero() {
  const { t, dir } = useI18n();
  const isRTL = dir === "rtl";

  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const contentX = isRTL ? 50 : -50;
      const imageX = isRTL ? -50 : 50;

      gsap.set([titleRef.current, descRef.current, ctaRef.current, taglineRef.current], {
        opacity: 0,
        x: contentX,
      });
      gsap.set(mockupRef.current, { opacity: 0, x: imageX, scale: 0.96 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.to(titleRef.current, { opacity: 1, x: 0, duration: 0.75 })
        .to(descRef.current, { opacity: 1, x: 0, duration: 0.6 }, "-=0.45")
        .to(ctaRef.current, { opacity: 1, x: 0, duration: 0.5 }, "-=0.35")
        .to(taglineRef.current, { opacity: 1, x: 0, duration: 0.5 }, "-=0.3")
        .to(mockupRef.current, { opacity: 1, x: 0, scale: 1, duration: 0.8 }, "-=0.7");

      // Gentle floating loop for the whole mockup group
      gsap.to(mockupRef.current, {
        y: -12,
        duration: 3.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isRTL]);

  return (
    <section
      ref={sectionRef}
      className="alsalam-hero relative w-full bg-white overflow-hidden"
      dir={dir}
    >
      <div className="mx-auto flex w-full max-w-[1512px] flex-col-reverse items-center gap-14 px-6 pt-16 pb-10 md:flex-row md:gap-16 md:px-12 md:pt-20 md:pb-12 lg:px-20 lg:pt-24 lg:pb-14 xl:gap-24">
        {/* Left: text content */}
        <div className="flex w-full flex-col items-start gap-10 md:w-1/2">
          <div className="flex flex-col items-start gap-6">
            <h1
              ref={titleRef}
              className="max-w-[637px] text-[32px] font-bold leading-[1.15] text-[#0F172A] sm:text-[36px] lg:text-[40px]"
            >
              {t("alsalamPage.hero.title")}
            </h1>
            <p
              ref={descRef}
              className="max-w-[637px] text-base leading-[1.6] text-[#63686E] sm:text-lg"
            >
              {t("alsalamPage.hero.description")}
            </p>
          </div>

          <div ref={ctaRef} className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex h-10 items-center justify-center rounded-lg bg-[#006738] px-5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              {t("alsalamPage.hero.primaryCta")}
            </a>
            <a
              href="#contact"
              className="inline-flex h-10 items-center justify-center rounded-lg border border-[#006738] px-5 text-sm font-semibold text-[#006738] transition-colors hover:bg-[#006738]/5"
            >
              {t("alsalamPage.hero.secondaryCta")}
            </a>
            <span
              className="flex h-[35px] w-[35px] flex-none items-center justify-center"
              aria-hidden="true"
            >
              <svg viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="alsalamBoatGradient" x1="17.5" y1="0" x2="17.5" y2="35" gradientUnits="userSpaceOnUse">
                    <stop offset="0.2158" stopColor="#1A56DB" />
                    <stop offset="0.5772" stopColor="#F59E0B" />
                    <stop offset="0.8106" stopColor="#00713E" />
                  </linearGradient>
                </defs>
                <path
                  d="M4 24l3-9h21l3 9c0 3.9-3.13 6-7 6H11c-3.87 0-7-2.1-7-6z"
                  fill="url(#alsalamBoatGradient)"
                />
                <path
                  d="M14 15V6h7v9"
                  stroke="url(#alsalamBoatGradient)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>

          <p ref={taglineRef} className="text-[11px] font-medium leading-[13px] text-[#006738]">
            {t("alsalamPage.hero.tagline")}
          </p>
        </div>

        {/* Right: mockup with floating cards */}
        <div className="relative flex w-full items-center justify-center pt-14 md:w-1/2 md:pt-16 lg:pt-10">
          <div
            ref={mockupRef}
            className="relative aspect-[620/520] w-full max-w-[620px]"
          >
            {/* Main dashboard mockup */}
            <div className="absolute left-1/2 top-1/2 w-[85%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[14px] shadow-[0_0_11px_2px_rgba(0,103,56,0.3)]">
              <Image
                src="/assets/images/alsalam/main-img.png"
                alt="Alsalam International dashboard preview"
                width={576}
                height={480}
                priority
                className="h-auto w-full object-contain"
              />
            </div>

            {/* Top-right floating card */}
            <div className="absolute right-[2%] top-[-8%] w-[34%] max-w-[210px] drop-shadow-[0_0_11px_#B1FFDB]">
              <Image
                src="/assets/images/alsalam/top-right.png"
                alt=""
                width={210}
                height={159}
                aria-hidden="true"
                className="h-auto w-full -rotate-[20deg] object-contain"
              />
            </div>

            {/* Top-left floating card */}
            <div className="absolute left-[10%] top-[-4%] w-[32%] max-w-[200px] rounded-md drop-shadow-[0_0_11px_#B1FFDB]">
              <Image
                src="/assets/images/alsalam/top-left.png"
                alt=""
                width={211}
                height={134}
                aria-hidden="true"
                className="h-auto w-full rotate-[8deg] object-contain"
              />
            </div>

            {/* Bottom-left floating card */}
            <div className="absolute bottom-[2%] left-[-10%] w-[30%] max-w-[175px] rounded-[10px] drop-shadow-[0_0_11px_rgba(123,255,195,0.9)]">
              <Image
                src="/assets/images/alsalam/bottom-left.png"
                alt=""
                width={220}
                height={183}
                aria-hidden="true"
                className="h-auto w-full -rotate-[15deg] object-contain"
              />
            </div>

            {/* Center-right floating strip */}
            <div className="absolute right-[-5%] top-[42%] w-[42%] max-w-[240px] rounded-sm drop-shadow-[0_0_5px_#B1FFDB]">
              <Image
                src="/assets/images/alsalam/center-right.png"
                alt=""
                width={253}
                height={49}
                aria-hidden="true"
                className="h-auto w-full rotate-[4deg] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
