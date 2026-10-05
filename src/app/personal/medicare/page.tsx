"use client";

import { Navbar } from "@/components/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Heart, CheckCircle2, Building2, Pill, Phone, ArrowUpRight } from "lucide-react";
import { CarrierLogos } from "@/components/CarrierLogos";
import medicareLogos from "../../../../public/logos/medicare/manifest.json";

export default function MedicarePage() {
  const { t } = useLanguage();

  const parts = [
    {
      letter: "A",
      title: t.medicare.partA.title,
      desc: t.medicare.partA.desc,
      benefitsTitle: t.medicare.partA.benefitsTitle,
      benefits: t.medicare.partA.benefits,
    },
    {
      letter: "B",
      title: t.medicare.partB.title,
      desc: t.medicare.partB.desc,
      benefitsTitle: t.medicare.partB.benefitsTitle,
      benefits: t.medicare.partB.benefits,
    },
  ];

  const simpleParts = [
    {
      letter: "C",
      title: t.medicare.partC.title,
      desc: t.medicare.partC.desc,
      icon: Building2,
    },
    {
      letter: "D",
      title: t.medicare.partD.title,
      desc: t.medicare.partD.desc,
      icon: Pill,
    },
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
            title={t.medicare.pageTitle}
            subtitle={t.medicare.subtitle}
            image="/photos/medicare-seniors.jpg"
            imageAlt="Senior couple walking together"
          />

          {/* Introduction */}
          <div className="border border-neutral-200 rounded-lg p-8 mb-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0 w-20 h-20 border border-neutral-900 rounded-lg flex items-center justify-center">
                <span className="font-mono text-neutral-950 text-lg font-bold">紅藍卡</span>
              </div>
              <p className="text-lg text-neutral-600 leading-relaxed">{t.medicare.intro}</p>
            </div>
          </div>

          {/* Parts A & B with Benefits */}
          <div className="space-y-6 mb-12">
            {parts.map((part) => (
              <div key={part.letter} className="border border-neutral-200 rounded-lg p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 border border-neutral-900 rounded-md flex items-center justify-center">
                    <span className="font-mono text-neutral-950 text-lg font-bold">{part.letter}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-neutral-950">{part.title}</h3>
                </div>

                <p className="text-neutral-600 leading-relaxed mb-6">{part.desc}</p>

                <div className="border-t border-neutral-100 pt-6">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-neutral-500 mb-4">
                    {part.benefitsTitle}
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {part.benefits.map((benefit: string, i: number) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-neutral-950 flex-shrink-0" />
                        <span className="text-neutral-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Parts C & D - Side by Side */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {simpleParts.map((part) => (
              <div key={part.letter} className="border border-neutral-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 border border-neutral-900 rounded-md flex items-center justify-center">
                    <span className="font-mono text-neutral-950 font-bold">{part.letter}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-neutral-950">{part.title}</h3>
                </div>
                <div className="flex items-start gap-4">
                  <part.icon className="w-5 h-5 text-neutral-400 flex-shrink-0 mt-0.5" />
                  <p className="text-neutral-600 leading-relaxed">{part.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Popular Insurers */}
          <div className="mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-950 mb-6 text-center">
              {t.medicare.popularInsurers}
            </h2>
            <div className="border border-neutral-200 rounded-lg p-8">
              <CarrierLogos basePath="/logos/medicare/" logos={medicareLogos} />
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
                href="/appointment"
                className="inline-flex items-center gap-2 bg-neutral-950 hover:bg-neutral-800 text-white rounded-md px-7 py-3 text-sm font-semibold transition-colors group"
              >
                {t.nav.appointment}
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
