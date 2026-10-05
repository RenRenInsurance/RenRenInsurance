"use client";

import { Navbar } from "@/components/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Heart, CheckCircle2, Calendar, AlertCircle, ExternalLink, Phone, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CarrierLogos } from "@/components/CarrierLogos";
import healthLogos from "../../../../public/logos/health/manifest.json";

export default function ObamacarePage() {
  const { t } = useLanguage();

  const importantDates = [t.obamacare.importantDates.item1, t.obamacare.importantDates.item2, t.obamacare.importantDates.item3];

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
            title={t.obamacare.pageTitle}
            image="/photos/obamacare-family.jpg"
            imageAlt="Family at home"
          />

          {/* Online Quote Button */}
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 bg-neutral-950 hover:bg-neutral-800 text-white rounded-md px-6 py-3 text-sm font-semibold transition-colors group mb-12"
          >
            <ExternalLink className="w-4 h-4" />
            {t.obamacare.onlineQuote}
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          {/* Certified Agent Badge & Intro */}
          <div className="border border-neutral-200 rounded-lg p-8 mb-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0 border border-neutral-100 rounded-lg p-4">
                <Image
                  src="/covered-ca-certified.png"
                  alt="Covered California Certified Insurance Agent"
                  width={200}
                  height={100}
                  className="object-contain"
                />
              </div>
              <p className="text-lg text-neutral-600 leading-relaxed">{t.obamacare.intro}</p>
            </div>
          </div>

          {/* Important Dates Section */}
          <div className="border border-neutral-200 rounded-lg p-8 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-5 h-5 text-neutral-950" />
              <h2 className="font-mono text-xs uppercase tracking-wider text-neutral-500">
                {t.obamacare.importantDates.title}
              </h2>
            </div>
            <div className="space-y-0">
              {importantDates.map((item, i) => (
                <div key={i} className="flex items-start gap-4 py-3.5 border-b border-neutral-100 last:border-0">
                  <span className="font-mono text-xs text-neutral-400 mt-0.5">0{i + 1}</span>
                  <p className="text-neutral-800 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison Section */}
          <div className="mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-950 mb-6">
              {t.obamacare.comparison.title}
            </h2>
            <div className="border border-neutral-200 rounded-lg p-8">
              <p className="text-lg text-neutral-600 leading-relaxed whitespace-pre-line">
                {t.obamacare.comparison.desc}
              </p>
            </div>
          </div>

          {/* Metal Tiers Section */}
          <div className="mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-950 mb-6">
              {t.obamacare.metalTiers.title}
            </h2>

            <div className="border border-neutral-200 rounded-lg p-8 mb-6 flex justify-center">
              <Image
                src="/metal-tiers.png"
                alt="Bronze 60%, Silver 70%, Gold 80%, Platinum 90%"
                width={700}
                height={200}
                className="object-contain"
              />
            </div>

            <div className="border border-neutral-200 rounded-lg p-8">
              <p className="text-lg text-neutral-600 leading-relaxed">{t.obamacare.metalTiers.desc}</p>
            </div>
          </div>

          {/* Income Standards */}
          <div className="mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-950 mb-6">
              {t.obamacare.incomeStandards}
            </h2>

            {/* Tax Penalty Info */}
            <div className="border border-neutral-200 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-5 h-5 text-neutral-950" />
                <h3 className="font-mono text-xs uppercase tracking-wider text-neutral-500">
                  {t.obamacare.taxPenalty.title}
                </h3>
              </div>
              <p className="text-neutral-600 text-lg leading-relaxed">{t.obamacare.taxPenalty.desc}</p>
            </div>
          </div>

          {/* Certified Agent Notice */}
          <div className="bg-neutral-950 text-white rounded-lg p-8 mb-12">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <CheckCircle2 className="w-10 h-10 text-neutral-400 flex-shrink-0" />
              <p className="text-lg leading-relaxed text-center md:text-left flex-1 text-neutral-200">
                {t.obamacare.certifiedAgent}
              </p>
              <Link
                href="/quote"
                className="flex-shrink-0 inline-flex items-center gap-2 bg-white hover:bg-neutral-200 text-neutral-950 rounded-md px-6 py-3 text-sm font-semibold transition-colors"
              >
                {t.obamacare.onlineQuote}
              </Link>
            </div>
          </div>

          {/* Popular Insurance Companies */}
          <div className="mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-950 mb-6 text-center">
              {t.obamacare.popularInsurers}
            </h2>
            <div className="border border-neutral-200 rounded-lg p-8">
              <CarrierLogos basePath="/logos/health/" logos={healthLogos} />
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
                href="/quote"
                className="inline-flex items-center gap-2 bg-neutral-950 hover:bg-neutral-800 text-white rounded-md px-7 py-3 text-sm font-semibold transition-colors group"
              >
                {t.productPages.common.ctaButton}
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
