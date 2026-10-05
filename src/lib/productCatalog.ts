import {
  HardHat,
  ShieldCheck,
  Package,
  Users,
  Hammer,
  Briefcase,
  Warehouse,
  Truck,
  HeartPulse,
  Smile,
  Eye,
  HeartHandshake,
  Accessibility,
  PiggyBank,
  TrendingUp,
  Wallet,
  Landmark,
  Umbrella,
  Globe,
  Stamp,
  FileText,
  BadgeCheck,
  HandCoins,
  Calculator,
  ClipboardList,
  Scale,
  type LucideIcon,
} from "lucide-react";

export type ProductCategory = "commercial" | "asset" | "personal" | "other";

interface CatalogEntry {
  icon: LucideIcon;
  category: ProductCategory;
}

const RAW_CATALOG: Record<string, CatalogEntry> = {
  // Commercial Insurance (/business/[slug])
  "workers-comp": { icon: HardHat, category: "commercial" },
  "general-liability": { icon: ShieldCheck, category: "commercial" },
  "product-liability": { icon: Package, category: "commercial" },
  epli: { icon: Users, category: "commercial" },
  construction: { icon: Hammer, category: "commercial" },
  eo: { icon: Briefcase, category: "commercial" },
  "commercial-property": { icon: Warehouse, category: "commercial" },
  "commercial-auto": { icon: Truck, category: "commercial" },
  "group-health": { icon: HeartPulse, category: "commercial" },
  "group-dental": { icon: Smile, category: "commercial" },
  "group-vision": { icon: Eye, category: "commercial" },
  "group-life": { icon: HeartHandshake, category: "commercial" },
  "group-disability": { icon: Accessibility, category: "commercial" },
  "group-ira": { icon: PiggyBank, category: "commercial" },
  "group-401k": { icon: TrendingUp, category: "commercial" },
  fsa: { icon: Wallet, category: "commercial" },

  // Life Insurance & Retirement (/asset/[slug])
  ira: { icon: PiggyBank, category: "asset" },
  "sep-ira": { icon: Landmark, category: "asset" },

  // Personal Insurance (/personal/umbrella)
  umbrella: { icon: Umbrella, category: "personal" },

  // Other Services (/services/[slug])
  immigration: { icon: Globe, category: "other" },
  notarization: { icon: Stamp, category: "other" },
  consulate: { icon: Landmark, category: "other" },
  visas: { icon: FileText, category: "other" },
  ssa: { icon: BadgeCheck, category: "other" },
  sse: { icon: HandCoins, category: "other" },
  ihss: { icon: HeartHandshake, category: "other" },
  tax: { icon: Calculator, category: "other" },
  unemployment: { icon: ClipboardList, category: "other" },
  trust: { icon: Scale, category: "other" },
};

const SLUGS = Object.keys(RAW_CATALOG);

export function getProductMeta(slug: string) {
  return RAW_CATALOG[slug] ?? null;
}

export function getSlugsForCategory(category: ProductCategory): string[] {
  return SLUGS.filter((slug) => RAW_CATALOG[slug].category === category);
}
