"use client";

import { useI18n } from "@/app/i18n/context";

export default function WhyChooseUs() {
  const { t } = useI18n();

  const items = [
    { icon: "🚀", titleKey: "whyUs.agile", descKey: "whyUs.agileDesc" },
    { icon: "🛡️", titleKey: "whyUs.secure", descKey: "whyUs.secureDesc" },
    { icon: "⚡", titleKey: "whyUs.performance", descKey: "whyUs.performanceDesc" },
    { icon: "🔧", titleKey: "whyUs.custom", descKey: "whyUs.customDesc" },
    { icon: "📱", titleKey: "whyUs.crossPlatform", descKey: "whyUs.crossPlatformDesc" },
    { icon: "🔄", titleKey: "whyUs.support", descKey: "whyUs.supportDesc" },
  ];

  return (
    <div className="bg-white py-24 px-4 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t("whyUs.title")}
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">
              {t("whyUs.titleHighlight")}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("whyUs.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-linear-to-br from-white to-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t(item.titleKey)}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t(item.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
