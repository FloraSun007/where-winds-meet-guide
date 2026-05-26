import type { Metadata } from "next";
import Link from "next/link";
import { isValidLocale, defaultLocale, type Locale } from "@/i18n";
import { bossGuides, dungeonGuides, t } from "@/content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc = isValidLocale(locale) ? locale : defaultLocale;
  return {
    title: loc === "zh" ? "BOSS攻略 - 全BOSS打法详解" : "Boss Guides - All Boss Strategies",
    description: loc === "zh"
      ? "燕云十六声全BOSS详细攻略，包含主线BOSS、世界BOSS、副本BOSS的技能机制和应对策略"
      : "Complete boss guides for Where Winds Meet including story, world, and dungeon bosses with mechanics and strategies",
  };
}

const typeFilters = ["story", "world", "dungeon"] as const;

const typeLabels = {
  story: { en: "Story Bosses", zh: "主线BOSS" },
  world: { en: "World Bosses", zh: "世界BOSS" },
  dungeon: { en: "Dungeon Bosses", zh: "副本BOSS" },
};

const difficultyColors: Record<string, string> = {
  easy: "text-emerald-400 bg-emerald-500/10",
  medium: "text-amber-400 bg-amber-500/10",
  hard: "text-red-400 bg-red-500/10",
};

function getDifficultyClass(d: number): string {
  if (d <= 4) return difficultyColors.easy;
  if (d <= 7) return difficultyColors.medium;
  return difficultyColors.hard;
}

export default async function BossesListPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale: Locale = isValidLocale(localeParam) ? localeParam : defaultLocale;

  const grouped = typeFilters.map((type) => ({
    type,
    label: t(typeLabels[type], locale),
    bosses: bossGuides.filter((b) => b.type === type).sort((a, b) => a.difficulty - b.difficulty),
  }));

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-amber-400 sm:text-4xl">
          {locale === "zh" ? "BOSS攻略大全" : "Complete Boss Guides"}
        </h1>
        <p className="mt-3 text-lg text-stone-400">
          {locale === "zh"
            ? "包含主线BOSS、世界BOSS、副本BOSS的技能机制详解与应对策略"
            : "Detailed mechanics breakdown and strategies for all story, world, and dungeon bosses"}
        </p>
      </div>

      {/* Dungeons Section */}
      {dungeonGuides.length > 0 && (
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-amber-400">
            {locale === "zh" ? "副本攻略" : "Dungeon Raids"}
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {dungeonGuides.map((dungeon) => (
              <div key={dungeon.id} className="rounded-xl border border-amber-600/30 bg-amber-900/5 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="rounded-full bg-amber-500/10 px-2 py-0.5 text-xs font-semibold text-amber-400">
                    {dungeon.type === "5man" ? "5" : "10"}{locale === "zh" ? "人本" : "-Man"}
                  </span>
                  <h3 className="text-lg font-bold text-stone-100">{t(dungeon.name, locale)}</h3>
                </div>
                <p className="text-sm text-stone-400 mb-3">{t(dungeon.overview, locale)}</p>
                <p className="text-xs text-stone-500 mb-3">
                  {locale === "zh" ? "队伍配置：" : "Team: "}{t(dungeon.teamComp, locale)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {dungeon.bosses.map((bossId) => {
                    const boss = bossGuides.find((b) => b.id === bossId);
                    return boss ? (
                      <Link
                        key={bossId}
                        href={`/${locale}/bosses/${bossId}`}
                        className="rounded border border-stone-700 px-2 py-1 text-xs text-stone-300 hover:border-amber-600/40 hover:text-amber-400 transition-colors"
                      >
                        {t(boss.name, locale)}
                      </Link>
                    ) : null;
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Boss Lists by Type */}
      {grouped.map((group) => (
        <section key={group.type} className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-amber-400">{group.label}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {group.bosses.map((boss) => (
              <Link
                key={boss.id}
                href={`/${locale}/bosses/${boss.id}`}
                className="group rounded-xl border border-stone-800 bg-stone-900/50 p-5 transition-all hover:border-amber-600/40"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-stone-100 group-hover:text-amber-400 transition-colors">
                    {t(boss.name, locale)}
                  </h3>
                  <span className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-bold ${getDifficultyClass(boss.difficulty)}`}>
                    {boss.difficulty}/10
                  </span>
                </div>
                <p className="text-xs text-stone-500 mb-2">{t(boss.location, locale)}</p>
                <p className="text-sm text-stone-400 line-clamp-2">{t(boss.tips, locale)}</p>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
