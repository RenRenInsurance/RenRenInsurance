"use client";

import { Navbar } from "@/components/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Phone, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { getProductMeta } from "@/lib/productCatalog";

interface ProductItem {
  title: string;
  subtitle: string;
  intro: string;
  highlights: string[];
  whoFor: string;
}

export function ProductDetailPage({ slug }: { slug: string }) {
  const { t } = useLanguage();
  const meta = getProductMeta(slug);
  const items = t.productPages.items as unknown as Record<string, ProductItem>;
  const item = items[slug];

  if (!meta || !item) {
    return (
      <main className="min-h-screen bg-stone-50">
        <Navbar />
        <section className="pt-40 pb-20 container mx-auto px-4 text-center">
          <p className="text-neutral-500">
            <Link href="/" className="text-neutral-950 underline">
              Back to Home
            </Link>
          </p>
        </section>
      </main>
    );
  }

  const Icon = meta.icon;
  const categoryLabel = t.productPages.common.categories[meta.category];

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
          <PageHeader icon={Icon} eyebrow={categoryLabel} title={item.title} subtitle={item.subtitle} />

          {/* Intro */}
          <p className="text-lg text-neutral-700 leading-relaxed mb-12 border-l-2 border-neutral-900 pl-6 max-w-2xl">
            {item.intro}
          </p>

          {/* Highlights + Who For */}
          <div className="grid md:grid-cols-5 gap-6 mb-12">
            <div className="md:col-span-3 border border-neutral-200 rounded-lg p-8">
              <h2 className="font-mono text-xs uppercase tracking-wider text-neutral-500 mb-6">
                {t.productPages.common.highlightsTitle}
              </h2>
              <ul className="space-y-0">
                {item.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-4 py-3.5 border-b border-neutral-100 last:border-0">
                    <span className="font-mono text-xs text-neutral-400 mt-0.5">0{i + 1}</span>
                    <span className="text-neutral-800 leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2 bg-neutral-950 text-white rounded-lg p-8 h-fit">
              <h2 className="font-mono text-xs uppercase tracking-wider text-neutral-400 mb-4">
                {t.productPages.common.whoForTitle}
              </h2>
              <p className="text-neutral-200 leading-relaxed">{item.whoFor}</p>
            </div>
          </div>

          {/* CTA */}
          <div className="border border-neutral-900 rounded-lg p-10 md:p-12 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-3 text-neutral-950">
              {t.productPages.common.ctaTitle}
            </h2>
            <p className="text-neutral-600 mb-8 max-w-xl mx-auto">
              {t.productPages.common.ctaDesc}
            </p>
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
