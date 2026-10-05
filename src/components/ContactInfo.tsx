"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactInfo() {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Hotline */}
            <div className="flex items-center gap-6 p-6 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-slate-500 font-medium mb-1 text-sm">{t.homeContact.hotlineTitle}</h3>
                <p className="text-2xl md:text-3xl font-bold text-slate-900">{t.homeContact.hotlineNumber}</p>
              </div>
            </div>

            {/* Branch Info */}
            <div className="flex items-center gap-6 p-6 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors">
              <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h3 className="text-slate-900 font-bold text-lg mb-3">{t.homeContact.branchInfo}</h3>
                <Button variant="outline" className="rounded-full hover:bg-teal-50 hover:text-teal-600 border-slate-200">
                  {t.homeContact.findNearMe}
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

