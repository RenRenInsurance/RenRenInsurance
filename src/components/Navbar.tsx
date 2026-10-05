"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Globe, Menu, ChevronDown, ChevronRight, Phone, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import React, { useState, useRef, useEffect } from "react";

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "zh" : "en");
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
        setHoveredCategory(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDropdownClick = (menu: string) => {
    if (activeDropdown === menu) {
      setActiveDropdown(null);
      setHoveredCategory(null);
    } else {
      setActiveDropdown(menu);
      setHoveredCategory('personal'); // Default to first category
    }
  };

  const categories = [
    { key: 'personal', label: t.nav.menu.personalInsurance },
    { key: 'commercial', label: t.nav.menu.commercialInsurance },
    { key: 'asset', label: t.nav.menu.lifeRetirement },
    { key: 'immigration', label: t.nav.menu.immigrationServices },
    { key: 'other', label: t.nav.menu.otherServices },
  ];

  const getCategoryItems = (key: string) => {
    if (key === 'personal') return t.nav.menu.personalItems || [];
    if (key === 'commercial') return t.nav.menu.commercialItems || [];
    if (key === 'asset') return t.nav.menu.assetItems || [];
    if (key === 'immigration') return t.nav.menu.immigrationItems || [];
    if (key === 'other') return t.nav.menu.otherServicesItems || [];
    return [];
  };

  const navLinkClass =
    "relative text-neutral-600 hover:text-neutral-950 font-medium transition-colors text-sm xl:text-[15px] px-3 py-2 after:absolute after:left-3 after:right-3 after:bottom-0 after:h-px after:bg-neutral-950 after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200";

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-stone-50/95 backdrop-blur-sm border-b border-neutral-900"
    >
      <div className="w-full h-20 flex items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 z-50">
          <div className="w-10 h-10 bg-neutral-950 rounded-md flex items-center justify-center flex-shrink-0">
            <span className="text-white font-display font-bold text-xl">R</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-display font-bold text-neutral-950 tracking-tight">人人保险</span>
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">RenRen Insurance</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2 relative" ref={dropdownRef}>

           {/* Home */}
           <Link href="/" className={navLinkClass}>
              {t.nav.home}
           </Link>

           {/* Combined Services Dropdown */}
           <div className="relative">
             <button
               onClick={() => handleDropdownClick('services')}
               className={cn(
                 "flex items-center gap-1 font-medium transition-all duration-200 px-3 py-2 rounded-md outline-none text-sm xl:text-[15px]",
                 activeDropdown === 'services'
                   ? "bg-neutral-950 text-white"
                   : "text-neutral-600 hover:text-neutral-950"
               )}
             >
               {t.nav.services}
               <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", activeDropdown === 'services' && "rotate-180")} />
             </button>

             <AnimatePresence>
               {activeDropdown === 'services' && (
                 <motion.div
                   initial={{ opacity: 0, y: 8 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: 8 }}
                   transition={{ duration: 0.15 }}
                   className="absolute top-full left-0 mt-3 w-[800px] bg-white rounded-lg shadow-xl border border-neutral-900 overflow-hidden z-50 max-h-[80vh] flex flex-col"
                 >
                    <div className="flex flex-1 overflow-hidden">
                       {/* Left Column - Main Categories */}
                       <div className="w-1/3 bg-stone-50 border-r border-neutral-200 overflow-y-auto">
                          <div className="p-2">
                             {categories.map((category) => {
                                const items = getCategoryItems(category.key);
                                const hasItems = items.length > 0;
                                return (
                                  <div
                                     key={category.key}
                                     onMouseEnter={() => hasItems && setHoveredCategory(category.key)}
                                     className={cn(
                                       "px-4 py-3 cursor-pointer transition-colors rounded-md",
                                       hoveredCategory === category.key ? "bg-neutral-950" : "hover:bg-neutral-100",
                                       !hasItems && "opacity-50"
                                     )}
                                  >
                                     <div className="flex items-center justify-between">
                                        <span className={cn(
                                          "font-medium text-sm",
                                          hoveredCategory === category.key ? "text-white" : "text-neutral-700"
                                        )}>
                                          {category.label}
                                        </span>
                                        {hasItems && (
                                          <ChevronRight className={cn("w-4 h-4", hoveredCategory === category.key ? "text-white" : "text-neutral-400")} />
                                        )}
                                     </div>
                                  </div>
                                );
                             })}
                          </div>
                       </div>

                       {/* Right Column - Sub-items */}
                       <div className="w-2/3 bg-white p-6 overflow-y-auto">
                          <AnimatePresence mode="wait">
                             {hoveredCategory && getCategoryItems(hoveredCategory).length > 0 && (
                                <motion.div
                                   key={hoveredCategory}
                                   initial={{ opacity: 0, x: 8 }}
                                   animate={{ opacity: 1, x: 0 }}
                                   exit={{ opacity: 0, x: 8 }}
                                   className="space-y-0"
                                >
                                   {getCategoryItems(hoveredCategory).map((item: { label: string; href: string }) => (
                                      <Link
                                         key={item.href}
                                         href={item.href}
                                         className="flex items-center justify-between px-4 py-2.5 text-neutral-600 hover:text-neutral-950 hover:bg-stone-50 rounded transition-colors border-b border-neutral-100 last:border-0 group"
                                         onClick={() => { setActiveDropdown(null); setHoveredCategory(null); }}
                                      >
                                         {item.label}
                                         <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                      </Link>
                                   ))}
                                </motion.div>
                             )}

                             {!hoveredCategory && (
                                <motion.div
                                   key="default"
                                   initial={{ opacity: 0 }}
                                   animate={{ opacity: 1 }}
                                   exit={{ opacity: 0 }}
                                   className="text-neutral-400 text-center py-8 font-mono text-sm uppercase tracking-wide"
                                >
                                   {language === 'zh' ? '請選擇一個類別' : 'Select a category'}
                                </motion.div>
                             )}
                          </AnimatePresence>
                       </div>
                    </div>
                 </motion.div>
               )}
             </AnimatePresence>
           </div>

           {/* About RenRen */}
           <Link href="/about" className={navLinkClass}>
              {t.nav.about}
           </Link>

           {/* Appointment */}
           <Link href="/appointment" className={navLinkClass}>
              {t.nav.appointment}
           </Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${t.homeContact.hotlineNumber.replace(/-/g, "")}`}
            className="hidden xl:flex items-center gap-2 text-neutral-600 hover:text-neutral-950 font-mono text-sm transition-colors"
          >
            <Phone className="w-4 h-4" />
            {t.homeContact.hotlineNumber}
          </a>

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 text-neutral-700 hover:text-neutral-950 hover:border-neutral-950 border border-neutral-300 rounded-md px-3 py-1.5 text-sm transition-colors"
          >
            <Globe className="w-3.5 h-3.5" />
            <span className="font-medium">{language === "en" ? "中文" : "EN"}</span>
          </button>

          <Link href="/quote">
            <span className="hidden lg:inline-flex items-center gap-1.5 bg-neutral-950 hover:bg-neutral-800 text-white rounded-md px-5 py-2.5 text-sm font-semibold transition-colors group">
              {t.nav.getQuote}
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>

          {/* Mobile Actions */}
          <div className="flex lg:hidden gap-2">
             <button className="p-2 text-neutral-700">
               <Menu className="w-5 h-5" />
             </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
