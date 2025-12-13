"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Phone, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Column 1: Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-blue-500 mb-4">{t.footer.contact.title}</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              {t.footer.contact.desc}
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white" />
                <span>{t.footer.contact.tollFree}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white" />
                <span>{t.footer.contact.caLine}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white" />
                <span>{t.footer.contact.norCalLine}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white" />
                <a href="mailto:info@kcal.net" className="hover:text-blue-400 transition-colors">
                  {t.footer.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Social Media */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-blue-500 mb-4">{t.footer.social.title}</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              {t.footer.social.desc}
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                 <span className="text-white font-semibold">WeChat ID:</span>
                 <span className="text-slate-300">KCAL3331111</span>
              </div>
              
              {/* QR Code Placeholder */}
              <div className="w-32 h-32 bg-white p-2 rounded-lg">
                <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400 text-xs text-center border-2 border-dashed border-slate-300">
                   QR Code
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Newsletter */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-blue-500 mb-4">{t.footer.newsletter.title}</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">
                  {t.footer.newsletter.emailLabel} <span className="text-red-500">*</span>
                </label>
                <Input 
                  type="email" 
                  placeholder="name@example.com" 
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus:ring-blue-500"
                />
              </div>
              <Button className="w-full bg-slate-800 hover:bg-slate-700 text-white border border-slate-600">
                {t.footer.newsletter.subscribe}
              </Button>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 text-center text-sm text-slate-500">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

