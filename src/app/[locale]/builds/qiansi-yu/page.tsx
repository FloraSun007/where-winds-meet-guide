"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

const ARTICLE_ID = "qiansi-yu";

type L = "zh" | "en";
const i18n = {
  home: { zh: "首页", en: "Home" },
  builds: { zh: "流派攻略", en: "Build Guides" },
  guideTitle: { zh: "牵丝玉（伞扇远程控制）完全攻略", en: "Qiansi Yu — Umbrella + Fan Ranged Control Complete Guide" },
  tierBadge: { zh: "T0 流派", en: "T0 Build" },
  rangedDps: { zh: "远程控制", en: "Ranged Control" },
  qiansiAttr: { zh: "牵丝属性", en: "Qiansi Element" },
  subtitle: { zh: "千香引魂蛊（伞） + 明川药典（扇） — 繁花爆发与远程风筝，T0级输出流派", en: "Thousand Fragrance Soul Gu (Umbrella) + Mingchuan Pharmacopoeia (Fan) — Blossom burst & ranged kiting, T0 DPS" },
  version: { zh: "游戏版本 v2.1.0", en: "Game Version v2.1.0" },
  lastUpdate: { zh: "最后更新：2026-05-12", en: "Last Updated: 2026-05-12" },
  author: { zh: "作者：攻略组", en: "By: Guide Team" },
  bookmark: { zh: "收藏", en: "Bookmark" },
  logout: { zh: "退出", en: "Logout" },
  loginRegister: { zh: "登录 / 注册", en: "Login / Register" },
  // Section 1
  s1Title: { zh: "一、流派定位与核心机制", en: "1. Playstyle Overview & Core Mechanics" },
  s1Playstyle: { zh: "1.1 走地玉 vs 飞天玉", en: "1.1 Ground Jade vs Flying Jade" },
  s1Intro: {
    zh: '牵丝玉与牵丝霖使用相同的武器组合（伞+扇），但定位截然不同。牵丝霖是纯治疗，而牵丝玉是远程输出流派，通过「繁花值」系统管理资源，以伞特殊技「不谢花」为核心爆发手段。当前版本走地玉被大幅加强，已达T0级别。',
    en: 'Qiansi Yu shares the same weapon pair (Umbrella + Fan) with Qiansi Lin, but plays a completely different role. While Qiansi Lin is pure healing, Qiansi Yu is a ranged DPS build built around the "Blossom Gauge" system, using the Umbrella special skill "Witherless Flower" as its core burst. In the current patch, Ground Jade has been massively buffed to T0 tier.',
  },
  // Comparison
  tCompare: { zh: "对比项目", en: "Category" },
  tGround: { zh: "走地玉（推荐）", en: "Ground Jade (Recommended)" },
  tFlying: { zh: "飞天玉（进阶）", en: "Flying Jade (Advanced)" },
  tCoreSkill: { zh: "核心技能", en: "Core Skill" },
  tGroundSkill: { zh: "不谢花+火拳连击", en: "Witherless Flower + Fire Fist combo" },
  tFlyingSkill: { zh: "浮空追击+空中连段", en: "Aerial pursuit + airborne combo" },
  tStamina: { zh: "耐力消耗", en: "Stamina Cost" },
  tGroundStam: { zh: "几乎不消耗", en: "Near zero" },
  tFlyingStam: { zh: "持续消耗（浮空）", en: "Constant drain (airborne)" },
  tDifficulty: { zh: "操作难度", en: "Difficulty" },
  tGroundDiff: { zh: "★★★☆☆ 安逸稳定", en: "★★★☆☆ Smooth & stable" },
  tFlyingDiff: { zh: "★★★★★ 需要高熟练度", en: "★★★★★ Requires high mastery" },
  tTier: { zh: "当前版本评级", en: "Current Patch Tier" },
  tGroundTier: { zh: "T0（加强后最强）", en: "T0 (strongest after buff)" },
  tFlyingTier: { zh: "T1（上限高但不稳定）", en: "T1 (high ceiling, unstable)" },
  tCoreInner: { zh: "核心心法", en: "Core Inner Art" },
  tGroundInner: { zh: "花上月令6重（质变）", en: "Moon Over Flowers Rank 6 (transformative)" },
  tFlyingInner: { zh: "花上月令 + 断石", en: "Moon Over Flowers + Duanshi" },
  // Core mechanic
  s1CoreTitle: { zh: "1.2 核心机制：繁花值与不谢花", en: "1.2 Core Mechanic: Blossom Gauge & Witherless Flower" },
  s1CoreText: {
    zh: '牵丝玉的核心资源是「繁花值」。通过扇子的技能和普攻快速攒满繁花值，满后释放伞特殊技「不谢花」（俗称"无人机"），在空中持续自动攻击造成大量伤害。不谢花结束后返还15点繁花值，配合扇子继续输出形成循环。全程需保持「断翠」和「惊春」两个buff覆盖不断。走地玉不需要飞天，地面挂伞后衔接火拳（神龙吐火+箫吟千浪）进行爆发，操作简单且输出稳定。',
    en: 'Qiansi Yu\'s core resource is the "Blossom Gauge." Use Fan skills and auto-attacks to rapidly fill the gauge, then release Umbrella special skill "Witherless Flower" (nicknamed "Drone") — it hovers and auto-attacks for massive damage. After Witherless Flower ends, it refunds 15 Blossom, letting you chain back into Fan attacks. Maintain full uptime on two buffs: "Broken Jade" (Duan Cui) and "Spring Startle" (Jing Chun). Ground Jade skips the aerial phase entirely — deploy the Umbrella from the ground and chain Fire Fist combos (Shenlong Fire Breath + Flute of a Thousand Waves), much simpler with stable DPS.',
  },
  s1ProsTitle: { zh: "✅ 优势", en: "✅ STRENGTHS" },
  s1ConsTitle: { zh: "❌ 劣势", en: "❌ WEAKNESSES" },
  videoGuide: { zh: "视频：牵丝玉飞天玉精细研究（B站）", en: "Video: Qiansi Yu Flying Jade In-Depth Guide (Bilibili)" },
  // Section 2
  s2Title: { zh: "二、技能加点推荐（1-30级）", en: "2. Skill Point Allocation (Lv 1-30)" },
  s2Sub: { zh: "2.1 牵丝玉伞扇加点路线", en: "2.1 Qiansi Yu Umbrella + Fan Skill Priority" },
  s2Intro: { zh: "优先点满伞的「不谢花」和扇的蓄力/连击技能，保证繁花值快速积累和不谢花伤害最大化。奇术以神龙吐火和凌云踏为核心。", en: "Prioritize maxing Umbrella's Witherless Flower and Fan's charged/combo skills for rapid Blossom accumulation and maximum burst. Secret Arts center on Shenlong Fire Breath and Cloud Step." },
  thLevel: { zh: "等级阶段", en: "Level Range" },
  thSkill: { zh: "技能名称", en: "Skill Name" },
  thPriority: { zh: "优先级", en: "Priority" },
  thNote: { zh: "说明", en: "Notes" },
  s2Attr: { zh: "2.2 属性加点建议", en: "2.2 Attribute Point Allocation" },
  attrTip: { zh: "走地玉：体魄和眼力优先加至30级，后期补满协调。飞天玉同理，但更依赖协调管理耐力。调律词条优先会心/敏捷/精准，注意精准不要溢出。", en: "Ground Jade: Physique and Perception to Lv 30 first, then max Coordination late game. Flying Jade is similar but relies more on Coordination for stamina. Attunement priority: Crit/Agility/Precision — watch for Precision overcap." },
  // Section 3
  s3Title: { zh: "三、开局装备推荐", en: "3. Early Game Gear Recommendations" },
  s3Intro: {
    zh: '牵丝玉的装备以飞隼套为核心，主打会心和攻击频率。走地玉也可选烟柳套（精准更高但易溢出）。前期过渡可用斗易套，后期换飞隼毕业。',
    en: 'Qiansi Yu gear centers on the Feisun (Falcon) Set, focusing on Crit and attack frequency. Ground Jade can also use Yanliu Set (more Precision but easy to overcap). Transition from Douyi Set early to Feisun for graduation.',
  },
  thHow: { zh: "获取方式：", en: "How to get: " },
  thStat: { zh: "核心属性：", en: "Key stats: " },
  s3GearTip: {
    zh: "装备进阶：飞隼套精准不容易溢出，操作流畅，推荐首选。烟柳套给大量精准但需穿插重击续「轻柳」buff，操作要求更高。调律词条优先会心>敏捷>精准>最大外功。定音石珍贵，非完美词条不要轻易定音！",
    en: "Gear Progression: Feisun Set is recommended — Precision doesn't overcap, smoother gameplay. Yanliu Set gives massive Precision but requires weaving heavy attacks to maintain 'Light Willow' buff, higher execution needed. Attunement: Crit > Agility > Precision > Max Physical ATK. Attunement Stones are rare — don't lock imperfect stats!",
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
  s5Standard: { zh: "5.1 走地玉标准输出循环", en: "5.1 Ground Jade Standard DPS Rotation" },
  s5Burst: { zh: "5.2 飞天玉空中爆发循环", en: "5.2 Flying Jade Aerial Burst Rotation" },
  s5Secret: { zh: "5.3 奇术填充与位移循环", en: "5.3 Secret Art Filler & Reposition Loop" },
  videoCombo: { zh: "视频：新赛季牵丝玉伞扇搭配与连招循环（B站）", en: "Video: New Season Qiansi Yu Build & Combo Rotation (Bilibili)" },
  // Section 6
  s6Title: { zh: "六、副本攻略：牵丝玉职责", en: "6. Dungeon Guide — Qiansi Yu Role" },
  s6Intro: {
    zh: '牵丝玉在副本中担任远程DPS，核心职责是在安全距离持续输出并在BOSS气竭窗口打出爆发。走地玉输出环境非常安逸，适合新手。飞天玉输出上限更高但需要更多练习。',
    en: 'Qiansi Yu serves as ranged DPS in dungeons. Your core duty is sustained damage from safe range and burst during boss Qi Exhaustion windows. Ground Jade has a very comfortable playstyle, great for beginners. Flying Jade has a higher ceiling but demands more practice.',
  },
  s6Sleeping: { zh: "金明池·睡道人 — 牵丝玉要点", en: "Jinming Pool — Sleeping Daoist: Key Points" },
  s6Rong: { zh: "金明池·容鸢 — 牵丝玉要点", en: "Jinming Pool — Rong Yuan: Key Points" },
  // Section 7
  s7Title: { zh: "七、进阶技巧与常见误区", en: "7. Advanced Tips & Common Mistakes" },
  // Comments
  comments: { zh: "评论区", en: "Comments" },
  writeComment: { zh: "写下你的评论...", en: "Write a comment..." },
  collapseComment: { zh: "收起评论框", en: "Collapse" },
  submitComment: { zh: "发表评论", en: "Post Comment" },
  commentPlaceholder: { zh: "分享你的牵丝玉心得...", en: "Share your Qiansi Yu tips..." },
};

function t(key: keyof typeof i18n, locale: L): string {
  return i18n[key]?.[locale] ?? i18n[key]?.zh ?? key;
}

export default function QiansiYuGuide() {
  const params = useParams();
  const locale = (params?.locale as L) || "zh";
  const isZh = locale === "zh";

  const skillTable = isZh ? [
    { level: "1-5级", skill: "伞特殊技·不谢花", prio: "★★★★★", note: "核心爆发技能，挂伞自动攻击，走地玉输出主力，必满" },
    { level: "1-5级", skill: "扇·轻蓄小龙卷", prio: "★★★★★", note: "快速积攒繁花值，伤害提升45%，核心攒资源手段" },
    { level: "5-10级", skill: "扇·断翠", prio: "★★★★☆", note: "核心buff技能，必须全程覆盖不断" },
    { level: "10-15级", skill: "扇·惊春", prio: "★★★★☆", note: "核心buff技能，与断翠配合全程覆盖" },
    { level: "15-20级", skill: "伞·旋伞连击", prio: "★★★☆☆", note: "伞的常规输出技，穿插在不谢花CD期间" },
    { level: "20-25级", skill: "奇术·神龙吐火", prio: "★★★★★", note: "火拳核心，走地玉爆发关键组件" },
    { level: "25-30级", skill: "奇术·凌云踏", prio: "★★★★★", note: "必带位移，自己和Boss都会飞来飞去，不带容易miss" },
  ] : [
    { level: "Lv 1-5", skill: "Umbrella Special · Witherless Flower", prio: "★★★★★", note: "Core burst — deploys auto-attacking umbrella drone, main Ground Jade DPS, max first" },
    { level: "Lv 1-5", skill: "Fan · Light Charge Mini Tornado", prio: "★★★★★", note: "Rapid Blossom gauge builder, +45% damage, core resource generator" },
    { level: "Lv 5-10", skill: "Fan · Broken Jade (Duan Cui)", prio: "★★★★☆", note: "Core buff — must maintain 100% uptime" },
    { level: "Lv 10-15", skill: "Fan · Spring Startle (Jing Chun)", prio: "★★★★☆", note: "Core buff — pairs with Broken Jade, maintain full uptime" },
    { level: "Lv 15-20", skill: "Umbrella · Spinning Umbrella Combo", prio: "★★★☆☆", note: "Standard Umbrella attack, weave during Witherless Flower cooldown" },
    { level: "Lv 20-25", skill: "Secret Art · Shenlong Fire Breath", prio: "★★★★★", note: "Fire Fist core — key burst component for Ground Jade" },
    { level: "Lv 25-30", skill: "Secret Art · Cloud Step", prio: "★★★★★", note: "Must-have gap closer — both you and the boss fly around, without it you'll miss" },
  ];

  const equipItems = isZh ? [
    { name: "飞隼·伞（武器）", slot: "主武器", how: "千香引魂蛊解锁后，百业商店兑换或高级副本掉落", stat: "外功攻击、会心率" },
    { name: "飞隼·扇（武器）", slot: "副武器", how: "明川药典解锁后，百业商店兑换或高级副本掉落", stat: "外功攻击、敏捷" },
    { name: "飞隼·护腕", slot: "防具·手部", how: "清河高级副本或百业商店兑换", stat: "攻速、会心率" },
    { name: "飞隼·战靴", slot: "防具·足部", how: "河西区域世界BOSS掉落", stat: "移速、外功攻击" },
    { name: "飞隼·腰佩", slot: "饰品", how: "高级探索宝箱或百业商店兑换", stat: "最小/最大外功攻击" },
  ] : [
    { name: "Feisun Umbrella (Weapon)", slot: "Main Weapon", how: "Unlocked via Soul Gu, Hundred Trades shop or high-level dungeon drops", stat: "Physical ATK, Crit Rate" },
    { name: "Feisun Fan (Weapon)", slot: "Off-hand Weapon", how: "Unlocked via Mingchuan Pharmacopoeia, Hundred Trades shop or dungeon drops", stat: "Physical ATK, Agility" },
    { name: "Feisun Bracers", slot: "Armor — Hands", how: "Advanced Qinghe dungeons or Hundred Trades shop", stat: "Attack Speed, Crit Rate" },
    { name: "Feisun Boots", slot: "Armor — Feet", how: "Hexi region world boss drops", stat: "Move Speed, Physical ATK" },
    { name: "Feisun Belt", slot: "Accessory", how: "Advanced exploration chests or Hundred Trades shop", stat: "Min/Max Physical ATK" },
  ];

  const innerArts = isZh ? [
    { name: "花上月令", style: "牵丝玉", effect: "核心心法，6重后质变——繁花值积累效率大幅提升，适配5-6秒快速循环，没有它走地玉上限不高", prio: "必带" },
    { name: "易水歌", style: "通用", effect: "通用增伤心法，前期核心", prio: "必带" },
    { name: "威猛歌", style: "通用", effect: "通用增伤，与易水歌搭配使用", prio: "推荐" },
    { name: "断石", style: "牵丝玉", effect: "前中期过渡心法，一边养断石一边攒忘川", prio: "推荐" },
    { name: "忘川", style: "通用", effect: "六重后替换断石，大后期核心增伤心法", prio: "大后期" },
    { name: "极乐", style: "通用", effect: "辅助心法，配合心法箱开破竹风流派时获取", prio: "大后期" },
  ] : [
    { name: "Moon Over Flowers (Hua Shang Yue Ling)", style: "Qiansi Yu", effect: "Core inner art — Rank 6 is transformative: massively boosts Blossom gauge fill speed, enables 5-6 second quick loops. Without it, Ground Jade ceiling is limited", prio: "Must-have" },
    { name: "Yishui Song", style: "Universal", effect: "Universal damage boost, core for early game", prio: "Must-have" },
    { name: "Weimeng Song (Fierce Ode)", style: "Universal", effect: "Universal damage boost, pairs with Yishui Song", prio: "Recommended" },
    { name: "Duanshi (Stone Breaker)", style: "Qiansi Yu", effect: "Early-mid game transition inner art, level it while saving for Wangchuan", prio: "Recommended" },
    { name: "Wangchuan (River of Forgetfulness)", style: "Universal", effect: "Replaces Duanshi at Rank 6, late game core damage boost", prio: "Late game" },
    { name: "Jile (Bliss)", style: "Universal", effect: "Supportive inner art, obtained via Heart Art Box from Pozhu school", prio: "Late game" },
  ];

  const tips = isZh ? [
    { title: "凌云踏是必带奇术", text: "不管是走地玉还是飞天玉，凌云踏都必须带。牵丝玉的循环中自己和Boss都会飞来飞去，不带凌云踏的话扇和骑术很容易miss。Boss离太远时先补一个凌云踏再进循环。" },
    { title: "断翠和惊春不能断", text: "这两个buff必须全程覆盖。断翠断了就补，惊春也是。buff断了等于丢失大量伤害，是牵丝玉最基本的要求。" },
    { title: "走地玉优先推荐新手", text: "走地玉操作简单、不需要管理耐力、输出稳定，加强后已达T0。飞天玉上限更高但操作复杂，建议先熟练走地玉再转飞天玉。" },
    { title: "精准率容易溢出", text: "尤其是烟柳套的玩家，精准率非常容易溢出。调律时注意面板平衡，精准溢出等于浪费词条。飞隼套在这方面更友好。" },
    { title: "花上月令6重是质变", text: "没有6重花上月令的走地玉上限有限。6重后繁花值积累效率暴增，能适配5-6秒的快速循环，伤害质变。优先把资源投入这个心法。" },
  ] : [
    { title: "Cloud Step is mandatory", text: "Whether Ground or Flying Jade, Cloud Step must be slotted. Both you and the boss are constantly airborne — without Cloud Step, Fan skills and mounted attacks will miss. If the boss is too far, use Cloud Step first before entering your rotation." },
    { title: "Never let Broken Jade or Spring Startle drop", text: "These two buffs must have 100% uptime. If Broken Jade drops, reapply immediately. Same for Spring Startle. Dropped buffs = massive DPS loss — this is the most fundamental requirement." },
    { title: "Ground Jade for beginners first", text: "Ground Jade is simple, requires no stamina management, and has stable DPS — buffed to T0. Flying Jade has a higher ceiling but is much harder. Master Ground Jade first before transitioning." },
    { title: "Precision overcaps easily", text: "Especially with Yanliu Set, Precision overcaps very easily. Watch your stat balance during attunement — wasted Precision is wasted affixes. Feisun Set is more forgiving in this regard." },
    { title: "Moon Over Flowers Rank 6 is transformative", text: "Without Rank 6 Moon Over Flowers, Ground Jade's ceiling is limited. At Rank 6, Blossom gauge fill speed skyrockets, enabling 5-6 second quick loops for a massive DPS spike. Prioritize investing resources into this inner art." },
  ];

  const dungeonSleeping = isZh ? [
    { label: "远程输出优势：", color: "text-amber-400", text: "牵丝玉是远程流派，可以在安全距离输出，不容易吃BOSS近战技能。走地玉尤其安逸，挂好伞就自动输出，专心走位躲机制即可。" },
    { label: "小怪阶段AOE：", color: "text-amber-400", text: "扇子轻蓄小龙卷有不错的AOE能力，配合神龙吐火清小怪效率很高。不谢花也能打到多个目标。" },
    { label: "BOSS气竭爆发：", color: "text-red-400", text: "提前攒满繁花值，气竭窗口释放不谢花+火拳全打出去。这是牵丝玉最大的爆发窗口，不要浪费。" },
  ] : [
    { label: "Ranged DPS advantage: ", color: "text-amber-400", text: "Qiansi Yu is ranged — deal damage from safe distance, avoid melee mechanics. Ground Jade is especially comfortable: deploy Umbrella for auto-attacks while focusing on positioning." },
    { label: "Add phase AoE: ", color: "text-amber-400", text: "Fan's light charge Mini Tornado has decent AoE, and Shenlong Fire Breath clears adds efficiently. Witherless Flower can also hit multiple targets." },
    { label: "Boss Qi Exhaustion burst: ", color: "text-red-400", text: "Pre-fill Blossom gauge, then dump Witherless Flower + Fire Fist during the window. This is Qiansi Yu's biggest burst opportunity — don't waste it." },
  ];

  const dungeonRong = isZh ? [
    { label: "搬桶帮手：", color: "text-amber-400", text: "牵丝玉不是近战，搬桶效率一般。但凌云踏提供位移，可以抢一些近处的桶。优先让近战DPS去搬远处的。" },
    { label: "护盾阶段集火：", color: "text-red-400", text: "护盾阶段全队集火，牵丝玉提前攒满繁花，护盾出现瞬间释放不谢花+全套爆发帮助快速破盾。" },
    { label: "三黄线注意站位：", color: "text-amber-400", text: "远程优势在这里体现——你可以站在较远的位置输出，桶爆炸范围不易波及你。但不要贪输出，先保命。" },
  ] : [
    { label: "Barrel assist: ", color: "text-amber-400", text: "Qiansi Yu isn't melee — barrel carrying is average. Cloud Step provides mobility for nearby barrels. Let melee DPS handle distant ones." },
    { label: "Shield phase focus: ", color: "text-red-400", text: "Pre-fill Blossom during shield phase. The instant the shield spawns, dump Witherless Flower + full burst to help break it fast." },
    { label: "Triple line positioning: ", color: "text-amber-400", text: "Your ranged advantage shows here — stand at distance where barrel explosions won't reach you. But don't greed DPS, survival first." },
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
          <span className="rounded-full bg-stone-800 px-3 py-1 text-xs font-semibold text-stone-300">{t("rangedDps", locale)}</span>
          <span className="rounded-full bg-stone-800 px-3 py-1 text-xs font-semibold text-stone-300">{t("qiansiAttr", locale)}</span>
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

        <div className="mb-6 overflow-x-auto rounded-lg border border-stone-800">
          <table className="w-full text-sm">
            <thead className="bg-stone-900 text-left">
              <tr>
                <th className="px-4 py-3 text-amber-400 font-semibold">{t("tCompare", locale)}</th>
                <th className="px-4 py-3 text-amber-400 font-semibold">{t("tGround", locale)}</th>
                <th className="px-4 py-3 text-amber-400 font-semibold">{t("tFlying", locale)}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-800">
              <tr><td className="px-4 py-3 text-stone-400">{t("tCoreSkill", locale)}</td><td className="px-4 py-3 text-stone-300">{t("tGroundSkill", locale)}</td><td className="px-4 py-3 text-stone-300">{t("tFlyingSkill", locale)}</td></tr>
              <tr><td className="px-4 py-3 text-stone-400">{t("tStamina", locale)}</td><td className="px-4 py-3 text-emerald-400 font-bold">{t("tGroundStam", locale)}</td><td className="px-4 py-3 text-red-400">{t("tFlyingStam", locale)}</td></tr>
              <tr><td className="px-4 py-3 text-stone-400">{t("tDifficulty", locale)}</td><td className="px-4 py-3 text-emerald-400">{t("tGroundDiff", locale)}</td><td className="px-4 py-3 text-red-400">{t("tFlyingDiff", locale)}</td></tr>
              <tr><td className="px-4 py-3 text-stone-400">{t("tTier", locale)}</td><td className="px-4 py-3 text-amber-400 font-bold">{t("tGroundTier", locale)}</td><td className="px-4 py-3 text-stone-300">{t("tFlyingTier", locale)}</td></tr>
              <tr><td className="px-4 py-3 text-stone-400">{t("tCoreInner", locale)}</td><td className="px-4 py-3 text-stone-300">{t("tGroundInner", locale)}</td><td className="px-4 py-3 text-stone-300">{t("tFlyingInner", locale)}</td></tr>
            </tbody>
          </table>
        </div>

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
                "• 当前版本T0级输出，走地玉加强后非常强力",
                "• 远程输出，安全距离打伤害，容错率高",
                "• 走地玉操作简单不耗耐力，新手友好",
                "• 不谢花（无人机）自动攻击，安逸输出",
                "• PVP也有不俗表现，十秒真连速通",
              ] : [
                "• T0 DPS in current patch — Ground Jade buffed to top tier",
                "• Ranged DPS — deal damage from safe distance, high margin for error",
                "• Ground Jade is simple and stamina-free, beginner-friendly",
                "• Witherless Flower (Drone) auto-attacks — comfortable gameplay",
                "• Strong in PvP too — 10-second true combo for quick kills",
              ].map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
          <div className="rounded-lg border border-red-900/30 bg-red-900/5 p-4">
            <h4 className="mb-2 text-sm font-bold text-red-400 uppercase tracking-wider">{t("s1ConsTitle", locale)}</h4>
            <ul className="space-y-1.5 text-sm text-stone-300">
              {isZh ? [
                "• 极度依赖花上月令6重，没有6重上限受限",
                "• 飞天玉操作复杂，需要大量练习",
                "• 精准率容易溢出，装备调律需要精细",
                "• 繁花值管理需要保持节奏，断了buff伤害断崖",
              ] : [
                "• Heavily dependent on Moon Over Flowers Rank 6 — ceiling limited without it",
                "• Flying Jade is mechanically demanding, requires extensive practice",
                "• Precision overcaps easily, demanding precise attunement tuning",
                "• Blossom gauge management needs rhythm — dropped buffs = DPS cliff",
              ].map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        </div>

        <figure className="my-8 flex flex-col items-center">
          <div className="w-full max-w-2xl overflow-hidden rounded-xl border border-amber-900/20">
            <iframe src="https://player.bilibili.com/player.html?bvid=BV1PoxjzzEaA&page=1&high_quality=1&autoplay=0" title="Qiansi Yu Flying Jade Guide" className="aspect-video w-full" allowFullScreen sandbox="allow-scripts allow-same-origin allow-popups" loading="lazy" />
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
                  <td className={`px-4 py-3 font-bold ${[0, 1, 5, 6].includes(i) ? "text-red-400" : i < 5 ? "text-amber-400" : "text-stone-400"}`}>{s.prio}</td>
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
                  <td className={`px-4 py-3 font-bold ${i < 2 ? "text-red-400" : i < 4 ? "text-amber-400" : "text-stone-400"}`}>{art.prio}</td>
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
              <p className="text-amber-400">走地玉核心循环（约12秒一轮）：</p>
              <p className="text-stone-300 ml-4">扇轻蓄小龙卷×N（快速攒满繁花）→ 伞特殊技「不谢花」挂伞 → 神龙吐火+箫吟千浪（火拳连击）</p>
              <p className="text-amber-400 mt-2">循环衔接：</p>
              <p className="text-stone-300 ml-4">不谢花结束（返还15繁花）→ 断翠/惊春补buff → 扇继续攒繁花 → 骑龙回马 → 再次不谢花</p>
              <p className="text-red-400 mt-2">关键：全程保持断翠+惊春覆盖，断了等于白打</p>
            </>
          ) : (
            <>
              <p className="text-amber-400">Ground Jade Core Loop (~12s per cycle):</p>
              <p className="text-stone-300 ml-4">Fan Light Charge Tornado×N (rapid Blossom fill) → Umbrella Special "Witherless Flower" deploy → Shenlong Fire Breath + Flute (Fire Fist combo)</p>
              <p className="text-amber-400 mt-2">Chain Recovery:</p>
              <p className="text-stone-300 ml-4">Witherless Flower ends (refunds 15 Blossom) → Refresh Broken Jade / Spring Startle → Fan stacks Blossom → Dragon Rider's Strike → Witherless Flower again</p>
              <p className="text-red-400 mt-2">Key: Maintain 100% uptime on Broken Jade + Spring Startle — dropped buffs = wasted DPS</p>
            </>
          )}
        </div>

        <h3 className="mb-3 text-lg font-semibold text-stone-200">{t("s5Burst", locale)}</h3>
        <div className="mb-4 rounded-lg border border-stone-800 bg-stone-950 p-4 font-mono text-sm">
          {isZh ? (
            <>
              <p className="text-amber-400">飞天玉空中循环：</p>
              <p className="text-stone-300 ml-4">攒满繁花 → 不谢花 → 扇浮空追击 → 空中连段 → 落地卸势 → 再次起飞循环</p>
              <p className="text-amber-400 mt-2">关键要点：</p>
              <p className="text-stone-300 ml-4">飞天状态需消耗耐力，需在落地卸势时恢复。凌云踏必带，空中衔接用。</p>
              <p className="text-red-400 mt-2">难度极高，建议先精通走地玉再尝试飞天玉</p>
            </>
          ) : (
            <>
              <p className="text-amber-400">Flying Jade Aerial Loop:</p>
              <p className="text-stone-300 ml-4">Fill Blossom → Witherless Flower → Fan aerial pursuit → Airborne combo chain → Land and parry → Take off again</p>
              <p className="text-amber-400 mt-2">Key Points:</p>
              <p className="text-stone-300 ml-4">Airborne state drains stamina — recover during landing parries. Cloud Step is mandatory for aerial transitions.</p>
              <p className="text-red-400 mt-2">Extremely high difficulty — master Ground Jade first before attempting Flying Jade</p>
            </>
          )}
        </div>

        <h3 className="mb-3 text-lg font-semibold text-stone-200">{t("s5Secret", locale)}</h3>
        <div className="mb-4 rounded-lg border border-stone-800 bg-stone-950 p-4 font-mono text-sm">
          {isZh ? (
            <>
              <p className="text-amber-400">CD填充与位移：</p>
              <p className="text-stone-300 ml-4">神龙吐火 → 箫吟千浪（火拳组合）→ 骑龙回马 → 凌云踏调整位置</p>
              <p className="text-amber-400 mt-2">Boss距离远时：</p>
              <p className="text-stone-300 ml-4">先凌云踏拉近距离 → 再进入循环，否则扇和骑术会miss</p>
            </>
          ) : (
            <>
              <p className="text-amber-400">CD Filler & Reposition:</p>
              <p className="text-stone-300 ml-4">Shenlong Fire Breath → Flute of a Thousand Waves (Fire Fist) → Dragon Rider's Strike → Cloud Step reposition</p>
              <p className="text-amber-400 mt-2">When boss is far:</p>
              <p className="text-stone-300 ml-4">Cloud Step to close gap first → then enter rotation, or Fan and mounted attacks will miss</p>
            </>
          )}
        </div>

        <figure className="my-8 flex flex-col items-center">
          <div className="w-full max-w-2xl overflow-hidden rounded-xl border border-amber-900/20">
            <iframe src="https://player.bilibili.com/player.html?bvid=BV1HoNUzTEaw&page=1&high_quality=1&autoplay=0" title="Qiansi Yu Combo Rotation" className="aspect-video w-full" allowFullScreen sandbox="allow-scripts allow-same-origin allow-popups" loading="lazy" />
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
