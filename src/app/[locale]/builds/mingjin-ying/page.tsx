"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

const ARTICLE_ID = "mingjin-ying-nine-swords";

type L = "zh" | "en";
const i18n = {
  home: { zh: "首页", en: "Home" },
  builds: { zh: "流派攻略", en: "Build Guides" },
  guideTitle: { zh: "鸣金影（进阶剑客/九剑）完全攻略", en: "Mingjin Ying — Advanced Swordsman / Nine Swords Complete Guide" },
  tierBadge: { zh: "T0 流派", en: "T0 Build" },
  meleeDps: { zh: "近战爆发", en: "Melee Burst" },
  mingjinAttr: { zh: "鸣金属性", en: "Mingjin Element" },
  subtitle: { zh: "积矩九剑 + 九曲惊神枪 — 当前版本最强输出流派，高爆发竞速核心", en: "Jiju Nine Swords + Jiuqu Startling Spear — The strongest DPS build in the current patch, speedrun king" },
  version: { zh: "游戏版本 v2.1.0", en: "Game Version v2.1.0" },
  lastUpdate: { zh: "最后更新：2026-05-12", en: "Last Updated: 2026-05-12" },
  author: { zh: "作者：攻略组", en: "By: Guide Team" },
  bookmark: { zh: "收藏", en: "Bookmark" },
  logout: { zh: "退出", en: "Logout" },
  loginRegister: { zh: "登录 / 注册", en: "Login / Register" },
  // Section 1
  s1Title: { zh: "一、流派定位与核心机制", en: "1. Playstyle Overview & Core Mechanics" },
  s1Compare: { zh: "1.1 鸣金影 vs 鸣金虹 定位对比", en: "1.1 Mingjin Ying vs Mingjin Hong Comparison" },
  s1Intro: {
    zh: '鸣金影由积矩九剑 + 九曲惊神枪组成，是当前版本的T0级流派。与鸣金虹（无名剑法）的持续输出不同，鸣金影主打瞬间爆发和连招循环，对操作要求更高，但输出上限也更高。',
    en: 'Mingjin Ying combines Jiju Nine Swords + Jiuqu Startling Spear, currently the T0 build in the meta. Unlike Mingjin Hong\'s sustained DPS, Mingjin Ying focuses on burst damage and combo chains. It demands higher execution but rewards with a much higher damage ceiling.',
  },
  tCompare: { zh: "对比项目", en: "Category" },
  tYing: { zh: "鸣金影（积矩九剑）", en: "Mingjin Ying (Jiju Nine Swords)" },
  tHong: { zh: "鸣金虹（无名剑法）", en: "Mingjin Hong (Nameless Sword Art)" },
  tWeapons: { zh: "搭配武器", en: "Paired Weapon" },
  tJiuquSpear: { zh: "九曲惊神枪", en: "Jiuqu Startling Spear" },
  tNamelessSpear: { zh: "无名枪法", en: "Nameless Spear Art" },
  tTier: { zh: "流派评级", en: "Build Tier" },
  tDmgType: { zh: "输出类型", en: "Damage Type" },
  tDmgYing: { zh: "高爆发，连招循环流", en: "High burst, combo chain style" },
  tDmgHong: { zh: "持续输出，蓄力剑气为核心", en: "Sustained DPS, charged Sword Qi core" },
  tDifficulty: { zh: "上手难度", en: "Difficulty" },
  tDiffYing: { zh: "★★★★☆ 需要熟练度", en: "★★★★☆ Requires practice" },
  tDiffHong: { zh: "★★☆☆☆ 新手友好", en: "★★☆☆☆ Beginner-friendly" },
  tCoreInner: { zh: "核心心法", en: "Core Inner Art" },
  tCoreYing: { zh: "剑气纵横（必备）", en: "Sword Qi Unleashed (mandatory)" },
  tCoreHong: { zh: "无名心法、易水歌", en: "Nameless Inner Art, Yishui Song" },
  tTeamRole: { zh: "团队定位", en: "Team Role" },
  tRoleYing: { zh: "爆发DPS / 竞速核心", en: "Burst DPS / speedrun core" },
  tRoleHong: { zh: "稳定持续DPS", en: "Stable sustained DPS" },
  tScenario: { zh: "推荐场景", en: "Best For" },
  tScenYing: { zh: "高难副本、竞速、PVP", en: "Hard dungeons, speedruns, PvP" },
  tScenHong: { zh: "副本、大世界、新手开荒", en: "Dungeons, open world, beginner progression" },
  s1ProsTitle: { zh: "✅ 优势", en: "✅ STRENGTHS" },
  s1ConsTitle: { zh: "❌ 劣势", en: "❌ WEAKNESSES" },
  // Core mechanics
  s1CoreTitle: { zh: "1.2 核心机制：血爆触发", en: "1.2 Core Mechanic: Blood Explosion Trigger" },
  s1CoreText: {
    zh: '鸣金影的核心输出逻辑是利用积矩九剑的技能（Q、特殊技、蓄力技）为敌人叠加「流血」debuff，叠满5层后通过「纵横剑」触发血爆，清空流血层数并造成巨额伤害。全程不需要轻击平A，只使用技能。输出循环极度消耗耐力，需要搭配剑气纵横1重（回8点耐力）和凌云踏节省跑步耐力。',
    en: 'Mingjin Ying\'s core damage engine is stacking "Bleed" debuffs (up to 5 layers) on enemies using Jiju Nine Swords skills (Q, Special, Charged). At 5 stacks, use "Horizontal Sword" to trigger Blood Explosion — clearing all Bleed layers for massive burst. No light attacks needed — skills only. The rotation is extremely stamina-hungry, requiring Sword Qi Unleashed Rank 1 (restores 8 stamina) and Cloud Step to save running stamina.',
  },
  // Section 2
  s2Title: { zh: "二、技能加点推荐（1-30级）", en: "2. Skill Point Allocation (Lv 1-30)" },
  s2Sub: { zh: "2.1 积矩九剑（鸣金影）加点路线", en: "2.1 Jiju Nine Swords (Mingjin Ying) Skill Priority" },
  s2Intro: { zh: "鸣金影优先点满积矩九剑的连击技能和血爆相关技能，九曲惊神枪点出控制和易武衔接技即可。奇术选择以高频输出为主。", en: "Prioritize maxing Jiju Nine Swords chain skills and Blood Explosion-related abilities. For Jiuqu Spear, just unlock CC and weapon swap bridge skills. Choose Secret Arts focused on high-frequency damage." },
  thLevel: { zh: "等级阶段", en: "Level Range" },
  thSkill: { zh: "技能名称", en: "Skill Name" },
  thPriority: { zh: "优先级", en: "Priority" },
  thNote: { zh: "说明", en: "Notes" },
  // Attributes
  s2Attr: { zh: "2.2 属性加点建议", en: "2.2 Attribute Point Allocation" },
  attrTip: { zh: "与鸣金虹一致：体魄和眼力优先加至30级，后期补满协调和雅致。", en: "Same as Mingjin Hong: prioritize Physique and Perception to Lv 30, then max Coordination and Elegance late game." },
  // Section 3
  s3Title: { zh: "三、开局装备推荐", en: "3. Early Game Gear Recommendations" },
  s3Intro: {
    zh: '鸣金影的装备以飞隼套（飞燕套）为核心，主打攻击频率和会意率。前期过渡可用玉斗+易相套，拿到剑气纵横心法后逐步换装。',
    en: 'Mingjin Ying\'s gear centers on the Feisun (Falcon) Set, focusing on attack frequency and Insight rate. Use Yudou + Yixiang as a starter set, then transition after obtaining the Sword Qi Unleashed inner art.',
  },
  thHow: { zh: "获取方式：", en: "How to get: " },
  thStat: { zh: "核心属性：", en: "Key stats: " },
  s3GearTip: {
    zh: "装备进阶：前期用玉斗+易相套过渡，拿到剑气纵横后换飞隼套。调律词条优先选择最小/最大外功攻击和会意率。定音石珍贵，非完美词条不要轻易定音！",
    en: "Gear Progression: Start with Yudou + Yixiang, then swap to Feisun Set after obtaining Sword Qi Unleashed. Attunement priority: Min/Max Physical ATK and Insight Rate. Attunement Stones are rare — don\'t lock in imperfect stats!",
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
  s5Standard: { zh: "5.1 标准PVE输出循环", en: "5.1 Standard PvE Rotation" },
  s5Burst: { zh: "5.2 极限爆发循环（竞速用）", en: "5.2 Max Burst Rotation (Speedrun)" },
  s5Secret: { zh: "5.3 奇术填充循环", en: "5.3 Secret Art Filler Rotation" },
  videoCombo: { zh: "视频：九剑九枪连招循环教学（B站）", en: "Video: Nine Swords + Spear combo loop tutorial (Bilibili)" },
  // Section 6
  s6Title: { zh: "六、副本攻略：鸣金影职责", en: "6. Dungeon Guide — Mingjin Ying Role" },
  s6Intro: {
    zh: '鸣金影在副本中担任爆发DPS，核心职责是在BOSS气竭窗口打出极限爆发。与鸣金虹不同，你需要精确把握输出时机，在正确的窗口倾泻全部伤害。',
    en: 'Mingjin Ying serves as burst DPS in dungeons. Your core duty is dumping maximum damage during boss Qi Exhaustion windows. Unlike Mingjin Hong, you must time your burst precisely — every window counts.',
  },
  s6Sleeping: { zh: "金明池·睡道人 — 鸣金影要点", en: "Jinming Pool — Sleeping Daoist: Key Points" },
  s6Rong: { zh: "金明池·容鸢 — 鸣金影要点", en: "Jinming Pool — Rong Yuan: Key Points" },
  // Section 7
  s7Title: { zh: "七、进阶技巧与常见误区", en: "7. Advanced Tips & Common Mistakes" },
  // Comments
  comments: { zh: "评论区", en: "Comments" },
  writeComment: { zh: "写下你的评论...", en: "Write a comment..." },
  collapseComment: { zh: "收起评论框", en: "Collapse" },
  submitComment: { zh: "发表评论", en: "Post Comment" },
  commentPlaceholder: { zh: "分享你的鸣金影心得...", en: "Share your Mingjin Ying tips..." },
};

function t(key: keyof typeof i18n, locale: L): string {
  return i18n[key]?.[locale] ?? i18n[key]?.zh ?? key;
}

export default function MingjinYingGuide() {
  const params = useParams();
  const locale = (params?.locale as L) || "zh";
  const isZh = locale === "zh";

  // ── Locale-aware data ──

  const skillTable = isZh ? [
    { level: "1-5级", skill: "积矩九剑·幻影剑舞", prio: "★★★★★", note: "核心多段伤害技能，快速叠血爆标记，必满" },
    { level: "1-5级", skill: "积矩九剑·剑影步", prio: "★★★★★", note: "瞬移近身技，衔接连招核心" },
    { level: "5-10级", skill: "积矩九剑·连击精通", prio: "★★★★☆", note: "提升连击伤害和攻速，强化输出循环" },
    { level: "10-15级", skill: "九曲惊神枪·突进", prio: "★★★★☆", note: "位移+控制，易武切换衔接" },
    { level: "15-20级", skill: "积矩九剑·血爆", prio: "★★★★★", note: "核心爆发技能，叠满标记触发巨额伤害" },
    { level: "20-25级", skill: "奇术·神龙吐火", prio: "★★★★☆", note: "高频奇术，CD期间核心填充" },
    { level: "25-30级", skill: "奇术·箫吟千浪", prio: "★★★★☆", note: "AOE补充伤害，配合血爆打出群体爆发" },
  ] : [
    { level: "Lv 1-5", skill: "Jiju Nine Swords · Phantom Dance", prio: "★★★★★", note: "Core multi-hit skill, fast Blood Explosion stacking — max first" },
    { level: "Lv 1-5", skill: "Jiju Nine Swords · Shadow Step", prio: "★★★★★", note: "Gap closer, essential for combo chains" },
    { level: "Lv 5-10", skill: "Jiju Nine Swords · Combo Mastery", prio: "★★★★☆", note: "Boosts combo damage and attack speed" },
    { level: "Lv 10-15", skill: "Jiuqu Spear · Dash Strike", prio: "★★★★☆", note: "Gap closer + CC, weapon swap bridge" },
    { level: "Lv 15-20", skill: "Jiju Nine Swords · Blood Explosion", prio: "★★★★★", note: "Core burst skill — triggers massive damage at full marks" },
    { level: "Lv 20-25", skill: "Secret Art · Shenlong Fire Breath", prio: "★★★★☆", note: "High-frequency Secret Art, key cooldown filler" },
    { level: "Lv 25-30", skill: "Secret Art · Flute of a Thousand Waves", prio: "★★★★☆", note: "AoE damage, chains with Blood Explosion for group burst" },
  ];

  const equipItems = isZh ? [
    { name: "飞隼·剑（武器）", slot: "主武器", how: "积矩九剑解锁后，百业商店兑换或高级副本掉落", stat: "外功攻击、会意率" },
    { name: "飞隼·护腕", slot: "防具·手部", how: "清河高级副本或百业商店兑换", stat: "攻速、会意率" },
    { name: "飞隼·战靴", slot: "防具·足部", how: "河西区域世界BOSS掉落", stat: "移速、外功攻击" },
    { name: "玉斗·头冠", slot: "防具·头部", how: "新手村「无相皇」首次通关奖励（过渡用）", stat: "气血、会心率" },
    { name: "飞隼·腰佩", slot: "饰品", how: "高级探索宝箱或百业商店兑换", stat: "最小/最大外功攻击" },
  ] : [
    { name: "Feisun Sword (Weapon)", slot: "Main Weapon", how: "Unlocked with Jiju Nine Swords, from Hundred Trades shop or high-level dungeon drops", stat: "Physical ATK, Insight Rate" },
    { name: "Feisun Bracers", slot: "Armor — Hands", how: "Advanced Qinghe dungeons or Hundred Trades shop", stat: "Attack Speed, Insight Rate" },
    { name: "Feisun Boots", slot: "Armor — Feet", how: "Hexi region world boss drops", stat: "Move Speed, Physical ATK" },
    { name: "Yudou Crown", slot: "Armor — Head", how: 'First clear reward from "Wuxiang Huang" (starter)', stat: "HP, Crit Rate" },
    { name: "Feisun Belt", slot: "Accessory", how: "Advanced exploration chests or Hundred Trades shop", stat: "Min/Max Physical ATK" },
  ];

  const innerArts = isZh ? [
    { name: "剑气纵横", style: "鸣金影", effect: "积矩九剑核心心法，没有它不要玩鸣金影。大幅提升剑气伤害和血爆触发率", prio: "必带" },
    { name: "逐狼心经", style: "鸣金影", effect: "提升连击伤害和攻击频率，配合血爆打出更高爆发", prio: "必带" },
    { name: "易水歌", style: "通用", effect: "通用增伤心法，前期核心", prio: "推荐" },
    { name: "凝神章", style: "通用", effect: "辅助增伤，提升整体输出", prio: "推荐" },
    { name: "威猛歌", style: "通用", effect: "通用增伤，可与易水歌/千山诀轮换", prio: "推荐" },
    { name: "千山诀", style: "通用", effect: "大后期替换易水歌，以耐力为主", prio: "大后期" },
  ] : [
    { name: "Sword Qi Unleashed", style: "Mingjin Ying", effect: "Core inner art — don't play Mingjin Ying without it. Massively boosts Sword Qi damage and Blood Explosion trigger rate", prio: "Must-have" },
    { name: "Wolf Chaser Sutra", style: "Mingjin Ying", effect: "Boosts combo damage and attack frequency, amplifies burst during Blood Explosion", prio: "Must-have" },
    { name: "Yishui Song", style: "Universal", effect: "Universal damage boost, core for early game", prio: "Recommended" },
    { name: "Spirit Focus Chapter", style: "Universal", effect: "Supportive damage boost, raises overall output", prio: "Recommended" },
    { name: "Weimeng Song (Fierce Ode)", style: "Universal", effect: "Universal damage boost, can rotate with Yishui/Qianshan", prio: "Recommended" },
    { name: "Qianshan Art", style: "Universal", effect: "Replaces Yishui Song in late game, stamina-focused", prio: "Late game" },
  ];

  const tips = isZh ? [
    { title: "剑气纵横是门槛", text: "没有「剑气纵横」心法的鸣金影伤害远不如鸣金虹。请先拿到这个心法再转职。可以在百业商店、高级副本或世界BOSS掉落中获取。" },
    { title: "血爆窗口是核心", text: "所有输出循环围绕血爆标记展开。学会在标记即将叠满时预输入下一个技能，确保爆发窗口不浪费。" },
    { title: "奇术不是填充，是核心", text: "神龙吐火上限倍率高达1327.2%，算上dot和触发特效，奇术伤害已超越技能循环。必须把奇术纳入主循环，而不是当CD填充用。" },
    { title: "箫吟千浪别忘了带", text: "箫吟千浪是AOE神器，副本清小怪效率极高。额外槽位建议带凌云踏，提升实战机动性。" },
    { title: "三率配比很关键", text: "毕业面板参考：最大外功2200、精准率93、会心率35、会意率29。三率（精准率、会心率、会意率）需要合理分配，不要堆单一属性。" },
  ] : [
    { title: "Sword Qi Unleashed is the gatekeeper", text: "Without the Sword Qi Unleashed inner art, Mingjin Ying deals less damage than Mingjin Hong. Obtain this first before switching builds. Sources: Hundred Trades shop, high-level dungeons, world boss drops." },
    { title: "Blood Explosion windows are everything", text: "Your entire rotation revolves around Blood Explosion marks. Learn to pre-input your next skill as marks approach full — never waste the burst window." },
    { title: "Secret Arts are core, not filler", text: "Shenlong Fire Breath has a max multiplier of 1327.2%. With DoT and trigger effects, Secret Art damage exceeds your skill rotation. Integrate them into your main loop, not just as cooldown filler." },
    { title: "Don't forget Flute of a Thousand Waves", text: "Flute of a Thousand Waves is an AoE powerhouse — incredibly efficient for dungeon add clears. For extra slots, bring Cloud Step for mobility." },
    { title: "The three-rate balance is critical", text: "Target graduation stats: Max Physical ATK 2200, Precision 93, Crit Rate 35, Insight Rate 29. Balance all three rates — don't over-stack one." },
  ];

  const dungeonSleeping = isZh ? [
    { label: "血爆留怪阶段：", color: "text-amber-400", text: "睡道人召唤小怪时，不要急着清。先用幻影剑舞在小怪身上叠血爆标记，等血爆触发再转火BOSS，实现一波双收益。" },
    { label: "BOSS跳击应对：", color: "text-amber-400", text: "BOSS跳下来时用剑影步闪开，不要硬扛。鸣金影没有Q护盾，身板比鸣金虹脆，被打很疼。" },
    { label: "气竭窗口爆发：", color: "text-red-400", text: "BOSS进入气竭状态时倾泻全部技能：血爆 → 幻影剑舞 → 神龙吐火 → 骑龙回马。这是你的核心输出窗口，一定不要浪费。" },
  ] : [
    { label: "Save Blood Explosion for add phase: ", color: "text-amber-400", text: "When the Sleeping Daoist spawns adds, don't rush to clear them. Stack Blood Explosion marks on adds first, then redirect the explosion to the boss for double value." },
    { label: "Boss leap response: ", color: "text-amber-400", text: "When the boss leaps, use Shadow Step to dodge — don't tank it. Mingjin Ying has no Q shield and is squishier than Mingjin Hong." },
    { label: "Qi Exhaustion burst window: ", color: "text-red-400", text: "When the boss enters Qi Exhaustion, dump everything: Blood Explosion → Phantom Dance → Shenlong Fire Breath → Dragon Rider's Strike. This is your core damage window — don't waste it." },
  ];

  const dungeonRong = isZh ? [
    { label: "搬桶优先：", color: "text-amber-400", text: "和鸣金虹一样，炸药桶机制优先级最高。鸣金影机动性强（剑影步），非常适合抢远处的桶。" },
    { label: "护盾阶段集火：", color: "text-red-400", text: "护盾阶段全队集火。鸣金影应在护盾出现前预先叠好血爆标记，护盾出现瞬间触发血爆打出最高爆发。" },
    { label: "三黄线注意走位：", color: "text-amber-400", text: "三黄线引爆时注意走位，不要为了贪输出被桶炸到。先保命再输出。" },
  ] : [
    { label: "Barrel priority: ", color: "text-amber-400", text: "Same as Mingjin Hong — barrel mechanic is top priority. Mingjin Ying has high mobility (Shadow Step), making it great for grabbing distant barrels." },
    { label: "Shield phase burst: ", color: "text-red-400", text: "Focus fire during shield phase. Pre-stack Blood Explosion marks before the shield appears, then trigger it the instant the shield spawns for maximum burst." },
    { label: "Triple yellow line positioning: ", color: "text-amber-400", text: "Watch your positioning during triple line detonations. Don't get hit by barrel explosions while greedy for damage. Survival first, DPS second." },
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
                <th className="px-4 py-3 text-amber-400 font-semibold">{t("tYing", locale)}</th>
                <th className="px-4 py-3 text-amber-400 font-semibold">{t("tHong", locale)}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-800">
              <tr><td className="px-4 py-3 text-stone-400">{t("tWeapons", locale)}</td><td className="px-4 py-3 text-stone-300">{t("tJiuquSpear", locale)}</td><td className="px-4 py-3 text-stone-300">{t("tNamelessSpear", locale)}</td></tr>
              <tr><td className="px-4 py-3 text-stone-400">{t("tTier", locale)}</td><td className="px-4 py-3 text-amber-400 font-bold">T0</td><td className="px-4 py-3 text-emerald-400 font-semibold">T1</td></tr>
              <tr><td className="px-4 py-3 text-stone-400">{t("tDmgType", locale)}</td><td className="px-4 py-3 text-stone-300">{t("tDmgYing", locale)}</td><td className="px-4 py-3 text-stone-300">{t("tDmgHong", locale)}</td></tr>
              <tr><td className="px-4 py-3 text-stone-400">{t("tDifficulty", locale)}</td><td className="px-4 py-3 text-red-400">{t("tDiffYing", locale)}</td><td className="px-4 py-3 text-emerald-400">{t("tDiffHong", locale)}</td></tr>
              <tr><td className="px-4 py-3 text-stone-400">{t("tCoreInner", locale)}</td><td className="px-4 py-3 text-stone-300">{t("tCoreYing", locale)}</td><td className="px-4 py-3 text-stone-300">{t("tCoreHong", locale)}</td></tr>
              <tr><td className="px-4 py-3 text-stone-400">{t("tTeamRole", locale)}</td><td className="px-4 py-3 text-stone-300">{t("tRoleYing", locale)}</td><td className="px-4 py-3 text-stone-300">{t("tRoleHong", locale)}</td></tr>
              <tr><td className="px-4 py-3 text-stone-400">{t("tScenario", locale)}</td><td className="px-4 py-3 text-stone-300">{t("tScenYing", locale)}</td><td className="px-4 py-3 text-stone-300">{t("tScenHong", locale)}</td></tr>
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
                "• T0级输出，当前版本最强DPS流派",
                "• 血爆机制提供巨额瞬间爆发",
                "• 高机动性（剑影步），PVP和PVE两开花",
                "• 竞速首选，上限远高于鸣金虹",
                "• 奇术伤害已超越技能循环，上限极高",
              ] : [
                "• T0 DPS — the strongest damage build in the current patch",
                "• Blood Explosion mechanic delivers massive instant burst",
                "• High mobility (Shadow Step), strong in both PvP and PvE",
                "• Speedrun king — ceiling far above Mingjin Hong",
                "• Secret Art damage exceeds skill rotation — incredibly high ceiling",
              ].map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
          <div className="rounded-lg border border-red-900/30 bg-red-900/5 p-4">
            <h4 className="mb-2 text-sm font-bold text-red-400 uppercase tracking-wider">{t("s1ConsTitle", locale)}</h4>
            <ul className="space-y-1.5 text-sm text-stone-300">
              {isZh ? [
                "• 必须有「剑气纵横」心法，否则伤害不如鸣金虹",
                "• 操作要求高，连招失误输出断崖式下降",
                "• 身板脆，没有Q护盾，需要精准走位",
                "• 对装备和词条要求更高（飞隼套+三率配比）",
              ] : [
                "• Requires Sword Qi Unleashed inner art — without it, weaker than Mingjin Hong",
                "• High execution requirement — combo mistakes cause DPS cliff drops",
                "• Squishy with no Q shield — demands precise positioning",
                "• Higher gear ceiling (Feisun Set + three-rate balance required)",
              ].map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        </div>

        <figure className="my-8 flex flex-col items-center">
          <div className="w-full max-w-2xl overflow-hidden rounded-xl border border-amber-900/20">
            <iframe src="https://player.bilibili.com/player.html?bvid=BV1kTYkzWEzC&page=1&high_quality=1&autoplay=0" title="Jiju Nine Swords combo" className="aspect-video w-full" allowFullScreen sandbox="allow-scripts allow-same-origin allow-popups" loading="lazy" />
          </div>
          <figcaption className="mt-2 text-xs text-stone-500">{t("videoCombo", locale)}</figcaption>
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
                  <td className={`px-4 py-3 font-bold ${[0,1,4].includes(i) ? "text-red-400" : "text-amber-400"}`}>{s.prio}</td>
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
              <p className="text-amber-400">叠标记阶段：</p>
              <p className="text-stone-300 ml-4">幻影剑舞 → 剑影步近身 → 连击×N（快速叠满血爆标记）</p>
              <p className="text-amber-400 mt-2">爆发阶段：</p>
              <p className="text-stone-300 ml-4">血爆触发 → 枪法易武衔接 → 骑龙回马 → 继续叠标记</p>
              <p className="text-amber-400 mt-2">CD填充：</p>
              <p className="text-stone-300 ml-4">神龙吐火 → 箫吟千浪 → 太白醉月 → 蓄力 → 凌云踏调整位置</p>
            </>
          ) : (
            <>
              <p className="text-amber-400">Mark Stacking:</p>
              <p className="text-stone-300 ml-4">Phantom Dance → Shadow Step in → Chain×N (stack Blood Explosion marks fast)</p>
              <p className="text-amber-400 mt-2">Burst Phase:</p>
              <p className="text-stone-300 ml-4">Blood Explosion trigger → Spear weapon swap → Dragon Rider's Strike → Resume stacking</p>
              <p className="text-amber-400 mt-2">Cooldown Filler:</p>
              <p className="text-stone-300 ml-4">Shenlong Fire Breath → Flute of a Thousand Waves → Taibai Drunk Moon → Charge → Cloud Step reposition</p>
            </>
          )}
        </div>

        <h3 className="mb-3 text-lg font-semibold text-stone-200">{t("s5Burst", locale)}</h3>
        <div className="mb-4 rounded-lg border border-stone-800 bg-stone-950 p-4 font-mono text-sm">
          {isZh ? (
            <>
              <p className="text-amber-400">极限爆发（BOSS气竭窗口）：</p>
              <p className="text-stone-300 ml-4">预叠满标记 → 血爆 → 神龙吐火 → 幻影剑舞 → 骑龙回马 → 枪法特殊技 → 箫吟千浪 → 太白醉月</p>
              <p className="text-red-400 mt-2">关键：提前叠好标记，窗口打开瞬间全部倾泻</p>
            </>
          ) : (
            <>
              <p className="text-amber-400">Max Burst (Boss Qi Exhaustion Window):</p>
              <p className="text-stone-300 ml-4">Pre-stack marks → Blood Explosion → Shenlong Fire Breath → Phantom Dance → Dragon Rider's Strike → Spear Special → Flute → Taibai Drunk Moon</p>
              <p className="text-red-400 mt-2">Key: Pre-stack marks before the window, dump everything the instant it opens</p>
            </>
          )}
        </div>

        <h3 className="mb-3 text-lg font-semibold text-stone-200">{t("s5Secret", locale)}</h3>
        <div className="mb-4 rounded-lg border border-stone-800 bg-stone-950 p-4 font-mono text-sm">
          {isZh ? (
            <>
              <p className="text-amber-400">奇术主循环（精元＞50时）：</p>
              <p className="text-stone-300 ml-4">神龙吐火 → 箫吟千浪 → 太白醉月（火拳组合）</p>
              <p className="text-amber-400 mt-2">精元＜50时：</p>
              <p className="text-stone-300 ml-4">骑龙回马单发 → 蓄力 → 凌云踏位移 → 等CD</p>
            </>
          ) : (
            <>
              <p className="text-amber-400">Secret Art Main Loop (Focus &gt; 50):</p>
              <p className="text-stone-300 ml-4">Shenlong Fire Breath → Flute of a Thousand Waves → Taibai Drunk Moon (fire combo)</p>
              <p className="text-amber-400 mt-2">Focus &lt; 50:</p>
              <p className="text-stone-300 ml-4">Dragon Rider's Strike single → Charge → Cloud Step reposition → Wait for CD</p>
            </>
          )}
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
