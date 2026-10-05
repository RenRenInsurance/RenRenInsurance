"use client";

import { Navbar } from "@/components/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Smile, Eye, Phone, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { CarrierLogos } from "@/components/CarrierLogos";
import dentalLogos from "../../../../public/logos/dental/manifest.json";

export default function DentalVisionPage() {
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
            icon={Smile}
            eyebrow={t.productPages.common.categories.personal}
            title={t.dentalVision.question}
            subtitle={t.dentalVision.subtitle}
            image="/photos/dental-checkup.jpg"
            imageAlt="Dental checkup"
          />

          {/* Content Cards */}
          <div className="grid md:grid-cols-2 gap-px bg-neutral-200 border border-neutral-200 mb-12">
            {/* Dental Insurance */}
            <div className="bg-white p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 border border-neutral-900 rounded-md flex items-center justify-center">
                  <Smile className="w-4 h-4 text-neutral-950" />
                </div>
                <h2 className="font-mono text-xs uppercase tracking-wider text-neutral-500">
                  {t.dentalVision.dentalTitle}
                </h2>
              </div>
              <p className="text-neutral-700 leading-relaxed">{t.dentalVision.dentalDesc}</p>
            </div>

            {/* Vision Insurance */}
            <div className="bg-white p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 border border-neutral-900 rounded-md flex items-center justify-center">
                  <Eye className="w-4 h-4 text-neutral-950" />
                </div>
                <h2 className="font-mono text-xs uppercase tracking-wider text-neutral-500">
                  {t.dentalVision.visionTitle}
                </h2>
              </div>
              <p className="text-neutral-700 leading-relaxed">{t.dentalVision.visionDesc}</p>
            </div>
          </div>

          {/* Popular Insurance Companies */}
          <div className="mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-950 mb-6 text-center">
              {t.dentalVision.popularInsurers}
            </h2>
            <div className="border border-neutral-200 rounded-lg p-8">
              <CarrierLogos basePath="/logos/dental/" logos={dentalLogos} />
            </div>
          </div>

          {/* CTA */}
          <div className="border border-neutral-900 rounded-lg p-10 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-3 text-neutral-950">
              {t.dentalVision.contactCta}
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
