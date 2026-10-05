"use client";

import { Navbar } from "@/components/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { PiggyBank, Phone, Lightbulb, Star, TrendingUp, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { CarrierLogos } from "@/components/CarrierLogos";
import lifeLogos from "../../../../public/logos/life/manifest.json";

export default function AnnuityPage() {
  const { t } = useLanguage();

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
            icon={PiggyBank}
            eyebrow={t.productPages.common.categories.asset}
            title={t.annuity.pageTitle}
            subtitle={t.annuity.subtitle}
            image="/photos/annuity-retirement.jpg"
            imageAlt="Retired couple relaxing by the ocean"
          />

          {/* Our Products Section */}
          <div className="border border-neutral-200 rounded-lg p-8 mb-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 border border-neutral-900 rounded-md flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-neutral-950" />
              </div>
              <h2 className="font-mono text-xs uppercase tracking-wider text-neutral-500">{t.annuity.ourProducts}</h2>
            </div>
            <p className="text-neutral-600 leading-relaxed text-base mb-6">{t.annuity.ourProductsDesc}</p>

            <div className="flex flex-wrap gap-2">
              {t.annuity.accountTypes.map((type: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1.5 border border-neutral-200 text-neutral-800 rounded-md text-sm font-medium"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>

          {/* Popular Product - Traditional IRA */}
          <div className="border border-neutral-200 rounded-lg p-8 mb-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 border border-neutral-900 rounded-md flex items-center justify-center">
                <Star className="w-4 h-4 text-neutral-950" />
              </div>
              <h2 className="font-mono text-xs uppercase tracking-wider text-neutral-500">{t.annuity.popularProduct}</h2>
            </div>
            <div className="space-y-0">
              {t.annuity.highlights.map((highlight: { title: string; desc: string }, index: number) => (
                <div key={index} className="flex gap-4 py-3.5 border-b border-neutral-100 last:border-0">
                  <span className="font-mono text-xs text-neutral-400 mt-0.5">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h4 className="font-semibold text-neutral-950 mb-1">{highlight.title}</h4>
                    <p className="text-neutral-600 leading-relaxed">{highlight.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Smart Savings Tips */}
          <div className="border border-neutral-200 rounded-lg p-8 mb-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 border border-neutral-900 rounded-md flex items-center justify-center">
                <Lightbulb className="w-4 h-4 text-neutral-950" />
              </div>
              <h2 className="font-mono text-xs uppercase tracking-wider text-neutral-500">{t.annuity.savingsTips}</h2>
            </div>
            <p className="text-neutral-600 leading-relaxed text-base">{t.annuity.savingsTipsDesc}</p>
          </div>

          {/* Partner Insurance Companies */}
          <div className="bg-neutral-950 text-white rounded-lg p-8 mb-12">
            <h2 className="font-mono text-xs uppercase tracking-wider text-neutral-400 mb-6">{t.annuity.partners}</h2>
            <div className="bg-white rounded-lg p-6">
              <CarrierLogos basePath="/logos/life/" logos={lifeLogos} />
            </div>
          </div>

          {/* CTA */}
          <div className="border border-neutral-900 rounded-lg p-10 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-3 text-neutral-950">
              {t.productPages.common.ctaTitle}
            </h2>
            <p className="text-neutral-600 mb-8 max-w-xl mx-auto">{t.productPages.common.ctaDesc}</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/appointment"
                className="inline-flex items-center gap-2 bg-neutral-950 hover:bg-neutral-800 text-white rounded-md px-7 py-3 text-sm font-semibold transition-colors group"
              >
                {t.nav.appointment}
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
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
