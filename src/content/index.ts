import type { Locale } from "@/i18n";

// Re-export content modules
export { buildGuides, type BuildGuide } from "./classes";
export { bossGuides, dungeonGuides, type BossGuide, type DungeonGuide, type BossPhase } from "./bosses";
export { MYSTIC_SKILLS, type MysticSkill, type SkillStep } from "./mystic-skills";

// Helper to get localized text
export function t(localized: { en: string; zh: string }, locale: Locale): string {
  return localized[locale] ?? localized.en;
}
