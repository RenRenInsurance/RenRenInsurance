"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Heart, Car, Building2, ArrowRight } from "lucide-react";

export function Services() {
  const { t } = useLanguage();

  const services = [
    {
      id: "health",
      title: t.services.healthTitle,
      desc: t.services.healthDesc,
      icon: Heart,
      color: "bg-rose-100 text-rose-600",
      delay: 0.1,
    },
    {
      id: "auto",
      title: t.services.autoHomeTitle,
      desc: t.services.autoHomeDesc,
      icon: Car,
      color: "bg-blue-100 text-blue-600",
      delay: 0.2,
    },
    {
      id: "business",
      title: t.services.businessTitle,
      desc: t.services.businessDesc,
      icon: Building2,
      color: "bg-indigo-100 text-indigo-600",
      delay: 0.3,
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: service.delay, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 text-base mb-6">
                    {service.desc}
                  </CardDescription>
                  <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:translate-x-1 transition-transform cursor-pointer">
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

