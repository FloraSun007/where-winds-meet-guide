export interface StoryQuest {
  id: string;
  title: string;
  titleEn: string;
  region: string;
  regionEn: string;
  badge: string;
  badgeEn: string;
  summary: string;
  summaryEn: string;
  rewards: string;
  rewardsEn: string;
  difficulty: number;
  clicks: number;
}

export const STORY_QUESTS: StoryQuest[] = [
  {
    id: "kf-qiaozhonglaoren",
    title: "敲钟老人",
    titleEn: "The Old Bell Ringer",
    region: "清河",
    regionEn: "Qinghe",
    badge: "剧情",
    badgeEn: "Story",
    summary: "前往清河太平钟楼，调查钟楼内的剑痕和飞镖线索，找到血巾和密信，揭开一段关于中国无悔的往事。",
    summaryEn: "Head to Taiping Bell Tower in Qinghe, investigate sword marks and dart clues, find the bloody scarf and secret letter to uncover a past story.",
    rewards: "长鸣玉、清河探索度、经验值",
    rewardsEn: "Changming Jade, Qinghe Exploration Points, EXP",
    difficulty: 2,
    clicks: 8200,
  },
  {
    id: "kf-youmeiyiren",
    title: "有美一人",
    titleEn: "A Beautiful One",
    region: "开封",
    regionEn: "Kaifeng",
    badge: "剧情",
    badgeEn: "Story",
    summary: "在开封粥铺附近拾取花笺，找到花之卿并将花笺交给她，完成对话即可领取奖励。",
    summaryEn: "Pick up a flower slip near the Kaifeng porridge shop, find Hua Zhiqing and give her the slip to complete the quest.",
    rewards: "长鸣玉、经验值",
    rewardsEn: "Changming Jade, EXP",
    difficulty: 1,
    clicks: 6500,
  },
  {
    id: "kf-wangguiwanggui",
    title: "望归望归",
    titleEn: "Return, Return",
    region: "开封",
    regionEn: "Kaifeng",
    badge: "剧情",
    badgeEn: "Story",
    summary: "推进主线剧情击败无言后获得金簪，在开封角门里找到王芬，将金簪交给她完成任务。",
    summaryEn: "Progress the main story to defeat Wuyan and obtain the golden hairpin, then find Wang Fen at Kaifeng corner gate to deliver it.",
    rewards: "长鸣玉、经验值",
    rewardsEn: "Changming Jade, EXP",
    difficulty: 1,
    clicks: 5800,
  },
  {
    id: "kf-taohuachunxin",
    title: "桃花春信",
    titleEn: "Peach Blossom Spring Letter",
    region: "开封",
    regionEn: "Kaifeng",
    badge: "剧情",
    badgeEn: "Story",
    summary: "在开封醉花阴与白蓉对话，前往三楼找到桃花发簪并交还，完成一段浪漫故事。",
    summaryEn: "Talk to Bai Rong at Zuihuayin in Kaifeng, go to the 3rd floor to find the peach hairpin and return it to complete a romantic tale.",
    rewards: "长鸣玉、经验值",
    rewardsEn: "Changming Jade, EXP",
    difficulty: 1,
    clicks: 5100,
  },
  {
    id: "kf-renshengzhinan",
    title: "人生指南",
    titleEn: "Guide to Life",
    region: "开封",
    regionEn: "Kaifeng",
    badge: "剧情",
    badgeEn: "Story",
    summary: "在大相国寺旁与徐子意对话，调整时间至子时找到容瑾，再找到坠儿并从屋顶偷取指南针交还。",
    summaryEn: "Talk to Xu Ziyi near Daxiangguo Temple, adjust time to Zi hour to find Rong Jin, then find Zhui'er and steal a compass from the rooftop.",
    rewards: "长鸣玉、经验值",
    rewardsEn: "Changming Jade, EXP",
    difficulty: 2,
    clicks: 4700,
  },
];
