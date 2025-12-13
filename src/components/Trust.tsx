"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function Trust() {
  const { t } = useLanguage();

  const carriers = [
    "Aetna", "BlueCross", "UnitedHealth", "Progressive", "Travelers", "Allstate"
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Business Owner",
      text: "RenRen made getting business insurance incredibly easy. The bilingual support was a lifesaver.",
    },
    {
      id: 2,
      name: "Michael Ross",
      role: "Homeowner",
      text: "Found a better rate for my home and auto bundle in minutes. Highly recommended!",
    },
    {
      id: 3,
      name: "David Wang",
      role: "Freelancer",
      text: "Finally, an insurance agency that explains things clearly without the jargon.",
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Trusted By */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-8">{t.trust.trustedBy}</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Placeholders for logos - using text for now as images aren't available */}
             {carriers.map((carrier) => (
               <span key={carrier} className="text-xl md:text-2xl font-bold text-slate-300 hover:text-slate-600 transition-colors cursor-default">
                 {carrier}
               </span>
             ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="relative">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">{t.trust.testimonials}</h2>
            <div className="flex flex-col md:flex-row gap-8 overflow-x-auto pb-8 snap-x">
                {testimonials.map((item, index) => (
                    <motion.div 
                        key={item.id}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="min-w-[300px] md:min-w-[350px] flex-1 bg-slate-50 p-8 rounded-2xl snap-center"
                    >
                        <div className="flex gap-1 mb-4">
                            {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                        </div>
                        <p className="text-slate-700 text-lg mb-6 italic">&quot;{item.text}&quot;</p>
                        <div>
                            <p className="font-bold text-slate-900">{item.name}</p>
                            <p className="text-sm text-slate-500">{item.role}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}

