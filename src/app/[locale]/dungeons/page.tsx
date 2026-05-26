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
  const dungeons = dict.dungeons as Record<string, unknown>;
  return {
    title: dungeons.title as string,
    description: dungeons.subtitle as string,
  };
}

export default async function DungeonsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale: Locale = isValidLocale(localeParam) ? localeParam : defaultLocale;
  const dict = await getDictionary(locale);
  const dungeons = dict.dungeons as Record<string, unknown>;
  const sections = dungeons.sections as Record<string, { title: string; content: string[] }>;

  const guideSections = Object.entries(sections).map(([key, section]) => ({
    id: key,
    title: section.title,
    content: section.content,
  }));

  return (
    <GuideLayout
      title={dungeons.title as string}
      subtitle={dungeons.subtitle as string}
      sections={guideSections}
      version="v2.1.0"
      lastUpdated="2026-05-06"
      locale={locale}
      dict={dict}
    />
  );
}
