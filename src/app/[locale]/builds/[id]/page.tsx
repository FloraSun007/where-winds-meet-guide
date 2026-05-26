import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary, isValidLocale, defaultLocale, type Locale } from "@/i18n";
import { buildGuides, t } from "@/content";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return buildGuides.map((build) => ({ id: build.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}): Promise<Metadata> {
  const { locale, id } = await params;
  const build = buildGuides.find((b) => b.id === id);
  if (!build) return {};
  const loc = isValidLocale(locale) ? locale : defaultLocale;
  return {
    title: `${t(build.name, loc)} - ${t(build.role, loc)}`,
    description: t(build.overview, loc),
  };
}

export default async function BuildDetailPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale: localeParam, id } = await params;
  const locale: Locale = isValidLocale(localeParam) ? localeParam : defaultLocale;
  const dict = await getDictionary(locale);
  const nav = dict.nav as Record<string, string>;
  const guideDict = (dict.guide ?? {}) as Record<string, string>;

  const build = buildGuides.find((b) => b.id === id);
  if (!build) notFound();

  const sections = [
    { title: locale === "zh" ? "核心机制" : "Core Mechanics", items: build.coreMechanics },
    { title: locale === "zh" ? "技能加点优先级" : "Skill Priority", items: build.skillPriority },
    { title: locale === "zh" ? "连招教学" : "Combo Guide", items: build.comboGuide },
    { title: locale === "zh" ? "前期成长路线" : "Early Progression", items: build.earlyProgression },
    { title: locale === "zh" ? "推荐装备" : "Recommended Gear", items: build.recommendedGear },
    { title: locale === "zh" ? "进阶技巧" : "Advanced Tips", items: build.tips },
  ];

  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <nav className="mb-6" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-stone-500">
          <li><Link href={`/${locale}`} className="hover:text-amber-400">{nav.home}</Link></li>
          <li className="text-stone-700">/</li>
          <li><Link href={`/${locale}/builds`} className="hover:text-amber-400">{locale === "zh" ? "流派攻略" : "Builds"}</Link></li>
          <li className="text-stone-700">/</li>
          <li className="text-stone-300">{t(build.name, locale)}</li>
        </ol>
      </nav>

      <header className="mb-10">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400 ring-1 ring-amber-500/20">
            {build.tier}
          </span>
          <span className="rounded-full bg-stone-800 px-3 py-1 text-xs font-semibold text-stone-300">
            {t(build.role, locale)}
          </span>
        </div>
        <h1 className="text-3xl font-bold text-amber-400 sm:text-4xl">{t(build.name, locale)}</h1>
        <p className="mt-1 text-lg text-stone-400">{t(build.subtitle, locale)}</p>

        <div className="mt-4 flex gap-4">
          <div className="rounded-lg border border-stone-800 bg-stone-900/50 px-4 py-2">
            <p className="text-xs text-stone-500">{locale === "zh" ? "主武器" : "Primary"}</p>
            <p className="text-sm font-semibold text-stone-200">{t(build.weapons.primary, locale)}</p>
          </div>
          <div className="rounded-lg border border-stone-800 bg-stone-900/50 px-4 py-2">
            <p className="text-xs text-stone-500">{locale === "zh" ? "副武器" : "Secondary"}</p>
            <p className="text-sm font-semibold text-stone-200">{t(build.weapons.secondary, locale)}</p>
          </div>
        </div>

        <p className="mt-6 text-stone-300 leading-relaxed">{t(build.overview, locale)}</p>
      </header>

      <div className="space-y-10">
        {sections.map((section, index) => (
          <section key={index} className="rounded-xl border border-amber-900/20 bg-stone-900/50 p-6 sm:p-8">
            <h2 className="mb-4 text-xl font-bold text-amber-400 sm:text-2xl">{section.title}</h2>
            <ol className="space-y-3">
              {(section.items[locale] ?? section.items.en).map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-xs font-bold text-amber-400">
                    {i + 1}
                  </span>
                  <p className="text-stone-300 leading-relaxed">{item}</p>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>

      <div className="mt-12 rounded-xl border border-amber-600/30 bg-amber-900/10 p-6">
        <h3 className="font-bold text-amber-400">{locale === "zh" ? "其他流派" : "Other Builds"}</h3>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {buildGuides.filter((b) => b.id !== id).map((b) => (
            <Link
              key={b.id}
              href={`/${locale}/builds/${b.id}`}
              className="rounded-lg border border-stone-800 bg-stone-900/50 px-4 py-3 text-sm transition-colors hover:border-amber-600/40"
            >
              <p className="font-semibold text-stone-200">{t(b.name, locale)}</p>
              <p className="text-xs text-stone-500">{t(b.role, locale)}</p>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
