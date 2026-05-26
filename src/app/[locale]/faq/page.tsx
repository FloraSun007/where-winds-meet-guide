"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getDictionary, isValidLocale, defaultLocale, type Locale } from "@/i18n";
import AdBanner from "@/components/AdBanner";

interface BeginnerSection {
  title: string;
  content: string[];
}

export default function FaqPage() {
  const params = useParams();
  const localeParam = (params?.locale as string) ?? defaultLocale;
  const locale: Locale = isValidLocale(localeParam) ? localeParam : defaultLocale;

  const [dict, setDict] = useState<Record<string, unknown> | null>(null);
  const [activeTab, setActiveTab] = useState<"beginners" | "faq">("beginners");

  if (!dict) {
    getDictionary(locale).then(setDict);
    return (
      <div className="mx-auto max-w-4xl px-4 py-12 text-center text-stone-400">
        Loading...
      </div>
    );
  }

  const faq = dict.faq as Record<string, unknown>;
  const nav = dict.nav as Record<string, string>;
  const beginners = dict.beginners as Record<string, unknown>;
  const tabs = faq.tabs as Record<string, string>;
  const questions = faq.questions as Array<{ q: string; a: string }>;
  const beginnerSections = beginners.sections as Record<string, BeginnerSection>;

  const sectionKeys = Object.keys(beginnerSections);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Link
          href={`/${locale}`}
          className="mb-4 inline-flex items-center text-sm text-amber-400 transition-colors hover:text-amber-300"
        >
          <svg className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {nav.home}
        </Link>
        <h1 className="text-3xl font-bold text-amber-400 sm:text-4xl">{faq.title as string}</h1>
        <p className="mt-2 text-lg text-stone-400">{faq.subtitle as string}</p>
      </div>

      <AdBanner slot="top" />

      {/* Tabs */}
      <div className="mt-8 flex border-b border-stone-700">
        <button
          onClick={() => setActiveTab("beginners")}
          className={`px-6 py-3 text-sm font-semibold transition-colors ${
            activeTab === "beginners"
              ? "border-b-2 border-amber-400 text-amber-400"
              : "text-stone-400 hover:text-stone-200"
          }`}
        >
          {tabs.beginners}
        </button>
        <button
          onClick={() => setActiveTab("faq")}
          className={`px-6 py-3 text-sm font-semibold transition-colors ${
            activeTab === "faq"
              ? "border-b-2 border-amber-400 text-amber-400"
              : "text-stone-400 hover:text-stone-200"
          }`}
        >
          {tabs.faq}
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-8">
        {activeTab === "beginners" && (
          <div className="space-y-8">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-amber-300">{beginners.title as string}</h2>
              <p className="mt-1 text-stone-400">{beginners.subtitle as string}</p>
            </div>
            {sectionKeys.map((key) => {
              const section = beginnerSections[key];
              return (
                <div key={key} className="rounded-xl border border-amber-900/20 bg-stone-900/50 p-6">
                  <h3 className="mb-4 text-lg font-semibold text-amber-400">{section.title}</h3>
                  <div className="space-y-3">
                    {section.content.map((para, i) => (
                      <p key={i} className="text-stone-300 leading-relaxed">{para}</p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === "faq" && (
          <div className="space-y-4">
            {questions.map((item, index) => (
              <details
                key={index}
                className="group rounded-xl border border-amber-900/20 bg-stone-900/50 transition-colors open:border-amber-600/30"
              >
                <summary className="flex cursor-pointer items-center justify-between p-5 text-left font-medium text-stone-200 transition-colors hover:text-amber-400">
                  <span className="pr-4">{item.q}</span>
                  <svg
                    className="h-5 w-5 shrink-0 text-stone-500 transition-transform group-open:rotate-180 group-open:text-amber-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="border-t border-amber-900/20 px-5 pb-5 pt-3">
                  <p className="text-stone-400 leading-relaxed">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        )}
      </div>

      <div className="mt-8">
        <AdBanner slot="bottom" />
      </div>
    </div>
  );
}
