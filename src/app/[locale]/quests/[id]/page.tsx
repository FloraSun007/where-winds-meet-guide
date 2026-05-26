import { notFound } from "next/navigation";
import Link from "next/link";
import { ENCOUNTER_QUESTS } from "@/data/encounter-quests";
import { QUEST_STEPS } from "@/data/encounter-quest-steps";
import { STORY_QUESTS } from "@/data/story-quests";
import { STORY_QUEST_STEPS } from "@/data/story-quest-steps";

export function generateStaticParams() {
  const locales = ["en", "zh"];
  return locales.flatMap((locale) => [
    ...ENCOUNTER_QUESTS.map((q) => ({ locale, id: q.id })),
    ...STORY_QUESTS.map((q) => ({ locale, id: q.id })),
  ]);
}

export default async function QuestDetailPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  const isZh = locale === "zh";

  const encounter = ENCOUNTER_QUESTS.find((q) => q.id === id);
  const story = STORY_QUESTS.find((q) => q.id === id);

  if (!encounter && !story) notFound();

  const isEncounter = !!encounter;
  const quest = encounter || story!;
  const steps = isEncounter ? QUEST_STEPS[id] : STORY_QUEST_STEPS[id];
  const hasDetail = steps && steps.length > 0;

  const t = (field: { zh: string; en: string } | undefined) => {
    if (!field) return "";
    return isZh ? field.zh : field.en;
  };

  const tabKey = isEncounter ? "encounter" : "story";
  const tabLabel = isZh
    ? (isEncounter ? "奇遇" : "剧情攻略")
    : (isEncounter ? "Encounters" : "Story");
  const badgeText = isZh
    ? (isEncounter ? "奇遇任务" : (story?.badge || "剧情任务"))
    : (isEncounter ? "Encounter" : (story?.badgeEn || "Story Quest"));
  const badgeColor = isEncounter
    ? "bg-purple-500/15 text-purple-400"
    : "bg-emerald-500/15 text-emerald-400";

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      {/* 面包屑 */}
      <nav className="mb-6 flex items-center gap-2 text-sm text-stone-500">
        <Link href={`/${locale}/quests`} className="hover:text-amber-400 transition-colors">
          {isZh ? "任务攻略" : "Quest Guides"}
        </Link>
        <span>/</span>
        <Link href={`/${locale}/quests?tab=${tabKey}`} className="hover:text-amber-400 transition-colors">
          {tabLabel}
        </Link>
        <span>/</span>
        <span className="text-stone-300">{isZh ? quest.title : quest.titleEn}</span>
      </nav>

      {/* 标题区 */}
      <div className="mb-8 rounded-xl border border-stone-800 bg-stone-900/50 p-6">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${badgeColor}`}>
            {badgeText}
          </span>
          <span className="rounded-full bg-stone-800 px-3 py-1 text-xs text-stone-400">
            {isZh ? quest.region : quest.regionEn}
          </span>
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i} className={`text-sm ${i < quest.difficulty ? "text-amber-400" : "text-stone-700"}`}>★</span>
            ))}
          </div>
        </div>
        <h1 className="text-2xl font-bold text-amber-400 sm:text-3xl">
          {isZh ? quest.title : quest.titleEn}
        </h1>
        <p className="mt-3 text-stone-400 leading-relaxed">
          {isZh ? quest.summary : quest.summaryEn}
        </p>
        <div className="mt-4 rounded-lg bg-stone-800/50 px-4 py-2">
          <span className="text-sm text-amber-400/80">
            {isZh ? "奖励：" : "Rewards: "}{isZh ? quest.rewards : quest.rewardsEn}
          </span>
        </div>
      </div>

      {/* 攻略步骤 */}
      {hasDetail ? (
        <div>
          <h2 className="mb-6 text-xl font-bold text-stone-200">
            {isZh ? "攻略步骤" : "Walkthrough Steps"}
          </h2>
          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                {/* 步骤编号 + 文字 */}
                <div className="flex items-start gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-sm font-bold text-amber-400">
                    {i + 1}
                  </span>
                  <div className="flex-1">
                    <p className="text-stone-300 leading-relaxed">
                      {isZh ? step.text : step.textEn}
                    </p>
                  </div>
                </div>
                {/* 步骤图片 */}
                {step.images && step.images.length > 0 && (
                  <div className="mt-3 ml-11 space-y-3">
                    {step.images.map((src, j) => (
                      <div key={j} className="overflow-hidden rounded-lg border border-stone-800">
                        <img
                          src={src}
                          alt={`${isZh ? quest.title : quest.titleEn} - ${isZh ? "步骤" : "Step"} ${i + 1}`}
                          className="w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="rounded-xl border border-stone-800 bg-stone-900/30 p-8 text-center">
          <p className="text-stone-500">
            {isZh ? "该任务的详细攻略正在制作中，敬请期待。" : "Detailed guide for this quest is coming soon."}
          </p>
        </div>
      )}

      {/* 返回按钮 */}
      <div className="mt-10">
        <Link
          href={`/${locale}/quests?tab=${tabKey}`}
          className="inline-flex items-center gap-2 rounded-lg border border-stone-700 bg-stone-900/50 px-4 py-2 text-sm text-stone-400 transition-all hover:border-amber-600/30 hover:text-amber-400"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          {isZh ? "返回任务列表" : "Back to Quest List"}
        </Link>
      </div>
    </div>
  );
}
