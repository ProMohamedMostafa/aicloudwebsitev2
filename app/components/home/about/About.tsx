"use client";

import { useI18n } from "@/app/i18n/context";

export default function About() {
  const { t } = useI18n();

  const items = [
    { icon: "🔍", titleKey: "about.iot", descKey: "about.iotDesc" },
    { icon: "🧠", titleKey: "about.ai", descKey: "about.aiDesc" },
    { icon: "📈", titleKey: "about.dashboards", descKey: "about.dashboardsDesc" },
  ];

  return (
    <div className="bg-white py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
            {t("about.badge")}
          </span>
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mt-4 mb-6">
            {t("about.title1")}
            <br />
            {t("about.title2")}
          </h1>
        </div>

        <div className="prose prose-lg mx-auto">
          <p className="text-xl text-gray-600 leading-relaxed text-center mb-12">
            {t("about.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {items.map((item, index) => (
            <div key={index} className="text-center p-6">
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{t(item.titleKey)}</h3>
              <p className="text-gray-600 text-sm">{t(item.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
