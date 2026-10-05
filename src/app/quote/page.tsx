"use client";

import { Navbar } from "@/components/Navbar";
import { LeadGenForm } from "@/components/LeadGenForm";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

export default function QuotePage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-stone-50">
      <Navbar />

      <section className="pt-32 pb-20 container mx-auto px-4 min-h-screen flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-xl mx-auto w-full"
        >
          <div className="text-center mb-10">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-neutral-950 mb-4 tracking-tight">
              {t.nav.getQuote}
            </h1>
            <p className="text-neutral-600 text-lg">
              {t.hero.subheadline}
            </p>
          </div>

          <LeadGenForm />
        </motion.div>
      </section>
    </main>
  );
}

