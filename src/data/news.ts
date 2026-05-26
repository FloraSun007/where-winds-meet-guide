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
];

export function getNewsArticle(slug: string): NewsArticle | undefined {
  return newsArticles.find((a) => a.slug === slug);
}
