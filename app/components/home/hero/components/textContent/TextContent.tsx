"use client";

import ContactUsButton from "@/app/components/shared/components/ContactUsButton/ContactUsButton";
import { useI18n } from "@/app/i18n/context";

export default function TextContent() {
  const { t } = useI18n();

  return (
    <div className="text-content">
      <h1 className="title hero-fade-in" style={{ "--delay": "0ms" } as React.CSSProperties}>
        {t("hero.title")}{" "}
        <span className="gradient-text">{t("hero.titleHighlight")}</span>
      </h1>

      <p className="subtitle hero-fade-in" style={{ "--delay": "150ms" } as React.CSSProperties}>
        {t("hero.subtitle")}
      </p>

      <div className="cta-container hero-fade-in" style={{ "--delay": "300ms" } as React.CSSProperties}>
        <ContactUsButton />
      </div>
    </div>
  );
}
