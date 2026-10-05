"use client";

import { Navbar } from "@/components/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Heart, CheckCircle2, Building2, Phone, ArrowUpRight } from "lucide-react";

export default function PersonalHealthPage() {
  const { t } = useLanguage();

  const products = [
    { title: t.personalHealth.govtSubsidized.title, desc: t.personalHealth.govtSubsidized.desc },
    { title: t.personalHealth.noGovtSubsidized.title, desc: t.personalHealth.noGovtSubsidized.desc },
    { title: t.personalHealth.adultDental.title, desc: t.personalHealth.adultDental.desc },
    { title: t.personalHealth.senior65.title, desc: t.personalHealth.senior65.desc },
    { title: t.personalHealth.adultVision.title, desc: t.personalHealth.adultVision.desc },
    { title: t.personalHealth.travel.title, desc: t.personalHealth.travel.desc },
  ];

  return (
    <main className="min-h-screen bg-stone-50">
      <Navbar />

      <section className="pt-32 pb-24 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <PageHeader
            icon={Heart}
            eyebrow={t.productPages.common.categories.personal}
            title={t.personalHealth.headline}
            subtitle={t.personalHealth.subtitle}
            image="/photos/health-doctor.jpg"
            imageAlt="Doctor consulting with a patient"
          />

          <div className="inline-flex items-center gap-2 border border-neutral-900 rounded-md px-4 py-2 text-sm font-medium text-neutral-950 mb-12">
            <CheckCircle2 className="w-4 h-4" />
            {t.personalHealth.certified}
          </div>

          {/* 2026 Health Insurance Zone Section */}
          <div className="border border-neutral-900 rounded-lg p-8 mb-12">
            <h2 className="font-mono text-xs uppercase tracking-wider text-neutral-500 mb-2">
              {t.personalHealth.section2026}
            </h2>
            <h3 className="font-display text-2xl font-bold text-neutral-950 mb-4">
              {t.personalHealth.sectionTitle}
            </h3>
            <p className="text-neutral-700 leading-relaxed">{t.personalHealth.sectionDesc}</p>
          </div>

          {/* Our Products Section */}
          <div className="mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-950 mb-4">
              {t.personalHealth.ourProducts}
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed mb-8">{t.personalHealth.ourProductsDesc}</p>

            <div className="grid md:grid-cols-2 gap-px bg-neutral-200 border border-neutral-200">
              {products.map((product, i) => (
                <div key={i} className="bg-white p-6">
                  <span className="font-mono text-xs text-neutral-400">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display font-bold text-neutral-950 mt-2 mb-2">{product.title}</h3>
                  <p className="text-neutral-600 leading-relaxed text-sm">{product.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Services Section */}
          <div className="mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-950 mb-4">
              {t.personalHealth.ourServices}
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed mb-6">{t.personalHealth.ourServicesDesc}</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200">
              {t.personalHealth.servicesList.map((service, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white">
                  <CheckCircle2 className="w-5 h-5 text-neutral-950 flex-shrink-0" />
                  <span className="text-neutral-700 text-sm">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Insurers Section */}
          <div className="bg-neutral-950 text-white rounded-lg p-8 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-6 h-6 text-neutral-400" />
              <h2 className="font-display text-2xl font-bold text-white">{t.personalHealth.selectedInsurers}</h2>
            </div>
            <p className="text-neutral-300 leading-relaxed">{t.personalHealth.selectedInsurersDesc}</p>
          </div>

          {/* Disclaimer */}
          {t.personalHealth.disclaimer && (
            <div className="border border-neutral-200 rounded-lg p-6 mb-12">
              <p className="text-xs text-neutral-500 leading-relaxed whitespace-pre-line">
                {t.personalHealth.disclaimer}
              </p>
            </div>
          )}

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
