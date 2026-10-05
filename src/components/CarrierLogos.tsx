interface LogoEntry {
  name: string;
  file: string;
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
  const height = size === "sm" ? "h-8 md:h-9" : "h-9 md:h-10";
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
      {logos.map((logo) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={logo.file}
          src={`${basePath}${logo.file}`}
          alt={logo.name}
          title={logo.name}
          className={`${height} w-auto max-w-[140px] object-contain`}
        />
      ))}
    </div>
  );
}
