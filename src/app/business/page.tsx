"use client";

import { Navbar } from "@/components/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

export default function BusinessPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      <section className="pt-32 pb-20 container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center p-3 bg-indigo-100 text-indigo-600 rounded-2xl mb-6">
            <Building2 className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {t.services.businessTitle}
          </h1>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            {t.services.businessDesc}
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Small Business</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> General Liability
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> Workers&apos; Compensation
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> Commercial Auto
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
               <h3 className="text-xl font-bold text-slate-900 mb-4">Enterprise</h3>
               <ul className="space-y-3 text-slate-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> Cyber Liability
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> Professional Liability
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> Directors & Officers
                </li>
               </ul>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

