"use client";

import { Navbar } from "@/components/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { MapPin, Phone, Newspaper, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

interface NewsItem {
  id: string;
  date: string;
  title: string;
  desc: string;
  image?: string;
  link?: string;
  linkText?: string;
}

export default function AboutPage() {
  const { t, language } = useLanguage();
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    fetch("/api/news")
      .then((res) => res.json())
      .then(setNews)
      .catch(() => setNews([]));
  }, []);

  const dateFormatter = new Intl.DateTimeFormat(language === "zh" ? "zh-TW" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const stats = [
    { value: "20,000+", label: language === "zh" ? "服務家庭" : "Families Served" },
    { value: "15+", label: language === "zh" ? "年經驗" : "Years of Service" },
    { value: "50+", label: language === "zh" ? "合作保險公司" : "Carrier Partners" },
    { value: "7", label: language === "zh" ? "天服務" : "Days a Week" },
  ];

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
          <PageHeader
            title={t.nav.about}
            subtitle={t.about.subtitle}
            image="/photos/about-team.jpg"
            imageAlt="Team collaborating"
          />

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-neutral-900 border border-neutral-900 mb-16">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white p-6 text-center">
                <p className="font-mono text-3xl font-bold text-neutral-950">{stat.value}</p>
                <p className="text-xs text-neutral-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {/* Location */}
            <div className="border border-neutral-200 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 border border-neutral-900 rounded-md flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <h2 className="font-mono text-xs uppercase tracking-wider text-neutral-500">{t.about.location}</h2>
              </div>
              <p className="text-neutral-800 font-medium">1720 S San Gabriel Blvd Ste 210</p>
              <p className="text-neutral-800 font-medium">San Gabriel, CA 91776</p>
            </div>

            {/* Contact */}
            <div className="border border-neutral-200 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 border border-neutral-900 rounded-md flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <h2 className="font-mono text-xs uppercase tracking-wider text-neutral-500">{t.about.contact}</h2>
              </div>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex justify-between items-center border-b border-neutral-100 pb-3">
                  <span className="text-neutral-500">{t.about.tollFree}</span>
                  <a href={`tel:${t.homeContact.hotlineNumber.replace(/-/g, "")}`} className="font-semibold text-neutral-950 hover:underline">
                    {t.homeContact.hotlineNumber}
                  </a>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-500">Email</span>
                  <a href="mailto:RenRenInsinfo@gmail.com" className="font-semibold text-neutral-950 hover:underline">
                    RenRenInsinfo@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* News Section */}
          <div>
            <div className="flex items-center gap-3 mb-8 border-b border-neutral-900 pb-4">
              <Newspaper className="w-5 h-5 text-neutral-950" />
              <h2 className="font-display text-2xl font-bold text-neutral-950">{t.about.latestNews}</h2>
            </div>

            <div className="space-y-px bg-neutral-900 border border-neutral-900">
              {news.map((item) => (
                <div key={item.id} className="bg-white p-6 group hover:bg-neutral-950 transition-colors flex gap-5">
                  {item.image && (
                    <div className="relative w-24 h-24 rounded-md overflow-hidden border border-neutral-200 group-hover:border-neutral-700 flex-shrink-0">
                      <Image src={item.image} alt="" fill className="object-cover" />
                    </div>
                  )}
                  <div className="min-w-0">
                    <div className="flex justify-between items-center mb-2 gap-4">
                      <span className="font-mono text-xs text-neutral-500 group-hover:text-neutral-400 uppercase tracking-wide">
                        {t.about.pressRelease}
                      </span>
                      <span className="font-mono text-xs text-neutral-400 group-hover:text-neutral-500 whitespace-nowrap">
                        {dateFormatter.format(new Date(item.date + "T00:00:00"))}
                      </span>
                    </div>
                    <h3 className="text-lg font-display font-bold text-neutral-950 group-hover:text-white transition-colors mb-1">
                      {item.title}
                    </h3>
                    {item.desc && (
                      <p className="text-neutral-600 group-hover:text-neutral-300 transition-colors text-sm">{item.desc}</p>
                    )}
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-neutral-950 group-hover:text-white underline underline-offset-2 mt-2 transition-colors"
                      >
                        {item.linkText || item.link}
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
              {news.length === 0 && (
                <div className="bg-white p-6 text-sm text-neutral-400">
                  {language === "zh" ? "目前沒有最新消息。" : "No news posts yet."}
                </div>
              )}
            </div>
          </div>

          {/* CTA */}
          <div className="border border-neutral-900 rounded-lg p-10 text-center mt-16">
            <h2 className="font-display text-2xl font-bold text-neutral-950 mb-3">{t.nav.getQuote}</h2>
            <p className="text-neutral-600 mb-6">{t.appointment.subtitle}</p>
            <a
              href="/appointment"
              className="inline-flex items-center gap-2 bg-neutral-950 hover:bg-neutral-800 text-white rounded-md px-7 py-3 text-sm font-semibold transition-colors group"
            >
              {t.nav.appointment}
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
