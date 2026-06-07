"use client";

import "./PortfolioWhyUs.css";
import { useI18n } from "@/app/i18n/context";

const scalableIcon = (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="6" rx="1" stroke="#0061B7" strokeWidth="2" fill="none" /><rect x="2" y="11" width="20" height="6" rx="1" stroke="#0061B7" strokeWidth="2" fill="none" /><line x1="6" y1="5" x2="6" y2="5" stroke="#0061B7" strokeWidth="2.5" strokeLinecap="round" /><line x1="6" y1="14" x2="6" y2="14" stroke="#0061B7" strokeWidth="2.5" strokeLinecap="round" /></svg>);
const fastIcon = (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#0061B7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>);
const uxIcon = (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="2" y="3" width="20" height="18" rx="2" stroke="#0061B7" strokeWidth="2" fill="none" /><circle cx="8" cy="10" r="2" stroke="#0061B7" strokeWidth="2" fill="none" /><path d="M2 19l5-5 4 4 4-5 5 6" stroke="#0061B7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>);
const secureIcon = (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.5C16.5 22.15 20 17.25 20 12V6L12 2z" stroke="#0061B7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" /><path d="M9 12l2 2 4-4" stroke="#0061B7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>);
const multiplatformIcon = (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="2" y="3" width="20" height="14" rx="2" stroke="#0061B7" strokeWidth="2" fill="none" /><line x1="8" y1="21" x2="16" y2="21" stroke="#0061B7" strokeWidth="2" strokeLinecap="round" /><line x1="12" y1="17" x2="12" y2="21" stroke="#0061B7" strokeWidth="2" strokeLinecap="round" /></svg>);
const customIcon = (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="#0061B7" strokeWidth="2" fill="none" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" stroke="#0061B7" strokeWidth="2" fill="none" /></svg>);

export default function PortfolioWhyUs() {
  const { t } = useI18n();

  const reasons = [
    { key: "scalable", icon: scalableIcon, titleKey: "portfolio.whyUs.scalable", descKey: "portfolio.whyUs.scalableDesc" },
    { key: "fast", icon: fastIcon, titleKey: "portfolio.whyUs.fast", descKey: "portfolio.whyUs.fastDesc" },
    { key: "ux", icon: uxIcon, titleKey: "portfolio.whyUs.ux", descKey: "portfolio.whyUs.uxDesc" },
    { key: "secure", icon: secureIcon, titleKey: "portfolio.whyUs.secure", descKey: "portfolio.whyUs.secureDesc" },
    { key: "support", icon: multiplatformIcon, titleKey: "portfolio.whyUs.support", descKey: "portfolio.whyUs.supportDesc" },
    { key: "integrated", icon: customIcon, titleKey: "portfolio.whyUs.integrated", descKey: "portfolio.whyUs.integratedDesc" },
  ];

  return (
    <section className="portfolio-why-us">
      <div className="why-us-inner">
        <div className="why-us-header">
          <div className="why-us-badge">{t("portfolio.whyUs.title")}</div>
          <h2 className="why-us-title">{t("portfolio.whyUs.title")}</h2>
          <p className="why-us-subtitle">{t("portfolio.whyUs.subtitle")}</p>
        </div>

        <div className="why-us-grid">
          {reasons.map((reason) => (
            <div className="why-us-card" key={reason.key}>
              <div className="why-us-card-gradient" />
              <div className="why-us-icon-wrap">
                <div className="why-us-icon-bg">{reason.icon}</div>
              </div>
              <h3 className="why-us-card-title">{t(reason.titleKey)}</h3>
              <p className="why-us-card-desc">{t(reason.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
