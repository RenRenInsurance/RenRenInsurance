"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { CategoryIndexPage } from "@/components/CategoryIndexPage";

export default function BusinessPage() {
  const { t } = useLanguage();

  return (
    <CategoryIndexPage
      category="commercial"
      title={t.nav.menu.commercialInsurance}
      subtitle={t.services.businessDesc}
      image="/photos/business-office.jpg"
      imageAlt="Modern office building"
    />
  );
}
