"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useI18n } from "@/app/i18n/context";
import "./alsalam-challenges.css";

gsap.registerPlugin(ScrollTrigger);

type Accent = "green" | "blue" | "amber";

const CARDS: {
  key: string;
  accent: Accent;
  rotate: number;
  icon: React.ReactNode;
}[] = [
  {
    key: "card1",
    accent: "green",
    rotate: -2,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
        <path d="M9 3H5a2 2 0 0 0-2 2v4M15 3h4a2 2 0 0 1 2 2v4M9 21H5a2 2 0 0 1-2-2v-4M15 21h4a2 2 0 0 0 2-2v-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" />
      </svg>
    ),
  },
  {
    key: "card2",
    accent: "blue",
    rotate: 3,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" />
        <path d="M14 2v6h6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" />
        <path d="M12 13a1.5 1.5 0 1 1 1.7 1.49c-.7.1-1.2.66-1.2 1.36V16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" />
        <circle cx="12" cy="18.5" r="0.5" fill="currentColor" stroke="currentColor" />
      </svg>
    ),
  },
  {
    key: "card3",
    accent: "amber",
    rotate: -1,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
        <circle cx="10" cy="8" r="4" strokeWidth="2" stroke="currentColor" />
        <path d="M3 21c0-4 3.5-6.5 7-6.5" strokeWidth="2" strokeLinecap="round" stroke="currentColor" />
        <path d="M17 14l4 4M21 14l-4 4" strokeWidth="2" strokeLinecap="round" stroke="currentColor" />
      </svg>
    ),
  },
  {
    key: "card4",
    accent: "green",
    rotate: 2,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
        <circle cx="12" cy="13" r="8" strokeWidth="2" stroke="currentColor" />
        <path d="M12 9v4l2.5 2.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" />
        <path d="M9 3h6M12 6v3" strokeWidth="2" strokeLinecap="round" stroke="currentColor" />
      </svg>
    ),
  },
];

export default function AlsalamChallenges() {
  const { t, dir } = useI18n();

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

      const cardEls = cardsRef.current?.querySelectorAll(".alsalam-challenge-anim");
      if (cardEls && cardEls.length) {
        gsap.from(cardEls, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: cardsRef.current, start: "top 85%" },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="alsalam-challenges w-full bg-white px-6 py-16 md:px-12 md:py-20 lg:px-20"
      dir={dir}
    >
      <div className="mx-auto flex w-full max-w-[1267px] flex-col items-center gap-14">
        {/* Header */}
        <div ref={headerRef} className="flex flex-col items-center gap-4 text-center">
          <h2 className="max-w-[778px] text-2xl font-bold leading-[1.1] text-[#0F172A] sm:text-3xl lg:text-[32px]">
            {t("alsalamPage.challenges.title")}
          </h2>
          <p className="max-w-[545px] text-base leading-[1.4] text-[#63686E] sm:text-lg">
            {t("alsalamPage.challenges.description")}
          </p>
        </div>

        {/* Cards */}
        <div
          ref={cardsRef}
          className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4"
        >
          {CARDS.map((card, index) => (
            <div
              key={card.key}
              className={`alsalam-challenge-card alsalam-challenge-card--${card.accent} group relative flex h-auto min-h-[240px] w-full flex-col items-start overflow-hidden rounded-xl border-[1.5px] border-dashed bg-white shadow-[0_10px_18px_-8px_rgba(15,23,42,0.05)] xl:h-[298px]`}
              style={{ transform: `rotate(${card.rotate}deg)` }}
            >
              {/* Animated wrapper: GSAP only ever touches this element's
                  opacity/position, never the outer card's rotate transform */}
              <div className="alsalam-challenge-anim relative flex h-full w-full flex-col items-start gap-4 p-6 sm:gap-5 sm:p-7 xl:p-8">
                {/* Fill layer that rises from bottom on hover */}
                <span className="alsalam-challenge-fill absolute inset-0 z-0" aria-hidden="true" />

                <div className="relative z-10 flex h-full w-full flex-col items-start gap-5">
                  <div className="alsalam-challenge-icon flex h-12 w-12 flex-none items-center justify-center rounded-xl">
                    {card.icon}
                  </div>

                  <div className="flex flex-1 flex-col items-start gap-2">
                    <h3 className="alsalam-challenge-title text-lg font-semibold leading-[1.3] text-[#0F172A]">
                      {t(`alsalamPage.challenges.${card.key}.title`)}
                    </h3>
                    <p className="alsalam-challenge-body text-sm leading-[1.5] text-[#64748B]">
                      {t(`alsalamPage.challenges.${card.key}.body`)}
                    </p>
                  </div>

                  <div className="alsalam-challenge-bottom flex w-full flex-col items-start gap-3 pt-2">
                    <div className="alsalam-challenge-line h-px w-full" />
                    <span className="alsalam-challenge-number self-end text-xs font-semibold leading-4 text-[#94A3B8]">
                      0{index + 1}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
