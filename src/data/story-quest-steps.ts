import type { QuestStep } from "./encounter-quest-steps";

export const STORY_QUEST_STEPS: Record<string, QuestStep[]> = {
  "kf-qiaozhonglaoren": [
    {
      text: "前往清河·太平钟楼，找到敲钟老人并与其对话触发任务。",
      textEn: "Head to Taiping Bell Tower in Qinghe, find the old bell ringer and talk to trigger the quest.",
      images: ["/images/quests/story/kf-qiaozhonglaoren/step1.jpg"],
    },
    {
      text: "调查钟楼内的剑痕，找到战斗留下的痕迹。",
      textEn: "Investigate the sword marks inside the bell tower, find traces of battle.",
      images: ["/images/quests/story/kf-qiaozhonglaoren/step2.jpg"],
    },
    {
      text: "找到飞镖线索，调查飞镖的来源。",
      textEn: "Find the dart clues and investigate their origin.",
      images: ["/images/quests/story/kf-qiaozhonglaoren/step3.jpg"],
    },
    {
      text: "在钟楼附近找到血巾，获取关键证据。",
      textEn: "Find the bloody scarf near the bell tower to obtain key evidence.",
      images: ["/images/quests/story/kf-qiaozhonglaoren/step4.jpg"],
    },
    {
      text: "调查钟楼四楼的破坏痕迹，了解更多线索。",
      textEn: "Investigate the damage on the 4th floor of the bell tower for more clues.",
      images: ["/images/quests/story/kf-qiaozhonglaoren/step5.jpg"],
    },
    {
      text: "登上钟楼顶层，阅读碑文并找到密信，了解关于中国无悔的往事。",
      textEn: "Climb to the top of the bell tower, read the inscription and find the secret letter about Wuhui of China.",
    },
    {
      text: "返回敲钟老人处，与其对话完成任务领取奖励。",
      textEn: "Return to the old bell ringer, talk to him to complete the quest and claim rewards.",
    },
  ],

  "kf-youmeiyiren": [
    {
      text: "在开封·粥铺附近，拾取地上的花笺。",
      textEn: "Near the Kaifeng porridge shop, pick up the flower slip on the ground.",
      images: ["/images/quests/story/kf-youmeiyiren/step1.jpg"],
    },
    {
      text: "前往伞铺找到花之卿。",
      textEn: "Go to the umbrella shop and find Hua Zhiqing.",
      images: ["/images/quests/story/kf-youmeiyiren/step2.jpg"],
    },
    {
      text: "将花笺交给花之卿。",
      textEn: "Give the flower slip to Hua Zhiqing.",
      images: ["/images/quests/story/kf-youmeiyiren/step3.jpg"],
    },
    {
      text: "完成对话，领取任务奖励。",
      textEn: "Complete the dialogue and claim the quest rewards.",
      images: ["/images/quests/story/kf-youmeiyiren/step4.jpg"],
    },
    {
      text: "任务完成，获得长鸣玉和经验值奖励。",
      textEn: "Quest complete. Receive Changming Jade and EXP rewards.",
      images: ["/images/quests/story/kf-youmeiyiren/step5.jpg"],
    },
  ],

  "kf-wangguiwanggui": [
    {
      text: "推进主线剧情，击败无言后获得金簪。",
      textEn: "Progress the main story, defeat Wuyan and obtain the golden hairpin.",
      images: ["/images/quests/story/kf-wangguiwanggui/step1.png"],
    },
    {
      text: "前往开封·角门里，找到王芬。",
      textEn: "Go to Kaifeng Corner Gate and find Wang Fen.",
      images: ["/images/quests/story/kf-wangguiwanggui/step2.png"],
    },
    {
      text: "将金簪交给王芬，完成对话。",
      textEn: "Give the golden hairpin to Wang Fen and complete the dialogue.",
      images: ["/images/quests/story/kf-wangguiwanggui/step3.png"],
    },
    {
      text: "任务完成，领取奖励。",
      textEn: "Quest complete, claim rewards.",
    },
  ],

  "kf-taohuachunxin": [
    {
      text: "前往开封·醉花阴，与白蓉对话触发任务。",
      textEn: "Go to Zuihuayin in Kaifeng and talk to Bai Rong to trigger the quest.",
      images: ["/images/quests/story/kf-taohuachunxin/step1.png"],
    },
    {
      text: "前往醉花阴三楼。",
      textEn: "Go to the 3rd floor of Zuihuayin.",
      images: ["/images/quests/story/kf-taohuachunxin/step2.png"],
    },
    {
      text: "在三楼找到桃花发簪，带回给白蓉。",
      textEn: "Find the peach hairpin on the 3rd floor and bring it back to Bai Rong.",
      images: ["/images/quests/story/kf-taohuachunxin/step3.png"],
    },
    {
      text: "将桃花发簪交给白蓉，完成任务领取奖励。",
      textEn: "Give the peach hairpin to Bai Rong, complete the quest and claim rewards.",
      images: ["/images/quests/story/kf-taohuachunxin/step4.png"],
    },
  ],

  "kf-renshengzhinan": [
    {
      text: "在开封·大相国寺旁与徐子意对话触发任务。",
      textEn: "Talk to Xu Ziyi near Daxiangguo Temple in Kaifeng to trigger the quest.",
      images: ["/images/quests/story/kf-renshengzhinan/step1.png", "/images/quests/story/kf-renshengzhinan/step2.png"],
    },
    {
      text: "调整时间至子时，前往指定位置找到容瑾。",
      textEn: "Adjust time to Zi hour and go to the designated location to find Rong Jin.",
      images: ["/images/quests/story/kf-renshengzhinan/step3.png", "/images/quests/story/kf-renshengzhinan/step4.png"],
    },
    {
      text: "找到坠儿，从屋顶偷取指南针。",
      textEn: "Find Zhui'er and steal the compass from the rooftop.",
      images: ["/images/quests/story/kf-renshengzhinan/step5.png", "/images/quests/story/kf-renshengzhinan/step6.png"],
    },
    {
      text: "将指南针交给坠儿，完成任务领取奖励。",
      textEn: "Give the compass to Zhui'er, complete the quest and claim rewards.",
      images: ["/images/quests/story/kf-renshengzhinan/step7.png", "/images/quests/story/kf-renshengzhinan/step8.png"],
    },
  ],
};
