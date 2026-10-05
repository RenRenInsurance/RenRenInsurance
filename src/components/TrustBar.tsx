"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { CarrierLogos } from "@/components/CarrierLogos";
import healthLogos from "../../public/logos/health/manifest.json";
import autoLogos from "../../public/logos/auto/manifest.json";
import lifeLogos from "../../public/logos/life/manifest.json";

export function TrustBar() {
  const { t, language } = useLanguage();

  const groups = [
    {
      label: language === "zh" ? "健康保險" : "Health",
      basePath: "/logos/health/",
      logos: healthLogos,
    },
    {
      label: language === "zh" ? "汽車與房屋保險" : "Auto & Home",
      basePath: "/logos/auto/",
      logos: autoLogos,
    },
    {
      label: language === "zh" ? "人壽與退休保險" : "Life & Retirement",
      basePath: "/logos/life/",
      logos: lifeLogos,
    },
  ];

  return (
    <section className="py-16 bg-stone-50 border-b border-neutral-200">
      <div className="container mx-auto px-4 max-w-4xl">
        <p className="font-mono text-xs uppercase tracking-wider text-neutral-500 text-center mb-12">
          {t.trust.trustedBy}
        </p>
        <div className="divide-y divide-neutral-200">
          {groups.map((group) => (
            <div key={group.label} className="py-8 first:pt-0 last:pb-0">
              <p className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 text-center mb-6">
                {group.label}
              </p>
              <CarrierLogos basePath={group.basePath} logos={group.logos} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
