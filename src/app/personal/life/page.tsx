"use client";

import { Navbar } from "@/components/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Heart, CheckCircle2, Phone, AlertTriangle, ArrowUpRight } from "lucide-react";
import { CarrierLogos } from "@/components/CarrierLogos";
import lifeLogos from "../../../../public/logos/life/manifest.json";

export default function LifeInsurancePage() {
  const { t } = useLanguage();

  const products = [
    { id: "term", title: t.life.instantTerm.title, subtitle: undefined, features: t.life.instantTerm.features, desc: undefined },
    { id: undefined, title: t.life.termLifeNew.title, subtitle: t.life.termLifeNew.subtitle, features: t.life.termLifeNew.features, desc: undefined },
    { id: undefined, title: t.life.returnPremium.title, subtitle: t.life.returnPremium.subtitle, features: t.life.returnPremium.features, desc: undefined },
    { id: "iul", title: t.life.indexedLife.title, subtitle: t.life.indexedLife.subtitle, features: t.life.indexedLife.features, desc: undefined },
    { id: undefined, title: t.life.universalLife.title, subtitle: t.life.universalLife.subtitle, features: t.life.universalLife.features, desc: undefined },
    { id: "whole", title: t.life.wholeLife.title, subtitle: undefined, features: t.life.wholeLife.features, desc: undefined },
    { id: undefined, title: t.life.longTermCare.title, subtitle: undefined, features: undefined, desc: t.life.longTermCare.desc },
    { id: undefined, title: t.life.disability.title, subtitle: undefined, features: undefined, desc: t.life.disability.desc },
  ];

  return (
    <main className="min-h-screen bg-stone-50">
      <Navbar />

      <section className="pt-32 pb-24 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <PageHeader
            icon={Heart}
            eyebrow={t.productPages.common.categories.personal}
            title={t.life.pageTitle}
            subtitle={t.life.subtitle}
            image="/photos/life-family.jpg"
            imageAlt="Happy family at home"
          />

          {/* Products Section Header */}
          <h2 className="font-mono text-xs uppercase tracking-wider text-neutral-500 mb-6">{t.life.ourProducts}</h2>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 gap-px bg-neutral-200 border border-neutral-200 mb-12">
            {products.map((product, i) => (
              <div key={i} id={product.id} className="bg-white p-6 scroll-mt-28">
                <span className="font-mono text-xs text-neutral-400">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display font-bold text-neutral-950 mt-2 mb-3">{product.title}</h3>
                {product.subtitle && (
                  <p className="text-sm text-neutral-600 italic mb-3 border-l-2 border-neutral-200 pl-3">
                    {product.subtitle}
                  </p>
                )}
                {product.features && (
                  <div className="space-y-2">
                    {product.features.map((feature: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-neutral-950 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-700 text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}
                {product.desc && <p className="text-neutral-700 text-sm leading-relaxed">{product.desc}</p>}
              </div>
            ))}
          </div>

          {/* Partner Insurance Companies */}
          <div className="bg-neutral-950 text-white rounded-lg p-8 mb-8">
            <h2 className="font-mono text-xs uppercase tracking-wider text-neutral-400 mb-6">
              {t.life.selectedInsurers}
            </h2>
            <div className="bg-white rounded-lg p-6">
              <CarrierLogos basePath="/logos/life/" logos={lifeLogos} />
            </div>
          </div>

          {/* Disclaimer */}
          <div className="border border-neutral-200 rounded-lg p-6 mb-12">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-neutral-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-neutral-600 leading-relaxed">{t.life.disclaimer}</p>
            </div>
          </div>

          {/* CTA */}
          <div className="border border-neutral-900 rounded-lg p-10 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-3 text-neutral-950">
              {t.productPages.common.ctaTitle}
            </h2>
            <p className="text-neutral-600 mb-8 max-w-xl mx-auto">{t.productPages.common.ctaDesc}</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="/quote"
                className="inline-flex items-center gap-2 bg-neutral-950 hover:bg-neutral-800 text-white rounded-md px-7 py-3 text-sm font-semibold transition-colors group"
              >
                {t.productPages.common.ctaButton}
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={`tel:${t.homeContact.hotlineNumber.replace(/-/g, "")}`}
                className="inline-flex items-center gap-2 border border-neutral-900 hover:bg-neutral-100 text-neutral-950 rounded-md px-7 py-3 text-sm font-semibold transition-colors"
              >
                <Phone className="w-4 h-4" /> {t.productPages.common.callButton}
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
