"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { CategoryIndexPage } from "@/components/CategoryIndexPage";

export default function OtherServicesPage() {
  const { t } = useLanguage();

  return (
    <CategoryIndexPage
      category="other"
      title={t.nav.menu.otherServices}
      subtitle={t.otherServices.subtitle}
      image="/photos/services-help.jpg"
      imageAlt="Consultant helping a client"
    />
  );
}
