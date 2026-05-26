import { MetadataRoute } from "next";
import { ENCOUNTER_QUESTS } from "@/data/encounter-quests";
import { STORY_QUESTS } from "@/data/story-quests";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://where-winds-meet-guide.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["en", "zh"];
  const staticPages = [
    "", "/beginners", "/classes", "/builds", "/bosses",
    "/equipment", "/exploration", "/quests", "/faq", "/systems",
  ];

  const pages: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of staticPages) {
      pages.push({
        url: `${BASE_URL}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === "" ? "daily" : "weekly",
        priority: page === "" ? 1.0 : 0.8,
      });
    }
  }

  for (const locale of locales) {
    for (const q of [...ENCOUNTER_QUESTS, ...STORY_QUESTS]) {
      pages.push({
        url: `${BASE_URL}/${locale}/quests/${q.id}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  const bossSlugs = ["yanli-guangming","xiahou-xu","gongsun-deng","tuo-ba-yue"];
  for (const locale of locales) {
    for (const slug of bossSlugs) {
      pages.push({
        url: `${BASE_URL}/${locale}/bosses/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  return pages;
}
