import type { LucideIcon } from "lucide-react";
import Image from "next/image";

export function PageHeader({
  icon: Icon,
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
}: {
  icon?: LucideIcon;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
}) {
  const text = (
    <div>
      {(Icon || eyebrow) && (
        <div className="flex items-center gap-2 mb-5">
          {Icon && (
            <div className="w-8 h-8 border border-neutral-900 rounded-md flex items-center justify-center">
              <Icon className="w-4 h-4 text-neutral-950" />
            </div>
          )}
          {eyebrow && (
            <span className="font-mono text-xs font-medium text-neutral-500 uppercase tracking-wider">
              {eyebrow}
            </span>
          )}
        </div>
      )}
      <h1 className="font-display text-4xl md:text-5xl font-bold text-neutral-950 mb-4 tracking-tight leading-[1.05] text-balance">
        {title}
      </h1>
      {subtitle && <p className="text-lg md:text-xl text-neutral-600 max-w-2xl">{subtitle}</p>}
    </div>
  );

  if (!image) {
    return <div className="border-b border-neutral-900 pb-10 mb-10">{text}</div>;
  }

  return (
    <div className="border-b border-neutral-900 pb-10 mb-10 grid md:grid-cols-5 gap-8 items-center">
      <div className="md:col-span-3">{text}</div>
      <div className="md:col-span-2 relative aspect-[4/3] rounded-lg overflow-hidden border border-neutral-200">
        <Image src={image} alt={imageAlt ?? ""} fill className="object-cover" priority />
      </div>
    </div>
  );
}
