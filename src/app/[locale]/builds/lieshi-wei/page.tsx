"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

const ARTICLE_ID = "lieshi-wei";

type L = "zh" | "en";
const i18n = {
  home: { zh: "首页", en: "Home" },
  builds: { zh: "流派攻略", en: "Build Guides" },
  guideTitle: { zh: "裂石威（陌刀坦克）完全攻略", en: "Lieshi Wei — Halberd Tank Complete Guide" },
  tierBadge: { zh: "T1 流派", en: "T1 Build" },
  tankRole: { zh: "重装坦克", en: "Heavy Tank" },
  lieshiAttr: { zh: "裂石属性", en: "Lieshi Element" },
  subtitle: { zh: "嗟夫刀法（陌刀） + 八方风雷枪 — 团队守护者，高难副本必备坦克", en: "Jiefu Blade Art (Halberd) + Eight Directions Storm Spear — Team guardian, essential tank for hard content" },
  version: { zh: "游戏版本 v2.1.0", en: "Game Version v2.1.0" },
  lastUpdate: { zh: "最后更新：2026-05-12", en: "Last Updated: 2026-05-12" },
  author: { zh: "作者：攻略组", en: "By: Guide Team" },
  bookmark: { zh: "收藏", en: "Bookmark" },
  logout: { zh: "退出", en: "Logout" },
  loginRegister: { zh: "登录 / 注册", en: "Login / Register" },
  // Section 1
  s1Title: { zh: "一、流派定位与核心机制", en: "1. Playstyle Overview & Core Mechanics" },
  s1Playstyle: { zh: "1.1 坦克流 vs 输出流", en: "1.1 Tank vs DPS Playstyle" },
  s1Intro: {
    zh: '裂石威由嗟夫刀法（陌刀）+ 八方风雷枪组成，是游戏中唯一的重装坦克流派。与鸣金系的纯输出定位不同，裂石威在团队中承担拉仇恨、扛伤害、保护队友的职责。高难副本中坦克不可或缺，而普通副本中裂石威也可切换为输出流打出可观伤害。',
    en: 'Lieshi Wei combines Jiefu Blade Art (Halberd) + Eight Directions Storm Spear, the only heavy tank build in the game. Unlike the pure DPS role of the Mingjin line, Lieshi Wei shoulders aggro management, damage absorption, and teammate protection. A tank is irreplaceable in hard dungeons, while in normal content Lieshi Wei can switch to DPS mode for solid damage.',
  },
  // Comparison
  tCompare: { zh: "对比项目", en: "Category" },
  tTank: { zh: "坦克流（磐石诀）", en: "Tank (Panshi Art)" },
  tDps: { zh: "输出流（纯蓄力）", en: "DPS (Full Charge)" },
  tCoreInner: { zh: "核心心法", en: "Core Inner Art" },
  tTankInner: { zh: "磐石诀（必备）", en: "Panshi Art (mandatory)" },
  tDpsInner: { zh: "山河绝韵 + 易水歌", en: "Shanhe Rhyme + Yishui Song" },
  tDmgReduct: { zh: "伤害减免", en: "Damage Reduction" },
  tTankReduce: { zh: "25%（磐石诀）+ 防反减伤", en: "25% (Panshi) + Parry reduction" },
  tDpsReduce: { zh: "仅靠防反减伤", en: "Parry reduction only" },
  tOutput: { zh: "输出能力", en: "Damage Output" },
  tTankOutput: { zh: "中等，以蓄力斩为主", en: "Moderate, mainly charged slashes" },
  tDpsOutput: { zh: "高，三段蓄力斩爆发", en: "High, triple charged slash burst" },
  tTeamRole: { zh: "团队定位", en: "Team Role" },
  tTankRole: { zh: "主坦，拉仇恨保队友", en: "Main tank, hold aggro and protect" },
  tDpsRole: { zh: "副坦/输出", en: "Off-tank / DPS" },
  tScenario: { zh: "推荐场景", en: "Best For" },
  tTankScen: { zh: "高难副本、团队副本", en: "Hard dungeons, group raids" },
  tDpsScen: { zh: "普通副本、大世界", en: "Normal dungeons, open world" },
  // Core mechanic
  s1CoreTitle: { zh: "1.2 核心机制：战意值与防反", en: "1.2 Core Mechanic: Battle Will & Parry Counter" },
  s1CoreText: {
    zh: '裂石威的核心资源是「战意值」。通过攻击、受击和成功防反（卸式）积累战意，满战意后可以释放免蓄力的三段蓄力斩（陌刀最强输出技能）。防反是裂石威的灵魂操作——成功防反不仅积累战意，还能获得高额减伤。坦克流额外搭配磐石诀心法，提供常驻25%伤害减免，配合防反可实现极高生存能力。',
    en: 'Lieshi Wei\'s core resource is "Battle Will". You accumulate it through attacks, taking hits, and successful parries (Deflect). At full Battle Will, you unleash a free triple-charged slash — the Halberd\'s strongest attack. Parrying is the soul of Lieshi Wei: successful parries build Battle Will AND grant high damage reduction. The Tank playstyle adds Panshi Art inner art for a permanent 25% damage reduction, combining with parry for exceptional survivability.',
  },
  s1ProsTitle: { zh: "✅ 优势", en: "✅ STRENGTHS" },
  s1ConsTitle: { zh: "❌ 劣势", en: "❌ WEAKNESSES" },
  videoPve: { zh: "视频：裂石威陌刀八方PVE完整攻略（B站）", en: "Video: Lieshi Wei Halberd + Storm Spear PvE Complete Guide (Bilibili)" },
  // Section 2
  s2Title: { zh: "二、技能加点推荐（1-30级）", en: "2. Skill Point Allocation (Lv 1-30)" },
  s2Sub: { zh: "2.1 嗟夫刀法（陌刀）加点路线", en: "2.1 Jiefu Blade Art (Halberd) Skill Priority" },
  s2Intro: { zh: "裂石威优先点满陌刀的蓄力技和防反技能，八方风雷枪点出控制和突进衔接技即可。奇术选择以蓄力相关为主。", en: "Prioritize maxing Halberd charged attacks and parry skills. For Eight Directions Storm Spear, unlock CC and gap closer bridge skills. Choose Secret Arts that enhance charge attacks." },
  thLevel: { zh: "等级阶段", en: "Level Range" },
  thSkill: { zh: "技能名称", en: "Skill Name" },
  thPriority: { zh: "优先级", en: "Priority" },
  thNote: { zh: "说明", en: "Notes" },
  s2Attr: { zh: "2.2 属性加点建议", en: "2.2 Attribute Point Allocation" },
  attrTip: { zh: "坦克流：体魄优先加至30级（气血上限），然后点满眼力（防反判定）。输出流与鸣金虹一致。", en: "Tank build: Physique to Lv 30 first (max HP), then max Perception (parry window). DPS build same as Mingjin Hong." },
  // Section 3
  s3Title: { zh: "三、开局装备推荐", en: "3. Early Game Gear Recommendations" },
  s3Intro: {
    zh: '裂石威的装备优先堆防御属性（气血、外功防御）和会心率。陌刀自带16%会心率，配合天赋蓄力技+24%会心率，蓄力斩会心率极高。前期用斗易套过渡，后期换沉星套或定光套。',
    en: 'Lieshi Wei gear prioritizes defensive stats (HP, Physical DEF) and Crit Rate. The Halberd has a built-in 16% Crit Rate, plus talents add +24% Crit Rate on charged skills — charged slashes crit very often. Start with Douyi Set, transition to Chenxing or Dingguang Set late game.',
  },
  thHow: { zh: "获取方式：", en: "How to get: " },
  thStat: { zh: "核心属性：", en: "Key stats: " },
  s3GearTip: {
    zh: "装备进阶：坦克流优先选择气血和外防词条，输出流选择外功攻击和会心率。陌刀的蓄力三段斩会心率极高（16%基础+24%天赋），不需要刻意堆暴击装备。",
    en: "Gear Progression: Tank build prioritizes HP and Physical DEF affixes; DPS build goes for Physical ATK and Crit Rate. The Halberd's triple charged slash already has very high Crit Rate (16% base + 24% talent) — no need to over-stack crit gear.",
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
  s5Standard: { zh: "5.1 坦克流拉仇恨循环", en: "5.1 Tank Aggro Control Rotation" },
  s5Burst: { zh: "5.2 输出流蓄力爆发循环", en: "5.2 DPS Charge Burst Rotation" },
  s5Secret: { zh: "5.3 奇术填充循环", en: "5.3 Secret Art Filler Rotation" },
  videoCombo: { zh: "视频：裂石威连招教学与光速三连劈演示（B站）", en: "Video: Lieshi Wei Combo Guide & Rapid Triple Slash Demo (Bilibili)" },
  // Section 6
  s6Title: { zh: "六、副本攻略：裂石威职责", en: "6. Dungeon Guide — Lieshi Wei Role" },
  s6Intro: {
    zh: '裂石威在高难副本中担任主坦，核心职责是拉住BOSS仇恨、处理关键机制、保护队友。普通副本中可切输出流当副DPS。蓄力三段斩是陌刀最强输出手段，配合防反积攒战意实现免蓄力释放。',
    en: 'Lieshi Wei serves as main tank in hard dungeons, responsible for holding boss aggro, handling key mechanics, and protecting teammates. In normal content, switch to DPS mode as off-DPS. The triple charged slash is the Halberd\'s strongest attack — use parry to build Battle Will for free charge releases.',
  },
  s6Sleeping: { zh: "金明池·睡道人 — 裂石威要点", en: "Jinming Pool — Sleeping Daoist: Key Points" },
  s6Rong: { zh: "金明池·容鸢 — 裂石威要点", en: "Jinming Pool — Rong Yuan: Key Points" },
  // Section 7
  s7Title: { zh: "七、进阶技巧与常见误区", en: "7. Advanced Tips & Common Mistakes" },
  // Comments
  comments: { zh: "评论区", en: "Comments" },
  writeComment: { zh: "写下你的评论...", en: "Write a comment..." },
  collapseComment: { zh: "收起评论框", en: "Collapse" },
  submitComment: { zh: "发表评论", en: "Post Comment" },
  commentPlaceholder: { zh: "分享你的裂石威心得...", en: "Share your Lieshi Wei tips..." },
};

function t(key: keyof typeof i18n, locale: L): string {
  return i18n[key]?.[locale] ?? i18n[key]?.zh ?? key;
}

export default function LieshiWeiGuide() {
  const params = useParams();
  const locale = (params?.locale as L) || "zh";
  const isZh = locale === "zh";

  const skillTable = isZh ? [
    { level: "1-5级", skill: "嗟夫刀法·防反（卸式）", prio: "★★★★★", note: "核心操作，成功防反积累战意+减伤，必满" },
    { level: "1-5级", skill: "嗟夫刀法·蓄力三段斩", prio: "★★★★★", note: "陌刀最强输出技能，满战意免蓄力释放" },
    { level: "5-10级", skill: "嗟夫刀法·横扫", prio: "★★★★☆", note: "AOE拉仇恨技能，坦克流核心拉怪手段" },
    { level: "10-15级", skill: "八方风雷枪·突进", prio: "★★★★☆", note: "位移+控制，衔接陌刀输出" },
    { level: "15-20级", skill: "八方风雷枪·旋风", prio: "★★★☆☆", note: "范围控制，拉住多个小怪仇恨" },
    { level: "20-25级", skill: "奇术·神龙吐火", prio: "★★★★☆", note: "CD期间核心填充，蓄力CD中持续输出" },
    { level: "25-30级", skill: "奇术·骑龙回马", prio: "★★★★☆", note: "易武衔接技，提升连招流畅度" },
  ] : [
    { level: "Lv 1-5", skill: "Jiefu Blade · Parry (Deflect)", prio: "★★★★★", note: "Core mechanic — successful parry builds Battle Will + damage reduction, max first" },
    { level: "Lv 1-5", skill: "Jiefu Blade · Triple Charged Slash", prio: "★★★★★", note: "Halberd's strongest attack, free cast at full Battle Will" },
    { level: "Lv 5-10", skill: "Jiefu Blade · Sweep", prio: "★★★★☆", note: "AoE aggro tool, core for tank pulling" },
    { level: "Lv 10-15", skill: "Storm Spear · Dash Strike", prio: "★★★★☆", note: "Gap closer + CC, bridges into Halberd combos" },
    { level: "Lv 15-20", skill: "Storm Spear · Whirlwind", prio: "★★★☆☆", note: "AoE CC for holding multiple add aggro" },
    { level: "Lv 20-25", skill: "Secret Art · Shenlong Fire Breath", prio: "★★★★☆", note: "Core cooldown filler, sustain DPS during charge CD" },
    { level: "Lv 25-30", skill: "Secret Art · Dragon Rider's Strike", prio: "★★★★☆", note: "Weapon swap chain, improves combo fluidity" },
  ];

  const equipItems = isZh ? [
    { name: "斗易·陌刀（武器）", slot: "主武器", how: "第一章主线任务解锁嗟夫刀法，百业商店兑换或高级副本掉落", stat: "外功攻击、会心率" },
    { name: "斗易·护腕", slot: "防具·手部", how: "清河高级副本或百业商店兑换", stat: "气血、外功防御" },
    { name: "斗易·战靴", slot: "防具·足部", how: "河西区域世界BOSS掉落", stat: "移速、气血" },
    { name: "玉斗·头冠", slot: "防具·头部", how: "新手村「无相皇」首次通关奖励（过渡用）", stat: "气血、会心率" },
    { name: "沉星·腰佩", slot: "饰品", how: "高级探索宝箱或百业商店兑换", stat: "气血、外功防御" },
  ] : [
    { name: "Douyi Halberd (Weapon)", slot: "Main Weapon", how: "Unlocked with Jiefu Blade Art in Chapter 1, Hundred Trades shop or high-level dungeon drops", stat: "Physical ATK, Crit Rate" },
    { name: "Douyi Bracers", slot: "Armor — Hands", how: "Advanced Qinghe dungeons or Hundred Trades shop", stat: "HP, Physical DEF" },
    { name: "Douyi Boots", slot: "Armor — Feet", how: "Hexi region world boss drops", stat: "Move Speed, HP" },
    { name: "Yudou Crown", slot: "Armor — Head", how: 'First clear reward from "Wuxiang Huang" (starter)', stat: "HP, Crit Rate" },
    { name: "Chenxing Belt", slot: "Accessory", how: "Advanced exploration chests or Hundred Trades shop", stat: "HP, Physical DEF" },
  ];

  const innerArts = isZh ? [
    { name: "磐石诀", style: "裂石威", effect: "坦克流核心心法，常驻25%伤害减免，没有它不要玩坦克流", prio: "必带（坦克）" },
    { name: "山河绝韵", style: "裂石威", effect: "防反核心心法，大幅提升防反判定窗口和战意获取", prio: "必带" },
    { name: "易水歌", style: "通用", effect: "通用增伤心法，输出流核心", prio: "推荐" },
    { name: "抗造大法", style: "裂石威", effect: "受击后提升防御，坦克流进一步提升坦度", prio: "推荐" },
    { name: "威猛歌", style: "通用", effect: "通用增伤，输出流搭配使用", prio: "推荐" },
    { name: "移经易武", style: "通用", effect: "大后期心法，提升易武衔接速度和整体输出", prio: "大后期" },
  ] : [
    { name: "Panshi Art (Rock Solid)", style: "Lieshi Wei", effect: "Tank core — permanent 25% damage reduction. Don't play tank without it", prio: "Must-have (Tank)" },
    { name: "Shanhe Jueyun (Mountain River Rhyme)", style: "Lieshi Wei", effect: "Parry core — massively expands parry window and Battle Will gain", prio: "Must-have" },
    { name: "Yishui Song", style: "Universal", effect: "Universal damage boost, core for DPS build", prio: "Recommended" },
    { name: "Kangzao Dafa (Toughness Art)", style: "Lieshi Wei", effect: "Boosts defense after taking hits, further tankiness for tank build", prio: "Recommended" },
    { name: "Weimeng Song (Fierce Ode)", style: "Universal", effect: "Universal damage boost, pairs well with DPS build", prio: "Recommended" },
    { name: "Yijing Yiwu (Swap Art)", style: "Universal", effect: "Late game inner art, speeds up weapon swaps and overall output", prio: "Late game" },
  ];

  const tips = isZh ? [
    { title: "防反是灵魂操作", text: "裂石威的一切输出和生存都围绕防反展开。成功防反获得高额减伤和战意积累，失败则吃满伤害。建议先在低难本反复练习防反时机，形成肌肉记忆后再打高难。" },
    { title: "战意值管理", text: "满战意可以免蓄力释放三段蓄力斩，这是陌刀的核心输出窗口。不要浪费满战意状态，在战意快满时规划好下一个蓄力斩释放时机。" },
    { title: "坦克流和输出流随时切换", text: "只需更换心法配置（装不装磐石诀）即可在坦克和输出之间切换。装备方面坦克流堆气血防御，输出堆攻击会心。建议准备两套心法配置。" },
    { title: "蓄力斩不要被打断", text: "陌刀蓄力三段斩是站桩输出，蓄力过程中无法移动。坦克流有磐石诀减伤问题不大，输出流一定要确认安全再蓄力，否则被打断等于白费战意。" },
    { title: "团队副本中的职责优先级", text: "坦克流第一优先级永远是拉住仇恨和生存，输出是第二位的。不要为了贪伤害忘记拉怪或让BOSS转头打队友。" },
  ] : [
    { title: "Parry is the soul of this build", text: "Everything about Lieshi Wei revolves around parrying. Successful parries grant damage reduction and Battle Will; failed parries mean taking full damage. Practice parry timing in easy dungeons until it's muscle memory before tackling hard content." },
    { title: "Battle Will management", text: "Full Battle Will enables a free triple charged slash — your core damage window. Don't waste a full Battle Will bar. Plan your charged slash timing as Battle Will approaches max." },
    { title: "Swap between Tank and DPS freely", text: "Simply swap inner arts (equip Panshi Art or not) to switch between tank and DPS. Tank gear stacks HP/DEF, DPS gear stacks ATK/Crit. Consider maintaining two inner art loadouts." },
    { title: "Don't let your charge get interrupted", text: "The triple charged slash is a stationary cast — you can't move while charging. With Panshi Art's damage reduction, tank builds can eat it. DPS builds must confirm safety before committing, or you waste your Battle Will." },
    { title: "Duty priorities in group content", text: "As a tank, your #1 priority is always holding aggro and surviving — DPS comes second. Never greed for damage and let the boss turn on your teammates." },
  ];

  const dungeonSleeping = isZh ? [
    { label: "拉仇恨优先：", color: "text-amber-400", text: "开局第一时间用横扫和蓄力斩建立仇恨，确保BOSS全程面朝你。睡道人的跳击伤害很高，仇恨不稳容易导致BOSS转头秒杀脆皮队友。" },
    { label: "藤牢术应对：", color: "text-red-400", text: "被点名藤牢后不要慌，裂石威身板硬，被关一会问题不大。但要及时呼叫队友来破牢，别让BOSS无人拉仇恨。" },
    { label: "召唤小怪阶段：", color: "text-amber-400", text: "用八方风雷枪·旋风拉住所有小怪仇恨，让队友集火清怪。坦克流不要贪输出，拉住怪让DPS安心打才是正事。" },
  ] : [
    { label: "Aggro first: ", color: "text-amber-400", text: "Open with Sweep and Charged Slash to establish aggro immediately — keep the boss facing you all fight. Sleeping Daoist's leap deals heavy damage; unstable aggro means the boss turns and one-shots squishies." },
    { label: "Vine Prison response: ", color: "text-red-400", text: "Don't panic if marked for Vine Prison — Lieshi Wei is tanky enough to survive the cage. Call for teammates to break you out quickly so the boss doesn't run free." },
    { label: "Add phase: ", color: "text-amber-400", text: "Use Storm Spear Whirlwind to hold all add aggro while the team focuses them down. As a tank, don't greed DPS — your job is controlling adds so DPS can clear safely." },
  ];

  const dungeonRong = isZh ? [
    { label: "搬桶不是你的活（五人本）：", color: "text-amber-400", text: "五人本中坦克主要负责拉住BOSS仇恨，让其他4人去搬桶。但如果远处的桶没人搬，裂石威身板硬可以顶着伤害去搬。" },
    { label: "护盾阶段扛伤害：", color: "text-red-400", text: "护盾阶段全队集火破盾，坦克留在近处继续拉仇恨，确保BOSS不打正在搬桶或集火的队友。磐石诀25%减伤在这里很有用。" },
    { label: "十人本职责：", color: "text-amber-400", text: "十人本中坦克必须熟练处理三黄线机制。配合副坦分工拉怪，确保仇恨分配合理。容鸢的伤害对坦克来说不致命，但不能让BOSS转头打治疗。" },
  ] : [
    { label: "Barrels aren't your job (5-man): ", color: "text-amber-400", text: "In 5-man content, the tank holds boss aggro while the other 4 handle barrels. If a distant barrel has no taker, Lieshi Wei is tanky enough to grab it while taking damage." },
    { label: "Shield phase tanking: ", color: "text-red-400", text: "During shield phase, the team focuses fire while you stay close to maintain aggro — ensuring the boss doesn't switch to barrel carriers or DPS. Panshi Art's 25% reduction really helps here." },
    { label: "10-man duties: ", color: "text-amber-400", text: "In raids, tanks must master the triple yellow line mechanic. Coordinate with the off-tank to split add aggro. Rong Yuan's damage isn't lethal to you, but you cannot let the boss turn on the healer." },
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
          <span className="rounded-full bg-stone-800 px-3 py-1 text-xs font-semibold text-stone-300">{t("tankRole", locale)}</span>
          <span className="rounded-full bg-stone-800 px-3 py-1 text-xs font-semibold text-stone-300">{t("lieshiAttr", locale)}</span>
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
                <th className="px-4 py-3 text-amber-400 font-semibold">{t("tTank", locale)}</th>
                <th className="px-4 py-3 text-amber-400 font-semibold">{t("tDps", locale)}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-800">
              <tr><td className="px-4 py-3 text-stone-400">{t("tCoreInner", locale)}</td><td className="px-4 py-3 text-stone-300">{t("tTankInner", locale)}</td><td className="px-4 py-3 text-stone-300">{t("tDpsInner", locale)}</td></tr>
              <tr><td className="px-4 py-3 text-stone-400">{t("tDmgReduct", locale)}</td><td className="px-4 py-3 text-emerald-400 font-bold">{t("tTankReduce", locale)}</td><td className="px-4 py-3 text-stone-300">{t("tDpsReduce", locale)}</td></tr>
              <tr><td className="px-4 py-3 text-stone-400">{t("tOutput", locale)}</td><td className="px-4 py-3 text-stone-300">{t("tTankOutput", locale)}</td><td className="px-4 py-3 text-amber-400 font-bold">{t("tDpsOutput", locale)}</td></tr>
              <tr><td className="px-4 py-3 text-stone-400">{t("tTeamRole", locale)}</td><td className="px-4 py-3 text-stone-300">{t("tTankRole", locale)}</td><td className="px-4 py-3 text-stone-300">{t("tDpsRole", locale)}</td></tr>
              <tr><td className="px-4 py-3 text-stone-400">{t("tScenario", locale)}</td><td className="px-4 py-3 text-stone-300">{t("tTankScen", locale)}</td><td className="px-4 py-3 text-stone-300">{t("tDpsScen", locale)}</td></tr>
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
                "• 游戏唯一重装坦克，高难副本刚需",
                "• 磐石诀常驻25%减伤，配合防反极其抗揍",
                "• 陌刀蓄力三段斩伤害不俗，坦克也能打",
                "• 坦克/输出双流派随时切换，一套配装两种玩法",
                "• 陌刀自带16%会心+天赋24%蓄力会心，暴击率高",
              ] : [
                "• The only heavy tank in the game — essential for hard content",
                "• Panshi Art gives permanent 25% damage reduction, nearly unkillable with parry",
                "• Halberd triple charged slash deals solid damage — even tanks can DPS",
                "• Freely swap between Tank/DPS — one build, two playstyles",
                "• Built-in 16% Crit + 24% Charged Crit from talent — high crit ceiling",
              ].map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
          <div className="rounded-lg border border-red-900/30 bg-red-900/5 p-4">
            <h4 className="mb-2 text-sm font-bold text-red-400 uppercase tracking-wider">{t("s1ConsTitle", locale)}</h4>
            <ul className="space-y-1.5 text-sm text-stone-300">
              {isZh ? [
                "• 防反要求高，操作失误吃满伤害很疼",
                "• 蓄力斩站桩输出，需要预判安全时机",
                "• 大世界探索体验不如鸣金系流畅",
                "• 坦克流输出有限，单刷效率不如纯DPS流派",
              ] : [
                "• Parry execution is demanding — mistakes mean taking full damage",
                "• Charged slash is stationary — must read safety windows",
                "• Open-world exploration feels less fluid than Mingjin builds",
                "• Tank build has limited DPS — slower solo clearing than pure DPS builds",
              ].map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        </div>

        <figure className="my-8 flex flex-col items-center">
          <div className="w-full max-w-2xl overflow-hidden rounded-xl border border-amber-900/20">
            <iframe src="https://player.bilibili.com/player.html?bvid=BV1eVb3z5E9g&page=1&high_quality=1&autoplay=0" title="Lieshi Wei PvE Guide" className="aspect-video w-full" allowFullScreen sandbox="allow-scripts allow-same-origin allow-popups" loading="lazy" />
          </div>
          <figcaption className="mt-2 text-xs text-stone-500">{t("videoPve", locale)}</figcaption>
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
                  <td className={`px-4 py-3 font-bold ${[0, 1].includes(i) ? "text-red-400" : i < 5 ? "text-amber-400" : "text-stone-400"}`}>{s.prio}</td>
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
              <p className="text-amber-400">起手拉仇恨：</p>
              <p className="text-stone-300 ml-4">横扫（AOE拉怪）→ 蓄力斩（单体建立仇恨）→ 防反积累战意</p>
              <p className="text-amber-400 mt-2">坦克循环：</p>
              <p className="text-stone-300 ml-4">防反 → 横扫维持仇恨 → 满战意免蓄力三段斩 → 继续防反</p>
              <p className="text-amber-400 mt-2">CD填充：</p>
              <p className="text-stone-300 ml-4">神龙吐火 → 骑龙回马 → 枪法突进 → 易武切换</p>
            </>
          ) : (
            <>
              <p className="text-amber-400">Aggro Opener:</p>
              <p className="text-stone-300 ml-4">Sweep (AoE pull) → Charged Slash (single-target aggro) → Parry to build Battle Will</p>
              <p className="text-amber-400 mt-2">Tank Loop:</p>
              <p className="text-stone-300 ml-4">Parry → Sweep to maintain aggro → Free triple charged slash at full Will → Resume parry</p>
              <p className="text-amber-400 mt-2">Cooldown Filler:</p>
              <p className="text-stone-300 ml-4">Shenlong Fire Breath → Dragon Rider's Strike → Spear Dash → Weapon Swap</p>
            </>
          )}
        </div>

        <h3 className="mb-3 text-lg font-semibold text-stone-200">{t("s5Burst", locale)}</h3>
        <div className="mb-4 rounded-lg border border-stone-800 bg-stone-950 p-4 font-mono text-sm">
          {isZh ? (
            <>
              <p className="text-amber-400">输出流爆发循环：</p>
              <p className="text-stone-300 ml-4">防反积满战意 → 免蓄力三段斩 → 神龙吐火 → 骑龙回马 → 枪法突进 → 易武切回陌刀 → 继续防反</p>
              <p className="text-red-400 mt-2">关键：输出流没有磐石诀减伤，防反时机必须精准，蓄力斩前确认安全</p>
            </>
          ) : (
            <>
              <p className="text-amber-400">DPS Burst Loop:</p>
              <p className="text-stone-300 ml-4">Parry to full Will → Free triple charged slash → Shenlong Fire Breath → Dragon Rider's Strike → Spear Dash → Swap back → Parry again</p>
              <p className="text-red-400 mt-2">Key: DPS build lacks Panshi reduction — parry timing must be precise, confirm safety before charging</p>
            </>
          )}
        </div>

        <h3 className="mb-3 text-lg font-semibold text-stone-200">{t("s5Secret", locale)}</h3>
        <div className="mb-4 rounded-lg border border-stone-800 bg-stone-950 p-4 font-mono text-sm">
          {isZh ? (
            <>
              <p className="text-amber-400">奇术填充（蓄力CD期间）：</p>
              <p className="text-stone-300 ml-4">神龙吐火 → 骑龙回马 → 枪法技能 → 易武切换回陌刀</p>
              <p className="text-amber-400 mt-2">紧急情况：</p>
              <p className="text-stone-300 ml-4">八方风雷枪·旋风拉怪 → 防反恢复战意 → 蓄力斩爆发</p>
            </>
          ) : (
            <>
              <p className="text-amber-400">Secret Art Filler (during charge CD):</p>
              <p className="text-stone-300 ml-4">Shenlong Fire Breath → Dragon Rider's Strike → Spear skill → Swap back to Halberd</p>
              <p className="text-amber-400 mt-2">Emergency:</p>
              <p className="text-stone-300 ml-4">Storm Spear Whirlwind for AoE aggro → Parry to recover Battle Will → Charged Slash burst</p>
            </>
          )}
        </div>

        <figure className="my-8 flex flex-col items-center">
          <div className="w-full max-w-2xl overflow-hidden rounded-xl border border-amber-900/20">
            <iframe src="https://player.bilibili.com/player.html?bvid=BV1iP23BGEzj&page=1&high_quality=1&autoplay=0" title="Lieshi Wei Combo Demo" className="aspect-video w-full" allowFullScreen sandbox="allow-scripts allow-same-origin allow-popups" loading="lazy" />
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
