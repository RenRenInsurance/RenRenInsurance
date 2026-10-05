"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Phone, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const { t } = useLanguage();

  const sitemapColumns = [
    { title: t.nav.menu.personalInsurance, items: t.nav.menu.personalItems },
    { title: t.nav.menu.commercialInsurance, items: t.nav.menu.commercialItems },
    { title: t.nav.menu.lifeRetirement, items: t.nav.menu.assetItems },
    { title: t.nav.menu.otherServices, items: t.nav.menu.otherServicesItems },
  ];

  return (
    <footer className="bg-neutral-950 text-neutral-300">
      {/* Sitemap */}
      <div className="container mx-auto px-4 py-16 border-b border-neutral-800">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {sitemapColumns.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono text-white mb-4 text-xs uppercase tracking-wider">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.items.slice(0, 8).map((item: { label: string; href: string }) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-neutral-400 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Column 1: Contact Info */}
          <div className="space-y-6">
            <h3 className="font-display text-xl font-bold text-white mb-4">{t.footer.contact.title}</h3>
            <p className="text-neutral-400 leading-relaxed mb-6">
              {t.footer.contact.desc}
            </p>
            <div className="space-y-3 font-mono text-sm">
              <a href={`tel:${t.homeContact.hotlineNumber.replace(/-/g, "")}`} className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-white" />
                <span>{t.footer.contact.phone}</span>
              </a>
              <a href="mailto:RenRenInsinfo@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-white" />
                <span>{t.footer.contact.email}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Social Media */}
          <div className="space-y-6">
            <h3 className="font-display text-xl font-bold text-white mb-4">{t.footer.social.title}</h3>
            <p className="text-neutral-400 leading-relaxed mb-6">
              {t.footer.social.desc}
            </p>
            <div className="space-y-3">
              <div className="w-32 h-32 bg-white p-2 rounded-md">
                <div className="relative w-full h-full">
                  <Image src="/wechat.jpeg" alt={t.footer.social.qrCode} fill className="object-contain" />
                </div>
              </div>
              <p className="font-mono text-xs text-neutral-400">{t.footer.social.wechatId}</p>
            </div>
          </div>

        </div>

        {/* Big wordmark */}
        <div className="mt-20 pt-10 border-t border-neutral-800">
          <span className="block font-display font-bold text-white/10 text-[14vw] leading-none tracking-tight select-none text-center">
            RENREN
          </span>
        </div>

        <div className="mt-8 text-center text-sm text-neutral-500 font-mono">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
