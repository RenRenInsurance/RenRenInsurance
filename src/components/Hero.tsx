"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Background Gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-100/50 to-transparent -z-10 rounded-l-full blur-3xl opacity-60" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-teal-100/40 to-transparent -z-10 rounded-tr-full blur-3xl opacity-60" />

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl"
        >
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
             2025 Top Rated Agency
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6 tracking-tight">
            {t.hero.headline}
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            {t.hero.subheadline}
          </p>
          
          <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-500">
             <span className="flex items-center gap-2">✓ Instant Quotes</span>
             <span className="flex items-center gap-2">✓ 24/7 Support</span>
             <span className="flex items-center gap-2">✓ Bilingual Agents</span>
          </div>
        </motion.div>

        {/* Right: Lead Gen Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full flex justify-center lg:justify-end"
        >
          {/* <LeadGenForm /> - Moved to dedicated page, can replace with image or Call to Action card */}
          <div className="hidden lg:block relative w-full h-[500px]">
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-teal-400 rounded-3xl opacity-10 blur-2xl transform rotate-3 scale-95" />
             <div className="relative h-full bg-white/40 backdrop-blur-xl rounded-3xl border border-white/50 p-8 flex items-center justify-center text-center">
                <div>
                   <h3 className="text-2xl font-bold text-slate-800 mb-4">{t.nav.getQuote}</h3>
                   <p className="text-slate-600 mb-8 max-w-xs mx-auto">Start your free quote in under 2 minutes. No spam, just options.</p>
                   <a href="/quote" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                     Start Now
                   </a>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

