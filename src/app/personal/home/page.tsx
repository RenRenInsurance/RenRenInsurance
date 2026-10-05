"use client";

import { Navbar } from "@/components/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Home, CheckCircle2, Phone, ArrowUpRight } from "lucide-react";

export default function HomeInsurancePage() {
  const { t } = useLanguage();

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
            icon={Home}
            eyebrow={t.productPages.common.categories.personal}
            title={t.home.pageTitle}
            subtitle={t.home.subtitle}
            image="/photos/home-exterior.jpg"
            imageAlt="Modern house exterior"
          />

          {/* Products Section */}
          <div className="border border-neutral-200 rounded-lg p-8 mb-12">
            <h2 className="font-mono text-xs uppercase tracking-wider text-neutral-500 mb-6">
              {t.home.ourProducts}
            </h2>
            <div className="grid md:grid-cols-2 gap-px bg-neutral-200 border border-neutral-200">
              {t.home.productsList.map((product: string, index: number) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white">
                  <CheckCircle2 className="w-5 h-5 text-neutral-950 flex-shrink-0" />
                  <span className="text-neutral-700 font-medium">{product}</span>
                </div>
              ))}
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
