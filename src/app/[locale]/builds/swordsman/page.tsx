"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

const ARTICLE_ID = "swordsman";

type L = "zh" | "en";

const i18n = {
  // Header / Breadcrumb
  home: { zh: "首页", en: "Home" },
  builds: { zh: "流派攻略", en: "Build Guides" },
  guideTitle: { zh: "鸣金虹（新手剑客）完全攻略", en: "Mingjin Hong — Beginner Swordsman Complete Guide" },
  // Badges
  tierBadge: { zh: "T1 流派", en: "T1 Build" },
  meleeDps: { zh: "近战输出", en: "Melee DPS" },
  mingjinAttr: { zh: "鸣金属性", en: "Mingjin Element" },
  // Subtitle
  subtitle: { zh: "无名剑法 + 无名枪法 — 从新手到进阶，鸣金虹流派的全方位培养指南", en: "Nameless Sword Art + Nameless Spear Art — A complete progression guide from beginner to advanced for the Mingjin Hong style" },
  version: { zh: "游戏版本 v2.1.0", en: "Game Version v2.1.0" },
  lastUpdate: { zh: "最后更新：2026-05-10", en: "Last Updated: 2026-05-10" },
  author: { zh: "作者：攻略组", en: "By: Guide Team" },
  bookmark: { zh: "收藏", en: "Bookmark" },
  logout: { zh: "退出", en: "Logout" },
  loginRegister: { zh: "登录 / 注册", en: "Login / Register" },
  // Section 1
  s1Title: { zh: "一、流派定位与优劣分析", en: "1. Playstyle Overview & Strengths/Weaknesses" },
  s1Compare: { zh: "1.1 鸣金虹 vs 鸣金影 定位对比", en: "1.1 Mingjin Hong vs Mingjin Ying Comparison" },
  s1Intro: {
    zh: '燕云十六声中没有传统"职业"概念，而是由武器组合形成流派。剑系武学有两套——无名剑法（鸣金虹）和积矩九剑（鸣金影），分别对应不同的流派定位：',
    en: "Where Winds Meet has no traditional \"classes\" — instead, weapon pairs define your combat style. The sword tree has two paths: Nameless Sword Art (Mingjin Hong) and Jiju Nine Swords (Mingjin Ying), each with a distinct role:",
  },
  // Comparison table
  tCompare: { zh: "对比项目", en: "Category" },
  tMingjinHong: { zh: "无名剑法（鸣金虹）", en: "Nameless Sword Art (Mingjin Hong)" },
  tMingjinYing: { zh: "积矩九剑（鸣金影）", en: "Jiju Nine Swords (Mingjin Ying)" },
  tWeapons: { zh: "搭配武器", en: "Paired Weapon" },
  tNamelessSpear: { zh: "无名枪法", en: "Nameless Spear Art" },
  tJiuquSpear: { zh: "九曲惊枪", en: "Jiuqu Startling Spear" },
  tTier: { zh: "流派评级", en: "Build Tier" },
  tDmgType: { zh: "输出类型", en: "Damage Type" },
  tDmgHong: { zh: "持续输出，蓄力剑气为核心", en: "Sustained DPS, charged Sword Qi is the core" },
  tDmgYing: { zh: "高爆发，连招流", en: "High burst, combo-based" },
  tDifficulty: { zh: "上手难度", en: "Difficulty" },
  tDiffHong: { zh: "★★☆☆☆ 新手友好", en: "★★☆☆☆ Beginner-friendly" },
  tDiffYing: { zh: "★★★★☆ 需要熟练度", en: "★★★★☆ Requires practice" },
  tCoreInner: { zh: "核心心法", en: "Core Inner Art" },
  tCoreHong: { zh: "无名心法、易水歌", en: "Nameless Inner Art, Yishui Song" },
  tCoreYing: { zh: "剑气纵横（必备）", en: "Sword Qi Unleashed (mandatory)" },
  tTeamRole: { zh: "团队定位", en: "Team Role" },
  tRoleHong: { zh: "稳定持续DPS", en: "Stable sustained DPS" },
  tRoleYing: { zh: "爆发DPS / 竞速核心", en: "Burst DPS / speedrun core" },
  tScenario: { zh: "推荐场景", en: "Best For" },
  tScenHong: { zh: "副本、大世界、新手开荒", en: "Dungeons, open world, beginner progression" },
  tScenYing: { zh: "高难副本、竞速", en: "Hard dungeons, speedruns" },
  // Pros / Cons
  s1ProsTitle: { zh: "✅ 优势", en: "✅ STRENGTHS" },
  s1ConsTitle: { zh: "❌ 劣势", en: "❌ WEAKNESSES" },
  // Video
  videoSkill: { zh: "视频：无名剑法全技能实机展示（B站）", en: "Video: Nameless Sword Art full skill showcase (Bilibili)" },
  // Section 2
  s2Title: { zh: "二、技能加点推荐（1-30级）", en: "2. Skill Point Allocation (Lv 1-30)" },
  s2Sub: { zh: "2.1 无名剑法（鸣金虹）加点路线", en: "2.1 Nameless Sword Art (Mingjin Hong) Skill Priority" },
  s2Intro: { zh: "前期以无名剑法为核心，优先点满输出技能和Q技能，保证打本伤害。副武器无名枪法点出控制技能即可。", en: "Early game focuses on Nameless Sword Art. Max your damage skills and Q skill first to ensure solid dungeon DPS. For your off-hand Nameless Spear, just unlock the crowd control skills." },
  // Skill table
  thLevel: { zh: "等级阶段", en: "Level Range" },
  thSkill: { zh: "技能名称", en: "Skill Name" },
  thPriority: { zh: "优先级", en: "Priority" },
  thNote: { zh: "说明", en: "Notes" },
  // Attribute section
  s2Attr: { zh: "2.2 属性加点建议", en: "2.2 Attribute Point Allocation" },
  attr1: { zh: "① 体魄 → 优先加至30级（增加相扑和扦别伤害）", en: "① Physique → Prioritize to Lv 30 (increases grappling and throw damage)" },
  attr2: { zh: "② 眼力 → 加至30级（加快拉弓和采集效率）", en: "② Perception → To Lv 30 (speeds up bow drawing and gathering)" },
  attr3: { zh: "③ 协调 → 后期点满（免疫坠落伤害）", en: "③ Coordination → Max late game (immune to fall damage)" },
  attr4: { zh: "④ 雅致 → 后期点满（降低游泳体力消耗）", en: "④ Elegance → Max late game (reduces swimming stamina cost)" },
  attrTip: { zh: "初始特质推荐：1金（20点体魄或眼力）+ 2紫（10点同属性）+ 2蓝", en: "Recommended starting traits: 1 Gold (20 pts Physique or Perception) + 2 Purple (10 pts same attribute) + 2 Blue" },
  // Section 3
  s3Title: { zh: "三、开局装备推荐（前5件必拿）", en: "3. Early Game Gear — Top 5 Must-Haves" },
  s3Intro: { zh: "前期装备以斗易套装（玉斗+易相）为核心，这套装备提供最核心的「会意」和「势」属性，易相套还能延长护盾时间，保证你可以连打两波蓄力R。", en: 'Early game gear centers on the Douyi Set (Yudou + Yixiang). This set provides the critical "Insight" and "Momentum" stats. The Yixiang pieces also extend your shield duration, letting you safely fire two rounds of charged attacks.' },
  s3GearTip: {
    zh: "装备进阶提示：无名心法四重之前，无脑搭配玉斗+易相套装。四重后手法成熟可换成飞隼套追求极致输出，飞鹰套适合连招非常熟练的高手玩家。",
    en: "Gear Progression: Before Nameless Inner Art Rank 4, stick with Yudou + Yixiang. After Rank 4, skilled players can swap to the Feisun (Falcon) set for maximum DPS, or the Feiying (Hawk) set if your combos are extremely fluid.",
  },
  thHow: { zh: "获取方式：", en: "How to get: " },
  thStat: { zh: "核心属性：", en: "Key stats: " },
  // Section 4
  s4Title: { zh: "四、心法搭配推荐", en: "4. Inner Art Recommendations" },
  thInner: { zh: "心法", en: "Inner Art" },
  thStyle: { zh: "流派", en: "Style" },
  thEffect: { zh: "效果", en: "Effect" },
  thInnerPrio: { zh: "优先级", en: "Priority" },
  mustHave: { zh: "必带", en: "Must-have" },
  recommended: { zh: "推荐", en: "Recommended" },
  lateGame: { zh: "大后期", en: "Late game" },
  jijuMust: { zh: "积矩九剑必备", en: "Jiju mandatory" },
  // Section 5
  s5Title: { zh: "五、核心连招教学", en: "5. Core Combo Guide" },
  s5Pve: { zh: "5.1 无名剑法PVE输出循环", en: "5.1 Nameless Sword Art PvE Rotation" },
  s5Burst: { zh: "5.2 积矩九剑高爆发循环", en: "5.2 Jiju Nine Swords Burst Rotation" },
  videoCombo: { zh: "视频：无名剑法+奇术丝滑连招循环教学（B站）", en: "Video: Nameless Sword Art + Secret Technique smooth combo loop (Bilibili)" },
  comboBasic: { zh: "基础版连招（无名心法一重）", en: "Basic combo (Nameless Inner Art Rank 1)" },
  comboAdvanced: { zh: "进阶版连招（无名心法四重）", en: "Advanced combo (Nameless Inner Art Rank 4)" },
  // Section 6
  s6Title: { zh: "六、首个团队副本攻略：鸣金虹职责", en: "6. First Raid Guide — Mingjin Hong Role" },
  s6Intro: {
    zh: '游戏前期的主要副本为五人本「云梦金明池」和十人本「侠境·舞狮兄弟」。作为鸣金虹（输出位），你的核心职责是稳定输出 + 协助处理机制。',
    en: 'The early game raids are the 5-man "Yunmeng Jinming Pool" and the 10-man "Lion Dance Brothers". As Mingjin Hong (DPS), your core duty is consistent damage output while helping with mechanics.',
  },
  s6Sleeping: { zh: "金明池·睡道人 — 鸣金虹要点", en: "Jinming Pool — Sleeping Daoist: Key Points" },
  s6Rong: { zh: "金明池·容鸢（荣鸢）— 鸣金虹要点", en: "Jinming Pool — Rong Yuan: Key Points" },
  // Section 7
  s7Title: { zh: "七、进阶技巧与常见误区", en: "7. Advanced Tips & Common Mistakes" },
  // Comments
  comments: { zh: "评论区", en: "Comments" },
  writeComment: { zh: "写下你的评论...", en: "Write a comment..." },
  collapseComment: { zh: "收起评论框", en: "Collapse" },
  submitComment: { zh: "发表评论", en: "Post Comment" },
  commentPlaceholder: { zh: "分享你的鸣金虹心得...", en: "Share your Mingjin Hong tips..." },
  // Weapon combo label
  weaponCombo: { zh: "武器组合", en: "Weapon Pair" },
};

function t(key: keyof typeof i18n, locale: L): string {
  return i18n[key]?.[locale] ?? i18n[key]?.zh ?? key;
}

export default function SwordsmanGuide() {
  const params = useParams();
  const locale = (params?.locale as L) || "zh";
  const isZh = locale === "zh";

  // ── Locale-aware data arrays ──

  const equipItems = isZh ? [
    { name: "玉斗武器（剑）", slot: "主武器", how: "主线第一章清河区域Boss掉落，或百业商店兑换", stat: "会意、势" },
    { name: "易相·护腕", slot: "防具·手部", how: "清河支线「隐月山」任务奖励", stat: "护盾延长、会意" },
    { name: "易相·战靴", slot: "防具·足部", how: "清河北部世界BOSS「煞地神」击杀掉落", stat: "移速、势" },
    { name: "玉斗·头冠", slot: "防具·头部", how: "新手村「无相皇」首次通关奖励", stat: "气血、会心率" },
    { name: "飞隼·腰佩", slot: "饰品", how: "百草野探索宝箱（北竹林传送点附近），或黑市商人随机出售", stat: "外功攻击、会意" },
  ] : [
    { name: "Yudou Sword (Weapon)", slot: "Main Weapon", how: "Chapter 1 Qinghe boss drop, or Hundred Trades shop exchange", stat: "Insight, Momentum" },
    { name: "Yixiang Bracers", slot: "Armor — Hands", how: 'Qinghe side quest "Hidden Moon Mountain" reward', stat: "Shield extension, Insight" },
    { name: "Yixiang Boots", slot: "Armor — Feet", how: 'World boss "Shadi Shen" drop in northern Qinghe', stat: "Move speed, Momentum" },
    { name: "Yudou Crown", slot: "Armor — Head", how: 'First clear reward from "Wuxiang Huang" in starter village', stat: "HP, Crit Rate" },
    { name: "Feisun Belt", slot: "Accessory", how: "Baicaoye exploration chest (near North Bamboo TP), or Black Market vendor", stat: "Physical ATK, Insight" },
  ];

  const innerArts = isZh ? [
    { name: "无名心法", style: "鸣金虹", effect: "专属心法，提升无名剑法整体伤害", prio: "必带" },
    { name: "威猛歌", style: "通用", effect: "通用增伤心法，提升整体输出", prio: "必带" },
    { name: "易水歌", style: "通用", effect: "通用增伤心法，前期核心", prio: "推荐" },
    { name: "燎原心火", style: "通用", effect: "与易水歌搭配使用，当前版本推荐", prio: "推荐" },
    { name: "千山法", style: "通用", effect: "大后期替换易水歌，以耐力为主", prio: "大后期" },
    { name: "剑气纵横", style: "鸣金影", effect: "积矩九剑核心心法，没有它不要玩鸣金影", prio: "积矩九剑必备" },
  ] : [
    { name: "Nameless Inner Art", style: "Mingjin Hong", effect: "Exclusive inner art, boosts all Nameless Sword Art damage", prio: "Must-have" },
    { name: "Weimeng Song (Fierce Ode)", style: "Universal", effect: "Universal damage boost inner art", prio: "Must-have" },
    { name: "Yishui Song", style: "Universal", effect: "Universal damage boost, core for early game", prio: "Recommended" },
    { name: "Liaoyuan Heart Fire", style: "Universal", effect: "Paired with Yishui Song, recommended for current patch", prio: "Recommended" },
    { name: "Qianshan Art", style: "Universal", effect: "Replaces Yishui Song in late game, stamina-focused", prio: "Late game" },
    { name: "Sword Qi Unleashed", style: "Mingjin Ying", effect: "Core inner art for Jiju Nine Swords — don't play Mingjin Ying without it", prio: "Jiju mandatory" },
  ];

  const skillTable = isZh ? [
    { level: "1-5级", skill: "无名剑法·Q（蓄力剑气）", prio: "★★★★★", note: "核心输出技能，多道剑气+护盾，必满" },
    { level: "1-5级", skill: "无名剑法·普通连击", prio: "★★★★☆", note: "基础连招，提升轻击伤害" },
    { level: "5-10级", skill: "无名枪法·突进技", prio: "★★★★☆", note: "位移+控制，衔接剑法输出" },
    { level: "10-15级", skill: "无名剑法·重击蓄力", prio: "★★★★☆", note: "蓄力重击是剑气外的第二输出来源" },
    { level: "15-20级", skill: "无名枪法·特殊技", prio: "★★★☆☆", note: "补充控制和范围伤害" },
    { level: "20-25级", skill: "奇术·神龙吐火", prio: "★★★★☆", note: "武学CD期间的最佳填充技能" },
    { level: "25-30级", skill: "奇术·骑龙回马", prio: "★★★★☆", note: "易武切换衔接技能，提升连招流畅度" },
  ] : [
    { level: "Lv 1-5", skill: "Nameless Sword · Q (Charged Sword Qi)", prio: "★★★★★", note: "Core damage skill — multi-hit Sword Qi + shield, max first" },
    { level: "Lv 1-5", skill: "Nameless Sword · Basic Combo", prio: "★★★★☆", note: "Fundamental chain, boosts light attack damage" },
    { level: "Lv 5-10", skill: "Nameless Spear · Dash Strike", prio: "★★★★☆", note: "Gap closer + CC, bridges into sword combos" },
    { level: "Lv 10-15", skill: "Nameless Sword · Charged Heavy", prio: "★★★★☆", note: "Second damage source after Sword Qi" },
    { level: "Lv 15-20", skill: "Nameless Spear · Special", prio: "★★★☆☆", note: "Supplementary CC and AoE damage" },
    { level: "Lv 20-25", skill: "Secret Art · Shenlong Fire Breath", prio: "★★★★☆", note: "Best filler skill during martial art cooldowns" },
    { level: "Lv 25-30", skill: "Secret Art · Dragon Rider's Strike", prio: "★★★★☆", note: "Weapon swap chain skill, improves combo fluidity" },
  ];

  const tips = isZh ? [
    { title: "蓄力剑气是核心", text: "无名剑法的伤害大头不是普攻连击，而是蓄力剑气。玉斗+易相套延长护盾就是为了让你安稳打出蓄力。不要打断自己的蓄力去贪普攻。" },
    { title: "Q技能的护盾要利用好", text: "Q技能释放后自带护盾，在BOSS高伤阶段提前开Q可以硬扛一波。配合易相套护盾时间更长。" },
    { title: "奇术是输出关键", text: "武学CD期间的输出空窗很长，必须用神龙吐火、骑龙回马等奇术填充。奇术伤害占总输出的30%以上。" },
    { title: "卸式比闪避更重要", text: "鸣金虹是近战流派，学会卸式（弹反）比闪避更有效。成功卸式可以积累BOSS真气条，加速BOSS进入气竭状态。" },
    { title: "什么时候转积矩九剑", text: "只有拿到「剑气纵横」心法后才考虑转积矩九剑。没有这个心法的积矩九剑伤害不如无名剑法。拿到后先在低难本练习连招，熟练后再打高难。" },
  ] : [
    { title: "Charged Sword Qi is everything", text: "The bulk of your damage comes from charged Sword Qi, not basic combos. The Yudou + Yixiang set extends your shield specifically so you can channel in peace. Never interrupt your charge to squeeze in auto-attacks." },
    { title: "Leverage Q's shield", text: "Q grants a shield on cast. Pre-cast it before big boss damage phases to tank a hit. Combined with Yixiang pieces, the shield lasts even longer." },
    { title: "Secret Arts fill the DPS gap", text: "Martial art cooldowns create long damage windows. You must fill them with Shenlong Fire Breath, Dragon Rider's Strike, etc. Secret Arts account for 30%+ of total output." },
    { title: "Parry beats dodge", text: "Mingjin Hong is a melee style. Learning to Parry (Deflect) is more effective than dodging. Successful parries build the boss's True Qi gauge, pushing them into Qi Exhaustion faster." },
    { title: "When to switch to Jiju Nine Swords", text: "Only consider Jiju Nine Swords after obtaining the Sword Qi Unleashed inner art. Without it, Jiju deals less damage than Nameless Sword Art. Practice combos in easier dungeons before tackling hard content." },
  ];

  const dungeonSleeping = isZh ? [
    { label: "藤牢术：", color: "text-red-400", text: "被点名后快速远离队友，不要让队友也变藤牢。被关后大喊队友来破牢。冷知识：荆棘牢笼可以三段跳躲避。" },
    { label: "召唤小怪（最易灭团点）：", color: "text-amber-400", text: "全队必须集火清小怪，小怪存活越多，BOSS跳下来伤害越高。留好蓄力剑气和奇术在这个阶段爆发清怪。" },
    { label: "BOSS跳击应对：", color: "text-amber-400", text: "BOSS跳下来时开Q护盾硬抗，或者全员站一起让奶妈放奶阵。鸣金虹的Q护盾在这里非常实用。" },
  ] : [
    { label: "Vine Prison: ", color: "text-red-400", text: "When marked, run away from teammates immediately. If caught, call for help to break the cage. Pro tip: you can triple-jump over the thorn cage." },
    { label: "Add Spawn (biggest wipe cause): ", color: "text-amber-400", text: "The whole team must focus adds. More adds alive = more damage when the boss leaps down. Save your charged Sword Qi and Secret Arts for this phase." },
    { label: "Boss Leap Response: ", color: "text-amber-400", text: "When the boss jumps, pop Q shield to tank it, or stack with the team for healer AoE. Mingjin Hong's Q shield is very handy here." },
  ];

  const dungeonRong = isZh ? [
    { label: "炸药桶机制：", color: "text-amber-400", text: "4个以上危险桶必须去搬，不能贪输出。搬到火海外。这是容鸢最核心的机制，优先级高于一切。" },
    { label: "三黄线引爆（五人本，最易灭团）：", color: "text-amber-400", text: "除坦克外全员抢桶搬出线。1个爆炸可接受，2个以上大概率灭团。鸣金虹机动性强，优先抢远处的桶。" },
    { label: "护盾阶段：", color: "text-red-400", text: "必须全队集火最快速度打破护盾，否则团灭。鸣金虹留好蓄力R在这阶段全力输出。" },
  ] : [
    { label: "Barrel Mechanic: ", color: "text-amber-400", text: "You must move 4+ dangerous barrels — don't greed DPS. Carry them outside the fire ring. This is Rong Yuan's core mechanic, priority over everything." },
    { label: "Triple Yellow Line Detonation (5-man, biggest wipe cause): ", color: "text-amber-400", text: "Everyone but the tank grabs barrels. 1 explosion is survivable; 2+ is likely a wipe. Mingjin Hong has high mobility — prioritize distant barrels." },
    { label: "Shield Phase: ", color: "text-red-400", text: "The entire team must focus fire to break the shield ASAP or it's a wipe. Mingjin Hong should save charged attacks for maximum burst in this phase." },
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
          <span className="rounded-full bg-stone-800 px-3 py-1 text-xs font-semibold text-stone-300">{t("meleeDps", locale)}</span>
          <span className="rounded-full bg-stone-800 px-3 py-1 text-xs font-semibold text-stone-300">{t("mingjinAttr", locale)}</span>
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
        <h3 className="mb-3 text-lg font-semibold text-stone-200">{t("s1Compare", locale)}</h3>
        <p className="mb-4 text-stone-300 leading-relaxed">{t("s1Intro", locale)}</p>

        <div className="mb-6 overflow-x-auto rounded-lg border border-stone-800">
          <table className="w-full text-sm">
            <thead className="bg-stone-900 text-left">
              <tr>
                <th className="px-4 py-3 text-amber-400 font-semibold">{t("tCompare", locale)}</th>
                <th className="px-4 py-3 text-amber-400 font-semibold">{t("tMingjinHong", locale)}</th>
                <th className="px-4 py-3 text-amber-400 font-semibold">{t("tMingjinYing", locale)}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-800">
              <tr><td className="px-4 py-3 text-stone-400">{t("tWeapons", locale)}</td><td className="px-4 py-3 text-stone-300">{t("tNamelessSpear", locale)}</td><td className="px-4 py-3 text-stone-300">{t("tJiuquSpear", locale)}</td></tr>
              <tr><td className="px-4 py-3 text-stone-400">{t("tTier", locale)}</td><td className="px-4 py-3 text-emerald-400 font-semibold">T1</td><td className="px-4 py-3 text-amber-400 font-bold">T0</td></tr>
              <tr><td className="px-4 py-3 text-stone-400">{t("tDmgType", locale)}</td><td className="px-4 py-3 text-stone-300">{t("tDmgHong", locale)}</td><td className="px-4 py-3 text-stone-300">{t("tDmgYing", locale)}</td></tr>
              <tr><td className="px-4 py-3 text-stone-400">{t("tDifficulty", locale)}</td><td className="px-4 py-3 text-emerald-400">{t("tDiffHong", locale)}</td><td className="px-4 py-3 text-red-400">{t("tDiffYing", locale)}</td></tr>
              <tr><td className="px-4 py-3 text-stone-400">{t("tCoreInner", locale)}</td><td className="px-4 py-3 text-stone-300">{t("tCoreHong", locale)}</td><td className="px-4 py-3 text-stone-300">{t("tCoreYing", locale)}</td></tr>
              <tr><td className="px-4 py-3 text-stone-400">{t("tTeamRole", locale)}</td><td className="px-4 py-3 text-stone-300">{t("tRoleHong", locale)}</td><td className="px-4 py-3 text-stone-300">{t("tRoleYing", locale)}</td></tr>
              <tr><td className="px-4 py-3 text-stone-400">{t("tScenario", locale)}</td><td className="px-4 py-3 text-stone-300">{t("tScenHong", locale)}</td><td className="px-4 py-3 text-stone-300">{t("tScenYing", locale)}</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="mb-3 text-lg font-semibold text-stone-200">{isZh ? "1.2 优势与劣势" : "1.2 Strengths & Weaknesses"}</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-emerald-900/30 bg-emerald-900/5 p-4">
            <h4 className="mb-2 text-sm font-bold text-emerald-400 uppercase tracking-wider">{t("s1ProsTitle", locale)}</h4>
            <ul className="space-y-1.5 text-sm text-stone-300">
              {isZh ? [
                "• 无名剑法Q技能提供护盾，生存能力强",
                "• 蓄力剑气是远程安全输出手段，容错率高",
                "• 积矩九剑爆发极高，T0级DPS",
                "• 枪系副武器补充控制和突进能力",
                "• 大世界探索体验优秀，轻功配合流畅",
              ] : [
                "• Q skill grants a shield — strong survivability",
                "• Charged Sword Qi is a safe ranged damage tool with high margin for error",
                "• Jiju Nine Swords has extreme burst — T0 DPS potential",
                "• Spear off-hand adds crowd control and gap closing",
                "• Excellent open-world exploration with smooth Qinggong integration",
              ].map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
          <div className="rounded-lg border border-red-900/30 bg-red-900/5 p-4">
            <h4 className="mb-2 text-sm font-bold text-red-400 uppercase tracking-wider">{t("s1ConsTitle", locale)}</h4>
            <ul className="space-y-1.5 text-sm text-stone-300">
              {isZh ? [
                "• 积矩九剑极度依赖「剑气纵横」心法，没有前不建议用",
                "• 近战身板较脆，需要依赖走位和卸式",
                "• 无名剑法单刷时可换成剑扇组合，需两套配装",
                "• 技能CD期间输出空窗，需要奇术填充",
              ] : [
                "• Jiju Nine Swords is completely dependent on Sword Qi Unleashed inner art",
                "• Squishy in melee range — relies on positioning and Parry",
                "• Solo Nameless Sword may benefit from swapping to sword+fan, needing two gear sets",
                "• Long damage windows during skill cooldowns — must fill with Secret Arts",
              ].map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        </div>

        <figure className="my-8 flex flex-col items-center">
          <div className="w-full max-w-2xl overflow-hidden rounded-xl border border-amber-900/20">
            <iframe src="https://player.bilibili.com/player.html?bvid=BV1eKnoeZE7k&page=1&high_quality=1&autoplay=0" title="Nameless Sword Art showcase" className="aspect-video w-full" allowFullScreen sandbox="allow-scripts allow-same-origin allow-popups" loading="lazy" />
          </div>
          <figcaption className="mt-2 text-xs text-stone-500">{t("videoSkill", locale)}</figcaption>
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
                  <td className={`px-4 py-3 font-bold ${i === 0 ? "text-red-400" : i < 4 ? "text-amber-400" : "text-stone-400"}`}>{s.prio}</td>
                  <td className="px-4 py-3 text-stone-300">{s.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="mb-3 text-lg font-semibold text-stone-200">{t("s2Attr", locale)}</h3>
        <div className="rounded-lg border border-stone-800 bg-stone-900/50 p-5">
          <ol className="space-y-2 text-sm text-stone-300">
            <li><span className="font-bold text-amber-400">{t("attr1", locale)}</span></li>
            <li><span className="font-bold text-amber-400">{t("attr2", locale)}</span></li>
            <li><span className="font-bold text-amber-400">{t("attr3", locale)}</span></li>
            <li><span className="font-bold text-amber-400">{t("attr4", locale)}</span></li>
          </ol>
          <p className="mt-3 text-xs text-stone-500">{t("attrTip", locale)}</p>
        </div>
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

        <h3 className="mb-3 text-lg font-semibold text-stone-200">{t("s5Pve", locale)}</h3>
        <div className="mb-4 rounded-lg border border-stone-800 bg-stone-950 p-4 font-mono text-sm">
          {isZh ? (
            <>
              <p className="text-amber-400">起手阶段：</p>
              <p className="text-stone-300 ml-4">Q突进 → 释放蓄力剑气（核心伤害）→ 枪法特殊技控制</p>
              <p className="text-amber-400 mt-2">输出循环：</p>
              <p className="text-stone-300 ml-4">轻击×3 → 重击蓄力 → 特殊技 → 处决（敌人气竭时）</p>
              <p className="text-amber-400 mt-2">CD填充：</p>
              <p className="text-stone-300 ml-4">神龙吐火 → 太白醉月 → 骑龙回马 → 蓄力 → 易武切换接枪法</p>
            </>
          ) : (
            <>
              <p className="text-amber-400">Opener:</p>
              <p className="text-stone-300 ml-4">Q Dash → Charged Sword Qi (core damage) → Spear Special for CC</p>
              <p className="text-amber-400 mt-2">Damage Loop:</p>
              <p className="text-stone-300 ml-4">Light×3 → Charged Heavy → Special → Execute (when Qi Exhaustion triggers)</p>
              <p className="text-amber-400 mt-2">Cooldown Filler:</p>
              <p className="text-stone-300 ml-4">Shenlong Fire Breath → Taibai Drunk Moon → Dragon Rider's Strike → Charge → Weapon Swap to Spear</p>
            </>
          )}
        </div>

        <h3 className="mb-3 text-lg font-semibold text-stone-200">{t("s5Burst", locale)}</h3>
        <div className="mb-4 rounded-lg border border-stone-800 bg-stone-950 p-4 font-mono text-sm">
          {isZh ? (
            <>
              <p className="text-amber-400">极限爆发：</p>
              <p className="text-stone-300 ml-4">喷火（奇术起手）→ 卸势打断 → 武学连击 → 骑龙回马 → 蓄力 → 易武切换 → 剑法技能循环</p>
            </>
          ) : (
            <>
              <p className="text-amber-400">Max Burst:</p>
              <p className="text-stone-300 ml-4">Fire Breath (opener) → Parry interrupt → Martial combo → Dragon Rider's Strike → Charge → Weapon Swap → Sword loop</p>
            </>
          )}
        </div>

        <figure className="my-8 flex flex-col items-center">
          <div className="w-full max-w-2xl overflow-hidden rounded-xl border border-amber-900/20">
            <iframe src="https://player.bilibili.com/player.html?bvid=BV1EGo5YnETV&page=1&high_quality=1&autoplay=0" title="Combo loop demo" className="aspect-video w-full" allowFullScreen sandbox="allow-scripts allow-same-origin allow-popups" loading="lazy" />
          </div>
          <figcaption className="mt-2 text-xs text-stone-500">{t("videoCombo", locale)}</figcaption>
        </figure>

        <div className="my-6 grid gap-4 sm:grid-cols-2">
          <figure className="flex flex-col items-center">
            <img src="https://pic2.zhimg.com/v2-0c9d7e83ac5e8f834e1b80a5f98b768b_1440w.jpg" alt="Basic combo diagram" className="w-full rounded-lg border border-stone-800" loading="lazy" />
            <figcaption className="mt-1 text-xs text-stone-500">{t("comboBasic", locale)}</figcaption>
          </figure>
          <figure className="flex flex-col items-center">
            <img src="https://pic1.zhimg.com/v2-5aa121dcc5b70abf523a30b962bd76e8_1440w.jpg" alt="Advanced combo diagram" className="w-full rounded-lg border border-stone-800" loading="lazy" />
            <figcaption className="mt-1 text-xs text-stone-500">{t("comboAdvanced", locale)}</figcaption>
          </figure>
        </div>
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
