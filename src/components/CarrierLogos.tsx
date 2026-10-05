"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowUpRight } from "lucide-react";

interface LogoEntry {
  name: string;
  file: string;
  link?: string;
}

export function CarrierLogos({
  basePath,
  logos,
  size = "md",
}: {
  basePath: string;
  logos: LogoEntry[];
  size?: "sm" | "md";
}) {
  const { language } = useLanguage();
  const height = size === "sm" ? "h-8 md:h-9" : "h-9 md:h-10";
  const quoteLabel = language === "zh" ? "立即報價" : "Get a Quote";

  return (
    <div className="flex flex-wrap items-start justify-center gap-x-10 gap-y-6">
      {logos.map((logo) => {
        // eslint-disable-next-line @next/next/no-img-element
        const img = (
          <img
            src={`${basePath}${logo.file}`}
            alt={logo.name}
            title={logo.name}
            className={`${height} w-auto max-w-[140px] object-contain`}
          />
        );
        if (!logo.link) {
          return <div key={logo.file}>{img}</div>;
        }
        return (
          <a
            key={logo.file}
            href={logo.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2"
          >
            {img}
            <span className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-neutral-500 group-hover:text-neutral-950 transition-colors">
              {quoteLabel}
              <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>
        );
      })}
    </div>
  );
}
