"use client";

import { Navbar } from "@/components/Navbar";
import { LeadGenForm } from "@/components/LeadGenForm";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

export default function QuotePage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      <section className="pt-32 pb-20 container mx-auto px-4 min-h-screen flex flex-col justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl mx-auto w-full"
        >
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {t.nav.getQuote}
            </h1>
            <p className="text-slate-600 text-lg">
              {t.hero.subheadline}
            </p>
          </div>
          
          <LeadGenForm />
        </motion.div>
      </section>
    </main>
  );
}

