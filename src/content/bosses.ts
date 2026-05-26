export interface BossPhase {
  phase: string;
  mechanics: {
    name: { en: string; zh: string };
    description: { en: string; zh: string };
    counter: { en: string; zh: string };
    type: "red_light" | "yellow_light" | "aoe" | "grab" | "buff" | "other";
  }[];
  strategy: { en: string; zh: string };
}

export interface BossGuide {
  id: string;
  name: { en: string; zh: string };
  type: "story" | "world" | "dungeon";
  location: { en: string; zh: string };
  difficulty: number;
  phases: BossPhase[];
  rewards: { en: string; zh: string };
  tips: { en: string; zh: string };
}

export interface DungeonGuide {
  id: string;
  name: { en: string; zh: string };
  type: "5man" | "10man";
  bosses: string[];
  overview: { en: string; zh: string };
  teamComp: { en: string; zh: string };
  tips: { en: string; zh: string };
}

export const bossGuides: BossGuide[] = [
  /* ── 1. 无相皇 ── */
  {
    id: "wuxiang-huang",
    name: { en: "Wuxiang Huang", zh: "荧渊·无相皇" },
    type: "story",
    location: { en: "Yingyuan Cave", zh: "荧渊" },
    difficulty: 4,
    phases: [
      {
        phase: "P1",
        mechanics: [
          {
            name: { en: "Opening Red Flash", zh: "见面杀红光" },
            description: { en: "Fixed opening move. Boss swings weapon behind back twice, then unleashes a fast slash.", zh: "固定开场技，武器后摆两次后极速斩出。" },
            counter: { en: "Deflect on the second backswing.", zh: "第二次后摆瞬间卸势。" },
            type: "red_light",
          },
          {
            name: { en: "Sweeping Slash", zh: "横扫" },
            description: { en: "Wide horizontal melee with large hitbox.", zh: "大范围横斩，判定范围广。" },
            counter: { en: "Deflect or dodge backward.", zh: "卸势或后退闪避。" },
            type: "other",
          },
          {
            name: { en: "Gold Flash Attack", zh: "金光技能" },
            description: { en: "Low-threat gold-flash attack, almost impossible to be hit by.", zh: "威胁最低的金光攻击，几乎不可能被打中。" },
            counter: { en: "Dodge sideways when you see gold flash.", zh: "看到金光侧闪即可。" },
            type: "yellow_light",
          },
          {
            name: { en: "Jumping Sweep", zh: "跳起接横扫" },
            description: { en: "Boss leaps toward you and follows with a horizontal sweep.", zh: "跃起突进接横扫。" },
            counter: { en: "Dodge toward the boss's left side on landing.", zh: "向Boss落地左侧闪避。" },
            type: "aoe",
          },
        ],
        strategy: { en: "Entry-level boss for learning deflect mechanics. Boss punishes greedy attacks severely. Only deflect attacks you are confident about.", zh: "入门教学型BOSS，重点学习卸式节奏。贪刀惩罚极严，只卸有把握的招。" },
      },
      {
        phase: "P2",
        mechanics: [
          {
            name: { en: "Fast/Slow Blade Mix", zh: "快慢刀" },
            description: { en: "Boss alternates fast and slow timings, making deflect rhythms unreliable.", zh: "交替快慢刀节奏，卸势时机难以预判。" },
            counter: { en: "Hold block for uncertain attacks; only deflect ones you recognize.", zh: "不确定的招就防御，只卸能辨认的攻击。" },
            type: "other",
          },
          {
            name: { en: "Chaotic Cloak (Luanpifeng)", zh: "乱披风" },
            description: { en: "Multi-hit combo sequence, the core skill-check of the fight.", zh: "多段连击连招，核心技能检测。" },
            counter: { en: "Deflect with rhythmic timing (~0.5s intervals). Do NOT mash the button.", zh: "按约0.5秒节奏逐次卸势，切忌狂按。" },
            type: "red_light",
          },
          {
            name: { en: "Wind Chase / Tornado", zh: "追风击/龙卷风" },
            description: { en: "Generates small tornadoes that launch players into the air.", zh: "产生小旋风将玩家击飞。" },
            counter: { en: "After being hit by the first strike, triple-jump to cancel out of the wind field.", zh: "被第一击命中后三段跳出风场。" },
            type: "aoe",
          },
        ],
        strategy: { en: "P2 introduces fast/slow blade mix requiring memorization. Brute-force method: use Eight Directions Thunder Spear + Mo Blade charged attack to stunlock. Or summon NPC Yuan Jingang to tank.", zh: "二阶段快慢刀需背板。暴力流用八方惊雷枪+陌刀蓄力压制；也可召唤NPC袁金刚扛伤。" },
      },
    ],
    rewards: { en: "Title: One Sword Against Ten Thousand Masters, Talent challenges", zh: "称号「一剑可当万师」、天赋挑战奖励" },
    tips: { en: "Do NOT greed attacks. Prioritize deflects over pure dodging. Block as fallback for moves you can't read.", zh: "切忌贪刀。优先卸势而非纯闪避，读不懂的招就防御。" },
  },

  /* ── 2. 小十七 ── */
  {
    id: "xiao-shiqi",
    name: { en: "Xiao Shiqi", zh: "春秋别馆·小十七" },
    type: "dungeon",
    location: { en: "Hidden Dragon Abyss, Spring-Autumn Villa", zh: "春秋别馆·隐龙渊之底" },
    difficulty: 5,
    phases: [
      {
        phase: "P1",
        mechanics: [
          {
            name: { en: "Basic Slash Combo", zh: "常规挥砍连招" },
            description: { en: "Standard attack pattern to let players learn the rhythm.", zh: "基础攻击模式，让玩家熟悉节奏。" },
            counter: { en: "Dodge or deflect after observing wind-up.", zh: "观察前摇后闪避或卸势。" },
            type: "other",
          },
        ],
        strategy: { en: "P1 is straightforward, focus on learning the boss's attack rhythm.", zh: "一阶段较为基础，重点熟悉BOSS攻击节奏。" },
      },
      {
        phase: "P2",
        mechanics: [
          {
            name: { en: "Spinning Deflect + Red Throw", zh: "转圈弹反+红光投技" },
            description: { en: "Boss spins, then releases a red-light grab attack.", zh: "转圈后衔接红光投技。" },
            counter: { en: "Deflect at the blade flash moment to interrupt the throw.", zh: "刀光闪烁瞬间卸势打断投技。" },
            type: "red_light",
          },
          {
            name: { en: "Left-Hand Four-Slash", zh: "左手下压四连砍" },
            description: { en: "Boss presses blade down and slashes four times. Long gap between 3rd and 4th hit.", zh: "刀下压连砍四刀，第3次与第4次间隔较长。" },
            counter: { en: "Deflect first three quickly, then wait and deflect the slow 4th hit.", zh: "快速卸前三刀，耐心等第四刀再卸。" },
            type: "red_light",
          },
          {
            name: { en: "Aerial Slam + Horizontal Slashes", zh: "飞天下砸+横向挥砍" },
            description: { en: "Boss leaps up and slams down, followed by two horizontal slashes.", zh: "跃起下砸后接两次横斩。" },
            counter: { en: "Deflect while boss is airborne, or dodge far away.", zh: "空中时即可卸势，或远离闪避。" },
            type: "aoe",
          },
          {
            name: { en: "Miasma Blade (One-time Instant Kill)", zh: "瘴气附刀（秒杀技）" },
            description: { en: "Boss coats blade with miasma at 50% HP. CANNOT be deflected. One-hit kill. Only used once.", zh: "血量过半时刀附瘴气，不可卸势，碰即秒杀，全场仅用一次。" },
            counter: { en: "STAY AWAY when you see miasma on the blade. It disappears after one use.", zh: "看到刀上瘴气必须远离，使用一次后消失可正常输出。" },
            type: "other",
          },
          {
            name: { en: "Gold Flash Attack", zh: "金光技能（不可弹反）" },
            description: { en: "Gold-flash attacks between deflectable ones. Cannot be parried.", zh: "穿插在可弹反技能之间的金光攻击，不可弹反。" },
            counter: { en: "Dodge away when you see gold glow, do NOT attempt to deflect.", zh: "看到金光立刻远离，不要尝试卸势。" },
            type: "yellow_light",
          },
        ],
        strategy: { en: "Core loop: observe boss action → judge if deflectable → deflect or dodge → exploit openings. Never greed. The miasma blade is a one-time instant kill — run away when you see it.", zh: "核心循环：观察动作→判断是否可弹反→卸势或闪避→找空隙输出。切忌贪刀。瘴气刀碰即秒杀，必须远离。" },
      },
    ],
    rewards: { en: "Mental Art: Returning Swallow Scripture (归燕经)", zh: "心法「归燕经」" },
    tips: { en: "Distinguish deflectable attacks (normal/red flash) from non-deflectable ones (gold flash). The miasma blade is used only once — survive it and the rest is manageable.", zh: "区分可弹反（普通/红光）与不可弹反（金光）。瘴气刀只放一次，躲过就好打。" },
  },

  /* ── 3. 寻心 ── */
  {
    id: "xunxin",
    name: { en: "Xunxin", zh: "溺水岸·寻心" },
    type: "story",
    location: { en: "Weak Water Bank, Ancient Well Depths", zh: "弱水岸·古井深处" },
    difficulty: 6,
    phases: [
      {
        phase: "P1",
        mechanics: [
          {
            name: { en: "Fireball (Three Sparks)", zh: "火球术（三点火光）" },
            description: { en: "Three sparks appear above boss's head, then fires a fireball.", zh: "头上出现三点火光后释放火球。" },
            counter: { en: "Dodge sideways immediately when you see three sparks. Do NOT backpedal.", zh: "看到三点火光立刻侧闪，不要直线后退。" },
            type: "yellow_light",
          },
          {
            name: { en: "Fast Melee Combo", zh: "快速近战连招" },
            description: { en: "Extremely fast attacks with very short recovery. Hard to find counter-attack windows.", zh: "攻速极快、硬直极短，很难找到反击窗口。" },
            counter: { en: "Deflect precisely or chain-dodge. Use umbrella weapon for crowd control.", zh: "精准卸势或连续闪避。伞类武器可压制控场。" },
            type: "other",
          },
        ],
        strategy: { en: "Xunxin's attack speed is extremely fast with very short recovery. Do NOT greed — strike once or twice then retreat. Umbrella weapon can knock her back and limit her attacks.", zh: "寻心攻速极快、硬直极短。打一两下就撤，不要贪刀。伞武器大范围攻击可将其打飞控住。" },
      },
      {
        phase: "P2",
        mechanics: [
          {
            name: { en: "Lightning Ultimate (Instant Kill)", zh: "闪电大招（秒杀级）" },
            description: { en: "After losing one health bar, boss charges a massive lightning attack. One-hit kill.", zh: "打掉一管血后蓄力释放大范围闪电，直接秒杀。" },
            counter: { en: "Find cover (obstacles/walls) and crouch behind them until lightning passes.", zh: "立刻找掩体（障碍物/墙壁）蹲下，等闪电结束再出来。" },
            type: "aoe",
          },
        ],
        strategy: { en: "After depleting one health bar, IMMEDIATELY prepare for the lightning ultimate. Find cover and wait. This is the single biggest challenge of the fight.", zh: "打掉一管血后立刻警惕闪电大招，马上找掩体躲避。这是整场战斗最大难点。" },
      },
    ],
    rewards: { en: "Posture 'Si Fang Ge' (flute), Character re-customization unlock, Weak Water Bank garrison", zh: "笛子姿态「思芳歌」、解锁重新捏脸、弱水岸镇守" },
    tips: { en: "Recommended weapon: Spear (long range, forgiving deflect) or Umbrella (crowd control). Watch for the three-fire-spark tell and side-dodge immediately.", zh: "推荐武器：长枪（弹反判定大、容错高）或伞（控场压制）。时刻注意头上三点火光前摇。" },
  },

  /* ── 4. 叶万山 ── */
  {
    id: "ye-wanshan",
    name: { en: "Ye Wanshan", zh: "菩提苦海·叶万山" },
    type: "story",
    location: { en: "Bodhi Bitter Sea, Qinghe", zh: "菩提苦海，清河" },
    difficulty: 7,
    phases: [
      {
        phase: "P1",
        mechanics: [
          {
            name: { en: "Left-Hand Upward Slash", zh: "左手从下往上挥" },
            description: { en: "Single attack, deflect once.", zh: "单次攻击，卸一次即可。" },
            counter: { en: "Deflect once.", zh: "卸势一次。" },
            type: "red_light",
          },
          {
            name: { en: "Left-Hand Downward 4-Hit", zh: "左手从上往下四连" },
            description: { en: "Continuous 4-hit combo after overhead swing.", zh: "从上往下挥后连续四击。" },
            counter: { en: "Deflect 4 times in succession.", zh: "连续卸势四次。" },
            type: "red_light",
          },
          {
            name: { en: "Red Blade Wide Sweep", zh: "刀红状态大刀横扫" },
            description: { en: "Blade glows red, long-range sweeping attack with extreme damage.", zh: "大刀发红光，远距离横扫，伤害极高。" },
            counter: { en: "Dodge away, do NOT tank this.", zh: "走位闪开，不可硬扛。" },
            type: "aoe",
          },
          {
            name: { en: "Horse Charge", zh: "战马冲锋" },
            description: { en: "Mounted charge attack. Can attack the horse to dismount the boss.", zh: "骑马冲锋，可攻击战马使其摔落。" },
            counter: { en: "Attack the horse to knock boss off, dealing massive damage.", zh: "攻击战马让BOSS落马，大幅削减血量。" },
            type: "other",
          },
        ],
        strategy: { en: "Wait for boss to approach (以静制动), then deflect and counter. Watch the left-hand weapon direction to predict attack pattern. Close-range is boss's weakness — he excels at long-range.", zh: "以静制动，等BOSS过来再卸势反击。盯住左手武器方向判断攻击模式。近身作战是BOSS弱点。" },
      },
      {
        phase: "P2",
        mechanics: [
          {
            name: { en: "Spear Throw + Meteor Crash", zh: "投掷长枪+流星坠火" },
            description: { en: "Boss throws spear then follows with meteor crash. Fire damage added to all attacks.", zh: "投枪后接流星坠火，所有攻击附加火属性伤害。" },
            counter: { en: "Wait until boss lands before attacking. Do NOT charge prematurely.", zh: "等叶万山落地后再攻击，不要提前蓄力。" },
            type: "red_light",
          },
          {
            name: { en: "Red Light Charge Slash", zh: "红光冲刺挥刀" },
            description: { en: "Red-light charge attack.", zh: "红光提示冲锋挥刀。" },
            counter: { en: "Deflect the slash when boss reaches you.", zh: "冲锋挥刀时卸势更有效。" },
            type: "red_light",
          },
          {
            name: { en: "Enrage Ultimate (Instant Kill)", zh: "二段变身开大（秒杀）" },
            description: { en: "Two-stage instant-kill attack. CANNOT be deflected.", zh: "两段均为秒杀技，不可卸势。" },
            counter: { en: "Run far away immediately! Switch to spear for ranged attacks.", zh: "必须跑远闪避！切换长枪远程输出。" },
            type: "other",
          },
        ],
        strategy: { en: "Focus on ranged damage during enrage. Switch to spear when boss uses ultimate. Return to close-range for deflect counters during normal attacks. Delay execution for max damage.", zh: "变身开大期间远程消耗，跑远切长枪。常规攻击时近身卸势。处决尽量拖到最后时刻释放最大化输出。" },
      },
    ],
    rewards: { en: "Secret Art: Meteor Crash (流星坠火), Mental Art 'Angry Horse Slash' (怒斩马)", zh: "奇术「流星坠火」、心法「怒斩马」" },
    tips: { en: "Use Quench Poison (淬毒散) for continuous Qi drain. Jiju Nine Swords' bleeding build is highly efficient. Boss has instant-kill moves in P2 — survival first.", zh: "淬毒散持续削减真气。积矩九剑流血套路效率更高。二阶段有秒杀技，优先保命。" },
  },

  /* ── 5. 田英 ── */
  {
    id: "tian-ying",
    name: { en: "Tian Ying (Miaoshan)", zh: "佛光顶·田英（妙善）" },
    type: "story",
    location: { en: "Buddha Light Peak", zh: "佛光顶" },
    difficulty: 9,
    phases: [
      {
        phase: "P1",
        mechanics: [
          {
            name: { en: "Yellow Sword Qi", zh: "黄色剑气" },
            description: { en: "Instant staff-sweep releasing a yellow shockwave. Wind-up: hand pulls back horizontally.", zh: "挥杖瞬间释放黄色剑气冲击波，前摇：手横摆后拉。" },
            counter: { en: "Deflect on the wind-up, or jump to avoid shockwave.", zh: "看到起手立刻卸势，或跳起躲避冲击波。" },
            type: "yellow_light",
          },
          {
            name: { en: "Staff Ground Pound", zh: "法杖敲地板喷气" },
            description: { en: "Staff strikes ground producing air blast.", zh: "法杖敲击地板产生喷气冲击。" },
            counter: { en: "Count one beat after staff strikes, then deflect.", zh: "敲杖后默数一拍再卸势。" },
            type: "other",
          },
        ],
        strategy: { en: "P1 is the 'free phase' — boss is going easy on you. Maintain distance with fan attacks, or dual blades for close poke. Deflect once per action then immediately dodge back.", zh: "一阶段是「白给阶段」，田英在让着你。用扇子远程消耗或双刀近身偷输出。看到动作先卸一次然后立刻后闪。" },
      },
      {
        phase: "P2",
        mechanics: [
          {
            name: { en: "Dash Kick", zh: "冲刺一脚" },
            description: { en: "Boss crouches and rushes in with a kick.", zh: "下蹲冲过来踢一脚。" },
            counter: { en: "Stay back so the kick misses, then move in for damage after.", zh: "保持后退让踢不到，踢完后上去偷输出。" },
            type: "other",
          },
          {
            name: { en: "Four-Kick Combo", zh: "连续四连脚" },
            description: { en: "Rapid four consecutive kicks.", zh: "快速连续四脚踢击。" },
            counter: { en: "Back away from first three, deflect or dodge the fourth.", zh: "后退避开前三脚，第四脚时闪避或卸势。" },
            type: "red_light",
          },
          {
            name: { en: "Giant Buddha Summon", zh: "召唤巨型佛像" },
            description: { en: "Boss flies to center and summons a giant Buddha statue that attacks the arena.", zh: "飞到场地中央召唤巨型佛像攻击全场。" },
            counter: { en: "Run to the far left edge — that area is safe from Buddha. Use bow for ranged damage.", zh: "跑到场地最左边安全区，用弓箭远程偷伤害。" },
            type: "aoe",
          },
          {
            name: { en: "Stone Statue Summon", zh: "召唤石像" },
            description: { en: "Summons thousand-hand stone statue releasing palm wind attacks.", zh: "召唤千手石像释放连掌风攻击。" },
            counter: { en: "Immediately dodge sideways and create distance. Deflecting the rhythm is very hard.", zh: "石像出现立刻侧闪拉开距离，卸势节奏难抓。" },
            type: "other",
          },
        ],
        strategy: { en: "Core: lock boss and retreat, don't go to corners. Fan special skill launches boss into air for combo. Use Lingyun Step + Weituo Right Method for aerial control chain.", zh: "核心：锁定Boss往后退，不要退到四角。扇子特殊技击飞田英接连招。凌云踏+韦陀正法组成空中控制链。" },
      },
      {
        phase: "P3",
        mechanics: [
          {
            name: { en: "Teleport Thrust", zh: "瞬身突刺（闪现刺）" },
            description: { en: "Boss appears every ~1 second, the 4th appearance deals heavy damage + kick.", zh: "每约一秒出现一次，第四次对玩家造成高额伤害并接踢。" },
            counter: { en: "Count 1-2-3-4, deflect the 4th strike. Flash dodge the rest.", zh: "默念1234，卸第四次的突刺。其余直接闪避。" },
            type: "red_light",
          },
          {
            name: { en: "Three Phantoms (One Breath Three Purities)", zh: "一气化三清（分身）" },
            description: { en: "Three clones appear on the field while the real body hides and ambushes. The core challenge of P3.", zh: "场地出现三个分身，真身隐藏偷袭。P3最大难点。" },
            counter: { en: "Run to map edge, wait for real body to attack first, then circle-strafe. Clones disappear after ~15 seconds.", zh: "跑向地图边缘等真身攻击，然后绕圈跑。十几秒后分身自动消失。" },
            type: "other",
          },
          {
            name: { en: "Clone Chain Slash", zh: "分身连环斩" },
            description: { en: "Clones perform chain slashes. Parrying makes them disappear.", zh: "分身进行连环斩击，弹反可消除。" },
            counter: { en: "Deflect a few times and clones will vanish. Keep moving.", zh: "弹反几次分身会消失，保持移动。" },
            type: "red_light",
          },
        ],
        strategy: { en: "Hardest phase. Do NOT engage clones head-on — circle-run and wait for them to despawn. Fan special skill + Lingyun Step control chain prevents boss from casting teleport. Alternatively, never attack and use ranged sword Qi to avoid triggering clones entirely.", zh: "最难点。不要硬刚分身——绕圈跑等消失。扇子特殊技+凌云踏控制链可阻止瞬身。或者不主动攻击、用远程剑气消耗，就不会触发分身。" },
      },
    ],
    rewards: { en: "40 Changming Jade, 10 Qinghe Exploration, 5000 EXP, 5000 Zhou Coins", zh: "40长鸣玉、10清河探索度、5000经验、5000周元通宝" },
    tips: { en: "Must unlock 'Shou Gu Yuan' talent (prevents fatal blow, 2min CD). Bind Golden Jade Hand to easy hotkey. Fan special skill is the MVP — launch + return seals CD.", zh: "必须解锁「守固元」天赋（免死，2分钟CD）。金玉手绑到顺手按键。扇子特殊技击飞+回位封CD是神器。" },
  },

  /* ── 6. 千夜 ── */
  {
    id: "qianye",
    name: { en: "Qianye", zh: "不羡仙·千夜" },
    type: "story",
    location: { en: "Buxianxian Underground Palace", zh: "不羡仙·地宫深处" },
    difficulty: 9,
    phases: [
      {
        phase: "P1",
        mechanics: [
          {
            name: { en: "Opening Dash", zh: "开场突袭" },
            description: { en: "Fight opens with a sudden dash attack.", zh: "以突进攻击开场。" },
            counter: { en: "Dodge after hearing the 'ding' sound. Don't rush in after her blade flash.", zh: "听到「叮」声后闪避，她出刀光后不要冲上去。" },
            type: "other",
          },
          {
            name: { en: "Five-Hit Red Flash Combo", zh: "五连返红光" },
            description: { en: "Continuous five-hit red-glowing combo. The raised-weapon red flash MUST be deflected.", zh: "连续五次命中的红光连击，举武器的红光必须弹反。" },
            counter: { en: "Successfully deflect the red flash hit, or suffer all five strikes for massive damage.", zh: "成功弹反红光攻击，否则承受全部五次打击造成大量伤害。" },
            type: "red_light",
          },
        ],
        strategy: { en: "Use Sword for mobility. Deplete her resilience bar through deflects and dodges, then execute when she collapses. Practice until 90%+ clear rate before moving on.", zh: "使用剑保持机动性。通过卸势和闪避消耗韧性条，倒地时处决。练习到90%以上稳定通过再进入下阶段。" },
      },
      {
        phase: "P2",
        mechanics: [
          {
            name: { en: "Gold-to-Red Combo", zh: "金光转红光连击" },
            description: { en: "Combo transitions from gold to red glow. The red portion is near-instant death.", zh: "连招从金光转为红光，红光部分近乎即死。" },
            counter: { en: "Retreat immediately when you see gold-to-red transition.", zh: "看到金光转红光立刻撤退。" },
            type: "red_light",
          },
          {
            name: { en: "Ice Element Attacks", zh: "冰属性攻击" },
            description: { en: "New ice-element attacks added in demon form. Scythe grows larger.", zh: "恶魔形态新增冰属性攻击，镰刀变大。" },
            counter: { en: "Use Fan weapon for sustained healing and survival.", zh: "全程使用扇子保持治疗和生存。" },
            type: "other",
          },
        ],
        strategy: { en: "Switch to Fan weapon entirely. Heal + heavy attack cycle to stay at full HP. Only switch to main weapon when boss is staggered and your HP is healthy. Boss won't attack when you keep distance.", zh: "全程收起攻击武器用扇子。技能+重击循环保持满血。仅Boss虚弱且自身满血时切主武器连招。保持距离时Boss不会主动攻击。" },
      },
      {
        phase: "P3",
        mechanics: [
          {
            name: { en: "Double Ground Slam", zh: "双跳砸地" },
            description: { en: "Boss jumps and slams ground twice at P3 entry. Applies continuous damage effect.", zh: "进入三阶段时跳砸两次，附加持续掉血效果。" },
            counter: { en: "Use Lingyun Step on the SECOND jump to prevent the continuous damage.", zh: "第二次跳跃时使用凌云踏奇术防止持续伤害。" },
            type: "aoe",
          },
          {
            name: { en: "Lin Zhen Qi Bu (Triple Deflect)", zh: "临阵起步（三连弹反）" },
            description: { en: "Requires three consecutive precise deflects. Boss disappears between sequences.", zh: "需要连续两次精准弹反，Boss消失后再重复，共需三次。" },
            counter: { en: "Two deflects → boss disappears → reappears → repeat for total of three successful deflects.", zh: "两次弹反→Boss消失→再次出现→重复，共三次成功弹反。" },
            type: "red_light",
          },
          {
            name: { en: "Ground Slam + Six Sword Qi", zh: "砸地+六道剑气" },
            description: { en: "Notorious one-shot combo. Ground slam followed by 6 tracking sword Qi.", zh: "臭名昭著的秒杀连招，砸地后接6道追踪剑气。" },
            counter: { en: "Strict positioning and timing required. In emergency, press H to open menu and pause fight.", zh: "需要严格定位和计时。紧急时可按H打开菜单暂停战斗。" },
            type: "other",
          },
        ],
        strategy: { en: "Spam deflect in P3 — it has surprisingly high success rate. Use Golden Jade Hand for QTEs. Emergency exploit: press H to pause, wait 1 min for boss to use ultimate and revert to P2.", zh: "三阶段狂按卸势反而成功率高。金玉手奇术必备。紧急漏洞：按H暂停等1分钟，Boss会放大招后退回二阶段。" },
      },
    ],
    rewards: { en: "Story progression: Buxianxian main quest chain completion", zh: "推进不羡仙主线任务链" },
    tips: { en: "Do NOT challenge below level 41. Unlock Shou Gu Yuan talent (free revive). H-pause exploit: open character menu to pause combat, wait 2min for Shou Gu Yuan CD to reset.", zh: "等级低于41不要挑战。必须解锁守固元天赋。H暂停漏洞：打开角色菜单暂停战斗，等2分钟守固元CD重置。" },
  },

  /* ── 7. 容鸢 ── */
  {
    id: "rong-yuan",
    name: { en: "Rong Yuan", zh: "金明池·容鸢" },
    type: "dungeon",
    location: { en: "Yunmeng Jinming Pool (10-Man Raid)", zh: "云梦金明池（十人团本）" },
    difficulty: 8,
    phases: [
      {
        phase: "P1",
        mechanics: [
          {
            name: { en: "Fast Combo Attacks", zh: "高速连招" },
            description: { en: "Rong Yuan attacks fast with high combo continuity, but patterns are predictable.", zh: "攻击频率高但出招模式可预判。" },
            counter: { en: "Watch wind-up animations and use deflect to interrupt combos.", zh: "观察前摇动画，用卸势打断连招。" },
            type: "other",
          },
        ],
        strategy: { en: "Focus on deflect and self-healing. Use Fan for sustained combat. Whittle down HP bar to trigger Phase 2.", zh: "核心策略是卸势+自疗。用扇子保持续航，逐渐消耗血量进入二阶段。" },
      },
      {
        phase: "P2",
        mechanics: [
          {
            name: { en: "Wooden Kite Summon", zh: "召唤木鸢" },
            description: { en: "Summons a Wooden Kite that drops explosive barrels and attacks to disrupt rhythm.", zh: "召唤木鸢投放炸药桶并干扰战斗节奏。" },
            counter: { en: "Ignore the Kite, stay locked on Rong Yuan. Kite attacks are low damage.", zh: "无视木鸢，锁定容鸢。木鸢伤害不高。" },
            type: "other",
          },
          {
            name: { en: "Devastating Chain Explosion", zh: "毁灭连爆" },
            description: { en: "Kite drops explosive barrels that chain-explode for arena-wide massive damage.", zh: "木鸢投放炸药桶引发连锁爆炸，全场大范围伤害。" },
            counter: { en: "Carry barrels apart from each other before the Kite detonates them.", zh: "在木鸢引爆前将炸药桶搬开分散。" },
            type: "aoe",
          },
          {
            name: { en: "Sea of Fire", zh: "火海" },
            description: { en: "Kite moves to arena edge and releases massive fire zone while dropping barrels.", zh: "木鸢移至场地边缘释放大火海并投放炸药桶。" },
            counter: { en: "Carry barrels out of fire zone to remove danger markers. Evacuate fire area.", zh: "将桶搬出火区消除危险标记，快速撤离火海范围。" },
            type: "aoe",
          },
          {
            name: { en: "Severance (Blade Clash)", zh: "断绝（拼刀）" },
            description: { en: "Knocks primary aggro target to center, initiates blade clash. Shield timer on HP bar — if not broken, triggers arena-wide damage.", zh: "将仇恨目标击飞至中心拼刀，血条出现护盾倒计时，未打破则全场伤害。" },
            counter: { en: "All players focus fire to break shield before countdown ends.", zh: "全员集火在倒计时结束前打破护盾。" },
            type: "red_light",
          },
          {
            name: { en: "Burning Blade (Enrage <20%)", zh: "燃烧之刃（20%血量以下狂暴）" },
            description: { en: "All attacks gain fire damage, power increases, can detonate barrels.", zh: "所有攻击附加火属性伤害，攻击力提升，可引爆炸药桶。" },
            counter: { en: "Burn down as fast as possible. Avoid all barrel zones.", zh: "尽快击杀，远离所有炸药桶区域。" },
            type: "buff",
          },
        ],
        strategy: { en: "Barrel management is the single most important mechanic. Designated players move barrels apart. During Severance, everyone burst damage to break shield. At sub-20%, avoid barrels and maximize DPS.", zh: "炸药桶管理是最重要的机制。指定玩家负责搬桶。断绝拼刀时全员爆发破盾。20%以下远离桶区全力输出。" },
      },
    ],
    rewards: { en: "Raid loot: gear, materials, Jinming Pool quest progression", zh: "团本掉落装备、材料，推进金明池剧情" },
    tips: { en: "Recommended weapon: Fan (beginner-friendly) or Long Spear (stable range). Apply Quench Fire for armor penetration and Quench Poison for DOT.", zh: "推荐武器：扇子（容错高）或长枪（稳定范围）。淬火增穿甲，淬毒持续伤害。" },
  },

  /* ── 8. 郑鄂 ── */
  {
    id: "zheng-e",
    name: { en: "Zheng E", zh: "郑鄂" },
    type: "story",
    location: { en: "Changping Warehouse, Kaifeng", zh: "开封·常平仓" },
    difficulty: 7,
    phases: [
      {
        phase: "P1",
        mechanics: [
          {
            name: { en: "Two-Stage Fan Wind + Gold Wind Blade", zh: "两段扇风+金光风刃" },
            description: { en: "Opens with two fan strikes followed by a fixed gold wind blade.", zh: "两段扇风后衔接固定金光风刃。" },
            counter: { en: "Keep distance, avoid wind blade path.", zh: "保持距离，远离风刃路径。" },
            type: "yellow_light",
          },
          {
            name: { en: "Charge + Ground Spikes", zh: "突进+地面尖刺" },
            description: { en: "Charge attack that ALWAYS spawns ground spikes afterward.", zh: "突进后必定出现地面尖刺。" },
            counter: { en: "Use Golden Jade Hand for control after charge, then damage.", zh: "突进后用金玉手控制接输出。" },
            type: "red_light",
          },
          {
            name: { en: "Snowflake Retreat + Fast Wind Blade", zh: "雪花后撤+极速风刃" },
            description: { en: "Boss does snowflake-pattern retreat then crouches to fire fast wind blade.", zh: "雪花图案后撤后蹲下发射极速风刃。" },
            counter: { en: "Watch the wind-up animation and deflect.", zh: "观察起手动作卸势。" },
            type: "other",
          },
        ],
        strategy: { en: "Maintain ~3 body-lengths distance. Boss uses fan as main weapon in P1, relatively easy to control. Look for openings after his combos.", zh: "保持约三个身位距离。一阶段用扇子，相对容易控制。在连招间隙找输出窗口。" },
      },
      {
        phase: "P2",
        mechanics: [
          {
            name: { en: "2x Gold Ranged + 1x Red Ranged", zh: "两金光+一红光远程" },
            description: { en: "Two gold-flash projectiles followed by one red-flash. The red one leads to a fixed three-hit combo.", zh: "两次金光弹道后一次红光，红光后接固定三连击。" },
            counter: { en: "Side-dodge gold projectiles. Walk forward for red, deflect the three-hit combo.", zh: "金光侧闪，红光向前走准备卸三连击。" },
            type: "red_light",
          },
          {
            name: { en: "Ice Spikes + Three Gold Flashes", zh: "地面冰刺+三段金光" },
            description: { en: "Ground ice spikes appear, followed by three gold flash attacks.", zh: "地面冰刺后接三段金光攻击。" },
            counter: { en: "Save enough stamina to run through the attacks.", zh: "保留足够耐力跑动走位穿过攻击。" },
            type: "yellow_light",
          },
        ],
        strategy: { en: "Ice spikes appear on the ground affecting movement. Save stamina for three-gold sequences. After boss finishes enrage, he enters a long vulnerable state — your golden damage window.", zh: "地面出现冰刺影响移动。保留耐力应对三段金光。Boss狂暴结束后进入漫长虚弱状态，这是黄金输出窗口。" },
      },
      {
        phase: "P3",
        mechanics: [
          {
            name: { en: "Enrage Mode", zh: "狂暴暴走" },
            description: { en: "Boss attack frequency and damage spike dramatically. Near one-shot level attacks.", zh: "攻击频率和伤害大幅飙升，接近一击必杀。" },
            counter: { en: "Endure and dodge everything. After enrage ends, boss enters extended vulnerable state.", zh: "忍耐闪避所有攻击。狂暴结束后Boss进入长时间虚弱状态。" },
            type: "buff",
          },
          {
            name: { en: "Spear Throw Final Attack", zh: "长枪投掷" },
            description: { en: "Throws long spear in a line. One direction sustained attack.", zh: "向一个方向持续投掷长枪。" },
            counter: { en: "Walk in the OPPOSITE direction continuously. Maintain 3+ body-lengths distance.", zh: "向反方向持续走动，保持至少三个身位距离。" },
            type: "aoe",
          },
        ],
        strategy: { en: "Survive the enrage. When boss's energy depletes, he enters long vulnerability — unleash everything. Retreat after burst to avoid counter-attack when he recovers.", zh: "熬过狂暴期。Boss能量耗尽后进入长时间虚弱，全力输出。爆发后立刻撤退防止Boss恢复反击。" },
      },
    ],
    rewards: { en: "Mental Art: Thousand Silk Gu (千丝蛊), Achievement: Peace Under Heaven (天下常平)", zh: "心法「千丝蛊」、成就「天下常平」" },
    tips: { en: "Speedrun build: Zhanxue Blade + Qingshan Brush can one-phase the boss in ~1m49s. Golden Jade Hand for control after charges is highly effective.", zh: "速通流：斩雪刀法+青山执笔可1分49秒一轮击杀。突进后金玉手控制非常有效。" },
  },

  /* ── 9. 伊刀 ── */
  {
    id: "yi-dao",
    name: { en: "Yi Dao", zh: "伊刀" },
    type: "world",
    location: { en: "Buxianxian Dream World, Qinghe", zh: "不羡仙·梦中世界" },
    difficulty: 6,
    phases: [
      {
        phase: "P1",
        mechanics: [
          {
            name: { en: "Large AoE (Cannot Deflect)", zh: "大范围持续伤害（不可卸势）" },
            description: { en: "First attack cannot be deflected. Deals high sustained damage over a large area.", zh: "第一段攻击无法卸势，大范围持续高伤害。" },
            counter: { en: "Must dodge through positioning. Do NOT tank it.", zh: "必须走位闪避，不可硬接。" },
            type: "aoe",
          },
          {
            name: { en: "Combo Chain", zh: "连击组合" },
            description: { en: "Very aggressive attack combos with high damage.", zh: "攻击欲望极强，技能多为高伤害连击。" },
            counter: { en: "Maintain distance, don't greed for attacks.", zh: "保持距离，不要贪刀。" },
            type: "other",
          },
        ],
        strategy: { en: "Keep distance with Fan, sustain health while finding deflect opportunities. Wait for boss to exhaust (气竭) then burst with melee weapon.", zh: "用扇子保持距离远程消耗，持续回血找卸势机会。等Boss气竭后切近战武器全力爆发。" },
      },
      {
        phase: "P2",
        mechanics: [
          {
            name: { en: "Red Flash High Damage", zh: "红色特效高伤害" },
            description: { en: "Red-effect skill dealing ~30% HP on failed dodge.", zh: "红色特效高伤害技能，闪避失败直接损失约30%血量。" },
            counter: { en: "Must dodge precisely. Observe red glow and react early.", zh: "必须精准闪避，观察红光特效提前反应。" },
            type: "red_light",
          },
          {
            name: { en: "Five White Dots → Zero-Frame Gold Flash", zh: "五连白点→零帧起手黄光" },
            description: { en: "Five white-dot hits (~500-1000ms intervals) followed by zero-frame gold attack.", zh: "五连白点（间隔约500-1000ms）接零帧起手黄光攻击。" },
            counter: { en: "Practice the rhythm. Don't dodge the gold flash immediately — wait until it's about to land.", zh: "多加练习节奏。黄光亮起不要立刻闪，等快落下时再闪。" },
            type: "yellow_light",
          },
          {
            name: { en: "Aerial Slam", zh: "飞起下砸" },
            description: { en: "Boss flies up and slams down for extreme damage.", zh: "飞起后下砸，伤害极高。" },
            counter: { en: "Dodge away. Good time to apply shield.", zh: "躲开。上盾的好时机。" },
            type: "aoe",
          },
        ],
        strategy: { en: "Key: maintain shield when available. Use Qilong Huima (Dragon Return) for high single-target damage during openings. Yi Dao does NOT disable healing — more forgiving than other bosses.", zh: "关键：尽量保持有盾状态。骑龙回马奇术在窗口期打出高额伤害。伊刀不禁疗，容错率比其他Boss高。" },
      },
    ],
    rewards: { en: "Dream Buxianxian story progression, Yi Dao becomes summonable ally for future boss fights", zh: "梦中不羡仙剧情推进，伊刀成为后续Boss战可召唤助战伙伴" },
    tips: { en: "Fan for sustained ranged poke + Mo Blade for burst during openings. Qilong Huima is the strongest single-target secret art for this fight. Enable auto Tian Gong Kai Wu in settings.", zh: "扇子远程拉距+陌刀窗口期爆发。骑龙回马是此战最强单体奇术。设置中开启自动天工开物。" },
  },

  /* ── 10. 舞狮兄弟 ── */
  {
    id: "lion-dance-brothers",
    name: { en: "Lion Dance Brothers", zh: "舞狮兄弟" },
    type: "dungeon",
    location: { en: "Kaifeng (10-Man Raid)", zh: "开封（十人团本）" },
    difficulty: 5,
    phases: [
      {
        phase: "P1",
        mechanics: [
          {
            name: { en: "Lion Leap Spring Greeting", zh: "狮跃迎春" },
            description: { en: "Randomly marks players with yellow circles, applied to two players sequentially.", zh: "随机标记玩家黄色圆圈，通常先后标记两人。" },
            counter: { en: "Spread apart and dodge/evade.", zh: "分散站位并闪避。" },
            type: "yellow_light",
          },
          {
            name: { en: "Ascending the Heights (Pole Mechanic)", zh: "登高望远（踩高跷）" },
            description: { en: "Wooden poles appear connected by yellow lines. Boss dances across them. If boss completes all poles: massive AoE team wipe.", zh: "木桩以黄线连接，Boss依次踩桩。全部踩完则全场AOE团灭。" },
            counter: { en: "Focus fire on the NEAREST pole. If boss steps on empty air, it falls and becomes vulnerable — burst damage window.", zh: "集火最近的木桩。Boss踩空则跌落进入虚弱状态，全员爆发输出。" },
            type: "other",
          },
          {
            name: { en: "Ball Mechanic (Cai Qing)", zh: "彩球机制" },
            description: { en: "A ball spawns. Pick up with 'Star-Grasping Moon-Seizing' skill. Progress bar fills — throw ball to edge before full to delay enrage.", zh: "球刷新后用「摄星拿月」拾取。进度条快满时扔到场地边缘重置。" },
            counter: { en: "Throw ball to arena edge before progress fills. Pick up just before countdown expires for max delay.", zh: "进度满前扔到边缘，等倒计时快结束时再捡起最大化延迟狂暴。" },
            type: "other",
          },
          {
            name: { en: "Bronze Shadow Hex (Coin Mechanic)", zh: "铜影降蛊（铜钱机制）" },
            description: { en: "Giant copper coin appears above arena center. Must shoot it down with bow.", zh: "场地中央出现大铜钱，必须用弓箭射落。" },
            counter: { en: "All non-healers immediately switch to bow and shoot the coin. Team stacks together for healing.", zh: "所有非治疗立刻切弓箭射铜钱。团队集合方便治疗覆盖。" },
            type: "other",
          },
        ],
        strategy: { en: "Ball management is the key to the entire fight. Always ensure someone holds the ball. Two major wipe points: pole destruction and coin shooting. Communication is essential.", zh: "彩球管理是整场战斗的关键。必须始终有人持球。两大灭团点：毁桩和射铜钱，必须沟通到位。" },
      },
      {
        phase: "P2 (Enrage)",
        mechanics: [
          {
            name: { en: "Overwhelming Spirit", zh: "气盖青云" },
            description: { en: "All players enter red circle and must parry together. Successful party parry reduces boss stamina.", zh: "全员进入红圈共同弹反。成功弹反大幅削减Boss体力。" },
            counter: { en: "Successful party-wide parry massively reduces boss stamina bar.", zh: "全员成功弹反大幅削减Boss体力条。" },
            type: "red_light",
          },
          {
            name: { en: "Blossoms Everywhere", zh: "遍地生花" },
            description: { en: "Multiple red circles appear. Each player stands in one and prepares to parry.", zh: "多个红圈出现，每人站一个准备弹反。" },
            counter: { en: "Successful parries greatly reduce boss stamina. Unlock camera when boss jumps airborne.", zh: "成功弹反大幅削减Boss体力。Boss跳空中时解锁镜头。" },
            type: "aoe",
          },
          {
            name: { en: "Firecracker Salvo", zh: "爆竹声声" },
            description: { en: "Yellow circles appear on multiple players. Overlapping = team wipe.", zh: "多名玩家头上出现黄圈，重叠即灭团。" },
            counter: { en: "Spread out immediately.", zh: "立刻分散。" },
            type: "yellow_light",
          },
        ],
        strategy: { en: "Focus on parrying Overwhelming Spirit and Blossoms Everywhere to drain boss stamina bar and end enrage. Healer priority: keep ball holder alive at all costs.", zh: "集中弹反气盖青云和遍地生花削减Boss体力条结束狂暴。治疗优先保证持球者存活。" },
      },
    ],
    rewards: { en: "Lion Dance Brothers portrait and badge, Talent unlocks (grab 3 balls + throw 3 balls)", zh: "舞狮兄弟头像和徽章、天赋解锁（抓3球+扔3球）" },
    tips: { en: "Bring 'Star-Grasping Moon-Seizing' skill (mandatory). Unlock camera when boss goes airborne. Safe-distance strategy works for Bath of Blood difficulty.", zh: "必带「摄星拿月」奇术。Boss跳空时解锁镜头。浴血难度可全程安全距离流打法。" },
  },

  /* ── 11. 睡道人 ── */
  {
    id: "sleeping-daoist",
    name: { en: "Sleeping Daoist", zh: "睡道人" },
    type: "dungeon",
    location: { en: "Biquan Mountain / Yunmeng Jinming Pool (10-Man)", zh: "璧泉山 / 云梦金明池（十人本）" },
    difficulty: 7,
    phases: [
      {
        phase: "P1",
        mechanics: [
          {
            name: { en: "Qi Orbs (4-Shot Frontal)", zh: "气弹（正面4发）" },
            description: { en: "4 qi orbs fired from front at steady rhythm.", zh: "正面发射4发匀速气弹。" },
            counter: { en: "Deflect at steady rhythm.", zh: "稳定节奏连振即可。" },
            type: "other",
          },
          {
            name: { en: "Variable-Speed Qi Orbs (Side)", zh: "变速气弹（两侧）" },
            description: { en: "Qi orbs from sides with speed variation on 2nd/3rd shots. Usually followed by red-light whisk sweep.", zh: "两侧飞来，第2、3发存在变速。之后大概率接红光拂尘横扫。" },
            counter: { en: "Deflect variable-speed orbs, then wait briefly and deflect the red-light whisk.", zh: "振完变速弹后稍等再振红光拂尘。" },
            type: "red_light",
          },
          {
            name: { en: "Six Rocks", zh: "石块（6发）" },
            description: { en: "Always 6 rocks. Rhythm: fast 4 → pause → fast 2. Main window for depleting boss Qi bar.", zh: "必定6发。节奏：快4连振→稍停→快2连振。削减Boss真气的主要时机。" },
            counter: { en: "Rhythm: 4 fast → brief pause → 2 fast. Must memorize, explosions obscure later rocks.", zh: "节奏：4快→短停→2快。必须背板，爆炸特效会遮挡后续石块。" },
            type: "other",
          },
          {
            name: { en: "Triple Stomp (Tai Shan)", zh: "白给三连踩" },
            description: { en: "Boss jumps and stomps 3 times in succession. Easy deflect timing.", zh: "连续3次跳起砸向玩家。弹反时机宽松。" },
            counter: { en: "Deflect on the downward phase of each stomp. Ends with Lingyun Step opportunity.", zh: "在每次下落阶段卸势。结束后固定给予凌云踏机会。" },
            type: "aoe",
          },
        ],
        strategy: { en: "Keep distance, never engage in close combat. Deflect ranged attacks (rocks, qi orbs) to deplete posture bar. Output via executions + Fire Breath + Taibai Drunk Moon.", zh: "保持距离，不要近战。弹反远程技能（石块、气弹）削减架势条。用处决+喷火+太白醉月输出。" },
      },
      {
        phase: "P2",
        mechanics: [
          {
            name: { en: "Enhanced Triple Stomp + Vine Cage", zh: "强化泰山压顶+藤蔓牢笼" },
            description: { en: "Boss spins twice before stomping (one more than P1). Landing spawns vine cage with delayed damage.", zh: "先转两圈再压（比P1多一圈），落地产生藤蔓牢笼。" },
            counter: { en: "Deflect on the downward moment, not too early. Dodge after to avoid vine cage.", zh: "压下瞬间卸势不要太早，之后闪避躲藤蔓牢笼。" },
            type: "aoe",
          },
          {
            name: { en: "Enhanced Qi Orbs + Gold Flash", zh: "强化气弹+黄光技" },
            description: { en: "More frequent orbs. After 4 orbs, gold-flash unblockable attack follows.", zh: "气弹更频繁。4发气弹后接不可卸势的黄光技。" },
            counter: { en: "Dodge right-backward after boss raises hand for gold flash. Be slow with the dodge.", zh: "Boss抬手后向右后方闪避，一定要慢一点。" },
            type: "yellow_light",
          },
          {
            name: { en: "Gold Rush Neural Blade", zh: "金色突进神经刀" },
            description: { en: "Very fast gold-flash dash attack after orb sequences. Short deflect window.", zh: "气弹结束后极大概率接金色突进，判定窗口极短。" },
            counter: { en: "Dodge left for best results.", zh: "向左闪避效果最好。" },
            type: "yellow_light",
          },
          {
            name: { en: "Floating Spell + Vine Prison", zh: "漂浮术+藤牢点名" },
            description: { en: "Lifts player into air for 10 seconds then drops. Can also trap in vine prison.", zh: "将玩家举高10秒后砸下，也可释放藤牢困住。" },
            counter: { en: "Use Qingfeng secret art to cancel float. Use Lingyun Step to dodge vine prison.", zh: "用清风奇术取消浮空，用凌云踏躲避藤牢。" },
            type: "grab",
          },
          {
            name: { en: "Phantoms + Ten Thousand Donkeys", zh: "分身+万驴奔腾" },
            description: { en: "Boss creates clones. Must hit the real body once (use bow). Also summons donkey stampede.", zh: "Boss释放分身，必须用弓箭命中真身一次。还会召唤驴群冲锋。" },
            counter: { en: "Hit real body with bow, then move away from donkey groups.", zh: "用弓箭命中真身，然后远离驴群。" },
            type: "other",
          },
        ],
        strategy: { en: "Visual chaos with sandstorm effects. Focus on the same orb/rock deflect rhythm from P1. Watch for camera issues during phase transition. Qingfeng and Lingyun Step are essential secret arts.", zh: "场景狂风飞沙白茫茫，视觉干扰大。保持与P1相同的弹反节奏。注意转阶段视角丢失问题。清风和凌云踏必备。" },
      },
    ],
    rewards: { en: "Weekly raid loot, Yunmeng Jinming Pool progression (boss 1 of 2, followed by Rong Yuan)", zh: "每周团本奖励，金明池进度（双Boss第1个，打完自动进入容鸢战）" },
    tips: { en: "Challenge at NIGHT — daytime qi orbs blend with sky. Fire Breath + Taibai Drunk Moon is the DPS core. Don't exit after beating him — auto-transitions to Rong Yuan.", zh: "夜晚挑战，白天气弹与天空融为一体看不清。喷火+太白醉月是输出核心。打完不要退出，自动进入容鸢战。" },
  },

  /* ── 12. 蛇郎中 ── */
  {
    id: "she-langzhong",
    name: { en: "She Langzhong (Snake Doctor)", zh: "蛇郎中" },
    type: "world",
    location: { en: "Baoshan Lake Cave, Qinghe", zh: "清河·抱山湖山洞" },
    difficulty: 4,
    phases: [
      {
        phase: "P1",
        mechanics: [
          {
            name: { en: "Red Light Heavy Strike", zh: "红光劈击" },
            description: { en: "Heavy slash with red flash warning.", zh: "红色闪光预警的重劈攻击。" },
            counter: { en: "Deflect at the moment of red flash. Near 100% success rate.", zh: "红光劈下瞬间卸势，成功率接近100%。" },
            type: "red_light",
          },
          {
            name: { en: "Thrust + Smoke Bomb", zh: "突刺+烟雾弹" },
            description: { en: "Quick thrust followed by smoke bomb that blocks vision.", zh: "快速突刺后释放烟雾弹遮挡视野。" },
            counter: { en: "Deflect the thrust, then observe through smoke for the next attack.", zh: "突刺途中卸势，之后观察烟雾中后续动作。" },
            type: "other",
          },
          {
            name: { en: "Jump Attack (After Smoke)", zh: "下砸（烟雾后）" },
            description: { en: "Jumps and slams down after smoke bomb.", zh: "烟雾弹后跳起发动下砸攻击。" },
            counter: { en: "Deflect at jump moment, then switch to sword for damage combo.", zh: "跳起瞬间卸势，然后切剑打一套输出。" },
            type: "aoe",
          },
        ],
        strategy: { en: "Easy fight. Maintain distance, deflect red attacks and thrusts. Basic cycle: dodge → deflect → dodge smoke → deflect slam → output.", zh: "难度较低。保持距离，卸红光和突刺。基本循环：闪避→卸势→躲烟雾→卸下砸→输出。" },
      },
      {
        phase: "P2",
        mechanics: [
          {
            name: { en: "Poison Mist", zh: "毒雾" },
            description: { en: "Releases poison mist around boss creating toxic zones. Stacking poison is very dangerous.", zh: "释放周围毒雾产生毒圈区域伤害，中毒叠加很麻烦。" },
            counter: { en: "Dodge at the moment boss raises hand. Stay away from poison zones.", zh: "抬手瞬间闪避，远离毒圈范围。" },
            type: "aoe",
          },
          {
            name: { en: "Red Circle Poison (High Damage)", zh: "红圈出毒" },
            description: { en: "Core high-damage P2 skill. Poison released with red range circles.", zh: "二阶段核心高伤技能，放毒同时出现红圈。" },
            counter: { en: "Deflect with precise timing. This is the most dangerous P2 attack.", zh: "找准时间卸势。这是二阶段最危险的技能。" },
            type: "red_light",
          },
          {
            name: { en: "Smoke + Red Flash Combo", zh: "烟雾弹+红光" },
            description: { en: "Smoke bomb followed by red-flash attack.", zh: "烟雾弹后接红光攻击。" },
            counter: { en: "Deflect at the red flash moment through the smoke.", zh: "红光亮起瞬间卸势。" },
            type: "red_light",
          },
        ],
        strategy: { en: "Still easy. Keep distance with ranged attacks. Fan weapon + Mingchuan Pharmacopoeia for sustain. Jade Umbrella 'Throw Spring Hate' loop can stunlock boss for easy win.", zh: "依然简单。用远程武器保持距离。扇子+明川药典保命。玉伞「抛春恨」循环可让Boss不停倒地逃课。" },
      },
    ],
    rewards: { en: "Standard world boss drops: equipment, materials, exploration progress", zh: "常规野外BOSS掉落：装备、材料、探索进度" },
    tips: { en: "Use bow or fan for ranged attacks. Bring Mingchuan Pharmacopoeia for survivability. Jade Umbrella provides an easy stunlock loop for effortless win.", zh: "用弓箭或扇子远程攻击。带明川药典提高生存。玉伞可轻松实现倒地循环逃课。" },
  },

  /* ── 13. 煞地神 ── */
  {
    id: "sha-dishen",
    name: { en: "Sha Dishen", zh: "煞地神" },
    type: "world",
    location: { en: "Baicao Field / Longhu Village, Qinghe", zh: "清河·百草野/龙虎寨" },
    difficulty: 6,
    phases: [
      {
        phase: "P1",
        mechanics: [
          {
            name: { en: "Underground Red Flash (Opener)", zh: "钻地红光" },
            description: { en: "Boss burrows underground, red flash marks position, bursts out to attack. Attacks on both emergence and re-entry.", zh: "钻入地下后以红光标记位置突然窜出攻击，出来一次下去一次。" },
            counter: { en: "Deflect near the tree on the left side of the arena.", zh: "在场景左侧树附近卸势。" },
            type: "red_light",
          },
          {
            name: { en: "Claw Combo + Dirt Throw", zh: "利爪连击+扔土屑" },
            description: { en: "After emerging, rapid three-hit claw combo followed by dirt throw.", zh: "钻出后飞速三连击再扔土屑。" },
            counter: { en: "Deflect the combo hits, then dodge the dirt throw.", zh: "连击时卸势，扔土屑时闪避。" },
            type: "other",
          },
          {
            name: { en: "Sandstorm (Pull-in)", zh: "沙尘暴（吸附）" },
            description: { en: "Summons sandstorm that pulls players toward boss. Can be lethal if not interrupted.", zh: "召唤沙尘暴吸附玩家，不打断可能被直接秒杀。" },
            counter: { en: "Use Lingyun Step or other secret arts to interrupt immediately.", zh: "立刻用凌云踏等奇术打断。" },
            type: "aoe",
          },
          {
            name: { en: "Rolling Ball Attack", zh: "车轮滚滚（变球）" },
            description: { en: "Boss curls into a ball and rolls continuously. Can be trapped behind trees.", zh: "Boss变成球状连续滚动，可被树卡住。" },
            counter: { en: "Hide behind trees/obstacles to trap the rolling boss. Use ranged sword Qi to attack.", zh: "躲在树后面把Boss卡住，用无名剑气远程输出。" },
            type: "other",
          },
        ],
        strategy: { en: "Boss exhausts Qi very fast — exploit the long recovery windows. When boss glows blue, go all-out. Fight mostly involves dodging/defending with burst damage during vulnerability.", zh: "Boss气竭速度极快——利用长硬直空档输出。Boss身上出蓝光后全力爆发。大部分时间在躲闪防御，找空档输出。" },
      },
      {
        phase: "P2 (5-Man Dungeon)",
        mechanics: [
          {
            name: { en: "Earthquake (Rock Required)", zh: "地震（需上岩石）" },
            description: { en: "All players must climb onto rocks to avoid continuous AoE. If rocks are destroyed, team wipes.", zh: "全员必须爬上岩石躲避持续AOE。岩石全碎则团灭。" },
            counter: { en: "Protect rocks throughout the fight. Don't let yellow circles hit rocks.", zh: "全程保护岩石耐久。不要让黄圈打到岩石。" },
            type: "aoe",
          },
          {
            name: { en: "Sandstorm (Yellow Circles)", zh: "沙暴（点名黄圈）" },
            description: { en: "Targets two players with yellow circles. If circles hit rocks, they lose durability.", zh: "点名两人黄圈，黄圈打到岩石会扣耐久。" },
            counter: { en: "Guide yellow circles away from rocks to open ground.", zh: "引导黄圈到空地，远离岩石。" },
            type: "yellow_light",
          },
          {
            name: { en: "Yellow Sand Sky (Rock Cover Required)", zh: "黄沙漫天（需岩石遮挡）" },
            description: { en: "Must hide behind rocks to avoid damage. Missing rocks = team wipe.", zh: "必须躲在岩石后规避伤害。没有岩石即团灭。" },
            counter: { en: "Hide behind surviving rocks. Rock preservation is the #1 priority.", zh: "躲在存活的岩石后面。保岩石是第一要务。" },
            type: "aoe",
          },
        ],
        strategy: { en: "Dungeon version: Rock management is everything. Protect rocks from yellow circles. During earthquake, all climb rocks and wait for boss to stand back up. Tank guides boss facing, healers keep HP topped.", zh: "副本版：岩石管理是全部。保护岩石不被黄圈击碎。地震时全员上岩石等Boss站起。坦克引导Boss面向，治疗保持血量。" },
      },
    ],
    rewards: { en: "Changming Jade, Mental Art chest, Zhou Coins, valuable items", zh: "长鸣玉、心法箱子、周元通宝、珍贵道具" },
    tips: { en: "Tree exploit: lure boss to left-side tree, trap rolling attack behind it, ranged sword Qi for safe damage. Dungeon: rocks are your lifeline — protect them at all costs.", zh: "树卡位逃课：把Boss骗到左侧树那里卡住滚球，远程剑气安全输出。副本：岩石是命根子，必须全力保护。" },
  },

  /* ── 14. 皮影幕起 ── */
  {
    id: "piying-muqi",
    name: { en: "Shadow Puppeteer (Sheng Wu)", zh: "皮影师·绳武（皮影幕起）" },
    type: "world",
    location: { en: "North Bamboo Grove, Baicao Field, Qinghe", zh: "清河·百草野北竹林" },
    difficulty: 8,
    phases: [
      {
        phase: "P1",
        mechanics: [
          {
            name: { en: "Jump Strike", zh: "跳劈" },
            description: { en: "Leaps into air, slight rotation, then rapid descending chop for high damage.", zh: "跃入空中小幅旋转后急速下劈斩击，造成高额伤害。" },
            counter: { en: "Two consecutive back-dodges. Boss briefly staggers on landing —反击 window.", zh: "连续两次向后闪避。Boss落地短暂硬直——反击窗口。" },
            type: "aoe",
          },
          {
            name: { en: "Spinning Three-Strike", zh: "旋转三连击" },
            description: { en: "Rotates guandao in circular trajectory three times. Last hit has delayed timing.", zh: "以圆形轨迹旋转关刀三次，最后一击有延迟节奏。" },
            counter: { en: "All three can be deflected for massive posture damage. Watch the weapon, not the body.", zh: "三下均可弹反造成大量架势伤害。盯住武器而非Boss身体。" },
            type: "other",
          },
          {
            name: { en: "Push Six-Strike Combo", zh: "推进六连斩" },
            description: { en: "Six consecutive strikes advancing forward: 2 fast cross → 2 spinning → 1 chop → 1 ground slam.", zh: "连续六击向前推进：2快交叉斩→2旋转斩→1下劈→1砸地。" },
            counter: { en: "Watch weapon for timing. Deflect each hit at similar rhythm.", zh: "盯住武器节奏，按节奏逐个弹反。" },
            type: "other",
          },
          {
            name: { en: "Ground Slam (Yellow Flash)", zh: "砸地攻击（黄光）" },
            description: { en: "Flies up, guandao glows yellow, then slams ground for wide AoE. Cannot be blocked or deflected!", zh: "飞上空中关刀发黄光后猛砸地面。不可格挡不可弹反！" },
            counter: { en: "Yellow flash travels from handle to blade tip — dodge when you see bright yellow flash.", zh: "黄光从刀柄传到刀尖闪出明亮黄光时立刻向后或侧方闪避。" },
            type: "yellow_light",
          },
          {
            name: { en: "Iron-Rod Thrust (Gold Flash)", zh: "铁棍突刺（金光）" },
            description: { en: "Boss steps back, jumps with gold glow, then powerful thrust. Can ONLY be dodged, not deflected.", zh: "Boss后退跳起发金光后强力突刺。只能闪避不能弹反！" },
            counter: { en: "Dodge when boss jumps with gold effect. Cannot be parried.", zh: "Boss后退跳起有金光时立刻准备闪避。" },
            type: "yellow_light",
          },
        ],
        strategy: { en: "Core principle: watch the WEAPON, not the body — they move at different speeds. Wait for boss combos to finish, deflect the last hit, then counter-attack. Only two moves cannot be deflected: Iron-Rod Thrust and Ground Slam.", zh: "核心原则：看武器不看人，两者速度不同。等Boss连招打完弹反最后一击再反击。只有铁棍突刺和砸地不可弹反。" },
      },
      {
        phase: "P2",
        mechanics: [
          {
            name: { en: "Puppet Summon", zh: "皮影召唤" },
            description: { en: "Boss disappears in black smoke, replaced by two paper puppet figures with independent HP. They use thrust and spinning attacks.", zh: "Boss消失在黑烟中，场地出现两个薄纸皮影小人，各有独立血条。" },
            counter: { en: "Focus fire one puppet quickly, then the other. Keep them in arena center, away from smoke.", zh: "优先集火快速击杀一个，再处理另一个。保持在场地中央远离烟雾。" },
            type: "other",
          },
          {
            name: { en: "Charging Red Flash Combo", zh: "冲锋红光连斩" },
            description: { en: "Blade glows red, boss charges at target with quick upward slash then overhead chop. Both are red-flash unblockable.", zh: "刀刃发红光后冲锋接近，快速上挑斩后接过头下劈。均为红光不可格挡。" },
            counter: { en: "Deflect at the second red flash moment (on the upward slash). Or dodge the entire sequence.", zh: "在第二次红光闪现瞬间弹反上挑斩。或全程闪避。" },
            type: "red_light",
          },
          {
            name: { en: "Block Push (Defensive Stance)", zh: "格挡推击" },
            description: { en: "Boss holds guandao diagonally for defense, then pushes forward. Takes greatly reduced damage in this stance.", zh: "关刀斜举防御姿态后向前推击，此姿态受伤大幅降低。" },
            counter: { en: "Dodge around to boss's back, or dodge sideways out of attack trajectory.", zh: "闪避绕到Boss身后，或侧闪脱离攻击轨迹。" },
            type: "other",
          },
        ],
        strategy: { en: "P2 boss refills HP after puppet phase. Clear puppets first, then fight renewed boss. New moves include defensive stance and red-light charge. Fan for ranged safe damage is recommended.", zh: "二阶段Boss回满血量。先清理皮影小人再打Boss。新增防御姿态和红光冲锋。推荐用扇子远程安全输出。" },
      },
    ],
    rewards: { en: "20 Echo Jade, Decoration: Shadow Puppet Doll, 12000 Character XP, 50 Qinghe Exploration", zh: "20回响玉、装饰品「皮影人偶」、12000角色经验、50清河探索值" },
    tips: { en: "Watch the weapon blade, not boss body. Only Iron-Rod Thrust and Ground Slam cannot be deflected. Fan weapon can exploit positioning near the stage for ranged safe kill.", zh: "看武器刀刃不看Boss身体。只有铁棍突刺和砸地不可弹反。扇子可利用戏台附近卡位远程安全击杀。" },
  },

  /* ── 15. 鬼公子 ── */
  {
    id: "gui-gongzi",
    name: { en: "Ghost Master (Gui Gongzi)", zh: "鬼公子" },
    type: "world",
    location: { en: "Mistveil Forest, Kaifeng", zh: "开封·雾隐之林" },
    difficulty: 8,
    phases: [
      {
        phase: "P1",
        mechanics: [
          {
            name: { en: "Twin Lotus (Dual Umbrella)", zh: "双伞投射" },
            description: { en: "Two red paper umbrellas fly toward player in arc trajectories at fight start.", zh: "开场召唤两把红色纸伞以弧形轨迹飞来。" },
            counter: { en: "Deflect when white flash appears on umbrellas. Don't mash — observe movement.", zh: "伞上出现白光闪烁时弹反。不要狂按，观察伞的移动。" },
            type: "other",
          },
          {
            name: { en: "Rotating Umbrella Toss", zh: "旋转伞投掷" },
            description: { en: "Spins body and throws umbrella outward, dealing damage as it orbits three times.", zh: "旋转身体将伞抛出，绕其旋转造成三次伤害。" },
            counter: { en: "Deflect the first two close hits. Stay near boss to avoid the orbiting umbrella.", zh: "靠近Boss弹反前两次。靠近时不会被旋转伞打到。" },
            type: "other",
          },
          {
            name: { en: "Vanishing Strike (Red Flash)", zh: "消失突袭（红光）" },
            description: { en: "Boss disappears during combo, reappears behind player for a forward charge attack.", zh: "连招中Boss消失，从玩家背后重新出现冲锋攻击。" },
            counter: { en: "Listen for boss's laughter as audio cue. Deflect the final strike.", zh: "听到Boss笑声作为声音提示，弹反最后一击。" },
            type: "red_light",
          },
          {
            name: { en: "Death's Embrace (Gold Flash)", zh: "死亡拥抱（金光）" },
            description: { en: "Screen goes dark multiple times, boss appears in darkness, then dashes for grab attack. Massive damage.", zh: "屏幕变黑多次，Boss在黑暗中闪烁出现后冲刺抓投，造成巨大伤害。" },
            counter: { en: "Can ONLY dodge, cannot deflect. Listen for laughter sound effect. Don't waste stamina on early flashes.", zh: "只能闪避不能弹反。听笑声音效。前几次闪烁不要浪费耐力。" },
            type: "yellow_light",
          },
          {
            name: { en: "Umbrella Barrage", zh: "伞雨连射" },
            description: { en: "Floats backward, summons 10 small umbrellas fired at steady intervals, ends with a slam. Best window for depleting Qi bar.", zh: "向后飘浮召唤10把小伞以稳定间隔发射，以下砸结束。削减真气槽的最佳窗口。" },
            counter: { en: "Rhythm-deflect each umbrella. Dodge the final slam. Don't waste this window.", zh: "有节奏弹反每把伞。闪避最后的下砸。这是最好的输出窗口。" },
            type: "other",
          },
        ],
        strategy: { en: "Rhythm-deflecting the Umbrella Barrage is the core DPS mechanic. Mo Blade lets you tank through umbrella timing issues. Summon Yi Dao ally to pull aggro when boss disappears.", zh: "有节奏弹反伞雨是核心输出机制。陌刀可硬扛伞的时机问题。召唤伊刀助战在Boss消失时拉仇恨。" },
      },
      {
        phase: "P2",
        mechanics: [
          {
            name: { en: "Possession Array (Paper Phantoms)", zh: "召唤纸人/附身阵" },
            description: { en: "Boss plants umbrella and summons 4 paper phantoms. Must kill at least one or get possessed (massive damage/death).", zh: "将伞插入地面召唤4个纸人幽灵。必须击杀至少一个否则被附身（巨大伤害/死亡）。" },
            counter: { en: "Switch to high-damage weapon, deflect phantom attacks for quick execution. AoE weapons recommended.", zh: "切换高伤害武器，弹反幽灵攻击快速处决。范围伤害武器推荐。" },
            type: "other",
          },
          {
            name: { en: "Spider Lily Rain", zh: "蜘蛛百合雨" },
            description: { en: "Moves to arena center, summons spider lilies from sky creating shockwave explosions on landing.", zh: "移到场地中央召唤蜘蛛百合从天而降，落地产生冲击波爆炸。" },
            counter: { en: "Stay in place and deflect the energy waves. Jump over waves if needed. Watch stamina.", zh: "留在原地弹反能量波。必要时跳过冲击波。注意耐力。" },
            type: "aoe",
          },
          {
            name: { en: "Deathly Blossom + Yellow Flash", zh: "死亡绽放+黄光" },
            description: { en: "Four tendrils under player's feet followed by unblockable yellow-flash attack.", zh: "玩家脚下生成卷须连续四次，随后接不可弹反的黄光攻击。" },
            counter: { en: "Deflect or dodge the tendrils, then dodge the yellow-flash finisher.", zh: "弹反或闪避卷须，然后闪避黄光收尾攻击。" },
            type: "yellow_light",
          },
          {
            name: { en: "Closed Umbrella Combo", zh: "收伞连招" },
            description: { en: "Umbrella closes making deflect timing EASIER than P1. Two horizontal slashes then red-flash vertical chop.", zh: "伞收拢使弹反时机比P1更容易判断。两次横砍后红光竖劈。" },
            counter: { en: "Deflect the third red-light strike for massive Qi damage. Attack once before first slash, once after.", zh: "弹反第三次红光打击造成巨大真气伤害。第一次前可攻击一次。" },
            type: "red_light",
          },
        ],
        strategy: { en: "Phantom kills are the #1 priority when they spawn. Possession is lethal. Closed umbrella combo is your best deflect window in P2. Maintain shield for safety.", zh: "幽灵出现时必须优先击杀，附身是致命的。收伞连招是P2最好的弹反窗口。保持护盾增加容错。" },
      },
    ],
    rewards: { en: "20 Echo Jade, 50 Kaifeng Exploration, 8000 Character XP, 8000 Coins, 5 Inner Way Notes", zh: "20回响玉、50开封探索度、8000角色经验、8000金币、5内道笔记" },
    tips: { en: "Audio cues are critical — boss's laughter signals vanish attacks. Mo Blade for head-on fights, Fan for sustain. Yi Dao ally is highly recommended. Must complete 'Ephemeral Blight' quest first to clear poison fog.", zh: "声音提示至关重要——笑声预示消失攻击。陌刀正面硬打，扇子续航。强烈推荐召唤伊刀助战。必须先完成「浮光幻灭」前置任务清除毒雾。" },
  },

  /* ── 16. 白狼主 ── */
  {
    id: "bai-langzhu",
    name: { en: "White Wolf Lord", zh: "白狼主" },
    type: "world",
    location: { en: "Three Bowls Tavern, Buxianxian, Qinghe", zh: "清河·不羡仙三碗酒馆" },
    difficulty: 9,
    phases: [
      {
        phase: "P1",
        mechanics: [
          {
            name: { en: "Wolf Summon + Dive Attack", zh: "召唤狼群+飞扑" },
            description: { en: "Two wolves summoned, each howls then charges. White Wolf follows with a diving attack.", zh: "召唤两只狼，每只先吼叫后突进，白狼主随后飞扑。" },
            counter: { en: "Dodge + deflect wolf charges. The dive attack can ONLY be dodged.", zh: "闪避+卸势处理狼突进。飞扑只能闪避。" },
            type: "other",
          },
          {
            name: { en: "Nine-Hit Combo (Licking Paw)", zh: "舔爪9连击" },
            description: { en: "Boss's blade glows white, then unleashes 9 consecutive slashes with fast/slow rhythm. THE core pattern to memorize.", zh: "刀身发白光后9连斩，快慢刀节奏。必须背板的核心招式。" },
            counter: { en: "Precise deflect on each hit. Do NOT mash deflect button — one by one.", zh: "逐刀精准卸势。不能狂按卸势键，一刀一刀来。" },
            type: "red_light",
          },
          {
            name: { en: "Gold Flash Pounce", zh: "金光飞扑" },
            description: { en: "Sudden gold glow, then pounces at player. Cannot be deflected.", zh: "突然亮金光后扑过来，不可卸势。" },
            counter: { en: "Dodge only. Cannot be deflected.", zh: "只能闪避，无法卸势。" },
            type: "yellow_light",
          },
          {
            name: { en: "Right-Jump 4-Hit Combo", zh: "右跳4连击" },
            description: { en: "Jumps right then 4-hit combo with fast/slow rhythm.", zh: "先右跳后4连击，快慢刀节奏。" },
            counter: { en: "Precise deflect on each hit.", zh: "逐刀精准卸势。" },
            type: "red_light",
          },
          {
            name: { en: "Back-Jump 4-Hit (3-Fast-1-Slow)", zh: "后跳4连击（3快1慢）" },
            description: { en: "Back-jump then 4 hits: first 3 fast, last one slow.", zh: "先后跳后4连击，前3快最后1慢。" },
            counter: { en: "Deflect the 3 fast hits, then WAIT for the slow 4th hit.", zh: "快速卸前三刀，然后等第四刀慢刀。" },
            type: "red_light",
          },
          {
            name: { en: "Red Light Triple (Charge+Kick+Charge)", zh: "红光3连" },
            description: { en: "Red-light charge → spinning kick → red-light charge.", zh: "红光突进→反身一脚→再接红光突进。" },
            counter: { en: "Continuous deflects for all three hits.", zh: "连续卸势处理三段。" },
            type: "red_light",
          },
        ],
        strategy: { en: "Do NOT lock camera on boss. Maintain distance to reduce aggression. Two patterns must be memorized: Licking Paw 9-Hit and Right-Jump 4-Hit. Precise deflect is mandatory — mashing WILL fail.", zh: "不要锁定Boss。保持距离降低攻击欲望。必须背板两套：舔爪9连和右跳4连。精准卸势是必须的，狂按必败。" },
      },
      {
        phase: "P2",
        mechanics: [
          {
            name: { en: "Inherited P1 Moves + Extra Red Flash", zh: "继承P1招式+额外红光" },
            description: { en: "All P1 moves return, but many gain an additional red-flash attack at the end of combos.", zh: "所有P1招式继承，但许多连招末尾多接一段红光攻击。" },
            counter: { en: "Deflect the additional red flash at the end of each combo.", zh: "每套连招末尾额外卸势红光。" },
            type: "red_light",
          },
          {
            name: { en: "Left-Jump 6-Hit + Red Flash", zh: "左跳6连击+红光" },
            description: { en: "New P2 move: 1 slow + 5 fast + red flash finisher.", zh: "P2新招：1慢+5快+红光收尾。" },
            counter: { en: "Precise deflect all hits including the red flash finisher.", zh: "精准卸全部连段及末尾红光。" },
            type: "red_light",
          },
          {
            name: { en: "Whirlwind Slash + Wild Slash", zh: "回旋斩+乱斩" },
            description: { en: "Consecutive whirlwind slashes followed by wild slash. Deflect timing on wild slash must be SLOWER.", zh: "连续回旋斩后接乱斩。卸乱斩的时机要慢一点。" },
            counter: { en: "Deflect the wild slash with a slightly delayed timing.", zh: "卸乱斩时卸势稍慢一点。" },
            type: "other",
          },
        ],
        strategy: { en: "Every P1 combo gains extra red flash ending. Bleed damage stacks in P2 approaching one-shot levels. Consider Zhanxue Blade + Qingshan Brush speedrun build for efficient clear.", zh: "P1每套连招都多了红光收尾。二阶段流血叠加接近秒杀。考虑斩雪刀法+青山执笔速通流。" },
      },
    ],
    rewards: { en: "Standard world boss drops: equipment, materials", zh: "常规野外BOSS掉落：装备、材料" },
    tips: { en: "Do NOT lock camera. Speedrun build: Zhanxue Blade + Qingshan Brush with Yi E Zhi Ming + Lingyun Step. Umbrella + Fan safe combo works well. This boss has the highest deflect skill requirement in the game.", zh: "不要锁定镜头。速通流：斩雪刀法+青山执笔+以鹅之鸣+凌云踏。伞+扇安全流也很好。这是全游戏卸势要求最高的Boss。" },
  },
];

export const dungeonGuides: DungeonGuide[] = [
  {
    id: "jinmingchi",
    name: { en: "Yunmeng Jinming Pool", zh: "云梦金明池" },
    type: "10man",
    bosses: ["sleeping-daoist", "rong-yuan"],
    overview: { en: "10-person raid with two sequential bosses (Sleeping Daoist → Rong Yuan). Level 51 unlock. Weekly reward.", zh: "十人团本，连续双Boss（睡道人→容鸢）。51级解锁，每周可领一次奖励。" },
    teamComp: { en: "2-3 Healers + Tank + DPS. At least 1 Mo Blade for phantom clearing.", zh: "2-3治疗+坦克+输出。至少1名陌刀用于清幻驴。" },
    tips: { en: "Don't exit after beating Sleeping Daoist — fight auto-transitions to Rong Yuan. Practice with AI teammates first.", zh: "打完睡道人不要退出，自动进入容鸢战。建议先用智能人机熟悉机制。" },
  },
  {
    id: "lion-dance-raid",
    name: { en: "Lion Dance Brothers Raid", zh: "侠境·舞狮兄弟" },
    type: "10man",
    bosses: ["lion-dance-brothers"],
    overview: { en: "10-person raid featuring the Lion Dance Brothers. Level 66 content. Ball management is the core mechanic.", zh: "十人团本舞狮兄弟。66级内容。彩球管理是核心机制。" },
    teamComp: { en: "3+ Healers + DPS. Ball handler must have Star-Grasping Moon-Seizing skill.", zh: "3+治疗+输出。持球者必须带「摄星拿月」奇术。" },
    tips: { en: "Star-Grasping Moon-Seizing is mandatory. Two wipe points: pole destruction and coin shooting. Unlock camera when boss goes airborne.", zh: "摄星拿月必带。两大灭团点：毁桩和射铜钱。Boss空中时解锁镜头。" },
  },
];
