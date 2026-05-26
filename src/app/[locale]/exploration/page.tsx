"use client";

import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getDictionary, isValidLocale, defaultLocale, type Locale } from "@/i18n";
import AdBanner from "@/components/AdBanner";
import { BAOXIANG_GUIDES, BAOXIANG_GUIDES_EN, type GuideStep } from "@/data/baoxiang-guides";
import { QIJIAO_GUIDES, QIJIAO_GUIDES_EN } from "@/data/qijiao-guides";
import { MAOXI_GUIDES, MAOXI_GUIDES_EN } from "@/data/maoxi-guides";
import { MYSTIC_SKILLS } from "@/content/mystic-skills";
import { t } from "@/content";
import type { MysticSkill } from "@/content/mystic-skills";

type CategoryKey =
  | "baoxiang"
  | "qijiao"
  | "qishu"
  | "qianchenjiuwu"
  | "yingdi"
  | "bupingshi"
  | "miaomiaomiao"
  | "maoxi"
  | "jianghuguren"
  | "qujingxinyou"
  | "tiandiwanlai";

const CATEGORY_KEYS: CategoryKey[] = [
  "baoxiang",
  "qijiao",
  "qishu",
  "qianchenjiuwu",
  "yingdi",
  "bupingshi",
  "miaomiaomiao",
  "maoxi",
  "jianghuguren",
  "qujingxinyou",
  "tiandiwanlai",
];

const CATEGORY_ICONS: Record<CategoryKey, string> = {
  baoxiang: "&#128230;",
  qijiao: "&#10024;",
  qishu: "&#9733;",
  qianchenjiuwu: "&#127983;",
  yingdi: "&#9978;",
  bupingshi: "&#9878;",
  miaomiaomiao: "&#128062;",
  maoxi: "&#128049;",
  jianghuguren: "&#129309;",
  qujingxinyou: "&#127795;",
  tiandiwanlai: "&#127925;",
};

interface ExplorationData {
  title: string;
  subtitle: string;
  regionOrder: string[];
  regionNames: Record<string, string>;
  regionLocations: Record<string, string[]>;
  regionLocationKeys: Record<string, string[]>;
  locCount: string;
  pending: string;
  stepCount: string;
  zoomView: string;
  collapse: string;
  stepAlt: string;
  sourceAli213: string;
  sourceVideo: string;
  guidePending: string;
  categories: Record<CategoryKey, { title: string; subtitle: string }>;
}

export default function ExplorationPage() {
  const params = useParams();
  const localeParam = (params?.locale as string) ?? defaultLocale;
  const locale: Locale = isValidLocale(localeParam) ? localeParam : defaultLocale;

  const [dict, setDict] = useState<Record<string, unknown> | null>(null);
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("baoxiang");
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [skillTypeFilter, setSkillTypeFilter] = useState<MysticSkill["type"] | "all">("all");
  const [selectedSkillId, setSelectedSkillId] = useState<string | null>(null);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lbScale, setLbScale] = useState(1);
  const [lbPos, setLbPos] = useState({ x: 0, y: 0 });
  const lbDragRef = useRef<{ startX: number; startY: number; originX: number; originY: number } | null>(null);
  const lbOverlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = lbOverlayRef.current;
    if (!el) return;
    const handler = (e: WheelEvent) => {
      e.preventDefault();
      setLbScale((s) => Math.min(Math.max(s + (e.deltaY < 0 ? 0.2 : -0.2), 0.5), 5));
    };
    el.addEventListener("wheel", handler, { passive: false });
    return () => el.removeEventListener("wheel", handler);
  }, [lightboxSrc]);

  useEffect(() => {
    if (dict && selectedLocation === null) {
      const data = dict.exploration as ExplorationData;
      const region = activeRegion ?? data.regionOrder[0];
      const locs = (data.regionLocations[region] ?? []).filter((loc) => {
        if (activeCategory === "maoxi") {
          const keys = (data.regionLocationKeys ?? data.regionLocations)[region] ?? [];
          const displayNames = data.regionLocations[region] ?? [];
          const idx = displayNames.indexOf(loc);
          const key = idx >= 0 ? keys[idx] : loc;
          const guides = locale === "en" ? MAOXI_GUIDES_EN : MAOXI_GUIDES;
          return !!guides[key];
        }
        return true;
      });
      if (locs.length > 0) setSelectedLocation(locs[0]);
    }
  }, [dict, activeRegion, activeCategory]);

  if (!dict) {
    getDictionary(locale).then(setDict);
    return (
      <div className="mx-auto max-w-5xl px-4 py-12 text-center text-stone-400">
        Loading...
      </div>
    );
  }

  const nav = dict.nav as Record<string, string>;
  const data = dict.exploration as ExplorationData;
  const regionOrder = data.regionOrder;
  const regionNames = data.regionNames;
  const regionLocations = data.regionLocations;
  const regionLocationKeys = data.regionLocationKeys ?? data.regionLocations;
  const categories = data.categories;
  const currentCategory = categories[activeCategory];

  const displayRegion = activeRegion ?? regionOrder[0];

  const handleCategoryChange = (key: CategoryKey) => {
    setActiveCategory(key);
    setActiveRegion(regionOrder[0]);
    setSelectedLocation(null);
    setSkillTypeFilter("all");
    setSelectedSkillId(null);
  };

  const GUIDE_MAP: Partial<Record<CategoryKey, Record<string, unknown>>> = {
    baoxiang: locale === "en" ? BAOXIANG_GUIDES_EN : BAOXIANG_GUIDES,
    qijiao: locale === "en" ? QIJIAO_GUIDES_EN : QIJIAO_GUIDES,
    maoxi: locale === "en" ? MAOXI_GUIDES_EN : MAOXI_GUIDES,
  };
  const currentGuides = GUIDE_MAP[activeCategory];

  const handleLocationClick = (loc: string) => {
    if (currentGuides) {
      setSelectedLocation(selectedLocation === loc ? null : loc);
    }
  };

  // Get the Chinese key for a display location name
  const getLocationKey = (loc: string, regionKey: string) => {
    const displayNames = regionLocations[regionKey] ?? [];
    const keys = regionLocationKeys[regionKey] ?? [];
    const idx = displayNames.indexOf(loc);
    return idx >= 0 ? keys[idx] : loc;
  };

  const hasGuide = (loc: string) => {
    const key = getLocationKey(loc, displayRegion);
    return !!currentGuides && !!currentGuides[key];
  };

  const guide = selectedLocation && currentGuides ? (currentGuides[getLocationKey(selectedLocation, displayRegion)] as GuideStep[] | undefined) ?? null : null;

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <div className="mb-8">
        <Link
          href={`/${locale}`}
          className="mb-4 inline-flex items-center text-sm text-amber-400 transition-colors hover:text-amber-300"
        >
          <svg className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {nav.home}
        </Link>
        <h1 className="text-3xl font-bold text-amber-400 sm:text-4xl">{data.title}</h1>
        <p className="mt-2 text-lg text-stone-400">{data.subtitle}</p>
      </div>

      <AdBanner slot="top" />

      {/* Category Tabs */}
      <div className="mt-8 grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-6">
        {CATEGORY_KEYS.map((key) => {
          const cat = categories[key];
          if (!cat) return null;
          const isActive = activeCategory === key;
          return (
            <button
              key={key}
              onClick={() => handleCategoryChange(key)}
              className={`flex items-center gap-2 rounded-lg border px-3 py-2.5 text-left transition-all ${
                isActive
                  ? "border-amber-500/50 bg-amber-900/20 text-amber-400 shadow-lg shadow-amber-900/10"
                  : "border-stone-700/50 bg-stone-900/50 text-stone-400 hover:border-stone-600 hover:text-stone-200"
              }`}
            >
              <span
                className="shrink-0 text-lg"
                dangerouslySetInnerHTML={{ __html: CATEGORY_ICONS[key] }}
              />
              <span className="text-sm font-semibold leading-tight">{cat.title}</span>
            </button>
          );
        })}
      </div>

      {/* Category Header */}
      <div className="mt-6 flex items-center gap-3 rounded-xl border border-amber-900/20 bg-stone-900/50 px-5 py-4">
        <span
          className="text-3xl"
          dangerouslySetInnerHTML={{ __html: CATEGORY_ICONS[activeCategory] }}
        />
        <div>
          <h2 className="text-xl font-bold text-amber-400">{currentCategory?.title}</h2>
          <p className="text-sm text-stone-400">{currentCategory?.subtitle}</p>
        </div>
      </div>

      {/* Region Tabs */}
      {activeCategory !== "qishu" && (
      <div className="mt-6 flex flex-wrap gap-2">
        {regionOrder.map((regionKey) => {
          const isActive = displayRegion === regionKey;
          return (
            <button
              key={regionKey}
              onClick={() => { setActiveRegion(regionKey); setSelectedLocation(null); }}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-amber-600 text-white"
                  : "bg-stone-800 text-stone-400 hover:bg-stone-700 hover:text-stone-200"
              }`}
            >
              {regionNames[regionKey]}
            </button>
          );
        })}
      </div>
      )}

      {/* qishu - Mystic Skills List */}
      {activeCategory === "qishu" && (() => {
        const ms = dict.mysticSkills as Record<string, string>;
        const typeKeys: Array<MysticSkill["type"] | "all"> = ["all", "offensive", "general", "movement", "entertainment"];
        const typeLabels: Record<string, string> = {
          all: ms.allTypes ?? "All",
          offensive: ms.offensive ?? "Offensive",
          general: ms.general ?? "General",
          movement: ms.movement ?? "Movement",
          entertainment: ms.entertainment ?? "Entertainment",
        };
        const typeColors: Record<string, string> = {
          offensive: "bg-red-500/10 text-red-400 ring-1 ring-red-500/20",
          general: "bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20",
          movement: "bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20",
          entertainment: "bg-purple-500/10 text-purple-400 ring-1 ring-purple-500/20",
        };
        const filtered = skillTypeFilter === "all"
          ? MYSTIC_SKILLS
          : MYSTIC_SKILLS.filter((s) => s.type === skillTypeFilter);
        const selectedSkill = selectedSkillId
          ? MYSTIC_SKILLS.find((s) => s.id === selectedSkillId) ?? null
          : null;
        return (
          <>
            {/* Skill Type Filter */}
            <div className="mt-6 flex flex-wrap gap-2">
              {typeKeys.map((type) => {
                const isActive = skillTypeFilter === type;
                const count = type === "all"
                  ? MYSTIC_SKILLS.length
                  : MYSTIC_SKILLS.filter((s) => s.type === type).length;
                return (
                  <button
                    key={type}
                    onClick={() => { setSkillTypeFilter(type); setSelectedSkillId(null); }}
                    className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-amber-600 text-white"
                        : "bg-stone-800 text-stone-400 hover:bg-stone-700 hover:text-stone-200"
                    }`}
                  >
                    {typeLabels[type]}
                    <span className={`ml-1 rounded-full px-1.5 py-0.5 text-xs ${isActive ? "bg-amber-500/30" : "bg-stone-700/50"}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-3 text-sm text-stone-500">
              {(ms.skillCount ?? "{n} Skills").replace("{n}", String(filtered.length))}
            </div>

            {/* Skill Card Grid */}
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((skill) => {
                const isSelected = selectedSkillId === skill.id;
                return (
                  <button
                    key={skill.id}
                    onClick={() => setSelectedSkillId(isSelected ? null : skill.id)}
                    className={`group rounded-xl border p-4 text-left transition-all ${
                      isSelected
                        ? "border-amber-500/50 bg-amber-900/20 shadow-lg shadow-amber-900/10"
                        : "border-stone-700/50 bg-stone-900/50 hover:border-stone-600 hover:bg-stone-800/50"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h4 className={`font-bold text-sm ${isSelected ? "text-amber-400" : "text-stone-100 group-hover:text-amber-400"} transition-colors`}>
                        {t(skill.name, locale)}
                      </h4>
                      <div className="flex items-center gap-1.5">
                        {skill.isDefault && (
                          <span className="shrink-0 rounded-full bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-400">
                            {ms.defaultSkill ?? "Default"}
                          </span>
                        )}
                        <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${typeColors[skill.type] ?? ""}`}>
                          {typeLabels[skill.type]}
                        </span>
                      </div>
                    </div>
                    <p className="mt-2 text-xs text-stone-400 line-clamp-2">
                      {t(skill.effect, locale)}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Skill Detail Panel */}
            {selectedSkill && (
              <div className="mt-6">
                <div className="flex items-center justify-between rounded-t-xl border border-amber-600/30 bg-amber-900/20 px-5 py-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl" dangerouslySetInnerHTML={{ __html: "&#9733;" }} />
                    <div>
                      <h3 className="text-xl font-bold text-amber-400">
                        {t(selectedSkill.name, locale)}
                      </h3>
                      <div className="mt-1 flex items-center gap-2">
                        <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${typeColors[selectedSkill.type] ?? ""}`}>
                          {typeLabels[selectedSkill.type]}
                        </span>
                        {selectedSkill.isDefault && (
                          <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-semibold text-emerald-400">
                            {ms.defaultSkill ?? "Default"}
                          </span>
                        )}
                        {selectedSkill.source && (
                          <span className="text-xs text-stone-500">
                            {t(selectedSkill.source, locale)}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedSkillId(null)}
                    className="rounded-lg border border-stone-600 bg-stone-800 px-3 py-1.5 text-sm text-stone-300 transition-colors hover:bg-stone-700 hover:text-stone-100"
                  >
                    {data.collapse}
                  </button>
                </div>
                <div className="border-x border-b border-amber-600/20 bg-stone-900/50">
                  {/* Effect summary */}
                  <div className="px-5 py-4 border-b border-stone-800/50">
                    <h4 className="mb-1 text-sm font-semibold text-amber-300">
                      {locale === "zh" ? "技能效果" : "Skill Effect"}
                    </h4>
                    <p className="text-sm leading-relaxed text-stone-200">
                      {t(selectedSkill.effect, locale)}
                    </p>
                  </div>
                  {/* Step-by-step guide — same layout as baoxiang/qijiao */}
                  <div className="pb-6">
                    {selectedSkill.steps.map((step, idx) => (
                      <div key={idx} className="border-b border-stone-800/50 px-5 py-4 last:border-b-0">
                        <div className="flex gap-3">
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-600/20 text-sm font-bold text-amber-400">
                            {idx + 1}
                          </span>
                          <p className="pt-0.5 text-stone-200 leading-relaxed">{t(step.text, locale)}</p>
                        </div>
                        {step.images && step.images.length > 0 && (
                          <div className="mt-3 ml-10 space-y-2">
                            {step.images.map((src, imgIdx) => {
                              const key = `skill-${selectedSkill.id}-${idx}-${imgIdx}`;
                              if (imgErrors[key]) return null;
                              return (
                                <button
                                  key={imgIdx}
                                  type="button"
                                  onClick={() => setLightboxSrc(src)}
                                  className="block w-full max-w-xl overflow-hidden rounded-lg border border-stone-700/50 bg-stone-800 transition-colors hover:border-amber-600/30"
                                >
                                  <img
                                    src={src}
                                    alt={`${t(selectedSkill.name, locale)} - ${idx + 1}-${imgIdx + 1}`}
                                    className="w-full object-cover"
                                    loading="lazy"
                                    onError={() => setImgErrors((prev) => ({ ...prev, [key]: true }))}
                                  />
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  {selectedSkill.steps.some((s) => s.images && s.images.length > 0) && (
                    <p className="px-5 pb-4 text-center text-xs text-stone-600">{data.sourceAli213}</p>
                  )}
                </div>
              </div>
            )}

            {!selectedSkill && (
              <div className="mt-6 rounded-xl border border-stone-700/50 bg-stone-900/30 px-5 py-4 text-center">
                <p className="text-sm text-stone-500">{ms.noSkillSelected ?? "Select a skill to view details"}</p>
              </div>
            )}
          </>
        );
      })()}

      {/* Location Grid */}
      {activeCategory !== "qishu" && (
      <div className="mt-4">
        {regionOrder.map((regionKey) => {
          if (displayRegion !== regionKey) return null;
          const locations = (regionLocations[regionKey] ?? []).filter((loc) => {
            if (activeCategory === "maoxi") return hasGuide(loc);
            return true;
          });
          return (
            <div key={regionKey} className="rounded-xl border border-stone-700/50 bg-stone-900/50">
              {/* Region Header */}
              <div className="border-b border-stone-700/50 bg-stone-800/50 px-5 py-3">
                <h3 className="text-lg font-bold text-amber-300">
                  {currentCategory?.title} · {regionNames[regionKey]}
                </h3>
                <p className="text-xs text-stone-500">{data.locCount.replace("{n}", String(locations.length))}</p>
              </div>

              {/* Location Grid - 3 columns */}
              <div className="grid grid-cols-3 gap-px bg-stone-800/30">
                {locations.map((loc, i) => {
                  const clickable = !!currentGuides;
                  const hasData = hasGuide(loc);
                  return (
                    <button
                      key={i}
                      onClick={() => handleLocationClick(loc)}
                      disabled={!clickable}
                      className={`bg-stone-900/80 px-4 py-3 text-center text-sm transition-colors ${
                        clickable
                          ? hasData
                            ? selectedLocation === loc
                              ? "bg-amber-900/30 text-amber-300 font-semibold"
                              : "text-blue-400 hover:bg-stone-800 hover:text-blue-300"
                            : "text-stone-500 hover:bg-stone-800"
                          : "text-blue-400"
                      }`}
                    >
                      {loc}
                      {clickable && !hasData && (
                        <span className="ml-1 text-xs text-stone-600">{data.pending}</span>
                      )}
                    </button>
                  );
                })}
                {locations.length % 3 !== 0 &&
                  Array.from({ length: 3 - (locations.length % 3) }).map((_, i) => (
                    <div key={`empty-${i}`} className="bg-stone-900/80 px-4 py-3" />
                  ))}
              </div>
            </div>
          );
        })}
      </div>
      )}

      {/* Guide Detail Panel */}
      {activeCategory !== "qishu" && selectedLocation && guide && (
        <div className="mt-6">
          {/* Guide Header */}
          <div className="flex items-center justify-between rounded-t-xl border border-amber-600/30 bg-amber-900/20 px-5 py-4">
            <div className="flex items-center gap-3">
              <span
                className="text-2xl"
                dangerouslySetInnerHTML={{ __html: CATEGORY_ICONS[activeCategory] }}
              />
              <div>
                <h3 className="text-xl font-bold text-amber-400">
                  {currentCategory?.title} · {selectedLocation}
                </h3>
                <p className="text-sm text-stone-400">{data.stepCount.replace("{n}", String(guide.length))} · {data.zoomView}</p>
              </div>
            </div>
            <button
              onClick={() => setSelectedLocation(null)}
              className="rounded-lg border border-stone-600 bg-stone-800 px-3 py-1.5 text-sm text-stone-300 transition-colors hover:bg-stone-700 hover:text-stone-100"
            >
              {data.collapse}
            </button>
          </div>

          {/* Guide Steps */}
          <div className="space-y-1 border-x border-b border-amber-600/20 bg-stone-900/50 pb-6">
            {guide.map((step, idx) => (
              <div key={idx} className="border-b border-stone-800/50 px-5 py-4 last:border-b-0">
                {/* Step Number + Text */}
                <div className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-600/20 text-sm font-bold text-amber-400">
                    {idx + 1}
                  </span>
                  <p className="pt-0.5 text-stone-200 leading-relaxed">{step.text}</p>
                </div>

                {/* Step Images */}
                {step.images.length > 0 && (
                  <div className="mt-3 ml-10 space-y-2">
                    {step.images.map((src, imgIdx) => {
                      const key = `${idx}-${imgIdx}`;
                      if (imgErrors[key]) return null;
                      return (
                        <button
                          key={imgIdx}
                          type="button"
                          onClick={() => setLightboxSrc(src)}
                          className="block w-full max-w-xl overflow-hidden rounded-lg border border-stone-700/50 bg-stone-800 transition-colors hover:border-amber-600/30"
                        >
                          <img
                            src={src}
                            alt={data.stepAlt.replace("{n}", String(idx + 1)).replace("{m}", String(imgIdx + 1))}
                            className="w-full object-cover"
                            loading="lazy"
                            onError={() => setImgErrors((prev) => ({ ...prev, [key]: true }))}
                          />
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="mt-3 text-center text-xs text-stone-600">
            {guide.some((s) => s.images.length > 0)
              ? data.sourceAli213
              : data.sourceVideo}
          </p>
        </div>
      )}

      {/* No guide available message */}
      {activeCategory !== "qishu" && selectedLocation && !guide && currentGuides && (
        <div className="mt-6 rounded-xl border border-stone-700/50 bg-stone-900/50 px-5 py-8 text-center">
          <p className="text-stone-400">{data.guidePending.replace("{cat}", currentCategory?.title ?? "")}</p>
        </div>
      )}

      <div className="mt-8">
        <AdBanner slot="bottom" />
      </div>

      {/* Lightbox */}
      {lightboxSrc && (
        <div
          ref={lbOverlayRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => { setLightboxSrc(null); setLbScale(1); setLbPos({ x: 0, y: 0 }); }}
          onMouseMove={(e) => {
            if (!lbDragRef.current) return;
            setLbPos({
              x: lbDragRef.current.originX + (e.clientX - lbDragRef.current.startX),
              y: lbDragRef.current.originY + (e.clientY - lbDragRef.current.startY),
            });
          }}
          onMouseUp={() => { lbDragRef.current = null; }}
          onMouseLeave={() => { lbDragRef.current = null; }}
        >
          <button
            className="absolute right-4 top-4 z-10 rounded-full bg-stone-800/80 p-2 text-stone-200 transition-colors hover:bg-stone-700"
            onClick={() => { setLightboxSrc(null); setLbScale(1); setLbPos({ x: 0, y: 0 }); }}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <span className="absolute left-4 top-4 rounded-full bg-stone-800/80 px-3 py-1 text-xs text-stone-300">
            {Math.round(lbScale * 100)}%
          </span>
          <img
            src={lightboxSrc}
            alt={data.zoomView}
            className="max-h-[90vh] max-w-full rounded-lg object-contain select-none"
            style={{ transform: `translate(${lbPos.x}px, ${lbPos.y}px) scale(${lbScale})`, cursor: lbScale > 1 ? "grab" : "zoom-in" }}
            onClick={(e) => e.stopPropagation()}
            onWheel={(e) => e.stopPropagation()}
            onMouseDown={(e) => {
              if (lbScale <= 1) return;
              e.preventDefault();
              lbDragRef.current = { startX: e.clientX, startY: e.clientY, originX: lbPos.x, originY: lbPos.y };
            }}
            draggable={false}
          />
        </div>
      )}
    </div>
  );
}
