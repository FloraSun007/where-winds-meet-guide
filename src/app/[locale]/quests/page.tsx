"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { ENCOUNTER_QUESTS } from "@/data/encounter-quests";
import { QUEST_STEPS } from "@/data/encounter-quest-steps";
import { STORY_QUESTS } from "@/data/story-quests";
import { STORY_QUEST_STEPS } from "@/data/story-quest-steps";

type RegionTab = "all" | "qinghe" | "liangzhou" | "hexi" | "hexi-qc" | "tianjing" | "kaifeng";
type TopTab = "popular" | "story" | "encounter";

interface CardItem {
  id: string;
  title: string;
  titleEn: string;
  badge: string;
  badgeEn: string;
  badgeColor: string;
  desc: string;
  descEn: string;
  clicks: number;
}

// Real story quests with walkthroughs from Ali213
const REAL_STORY_ITEMS: CardItem[] = STORY_QUESTS.map((q) => ({
  id: q.id,
  title: q.title,
  titleEn: q.titleEn,
  badge: q.badge,
  badgeEn: q.badgeEn,
  badgeColor: "bg-emerald-500/15 text-emerald-400",
  desc: q.summary,
  descEn: q.summaryEn,
  clicks: q.clicks,
}));

// Story items with walkthroughs only
const ALL_STORY_ITEMS: CardItem[] = REAL_STORY_ITEMS;

// Encounter quests as CardItems with click estimates
const ENCOUNTER_CARD_ITEMS: CardItem[] = ENCOUNTER_QUESTS.map((q, i) => ({
  id: q.id,
  title: q.title,
  titleEn: q.titleEn,
  badge: "奇遇",
  badgeEn: "Encounter",
  badgeColor: "bg-purple-500/15 text-purple-400",
  desc: q.summary,
  descEn: q.summaryEn,
  clicks: 5000 - i * 80,
}));

// Only quests with actual walkthrough content, sorted by clicks for "热门攻略"
const ENCOUNTERS_WITH_CONTENT: CardItem[] = ENCOUNTER_QUESTS
  .filter((q) => QUEST_STEPS[q.id]?.length > 0)
  .map((q, i, arr) => ({
    id: q.id,
    title: q.title,
    titleEn: q.titleEn,
    badge: "奇遇",
    badgeEn: "Encounter",
    badgeColor: "bg-purple-500/15 text-purple-400",
    desc: q.summary,
    descEn: q.summaryEn,
    clicks: 6000 - i * 200,
  }));

const ALL_QUEST_ITEMS: CardItem[] = [
  ...REAL_STORY_ITEMS,
  ...ENCOUNTERS_WITH_CONTENT,
].sort((a, b) => b.clicks - a.clicks);

const TOP_TABS: { key: TopTab; zh: string; en: string }[] = [
  { key: "popular", zh: "热门攻略", en: "Popular" },
  { key: "story", zh: "剧情攻略", en: "Story" },
  { key: "encounter", zh: "奇遇", en: "Encounters" },
];

const REGION_TABS: { key: RegionTab; zh: string; en: string }[] = [
  { key: "all", zh: "全部", en: "All" },
  { key: "qinghe", zh: "清河", en: "Qinghe" },
  { key: "kaifeng", zh: "开封", en: "Kaifeng" },
  { key: "liangzhou", zh: "凉州", en: "Liangzhou" },
  { key: "hexi", zh: "河西", en: "Hexi" },
  { key: "hexi-qc", zh: "河西·秦川", en: "Hexi-QC" },
  { key: "tianjing", zh: "天陉", en: "Tianjing" },
];

const regionMap: Record<string, RegionTab> = {
  "清河": "qinghe",
  "开封": "kaifeng",
  "凉州": "liangzhou",
  "河西": "hexi",
  "河西·秦川": "hexi-qc",
  "天陉": "tianjing",
};

function fuzzyMatch(text: string, query: string): boolean {
  const t = text.toLowerCase();
  const q = query.toLowerCase();
  if (t.includes(q)) return true;
  let qi = 0;
  for (let i = 0; i < t.length && qi < q.length; i++) {
    if (t[i] === q[qi]) qi++;
  }
  return qi === q.length;
}

export default function QuestsPage() {
  return (
    <Suspense>
      <QuestsContent />
    </Suspense>
  );
}

function QuestsContent() {
  const params = useParams();
  const locale = (params?.locale as string) || "zh";
  const isZh = locale === "zh";

  const urlParams = useSearchParams();
  const urlTab = urlParams.get("tab");

  const [topTab, setTopTab] = useState<TopTab>("popular");
  const [regionTab, setRegionTab] = useState<RegionTab>("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (urlTab === "story" || urlTab === "encounter" || urlTab === "popular") {
      setTopTab(urlTab);
    }
  }, [urlTab]);

  const filteredEncounters = useMemo(() => {
    let list = ENCOUNTER_QUESTS;
    if (regionTab !== "all") {
      list = list.filter((q) => regionMap[q.region] === regionTab);
    }
    if (search.trim()) {
      list = list.filter(
        (q) => fuzzyMatch(q.title, search) || fuzzyMatch(q.summary, search) || (q.titleEn && fuzzyMatch(q.titleEn, search))
      );
    }
    return list;
  }, [regionTab, search]);

  const getRegionCount = (r: RegionTab) => {
    if (r === "all") return ENCOUNTER_QUESTS.length;
    return ENCOUNTER_QUESTS.filter((q) => regionMap[q.region] === r).length;
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      {/* 页面标题 */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-amber-400 sm:text-4xl">
          {isZh ? "任务攻略" : "Quest Guides"}
        </h1>
        <p className="mt-3 text-lg text-stone-400">
          {isZh
            ? "主线剧情、支线任务和奇遇任务的完整图文攻略。"
            : "Complete walkthroughs for story, side quests, and encounters."}
        </p>
      </div>

      {/* 搜索框 */}
      <div className="mb-6">
        <div className="relative">
          <svg className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={isZh ? "搜索任务名称、关键词..." : "Search quest name, keyword..."}
            className="w-full rounded-xl border border-stone-700 bg-stone-900/50 py-3 pl-11 pr-4 text-sm text-stone-200 placeholder-stone-600 focus:border-amber-600/50 focus:outline-none"
          />
        </div>
      </div>

      {/* 顶部3个标签 */}
      <div className="mb-6 flex gap-1 rounded-xl bg-stone-900/60 border border-stone-800 p-1">
        {TOP_TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => { setTopTab(tab.key); setSearch(""); }}
            className={`flex-1 rounded-lg py-2.5 text-sm font-medium transition-all ${
              topTab === tab.key
                ? "bg-amber-500/15 text-amber-400 shadow-sm"
                : "text-stone-500 hover:text-stone-300"
            }`}
          >
            {isZh ? tab.zh : tab.en}
          </button>
        ))}
      </div>

      {/* ── 热门攻略 ── */}
      {topTab === "popular" && (
        <div className="grid gap-4 sm:grid-cols-2">
          {ALL_QUEST_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={`/${locale}/quests/${item.id}`}
              className="group rounded-xl border border-stone-800 bg-stone-900/50 p-5 transition-all hover:border-amber-600/30 hover:shadow-lg hover:shadow-amber-900/5"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${item.badgeColor}`}>
                  {isZh ? item.badge : item.badgeEn}
                </span>
              </div>
              <h3 className="text-base font-bold text-stone-100 group-hover:text-amber-400 transition-colors">
                {isZh ? item.title : item.titleEn}
              </h3>
              <p className="mt-2 text-sm text-stone-500 leading-relaxed line-clamp-2">
                {isZh ? item.desc : item.descEn}
              </p>
            </Link>
          ))}
        </div>
      )}

      {/* ── 剧情攻略 ── */}
      {topTab === "story" && (
        <div className="space-y-3">
          {ALL_STORY_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={`/${locale}/quests/${item.id}`}
              className="group block rounded-xl border border-stone-800 bg-stone-900/50 p-4 transition-all hover:border-amber-600/30"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${item.badgeColor}`}>
                      {isZh ? item.badge : item.badgeEn}
                    </span>
                    <h3 className="text-sm font-bold text-stone-100 group-hover:text-amber-400 transition-colors truncate">
                      {isZh ? item.title : item.titleEn}
                    </h3>
                  </div>
                  <p className="text-xs text-stone-500 leading-relaxed line-clamp-1">
                    {isZh ? item.desc : item.descEn}
                  </p>
                </div>
                <svg className="h-4 w-4 shrink-0 text-stone-600 group-hover:text-amber-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* ── 奇遇 ── */}
      {topTab === "encounter" && (
        <>
          {/* 区域子标签 */}
          <div className="mb-5 flex gap-2 overflow-x-auto">
            {REGION_TABS.map((r) => (
              <button
                key={r.key}
                onClick={() => setRegionTab(r.key)}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all whitespace-nowrap ${
                  regionTab === r.key
                    ? "bg-purple-500/15 text-purple-400 border border-purple-500/30"
                    : "bg-stone-900/50 text-stone-500 border border-stone-800 hover:text-stone-300"
                }`}
              >
                {isZh ? r.zh : r.en}
                <span className="ml-1 text-stone-600">({getRegionCount(r.key)})</span>
              </button>
            ))}
          </div>

          {filteredEncounters.length === 0 ? (
            <div className="py-12 text-center text-stone-500">
              {isZh ? "未找到匹配的奇遇" : "No matching encounters found"}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {filteredEncounters.map((q) => (
                <Link
                  key={q.id}
                  href={`/${locale}/quests/${q.id}`}
                  className="group rounded-lg border border-stone-700 bg-stone-900/60 px-4 py-3 text-center transition-all hover:border-amber-600/40 hover:bg-stone-800/80"
                >
                  <span className="block text-sm text-stone-200 group-hover:text-amber-400 transition-colors truncate">
                    {isZh ? q.title : q.titleEn}
                  </span>
                  <span className="block mt-1 text-xs text-stone-600">{isZh ? q.region : q.regionEn}</span>
                  {q.difficulty > 1 && (
                    <span className="mt-1 inline-flex gap-px">
                      {Array.from({ length: q.difficulty }, (_, i) => (
                        <span key={i} className="text-[10px] text-amber-400">★</span>
                      ))}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
