"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

const ARTICLE_ID = "pozhu-feng";

type L = "zh" | "en";
const i18n = {
  home: { zh: "首页", en: "Home" },
  builds: { zh: "流派攻略", en: "Build Guides" },
  guideTitle: { zh: "破竹风（双刀刺客）完全攻略", en: "Pozhu Feng — Dual Blades Assassin Complete Guide" },
  tierBadge: { zh: "T1 流派", en: "T1 Build" },
  assassinRole: { zh: "高机动刺客", en: "High Mobility Assassin" },
  pozhuAttr: { zh: "破竹属性", en: "Pozhu Element" },
  subtitle: { zh: "泥犁三垢（双刀） + 栗子游尘（绳镖） — 鼠鼠协同爆发，白刀攒怒红刀收割", en: "Nili Three Defilements (Dual Blades) + Lizi Wandering Dust (Rope Dart) — Shu Shu synergy burst, white blade fury into red blade execute" },
  version: { zh: "游戏版本 v2.1.0", en: "Game Version v2.1.0" },
  lastUpdate: { zh: "最后更新：2026-05-12", en: "Last Updated: 2026-05-12" },
  author: { zh: "作者：攻略组", en: "By: Guide Team" },
  bookmark: { zh: "收藏", en: "Bookmark" },
  logout: { zh: "退出", en: "Logout" },
  loginRegister: { zh: "登录 / 注册", en: "Login / Register" },
  // Section 1
  s1Title: { zh: "一、流派定位与核心机制", en: "1. Playstyle Overview & Core Mechanics" },
  s1Playstyle: { zh: "1.1 白刀攒怒 → 红刀爆发", en: "1.1 White Blade Fury → Red Blade Burst" },
  s1Intro: {
    zh: '破竹风由泥犁三垢（双刀）+ 栗子游尘（绳镖）组成，是高机动的近战刺客流派。核心输出逻辑不是双刀本身，而是绳镖召唤的「鼠鼠」（鼠镖）。先用绳镖挂鼠鼠，再切双刀攻击触发鼠鼠协同伤害——鼠鼠才是真正的主力输出。配合白刀攒怒→红刀爆发的循环，实战容错高、爆发极强。',
    en: 'Pozhu Feng combines Nili Three Defilements (Dual Blades) + Lizi Wandering Dust (Rope Dart), a high-mobility melee assassin build. The core DPS logic isn\'t the dual blades themselves, but the "Shu Shu" (Rat Dart) summoned by the Rope Dart. Deploy Shu Shu first, then swap to Dual Blades to trigger its synergy attacks — Shu Shu is the real damage dealer. Combined with the White Blade (fury build) → Red Blade (burst) cycle, it offers high burst with good margin for error.',
  },
  s1CoreTitle: { zh: "1.2 核心机制：鼠鼠协同与红刀爆发", en: "1.2 Core Mechanic: Shu Shu Synergy & Red Blade Burst" },
  s1CoreText: {
    zh: '破竹风的核心循环分为三个阶段：①白刀阶段用双刀轻攻击和十字斩攒满怒气；②切绳镖释放鼠鼠（栗子游尘技能），确保鼠鼠挂在BOSS身上；③怒气满后进入红刀状态全力输出，鼠鼠协同攻击频率最大化。关键技巧：红刀普攻第4段前摇太长，用冲刺打断重置普攻段数，提高鼠鼠触发频率。绳镖Q技能（仇杀令）必须命中目标，否则鼠鼠伤害大幅降低。',
    en: 'The core cycle has three phases: ① White Blade phase — use Dual Blade light attacks and Cross Slash to fill the Fury gauge; ② Swap to Rope Dart and deploy Shu Shu (Lizi Wandering Dust skill), ensuring it\'s attached to the boss; ③ At full Fury, enter Red Blade state for maximum DPS, maximizing Shu Shu trigger frequency. Key technique: Red Blade auto-attack 4th hit has a long windup — interrupt it with a dash to reset the attack chain, boosting Shu Shu proc rate. Rope Dart Q ( vendetta mark) MUST hit the target or Shu Shu damage drops massively.',
  },
  s1ProsTitle: { zh: "✅ 优势", en: "✅ STRENGTHS" },
  s1ConsTitle: { zh: "❌ 劣势", en: "❌ WEAKNESSES" },
  videoGuide: { zh: "视频：破竹风毕业级流派搭配攻略（B站）", en: "Video: Pozhu Feng Graduation Build Guide (Bilibili)" },
  // Section 2
  s2Title: { zh: "二、技能加点推荐（1-30级）", en: "2. Skill Point Allocation (Lv 1-30)" },
  s2Sub: { zh: "2.1 泥犁三垢（双刀）+ 栗子游尘（绳镖）加点路线", en: "2.1 Dual Blades + Rope Dart Skill Priority" },
  s2Intro: { zh: "优先点满双刀的十字斩和红刀爆发技能，绳镖点出鼠鼠召唤和Q标记技能。奇术以辅助输出为主。", en: "Prioritize maxing Dual Blade Cross Slash and Red Blade burst skills. For Rope Dart, unlock Shu Shu summon and Q mark skills. Choose Secret Arts that support DPS." },
  thLevel: { zh: "等级阶段", en: "Level Range" },
  thSkill: { zh: "技能名称", en: "Skill Name" },
  thPriority: { zh: "优先级", en: "Priority" },
  thNote: { zh: "说明", en: "Notes" },
  s2Attr: { zh: "2.2 属性加点建议", en: "2.2 Attribute Point Allocation" },
  attrTip: { zh: "体魄和眼力优先加至30级，后期补满协调。调律词条优先大外功+劲，会心率是核心追求。三率面板需堆到一定阈值稳定触发增伤。", en: "Physique and Perception to Lv 30 first, then max Coordination late. Attunement priority: Max Physical ATK + Power. Crit Rate is the core stat. Triple-rate panel needs to hit thresholds for stable damage proc." },
  // Section 3
  s3Title: { zh: "三、开局装备推荐", en: "3. Early Game Gear Recommendations" },
  s3Intro: {
    zh: '破竹风的装备以飞隼套为核心，纯输出最大化。PVP可选燕归套（容错高、调律简单）。前期过渡用斗易套，后期换飞隼毕业。',
    en: 'Pozhu Feng gear centers on the Feisun (Falcon) Set for maximum DPS. For PvP, Yan Gui (Swallow Return) Set offers better survivability and easier attunement. Transition from Douyi Set early to Feisun for graduation.',
  },
  thHow: { zh: "获取方式：", en: "How to get: " },
  thStat: { zh: "核心属性：", en: "Key stats: " },
  s3GearTip: {
    zh: "装备进阶：PVE竞速首选飞隼套，伤害最大化。新手/日常可选燕归套，容错高且调律简单。初始词条左边4件选大外功，右边头盔衣服选三率，护腕鞋子选劲或三率。调律双刀大外+劲。",
    en: "Gear Progression: Feisun Set for PvE speedrun — pure damage max. Yan Gui Set for beginners/dailies — forgiving and easy to tune. Initial affixes: left 4 pieces Max Physical ATK, right head/chest Triple Rate, bracers/boots Power or Triple Rate. Attune Dual Blades: Max ATK + Power.",
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
  s5Burst: { zh: "5.2 十字斩快速攒怒循环", en: "5.2 Cross Slash Fast Fury Rotation" },
  s5Secret: { zh: "5.3 红刀冲刺打断循环（核心技巧）", en: "5.3 Red Blade Dash Cancel Loop (Key Technique)" },
  videoCombo: { zh: "视频：破竹风双刀绳镖实战连招（B站）", en: "Video: Pozhu Feng Dual Blades Combat Combo (Bilibili)" },
  // Section 6
  s6Title: { zh: "六、副本攻略：破竹风职责", en: "6. Dungeon Guide — Pozhu Feng Role" },
  s6Intro: {
    zh: '破竹风在副本中担任近战DPS，核心职责是在安全窗口打出红刀爆发。高机动性让你能快速调整站位，但身板较脆需要注意生存。鼠鼠是远程协同攻击，即使你在跑位鼠鼠也在输出。',
    en: 'Pozhu Feng serves as melee DPS in dungeons. Your core duty is delivering Red Blade burst during safe windows. High mobility lets you reposition quickly, but you\'re squishy — survival matters. Shu Shu attacks from range, so it deals damage even while you\'re repositioning.',
  },
  s6Sleeping: { zh: "金明池·睡道人 — 破竹风要点", en: "Jinming Pool — Sleeping Daoist: Key Points" },
  s6Rong: { zh: "金明池·容鸢 — 破竹风要点", en: "Jinming Pool — Rong Yuan: Key Points" },
  // Section 7
  s7Title: { zh: "七、进阶技巧与常见误区", en: "7. Advanced Tips & Common Mistakes" },
  // Comments
  comments: { zh: "评论区", en: "Comments" },
  writeComment: { zh: "写下你的评论...", en: "Write a comment..." },
  collapseComment: { zh: "收起评论框", en: "Collapse" },
  submitComment: { zh: "发表评论", en: "Post Comment" },
  commentPlaceholder: { zh: "分享你的破竹风心得...", en: "Share your Pozhu Feng tips..." },
};

function t(key: keyof typeof i18n, locale: L): string {
  return i18n[key]?.[locale] ?? i18n[key]?.zh ?? key;
}

export default function PozhuFengGuide() {
  const params = useParams();
  const locale = (params?.locale as L) || "zh";
  const isZh = locale === "zh";

  const skillTable = isZh ? [
    { level: "1-5级", skill: "泥犁三垢·十字斩", prio: "★★★★★", note: "核心攒怒技能，2次十字斩快速攒满怒气，必满" },
    { level: "1-5级", skill: "栗子游尘·鼠鼠召唤", prio: "★★★★★", note: "核心输出来源，鼠鼠协同攻击才是真正伤害，必满" },
    { level: "5-10级", skill: "泥犁三垢·红刀爆发", prio: "★★★★★", note: "怒气满后进入红刀状态，全力输出，鼠鼠触发频率最大化" },
    { level: "10-15级", skill: "栗子游尘·仇杀令（Q）", prio: "★★★★☆", note: "绳镖标记技能，必须命中否则鼠鼠伤害大幅降低" },
    { level: "15-20级", skill: "泥犁三垢·轻攻击连段", prio: "★★★★☆", note: "基础输出手段，红刀期间穿插使用" },
    { level: "20-25级", skill: "奇术·神龙吐火", prio: "★★★☆☆", note: "CD填充技能，红刀CD期间的输出补充" },
    { level: "25-30级", skill: "奇术·骑龙回马", prio: "★★★☆☆", note: "易武衔接技，双刀↔绳镖切换时使用" },
  ] : [
    { level: "Lv 1-5", skill: "Nili · Cross Slash", prio: "★★★★★", note: "Core fury builder — 2 Cross Slashes fill the gauge fast, max first" },
    { level: "Lv 1-5", skill: "Lizi · Shu Shu Summon", prio: "★★★★★", note: "Core DPS source — Shu Shu synergy attacks are the real damage, max first" },
    { level: "Lv 5-10", skill: "Nili · Red Blade Burst", prio: "★★★★★", note: "At full Fury enter Red Blade state — full DPS, maximize Shu Shu proc rate" },
    { level: "Lv 10-15", skill: "Lizi · Vendetta Mark (Q)", prio: "★★★★☆", note: "Rope Dart mark — MUST hit or Shu Shu damage drops massively" },
    { level: "Lv 15-20", skill: "Nili · Light Attack Chain", prio: "★★★★☆", note: "Basic DPS tool, weave during Red Blade phase" },
    { level: "Lv 20-25", skill: "Secret Art · Shenlong Fire Breath", prio: "★★★☆☆", note: "CD filler, DPS supplement during Red Blade cooldown" },
    { level: "Lv 25-30", skill: "Secret Art · Dragon Rider's Strike", prio: "★★★☆☆", note: "Weapon swap chain, use when switching Dual Blades ↔ Rope Dart" },
  ];

  const equipItems = isZh ? [
    { name: "飞隼·双刀（武器）", slot: "主武器", how: "泥犁三垢解锁后，百业商店兑换或高级副本掉落", stat: "外功攻击、会心率" },
    { name: "飞隼·绳镖（武器）", slot: "副武器", how: "栗子游尘解锁后，百业商店兑换或高级副本掉落", stat: "外功攻击、劲" },
    { name: "飞隼·护腕", slot: "防具·手部", how: "清河高级副本或百业商店兑换", stat: "大外功、三率" },
    { name: "飞隼·战靴", slot: "防具·足部", how: "河西区域世界BOSS掉落", stat: "移速、外功攻击" },
    { name: "飞隼·腰佩", slot: "饰品", how: "高级探索宝箱或百业商店兑换", stat: "最小/最大外功攻击" },
  ] : [
    { name: "Feisun Dual Blades (Weapon)", slot: "Main Weapon", how: "Unlocked via Nili Three Defilements, Hundred Trades shop or dungeon drops", stat: "Physical ATK, Crit Rate" },
    { name: "Feisun Rope Dart (Weapon)", slot: "Off-hand Weapon", how: "Unlocked via Lizi Wandering Dust, Hundred Trades shop or dungeon drops", stat: "Physical ATK, Power" },
    { name: "Feisun Bracers", slot: "Armor — Hands", how: "Advanced Qinghe dungeons or Hundred Trades shop", stat: "Max Physical ATK, Triple Rate" },
    { name: "Feisun Boots", slot: "Armor — Feet", how: "Hexi region world boss drops", stat: "Move Speed, Physical ATK" },
    { name: "Feisun Belt", slot: "Accessory", how: "Advanced exploration chests or Hundred Trades shop", stat: "Min/Max Physical ATK" },
  ];

  const innerArts = isZh ? [
    { name: "忘川绝响", style: "破竹风", effect: "核心增伤心法，大幅提升整体输出，没有它不要玩破竹风", prio: "必带" },
    { name: "心弥泥鱼", style: "破竹风", effect: "与鼠鼠体系高度契合，增强鼠鼠协同伤害，破竹风核心", prio: "必带" },
    { name: "易水歌", style: "通用", effect: "通用增伤心法，前期核心过渡", prio: "推荐" },
    { name: "极乐泣血", style: "通用", effect: "强化输出，中后期搭配使用", prio: "推荐" },
    { name: "征人归", style: "通用", effect: "可选心法，特定场景替换", prio: "推荐" },
    { name: "千山诀", style: "通用", effect: "大后期替换易水歌，更高阶增伤心法", prio: "大后期" },
  ] : [
    { name: "Wangchuan Resonance", style: "Pozhu Feng", effect: "Core damage inner art — massive DPS boost. Don't play Pozhu Feng without it", prio: "Must-have" },
    { name: "Xinmi Niyu (Heart of the Muddy Fish)", style: "Pozhu Feng", effect: "Synergizes perfectly with Shu Shu system — enhances Shu Shu synergy damage, core for Pozhu Feng", prio: "Must-have" },
    { name: "Yishui Song", style: "Universal", effect: "Universal damage boost, core early game transition", prio: "Recommended" },
    { name: "Jile Qixue (Bliss Weeping Blood)", style: "Universal", effect: "Damage amplifier, pairs well for mid-late game", prio: "Recommended" },
    { name: "Zhengren Gui (Wanderer's Return)", style: "Universal", effect: "Flexible inner art, swap in for specific scenarios", prio: "Recommended" },
    { name: "Qianshan Art", style: "Universal", effect: "Replaces Yishui Song in late game, higher-tier damage boost", prio: "Late game" },
  ];

  const tips = isZh ? [
    { title: "鼠鼠才是真正的输出", text: "双刀的普攻伤害并不高，鼠鼠协同攻击才是破竹风的主力输出。确保鼠鼠一直挂在BOSS身上，断了就立刻补。绳镖Q（仇杀令）必须命中，否则鼠鼠伤害大幅降低。" },
    { title: "红刀冲刺打断第4段", text: "红刀普攻第4段前摇太长，会浪费输出时间。用冲刺打断第4段重置普攻段数，回到第1段重新开始。这样鼠鼠触发频率更高，整体输出大幅提升。这是破竹风最重要的操作技巧。" },
    { title: "十字斩快速攒怒", text: "白刀阶段不要无脑平A，用十字斩攒怒效率最高。2次十字斩基本就能攒满怒气进入红刀，然后切绳镖挂鼠鼠→红刀爆发。" },
    { title: "高机动但身板脆", text: "破竹风机动性极高，但近战身板很脆。红刀输出时不要贪刀，BOSS技能来了要果断闪避。鼠鼠是远程攻击，你在跑位时鼠鼠也在输出。" },
    { title: "飞隼套是PVE首选", text: "飞隼套纯伤害最大化，是PVE竞速首选。如果觉得调律太难或容错不够，可以换燕归套，伤害差距不大但操作更舒适。" },
  ] : [
    { title: "Shu Shu is the real DPS", text: "Dual Blade auto-attack damage is modest — Shu Shu synergy attacks are the main damage source. Keep Shu Shu attached to the boss at all times; if it drops, reapply immediately. Rope Dart Q (Vendetta) MUST hit or Shu Shu damage plummets." },
    { title: "Dash cancel Red Blade 4th hit", text: "Red Blade auto-attack 4th hit has a long windup that wastes DPS time. Dash cancel it to reset the chain back to 1st hit. This dramatically increases Shu Shu proc rate and overall DPS. This is Pozhu Feng's most important mechanic." },
    { title: "Cross Slash for fast Fury", text: "Don't just auto-attack during White Blade — Cross Slash is the most efficient fury builder. Two Cross Slashes nearly fill the gauge for Red Blade, then swap to Rope Dart → deploy Shu Shu → Red Blade burst." },
    { title: "High mobility but squishy", text: "Pozhu Feng is extremely mobile but very squishy in melee. Don't greed attacks during Red Blade — dodge boss mechanics promptly. Shu Shu attacks from range, so it deals damage even while you reposition." },
    { title: "Feisun Set for PvE first", text: "Feisun Set maximizes pure damage — the top pick for PvE speedruns. If attunement is too demanding or you want more margin for error, Yan Gui Set has similar damage with easier gameplay." },
  ];

  const dungeonSleeping = isZh ? [
    { label: "高机动优势：", color: "text-amber-400", text: "破竹风机动性极高，藤牢点名时容易跑开。小怪阶段可以用冲刺快速位移集火清怪，非常灵活。" },
    { label: "鼠鼠远程输出：", color: "text-amber-400", text: "鼠鼠是远程协同攻击，即使你在跑位躲技能鼠鼠也在输出。这让破竹风在机制密集的BOSS战中也能保持不错的伤害。" },
    { label: "红刀窗口：", color: "text-red-400", text: "BOSS跳击后有几秒硬直，这是最佳红刀爆发窗口。提前挂好鼠鼠攒满怒，硬直瞬间红刀全打出去。" },
  ] : [
    { label: "Mobility advantage: ", color: "text-amber-400", text: "Pozhu Feng is extremely mobile — easy to dodge Vine Prison marks. Dash freely during add phase to quickly focus targets." },
    { label: "Shu Shu ranged DPS: ", color: "text-amber-400", text: "Shu Shu attacks from range — even while you're dodging mechanics, it keeps dealing damage. This gives Pozhu Feng solid DPS during mechanic-heavy boss fights." },
    { label: "Red Blade windows: ", color: "text-red-400", text: "After the boss leap, there are a few seconds of recovery — the perfect Red Blade burst window. Pre-deploy Shu Shu and fill Fury, then dump everything during the recovery." },
  ];

  const dungeonRong = isZh ? [
    { label: "搬桶效率高：", color: "text-amber-400", text: "破竹风机动性强，搬桶效率不低。冲刺可以快速接近桶然后搬走，适合抢远处的桶。" },
    { label: "护盾阶段爆发：", color: "text-red-400", text: "提前挂鼠鼠攒满怒，护盾出现瞬间红刀爆发帮助破盾。鼠鼠协同攻击对护盾也有伤害。" },
    { label: "三黄线灵活应对：", color: "text-amber-400", text: "高机动性让你快速抢桶搬出线。但要注意不要贪输出，搬桶优先级高于打伤害。" },
  ] : [
    { label: "Efficient barrel carrying: ", color: "text-amber-400", text: "High mobility makes barrel carrying efficient. Dash to distant barrels and carry them out — great for grabbing far ones." },
    { label: "Shield phase burst: ", color: "text-red-400", text: "Pre-deploy Shu Shu and fill Fury — the instant the shield spawns, dump Red Blade burst to help break it. Shu Shu synergy also damages the shield." },
    { label: "Triple line flexibility: ", color: "text-amber-400", text: "High mobility lets you quickly grab and carry barrels. But don't greed DPS — barrel priority is higher than damage." },
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
          <span className="rounded-full bg-stone-800 px-3 py-1 text-xs font-semibold text-stone-300">{t("assassinRole", locale)}</span>
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
                "• 爆发极高，红刀+鼠鼠协同伤害非常可观",
                "• 高机动性，冲刺位移灵活应对机制",
                "• 鼠鼠远程协同，跑位时也在输出",
                "• 循环简单（白刀攒怒→挂鼠鼠→红刀爆发），容错高",
                "• PVP也有不俗表现，高爆发抓人秒脆",
              ] : [
                "• Extreme burst — Red Blade + Shu Shu synergy deals massive damage",
                "• High mobility — dash repositions for easy mechanic handling",
                "• Shu Shu ranged synergy — deals damage even while you reposition",
                "• Simple cycle (White→Shu Shu→Red), forgiving to play",
                "• Solid in PvP too — high burst catches and deletes squishies",
              ].map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
          <div className="rounded-lg border border-red-900/30 bg-red-900/5 p-4">
            <h4 className="mb-2 text-sm font-bold text-red-400 uppercase tracking-wider">{t("s1ConsTitle", locale)}</h4>
            <ul className="space-y-1.5 text-sm text-stone-300">
              {isZh ? [
                "• 近战身板脆，红刀输出时需要精准判断安全窗口",
                "• 绳镖Q必须命中，否则鼠鼠伤害断崖",
                "• 需要反复练习冲刺打断第4段的节奏",
                "• 大世界探索体验不如远程流派",
              ] : [
                "• Squishy in melee — Red Blade requires precise safety judgment",
                "• Rope Dart Q must hit or Shu Shu damage drops off a cliff",
                "• Requires practice to master dash cancel 4th hit rhythm",
                "• Open-world exploration less comfortable than ranged builds",
              ].map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        </div>

        <figure className="my-8 flex flex-col items-center">
          <div className="w-full max-w-2xl overflow-hidden rounded-xl border border-amber-900/20">
            <iframe src="https://player.bilibili.com/player.html?bvid=BV1MxPceSEcC&page=1&high_quality=1&autoplay=0" title="Pozhu Feng Build Guide" className="aspect-video w-full" allowFullScreen sandbox="allow-scripts allow-same-origin allow-popups" loading="lazy" />
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
                  <td className={`px-4 py-3 font-bold ${i < 3 ? "text-red-400" : i < 5 ? "text-amber-400" : "text-stone-400"}`}>{s.prio}</td>
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
              <p className="text-amber-400">白刀攒怒阶段：</p>
              <p className="text-stone-300 ml-4">双刀轻攻击×N → 十字斩×2（快速攒满怒气）→ 切绳镖</p>
              <p className="text-amber-400 mt-2">挂鼠鼠+标记：</p>
              <p className="text-stone-300 ml-4">绳镖释放鼠鼠 → Q（仇杀令）标记BOSS → 确保鼠鼠挂在BOSS身上</p>
              <p className="text-amber-400 mt-2">红刀爆发：</p>
              <p className="text-stone-300 ml-4">怒气满进入红刀 → 普攻（冲刺打断第4段）→ 鼠鼠协同最大化 → 红刀结束</p>
            </>
          ) : (
            <>
              <p className="text-amber-400">White Blade Fury Phase:</p>
              <p className="text-stone-300 ml-4">Dual Blades Light×N → Cross Slash×2 (fast fury fill) → Swap to Rope Dart</p>
              <p className="text-amber-400 mt-2">Deploy Shu Shu + Mark:</p>
              <p className="text-stone-300 ml-4">Rope Dart deploys Shu Shu → Q (Vendetta) marks boss → Ensure Shu Shu is attached</p>
              <p className="text-amber-400 mt-2">Red Blade Burst:</p>
              <p className="text-stone-300 ml-4">Full Fury → Red Blade → Auto (dash cancel 4th hit) → Shu Shu synergy max → Red Blade ends</p>
            </>
          )}
        </div>

        <h3 className="mb-3 text-lg font-semibold text-stone-200">{t("s5Burst", locale)}</h3>
        <div className="mb-4 rounded-lg border border-stone-800 bg-stone-950 p-4 font-mono text-sm">
          {isZh ? (
            <>
              <p className="text-amber-400">十字斩快速攒怒循环：</p>
              <p className="text-stone-300 ml-4">十字斩 → 十字斩 → 怒气满 → 绳镖挂鼠鼠+Q标记 → 红刀爆发 → 循环</p>
              <p className="text-red-400 mt-2">关键：Q（仇杀令）必须命中，否则鼠鼠伤害断崖下降</p>
            </>
          ) : (
            <>
              <p className="text-amber-400">Cross Slash Fast Fury Loop:</p>
              <p className="text-stone-300 ml-4">Cross Slash → Cross Slash → Full Fury → Rope Dart Shu Shu + Q mark → Red Blade burst → Loop</p>
              <p className="text-red-400 mt-2">Key: Q (Vendetta) MUST hit — Shu Shu damage crashes otherwise</p>
            </>
          )}
        </div>

        <h3 className="mb-3 text-lg font-semibold text-stone-200">{t("s5Secret", locale)}</h3>
        <div className="mb-4 rounded-lg border border-stone-800 bg-stone-950 p-4 font-mono text-sm">
          {isZh ? (
            <>
              <p className="text-amber-400">红刀冲刺打断（核心技巧）：</p>
              <p className="text-stone-300 ml-4">红刀普攻1段 → 2段 → 3段 → 冲刺打断（重置）→ 回到1段 → 循环</p>
              <p className="text-red-400 mt-2">绝不能打出第4段！第4段前摇太长，会严重降低鼠鼠触发频率和整体输出</p>
            </>
          ) : (
            <>
              <p className="text-amber-400">Red Blade Dash Cancel (Core Technique):</p>
              <p className="text-stone-300 ml-4">Red Blade Hit 1 → Hit 2 → Hit 3 → Dash cancel (reset) → Back to Hit 1 → Loop</p>
              <p className="text-red-400 mt-2">NEVER let Hit 4 come out! Its long windup severely tanks Shu Shu proc rate and overall DPS</p>
            </>
          )}
        </div>

        <figure className="my-8 flex flex-col items-center">
          <div className="w-full max-w-2xl overflow-hidden rounded-xl border border-amber-900/20">
            <iframe src="https://player.bilibili.com/player.html?bvid=BV1GbWPzxEdT&page=1&high_quality=1&autoplay=0" title="Pozhu Feng Combat Demo" className="aspect-video w-full" allowFullScreen sandbox="allow-scripts allow-same-origin allow-popups" loading="lazy" />
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
