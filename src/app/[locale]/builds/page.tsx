"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

interface BuildItem {
  id: string;
  title: { en: string; zh: string };
  subtitle: { en: string; zh: string };
  school: string;
  weapons: { primary: string; secondary: string };
  tier: string;
  role: { en: string; zh: string };
  updatedAt: string;
}

type SortKey = "updatedAt" | "tier";

const BUILDS: BuildItem[] = [
  { id: "swordsman", title: { zh: "鸣金·九剑", en: "Mingjin · Nine Swords" }, subtitle: { zh: "九剑连击高爆发流派", en: "Nine Swords combo burst build" }, school: "鸣金", weapons: { primary: "剑", secondary: "剑" }, tier: "T0", role: { zh: "输出", en: "DPS" }, updatedAt: "2025-06-01" },
  { id: "mingjin-ying", title: { zh: "鸣金·英", en: "Mingjin · Hero" }, subtitle: { zh: "高机动连击输出", en: "High mobility combo DPS" }, school: "鸣金", weapons: { primary: "剑", secondary: "枪" }, tier: "T1", role: { zh: "输出", en: "DPS" }, updatedAt: "2025-05-20" },
  { id: "lieshi-wei", title: { zh: "裂石·威", en: "Lieshi · Might" }, subtitle: { zh: "重击防御反击流派", en: "Heavy strike counter build" }, school: "裂石", weapons: { primary: "刀", secondary: "盾" }, tier: "T0", role: { zh: "坦克", en: "Tank" }, updatedAt: "2025-05-18" },
  { id: "qiansi-lin", title: { zh: "牵丝·霖", en: "Qiansi · Rain" }, subtitle: { zh: "远程控制辅助流派", en: "Ranged control support build" }, school: "牵丝", weapons: { primary: "伞", secondary: "丝" }, tier: "T1", role: { zh: "辅助", en: "Support" }, updatedAt: "2025-05-15" },
  { id: "qiansi-yu", title: { zh: "牵丝·雨", en: "Qiansi · Shower" }, subtitle: { zh: "群体治疗增益流派", en: "Group healing buff build" }, school: "牵丝", weapons: { primary: "伞", secondary: "琴" }, tier: "T1", role: { zh: "治疗", en: "Healer" }, updatedAt: "2025-05-10" },
  { id: "pozhu-feng", title: { zh: "破竹·风", en: "Pozhu · Wind" }, subtitle: { zh: "快速突进爆发流派", en: "Fast burst dash build" }, school: "破竹", weapons: { primary: "枪", secondary: "弓" }, tier: "T0", role: { zh: "输出", en: "DPS" }, updatedAt: "2025-05-08" },
  { id: "pozhu-chen", title: { zh: "破竹·尘", en: "Pozhu · Dust" }, subtitle: { zh: "持续消耗控制流派", en: "Sustained poke control build" }, school: "破竹", weapons: { primary: "枪", secondary: "笛" }, tier: "T1", role: { zh: "输出", en: "DPS" }, updatedAt: "2025-05-05" },
  { id: "pozhu-yuan", title: { zh: "破竹·元", en: "Pozhu · Origin" }, subtitle: { zh: "远程消耗稳定输出", en: "Ranged sustained DPS build" }, school: "破竹", weapons: { primary: "弓", secondary: "笛" }, tier: "T1", role: { zh: "输出", en: "DPS" }, updatedAt: "2025-05-01" },
];

const SCHOOLS = ["全部", "鸣金", "裂石", "牵丝", "破竹"];
const SCHOOLS_EN: Record<string, string> = { "全部": "All", "鸣金": "Mingjin", "裂石": "Lieshi", "牵丝": "Qiansi", "破竹": "Pozhu" };

const SORT_LABELS: Record<SortKey, { zh: string; en: string }> = {
  updatedAt: { zh: "更新时间", en: "Updated" },
  tier: { zh: "强度等级", en: "Tier" },
};

const TIER_ORDER: Record<string, number> = { T0: 0, T1: 1, T2: 2 };

export default function BuildsListPage() {
  const params = useParams();
  const locale = (params?.locale as string) || "zh";
  const isZh = locale === "zh";

  const [schoolFilter, setSchoolFilter] = useState("全部");
  const [sortBy, setSortBy] = useState<SortKey>("tier");

  const filtered = useMemo(() => {
    let list = BUILDS;
    if (schoolFilter !== "全部") {
      list = list.filter((b) => b.school === schoolFilter);
    }
    return [...list].sort((a, b) => {
      if (sortBy === "tier") return (TIER_ORDER[a.tier] ?? 9) - (TIER_ORDER[b.tier] ?? 9);
      return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
    });
  }, [schoolFilter, sortBy]);

  const tierColor = (tier: string) => {
    if (tier === "T0") return "bg-amber-500/20 text-amber-400 ring-1 ring-amber-500/30";
    if (tier === "T1") return "bg-emerald-500/10 text-emerald-400";
    return "bg-stone-800 text-stone-400";
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-amber-400 sm:text-4xl">
          {isZh ? "流派攻略大全" : "Complete Build Guides"}
        </h1>
        <p className="mt-3 text-lg text-stone-400">
          {isZh
            ? "每两个武器组合形成独特流派。选择流派查看详细攻略，支持按属性筛选和排序。"
            : "Each weapon pair creates a unique combat style. Filter by element and sort to find your perfect build."}
        </p>
      </div>

      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-stone-800 bg-stone-900/50 p-4">
        <div className="flex flex-wrap gap-2">
          {SCHOOLS.map((s) => (
            <button
              key={s}
              onClick={() => setSchoolFilter(s)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                schoolFilter === s
                  ? "bg-amber-500/20 text-amber-400 ring-1 ring-amber-500/30"
                  : "bg-stone-800 text-stone-400 hover:text-stone-200"
              }`}
            >
              {isZh ? s : (SCHOOLS_EN[s] ?? s)}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-stone-500">{isZh ? "排序：" : "Sort:"}</span>
          {(Object.keys(SORT_LABELS) as SortKey[]).map((key) => (
            <button
              key={key}
              onClick={() => setSortBy(key)}
              className={`rounded-lg px-3 py-1 text-xs font-medium transition-all ${
                sortBy === key
                  ? "bg-amber-500/15 text-amber-400"
                  : "text-stone-500 hover:text-stone-300"
              }`}
            >
              {isZh ? SORT_LABELS[key].zh : SORT_LABELS[key].en}
              {sortBy === key && " ↓"}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="py-20 text-center text-stone-500">
          {isZh ? "暂无该流派的攻略" : "No guides found for this school"}
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((build) => (
            <Link
              key={build.id}
              href={`/${locale}/builds/${build.id}`}
              className="group rounded-xl border border-stone-800 bg-stone-900/50 p-6 transition-all hover:border-amber-600/40 hover:shadow-lg hover:shadow-amber-900/10 sm:p-8"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="min-w-0">
                  <h2 className="text-lg font-bold text-stone-100 group-hover:text-amber-400 transition-colors truncate">
                    {isZh ? build.title.zh : build.title.en}
                  </h2>
                  <p className="text-sm text-stone-500">{isZh ? build.subtitle.zh : build.subtitle.en}</p>
                </div>
                <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-bold ${tierColor(build.tier)}`}>
                  {build.tier}
                </span>
              </div>

              <div className="mb-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-stone-800 px-3 py-0.5 text-xs text-stone-300">
                  {isZh ? build.school : SCHOOLS_EN[build.school] ?? build.school}
                </span>
                <span className="rounded bg-stone-800 px-2 py-0.5 text-xs text-stone-300">
                  {build.weapons.primary}
                </span>
                <span className="text-stone-600">+</span>
                <span className="rounded bg-stone-800 px-2 py-0.5 text-xs text-stone-300">
                  {build.weapons.secondary}
                </span>
              </div>

              <div className="flex items-center gap-4 text-xs text-stone-500">
                <span>{isZh ? "更新于 " : "Updated "}{build.updatedAt}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
