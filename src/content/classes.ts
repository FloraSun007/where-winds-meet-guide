export interface BuildGuide {
  id: string;
  name: { en: string; zh: string };
  subtitle: { en: string; zh: string };
  weapons: { primary: { en: string; zh: string }; secondary: { en: string; zh: string } };
  tier: string;
  role: { en: string; zh: string };
  overview: { en: string; zh: string };
  coreMechanics: { en: string[]; zh: string[] };
  skillPriority: { en: string[]; zh: string[] };
  comboGuide: { en: string[]; zh: string[] };
  earlyProgression: { en: string[]; zh: string[] };
  recommendedGear: { en: string[]; zh: string[] };
  tips: { en: string[]; zh: string[] };
}

export const buildGuides: BuildGuide[] = [
  {
    id: "swordsman",
    name: { en: "Swordsman (Nameless Sword)", zh: "剑客（无名剑法）" },
    subtitle: { en: "Balanced Fighter - Best for Beginners", zh: "均衡战士 — 新手首选" },
    weapons: { primary: { en: "Nameless Sword", zh: "无名剑法" }, secondary: { en: "Nameless Spear", zh: "无名枪法" } },
    tier: "T1",
    role: { en: "Melee DPS", zh: "近战输出" },
    overview: { en: "Balanced melee fighter with reliable sustained DPS via charged sword qi.", zh: "攻防兼备的近战职业，通过蓄力剑气提供稳定持续输出。" },
    coreMechanics: { en: ["Q skill provides shield and multi-hit sword qi"], zh: ["Q技能提供护盾和多道剑气"] },
    skillPriority: { en: ["Max Q first, then charged heavy"], zh: ["优先点满Q技能，再加强蓄力重击"] },
    comboGuide: { en: ["Q → Charged Qi → Light×3 → Heavy → Special"], zh: ["Q突进 → 蓄力剑气 → 轻击×3 → 重击 → 特殊技"] },
    earlyProgression: { en: ["Follow main quest, prioritize Q skill"], zh: ["跟随主线，优先提升Q技能"] },
    recommendedGear: { en: ["Yudou + Yixiang set for early game"], zh: ["前期搭配玉斗+易相套装"] },
    tips: { en: ["Charged sword qi is your main damage source"], zh: ["蓄力剑气是核心伤害来源"] },
  },
];
