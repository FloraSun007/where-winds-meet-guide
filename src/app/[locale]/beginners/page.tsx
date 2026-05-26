import type { Metadata } from "next";
import { getDictionary, isValidLocale, defaultLocale, type Locale } from "@/i18n";
import GuideLayout from "@/components/GuideLayout";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(isValidLocale(locale) ? locale : defaultLocale);
  const beginners = dict.beginners as Record<string, unknown>;
  return {
    title: beginners.title as string,
    description: beginners.subtitle as string,
  };
}

export default async function BeginnersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale: Locale = isValidLocale(localeParam) ? localeParam : defaultLocale;
  const dict = await getDictionary(locale);
  const beginners = dict.beginners as Record<string, unknown>;
  const sections = beginners.sections as Record<string, { title: string; content: string[] }>;

  const guideSections = Object.entries(sections).map(([key, section]) => ({
    id: key,
    title: section.title,
    content: section.content,
  }));

  return (
    <GuideLayout
      title={beginners.title as string}
      subtitle={beginners.subtitle as string}
      sections={guideSections}
      version="v2.1.0"
      lastUpdated="2026-05-10"
      locale={locale}
      dict={dict}
    />
  );
}
