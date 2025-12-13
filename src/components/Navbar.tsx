"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Globe, Phone } from "lucide-react";
import { motion } from "framer-motion";

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "zh" : "en");
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50"
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">R</span>
          </div>
          <span className="text-xl font-bold text-slate-900 tracking-tight">RenRen Insurance</span>
        </div>

        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50"
          >
            <Globe className="w-4 h-4" />
            <span className="font-medium">{language === "en" ? "中文" : "English"}</span>
          </Button>
          
          <Button 
            className="hidden md:flex bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 shadow-lg shadow-blue-500/20"
          >
            {t.nav.getQuote}
          </Button>
          
          {/* Mobile Phone Icon */}
          <Button size="icon" className="md:hidden rounded-full bg-green-500 text-white">
            <Phone className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}

