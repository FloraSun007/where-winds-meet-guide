"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

const ARTICLE_ID = "qiansi-lin";

type L = "zh" | "en";
const i18n = {
  home: { zh: "首页", en: "Home" },
  builds: { zh: "流派攻略", en: "Build Guides" },
  guideTitle: { zh: "牵丝霖（伞扇治疗）完全攻略", en: "Qiansi Lin — Umbrella + Fan Healer Complete Guide" },
  tierBadge: { zh: "T1 流派", en: "T1 Build" },
  healerRole: { zh: "治疗辅助", en: "Healer Support" },
  qiansiAttr: { zh: "牵丝属性", en: "Qiansi Element" },
  subtitle: { zh: "千香引魂蛊（伞） + 明川药典（扇） — 全游戏唯一纯治疗流派，团队生命线", en: "Thousand Fragrance Soul Gu (Umbrella) + Mingchuan Pharmacopoeia (Fan) — The only pure healing build, your team's lifeline" },
  version: { zh: "游戏版本 v2.1.0", en: "Game Version v2.1.0" },
  lastUpdate: { zh: "最后更新：2026-05-12", en: "Last Updated: 2026-05-12" },
  author: { zh: "作者：攻略组", en: "By: Guide Team" },
  bookmark: { zh: "收藏", en: "Bookmark" },
  logout: { zh: "退出", en: "Logout" },
  loginRegister: { zh: "登录 / 注册", en: "Login / Register" },
  // Section 1
  s1Title: { zh: "一、流派定位与核心机制", en: "1. Playstyle Overview & Core Mechanics" },
  s1Playstyle: { zh: "1.1 纯奶流 vs 战斗流", en: "1.1 Pure Healer vs Combat Healer" },
  s1Intro: {
    zh: '牵丝霖由千香引魂蛊（伞）+ 明川药典（扇）组成，是燕云十六声中唯一的纯治疗流派。作为团队的"生命线"，你的职责不是打伤害，而是保证队友存活、处理关键机制。高难副本中治疗不可或缺，而牵丝霖的奶量也是全游戏最高的。',
    en: 'Qiansi Lin combines Thousand Fragrance Soul Gu (Umbrella) + Mingchuan Pharmacopoeia (Fan), the only pure healing build in Where Winds Meet. As the team\'s "lifeline," your job isn\'t dealing damage — it\'s keeping everyone alive through mechanics and burst. A healer is irreplaceable in hard content, and Qiansi Lin has the highest healing output in the game.',
  },
  // Comparison
  tCompare: { zh: "对比项目", en: "Category" },
  tPureHeal: { zh: "纯奶流（浣花套）", en: "Pure Healer (Huanhua Set)" },
  tCombat: { zh: "战斗流（输出扇+奶扇）", en: "Combat (DPS Fan + Heal Fan)" },
  tCoreInner: { zh: "核心心法", en: "Core Inner Art" },
  tPureInner: { zh: "君臣药 + 千丝蛊", en: "Junchen Medicine + Qiansi Gu" },
  tCombatInner: { zh: "君臣药 + 易水歌", en: "Junchen Medicine + Yishui Song" },
  tHealOutput: { zh: "治疗量", en: "Healing Output" },
  tPureHealOut: { zh: "极高，全游戏最强治疗", en: "Extreme, best healer in the game" },
  tCombatHealOut: { zh: "中等，兼顾输出和治疗", en: "Moderate, balanced DPS and healing" },
  tDmgOutput: { zh: "输出能力", en: "Damage Output" },
  tPureDmgOut: { zh: "极低，几乎无输出", en: "Negligible, near-zero DPS" },
  tCombatDmgOut: { zh: "中等，飞天玉循环输出", en: "Moderate, Flying Jade rotation" },
  tTeamRole: { zh: "团队定位", en: "Team Role" },
  tPureRole: { zh: "纯治疗，专注保人", en: "Pure healer, focus on keeping team alive" },
  tCombatRole: { zh: "半奶半输出", en: "Hybrid healer/DPS" },
  tScenario: { zh: "推荐场景", en: "Best For" },
  tPureScen: { zh: "高难副本、团队副本", en: "Hard dungeons, group raids" },
  tCombatScen: { zh: "普通副本、大世界", en: "Normal dungeons, open world" },
  // Core mechanic
  s1CoreTitle: { zh: "1.2 核心机制：露水叠加与感知技", en: "1.2 Core Mechanic: Dew Stacking & Perception Skill" },
  s1CoreText: {
    zh: '牵丝霖的治疗核心是「露水」系统。通过扇子的普攻和技能为队友叠加露水标记，叠满后使用扇Q触发「感知技」，召唤水人（治疗之灵）持续为周围队友回血。伞的技能（千香引魂蛊）则提供大范围瞬间抬血和群体护盾。两个武器交替使用形成完整的治疗循环：扇叠露水 → 扇Q触发感知 → 切伞大抬 → 切扇继续叠。核心心法「君臣药」6重后可复活自己，大幅提升团队容错。',
    en: 'Qiansi Lin\'s healing core is the "Dew" system. Use Fan auto-attacks and skills to stack Dew marks on teammates. At full stacks, use Fan Q to trigger the "Perception Skill," summoning a Water Spirit that continuously heals nearby allies. The Umbrella skills (Thousand Fragrance Soul Gu) provide large instant burst heals and group shields. Alternate weapons for a complete heal cycle: Fan stacks Dew → Fan Q triggers Perception → Swap to Umbrella for big heal → Swap back to Fan. The core inner art "Junchen Medicine" at Rank 6 can self-revive, massively boosting team safety.',
  },
  s1ProsTitle: { zh: "✅ 优势", en: "✅ STRENGTHS" },
  s1ConsTitle: { zh: "❌ 劣势", en: "❌ WEAKNESSES" },
  videoHealer: { zh: "视频：牵丝霖纯奶治疗教学（B站）", en: "Video: Qiansi Lin Pure Healer Tutorial (Bilibili)" },
  // Section 2
  s2Title: { zh: "二、技能加点推荐（1-30级）", en: "2. Skill Point Allocation (Lv 1-30)" },
  s2Sub: { zh: "2.1 明川药典（扇）+ 千香引魂蛊（伞）加点路线", en: "2.1 Mingchuan Pharmacopoeia (Fan) + Soul Gu (Umbrella) Skill Priority" },
  s2Intro: { zh: "治疗流优先点满扇的治疗技能和感知技，伞点出群体抬血和护盾技能即可。奇术以辅助和治疗增强为主。", en: "Prioritize maxing Fan healing skills and Perception trigger. For Umbrella, unlock group burst heal and shield skills. Choose Secret Arts that enhance healing and support." },
  thLevel: { zh: "等级阶段", en: "Level Range" },
  thSkill: { zh: "技能名称", en: "Skill Name" },
  thPriority: { zh: "优先级", en: "Priority" },
  thNote: { zh: "说明", en: "Notes" },
  s2Attr: { zh: "2.2 属性加点建议", en: "2.2 Attribute Point Allocation" },
  attrTip: { zh: "纯奶流：体魄优先加至30级（气血上限保证自身存活），然后点满雅致（提升治疗效果）。战斗流与鸣金虹一致。", en: "Pure healer: Physique to Lv 30 first (max HP to stay alive), then max Elegance (boosts healing output). Combat build same as Mingjin Hong." },
  // Section 3
  s3Title: { zh: "三、开局装备推荐", en: "3. Early Game Gear Recommendations" },
  s3Intro: {
    zh: '牵丝霖的装备以浣花套（纯奶向）为核心，主打治疗效果和生存能力。前期过渡可用斗易套，后期换浣花+梨雪套。词条优先选择治疗效果和攻击力。',
    en: 'Qiansi Lin gear centers on the Huanhua Set (pure healer), focusing on healing effectiveness and survivability. Transition from Douyi Set early to Huanhua + Lixue Set late game. Prioritize healing effectiveness and ATK affixes.',
  },
  thHow: { zh: "获取方式：", en: "How to get: " },
  thStat: { zh: "核心属性：", en: "Key stats: " },
  s3GearTip: {
    zh: "装备进阶：纯奶流用浣花套+梨雪套，词条优先治疗效果>攻击力>气血。战斗流可混搭飞隼套追求输出。调律石珍贵，先保证主武器完美词条再定音。",
    en: "Gear Progression: Pure healer uses Huanhua + Lixue sets, affix priority: Healing Effect > ATK > HP. Combat build can mix Feisun Set for damage. Attunement Stones are rare — perfect your main weapon first.",
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
  s5Title: { zh: "五、核心治疗循环教学", en: "5. Core Healing Rotation Guide" },
  s5Standard: { zh: "5.1 标准PVE治疗循环", en: "5.1 Standard PvE Healing Rotation" },
  s5Burst: { zh: "5.2 紧急救场循环（团血崩盘时）", en: "5.2 Emergency Save Rotation (Team HP Crashing)" },
  s5Combat: { zh: "5.3 战斗流输出循环（飞天玉）", en: "5.3 Combat DPS Rotation (Flying Jade)" },
  videoCombo: { zh: "视频：伞扇连招循环与实战演示（B站）", en: "Video: Umbrella + Fan Rotation & Live Demo (Bilibili)" },
  // Section 6
  s6Title: { zh: "六、副本攻略：牵丝霖职责", en: "6. Dungeon Guide — Qiansi Lin Role" },
  s6Intro: {
    zh: '牵丝霖在副本中担任唯一治疗位，核心职责是保持全队血线、处理关键机制阶段的团灭点。你的走位和预判能力直接决定团队上限。治疗量高不一定是好事——可能是队友太菜导致你一直在救场。',
    en: 'Qiansi Lin serves as the sole healer in dungeons. Your core duty is maintaining team HP and handling wipe mechanics. Your positioning and prediction skills directly determine the team\'s ceiling. High healing numbers aren\'t always a badge of honor — it might just mean your team keeps taking unnecessary damage.',
  },
  s6Sleeping: { zh: "金明池·睡道人 — 牵丝霖要点", en: "Jinming Pool — Sleeping Daoist: Key Points" },
  s6Rong: { zh: "金明池·容鸢 — 牵丝霖要点", en: "Jinming Pool — Rong Yuan: Key Points" },
  // Section 7
  s7Title: { zh: "七、进阶技巧与常见误区", en: "7. Advanced Tips & Common Mistakes" },
  // Comments
  comments: { zh: "评论区", en: "Comments" },
  writeComment: { zh: "写下你的评论...", en: "Write a comment..." },
  collapseComment: { zh: "收起评论框", en: "Collapse" },
  submitComment: { zh: "发表评论", en: "Post Comment" },
  commentPlaceholder: { zh: "分享你的牵丝霖心得...", en: "Share your Qiansi Lin tips..." },
};

function t(key: keyof typeof i18n, locale: L): string {
  return i18n[key]?.[locale] ?? i18n[key]?.zh ?? key;
}

export default function QiansiLinGuide() {
  const params = useParams();
  const locale = (params?.locale as L) || "zh";
  const isZh = locale === "zh";

  const skillTable = isZh ? [
    { level: "1-5级", skill: "明川药典·扇Q（感知触发）", prio: "★★★★★", note: "核心治疗技能，叠满露水触发感知召唤水人，必满" },
    { level: "1-5级", skill: "明川药典·普通攻击", prio: "★★★★★", note: "基础叠露水手段，普攻即可为队友叠治疗标记" },
    { level: "5-10级", skill: "千香引魂蛊·伞大抬", prio: "★★★★★", note: "伞的群体大加，范围大瞬间抬血，救场核心" },
    { level: "10-15级", skill: "千香引魂蛊·护盾", prio: "★★★★☆", note: "群体护盾，预判BOSS高伤阶段提前套盾" },
    { level: "15-20级", skill: "明川药典·滴瓶", prio: "★★★★☆", note: "单体持续回血，给血线危险的队友点滴瓶" },
    { level: "20-25级", skill: "奇术·太白醉月", prio: "★★★☆☆", note: "辅助奇术，CD期间填充" },
    { level: "25-30级", skill: "奇术·凌云踏", prio: "★★★★☆", note: "位移奇术，治疗走位非常重要，推荐常驻" },
  ] : [
    { level: "Lv 1-5", skill: "Mingchuan · Fan Q (Perception Trigger)", prio: "★★★★★", note: "Core heal skill — triggers Water Spirit at full Dew stacks, max first" },
    { level: "Lv 1-5", skill: "Mingchuan · Fan Auto Attack", prio: "★★★★★", note: "Basic Dew stacker — auto-attacks apply healing marks to allies" },
    { level: "Lv 5-10", skill: "Soul Gu · Umbrella Burst Heal", prio: "★★★★★", note: "Large AoE instant heal, massive range — core emergency save" },
    { level: "Lv 10-15", skill: "Soul Gu · Group Shield", prio: "★★★★☆", note: "AoE shield — pre-cast before boss burst phases" },
    { level: "Lv 15-20", skill: "Mingchuan · Drip Bottle", prio: "★★★★☆", note: "Single-target HoT, for allies in danger" },
    { level: "Lv 20-25", skill: "Secret Art · Taibai Drunk Moon", prio: "★★★☆☆", note: "Support Secret Art, cooldown filler" },
    { level: "Lv 25-30", skill: "Secret Art · Cloud Step", prio: "★★★★☆", note: "Gap closer — healer positioning is critical, recommended permanent slot" },
  ];

  const equipItems = isZh ? [
    { name: "浣花·伞（武器）", slot: "主武器", how: "千香引魂蛊偷师解锁后，百业商店兑换或高级副本掉落", stat: "治疗效果、攻击力" },
    { name: "浣花·扇（武器）", slot: "副武器", how: "明川药典解锁后，百业商店兑换或高级副本掉落", stat: "治疗效果、露水叠加" },
    { name: "浣花·护腕", slot: "防具·手部", how: "清河高级副本或百业商店兑换", stat: "治疗效果、气血" },
    { name: "梨雪·头冠", slot: "防具·头部", how: "高级团队副本掉落或百业商店兑换", stat: "气血、治疗效果" },
    { name: "浣花·腰佩", slot: "饰品", how: "高级探索宝箱或百业商店兑换", stat: "攻击力、治疗效果" },
  ] : [
    { name: "Huanhua Umbrella (Weapon)", slot: "Main Weapon", how: "Unlocked via Soul Gu steal-learning, Hundred Trades shop or high-level dungeon drops", stat: "Healing Effect, ATK" },
    { name: "Huanhua Fan (Weapon)", slot: "Off-hand Weapon", how: "Unlocked via Mingchuan Pharmacopoeia, Hundred Trades shop or dungeon drops", stat: "Healing Effect, Dew Stacking" },
    { name: "Huanhua Bracers", slot: "Armor — Hands", how: "Advanced Qinghe dungeons or Hundred Trades shop", stat: "Healing Effect, HP" },
    { name: "Lixue Crown", slot: "Armor — Head", how: "Advanced raid drops or Hundred Trades shop", stat: "HP, Healing Effect" },
    { name: "Huanhua Belt", slot: "Accessory", how: "Advanced exploration chests or Hundred Trades shop", stat: "ATK, Healing Effect" },
  ];

  const innerArts = isZh ? [
    { name: "君臣药", style: "牵丝霖", effect: "治疗核心心法，大幅提升感知技治疗量，6重可复活自己，没有它不要玩牵丝霖", prio: "必带" },
    { name: "千丝蛊", style: "牵丝霖", effect: "增强露水叠加效率和水人持续时间，纯奶流核心", prio: "必带" },
    { name: "易水歌", style: "通用", effect: "通用增伤心法，战斗流用提升输出", prio: "推荐" },
    { name: "杏花", style: "通用", effect: "辅助心法，提升治疗效果和自身生存", prio: "推荐" },
    { name: "指玄", style: "通用", effect: "备用心法，特定副本减伤场景替换", prio: "推荐" },
    { name: "怒斩马", style: "通用", effect: "大后期可选，战斗流提升输出能力", prio: "大后期" },
  ] : [
    { name: "Junchen Medicine (Monarch-Minister)", style: "Qiansi Lin", effect: "Core heal inner art — massively boosts Perception skill healing. Rank 6 enables self-revive. Don't play Qiansi Lin without it", prio: "Must-have" },
    { name: "Qiansi Gu (Thousand Silk Gu)", style: "Qiansi Lin", effect: "Enhances Dew stacking speed and Water Spirit duration, core for pure healer", prio: "Must-have" },
    { name: "Yishui Song", style: "Universal", effect: "Universal damage boost, used in combat build for DPS", prio: "Recommended" },
    { name: "Xinghua (Apricot Blossom)", style: "Universal", effect: "Support inner art, boosts healing and personal survivability", prio: "Recommended" },
    { name: "Zhixuan", style: "Universal", effect: "Backup inner art, swap in for specific damage reduction scenarios", prio: "Recommended" },
    { name: "Nuzhan Ma (Furious Slash)", style: "Universal", effect: "Late game option, boosts DPS for combat healer build", prio: "Late game" },
  ];

  const tips = isZh ? [
    { title: "预判比反应更重要", text: "好的治疗不是队友掉血了才加，而是预判BOSS技能提前铺好治疗。比如BOSS马上要放全团AOE，提前套好护盾+预读大抬，队友掉血瞬间治疗已经到位。" },
    { title: "感知技不要急着交", text: "君臣药的续行效果和感知技的持续时间相关。感知技可以适当晚交，让君臣药的续行效果叠加得更足，治疗总量更高。" },
    { title: "走位是治疗的生命线", text: "治疗必须站在能覆盖全队的位置，但又不能站得太靠前吃BOSS技能。善用凌云踏调整站位，始终保持最佳治疗覆盖范围。" },
    { title: "滴瓶注意队友走位", text: "单点滴瓶要适时给，但要注意队友可能跑出范围。如果队友乱跑不站奶阵，优先保站得住的人，不要追着跑的人浪费治疗量。" },
    { title: "纯奶和战斗流随时切换", text: "只需更换装备套装和心法配置即可在纯奶和战斗流之间切换。高难本用纯奶保人，日常本用战斗流提升效率。建议准备两套装备。" },
  ] : [
    { title: "Prediction beats reaction", text: "A great healer doesn't wait for damage — they pre-cast before boss abilities. For example, when an AoE is coming, pre-shield + pre-cast burst heal so the heal lands the instant damage hits." },
    { title: "Don't rush Perception triggers", text: "Junchen Medicine's sustain effect scales with Perception duration. Delaying Perception slightly lets Junchen stack more sustain, resulting in higher total healing." },
    { title: "Positioning is your lifeline", text: "You must stand where you can reach the entire team, but not so close that you eat boss mechanics. Use Cloud Step to reposition frequently — always maintain optimal healing coverage." },
    { title: "Mind your Drip Bottle targets", text: "Single-target HoT is great, but watch for teammates running out of range. If someone keeps running away from your heal zone, prioritize those who stay in position — don't chase and waste heals." },
    { title: "Swap between Pure Healer and Combat freely", text: "Just swap gear sets and inner arts to switch between pure healer and combat healer. Pure healer for hard content, combat for efficient daily clears. Consider maintaining two gear loadouts." },
  ];

  const dungeonSleeping = isZh ? [
    { label: "藤牢术快速破牢：", color: "text-amber-400", text: "队友被藤牢关住后优先过去破牢。治疗不能被关太久，否则全队失去治疗会连锁崩盘。被点名时提前远离队友。" },
    { label: "召唤小怪阶段群奶：", color: "text-amber-400", text: "小怪阶段全队分散清怪，是治疗压力最大的阶段。提前铺好扇子群抬+伞护盾，保证每个人都能吃到治疗。" },
    { label: "BOSS跳击预判加血：", color: "text-red-400", text: "BOSS跳击伤害很高，提前给可能被砸的人套盾+滴瓶。跳击后立刻伞大抬补全队血线。如果坦克是裂石威，优先保DPS。" },
  ] : [
    { label: "Quick Vine Prison break: ", color: "text-amber-400", text: "Prioritize breaking caged teammates. If the healer is caged too long, the team loses all healing and cascades into a wipe. When marked, distance yourself from teammates preemptively." },
    { label: "Add phase group healing: ", color: "text-amber-400", text: "The add phase is the highest healing pressure — the team scatters to clear mobs. Pre-cast Fan group heal + Umbrella shield so everyone gets coverage." },
    { label: "Pre-heal boss leap: ", color: "text-red-400", text: "Boss leap deals heavy damage. Pre-shield + Drip Bottle the likely target. Immediately follow up with Umbrella burst heal to restore the team. If your tank is Lieshi Wei, prioritize keeping DPS alive." },
  ];

  const dungeonRong = isZh ? [
    { label: "搬桶时保人：", color: "text-amber-400", text: "队友去搬桶时容易掉血，提前给搬桶的人套盾+滴瓶。搬桶的人注意力在桶上，不会主动躲技能，需要你多关注。" },
    { label: "三黄线引爆救场：", color: "text-red-400", text: "三黄线引爆是最大团灭点。提前铺好护盾+群抬，爆炸后立刻伞大抬救场。如果有1-2个桶爆炸，你的即时反应决定是否灭团。" },
    { label: "护盾阶段治疗节奏：", color: "text-amber-400", text: "护盾阶段全队集火，你也要打点伤害帮助破盾。但优先级是保持坦克血线，坦克倒了就全完了。" },
  ] : [
    { label: "Keep barrel carriers alive: ", color: "text-amber-400", text: "Barrel carriers take damage while focused on barrels. Pre-shield + Drip Bottle them — they won't dodge mechanics while carrying, so watch them closely." },
    { label: "Triple line detonation save: ", color: "text-red-400", text: "Triple yellow line is the biggest wipe threat. Pre-cast shield + group heal, then immediately Umbrella burst heal after detonation. If 1-2 barrels explode, your instant reaction determines wipe or clear." },
    { label: "Shield phase heal rhythm: ", color: "text-amber-400", text: "During shield phase, help with damage to break it faster — but prioritize keeping the tank alive. If the tank dies, it's over for everyone." },
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
          <span className="rounded-full bg-stone-800 px-3 py-1 text-xs font-semibold text-stone-300">{t("healerRole", locale)}</span>
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
                <th className="px-4 py-3 text-amber-400 font-semibold">{t("tPureHeal", locale)}</th>
                <th className="px-4 py-3 text-amber-400 font-semibold">{t("tCombat", locale)}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-800">
              <tr><td className="px-4 py-3 text-stone-400">{t("tCoreInner", locale)}</td><td className="px-4 py-3 text-stone-300">{t("tPureInner", locale)}</td><td className="px-4 py-3 text-stone-300">{t("tCombatInner", locale)}</td></tr>
              <tr><td className="px-4 py-3 text-stone-400">{t("tHealOutput", locale)}</td><td className="px-4 py-3 text-emerald-400 font-bold">{t("tPureHealOut", locale)}</td><td className="px-4 py-3 text-stone-300">{t("tCombatHealOut", locale)}</td></tr>
              <tr><td className="px-4 py-3 text-stone-400">{t("tDmgOutput", locale)}</td><td className="px-4 py-3 text-stone-500">{t("tPureDmgOut", locale)}</td><td className="px-4 py-3 text-amber-400">{t("tCombatDmgOut", locale)}</td></tr>
              <tr><td className="px-4 py-3 text-stone-400">{t("tTeamRole", locale)}</td><td className="px-4 py-3 text-stone-300">{t("tPureRole", locale)}</td><td className="px-4 py-3 text-stone-300">{t("tCombatRole", locale)}</td></tr>
              <tr><td className="px-4 py-3 text-stone-400">{t("tScenario", locale)}</td><td className="px-4 py-3 text-stone-300">{t("tPureScen", locale)}</td><td className="px-4 py-3 text-stone-300">{t("tCombatScen", locale)}</td></tr>
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
                "• 全游戏唯一纯治疗流派，副本刚需",
                "• 奶量全游戏最高，群抬+单奶+护盾三位一体",
                "• 君臣药6重可自复活，容错极高",
                "• 纯奶/战斗流随时切换，一套配装两种玩法",
                "• 高难副本中治疗是团队核心，永远不缺组队",
              ] : [
                "• The only pure healing build — always in demand",
                "• Highest healing output, with AoE heal + single-target + shield",
                "• Junchen Medicine Rank 6 enables self-revive — huge safety net",
                "• Swap freely between pure healer and combat — one build, two playstyles",
                "• Healers are the team core in hard content — never shortage of groups",
              ].map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
          <div className="rounded-lg border border-red-900/30 bg-red-900/5 p-4">
            <h4 className="mb-2 text-sm font-bold text-red-400 uppercase tracking-wider">{t("s1ConsTitle", locale)}</h4>
            <ul className="space-y-1.5 text-sm text-stone-300">
              {isZh ? [
                "• 纯奶流几乎无输出能力，单刷极慢",
                "• 需要学习千香引魂蛊偷师，前期门槛略高",
                "• 极度依赖走位和预判，操作意识要求高",
                "• 队友乱跑会极大增加治疗压力",
              ] : [
                "• Pure healer has near-zero DPS — very slow soloing",
                "• Requires Soul Gu steal-learning — slightly higher early barrier",
                "• Heavily dependent on positioning and prediction — high game sense required",
                "• Teammates running wildly can dramatically increase healing pressure",
              ].map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        </div>

        <figure className="my-8 flex flex-col items-center">
          <div className="w-full max-w-2xl overflow-hidden rounded-xl border border-amber-900/20">
            <iframe src="https://player.bilibili.com/player.html?bvid=BV1LorDBrEv6&page=1&high_quality=1&autoplay=0" title="Qiansi Lin Healer Guide" className="aspect-video w-full" allowFullScreen sandbox="allow-scripts allow-same-origin allow-popups" loading="lazy" />
          </div>
          <figcaption className="mt-2 text-xs text-stone-500">{t("videoHealer", locale)}</figcaption>
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
                  <td className={`px-4 py-3 font-bold ${[0, 1, 2].includes(i) ? "text-red-400" : i < 6 ? "text-amber-400" : "text-stone-400"}`}>{s.prio}</td>
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

      {/* ── 5. Healing Rotation ── */}
      <section className="mb-10">
        <h2 className="mb-4 border-b border-stone-800 pb-2 text-xl font-bold text-amber-400">{t("s5Title", locale)}</h2>

        <h3 className="mb-3 text-lg font-semibold text-stone-200">{t("s5Standard", locale)}</h3>
        <div className="mb-4 rounded-lg border border-stone-800 bg-stone-950 p-4 font-mono text-sm">
          {isZh ? (
            <>
              <p className="text-amber-400">起手铺奶：</p>
              <p className="text-stone-300 ml-4">扇普攻×N（为队友叠露水）→ 扇Q触发感知召唤水人 → 切伞</p>
              <p className="text-amber-400 mt-2">循环治疗：</p>
              <p className="text-stone-300 ml-4">伞大抬（群血低时）→ 伞护盾（预判高伤）→ 切扇叠露水 → 扇Q触发 → 循环</p>
              <p className="text-amber-400 mt-2">单点补充：</p>
              <p className="text-stone-300 ml-4">滴瓶（单体危险时）→ 水人持续群疗 → 凌云踏调整站位</p>
            </>
          ) : (
            <>
              <p className="text-amber-400">Opener:</p>
              <p className="text-stone-300 ml-4">Fan Auto×N (stack Dew on allies) → Fan Q triggers Perception, summons Water Spirit → Swap to Umbrella</p>
              <p className="text-amber-400 mt-2">Heal Loop:</p>
              <p className="text-stone-300 ml-4">Umbrella Burst Heal (when group HP drops) → Umbrella Shield (predict burst) → Swap Fan, stack Dew → Fan Q trigger → Loop</p>
              <p className="text-amber-400 mt-2">Spot Healing:</p>
              <p className="text-stone-300 ml-4">Drip Bottle (single target danger) → Water Spirit continuous AoE → Cloud Step reposition</p>
            </>
          )}
        </div>

        <h3 className="mb-3 text-lg font-semibold text-stone-200">{t("s5Burst", locale)}</h3>
        <div className="mb-4 rounded-lg border border-stone-800 bg-stone-950 p-4 font-mono text-sm">
          {isZh ? (
            <>
              <p className="text-red-400">团血崩盘紧急处理：</p>
              <p className="text-stone-300 ml-4">伞大抬（瞬间抬血）→ 伞护盾（防二次崩盘）→ 切扇扇Q（触发感知续奶）→ 滴瓶救最低血量队友</p>
              <p className="text-red-400 mt-2">关键：优先保坦克和另一个治疗（如果有），DPS可以倒但坦克不能倒</p>
            </>
          ) : (
            <>
              <p className="text-red-400">Emergency team HP crash:</p>
              <p className="text-stone-300 ml-4">Umbrella Burst Heal (instant recovery) → Umbrella Shield (prevent secondary crash) → Swap Fan → Fan Q (trigger Perception sustain) → Drip Bottle lowest HP ally</p>
              <p className="text-red-400 mt-2">Key: Prioritize tank and other healer (if any). DPS can die but tank cannot.</p>
            </>
          )}
        </div>

        <h3 className="mb-3 text-lg font-semibold text-stone-200">{t("s5Combat", locale)}</h3>
        <div className="mb-4 rounded-lg border border-stone-800 bg-stone-950 p-4 font-mono text-sm">
          {isZh ? (
            <>
              <p className="text-amber-400">飞天玉输出循环（战斗流）：</p>
              <p className="text-stone-300 ml-4">扇叠露水 → 扇Q触发感知 → 输出扇飞天玉连击 → 伞技能穿插 → 切扇继续叠</p>
              <p className="text-amber-400 mt-2">注意：战斗流治疗量下降，需要更精准的预判和操作</p>
            </>
          ) : (
            <>
              <p className="text-amber-400">Flying Jade DPS Loop (Combat Build):</p>
              <p className="text-stone-300 ml-4">Fan stacks Dew → Fan Q triggers Perception → DPS Fan Flying Jade combo → Umbrella skills weave → Swap Fan, resume stacking</p>
              <p className="text-amber-400 mt-2">Note: Combat build sacrifices healing — requires sharper prediction and execution</p>
            </>
          )}
        </div>

        <figure className="my-8 flex flex-col items-center">
          <div className="w-full max-w-2xl overflow-hidden rounded-xl border border-amber-900/20">
            <iframe src="https://player.bilibili.com/player.html?bvid=BV1FoNieuE3d&page=1&high_quality=1&autoplay=0" title="Umbrella Fan Combo Demo" className="aspect-video w-full" allowFullScreen sandbox="allow-scripts allow-same-origin allow-popups" loading="lazy" />
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
