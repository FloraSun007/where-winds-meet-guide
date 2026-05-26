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
  const systems = dict.systems as Record<string, unknown>;
  return {
    title: systems.title as string,
    description: systems.subtitle as string,
  };
}

export default async function SystemsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale: Locale = isValidLocale(localeParam) ? localeParam : defaultLocale;
  const dict = await getDictionary(locale);
  const systems = dict.systems as Record<string, unknown>;
  const sections = systems.sections as Record<string, { title: string; content: string[] }>;

  const guideSections = Object.entries(sections).map(([key, section]) => ({
    id: key,
    title: section.title,
    content: section.content,
  }));

  return (
    <GuideLayout
      title={systems.title as string}
      subtitle={systems.subtitle as string}
      sections={guideSections}
      version="v2.1.0"
      lastUpdated="2026-05-05"
      locale={locale}
      dict={dict}
    />
  );
}
