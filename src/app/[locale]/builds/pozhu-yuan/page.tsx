"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

const ARTICLE_ID = "pozhu-yuan";

type L = "zh" | "en";
const i18n = {
  home: { zh: "首页", en: "Home" },
  builds: { zh: "流派攻略", en: "Build Guides" },
  guideTitle: { zh: "破竹鸢（手甲格斗）完全攻略", en: "Pozhu Yuan — Gauntlets Brawler Complete Guide" },
  tierBadge: { zh: "T2 流派", en: "T2 Build" },
  brawlerRole: { zh: "近身格斗", en: "Close Combat Brawler" },
  pozhuAttr: { zh: "破竹属性", en: "Pozhu Element" },
  subtitle: { zh: "天志垂象（手甲） + 千机索天（绳镖） — 攒天志四层蓄力一拳，拳拳到肉", en: "Tianzhi Chuixiang (Gauntlets) + Qianji Suotian (Rope Dart) — Stack 4 Tianzhi then charge-punch, every hit lands heavy" },
  version: { zh: "游戏版本 v2.1.0", en: "Game Version v2.1.0" },
  lastUpdate: { zh: "最后更新：2026-05-12", en: "Last Updated: 2026-05-12" },
  author: { zh: "作者：攻略组", en: "By: Guide Team" },
  bookmark: { zh: "收藏", en: "Bookmark" },
  logout: { zh: "退出", en: "Logout" },
  loginRegister: { zh: "登录 / 注册", en: "Login / Register" },
  // Section 1
  s1Title: { zh: "一、流派定位与核心机制", en: "1. Playstyle Overview & Core Mechanics" },
  s1Playstyle: { zh: "1.2 攒天志 → 蓄力一拳", en: "1.2 Stack Tianzhi → Charged Punch" },
  s1Intro: {
    zh: '破竹鸢由天志垂象（手甲）+ 千机索天（绳镖）组成，是近身格斗流派。核心机制是「天志」系统——通过手甲轻击和鹰隼追击快速积累天志层数，攒满四层后释放R蓄力重击（蓄意轰拳）打出爆发伤害。操作手感拳拳到肉，节奏感很强。',
    en: 'Pozhu Yuan combines Tianzhi Chuixiang (Gauntlets) + Qianji Suotian (Rope Dart), a close-combat brawler build. The core mechanic is the "Tianzhi" system — rapidly stack Tianzhi layers through Gauntlet light attacks and Falcon Pursuit, then at 4 layers unleash R Charged Heavy (蓄意轰拳) for massive burst damage. The combat feel is visceral and rhythmic — every punch lands heavy.',
  },
  s1CoreTitle: { zh: "1.2 核心机制：天志系统与鹰隼追击", en: "1.2 Core Mechanic: Tianzhi System & Falcon Pursuit" },
  s1CoreText: {
    zh: '天志是破竹鸢的核心资源，类似"豆子"。天志随战斗时间自动回复但速度较慢，核心获取方式是手甲轻击完整打出第6段触发「鹰隼追击」，回复天志点数。关键优化：使用绳镖特殊技+武学技上buff后切手甲，利用「易武技」直接衔接第3段轻击，大幅缩短打出第6段的时间，从而加速攒天志。攒满4层天志后释放R蓄力重击，这是破竹鸢最主要的爆发伤害。全程循环围绕"快速攒天志→蓄力一拳"展开。',
    en: 'Tianzhi is the core resource, like "beans." It regenerates slowly over time, but the main source is completing Gauntlet light attack 6th hit to trigger "Falcon Pursuit," which returns Tianzhi points. Key optimization: use Rope Dart special + martial skill to buff, then swap to Gauntlets — the "Weapon Swap Skill" lets you start from 3rd hit of the light chain, drastically shortening the time to reach 6th hit and accelerating Tianzhi gain. At 4 layers, unleash R Charged Heavy for the main burst. The entire cycle revolves around "fast Tianzhi → charged punch."',
  },
  s1ProsTitle: { zh: "✅ 优势", en: "✅ STRENGTHS" },
  s1ConsTitle: { zh: "❌ 劣势", en: "❌ WEAKNESSES" },
  videoGuide: { zh: "视频：破竹鸢手甲输出循环教学（B站）", en: "Video: Pozhu Yuan Gauntlets DPS Rotation Guide (Bilibili)" },
  // Section 2
  s2Title: { zh: "二、技能加点推荐（1-30级）", en: "2. Skill Point Allocation (Lv 1-30)" },
  s2Sub: { zh: "2.1 天志垂象（手甲）+ 千机索天（绳镖）加点路线", en: "2.1 Gauntlets + Rope Dart Skill Priority" },
  s2Intro: { zh: "优先点满手甲的蓄力重击和鹰隼追击相关技能，绳镖点出上buff和特殊技即可。奇术以辅助攒天志和填充为主。", en: "Prioritize maxing Gauntlet charged heavy and Falcon Pursuit skills. For Rope Dart, unlock buff and special skills. Secret Arts support Tianzhi stacking and DPS fill." },
  thLevel: { zh: "等级阶段", en: "Level Range" },
  thSkill: { zh: "技能名称", en: "Skill Name" },
  thPriority: { zh: "优先级", en: "Priority" },
  thNote: { zh: "说明", en: "Notes" },
  s2Attr: { zh: "2.2 属性加点建议", en: "2.2 Attribute Point Allocation" },
  attrTip: { zh: "体魄优先加至30级（手甲近战需要生存），然后点满眼力。武库选择破竹。调律词条优先外功攻击和会心，蓄力重击的会心收益很高。", en: "Physique to Lv 30 first (Gauntlets are melee, need survivability), then max Perception. Choose Pozhu for Martial Arsenal. Attunement priority: Physical ATK and Crit — charged heavy crits yield huge returns." },
  // Section 3
  s3Title: { zh: "三、开局装备推荐", en: "3. Early Game Gear Recommendations" },
  s3Intro: {
    zh: '破竹鸢的装备以撼天套和尚义套搭配为核心，主打蓄力重击伤害最大化。前期过渡用飞隼套或斗易套，后期换撼天+尚义毕业。',
    en: 'Pozhu Yuan gear centers on Hantian (Sky Shaker) + Shangyi (Righteous) Set combo, maximizing charged heavy damage. Transition from Feisun or Douyi Set early to Hantian + Shangyi for graduation.',
  },
  thHow: { zh: "获取方式：", en: "How to get: " },
  thStat: { zh: "核心属性：", en: "Key stats: " },
  s3GearTip: {
    zh: "装备进阶：撼天套提升蓄力重击伤害，尚义套提供攻击加成，两套搭配最优。飞隼套也可用但上限不如撼天+尚义。词条优先外功攻击>会心>精准，围绕蓄力拳伤害配置。",
    en: "Gear Progression: Hantian Set boosts charged heavy damage, Shangyi Set provides ATK bonus — combining both is optimal. Feisun Set works but has lower ceiling. Affix priority: Physical ATK > Crit > Precision, tuned for charged punch damage.",
  },
  // Section 4
  s4Title: { zh: "四、心法搭配推荐", en: "4. Inner Art Recommendations" },
  thInner: { zh: "心法", en: "Inner Art" },
  thStyle: { zh: "流派", en: "Style" },
  thEffect: { zh: "效果", en: "Effect" },
  thInnerPrio: { zh: "优先级", en: "Priority" },
  mustHave: { zh: "必带", en: "Must-have" },
  recommended: { zh: "推荐", en: "Recommended" },
  lateGame: { zh: "大后期", en: "Late game" },
  // Section 5
  s5Title: { zh: "五、核心连招教学", en: "5. Core Combo Guide" },
  s5Standard: { zh: "5.1 标准PVE输出循环", en: "5.1 Standard PvE DPS Rotation" },
  s5Burst: { zh: "5.2 易武加速攒天志循环", en: "5.2 Weapon Swap Speed Tianzhi Loop" },
  s5Secret: { zh: "5.3 奇术填充循环", en: "5.3 Secret Art Filler Loop" },
  videoCombo: { zh: "视频：破竹鸢手甲顶级速成攻略（B站）", en: "Video: Pozhu Yuan Top Speed Guide (Bilibili)" },
  // Section 6
  s6Title: { zh: "六、副本攻略：破竹鸢职责", en: "6. Dungeon Guide — Pozhu Yuan Role" },
  s6Intro: {
    zh: '破竹鸢在副本中担任近战DPS，核心职责是在安全窗口打出蓄力一拳的爆发。手甲近战范围极短，需要贴脸输出，对走位和时机判断要求较高。',
    en: 'Pozhu Yuan serves as melee DPS in dungeons. Your core duty is landing charged punch bursts during safe windows. Gauntlets have extremely short range — you need to be in the boss\'s face, demanding strong positioning and timing.',
  },
  s6Sleeping: { zh: "金明池·睡道人 — 破竹鸢要点", en: "Jinming Pool — Sleeping Daoist: Key Points" },
  s6Rong: { zh: "金明池·容鸢 — 破竹鸢要点", en: "Jinming Pool — Rong Yuan: Key Points" },
  // Section 7
  s7Title: { zh: "七、进阶技巧与常见误区", en: "7. Advanced Tips & Common Mistakes" },
  // Comments
  comments: { zh: "评论区", en: "Comments" },
  writeComment: { zh: "写下你的评论...", en: "Write a comment..." },
  collapseComment: { zh: "收起评论框", en: "Collapse" },
  submitComment: { zh: "发表评论", en: "Post Comment" },
  commentPlaceholder: { zh: "分享你的破竹鸢心得...", en: "Share your Pozhu Yuan tips..." },
};

function t(key: keyof typeof i18n, locale: L): string {
  return i18n[key]?.[locale] ?? i18n[key]?.zh ?? key;
}

export default function PozhuYuanGuide() {
  const params = useParams();
  const locale = (params?.locale as L) || "zh";
  const isZh = locale === "zh";

  const skillTable = isZh ? [
    { level: "1-5级", skill: "天志垂象·R蓄力重击", prio: "★★★★★", note: "核心爆发技能，4层天志释放蓄意轰拳，伤害极高，必满" },
    { level: "1-5级", skill: "天志垂象·轻击第6段", prio: "★★★★★", note: "触发鹰隼追击回复天志，攒豆核心手段，必满" },
    { level: "5-10级", skill: "千机索天·特殊技", prio: "★★★★☆", note: "绳镖上buff，切手甲前使用" },
    { level: "10-15级", skill: "千机索天·武学技", prio: "★★★★☆", note: "绳镖武学技能，上满buff后切手甲衔接" },
    { level: "15-20级", skill: "天志垂象·易武技", prio: "★★★★★", note: "关键技能！切手甲后直接衔接第3段轻击，大幅缩短攒天志时间" },
    { level: "20-25级", skill: "奇术·神龙吐火", prio: "★★★☆☆", note: "CD填充，蓄力拳CD期间补充输出" },
    { level: "25-30级", skill: "奇术·骑龙回马", prio: "★★★☆☆", note: "易武衔接技，手甲↔绳镖切换时使用" },
  ] : [
    { level: "Lv 1-5", skill: "Tianzhi · R Charged Heavy", prio: "★★★★★", note: "Core burst — at 4 Tianzhi unleash the charged punch for massive damage, max first" },
    { level: "Lv 1-5", skill: "Tianzhi · Light Attack 6th Hit", prio: "★★★★★", note: "Triggers Falcon Pursuit for Tianzhi recovery — core stacking tool, max first" },
    { level: "Lv 5-10", skill: "Qianji · Special Skill", prio: "★★★★☆", note: "Rope Dart buff applicator, use before swapping to Gauntlets" },
    { level: "Lv 10-15", skill: "Qianji · Martial Skill", prio: "★★★★☆", note: "Rope Dart martial skill, stack buffs then swap to Gauntlets" },
    { level: "Lv 15-20", skill: "Tianzhi · Weapon Swap Skill", prio: "★★★★★", note: "Key skill! After swapping to Gauntlets, starts from 3rd light hit — drastically accelerates Tianzhi stacking" },
    { level: "Lv 20-25", skill: "Secret Art · Shenlong Fire Breath", prio: "★★★☆☆", note: "CD filler, supplement DPS during charged punch cooldown" },
    { level: "Lv 25-30", skill: "Secret Art · Dragon Rider's Strike", prio: "★★★☆☆", note: "Weapon swap chain, use when switching Gauntlets ↔ Rope Dart" },
  ];

  const equipItems = isZh ? [
    { name: "撼天·手甲（武器）", slot: "主武器", how: "天志垂象解锁后，百业商店兑换或高级副本掉落", stat: "外功攻击、会心率" },
    { name: "撼天·绳镖（武器）", slot: "副武器", how: "千机索天解锁后，百业商店兑换或高级副本掉落", stat: "外功攻击、劲" },
    { name: "撼天·护腕", slot: "防具·手部", how: "河西高级副本或百业商店兑换", stat: "外功攻击、蓄力伤害" },
    { name: "尚义·战靴", slot: "防具·足部", how: "河西区域世界BOSS掉落", stat: "移速、外功攻击" },
    { name: "撼天·腰佩", slot: "饰品", how: "高级探索宝箱或百业商店兑换", stat: "最小/最大外功攻击" },
  ] : [
    { name: "Hantian Gauntlets (Weapon)", slot: "Main Weapon", how: "Unlocked via Tianzhi Chuixiang, Hundred Trades shop or dungeon drops", stat: "Physical ATK, Crit Rate" },
    { name: "Hantian Rope Dart (Weapon)", slot: "Off-hand Weapon", how: "Unlocked via Qianji Suotian, Hundred Trades shop or dungeon drops", stat: "Physical ATK, Power" },
    { name: "Hantian Bracers", slot: "Armor — Hands", how: "Advanced Hexi dungeons or Hundred Trades shop", stat: "Physical ATK, Charged Damage" },
    { name: "Shangyi Boots", slot: "Armor — Feet", how: "Hexi region world boss drops", stat: "Move Speed, Physical ATK" },
    { name: "Hantian Belt", slot: "Accessory", how: "Advanced exploration chests or Hundred Trades shop", stat: "Min/Max Physical ATK" },
  ];

  const innerArts = isZh ? [
    { name: "扶摇直上", style: "破竹鸢", effect: "核心心法，大幅提升天志获取效率和蓄力重击伤害，没有它攒天志太慢", prio: "必带" },
    { name: "易水歌", style: "通用", effect: "通用增伤心法，前期核心", prio: "必带" },
    { name: "威猛歌", style: "通用", effect: "通用增伤，提升整体输出", prio: "推荐" },
    { name: "断石", style: "通用", effect: "前中期过渡心法，配合使用", prio: "推荐" },
    { name: "极乐泣血", style: "通用", effect: "强化输出，中后期搭配", prio: "推荐" },
    { name: "忘川", style: "通用", effect: "大后期替换断石，更高阶增伤心法", prio: "大后期" },
  ] : [
    { name: "Fuyao Zhishang (Soaring Ascendant)", style: "Pozhu Yuan", effect: "Core inner art — massively boosts Tianzhi gain rate and charged heavy damage. Without it, Tianzhi stacking is too slow", prio: "Must-have" },
    { name: "Yishui Song", style: "Universal", effect: "Universal damage boost, core for early game", prio: "Must-have" },
    { name: "Weimeng Song (Fierce Ode)", style: "Universal", effect: "Universal damage boost, raises overall output", prio: "Recommended" },
    { name: "Duanshi (Stone Breaker)", style: "Universal", effect: "Early-mid game transition inner art, paired in rotation", prio: "Recommended" },
    { name: "Jile Qixue (Bliss Weeping Blood)", style: "Universal", effect: "Damage amplifier, mid-late game pairing", prio: "Recommended" },
    { name: "Wangchuan (River of Forgetfulness)", style: "Universal", effect: "Replaces Duanshi in late game, higher-tier damage boost", prio: "Late game" },
  ];

  const tips = isZh ? [
    { title: "易武技是加速攒天志的关键", text: "不用易武技需要完整打出6段轻击才能触发鹰隼追击，太慢了。用绳镖上buff后切手甲，易武技直接从第3段开始，只需打3-4段就能触发鹰隼追击，攒天志效率翻倍。" },
    { title: "蓄力重击要找安全窗口", text: "R蓄力重击需要站桩蓄力，不能移动。手甲是近战，贴脸蓄力风险很高。等BOSS放完技能的硬直窗口再蓄力，不要贪输出被打断。" },
    { title: "手甲攻击范围极短", text: "手甲的攻击范围是所有武器中最短的之一，必须贴脸输出。走位要求很高，稍微远一点就会空技能。善用绳镖技能拉近距离。" },
    { title: "天志不要浪费", text: "天志满4层就尽快释放蓄力重击，不要多攒。天志满后继续攒是浪费资源，应该立刻转化为伤害。" },
    { title: "撼天套是最优选择", text: "撼天套直接提升蓄力重击伤害，与破竹鸢的核心机制完美契合。飞隼套也可用但上限不如撼天套。如果有撼天套部件优先使用。" },
  ] : [
    { title: "Weapon Swap Skill is the speed key", text: "Without Weapon Swap, you need all 6 light hits to trigger Falcon Pursuit — too slow. After Rope Dart buffs, swap to Gauntlets — Weapon Swap starts from 3rd hit, needing only 3-4 hits for Falcon Pursuit, doubling Tianzhi stacking speed." },
    { title: "Find safe windows for charged punches", text: "R charged heavy requires stationary charging — can't move. Gauntlets are melee, so face-to-face charging is risky. Wait for boss post-skill recovery windows before charging — don't greed and get interrupted." },
    { title: "Gauntlets have extremely short range", text: "Gauntlet attack range is among the shortest in the game — you must be point-blank. Positioning demands are high; slightly too far and skills whiff. Use Rope Dart skills to close distance." },
    { title: "Don't waste Tianzhi", text: "At 4 layers, use the charged heavy immediately — don't overstack. Tianzhi past 4 is wasted resource that should be converted to damage right away." },
    { title: "Hantian Set is the optimal pick", text: "Hantian Set directly boosts charged heavy damage, perfectly matching Pozhu Yuan's core mechanic. Feisun Set works but has a lower ceiling. Prioritize Hantian pieces when available." },
  ];

  const dungeonSleeping = isZh ? [
    { label: "贴脸输出风险：", color: "text-red-400", text: "手甲攻击范围极短，必须贴脸输出。藤牢点名和小怪阶段是最危险的时机，注意保持距离不要被围住。蓄力重击时尤其脆弱。" },
    { label: "BOSS硬直是最佳窗口：", color: "text-amber-400", text: "BOSS跳击后有几秒硬直，这是手甲蓄力重击的最佳窗口。提前攒满天志，硬直瞬间R蓄力拳打出去。" },
    { label: "小怪阶段用轻击攒天志：", color: "text-amber-400", text: "小怪阶段可以安全地打完整6段轻击触发鹰隼追击攒天志。蓄力拳用来清密集小怪效果也不错。" },
  ] : [
    { label: "Point-blank risk: ", color: "text-red-400", text: "Gauntlet range is extremely short — must be point-blank. Vine Prison and add phases are the most dangerous moments. Keep distance, don't get surrounded. You're especially vulnerable during charged heavy." },
    { label: "Boss recovery is your window: ", color: "text-amber-400", text: "After boss leap, there are seconds of recovery — the perfect charged heavy window. Pre-stack Tianzhi to 4, then R charged punch during the recovery." },
    { label: "Use adds to stack Tianzhi: ", color: "text-amber-400", text: "Add phases let you safely complete all 6 light hits for Falcon Pursuit to stack Tianzhi. Charged punch is also effective at clearing dense add clusters." },
  ];

  const dungeonRong = isZh ? [
    { label: "搬桶时蓄力拳效率高：", color: "text-amber-400", text: "手甲机动性一般，但蓄力拳一拳一个桶附近的小怪，清场效率不错。搬桶时顺便攒天志。" },
    { label: "护盾阶段蓄力爆发：", color: "text-red-400", text: "提前攒满4层天志，护盾出现瞬间蓄力拳全力输出。撼天套蓄力伤害对护盾也有效。" },
    { label: "三黄线贴脸危险：", color: "text-amber-400", text: "手甲本身就需要贴脸输出，桶爆炸范围容易波及你。注意保持距离，不要贪输出。" },
  ] : [
    { label: "Good add clear with charged punch: ", color: "text-amber-400", text: "Gauntlets have average mobility, but one charged punch clears clustered mobs near barrels efficiently. Stack Tianzhi while carrying." },
    { label: "Shield phase charged burst: ", color: "text-red-400", text: "Pre-stack 4 Tianzhi — the instant the shield spawns, dump charged punch. Hantian Set charged damage works on shields too." },
    { label: "Point-blank danger during triple line: ", color: "text-amber-400", text: "Gauntlets already require point-blank range, making you vulnerable to barrel explosions. Maintain distance, don't greed DPS." },
  ];

  return (
    <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-stone-500">
        <Link href={`/${locale}`} className="hover:text-amber-400">{t("home", locale)}</Link>
        <span className="mx-2 text-stone-700">/</span>
        <Link href={`/${locale}/builds`} className="hover:text-amber-400">{t("builds", locale)}</Link>
        <span className="mx-2 text-stone-700">/</span>
        <span className="text-stone-300">{t("guideTitle", locale)}</span>
      </nav>

      {/* Header */}
      <header className="mb-10 border-b border-stone-800 pb-8">
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400 ring-1 ring-amber-500/20">{t("tierBadge", locale)}</span>
          <span className="rounded-full bg-stone-800 px-3 py-1 text-xs font-semibold text-stone-300">{t("brawlerRole", locale)}</span>
          <span className="rounded-full bg-stone-800 px-3 py-1 text-xs font-semibold text-stone-300">{t("pozhuAttr", locale)}</span>
        </div>
        <h1 className="text-3xl font-bold text-amber-400 sm:text-4xl">{t("guideTitle", locale)}</h1>
        <p className="mt-2 text-stone-400">{t("subtitle", locale)}</p>
        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-stone-500">
          <span className="rounded-full bg-amber-500/10 px-3 py-1 text-amber-400">{t("version", locale)}</span>
          <span>{t("lastUpdate", locale)}</span>
          <span>{t("author", locale)}</span>
        </div>

      </header>

      {/* ── 1. Overview ── */}
      <section className="mb-10">
        <h2 className="mb-4 border-b border-stone-800 pb-2 text-xl font-bold text-amber-400">{t("s1Title", locale)}</h2>
        <h3 className="mb-3 text-lg font-semibold text-stone-200">{t("s1Playstyle", locale)}</h3>
        <p className="mb-4 text-stone-300 leading-relaxed">{t("s1Intro", locale)}</p>

        <h3 className="mb-3 text-lg font-semibold text-stone-200">{t("s1CoreTitle", locale)}</h3>
        <div className="rounded-xl border border-amber-600/20 bg-amber-900/10 p-5 text-sm text-stone-300 leading-relaxed">
          {t("s1CoreText", locale)}
        </div>

        <h3 className="mb-3 mt-6 text-lg font-semibold text-stone-200">{isZh ? "1.3 优势与劣势" : "1.3 Strengths & Weaknesses"}</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-emerald-900/30 bg-emerald-900/5 p-4">
            <h4 className="mb-2 text-sm font-bold text-emerald-400 uppercase tracking-wider">{t("s1ProsTitle", locale)}</h4>
            <ul className="space-y-1.5 text-sm text-stone-300">
              {isZh ? [
                "• 蓄力一拳伤害极高，爆发力强",
                "• 操作手感拳拳到肉，打击感十足",
                "• 循环简单直观（攒天志→蓄力拳）",
                "• 易武技加速后攒天志效率不错",
                "• 撼天套与核心机制完美契合",
              ] : [
                "• Charged punch deals extreme damage — high burst",
                "• Visceral, satisfying combat feel — every punch hits heavy",
                "• Simple intuitive cycle (stack Tianzhi → charged punch)",
                "• Weapon Swap acceleration makes Tianzhi stacking efficient",
                "• Hantian Set perfectly matches core mechanic",
              ].map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
          <div className="rounded-lg border border-red-900/30 bg-red-900/5 p-4">
            <h4 className="mb-2 text-sm font-bold text-red-400 uppercase tracking-wider">{t("s1ConsTitle", locale)}</h4>
            <ul className="space-y-1.5 text-sm text-stone-300">
              {isZh ? [
                "• 攻击范围极短，必须贴脸输出",
                "• 蓄力重击站桩不能移动，容易被BOSS打断",
                "• T2级流派，整体输出不如T0流派",
                "• 走位要求高，容错率低",
              ] : [
                "• Extremely short attack range — must be point-blank",
                "• Charged heavy is stationary — easily interrupted by boss",
                "• T2 build — overall DPS below T0 builds",
                "• High positioning demands, low margin for error",
              ].map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        </div>

        <figure className="my-8 flex flex-col items-center">
          <div className="w-full max-w-2xl overflow-hidden rounded-xl border border-amber-900/20">
            <iframe src="https://player.bilibili.com/player.html?bvid=BV1cgvsB4EPf&page=1&high_quality=1&autoplay=0" title="Pozhu Yuan DPS Rotation" className="aspect-video w-full" allowFullScreen sandbox="allow-scripts allow-same-origin allow-popups" loading="lazy" />
          </div>
          <figcaption className="mt-2 text-xs text-stone-500">{t("videoGuide", locale)}</figcaption>
        </figure>
      </section>

      {/* ── 2. Skills ── */}
      <section className="mb-10">
        <h2 className="mb-4 border-b border-stone-800 pb-2 text-xl font-bold text-amber-400">{t("s2Title", locale)}</h2>
        <h3 className="mb-3 text-lg font-semibold text-stone-200">{t("s2Sub", locale)}</h3>
        <p className="mb-4 text-stone-300 leading-relaxed">{t("s2Intro", locale)}</p>
        <div className="mb-6 overflow-x-auto rounded-lg border border-stone-800">
          <table className="w-full text-sm">
            <thead className="bg-stone-900 text-left">
              <tr>
                <th className="px-4 py-3 text-amber-400 font-semibold">{t("thLevel", locale)}</th>
                <th className="px-4 py-3 text-amber-400 font-semibold">{t("thSkill", locale)}</th>
                <th className="px-4 py-3 text-amber-400 font-semibold">{t("thPriority", locale)}</th>
                <th className="px-4 py-3 text-amber-400 font-semibold">{t("thNote", locale)}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-800">
              {skillTable.map((s, i) => (
                <tr key={i}>
                  <td className="px-4 py-3 text-stone-400">{s.level}</td>
                  <td className="px-4 py-3 text-stone-200 font-medium">{s.skill}</td>
                  <td className={`px-4 py-3 font-bold ${[0, 1, 4].includes(i) ? "text-red-400" : i < 5 ? "text-amber-400" : "text-stone-400"}`}>{s.prio}</td>
                  <td className="px-4 py-3 text-stone-300">{s.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h3 className="mb-3 text-lg font-semibold text-stone-200">{t("s2Attr", locale)}</h3>
        <div className="rounded-lg border border-stone-800 bg-stone-900/50 p-5 text-sm text-stone-300">{t("attrTip", locale)}</div>
      </section>

      {/* ── 3. Gear ── */}
      <section className="mb-10">
        <h2 className="mb-4 border-b border-stone-800 pb-2 text-xl font-bold text-amber-400">{t("s3Title", locale)}</h2>
        <p className="mb-4 text-stone-300 leading-relaxed">{t("s3Intro", locale)}</p>
        <div className="space-y-4">
          {equipItems.map((item, i) => (
            <div key={i} className="rounded-lg border border-stone-800 bg-stone-900/50 p-4">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="font-bold text-stone-100">{i + 1}. {item.name}</span>
                <span className="rounded bg-stone-800 px-2 py-0.5 text-xs text-stone-400">{item.slot}</span>
              </div>
              <p className="text-sm text-stone-400">{t("thHow", locale)}{item.how}</p>
              <p className="text-xs text-amber-400/80">{t("thStat", locale)}{item.stat}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-lg border border-amber-600/20 bg-amber-900/5 p-4 text-sm text-stone-300">
          <strong className="text-amber-400">{t("s3GearTip", locale)}</strong>
        </div>
      </section>

      {/* ── 4. Inner Arts ── */}
      <section className="mb-10">
        <h2 className="mb-4 border-b border-stone-800 pb-2 text-xl font-bold text-amber-400">{t("s4Title", locale)}</h2>
        <div className="mb-4 overflow-x-auto rounded-lg border border-stone-800">
          <table className="w-full text-sm">
            <thead className="bg-stone-900 text-left">
              <tr>
                <th className="px-4 py-3 text-amber-400 font-semibold">{t("thInner", locale)}</th>
                <th className="px-4 py-3 text-amber-400 font-semibold">{t("thStyle", locale)}</th>
                <th className="px-4 py-3 text-amber-400 font-semibold">{t("thEffect", locale)}</th>
                <th className="px-4 py-3 text-amber-400 font-semibold">{t("thInnerPrio", locale)}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-800">
              {innerArts.map((art, i) => (
                <tr key={i}>
                  <td className="px-4 py-3 text-stone-200 font-medium">{art.name}</td>
                  <td className="px-4 py-3 text-stone-400">{art.style}</td>
                  <td className="px-4 py-3 text-stone-300">{art.effect}</td>
                  <td className={`px-4 py-3 font-bold ${i < 2 ? "text-red-400" : i < 5 ? "text-amber-400" : "text-stone-400"}`}>{art.prio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── 5. Combos ── */}
      <section className="mb-10">
        <h2 className="mb-4 border-b border-stone-800 pb-2 text-xl font-bold text-amber-400">{t("s5Title", locale)}</h2>

        <h3 className="mb-3 text-lg font-semibold text-stone-200">{t("s5Standard", locale)}</h3>
        <div className="mb-4 rounded-lg border border-stone-800 bg-stone-950 p-4 font-mono text-sm">
          {isZh ? (
            <>
              <p className="text-amber-400">绳镖起手上buff：</p>
              <p className="text-stone-300 ml-4">绳镖特殊技 → 武学技 → buff叠满 → 易武切手甲</p>
              <p className="text-amber-400 mt-2">手甲攒天志：</p>
              <p className="text-stone-300 ml-4">易武技（直接接第3段）→ 轻击3段→4段→5段→6段（鹰隼追击）→ 天志+1</p>
              <p className="text-amber-400 mt-2">蓄力爆发：</p>
              <p className="text-stone-300 ml-4">重复攒天志至4层 → R蓄力重击（蓄意轰拳）→ 循环</p>
            </>
          ) : (
            <>
              <p className="text-amber-400">Rope Dart Opener Buffs:</p>
              <p className="text-stone-300 ml-4">Rope Dart Special → Martial Skill → Full buffs → Weapon Swap to Gauntlets</p>
              <p className="text-amber-400 mt-2">Gauntlet Tianzhi Stacking:</p>
              <p className="text-stone-300 ml-4">Weapon Swap Skill (starts at 3rd hit) → Light 3→4→5→6 (Falcon Pursuit) → Tianzhi +1</p>
              <p className="text-amber-400 mt-2">Charged Burst:</p>
              <p className="text-stone-300 ml-4">Repeat stacking to 4 layers → R Charged Heavy (Charged Punch) → Loop</p>
            </>
          )}
        </div>

        <h3 className="mb-3 text-lg font-semibold text-stone-200">{t("s5Burst", locale)}</h3>
        <div className="mb-4 rounded-lg border border-stone-800 bg-stone-950 p-4 font-mono text-sm">
          {isZh ? (
            <>
              <p className="text-amber-400">易武加速攒天志：</p>
              <p className="text-stone-300 ml-4">绳镖上buff → 易武切手甲（直接第3段开始）→ 打到第6段触发鹰隼 → 天志+1 → 再来一轮 → 4层蓄力拳</p>
              <p className="text-red-400 mt-2">关键：不用易武技需要打完整6段，用易武技只需打3-4段，效率翻倍</p>
            </>
          ) : (
            <>
              <p className="text-amber-400">Weapon Swap Speed Stacking:</p>
              <p className="text-stone-300 ml-4">Rope Dart buffs → Weapon Swap to Gauntlets (starts at 3rd hit) → Hit through to 6th for Falcon → Tianzhi +1 → Repeat → 4 layers → Charged punch</p>
              <p className="text-red-400 mt-2">Key: Without Weapon Swap you need all 6 hits; with it, only 3-4 — doubles efficiency</p>
            </>
          )}
        </div>

        <h3 className="mb-3 text-lg font-semibold text-stone-200">{t("s5Secret", locale)}</h3>
        <div className="mb-4 rounded-lg border border-stone-800 bg-stone-950 p-4 font-mono text-sm">
          {isZh ? (
            <>
              <p className="text-amber-400">CD填充：</p>
              <p className="text-stone-300 ml-4">神龙吐火 → 骑龙回马 → 绳镖补buff → 易武切回手甲 → 继续攒天志</p>
              <p className="text-amber-400 mt-2">紧急走位：</p>
              <p className="text-stone-300 ml-4">手甲范围短，BOSS位移后需要快速拉近距离再进入循环</p>
            </>
          ) : (
            <>
              <p className="text-amber-400">CD Filler:</p>
              <p className="text-stone-300 ml-4">Shenlong Fire Breath → Dragon Rider's Strike → Rope Dart refresh buffs → Weapon Swap back → Resume Tianzhi stacking</p>
              <p className="text-amber-400 mt-2">Emergency reposition:</p>
              <p className="text-stone-300 ml-4">Gauntlets have short range — after boss moves, quickly close distance before restarting cycle</p>
            </>
          )}
        </div>

        <figure className="my-8 flex flex-col items-center">
          <div className="w-full max-w-2xl overflow-hidden rounded-xl border border-amber-900/20">
            <iframe src="https://player.bilibili.com/player.html?bvid=BV1GQmLBSEA1&page=1&high_quality=1&autoplay=0" title="Pozhu Yuan Speed Guide" className="aspect-video w-full" allowFullScreen sandbox="allow-scripts allow-same-origin allow-popups" loading="lazy" />
          </div>
          <figcaption className="mt-2 text-xs text-stone-500">{t("videoCombo", locale)}</figcaption>
        </figure>
      </section>

      {/* ── 6. Dungeon ── */}
      <section className="mb-10">
        <h2 className="mb-4 border-b border-stone-800 pb-2 text-xl font-bold text-amber-400">{t("s6Title", locale)}</h2>
        <div className="mb-4 rounded-xl border border-amber-600/20 bg-amber-900/5 p-5">
          <p className="text-sm text-stone-300 leading-relaxed">{t("s6Intro", locale)}</p>
        </div>

        <h3 className="mb-3 text-lg font-semibold text-stone-200">{t("s6Sleeping", locale)}</h3>
        <div className="space-y-3 text-sm text-stone-300 leading-relaxed">
          {dungeonSleeping.map((item, i) => (
            <div key={i} className="rounded-lg border border-stone-800 bg-stone-900/50 p-4">
              <p><strong className={item.color}>{item.label}</strong>{item.text}</p>
            </div>
          ))}
        </div>

        <h3 className="mb-3 mt-6 text-lg font-semibold text-stone-200">{t("s6Rong", locale)}</h3>
        <div className="space-y-3 text-sm text-stone-300 leading-relaxed">
          {dungeonRong.map((item, i) => (
            <div key={i} className="rounded-lg border border-stone-800 bg-stone-900/50 p-4">
              <p><strong className={item.color}>{item.label}</strong>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 7. Tips ── */}
      <section className="mb-10">
        <h2 className="mb-4 border-b border-stone-800 pb-2 text-xl font-bold text-amber-400">{t("s7Title", locale)}</h2>
        <div className="space-y-3">
          {tips.map((tip, i) => (
            <div key={i} className="rounded-lg border border-stone-800 bg-stone-900/50 p-4">
              <h4 className="font-bold text-stone-200 mb-1">{i + 1}. {tip.title}</h4>
              <p className="text-sm text-stone-400">{tip.text}</p>
            </div>
          ))}
        </div>
      </section>

    </article>
  );
}
