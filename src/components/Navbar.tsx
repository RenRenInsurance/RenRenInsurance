"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Globe, Menu, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import React, { useState, useRef, useEffect } from "react";

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isHomeOpen, setIsHomeOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "zh" : "en");
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsHomeOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinks = [
    { label: t.nav.business, href: "/business" },
    { label: t.nav.appointment, href: "/appointment" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50"
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">R</span>
          </div>
          <span className="text-xl font-bold text-slate-900 tracking-tight">RenRen Insurance</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 relative" ref={dropdownRef}>
           {/* Home Dropdown Trigger */}
           <div>
             <button 
               onClick={() => setIsHomeOpen(!isHomeOpen)}
               className={cn(
                 "flex items-center gap-1 font-medium transition-all duration-200 px-4 py-2 rounded-md outline-none",
                 isHomeOpen 
                   ? "bg-blue-600 text-white shadow-md" 
                   : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
               )}
             >
               {t.nav.home}
               <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", isHomeOpen && "rotate-180")} />
             </button>

             {/* Dropdown Content */}
             <AnimatePresence>
               {isHomeOpen && (
                 <motion.div
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: 10 }}
                   transition={{ duration: 0.2 }}
                   className="absolute top-full left-0 mt-4 w-[600px] bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden"
                 >
                    <div className="p-6 grid grid-cols-2 gap-8">
                       {/* Column 1: Personal & Family */}
                       <div>
                          <h4 className="font-bold text-slate-900 mb-4 text-lg border-b border-slate-100 pb-2">
                             {t.nav.menu.personalFamily}
                          </h4>
                          <ul className="space-y-3">
                             {[
                               { href: "/personal/health", label: t.nav.menu.individualHealth },
                               { href: "/personal/medicare", label: t.nav.menu.medicare },
                               { href: "/personal/dental-vision", label: t.nav.menu.dentalVision },
                               { href: "/personal/auto", label: t.nav.menu.auto },
                               { href: "/personal/home", label: t.nav.menu.home },
                               { href: "/personal/pet", label: t.nav.menu.pet },
                               { href: "/personal/life", label: t.nav.menu.life },
                               { href: "/personal/travel", label: t.nav.menu.travel },
                               { href: "/personal/retirement", label: t.nav.menu.annuityRetirement },
                             ].map((item) => (
                               <li key={item.href}>
                                 <Link 
                                   href={item.href} 
                                   className="block text-slate-600 hover:text-blue-600 hover:bg-slate-50 px-2 py-1 rounded transition-colors"
                                   onClick={() => setIsHomeOpen(false)}
                                 >
                                   {item.label}
                                 </Link>
                               </li>
                             ))}
                          </ul>
                       </div>

                       {/* Column 2: Enterprise & Group */}
                       <div>
                          <h4 className="font-bold text-slate-900 mb-4 text-lg border-b border-slate-100 pb-2">
                             {t.nav.menu.enterpriseGroup}
                          </h4>
                           <ul className="space-y-3">
                             {[
                               { href: "/business/benefits", label: t.nav.menu.employeeBenefits },
                               { href: "/business/commercial", label: t.nav.menu.commercial },
                             ].map((item) => (
                               <li key={item.href}>
                                 <Link 
                                   href={item.href} 
                                   className="block text-slate-600 hover:text-blue-600 hover:bg-slate-50 px-2 py-1 rounded transition-colors"
                                   onClick={() => setIsHomeOpen(false)}
                                 >
                                   {item.label}
                                 </Link>
                               </li>
                             ))}
                          </ul>
                       </div>
                    </div>
                 </motion.div>
               )}
             </AnimatePresence>
           </div>
              
           {/* Other Links */}
           {navLinks.map((link) => (
             <Link 
               key={link.label}
               href={link.href} 
               className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
             >
                {link.label}
             </Link>
           ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50"
          >
            <Globe className="w-4 h-4" />
            <span className="font-medium">{language === "en" ? "中文" : "English"}</span>
          </Button>
          
          <Link href="/quote">
            <Button 
              className="hidden md:flex bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 shadow-lg shadow-blue-500/20"
            >
              {t.nav.getQuote}
            </Button>
          </Link>
          
          {/* Mobile Actions */}
          <div className="flex md:hidden gap-2">
             <Button size="icon" variant="ghost">
               <Menu className="w-5 h-5" />
             </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
