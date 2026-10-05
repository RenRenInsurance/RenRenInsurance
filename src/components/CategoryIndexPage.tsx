"use client";

import { Navbar } from "@/components/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { getSlugsForCategory, getProductMeta, type ProductCategory } from "@/lib/productCatalog";

interface ProductItem {
  title: string;
  subtitle: string;
}

const BASE_PATH: Record<ProductCategory, string> = {
  commercial: "/business",
  asset: "/asset",
  personal: "/personal",
  other: "/services",
};

export function CategoryIndexPage({
  category,
  title,
  subtitle,
  image,
  imageAlt,
}: {
  category: ProductCategory;
  title: string;
  subtitle: string;
  image?: string;
  imageAlt?: string;
}) {
  const { t } = useLanguage();
  const items = t.productPages.items as unknown as Record<string, ProductItem>;
  const slugs = getSlugsForCategory(category);

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
          <PageHeader title={title} subtitle={subtitle} image={image} imageAlt={imageAlt} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-900 border border-neutral-900">
            {slugs.map((slug, i) => {
              const meta = getProductMeta(slug);
              const item = items[slug];
              if (!meta || !item) return null;
              const Icon = meta.icon;
              return (
                <Link
                  key={slug}
                  href={`${BASE_PATH[category]}/${slug}`}
                  className="group block h-full bg-white hover:bg-neutral-950 transition-colors duration-200 p-7"
                >
                  <div className="flex items-start justify-between mb-8">
                    <span className="font-mono text-xs text-neutral-400 group-hover:text-neutral-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Icon className="w-5 h-5 text-neutral-900 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-neutral-950 group-hover:text-white transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600 group-hover:text-neutral-300 transition-colors text-sm leading-relaxed mb-6">
                    {item.subtitle}
                  </p>
                  <div className="flex items-center text-neutral-950 group-hover:text-white font-semibold text-sm transition-colors">
                    {t.services.learnMore}
                    <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </motion.div>
      </section>
    </main>
  );
}
