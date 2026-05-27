export interface NewsArticle {
  slug: string;
  title: { zh: string; en: string };
  date: string;
  source: { zh: string; en: string };
  thumbnail: string;
  content: Array<
    | { type: "paragraph"; text: { zh: string; en: string } }
    | { type: "image"; src: string; alt: string }
  >;
}

export const newsArticles: NewsArticle[] = [
  {
    slug: "pc-performance-review",
    title: {
      zh: "媒体赞《燕云十六声》PC性能：优化出色 美术封顶",
      en: "Western Media Praises Where Winds Meet PC Performance: Excellent Optimization, Top-Tier Art",
    },
    date: "2025-11-18",
    source: { zh: "游侠网", en: "Ali213.net" },
    thumbnail: "/images/news/news-1.jpg",
    content: [
      {
        type: "paragraph",
        text: {
          zh: "知名科技游戏媒体DSOGaming近期对中国产游戏《燕云十六声（WHERE WINDS MEET）》进行了PC性能评测，并给予高度评价。测试显示，该游戏在多种硬件配置下均能流畅运行，画面表现尤为出色。",
          en: "Renowned tech and gaming media outlet DSOGaming recently conducted a PC performance review of the Chinese game Where Winds Meet, giving it high praise. Tests showed that the game runs smoothly across a variety of hardware configurations, with particularly outstanding visual performance.",
        },
      },
      { type: "image", src: "/images/news/news-1.jpg", alt: "Where Winds Meet PC Performance Benchmark" },
      {
        type: "paragraph",
        text: {
          zh: "测试平台搭载AMD Ryzen 9 7950X3D处理器、32GB DDR5 6000MHz内存，显卡涵盖AMD Radeon RX 6900XT、RX 7900XTX、RX 9070XT，以及NVIDIA RTX 2080Ti、RTX 3080、RTX 4090、RTX 5080与RTX 5090等多款型号。",
          en: "The test platform was equipped with an AMD Ryzen 9 7950X3D processor, 32GB DDR5 6000MHz RAM, and a range of GPUs including AMD Radeon RX 6900XT, RX 7900XTX, RX 9070XT, as well as NVIDIA RTX 2080Ti, RTX 3080, RTX 4090, RTX 5080, and RTX 5090.",
        },
      },
      {
        type: "paragraph",
        text: {
          zh: "在1080P分辨率与超高画质设定下，所有参测显卡均实现流畅运行，即便是已发布多年的RTX 2080Ti，最低帧率也达到68FPS，平均帧率为74FPS。",
          en: "At 1080P resolution with ultra-high quality settings, all tested GPUs achieved smooth gameplay. Even the older RTX 2080Ti maintained a minimum frame rate of 68FPS with an average of 74FPS.",
        },
      },
      { type: "image", src: "/images/news/news-2.jpg", alt: "Where Winds Meet 1080P Performance Results" },
      {
        type: "paragraph",
        text: {
          zh: "评测指出，与《使命召唤：黑色行动7》不同，《燕云十六声》对NVIDIA显卡优化更为明显。例如AMD Radeon RX 6900XT性能明显落后于RTX 3080，而RX 7900XTX与RX 9070XT亦不敌RTX 5080，Blackwell架构显卡在该游戏中表现尤为出色。",
          en: "The review noted that, unlike Call of Duty: Black Ops 7, Where Winds Meet shows more pronounced optimization for NVIDIA GPUs. For example, the AMD Radeon RX 6900XT significantly trails the RTX 3080, while the RX 7900XTX and RX 9070XT also fall behind the RTX 5080. Blackwell architecture GPUs perform particularly well in this game.",
        },
      },
      { type: "image", src: "/images/news/news-3.jpg", alt: "Where Winds Meet NVIDIA vs AMD Comparison" },
      {
        type: "paragraph",
        text: {
          zh: "提升至1440P超高画质后，仅RTX 2080Ti无法稳定60FPS。在原生4K超高画质下，NVIDIA三款高端显卡均能流畅运行；AMD阵营中，RX 7900XTX可实现60FPS，配合FreeSync显示器，RX 9070XT也能提供流畅体验。",
          en: "When bumped up to 1440P ultra-high quality, only the RTX 2080Ti failed to maintain a stable 60FPS. At native 4K ultra-high quality, all three high-end NVIDIA GPUs ran smoothly. On the AMD side, the RX 7900XTX achieved 60FPS, and with a FreeSync display, the RX 9070XT also delivered a smooth experience.",
        },
      },
      { type: "image", src: "/images/news/news-4.jpg", alt: "Where Winds Meet 4K Performance Results" },
      {
        type: "paragraph",
        text: {
          zh: "评测者总结称，《燕云十六声》可在各类PC配置上实现60FPS以上的流畅体验，是当前画面表现最出色的免费游戏之一。游戏不仅场景视觉冲击力强、世界构建精彩，美术风格也堪称PC平台顶尖水准。",
          en: "The reviewer concluded that Where Winds Meet can deliver a smooth 60FPS+ experience across a wide range of PC configurations, making it one of the best-looking free-to-play games available. The game not only features visually stunning scenes and excellent world-building, but its art style is also considered top-tier on the PC platform.",
        },
      },
      {
        type: "paragraph",
        text: {
          zh: "尽管游戏未完全发挥高端PC的极限性能，但其优秀的兼容性与流畅度更符合大多数玩家的期望。唯一不足之处在于游戏中仍存在卡顿现象，评测者希望开发团队能尽快优化，进一步提升运行稳定性。",
          en: "Although the game doesn't fully push high-end PCs to their limits, its excellent compatibility and smooth performance better serve the expectations of most players. The only downside is occasional stuttering in the game, and the reviewer hopes the development team will optimize this soon to further improve running stability.",
        },
      },
    ],
  },
  {
    slug: "v16-flows-of-dreams",
    title: {
      zh: "V1.6「浮梦流年」版本更新：秦川新区域、新Boss、等级上限提升至95级",
      en: "V1.6 Flows of Dreams Update: New Qinchuan Region, New Boss, Level Cap Raised to 95",
    },
    date: "2026-04-30",
    source: { zh: "官方公告", en: "Official Announcement" },
    thumbnail: "/images/news/news-1.jpg",
    content: [
      {
        type: "paragraph",
        text: {
          zh: "燕云十六声国际服于2026年4月30日发布V1.6「浮梦流年（Flows of Dreams）」大型版本更新，带来了大量全新内容，包括新区域、新Boss、新系统和新活动。",
          en: "Where Winds Meet global server released the V1.6 'Flows of Dreams' major update on April 30, 2026, bringing a wealth of new content including a new region, new boss, new systems, and new events.",
        },
      },
      {
        type: "paragraph",
        text: {
          zh: "【新区域·秦川】全新可探索区域秦川正式开放，包含丰富的环境地貌、隐藏任务和探索奖励。玩家可以在这里体验全新的主线战役剧情，揭开秦川区域背后的故事。",
          en: "[New Region - Qinchuan] The brand-new explorable region of Qinchuan is now officially open, featuring diverse environments, hidden quests, and exploration rewards. Players can experience new main campaign storylines and uncover the secrets behind the Qinchuan region.",
        },
      },
      {
        type: "paragraph",
        text: {
          zh: "【新世界Boss·踏雪寻梅】秦川区域新增大型世界BOSS「踏雪寻梅（Snowplum Requiem）」，需要多人协作挑战，击败后可获得丰厚奖励。",
          en: "[New World Boss - Snowplum Requiem] A new large-scale world boss has been added to the Qinchuan region. It requires multi-player cooperation to defeat and offers generous rewards upon completion.",
        },
      },
      {
        type: "paragraph",
        text: {
          zh: "【等级上限提升】角色等级上限从90级提升至95级，开放新的技能点数和属性成长空间。",
          en: "[Level Cap Increase] The character level cap has been raised from 90 to 95, unlocking new skill points and attribute growth potential.",
        },
      },
      {
        type: "paragraph",
        text: {
          zh: "【新系统】新增训练场（Training Terrace）练功系统、竞技场·群雄策略新PVP玩法、保底商店（Surething Shop）以及新手/回归玩家轻松追赶机制。此外还新增了奇术「懒风（Idle Wind）」。",
          en: "[New Systems] Added the Training Terrace practice system, Arena Group Strategy new PvP mode, Surething Shop, and Easy Catch-up mechanics for new and returning players. A new Qishu skill 'Idle Wind' has also been introduced.",
        },
      },
      {
        type: "paragraph",
        text: {
          zh: "【版本活动】本次更新同步上线多个限时活动：秦川引路灯（4.30-5.28）、半年同行纪念（4.30-6.24，赠送纪念时装+15抽）、飞雪迎春（4.30-5.21）、翠野歌行7日签到（4.30-5.12）、陶艺风潮（5.14-5.28）、鹅来报喜周签到（5.15-6.20）等。",
          en: "[Version Events] Multiple limited-time events launched alongside this update: Lumina Guide Qinchuan (4/30-5/28), Half-Year Companionship Celebration (4/30-6/24, free commemorative outfit + 15 pulls), Let It Snow (4/30-5/21), Verdant Chant 7-Day Login (4/30-5/12), Pottery in Vogue (5/14-5/28), Goose Greeting Weekly Login (5/15-6/20), and more.",
        },
      },
      {
        type: "paragraph",
        text: {
          zh: "【Twitch掉宝】观看燕云十六声Twitch直播可获取掉宝奖励，活动持续进行中。",
          en: "[Twitch Drops] Watch Where Winds Meet Twitch streams to earn drop rewards. The event is ongoing.",
        },
      },
    ],
  },
  {
    slug: "v17-imperial-palace-coming",
    title: {
      zh: "V1.7「宫殿」版本预下载已开放，新版本即将上线",
      en: "V1.7 The Imperial Palace Pre-Download Now Available, New Version Coming Soon",
    },
    date: "2026-05-20",
    source: { zh: "官方公告", en: "Official Announcement" },
    thumbnail: "/images/news/news-1.jpg",
    content: [
      {
        type: "paragraph",
        text: {
          zh: "燕云十六声国际服V1.7「宫殿（The Imperial Palace）」版本预下载已开放，玩家可提前下载更新包，在版本正式上线后第一时间体验新内容。",
          en: "Pre-download for Where Winds Meet global server V1.7 'The Imperial Palace' is now available. Players can download the update package in advance to experience new content as soon as the version goes live.",
        },
      },
      {
        type: "paragraph",
        text: {
          zh: "新版本预计将带来更多精彩内容，请关注官方公告获取最新信息。",
          en: "The new version is expected to bring exciting new content. Stay tuned to official announcements for the latest information.",
        },
      },
    ],
  },
  {
    slug: "redeem-codes-may-2026",
    title: {
      zh: "2026年5月最新兑换码大全（持续更新）",
      en: "All Active Redeem Codes - May 2026 (Updated)",
    },
    date: "2026-05-26",
    source: { zh: "综合整理", en: "Compiled from Game8 & Community" },
    thumbnail: "/images/news/news-1.jpg",
    content: [
      {
        type: "paragraph",
        text: {
          zh: "以下为燕云十六声国际服当前有效的兑换码汇总，兑换方式：游戏内「设置 → 其他 → 兑换码」输入即可。兑换码可能随时失效，建议尽快使用。",
          en: "Below are all currently active redeem codes for Where Winds Meet global server. To redeem: go to Settings → Other → Redeem Code in-game. Codes may expire at any time, so use them as soon as possible.",
        },
      },
      {
        type: "paragraph",
        text: {
          zh: "【高价值兑换码】HAPPY515（50长鸣玉+20,000通宝+2内观宝箱）、PALACE0528（100长鸣玉+1共鸣旋律+20,000通宝）、QINCHUAN0430（100长鸣玉+20,000通宝）、HEXI0306（100长鸣玉+1共鸣旋律+20,000通宝）、LIANGZHOU0402（100长鸣玉+20,000通宝）。",
          en: "[High Value Codes] HAPPY515 (50 Changming Jade + 20,000 Tongbao + 2 Neiguan Boxes), PALACE0528 (100 Changming Jade + 1 Resonance Melody + 20,000 Tongbao), QINCHUAN0430 (100 Changming Jade + 20,000 Tongbao), HEXI0306 (100 Changming Jade + 1 Resonance Melody + 20,000 Tongbao), LIANGZHOU0402 (100 Changming Jade + 20,000 Tongbao).",
        },
      },
      {
        type: "paragraph",
        text: {
          zh: "【常规兑换码】QINCHUANGOGO（50长鸣玉+20,000通宝）、PALACEGO（50长鸣玉+2内观笔记）、HEXIGOGO（50长鸣玉+20,000通宝）、MEETINHEXI（50长鸣玉+20,000通宝）、GOOSENEWS（50长鸣玉+20,000通宝）、LIANGZHOUGO（50长鸣玉+20,000通宝）、DEVLOG2601（40长鸣玉+20,000通宝）、WWMDEVTALK（40长鸣玉+20,000通宝）。",
          en: "[Regular Codes] QINCHUANGOGO (50 Changming Jade + 20,000 Tongbao), PALACEGO (50 Changming Jade + 2 Neiguan Notes), HEXIGOGO (50 Changming Jade + 20,000 Tongbao), MEETINHEXI (50 Changming Jade + 20,000 Tongbao), GOOSENEWS (50 Changming Jade + 20,000 Tongbao), LIANGZHOUGO (50 Changming Jade + 20,000 Tongbao), DEVLOG2601 (40 Changming Jade + 20,000 Tongbao), WWMDEVTALK (40 Changming Jade + 20,000 Tongbao).",
        },
      },
      {
        type: "paragraph",
        text: {
          zh: "【社区兑换码】WWMGLyoutube（20长鸣玉+5,000通宝+2内观宝箱）、WWMGLtiktok（10长鸣玉+10,000通宝）、WWM251115（10长鸣玉+5,000通宝+鹅名牌匾）、tf33hxjmjc（10长鸣玉+2,000通宝+1内观宝箱）、YYSLSTIB（10长鸣玉+1,000通宝）。",
          en: "[Community Codes] WWMGLyoutube (20 Changming Jade + 5,000 Tongbao + 2 Neiguan Boxes), WWMGLtiktok (10 Changming Jade + 10,000 Tongbao), WWM251115 (10 Changming Jade + 5,000 Tongbao + Goose Plaque), tf33hxjmjc (10 Changming Jade + 2,000 Tongbao + 1 Neiguan Box), YYSLSTIB (10 Changming Jade + 1,000 Tongbao).",
        },
      },
      {
        type: "paragraph",
        text: {
          zh: "【秦川系列】WWMQC1 至 WWMQC30（共30个兑换码），每个可获得：10长鸣玉+20,000通宝+2内观宝箱+2振玉。",
          en: "[Qinchuan Series] WWMQC1 through WWMQC30 (30 codes total). Each grants: 10 Changming Jade + 20,000 Tongbao + 2 Neiguan Boxes + 2 Zhenyu.",
        },
      },
      {
        type: "paragraph",
        text: {
          zh: "【已过期】WWMGO1114、WWMGO1115、WWMG01114 已无法使用。",
          en: "[Expired] WWMGO1114, WWMGO1115, WWMG01114 are no longer valid.",
        },
      },
    ],
  },
];

export function getNewsArticle(slug: string): NewsArticle | undefined {
  return newsArticles.find((a) => a.slug === slug);
}
