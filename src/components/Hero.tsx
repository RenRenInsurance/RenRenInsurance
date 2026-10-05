"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Phone, MapPin, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const { t, language } = useLanguage();

  const stats = [
    { value: "20,000+", label: language === "zh" ? "服務家庭" : "Families Served" },
    { value: "15+", label: language === "zh" ? "年經驗" : "Years of Service" },
    { value: "50+", label: language === "zh" ? "合作保險公司" : "Carrier Partners" },
  ];

  return (
    <section className="relative pt-32 pb-16 bg-stone-50 border-b border-neutral-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl mt-4"
          >
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="font-mono text-xs uppercase tracking-wider border border-neutral-900 rounded-full px-3 py-1 text-neutral-700">
                {t.hero.instantQuotes}
              </span>
              <span className="font-mono text-xs uppercase tracking-wider border border-neutral-900 rounded-full px-3 py-1 text-neutral-700">
                {t.hero.bilingualAgents}
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-6xl font-bold text-neutral-950 leading-[1.05] md:leading-[0.98] mb-6 tracking-tight">
              {t.hero.headline.split("，").map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 ? "，" : ""}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed mb-10 max-w-md">
              {t.hero.subheadline}
            </p>

            {/* Contact Info Integrated */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {/* Hotline */}
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-neutral-200">
                <div className="w-9 h-9 border border-neutral-900 rounded-md flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xs font-mono uppercase tracking-wide text-neutral-500 mb-1">{t.homeContact.hotlineTitle}</h3>
                  <p className="text-base font-display font-bold text-neutral-950 leading-tight">{t.homeContact.hotlineNumber}</p>
                </div>
              </div>

              {/* Branch Info */}
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-neutral-200">
                <div className="w-9 h-9 border border-neutral-900 rounded-md flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xs font-mono uppercase tracking-wide text-neutral-500 mb-1">{t.homeContact.branchInfo}</h3>
                  <p className="text-sm text-neutral-700 leading-snug">1720 S San Gabriel Blvd Ste 210</p>
                  <p className="text-sm text-neutral-700 leading-snug">San Gabriel, CA 91776</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 border-t border-neutral-200 pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-mono text-2xl md:text-3xl font-bold text-neutral-950">{stat.value}</p>
                  <p className="text-xs text-neutral-500 mt-1 leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Quote CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="w-full flex flex-col items-center lg:items-end lg:mt-4 gap-6"
          >
            <div className="relative w-full max-w-md aspect-[4/3] rounded-lg overflow-hidden border border-neutral-900">
              <Image
                src="/photos/hero-family.jpg"
                alt="Family outside their home"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="w-full max-w-md border-2 border-neutral-950 rounded-lg p-8 md:p-10 text-center bg-white">
              <h3 className="font-display text-xl md:text-2xl font-bold text-neutral-950 mb-3">{t.nav.getQuote}</h3>
              <p className="text-sm md:text-base text-neutral-600 mb-8 leading-relaxed">{t.hero.quoteDescription}</p>
              <a
                href="/quote"
                className="inline-flex items-center gap-2 bg-neutral-950 text-white px-8 py-3.5 rounded-md font-semibold hover:bg-neutral-800 transition-colors text-sm md:text-base group"
              >
                {t.hero.startNow}
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
