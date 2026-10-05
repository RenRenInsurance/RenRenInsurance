"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Heart, Car, Building2, Users, Plane, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Services() {
  const { t } = useLanguage();

  const services = [
    {
      id: "health",
      title: t.services.healthTitle,
      desc: t.services.healthDesc,
      href: "/personal/health",
      icon: Heart,
    },
    {
      id: "auto",
      title: t.services.autoHomeTitle,
      desc: t.services.autoHomeDesc,
      href: "/personal/auto",
      icon: Car,
    },
    {
      id: "group",
      title: t.services.groupHealthTitle,
      desc: t.services.groupHealthDesc,
      href: "/business/group-health",
      icon: Users,
    },
    {
      id: "life",
      title: t.services.lifeTitle,
      desc: t.services.lifeDesc,
      href: "/personal/life",
      icon: Heart,
    },
    {
      id: "business",
      title: t.services.businessTitle,
      desc: t.services.businessDesc,
      href: "/business",
      icon: Building2,
    },
    {
      id: "travel",
      title: t.services.travelTitle,
      desc: t.services.travelDesc,
      href: "/personal/travel",
      icon: Plane,
    },
  ];

  return (
    <section className="py-24 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-12 border-b border-neutral-900 pb-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-950 tracking-tight">
            {t.nav.services}
          </h2>
          <span className="hidden sm:block font-mono text-xs uppercase tracking-wider text-neutral-500">
            01 — 0{services.length}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-900 border border-neutral-900">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <Link href={service.href} className="group block h-full bg-white hover:bg-neutral-950 transition-colors duration-200 p-8">
                <div className="flex items-start justify-between mb-10">
                  <span className="font-mono text-xs text-neutral-400 group-hover:text-neutral-500">0{i + 1}</span>
                  <service.icon className="w-5 h-5 text-neutral-900 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-display font-bold text-neutral-950 group-hover:text-white transition-colors mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-600 group-hover:text-neutral-300 transition-colors text-sm leading-relaxed mb-8">
                  {service.desc}
                </p>
                <div className="flex items-center text-neutral-950 group-hover:text-white font-semibold text-sm transition-colors">
                  {t.services.learnMore}
                  <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
