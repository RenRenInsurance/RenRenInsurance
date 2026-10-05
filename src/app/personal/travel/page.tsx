"use client";

import { Navbar } from "@/components/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Plane, Users, GraduationCap, Globe, Ship, ArrowRight, Phone, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function TravelInsurancePage() {
  const { t } = useLanguage();

  const products = [
    {
      icon: Users,
      title: t.travel.seniorTravel.title,
      desc: t.travel.seniorTravel.desc,
      cta: t.travel.seniorTravel.cta,
      href: "https://www.travelinsure.com/products/intermedical-insurance/?pcode=100900",
    },
    {
      icon: Plane,
      title: t.travel.visitorUS.title,
      desc: t.travel.visitorUS.desc,
      cta: t.travel.visitorUS.cta,
      href: "https://www.travelinsure.com/products/visit-usa-healthcare/?pcode=100900",
    },
    {
      icon: GraduationCap,
      title: t.travel.studentUS.title,
      desc: t.travel.studentUS.desc,
      cta: t.travel.studentUS.cta,
      href: "https://www.travelinsure.com/studyusa/?pcode=100900",
    },
    {
      icon: Globe,
      title: t.travel.international.title,
      desc: t.travel.international.desc,
      cta: t.travel.international.cta,
      href: "https://www.travelinsure.com/products/worldmed-insurance/?pcode=100900",
    },
    {
      icon: Ship,
      title: t.travel.cruise.title,
      desc: t.travel.cruise.desc,
      cta: t.travel.cruise.cta,
      href: "/quote",
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
            icon={Plane}
            eyebrow={t.productPages.common.categories.personal}
            title={t.travel.pageTitle}
            subtitle={t.travel.subtitle}
            image="/photos/travel-airport.jpg"
            imageAlt="Traveler waiting at the airport"
          />

          <p className="font-mono text-sm text-neutral-500 mb-12">「{t.travel.motto}」</p>

          {/* Products Section */}
          <div className="mb-12">
            <h2 className="font-mono text-xs uppercase tracking-wider text-neutral-500 mb-6">
              {t.travel.ourProducts}
            </h2>

            <div className="space-y-px bg-neutral-200 border border-neutral-200">
              {products.map((product, index) => (
                <div key={index} className="bg-white p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-10 h-10 border border-neutral-900 rounded-md flex items-center justify-center flex-shrink-0">
                      <product.icon className="w-5 h-5 text-neutral-950" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-neutral-950 mb-1">{product.title}</h3>
                      <p className="text-neutral-600 leading-relaxed text-sm">{product.desc}</p>
                    </div>
                  </div>
                  {product.href.startsWith("http") ? (
                    <a
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 inline-flex items-center gap-1.5 border border-neutral-900 hover:bg-neutral-100 text-neutral-950 rounded-md px-5 py-2.5 text-sm font-semibold transition-colors group"
                    >
                      {product.cta}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  ) : (
                    <Link
                      href={product.href}
                      className="flex-shrink-0 inline-flex items-center gap-1.5 border border-neutral-900 hover:bg-neutral-100 text-neutral-950 rounded-md px-5 py-2.5 text-sm font-semibold transition-colors group"
                    >
                      {product.cta}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  )}
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
