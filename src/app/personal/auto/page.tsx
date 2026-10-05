"use client";

import { Navbar } from "@/components/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Car, CheckCircle2, Briefcase, Phone, ShieldCheck, ArrowUpRight } from "lucide-react";
import { CarrierLogos } from "@/components/CarrierLogos";
import autoLogos from "../../../../public/logos/auto/manifest.json";

export default function AutoInsurancePage() {
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
            icon={Car}
            eyebrow={t.productPages.common.categories.personal}
            title={t.auto.pageTitle}
            subtitle={t.auto.subtitle}
            image="/photos/auto-family-car.jpg"
            imageAlt="Family in car"
          />

          {/* Our Products Section */}
          <div className="border border-neutral-200 rounded-lg p-8 mb-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 border border-neutral-900 rounded-md flex items-center justify-center">
                <Car className="w-4 h-4 text-neutral-950" />
              </div>
              <h2 className="font-mono text-xs uppercase tracking-wider text-neutral-500">{t.auto.ourProducts}</h2>
            </div>
            <p className="text-neutral-600 leading-relaxed text-base mb-6">{t.auto.ourProductsDesc}</p>

            <p className="font-semibold text-neutral-800 mb-4">{t.auto.vehicleTypes}</p>
            <div className="grid md:grid-cols-2 gap-3">
              {t.auto.vehicleTypesList.map((type: string, index: number) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-neutral-950 flex-shrink-0" />
                  <span className="text-neutral-700">{type}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Our Services Section */}
          <div className="border border-neutral-200 rounded-lg p-8 mb-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 border border-neutral-900 rounded-md flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-neutral-950" />
              </div>
              <h2 className="font-mono text-xs uppercase tracking-wider text-neutral-500">{t.auto.ourServices}</h2>
            </div>
            <p className="text-neutral-600 leading-relaxed text-base mb-6">{t.auto.ourServicesDesc}</p>

            <div className="grid md:grid-cols-2 gap-4">
              {t.auto.servicesList.map((service: string, index: number) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-neutral-950 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Insurance Companies */}
          <div className="bg-neutral-950 text-white rounded-lg p-8 mb-12">
            <div className="flex items-center gap-3 mb-5">
              <ShieldCheck className="w-5 h-5 text-neutral-400" />
              <h2 className="font-mono text-xs uppercase tracking-wider text-neutral-400">{t.auto.selectedInsurers}</h2>
            </div>
            <p className="text-neutral-300 leading-relaxed text-base mb-8">{t.auto.selectedInsurersDesc}</p>

            <div className="bg-white rounded-lg p-6">
              <CarrierLogos basePath="/logos/auto/" logos={autoLogos} />
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
