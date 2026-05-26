"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

const ARTICLE_ID = "pozhu-chen";

type L = "zh" | "en";
const i18n = {
  home: { zh: "首页", en: "Home" },
  builds: { zh: "流派攻略", en: "Build Guides" },
  guideTitle: { zh: "破竹尘（绳镖伞）完全攻略", en: "Pozhu Chen — Rope Dart + Umbrella Complete Guide" },
  tierBadge: { zh: "T0 流派", en: "T0 Build" },
  rangedBurst: { zh: "高操作输出", en: "High Execution DPS" },
  pozhuAttr: { zh: "破竹属性", en: "Pozhu Element" },
  subtitle: { zh: "醉梦游春（伞） + 栗子行云（绳镖） — 完美接伞增伤50%，河西版本T0级PVE输出", en: "Zui Meng You Chun (Umbrella) + Lizi Xing Yun (Rope Dart) — Perfect Catch +50% damage, T0 PvE DPS of Hexi patch" },
  version: { zh: "游戏版本 v2.1.0", en: "Game Version v2.1.0" },
  lastUpdate: { zh: "最后更新：2026-05-12", en: "Last Updated: 2026-05-12" },
  author: { zh: "作者：攻略组", en: "By: Guide Team" },
  bookmark: { zh: "收藏", en: "Bookmark" },
  logout: { zh: "退出", en: "Logout" },
  loginRegister: { zh: "登录 / 注册", en: "Login / Register" },
  // Section 1
  s1Title: { zh: "一、流派定位与核心机制", en: "1. Playstyle Overview & Core Mechanics" },
  s1Playstyle: { zh: "1.1 绳镖挂buff → 伞抛伞 → 完美接伞", en: "1.1 Rope Dart Buffs → Umbrella Toss → Perfect Catch" },
  s1Intro: {
    zh: '破竹尘由醉梦游春（伞）+ 栗子行云（绳镖）组成，是河西版本登顶的T0级PVE输出流派。核心机制是"绳镖三连上buff → 伞Q抛伞 → 完美接伞"循环。完美接伞可强化下次伞击50%伤害，连续完美接伞解锁极限输出模式。操作上限极高，熟练后伤害天花板全游戏顶级。',
    en: 'Pozhu Chen combines Zui Meng You Chun (Umbrella) + Lizi Xing Yun (Rope Dart), the top T0 PvE DPS build of the Hexi patch. The core mechanic is "Rope Dart triple buff → Umbrella Q toss → Perfect Catch" cycle. Perfect Catch boosts the next Umbrella strike by 50% damage, and chaining perfect catches unlocks extreme DPS mode. The execution ceiling is extremely high — mastery yields top-of-the-game damage.',
  },
  s1CoreTitle: { zh: "1.2 核心机制：完美接伞与绳镖三连", en: "1.2 Core Mechanic: Perfect Catch & Rope Dart Triple" },
  s1CoreText: {
    zh: '破竹尘的输出循环分三步：①绳镖三连（Q+R+~）上满buff（失魂落魄+回魂），为伞积攒资源；②切伞Q抛伞（核心伤害来源），伞在空中自动攻击；③在伞回来的瞬间完美接伞，触发50%增伤效果。全程必须锁定目标，否则丢失幻影伞共鸣伤害。连续13次完美接伞解锁极限输出模式。核心心法「绳舟行木」延长绳镖buff持续时间，保证资源充足。',
    en: 'The DPS cycle has three steps: ① Rope Dart triple (Q+R+~) applies full buffs (Soul Loss + Soul Return), building resources for Umbrella; ② Swap to Umbrella Q to toss it (core damage source) — it auto-attacks while airborne; ③ Catch the returning Umbrella at the perfect moment for a 50% damage boost. You MUST lock on to targets or you lose Phantom Umbrella resonance damage. Chain 13 perfect catches to unlock extreme DPS mode. The core inner art "Shengzhou Xingmu" extends Rope Dart buff duration, ensuring sufficient resources.',
  },
  s1ProsTitle: { zh: "✅ 优势", en: "✅ STRENGTHS" },
  s1ConsTitle: { zh: "❌ 劣势", en: "❌ WEAKNESSES" },
  videoGuide: { zh: "视频：破竹尘最全面攻略合集（B站）", en: "Video: Pozhu Chen Most Comprehensive Guide (Bilibili)" },
  // Section 2
  s2Title: { zh: "二、技能加点推荐（1-30级）", en: "2. Skill Point Allocation (Lv 1-30)" },
  s2Sub: { zh: "2.1 破竹尘伞镖加点路线", en: "2.1 Pozhu Chen Umbrella + Rope Dart Skill Priority" },
  s2Intro: { zh: "优先点满伞Q（抛伞）和绳镖三连技能，保证核心循环流畅。奇术以箫吟千浪和凌云踏为核心。", en: "Prioritize maxing Umbrella Q (Toss) and Rope Dart triple skills for smooth core rotation. Secret Arts center on Flute of a Thousand Waves and Cloud Step." },
  thLevel: { zh: "等级阶段", en: "Level Range" },
  thSkill: { zh: "技能名称", en: "Skill Name" },
  thPriority: { zh: "优先级", en: "Priority" },
  thNote: { zh: "说明", en: "Notes" },
  s2Attr: { zh: "2.2 属性加点建议", en: "2.2 Attribute Point Allocation" },
  attrTip: { zh: "体魄和眼力优先加至30级。调律词条优先会心/敏捷/精准，注意精准不要溢出。全程锁定目标是输出前提，属性面板要保证命中稳定。", en: "Physique and Perception to Lv 30 first. Attunement priority: Crit/Agility/Precision — watch for Precision overcap. Lock-on is mandatory for full damage, so stat panel must ensure stable hit rate." },
  // Section 3
  s3Title: { zh: "三、开局装备推荐", en: "3. Early Game Gear Recommendations" },
  s3Intro: {
    zh: '破竹尘的装备以连星套或时雨套为核心。连星套提供稳定增伤，时雨套在完美接伞循环中收益更高。前期过渡用斗易套或飞隼套。',
    en: 'Pozhu Chen gear centers on Lianxing (Linked Stars) Set or Shiyu (Timely Rain) Set. Lianxing provides stable damage boost; Shiyu yields higher returns during perfect catch cycles. Transition from Douyi or Feisun Set early.',
  },
  thHow: { zh: "获取方式：", en: "How to get: " },
  thStat: { zh: "核心属性：", en: "Key stats: " },
  s3GearTip: {
    zh: "装备进阶：连星套和时雨套输出差不太多，连星套更稳定，时雨套在完美循环中上限更高。调律词条优先会心>敏捷>精准>外功攻击。全程锁定的前提下面板命中要保证。",
    en: "Gear Progression: Lianxing and Shiyu perform similarly — Lianxing is more stable, Shiyu has a higher ceiling with perfect cycles. Attunement: Crit > Agility > Precision > Physical ATK. Lock-on is the prerequisite — ensure hit rate on your panel.",
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
  s5Burst: { zh: "5.2 极限完美接伞循环（进阶）", en: "5.2 Extreme Perfect Catch Loop (Advanced)" },
  s5Secret: { zh: "5.3 箫吟千浪无缝填充循环", en: "5.3 Flute of a Thousand Waves Seamless Filler" },
  videoCombo: { zh: "视频：伞+绳镖完美接伞无缝循环（B站）", en: "Video: Umbrella + Rope Dart Perfect Catch Seamless Loop (Bilibili)" },
  // Section 6
  s6Title: { zh: "六、副本攻略：破竹尘职责", en: "6. Dungeon Guide — Pozhu Chen Role" },
  s6Intro: {
    zh: '破竹尘在副本中担任T0级远程DPS，核心职责是保持完美接伞循环打出极限伤害。全程锁定目标、节奏不断是输出的关键。操作上限高但下限也低——接伞失误伤害会大幅下降。',
    en: 'Pozhu Chen serves as T0 ranged DPS in dungeons. Your core duty is maintaining perfect catch cycles for extreme damage. Locking on and keeping rhythm unbroken is the key. High ceiling but low floor — missed catches drastically reduce DPS.',
  },
  s6Sleeping: { zh: "金明池·睡道人 — 破竹尘要点", en: "Jinming Pool — Sleeping Daoist: Key Points" },
  s6Rong: { zh: "金明池·容鸢 — 破竹尘要点", en: "Jinming Pool — Rong Yuan: Key Points" },
  // Section 7
  s7Title: { zh: "七、进阶技巧与常见误区", en: "7. Advanced Tips & Common Mistakes" },
  // Comments
  comments: { zh: "评论区", en: "Comments" },
  writeComment: { zh: "写下你的评论...", en: "Write a comment..." },
  collapseComment: { zh: "收起评论框", en: "Collapse" },
  submitComment: { zh: "发表评论", en: "Post Comment" },
  commentPlaceholder: { zh: "分享你的破竹尘心得...", en: "Share your Pozhu Chen tips..." },
};

function t(key: keyof typeof i18n, locale: L): string {
  return i18n[key]?.[locale] ?? i18n[key]?.zh ?? key;
}

export default function PozhuChenGuide() {
  const params = useParams();
  const locale = (params?.locale as L) || "zh";
  const isZh = locale === "zh";

  const skillTable = isZh ? [
    { level: "1-5级", skill: "伞Q·抛伞", prio: "★★★★★", note: "核心伤害技能，伞抛出后自动攻击，完美接伞增伤50%，必满" },
    { level: "1-5级", skill: "绳镖Q·仇杀令", prio: "★★★★★", note: "三连起手技，上失魂落魄buff，必满" },
    { level: "5-10级", skill: "绳镖R·回魂", prio: "★★★★★", note: "三连第二段，上回魂buff，与Q配合为伞攒资源" },
    { level: "10-15级", skill: "绳镖·~（特殊技）", prio: "★★★★☆", note: "三连第三段，完成buff叠加，切伞准备抛伞" },
    { level: "15-20级", skill: "伞·幻影共鸣", prio: "★★★★☆", note: "锁定目标后的共鸣伤害，全程必须锁定目标" },
    { level: "20-25级", skill: "奇术·箫吟千浪", prio: "★★★★★", note: "核心填充奇术，无缝衔接循环，增伤效果关键" },
    { level: "25-30级", skill: "奇术·凌云踏", prio: "★★★★☆", note: "位移奇术，调整站位接伞，保持循环不断" },
  ] : [
    { level: "Lv 1-5", skill: "Umbrella Q · Toss", prio: "★★★★★", note: "Core damage skill — auto-attacks while airborne, Perfect Catch +50%, max first" },
    { level: "Lv 1-5", skill: "Rope Dart Q · Vendetta", prio: "★★★★★", note: "Triple opener — applies Soul Loss buff, max first" },
    { level: "Lv 5-10", skill: "Rope Dart R · Soul Return", prio: "★★★★★", note: "Triple 2nd hit — applies Soul Return buff, pairs with Q to build Umbrella resources" },
    { level: "Lv 10-15", skill: "Rope Dart ~ (Special)", prio: "★★★★☆", note: "Triple 3rd hit — completes buff stacking, swap to Umbrella for toss" },
    { level: "Lv 15-20", skill: "Umbrella · Phantom Resonance", prio: "★★★★☆", note: "Lock-on resonance damage — must lock on to target at all times" },
    { level: "Lv 20-25", skill: "Secret Art · Flute of a Thousand Waves", prio: "★★★★★", note: "Core filler Secret Art — seamless rotation bridge, key damage boost" },
    { level: "Lv 25-30", skill: "Secret Art · Cloud Step", prio: "★★★★☆", note: "Gap closer — reposition for catch, maintain unbroken rotation" },
  ];

  const equipItems = isZh ? [
    { name: "连星·伞（武器）", slot: "主武器", how: "醉梦游春解锁后，百业商店兑换或高级副本掉落", stat: "外功攻击、会心率" },
    { name: "连星·绳镖（武器）", slot: "副武器", how: "栗子行云解锁后，百业商店兑换或高级副本掉落", stat: "外功攻击、敏捷" },
    { name: "连星·护腕", slot: "防具·手部", how: "河西高级副本或百业商店兑换", stat: "会心率、精准" },
    { name: "连星·战靴", slot: "防具·足部", how: "河西区域世界BOSS掉落", stat: "移速、外功攻击" },
    { name: "连星·腰佩", slot: "饰品", how: "高级探索宝箱或百业商店兑换", stat: "最小/最大外功攻击" },
  ] : [
    { name: "Lianxing Umbrella (Weapon)", slot: "Main Weapon", how: "Unlocked via Zui Meng You Chun, Hundred Trades shop or dungeon drops", stat: "Physical ATK, Crit Rate" },
    { name: "Lianxing Rope Dart (Weapon)", slot: "Off-hand Weapon", how: "Unlocked via Lizi Xing Yun, Hundred Trades shop or dungeon drops", stat: "Physical ATK, Agility" },
    { name: "Lianxing Bracers", slot: "Armor — Hands", how: "Advanced Hexi dungeons or Hundred Trades shop", stat: "Crit Rate, Precision" },
    { name: "Lianxing Boots", slot: "Armor — Feet", how: "Hexi region world boss drops", stat: "Move Speed, Physical ATK" },
    { name: "Lianxing Belt", slot: "Accessory", how: "Advanced exploration chests or Hundred Trades shop", stat: "Min/Max Physical ATK" },
  ];

  const innerArts = isZh ? [
    { name: "绳舟行木", style: "破竹尘", effect: "核心心法，延长绳镖三连buff（失魂落魄+回魂）持续时间，保证伞有充足资源抛伞，没有它循环断档", prio: "必带" },
    { name: "易水歌", style: "通用", effect: "通用增伤心法，前期核心", prio: "必带" },
    { name: "威猛歌", style: "通用", effect: "通用增伤，与易水歌搭配使用", prio: "推荐" },
    { name: "花上月令", style: "牵丝玉", effect: "可选，完美接伞循环中增伤效果不错", prio: "推荐" },
    { name: "断石", style: "通用", effect: "前中期过渡心法，后期替换", prio: "推荐" },
    { name: "忘川", style: "通用", effect: "大后期替换断石，更高阶增伤心法", prio: "大后期" },
  ] : [
    { name: "Shengzhou Xingmu (Boat on the River)", style: "Pozhu Chen", effect: "Core inner art — extends Rope Dart triple buff (Soul Loss + Soul Return) duration, ensuring Umbrella has enough resources. Without it, your cycle breaks", prio: "Must-have" },
    { name: "Yishui Song", style: "Universal", effect: "Universal damage boost, core for early game", prio: "Must-have" },
    { name: "Weimeng Song (Fierce Ode)", style: "Universal", effect: "Universal damage boost, pairs with Yishui Song", prio: "Recommended" },
    { name: "Moon Over Flowers", style: "Qiansi Yu", effect: "Optional — decent damage boost during perfect catch cycles", prio: "Recommended" },
    { name: "Duanshi (Stone Breaker)", style: "Universal", effect: "Early-mid game transition inner art, replaced later", prio: "Recommended" },
    { name: "Wangchuan (River of Forgetfulness)", style: "Universal", effect: "Replaces Duanshi in late game, higher-tier damage boost", prio: "Late game" },
  ];

  const tips = isZh ? [
    { title: "全程锁定目标", text: "破竹尘必须全程锁定目标，否则丢失幻影伞共鸣伤害。不锁定等于少打一大截伤害。养成锁定习惯是玩好破竹尘的第一步。" },
    { title: "完美接伞是灵魂操作", text: "完美接伞增伤50%，连续完美接伞解锁极限输出模式。接伞时机需要反复练习形成肌肉记忆。新手可以先从低难本开始练，100%接伞率后再打高难。" },
    { title: "绳镖三连不要断buff", text: "绳镖Q+R+~三连上的buff（失魂落魄+回魂）是伞抛伞的资源基础。buff断了伞就没资源抛，整个循环中断。绳舟行木心法延长buff时间就是为了保险。" },
    { title: "箫吟千浪是无缝衔接关键", text: "箫吟千浪是破竹尘的核心奇术，在抛伞后等待接伞的间隙使用，保证输出不断档。不带箫吟千浪循环会有明显空窗。" },
    { title: "操作上限极高但下限也低", text: "破竹尘是全游戏操作要求最高的流派之一。完美循环T0，接伞失误伤害断崖。如果觉得操作压力太大，可以先玩破竹风过渡，手感好了再转破竹尘。" },
  ] : [
    { title: "Lock on at all times", text: "You MUST maintain lock-on throughout — otherwise you lose Phantom Umbrella resonance damage. No lock-on = massive DPS loss. Building the lock-on habit is step one for Pozhu Chen." },
    { title: "Perfect Catch is the soul", text: "Perfect Catch boosts +50%, and chaining unlocks extreme DPS mode. The catch timing requires practice for muscle memory. Start in easy dungeons to build 100% catch rate before tackling hard content." },
    { title: "Never let Rope Dart buffs drop", text: "Rope Dart Q+R+~ triple applies buffs (Soul Loss + Soul Return) that fuel Umbrella tosses. If buffs drop, Umbrella has no resources and the cycle breaks. Shengzhou Xingmu inner art extends buff duration as insurance." },
    { title: "Flute of a Thousand Waves is essential", text: "Flute of a Thousand Waves is the core Secret Art — use it during the gap after tossing Umbrella and before catching. Without it, your rotation has noticeable dead time." },
    { title: "High ceiling, low floor", text: "Pozhu Chen has the highest execution requirement in the game. Perfect cycle = T0; missed catches = DPS cliff. If the pressure is too much, start with Pozhu Feng and transition to Pozhu Chen once your mechanics are solid." },
  ];

  const dungeonSleeping = isZh ? [
    { label: "远程输出优势：", color: "text-amber-400", text: "伞抛出后自动攻击，你在跑位躲机制时伞也在输出。这让破竹尘在机制密集的BOSS战中也能保持不错的伤害覆盖。" },
    { label: "接伞节奏不要被打断：", color: "text-red-400", text: "藤牢和小怪阶段是接伞最容易被干扰的时机。提前规划好循环节奏，不要在机制密集时强行抛伞，宁可等安全窗口再抛。" },
    { label: "气竭窗口全爆发：", color: "text-amber-400", text: "BOSS气竭期间是最佳输出窗口，提前用绳镖三连上满buff，气竭瞬间伞Q抛伞+完美接伞循环全打出去。" },
  ] : [
    { label: "Ranged DPS advantage: ", color: "text-amber-400", text: "Umbrella auto-attacks after toss — even while you dodge mechanics, it keeps dealing damage. This gives Pozhu Chen solid DPS coverage during mechanic-heavy fights." },
    { label: "Don't let catch rhythm break: ", color: "text-red-400", text: "Vine Prison and add phases are the easiest moments to lose catch timing. Plan your cycle ahead — don't force tosses during heavy mechanics, wait for safe windows." },
    { label: "Qi Exhaustion full burst: ", color: "text-amber-400", text: "Boss Qi Exhaustion is the ideal burst window. Pre-apply Rope Dart triple buffs, then dump Umbrella Q toss + perfect catch cycle the instant it starts." },
  ];

  const dungeonRong = isZh ? [
    { label: "搬桶时保持循环：", color: "text-amber-400", text: "搬桶时不要强求输出，先保证生存。伞如果正在自动攻击就让它打，搬完桶回来继续循环。不要因为搬桶断了绳镖buff。" },
    { label: "护盾阶段集火：", color: "text-red-400", text: "提前绳镖三连上满buff，护盾出现瞬间伞Q抛伞全力输出帮助破盾。完美接伞的50%增伤对护盾也有效。" },
    { label: "三黄线注意站位：", color: "text-amber-400", text: "远程优势——可以站在较远位置输出和搬近处桶。凌云踏帮助快速位移抢桶。不要贪输出忘了搬桶。" },
  ] : [
    { label: "Maintain cycle while carrying: ", color: "text-amber-400", text: "Don't force DPS while carrying barrels — survival first. Let Umbrella auto-attack if it's already out, resume cycle after. Don't let Rope Dart buffs expire while carrying." },
    { label: "Shield phase focus: ", color: "text-red-400", text: "Pre-apply Rope Dart triple buffs, then dump Umbrella Q the instant the shield spawns. Perfect Catch's 50% boost also works on shields." },
    { label: "Triple line positioning: ", color: "text-amber-400", text: "Ranged advantage — output and grab nearby barrels from distance. Cloud Step helps quickly reposition for barrels. Don't greed DPS over barrel duty." },
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
          <span className="rounded-full bg-amber-500/20 px-3 py-1 text-xs font-bold text-amber-400 ring-1 ring-amber-500/30">{t("tierBadge", locale)}</span>
          <span className="rounded-full bg-stone-800 px-3 py-1 text-xs font-semibold text-stone-300">{t("rangedBurst", locale)}</span>
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
                "• 河西版本唯一T0级PVE输出流派",
                "• 完美接伞增伤50%，连续完美接伞极限输出",
                "• 伞抛出后自动攻击，跑位时也有伤害",
                "• 箫吟千浪无缝填充，循环非常流畅",
                "• 熟练后伤害天花板全游戏顶级",
              ] : [
                "• The sole T0 PvE DPS build of the Hexi patch",
                "• Perfect Catch +50% damage, chained catches for extreme output",
                "• Umbrella auto-attacks while tossed — damage during repositioning",
                "• Flute of a Thousand Waves seamless filler — very smooth rotation",
                "• Mastery yields the highest damage ceiling in the game",
              ].map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
          <div className="rounded-lg border border-red-900/30 bg-red-900/5 p-4">
            <h4 className="mb-2 text-sm font-bold text-red-400 uppercase tracking-wider">{t("s1ConsTitle", locale)}</h4>
            <ul className="space-y-1.5 text-sm text-stone-300">
              {isZh ? [
                "• 操作要求全游戏最高之一，完美接伞需要大量练习",
                "• 接伞失误伤害断崖式下降，下限很低",
                "• PVP表现较弱，百业战存在接伞bug",
                "• 全程必须锁定目标，操作负担重",
              ] : [
                "• Highest execution requirement in the game — Perfect Catch demands extensive practice",
                "• Missed catches cause DPS to cliff-dive — very low floor",
                "• Weak in PvP, buggy Perfect Catch in Hundred Trades battles",
                "• Must lock on at all times — high mechanical burden",
              ].map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        </div>

        <figure className="my-8 flex flex-col items-center">
          <div className="w-full max-w-2xl overflow-hidden rounded-xl border border-amber-900/20">
            <iframe src="https://player.bilibili.com/player.html?bvid=BV1jtZJYqEZn&page=1&high_quality=1&autoplay=0" title="Pozhu Chen Comprehensive Guide" className="aspect-video w-full" allowFullScreen sandbox="allow-scripts allow-same-origin allow-popups" loading="lazy" />
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
                  <td className={`px-4 py-3 font-bold ${[0, 1, 2, 5].includes(i) ? "text-red-400" : i < 6 ? "text-amber-400" : "text-stone-400"}`}>{s.prio}</td>
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
              <p className="text-amber-400">绳镖起手三连：</p>
              <p className="text-stone-300 ml-4">绳镖Q（仇杀令）→ R（回魂）→ ~（特殊技）→ 三连buff叠满</p>
              <p className="text-amber-400 mt-2">伞抛伞循环：</p>
              <p className="text-stone-300 ml-4">切伞 → 伞Q抛伞（伞自动攻击）→ 箫吟千浪（等待间隙填充）→ 完美接伞（+50%增伤）</p>
              <p className="text-amber-400 mt-2">循环衔接：</p>
              <p className="text-stone-300 ml-4">接伞后 → 绳镖补buff → 再次伞Q抛伞 → 完美接伞 → 循环</p>
            </>
          ) : (
            <>
              <p className="text-amber-400">Rope Dart Opener Triple:</p>
              <p className="text-stone-300 ml-4">Rope Dart Q (Vendetta) → R (Soul Return) → ~ (Special) → Full buffs stacked</p>
              <p className="text-amber-400 mt-2">Umbrella Toss Cycle:</p>
              <p className="text-stone-300 ml-4">Swap to Umbrella → Umbrella Q Toss (auto-attacks) → Flute of a Thousand Waves (gap filler) → Perfect Catch (+50%)</p>
              <p className="text-amber-400 mt-2">Chain Recovery:</p>
              <p className="text-stone-300 ml-4">After catch → Rope Dart refresh buffs → Umbrella Q toss again → Perfect Catch → Loop</p>
            </>
          )}
        </div>

        <h3 className="mb-3 text-lg font-semibold text-stone-200">{t("s5Burst", locale)}</h3>
        <div className="mb-4 rounded-lg border border-stone-800 bg-stone-950 p-4 font-mono text-sm">
          {isZh ? (
            <>
              <p className="text-amber-400">13次完美接伞极限模式：</p>
              <p className="text-stone-300 ml-4">连续13次完美接伞 → 解锁极限输出模式 → 伞Q+完美接伞循环速度加快 → 伤害质变</p>
              <p className="text-red-400 mt-2">关键：任何一次接伞失误都会中断计数，需要重新开始。肌肉记忆是唯一解。</p>
            </>
          ) : (
            <>
              <p className="text-amber-400">13x Perfect Catch Extreme Mode:</p>
              <p className="text-stone-300 ml-4">Chain 13 perfect catches → Unlocks extreme DPS mode → Umbrella Q + Perfect Catch cycle speeds up → Damage transforms</p>
              <p className="text-red-400 mt-2">Key: Any single missed catch resets the counter. Muscle memory is the only solution.</p>
            </>
          )}
        </div>

        <h3 className="mb-3 text-lg font-semibold text-stone-200">{t("s5Secret", locale)}</h3>
        <div className="mb-4 rounded-lg border border-stone-800 bg-stone-950 p-4 font-mono text-sm">
          {isZh ? (
            <>
              <p className="text-amber-400">箫吟千浪无缝填充：</p>
              <p className="text-stone-300 ml-4">伞Q抛伞后 → 箫吟千浪（等待伞回来间隙）→ 完美接伞 → 绳镖补buff → 循环</p>
              <p className="text-amber-400 mt-2">Boss距离远时：</p>
              <p className="text-stone-300 ml-4">凌云踏拉近距离 → 再进入循环，否则伞抛出后可能打不到</p>
            </>
          ) : (
            <>
              <p className="text-amber-400">Flute Seamless Filler:</p>
              <p className="text-stone-300 ml-4">After Umbrella Q toss → Flute of a Thousand Waves (wait for return) → Perfect Catch → Rope Dart refresh → Loop</p>
              <p className="text-amber-400 mt-2">When boss is far:</p>
              <p className="text-stone-300 ml-4">Cloud Step to close distance → then enter rotation, or tossed Umbrella may miss</p>
            </>
          )}
        </div>

        <figure className="my-8 flex flex-col items-center">
          <div className="w-full max-w-2xl overflow-hidden rounded-xl border border-amber-900/20">
            <iframe src="https://player.bilibili.com/player.html?bvid=BV1TACvBnEub&page=1&high_quality=1&autoplay=0" title="Pozhu Chen Perfect Catch Loop" className="aspect-video w-full" allowFullScreen sandbox="allow-scripts allow-same-origin allow-popups" loading="lazy" />
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
