import type { Metadata } from "next";
import { getDictionary, isValidLocale, defaultLocale, type Locale } from "@/i18n";
import ClassCard, { type ClassData } from "@/components/ClassCard";
import AdBanner from "@/components/AdBanner";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(isValidLocale(locale) ? locale : defaultLocale);
  const classes = dict.classes as Record<string, unknown>;
  return {
    title: classes.title as string,
    description: classes.subtitle as string,
  };
}

export default async function ClassesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale: Locale = isValidLocale(localeParam) ? localeParam : defaultLocale;
  const dict = await getDictionary(locale);
  const classes = dict.classes as Record<string, unknown>;
  const classList = classes.classList as Record<string, ClassData>;

  const classKeys = ["swordsman", "spearmaster", "healer", "blademaster", "brawler"];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-amber-400 sm:text-4xl">
          {classes.title as string}
        </h1>
        <p className="mt-2 text-lg text-stone-400">
          {classes.subtitle as string}
        </p>
      </div>

      <AdBanner slot="top" />

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {classKeys.map((key) => (
          <ClassCard
            key={key}
            classKey={key}
            classData={classList[key]}
            locale={locale}
          />
        ))}
      </div>

      <div className="mt-8">
        <AdBanner slot="middle" />
      </div>

      <div className="mt-8">
        <AdBanner slot="bottom" />
      </div>
    </div>
  );
}
