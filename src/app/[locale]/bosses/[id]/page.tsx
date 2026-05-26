import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary, isValidLocale, defaultLocale, type Locale } from "@/i18n";
import { bossGuides, t } from "@/content";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return bossGuides.map((boss) => ({ id: boss.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}): Promise<Metadata> {
  const { locale, id } = await params;
  const boss = bossGuides.find((b) => b.id === id);
  if (!boss) return {};
  const loc = isValidLocale(locale) ? locale : defaultLocale;
  return {
    title: `${t(boss.name, loc)} - Boss Guide`,
    description: `${t(boss.name, loc)} - ${t(boss.location, loc)}`,
  };
}

const typeLabels = {
  story: { en: "Story Boss", zh: "主线BOSS" },
  world: { en: "World Boss", zh: "世界BOSS" },
  dungeon: { en: "Dungeon Boss", zh: "副本BOSS" },
};

const attackTypeLabels = {
  red_light: { en: "Red Light (Parry)", zh: "红光（需卸式）" },
  yellow_light: { en: "Yellow Light (Dodge)", zh: "黄光（需闪避）" },
  aoe: { en: "AoE", zh: "范围攻击" },
  grab: { en: "Grab/Throw", zh: "投技/抓取" },
  buff: { en: "Buff Phase", zh: "增益阶段" },
  other: { en: "Special", zh: "特殊机制" },
};

export default async function BossDetailPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale: localeParam, id } = await params;
  const locale: Locale = isValidLocale(localeParam) ? localeParam : defaultLocale;
  const dict = await getDictionary(locale);
  const nav = dict.nav as Record<string, string>;

  const boss = bossGuides.find((b) => b.id === id);
  if (!boss) notFound();

  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <nav className="mb-6" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-stone-500">
          <li><Link href={`/${locale}`} className="hover:text-amber-400">{nav.home}</Link></li>
          <li className="text-stone-700">/</li>
          <li><Link href={`/${locale}/bosses`} className="hover:text-amber-400">{locale === "zh" ? "BOSS攻略" : "Boss Guides"}</Link></li>
          <li className="text-stone-700">/</li>
          <li className="text-stone-300">{t(boss.name, locale)}</li>
        </ol>
      </nav>

      <header className="mb-10">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-400 ring-1 ring-red-500/20">
            {t(typeLabels[boss.type], locale)}
          </span>
          <span className="rounded-full bg-stone-800 px-3 py-1 text-xs font-semibold text-stone-300">
            {locale === "zh" ? `难度 ${boss.difficulty}/10` : `Difficulty ${boss.difficulty}/10`}
          </span>
        </div>
        <h1 className="text-3xl font-bold text-amber-400 sm:text-4xl">{t(boss.name, locale)}</h1>
        <p className="mt-1 text-stone-400">{t(boss.location, locale)}</p>

        <div className="mt-6 rounded-xl border border-amber-900/20 bg-stone-900/50 p-6">
          <h2 className="mb-2 text-lg font-bold text-amber-400">{locale === "zh" ? "掉落奖励" : "Rewards"}</h2>
          <p className="text-stone-300">{t(boss.rewards, locale)}</p>
        </div>

        <div className="mt-4 rounded-xl border border-emerald-900/20 bg-emerald-900/10 p-6">
          <h2 className="mb-2 text-lg font-bold text-emerald-400">{locale === "zh" ? "核心要点" : "Key Tips"}</h2>
          <p className="text-stone-300">{t(boss.tips, locale)}</p>
        </div>
      </header>

      {boss.phases.map((phase, pIndex) => (
        <section key={pIndex} className="mb-10 rounded-xl border border-amber-900/20 bg-stone-900/50 p-6 sm:p-8">
          <h2 className="mb-6 text-xl font-bold text-amber-400 sm:text-2xl">
            {locale === "zh" ? `阶段 ${phase.phase}` : `Phase ${phase.phase}`}
          </h2>

          <div className="mb-6 rounded-lg border border-stone-800 bg-stone-950/50 p-4">
            <h3 className="mb-2 text-sm font-semibold text-stone-400 uppercase tracking-wider">
              {locale === "zh" ? "总体策略" : "Overall Strategy"}
            </h3>
            <p className="text-stone-300 leading-relaxed">{t(phase.strategy, locale)}</p>
          </div>

          <h3 className="mb-4 text-sm font-semibold text-stone-400 uppercase tracking-wider">
            {locale === "zh" ? "技能机制详解" : "Skill Mechanics"}
          </h3>
          <div className="space-y-4">
            {phase.mechanics.map((mech, mIndex) => (
              <div key={mIndex} className="rounded-lg border border-stone-800 bg-stone-950/50 p-4">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h4 className="font-semibold text-stone-200">{t(mech.name, locale)}</h4>
                  <span className="rounded px-2 py-0.5 text-xs bg-stone-800 text-stone-400">
                    {t(attackTypeLabels[mech.type], locale)}
                  </span>
                </div>
                <p className="mb-2 text-sm text-stone-400">{t(mech.description, locale)}</p>
                <div className="rounded bg-emerald-900/10 px-3 py-2">
                  <p className="text-sm text-emerald-400">
                    <span className="font-semibold">{locale === "zh" ? "应对：" : "Counter: "}</span>
                    {t(mech.counter, locale)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      <div className="mt-12">
        <h3 className="font-bold text-amber-400 mb-4">{locale === "zh" ? "其他BOSS" : "Other Bosses"}</h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {bossGuides.filter((b) => b.id !== id).slice(0, 6).map((b) => (
            <Link
              key={b.id}
              href={`/${locale}/bosses/${b.id}`}
              className="rounded-lg border border-stone-800 bg-stone-900/50 px-4 py-3 text-sm transition-colors hover:border-amber-600/40"
            >
              <p className="font-semibold text-stone-200">{t(b.name, locale)}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-stone-500">{t(b.location, locale)}</span>
                <span className="text-xs text-red-400">{b.difficulty}/10</span>
              </div>
            </Link>
          ))}
        </div>
        <p className="mt-4 text-center">
          <Link href={`/${locale}/bosses`} className="text-sm text-amber-400 hover:text-amber-300">
            {locale === "zh" ? "查看全部BOSS →" : "View All Bosses →"}
          </Link>
        </p>
      </div>
    </article>
  );
}
