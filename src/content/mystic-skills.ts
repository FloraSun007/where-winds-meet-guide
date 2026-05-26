export interface SkillStep {
  text: { en: string; zh: string };
  images?: string[];
}

export interface MysticSkill {
  id: string;
  name: { en: string; zh: string };
  type: "offensive" | "general" | "movement" | "entertainment";
  effect: { en: string; zh: string };
  steps: SkillStep[];
  source?: { en: string; zh: string };
  isDefault?: boolean;
}

const S = (path: string) => `https://img1.ali213.net/glpic/${path}`;

export const MYSTIC_SKILLS: MysticSkill[] = [
  // ===== Offensive (逐寇) =====
  {
    id: "tai-chi",
    name: { en: "Tai Chi", zh: "太极" },
    type: "offensive",
    effect: {
      en: "Gather fallen leaves to create ripples. In combat, pull and spin enemies. Effective against shielded enemies.",
      zh: "聚集落叶创造涟漪。战斗中拉扯并旋转敌人。对持盾敌人有效。",
    },
    steps: [
      { text: { en: "Complete the quest \"Qinghe Heroic Trail Vol.6 - Yin Yang Like Shadows\" (清河·侠迹卷六·阴阳如影).", zh: "完成任务「清河·侠迹卷六·阴阳如影」。" } },
      { text: { en: "The cry for help is NOT inside the tower — look for a cliffside cave below the tower.", zh: "求救声不在塔内，而是在塔下方的悬崖洞穴中，找到入口进入。" } },
      { text: { en: "Unlock the mechanism inside the cave to enter.", zh: "解开洞内机关。" } },
      { text: { en: "Use Tai Chi to throw the white bear toward the treasure chest locations on all four sides to smash the rocks and open the chests.", zh: "用太极将白熊扔向四个方向的宝箱位置，砸碎岩石开启宝箱。" } },
      { text: { en: "Complete the quest sequence to obtain the skill.", zh: "完成任务后获得奇术。" } },
    ],
    source: { en: "Qinghe - Scroll VI: Shadows of Yin and Yang", zh: "清河·侠迹卷六·阴阳如影" },
  },
  {
    id: "meridian-touch",
    name: { en: "Meridian Touch", zh: "金玉手" },
    type: "offensive",
    effect: {
      en: "Target acupoints to produce special effects. In combat, has a chance to paralyze enemies and break weak points.",
      zh: "选择穴位产生特殊效果。战斗中有几率使敌人定身并破坏要害。",
    },
    steps: [
      { text: { en: "Complete the quest \"Qinghe Heroic Trail Vol.3 - Meridian Touch\" (清河·侠迹卷三·金玉手).", zh: "完成任务「清河·侠迹卷三·金玉手」。" } },
      { text: { en: "Find NPC 严其人 near the Stonewash Strand (浣石浦) teleport point.", zh: "在浣石浦传送点附近找到NPC严其人。" } },
      { text: { en: "Follow the quest prompts to complete all steps. The skill unlocks upon quest completion.", zh: "按照任务提示完成所有步骤，任务完成后解锁奇术。" } },
    ],
    source: { en: "Qinghe - Scroll III: Meridian Touch", zh: "清河·侠迹卷三·金玉手" },
  },
  {
    id: "celestial-seize",
    name: { en: "Celestial Seize", zh: "摄星拿月" },
    type: "offensive",
    effect: {
      en: "Pull distant objects. In combat, disarm enemies and counterattack with their weapon. Damage scales with weapon weight.",
      zh: "拉扯远处的物体。战斗中缴械敌人并用他们的武器反击。伤害随武器重量变化。",
    },
    steps: [
      { text: { en: "Go to Shenxian Ferry (神仙渡) in Qinghe and enter the village.", zh: "前往清河神仙渡，进入村落。" } },
      { text: { en: "Find NPC 仇越海 near the house by the water and talk to him.", zh: "在水边房屋旁找到NPC仇越海，与他对话。" } },
      { text: { en: "Accept and complete the quest \"Steal from Master - Take with Righteousness\" (偷师·取之有道).", zh: "接受并完成任务「偷师·取之有道」。" } },
      { text: { en: "Important: If 仇越海 is unavailable (occupied), you must first complete the prerequisite quest.", zh: "注意：如果仇越海处于占用状态，需先完成前置任务。" } },
      { text: { en: "The skill unlocks after completing his task.", zh: "完成他的任务后解锁奇术。" } },
    ],
    source: { en: "Qinghe - Shenxian Ferry Quest", zh: "清河·神仙渡任务" },
  },
  {
    id: "cloud-steps",
    name: { en: "Cloud Steps", zh: "凌云踏" },
    type: "offensive",
    effect: {
      en: "Leap high and slam down, or hold breath to jump to marked points. In combat, stomp on enemy shoulders. Effective against cavalry.",
      zh: "高高跃起重击落地，或屏气跳到标记点。战斗中踩踏敌人肩膀。对骑兵有效。",
    },
    steps: [
      { text: { en: "Complete the quest \"Qinghe Heroic Trail Vol.2 - Shadows of the Ruined Shrine\" (清河·侠迹卷二·荒祠暗影).", zh: "完成任务「清河·侠迹卷二·荒祠暗影」。" } },
      { text: { en: "Go to General's Shrine (将军祠) and find loose rocks on the left side of the shrine building.", zh: "前往将军祠，在神祠建筑左侧找到松动的岩石。" } },
      { text: { en: "Drop through the opening into the underground cave.", zh: "通过缺口掉入地下洞穴。" } },
      { text: { en: "Use a fire arrow on the mechanism inside.", zh: "在洞内用火箭射击机关。" } },
      { text: { en: "At the stairs, investigate the corpse to obtain the skill.", zh: "在楼梯处调查尸体，获得奇术。" } },
    ],
    source: { en: "Qinghe - Scroll II: Shadows of the Ruined Shrine", zh: "清河·侠迹卷二·荒祠暗影" },
  },
  {
    id: "lions-roar",
    name: { en: "Lion's Roar", zh: "狮吼正声" },
    type: "offensive",
    effect: {
      en: "Strike a massive bell to deal damage, then release a deafening roar hitting 14 times in a large area. Grants 15% damage reduction and super armor.",
      zh: "猛击巨钟造成伤害，然后释放震耳欲聋的咆哮，在大范围内打击14次。获得15%伤害减免和霸体。",
    },
    steps: [
      { text: { en: "Find and ring all four giant bronze bells scattered across Qinghe (清河). Use \"Channel Qi\" (运气) to strike each bell.", zh: "在清河找到并敲响四口巨大的铜钟。使用「运气」来撞击每口钟。" } },
      { text: { en: "Bell 1: General's Shrine (将军祠) — right side of the shrine.", zh: "第一口钟：将军祠右侧。" } },
      { text: { en: "Bell 2: Pavilion below-left of General's Shrine (将军祠左下方亭子).", zh: "第二口钟：将军祠左下方的亭子。" } },
      { text: { en: "Bell 3: Courtyard below Desolation Forest (荒蚀林下方庭院).", zh: "第三口钟：荒蚀林下方的庭院。" } },
      { text: { en: "Bell 4: Pavilion below Buddha Camp (佛爷寨下方亭子).", zh: "第四口钟：佛爷寨下方的亭子。" } },
      { text: { en: "After ringing all four bells, the mastery value fills to max and the skill is learned immediately.", zh: "敲响全部四口钟后，领悟值直接满格，立刻学会奇术。" } },
      { text: { en: "Note: Pair with Leaping Toad (金蟾腾跃) to trigger toad poison and extra damage.", zh: "注意：搭配金蟾腾跃可触发蟾毒和额外伤害加成。" } },
    ],
    source: { en: "Qinghe - Ring Four Bells Quest", zh: "清河·四钟齐鸣任务" },
  },
  {
    id: "leaping-toad",
    name: { en: "Leaping Toad", zh: "金蟾腾跃" },
    type: "offensive",
    effect: {
      en: "Flip backward to knock back enemies, dash forward to deal damage, then retreat. Cast twice more for toad poison. Third cast becomes Golden Toad Strike (knockdown AoE).",
      zh: "向后翻倒击退敌人，向前冲刺造成伤害，然后撤退。再次施放两次可获得蟾毒。第三次施放变为金蟾撞击（击倒范围伤害）。",
    },
    steps: [
      { text: { en: "Go to General's Shrine (将军祠) in Qinghe.", zh: "前往清河将军祠。" } },
      { text: { en: "Find the NPC \"Yanyun Evil God - Liang Xiaolong\" (燕云邪神·梁小龙) near the large bell.", zh: "在大钟附近找到NPC「燕云邪神·梁小龙」。" } },
      { text: { en: "Observe the toad's leaping posture nearby.", zh: "观察旁边蟾蜍的跳跃姿态。" } },
      { text: { en: "Complete the \"Skill Theft\" (偷师) mini-game to learn the skill.", zh: "完成「偷师」小游戏学会奇术。" } },
    ],
    source: { en: "Qinghe - Skill Theft Mini-game", zh: "清河·偷师小游戏" },
  },
  {
    id: "ghost-bind",
    name: { en: "Ghost Bind", zh: "百鬼打穴手" },
    type: "offensive",
    effect: {
      en: "Flash to enemies, paralyzing up to 6 targets, dealing damage and breaking weak points. Ineffective against strong enemies.",
      zh: "闪现到敌人面前，使最多6个目标定身，造成伤害并破坏要害。对强力敌人无效。",
    },
    steps: [
      { text: { en: "Prerequisite: First clear the dungeon \"Kaifeng - Garrison - Wuyou Cave\" (开封·镇守·无忧洞).", zh: "前置条件：首次通关副本「开封·镇守·无忧洞」。" } },
      { text: { en: "Progress the main story to the end of Jiaomen Li (角门里).", zh: "主线剧情推进到角门里结束。" } },
      { text: { en: "Go to the area southeast of Kaifeng, near the Jiaomen Li waypoint.", zh: "前往开封东南区域，在角门里传送点附近。" } },
      { text: { en: "Behind a house, find NPC 涂山允 through the window and talk to trigger the quest \"Under Warm Hospitality\" (盛情之下).", zh: "在房屋后面，通过窗户找到NPC涂山允并对话，触发任务「盛情之下」。" } },
      { text: { en: "Use the skill to paralyze the Tianquan Disciple in front of the house, helping 涂山允 escape.", zh: "使用技能定住房前的天泉弟子，帮助涂山允逃脱。" } },
      { text: { en: "Complete the quest to obtain the skill.", zh: "完成任务后获得奇术。" } },
    ],
    source: { en: "Kaifeng - After Wuyou Cave", zh: "开封·无忧洞任务后" },
  },
  {
    id: "guardian-palm",
    name: { en: "Guardian Palm", zh: "韦陀正法" },
    type: "offensive",
    effect: {
      en: "Slam the ground for AoE damage. At 3-5m height, upgrades to 'Lamp Light' (palm strike + knockback).",
      zh: "猛击地面造成范围伤害。在3-5米高度时升级为'灯光照耀'（掌击+击退）。",
    },
    steps: [
      { text: { en: "Complete the quest \"Qinghe Heroic Trail Vol.7 - Thousand Buddha Ruins\" (清河·侠迹卷七·千佛残墟).", zh: "完成任务「清河·侠迹卷七·千佛残墟」。" } },
      { text: { en: "Teleport to Thousand Buddha Valley (千佛谷) in the top-right of Qinghe.", zh: "传送到清河右上角的千佛谷。" } },
      { text: { en: "Go to the burnt village above Thousand Buddha Platform (千佛台) to trigger the quest.", zh: "前往千佛台上方的烧毁村庄触发任务。" } },
      { text: { en: "Find NPC Night Dream Monk (夜梦僧) in Thousand Buddha Village (千佛村).", zh: "在千佛村找到NPC夜梦僧。" } },
      { text: { en: "Complete three tasks and the story sequence to acquire.", zh: "完成三个任务和剧情序列后获得。" } },
      { text: { en: "Note: Ground level = Palm Imprint (掌印); Air (5m+) = Subduing Demon Vajra Imprint (伏魔金刚印).", zh: "注意：地面使用为掌印，空中5米以上为伏魔金刚印。" } },
    ],
    source: { en: "Qinghe - Scroll VII: Thousand Buddha Ruins", zh: "清河·侠迹卷七·千佛残墟" },
  },
  {
    id: "flaming-meteor",
    name: { en: "Flaming Meteor", zh: "流星坠火" },
    type: "offensive",
    effect: {
      en: "Dash forward, stomp to jump, and throw an exploding flaming spear that falls like a meteor. 15% damage reduction and super armor.",
      zh: "向前冲刺，跺脚跳跃，投掷爆炸的燃烧长矛，像流星一样坠落。15%伤害减免和霸体。",
    },
    steps: [
      { text: { en: "First clear the dungeon \"Qinghe - Garrison - Bodhi Bitter Sea\" (清河·镇守·菩提苦海).", zh: "首次通关副本「清河·镇守·菩提苦海」。" } },
      { text: { en: "Challenge boss Ye Wanshan (叶万山) again at Bodhi Bitter Sea.", zh: "再次挑战菩提苦海的Boss叶万山。" } },
      { text: { en: "When Ye Wanshan uses red/yellow-light attacks, perform a perfect parry (卸势). Each successful parry adds +10% insight proficiency.", zh: "当叶万山使用红光/黄光攻击时，执行完美卸势。每次成功卸势增加10%破绽度。" } },
      { text: { en: "Fill the insight gauge (眼睛进度条) to 100%, then defeat the boss.", zh: "将破绽度（眼睛进度条）填满至100%，然后击败Boss。" } },
      { text: { en: "Warning: In Phase 2, failing a parry will reset all progress — stay in Phase 1 to farm safely.", zh: "警告：第二阶段失败会清除所有进度，建议在第一阶段安全刷满。" } },
    ],
    source: { en: "Qinghe - Bodhi Sea Challenge", zh: "清河·菩提海挑战" },
  },
  {
    id: "talon-strike",
    name: { en: "Talon Strike", zh: "鹰爪连凿" },
    type: "offensive",
    effect: {
      en: "Sweep to break guard, followed by 3 strikes dealing damage.",
      zh: "横扫破防，随后进行3次打击造成伤害。",
    },
    steps: [
      { text: { en: "Go to the cliff below Chunqiu Villa (春秋别馆) in Qinghe.", zh: "前往清河春秋别馆后山的悬崖。" } },
      { text: { en: "Find the large stone pillar halfway up the mountain.", zh: "找到半山腰的大石柱。" } },
      { text: { en: "Locate the eagle nest with eagle eggs.", zh: "在那里找到有鸟蛋的鹰巢。" } },
      { text: { en: "Choose \"Feed\" (投喂) the eagle.", zh: "选择「投喂」老鹰。" } },
      { text: { en: "Complete the \"Skill Theft - Steal from Eagle\" (偷师·鹰) mini-game to learn the skill.", zh: "完成「偷师·鹰」小游戏学会奇术。" } },
    ],
    source: { en: "Qinghe - Skill Theft Mini-game", zh: "清河·偷师小游戏" },
  },
  {
    id: "yaksha-rush",
    name: { en: "Yaksha Rush", zh: "药叉破魔" },
    type: "offensive",
    effect: {
      en: "Dash forward to break guard, then launch enemies upward. Guard break deals massive damage.",
      zh: "向前冲刺破防，向上击飞。破防造成巨大伤害。",
    },
    steps: [
      { text: { en: "Prerequisite: Reach 6000 Qinghe exploration level.", zh: "前置条件：清河探索度达到6000。" } },
      { text: { en: "Clear \"Garrison - Bodhi Bitter Sea\" (镇守·菩提苦海) to obtain Yin-carved Buddha Light Jade from Ye Wanshan.", zh: "通关「镇守·菩提苦海」，从叶万山处获得阴刻佛光玉。" } },
      { text: { en: "Clear \"Garrison - Chunqiu Villa\" (镇守·春秋别馆) to obtain Yang-carved Buddha Light Jade from Xiao Shiqi.", zh: "通关「镇守·春秋别馆」，从小十七处获得阳刻佛光玉。" } },
      { text: { en: "Place both jades at the top of the Buddha Light Peak (佛光顶) pagoda during Noon (午时, 11AM-1PM). The underground door opens.", zh: "在午时（11:00-13:00）将两块佛光玉放置在佛光顶塔顶。地下门开启。" } },
      { text: { en: "Enter and follow the footprints. Solve the light beam puzzles along the way.", zh: "进入并沿脚印前进，沿途解开光束谜题。" } },
      { text: { en: "Use parry (卸势) to handle the bronze figures (铜人).", zh: "用卸势应对铜人。" } },
      { text: { en: "At the bottom level, defeat Miaoshan/Tian Ying (妙善/田英). Complete \"Qinghe Heroic Trail Final Vol. - Rainbow in the Long Night\" (清河·侠迹终卷·长夜有虹).", zh: "在最底层击败妙善/田英，完成「清河·侠迹终卷·长夜有虹」。" } },
    ],
    source: { en: "Qinghe - Jianghu Legacy: The Promised Light", zh: "清河·侠迹终卷·长夜有虹" },
  },
  {
    id: "free-morph",
    name: { en: "Free Morph", zh: "自在无碍" },
    type: "offensive",
    effect: {
      en: "Unleash a storm of kicks. First hit launches enemies, followed by aerial strikes, ending with a heavy slam for AoE damage.",
      zh: "释放风暴般的踢击。第一击将敌人击飞，然后进行空中打击，最后重击落地造成范围伤害。",
    },
    steps: [
      { text: { en: "First clear \"Qinghe - Garrison - Buddha Light Peak\" (清河·镇守·佛光顶).", zh: "首次通关「清河·镇守·佛光顶」。" } },
      { text: { en: "Challenge boss Tian Ying (田英) again.", zh: "再次挑战Boss田英。" } },
      { text: { en: "During Tian Ying's Phase 2 (spinning kick attacks), perform perfect parries (卸势) against his red-light attacks.", zh: "在田英的第二阶段（旋转踢攻击），对其红光攻击执行完美卸势。" } },
      { text: { en: "Each successful parry fills the insight gauge. When the mastery value reaches 100%, you comprehend the skill on the spot.", zh: "每次成功卸势填充破绽度。当领悟值达到100%时，当场领悟奇术。" } },
      { text: { en: "Tip: You can use assisted parry (辅助卸势) to help with timing.", zh: "提示：可以使用辅助卸势帮助把握时机。" } },
    ],
    source: { en: "Qinghe - Buddha Light Peak Challenge", zh: "清河·佛光顶挑战" },
  },
  {
    id: "wolflike-frenzy",
    name: { en: "Wolflike Frenzy", zh: "骑龙回马" },
    type: "offensive",
    effect: {
      en: "Knock down enemies, deliver a series of rapid strikes, and finish with an uppercut. Effective against cavalry and unbalanced enemies.",
      zh: "击倒敌人，进行一系列快速打击，最后以上挑结束。对骑兵和姿势不稳的敌人有效。",
    },
    steps: [
      { text: { en: "Go to Mirror Pool Secret Room (镜潭密室) in Kaifeng.", zh: "前往开封镜潭密室。" } },
      { text: { en: "You can use the \"unstuck\" function at the door in front of the pool to clip inside.", zh: "可以在水潭前的门口使用「脱困」功能穿模进入。" } },
      { text: { en: "Navigate through to Wanghuai South Cliff (望淮南崖). Reach the final secret passage to find the treasure chest.", zh: "穿过通道到达望淮南崖。到达最后的密道找到宝箱。" } },
      { text: { en: "Alternative: Use Celestial Seize (摄星拿月) to grab the chest remotely, or use building mode to construct a ladder.", zh: "替代方法：使用摄星拿月从远处抓取宝箱，或使用建造模式搭梯子到达。" } },
    ],
    source: { en: "Kaifeng - Mirror Pool Secret Room", zh: "开封·镜潭密室" },
  },
  {
    id: "soaring-spin",
    name: { en: "Soaring Spin", zh: "啸风摧岳" },
    type: "offensive",
    effect: {
      en: "Channel qi into a roaring thrust followed by spiral follow-up strikes. Deals damage and reduces healing effects.",
      zh: "将气引导为咆哮的刺击，随后进行螺旋式的后续打击。造成伤害并降低治疗效果。",
    },
    steps: [
      { text: { en: "Go to Kaifeng - Martial Temple (武成王庙).", zh: "前往开封武成王庙。" } },
      { text: { en: "Find the hidden treasure chest above the large statue inside the temple.", zh: "找到庙内大型雕像上方的隐藏宝箱。" } },
      { text: { en: "Use Cloud Steps (凌云踏) + Celestial Seize (摄星拿月) to reach the elevated position.", zh: "使用凌云踏+摄星拿月到达高处。" } },
      { text: { en: "Open the chest to obtain the skill.", zh: "打开宝箱获得奇术。" } },
    ],
    source: { en: "Kaifeng - Hidden Chest", zh: "开封·武成王庙隐藏宝箱" },
  },
  {
    id: "dragons-breath",
    name: { en: "Dragon's Breath", zh: "神龙吐火" },
    type: "offensive",
    effect: {
      en: "Drink wine to enter a drunken state. Breathe fire with qi for 2 strikes + ignition. 15% damage reduction and super armor.",
      zh: "饮酒进入醉酒状态。用气喷火，2次打击+点燃。15%伤害减免和霸体。",
    },
    steps: [
      {
        text: { en: "Go to Kaifeng East Cross Street (开封东十字街) → Mahjong Hall (麻将馆) → Find NPC 洛九 (Luo Jiu).", zh: "前往开封东十字街→麻将馆→找到NPC洛九。" },
        images: [S("2023/12/21/584_2023122153304537.png")],
      },
      {
        text: { en: "Go to Nine Streams Gate Straw Sandal Camp (九流门草鞋驻地) → Find NPC 梁远 (Liang Yuan). If daytime, he stands nearby; if nighttime, he lies in the house behind.", zh: "前往九流门草鞋驻地→找到NPC梁远。白天他在附近站着，夜间他躺在后面的屋子里。" },
        images: [S("2023/12/21/584_2023122153303830.png")],
      },
      {
        text: { en: "Use Celestial Seize (摄星拿月) to steal the book \"Tuohuo Travelogue\" (吐火罗游记) from 梁远.", zh: "使用摄星拿月从梁远处偷取「吐火罗游记」。" },
        images: [S("2023/12/21/584_202312215330398.png")],
      },
      {
        text: { en: "Return the book to 洛九 to complete the quest. CRITICAL: Open \"Know All Things\" (万事知) → Manually claim the reward. If you don't manually claim it, the skill will NOT appear!", zh: "将书还给洛九完成任务。关键步骤：打开「万事知」→手动领取奖励。如果不手动领取，奇术不会出现！" },
      },
    ],
    source: { en: "Kaifeng - Know All Things Quest", zh: "开封·万事知任务" },
  },
  {
    id: "drunken-poet",
    name: { en: "Drunken Poet", zh: "太白醉月" },
    type: "offensive",
    effect: {
      en: "Drink wine to enter a drunken state. Repeated casts deal up to 5 strikes (6 qi each), dealing damage + drunken mist.",
      zh: "饮酒进入醉酒状态。重复施放最多可进行5次打击（每次6点元气），造成伤害+醉酒迷雾。",
    },
    steps: [
      { text: { en: "Find the wine merchant NPC 郝久 (Hao Jiu). Multiplayer mode: At Buxianxian (不羡仙) or Fenghe Village (丰禾村). Single-player mode: Before village destruction → Buxianxian; After village destruction → Fenghe Village.", zh: "找到酒商NPC郝久。多人模式：在不羡仙或丰禾村。单人模式：村庄未毁→不羡仙；村庄已毁→丰禾村。" } },
      { text: { en: "Buy all 12 bottles of wine from him. Switch to single-player mode.", zh: "购买他全部12瓶酒，切换到单人模式。" } },
      { text: { en: "Advance time to Ox Hour (丑时, 1:00-3:00 AM). Drink all the wine until you reach \"Dead Drunk\" (烂醉如泥) status.", zh: "将时间推进到丑时（凌晨1:00-3:00），喝完全部酒直到达到「烂醉如泥」状态。" } },
      { text: { en: "The skill unlocks upon reaching the dead drunk state.", zh: "达到烂醉状态后自动解锁奇术。" } },
      { text: { en: "Alternative method: Play mini-games like Pitchpot (投壶雅戏), Leaf Game (叶子戏), or Red Stove Gathering (红炉雅集) to accumulate drunkenness.", zh: "替代方法：玩投壶雅戏、叶子戏、红炉雅集等小游戏积累醉酒度。" } },
    ],
    source: { en: "Qinghe - Wine Merchant Hao Jiu", zh: "清河·酒商郝久" },
  },
  {
    id: "dragon-head",
    name: { en: "Dragon Head", zh: "叶龙骧首" },
    type: "offensive",
    effect: {
      en: "Gather fallen leaves into a dragon head that strikes enemies with knockback. 15% damage reduction and super armor.",
      zh: "将落叶聚集成龙头，打击敌人使其击退。15%伤害减免和霸体。",
    },
    steps: [
      { text: { en: "Learn a cumulative total of 35 other Mystic Skills across all categories (Offensive, General, Movement).", zh: "在所有类别（逐寇、通用、御风）中累计学习35种其他奇术。" } },
      { text: { en: "Once you reach 35 skills, Dragon Head unlocks automatically. No additional quest or trigger required.", zh: "达到35种后，叶龙骧首自动解锁，无需额外任务或触发条件。" } },
    ],
    source: { en: "Ultimate - Learn 35 Other Skills", zh: "终极技能 - 学习35种其他奇术" },
  },
  {
    id: "blinding-mist",
    name: { en: "Blinding Mist", zh: "红尘障目" },
    type: "offensive",
    effect: {
      en: "Release poison mist that blinds enemies for 5 seconds, preventing combat. Use Touch of Death to subdue. Ineffective against strong enemies.",
      zh: "释放毒雾，敌人失明5秒无法战斗。使用凌虚一指进行制服。对强力敌人无效。",
    },
    steps: [
      {
        text: { en: "Complete the quest \"Qinghe Heroic Trail Vol.4 - Red Dust Without Eyes\" (清河·侠迹卷四·红尘无眼). Go to Danya (丹崖) and find NPC 天不收 at Moonveil Mountain (隐雾山).", zh: "完成任务「清河·侠迹卷四·红尘无眼」。前往丹崖，在隐雾山找到NPC天不收。" },
        images: [S("2023/12/22/584_2023122295759365.png")],
      },
      {
        text: { en: "Talk to 天不收 and dive into the lake, restart 3 mechanisms to drain water.", zh: "与天不收对话，潜入湖中重启3个机关排水。" },
        images: [S("2023/12/22/584_2023122295758975.png")],
      },
      {
        text: { en: "Stone disk puzzle: Step on the plates in order: North → East → South → West to open the secret room.", zh: "石盘谜题：按顺序踩踏北→东→南→西开启密室。" },
        images: [S("2023/12/22/584_2023122295759443.png")],
      },
      {
        text: { en: "Inside the secret room, clear cloth strips and find letters at the broken bridge.", zh: "进入密室后，清除布条并在断桥处找到信件。" },
        images: [S("2023/12/22/584_202312229580098.png")],
      },
      {
        text: { en: "Dive through cave following water flow. Collect 3 treasure chests along the way.", zh: "潜水穿过洞穴顺水前进，沿途收集3个宝箱。" },
        images: [S("2023/12/22/584_2023122295759274.png")],
      },
      {
        text: { en: "Touch blue flowers to open stone door. Bell puzzle: Shoot the circular mechanisms in order 3-4-1-2 (from left).", zh: "触碰蓝花开启石门。铃铛谜题：按从左到右3-4-1-2的顺序射击铃铛上的圆形机关。" },
        images: [S("2023/12/22/584_2023122295759742.png")],
      },
      {
        text: { en: "Go to Moon Goddess Dwelling (月神居), get Bai Yue Flower (拜月花) and Tongzi Sword (童子小剑). Synthesize letters and return items to complete the quest.", zh: "前往月神居获得拜月花和童子小剑。合成信件后归还物品完成任务。" },
        images: [S("2023/12/22/584_2023122295759827.png")],
      },
      {
        text: { en: "Bonus: After completion, step on stone disks in these sequences for extra reward (旧物·素月护手): South-North-West-East, then Northeast-Southwest, then Northwest-Southeast.", zh: "额外奖励：完成后按以下顺序踩石盘可获得旧物·素月护手：南-北-西-东，然后东北-西南，最后西北-东南。" },
      },
    ],
    source: { en: "Qinghe - Scroll IV: Red Dust Without Eyes", zh: "清河·侠迹卷四·红尘无眼" },
  },
  {
    id: "serene-breeze",
    name: { en: "Serene Breeze", zh: "清风霁月" },
    type: "offensive",
    effect: {
      en: "Channel qi to quickly recover when hit. Can be used while being attacked or under crowd control. Hit enemies: -50% stamina recovery for 8s and take damage.",
      zh: "引导气在被击中时快速恢复。可在受攻击或受控制效果时使用。受击敌人：8秒内耐力恢复-50%，并受到伤害。",
    },
    steps: [
      { text: { en: "Unlock through the Season Talent Tree (天赋树).", zh: "通过天赋树解锁。" } },
      { text: { en: "Invest enough points in the base section (requires 12+ points). The skill node will become available for unlocking.", zh: "在基础部分投入足够的点数（需投入12+点），技能节点将变为可解锁状态。" } },
    ],
    source: { en: "Talent Tree", zh: "天赋树" },
  },
  {
    id: "golden-body",
    name: { en: "Golden Body", zh: "无相金身" },
    type: "offensive",
    effect: {
      en: "Gain a shield + qi recovery. While shield is active: super armor + 15% damage reduction.",
      zh: "获得护盾+气恢复。护盾存在期间：霸体+15%伤害减免。",
    },
    steps: [
      { text: { en: "Go to Kaifeng → Grand Imperial Temple (大相国寺).", zh: "前往开封大相国寺。" } },
      { text: { en: "Advance the in-game time to Noon (午时, 11:00 AM - 1:00 PM).", zh: "将游戏时间推进到午时（11:00-13:00）。" } },
      { text: { en: "Find NPC 释一 (Shi Yi) in the side hall of the temple.", zh: "在寺庙偏殿找到NPC释一。" } },
      { text: { en: "Use Celestial Seize (摄星拿月) to steal the Golden Body scroll from him. Requirement: Character level 32+.", zh: "使用摄星拿月从他身上偷取金身卷轴。要求：角色等级32以上。" } },
    ],
    source: { en: "Kaifeng - Grand Imperial Temple", zh: "开封·大相国寺" },
  },
  {
    id: "ghostly-steps",
    name: { en: "Ghostly Steps", zh: "阴阳迷踪步" },
    type: "offensive",
    effect: {
      en: "Reduces stamina consumption of ground dodge skills by 40%, slightly increases untargetable duration.",
      zh: "地面闪避技能的耐力消耗降低40%，略微增加无法选中的持续时间。",
    },
    steps: [
      { text: { en: "Go to Kaifeng → Ghost Market (鬼市子). IMPORTANT: Must be in Single-Player Mode.", zh: "前往开封鬼市子。重要：必须在单人模式下进行。" } },
      { text: { en: "Find the mechanism and trigger it to open a large gate. Use Mighty Drop (千钧坠) to lower the bridge inside.", zh: "找到机关并触发，开启大门。用千钧坠放下内部桥梁。" } },
      { text: { en: "Follow the path downward, collecting treasure chests along the way. Use grappling hooks (press G), shoot fire arrows at explosives, cross bridges and climb to reach elevated chests.", zh: "沿路向下前进，沿途收集宝箱。用钩爪（按G键）跳跃，用火箭射击炸药清除障碍，走过桥梁攀爬到达高处。" } },
      { text: { en: "At the deepest area, find and open the final treasure chest to unlock the skill.", zh: "在最深处找到并打开最终宝箱解锁奇术。" } },
    ],
    source: { en: "Kaifeng - Ghost Market Dungeon", zh: "开封·鬼市子·天工地窟" },
  },
  {
    id: "honking-havoc",
    name: { en: "Honking Havoc", zh: "狗嘴夺食" },
    type: "offensive",
    effect: {
      en: "Use a goose for large-range damage + hold breath for 6 seconds. The goose flails and flees, causing additional small-range damage.",
      zh: "使用鹅进行大范围伤害+屏气6秒。鹅挥舞并逃离，造成额外的小范围伤害。",
    },
    steps: [
      { text: { en: "Prerequisite: First clear the dungeon \"Kaifeng - Garrison - Wuyou Cave\" (开封·镇守·无忧洞), must defeat boss Dao Zhu (道主).", zh: "前置条件：首次通关副本「开封·镇守·无忧洞」，必须击败Boss道主。" } },
      { text: { en: "After clearing, the skill is obtained as a first-clear reward.", zh: "通关后作为首次通关奖励获得奇术。" } },
    ],
    source: { en: "Kaifeng - Wuyou Cave First Clear", zh: "开封·无忧洞首次通关" },
  },
  {
    id: "glow-of-fireflies",
    name: { en: "Glow of Fireflies", zh: "萤光辉夜" },
    type: "offensive",
    effect: {
      en: "Summon a swarm of fireflies that emit a soft glow in the dark for 30 seconds.",
      zh: "召唤一群萤火虫，在黑暗中发出柔和光芒30秒。",
    },
    steps: [
      { text: { en: "Collect 5-10 fireflies (each adds ~20% progress). Fireflies can be found everywhere, especially at night.", zh: "收集5-10只萤火虫（每只增加约20%进度）。萤火虫随处可见，夜晚更多。" } },
      { text: { en: "Common locations: various villages, Yingyuan (荧渊), Danya (丹崖), and near flowers at Moonveil Mountain (隐雾山) Crimson Cliffs Lake area.", zh: "常见位置：各个村庄、荧渊、丹崖、隐雾山丹崖湖区花朵附近。" } },
      { text: { en: "Catch enough fireflies to fill the progress bar and unlock the skill.", zh: "捕捉足够萤火虫填满进度条即可解锁奇术。" } },
    ],
    source: { en: "Qinghe - Firefly Collection", zh: "清河·萤火虫收集" },
  },
  {
    id: "veil-of-stillness",
    name: { en: "Veil of Stillness", zh: "杳无形" },
    type: "offensive",
    effect: {
      en: "Become less detectable by enemies for a short duration.",
      zh: "短时间内使自身更不易被敌人发现。",
    },
    steps: [
      { text: { en: "Go south of Taiping Bell Tower (太平钟楼) in Qinghe.", zh: "前往清河太平钟楼南方。" } },
      { text: { en: "Find NPC 秋月海 and talk to him. Hide behind the boulder as instructed.", zh: "找到NPC秋月海并对话，按指示躲在巨石后面。" } },
      { text: { en: "Complete the exploration guide quest \"Steal Learning Has Its Ways\" (偷师有道). Open the quest tracker in your quest list to follow the steps.", zh: "完成探游指引任务「偷师有道」。在任务列表中打开任务追踪以跟踪步骤。" } },
      { text: { en: "Requirement: Character level 8+.", zh: "要求：角色等级8以上。" } },
    ],
    source: { en: "Taiping Bell Tower - Exploration Guide", zh: "太平钟楼以南·探游指引·偷师有道" },
  },
  {
    id: "flute-of-the-tides",
    name: { en: "Flute of the Tides", zh: "长风破浪" },
    type: "offensive",
    effect: {
      en: "Release musical note starfall causing AoE shockwaves. A flute follows you, releasing sound wave ripples that strike nearby targets.",
      zh: "释放音符星陨造成范围冲击，长笛跟随你释放声波波纹打击附近目标。",
    },
    steps: [
      { text: { en: "Go to Jade Gate Pass (玉门关) in Hexi (河西). Find NPC 不知僧 at Peaceward Camp (平营地) and play the flute for him.", zh: "前往河西玉门关，在平营地找到NPC不知僧，为他吹奏长笛。" } },
      { text: { en: "He will request you to play at Whitecrown Fortress (白冠堡) and Heroes' Graves (英雄冢). Travel to both locations and play the flute as requested.", zh: "他会请求你前往白冠堡和英雄冢吹奏长笛。前往两个地点按要求吹奏。" } },
      { text: { en: "Return to complete the quest and obtain the skill.", zh: "返回完成任务获得奇术。" } },
    ],
    source: { en: "Hexi - Jade Gate Pass Quest (v1.6)", zh: "河西·玉门关任务 (v1.6)" },
  },

  // ===== General (通用) =====
  {
    id: "divine-counter",
    name: { en: "Divine Counter", zh: "回风照影" },
    type: "general",
    effect: {
      en: "After blocking an enemy skill, perform a counterattack that reduces the target's stamina recovery by 50% for 8 seconds.",
      zh: "在防御敌人技能后，进行反击，并在8秒内使目标的耐力恢复降低50%。",
    },
    steps: [
      { text: { en: "Unlock through the Season Talent Tree (天赋树).", zh: "通过天赋树解锁。" } },
      { text: { en: "Invest enough points in the base section (requires 14+ points). Locate and unlock the Divine Counter node.", zh: "在基础部分投入足够的点数（需投入14+点），找到并解锁回风照影节点。" } },
    ],
    source: { en: "Talent Tree", zh: "天赋树" },
  },
  {
    id: "star-shift",
    name: { en: "Star Shift", zh: "移星换斗" },
    type: "general",
    effect: {
      en: "When an attack is about to land, consume Insight to trigger a parry to nullify the attack.",
      zh: "在攻击即将落地时，消耗洞察力触发卸势来抵消攻击。",
    },
    steps: [
      { text: { en: "Unlocked by default at game start. You can toggle assist parry (辅助卸势) in the game options.", zh: "游戏开始时默认解锁。可以在游戏选项中切换辅助卸势。" } },
    ],
    source: { en: "Default", zh: "默认解锁" },
    isDefault: true,
  },
  {
    id: "still-waters",
    name: { en: "Still Waters", zh: "停渊止水" },
    type: "general",
    effect: {
      en: "While holding breath, nearby targets' movement speed is reduced by 75%. Consumes stamina every 0.1 seconds.",
      zh: "屏气时，周围目标的移动速度降低75%。每0.1秒消耗耐力。",
    },
    steps: [
      { text: { en: "Unlocked early in the game during the main quest. Follow the main quest through Bamboo Forest Old Dwelling (竹林旧居).", zh: "在游戏早期主线任务中解锁。跟随主线任务经过竹林旧居。" } },
      { text: { en: "Talk to the mysterious man (Feng Jisheng/冯吉盛) encountered during the archery tutorial. The skill unlocks automatically.", zh: "在弓术教程中与神秘人（冯吉盛）对话，自动解锁奇术。" } },
    ],
    source: { en: "Main Quest - Archery Tutorial", zh: "主线任务·弓术教程" },
  },
  {
    id: "touch-of-death",
    name: { en: "Touch of Death", zh: "凌虚一指" },
    type: "general",
    effect: {
      en: "Dash from behind the target and strike their weak point. Can one-shot weaker enemies.",
      zh: "从目标后方冲刺，打击要害。可以一击击败较弱的敌人。",
    },
    steps: [
      {
        text: { en: "Complete the quest \"Qinghe Heroic Trail Vol.1 - Rivers and Mountains as Before\" (清河·侠迹卷一·河山如故). Go to a small courtyard near Qifa Slope (七伐坡) and find NPC 烈不尽 to start the quest.", zh: "完成任务「清河·侠迹卷一·河山如故」。前往清河七伐坡附近的小院，找到NPC烈不尽对话开始任务。" },
        images: [S("2023/12/22/584_2023122293603972.png")],
      },
      {
        text: { en: "Light 2 flame mechanisms to open the secret room mechanism. Use Mighty Drop (千钧坠) to activate the mechanism and open the passage.", zh: "点燃2个火焰机关开启密室机关。使用千钧坠启动机关打开通道。" },
        images: [S("2023/12/22/584_2023122293602919.png")],
      },
      {
        text: { en: "At the statue, use the pose \"Decrypt - Yanyun Oath\" (解密-燕云誓). Left wall puzzle: Keep the 4 characters 山河寸土.", zh: "在雕像前使用动作「解密-燕云誓」。左墙谜题：保留4个字「山河寸土」。" },
        images: [S("2023/12/22/584_2023122293603106.png")],
      },
      {
        text: { en: "Right wall puzzle: Keep the 4 characters 誓死不易. Push back the blocks labeled 柒 and 百.", zh: "右墙谜题：保留4个字「誓死不易」。将标有柒和百的石块推回。" },
        images: [S("2023/12/22/584_2023122293603455.png")],
      },
      {
        text: { en: "Activate the mechanism at the waterfall cave to complete the quest.", zh: "在瀑布洞穴处激活机关完成任务。" },
      },
    ],
    source: { en: "Qinghe - Scroll I: Rivers and Mountains as Before", zh: "清河·侠迹卷一·河山如故" },
  },
  {
    id: "wind-sense",
    name: { en: "Wind Sense", zh: "听风辨位" },
    type: "general",
    effect: {
      en: "Highlight items or characters of interest in the area.",
      zh: "突出显示区域中感兴趣的物品或人物。",
    },
    steps: [
      { text: { en: "Unlock through the Season Talent Tree (天赋树).", zh: "通过天赋树解锁。" } },
      { text: { en: "Invest enough points in the base section (requires 2+ points). Locate and unlock the Wind Sense node.", zh: "在基础部分投入足够的点数（需投入2+点），找到并解锁听风辨位节点。" } },
    ],
    source: { en: "Talent Tree", zh: "天赋树" },
  },

  // ===== Movement (御风) =====
  {
    id: "thousand-mile-flight",
    name: { en: "Thousand-Mile Flight", zh: "一剑千里" },
    type: "movement",
    effect: {
      en: "Flying travel skill. Soar through the air like a dragon. Requires exploration rank per region.",
      zh: "飞行旅行技能。像龙一样在空中翱翔。每个区域需要探索等级。",
    },
    steps: [
      { text: { en: "Participate in the \"Warrior's Journey\" (侠客行) login event.", zh: "参与「侠客行」登录活动。" } },
      { text: { en: "Log in on Day 4 of the event and claim the skill as the login reward.", zh: "在活动第4天登录，作为登录奖励领取奇术。" } },
    ],
    source: { en: "Login Event - Day 4", zh: "侠客行第4天登录" },
  },
  {
    id: "meteor-flight",
    name: { en: "Meteor Flight", zh: "飒沓流星" },
    type: "movement",
    effect: {
      en: "Flying travel skill. Race through the sky like a meteor, riding the wind with a spear. Requires exploration rank per region.",
      zh: "飞行旅行技能。像流星一样在天空中穿梭，骑着风，手持长矛。每个区域需要探索等级。",
    },
    steps: [
      { text: { en: "Complete the quest \"Heroic Trail Vol.5 - What is the Twilight Cloud\" (侠迹卷五·暮云何物). This is the 5th Jianghu Legacy quest.", zh: "完成任务「侠迹卷五·暮云何物」，这是第5个江湖遗泽任务。" } },
      { text: { en: "Complete the quest \"Afterglow\" (余晖) to receive the skill as a reward.", zh: "完成任务「余晖」获得奇术奖励。" } },
      { text: { en: "Usage condition: Reach 4000 Qinghe exploration level to obtain the Mu Yun Pendant (暮云佩) for flight.", zh: "使用条件：清河探索度达到4000获得暮云佩后方可飞行。" } },
    ],
    source: { en: "Jianghu Legacy - Scroll V: Afterglow", zh: "江湖遗泽·侠迹卷五·暮云何物" },
  },
  {
    id: "fan-glider",
    name: { en: "Fan Glider", zh: "玉扇游山" },
    type: "movement",
    effect: {
      en: "Flying travel skill. Glide freely across mountains with a fan. Requires exploration rank per region.",
      zh: "飞行旅行技能。用扇子自由滑翔穿越山脉。每个区域需要探索等级。",
    },
    steps: [
      { text: { en: "Reach Qinghe Exploration Rank 5 (6000 exploration points). The skill unlocks automatically.", zh: "清河探索等级达到5级（6000探索点），自动解锁。" } },
      { text: { en: "Usage condition: Reach 4000 Qinghe exploration level to obtain the Mu Yun Pendant (暮云佩) for flight.", zh: "使用条件：清河探索度达到4000获得暮云佩后方可飞行。" } },
    ],
    source: { en: "Qinghe Exploration - 6000 Points", zh: "清河探索6000点" },
  },
  {
    id: "wind-rider",
    name: { en: "Wind Rider", zh: "冯虚御风" },
    type: "movement",
    effect: {
      en: "Flying travel skill. Ride endless winds, drifting beyond mortal realms. Requires exploration rank per region.",
      zh: "飞行旅行技能。驾驭无尽的风，漂移至超越凡人的境界。每个区域需要探索等级。",
    },
    steps: [
      { text: { en: "Reach Qinghe Exploration Rank 6 (9000 exploration points). The skill unlocks automatically.", zh: "清河探索等级达到6级（9000探索点），自动解锁。" } },
      { text: { en: "Usage condition: Reach 4000 Qinghe exploration level to obtain the Mu Yun Pendant (暮云佩) for flight.", zh: "使用条件：清河探索度达到4000获得暮云佩后方可飞行。" } },
    ],
    source: { en: "Qinghe Exploration - 9000 Points", zh: "清河探索9000点" },
  },
  {
    id: "wallstride-swiftstride",
    name: { en: "Wallstride - Swiftstride", zh: "飞檐·步仞" },
    type: "movement",
    effect: {
      en: "Improved wall running, allowing you to vault over walls. Requires exploration rank per region.",
      zh: "改善壁跑，允许翻越墙壁。每个区域需要探索等级。",
    },
    steps: [
      { text: { en: "Complete \"Five Tones Awaken Taiping - Spirit Leader's Music 5\" (五音启太平·灵长之乐五). Submit approximately 45 curios (奇物) to progress.", zh: "完成「五音启太平·灵长之乐五」，提交约45件奇物推进音乐节点。" } },
      { text: { en: "Usage condition: Reach 4000 Qinghe exploration level to obtain the Mu Yun Pendant (暮云佩).", zh: "使用条件：清河探索度达到4000获得暮云佩。" } },
    ],
    source: { en: "Melodies of Peace - Ling Chang V", zh: "五音启太平·灵长之乐五" },
  },
  {
    id: "wallstride-shadowdash",
    name: { en: "Wallstride - Shadowdash", zh: "飞檐·逐影" },
    type: "movement",
    effect: {
      en: "Improved running mobility, allowing you to run on water. Requires exploration rank per region.",
      zh: "改善奔跑时的机动性，允许在水上奔跑。每个区域需要探索等级。",
    },
    steps: [
      { text: { en: "Complete \"Five Tones Awaken Taiping - Coming of Auspiciousness Music 2\" (五音启太平·来仪之乐二). Submit approximately 21 curios (奇物) to progress.", zh: "完成「五音启太平·来仪之乐二」，提交约21件奇物推进音乐节点。" } },
      { text: { en: "Usage condition: Reach 4000 Qinghe exploration level to obtain the Mu Yun Pendant (暮云佩).", zh: "使用条件：清河探索度达到4000获得暮云佩。" } },
    ],
    source: { en: "Melodies of Peace - Laiyi II", zh: "五音启太平·来仪之乐二" },
  },
  {
    id: "threefold-skywalk",
    name: { en: "Threefold Skywalk", zh: "燕三叠" },
    type: "movement",
    effect: {
      en: "Perform up to three consecutive jumps in the air.",
      zh: "在空中连续跳跃最多三次。",
    },
    steps: [
      { text: { en: "Unlocked by default at game start. Introduced during the tutorial.", zh: "游戏开始时默认解锁，在教程中引入。" } },
    ],
    source: { en: "Default", zh: "默认解锁" },
    isDefault: true,
  },
  {
    id: "skywalk-dash",
    name: { en: "Skywalk Dash", zh: "燕朝梁" },
    type: "movement",
    effect: {
      en: "After using Threefold Skywalk to jump, dash forward in the air.",
      zh: "在使用燕三叠跳跃后，向前方冲刺。",
    },
    steps: [
      { text: { en: "Unlocked by default at game start. Introduced during the tutorial.", zh: "游戏开始时默认解锁，在教程中引入。" } },
    ],
    source: { en: "Default", zh: "默认解锁" },
    isDefault: true,
  },
  {
    id: "mighty-drop",
    name: { en: "Mighty Drop", zh: "千钧坠" },
    type: "movement",
    effect: {
      en: "Interrupt aerial movement by fast descending. Cannot be used indoors.",
      zh: "通过快速降落打断空中移动。无法在室内使用。",
    },
    steps: [
      { text: { en: "Unlocked by default at game start.", zh: "游戏开始时默认解锁。" } },
    ],
    source: { en: "Default", zh: "默认解锁" },
    isDefault: true,
  },
  {
    id: "safe-mighty-drop",
    name: { en: "Safe Mighty Drop", zh: "万钧坠" },
    type: "movement",
    effect: {
      en: "Interrupt aerial movement by fast descending. Immune to debuffs and fall damage.",
      zh: "通过快速降落打断空中移动。免疫减益效果和坠落伤害。",
    },
    steps: [
      { text: { en: "Go to the camp west of Ruoshui Bank (弱水岸) in Qinghe. Find the Mysterious Outpost (神秘驻地).", zh: "前往清河弱水岸西侧的营地，找到神秘驻地。" } },
      { text: { en: "Kill all twelve enemies in the outpost. The skill is obtained as the first-clear reward.", zh: "击杀驻地里全部十二个敌人，作为首次通关奖励获得奇术。" } },
    ],
    source: { en: "Qinghe - Mysterious Outpost", zh: "清河·神秘驻地" },
  },
  {
    id: "abyss-dive",
    name: { en: "Abyss Dive", zh: "鱼翔潜底" },
    type: "movement",
    effect: {
      en: "Allows diving and underwater swimming in deep water.",
      zh: "允许在深水中潜水和水下游泳。",
    },
    steps: [
      { text: { en: "Unlocked by default at game start. Only works in deep water areas.", zh: "游戏开始时默认解锁。仅在深水区域有效。" } },
    ],
    source: { en: "Default", zh: "默认解锁" },
    isDefault: true,
  },
  {
    id: "moonleap-morph",
    name: { en: "Moonleap Morph", zh: "百鸟竞逐" },
    type: "movement",
    effect: {
      en: "Transform into a koi, gliding across Hexi's sands, ignoring terrain.",
      zh: "变形为锦鲤，在河西的沙地上滑行，无视地形。",
    },
    steps: [
      { text: { en: "Enter Jade Gate Pass (玉门关) in Hexi (河西).", zh: "进入河西玉门关。" } },
      { text: { en: "Approach the glowing circle on the ground and interact to automatically obtain the skill.", zh: "接近地面上的发光圆圈，与之互动自动获得奇术。" } },
    ],
    source: { en: "Hexi - Jade Gate Pass (v1.6)", zh: "河西·玉门关 (v1.6)" },
  },
  {
    id: "idle-wind",
    name: { en: "Idle Wind", zh: "登天彩戏" },
    type: "movement",
    effect: {
      en: "Transform into a gentle breeze in the Qinchuan area, moving freely.",
      zh: "在秦川区域变形为微风，自由移动。",
    },
    steps: [
      { text: { en: "Complete the first \"World Awakening\" (世界觉醒) event. If already progressed, it auto-unlocks.", zh: "完成首次「世界觉醒」事件。如果已推进过此内容，则自动解锁。" } },
      { text: { en: "The skill is only usable in the Qinchuan (秦川) area.", zh: "奇术仅在秦川区域可用。" } },
    ],
    source: { en: "Qinchuan - World Awakening (v1.6)", zh: "秦川·世界觉醒 (v1.6)" },
  },

  // ===== Entertainment (娱乐) =====
  {
    id: "goosy-slide",
    name: { en: "Goosy Slide", zh: "滑鹅" },
    type: "entertainment",
    effect: {
      en: "Used in 'Campaign Challenge' with 25% chance to instantly complete it. Max 2 times per day.",
      zh: "在'战役挑战'中使用，有25%的几率立即通关。每天最多2次。",
    },
    steps: [
      { text: { en: "Complete the first \"World Awakening\" (世界觉醒) event. If already progressed, it auto-unlocks.", zh: "完成首次「世界觉醒」事件。如果已推进过此内容，则自动解锁。" } },
    ],
    source: { en: "World Awakening (v1.6)", zh: "世界觉醒 (v1.6)" },
  },
  {
    id: "stone-pier",
    name: { en: "Stone Pier", zh: "石锥" },
    type: "entertainment",
    effect: {
      en: "Transform into a Snow Lion, gaining a new skill set. Only available in Liangzhou.",
      zh: "变形为雪狮，获得新的技能组合。仅在凉州可用。",
    },
    steps: [
      { text: { en: "Go to Liangzhou (凉州). Find the area northeast of Snowblossom Ridge Boundary Stone (雪岭界碑).", zh: "前往凉州，找到雪岭界碑东北方的区域。" } },
      { text: { en: "Find and talk to the Snow Lion. Complete the quest \"Real or Fake Snow Lion\" (真假雪狮) to unlock the skill.", zh: "找到雪狮并与之对话，完成任务「真假雪狮」解锁奇术。" } },
    ],
    source: { en: "Liangzhou - Snowblossom Ridge (v1.6)", zh: "凉州·雪岭 (v1.6)" },
  },
];
