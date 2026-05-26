import Link from "next/link";
import type { Locale } from "@/i18n";
import AdBanner from "./AdBanner";
import TableOfContents from "./TableOfContents";
import GuideActions from "./GuideActions";

interface GuideSection {
  id: string;
  title: string;
  content: string[];
}

interface GuideLayoutProps {
  title: string;
  subtitle?: string;
  sections: GuideSection[];
  version?: string;
  lastUpdated?: string;
  locale: Locale;
  dict: Record<string, unknown>;
}

export default function GuideLayout({
  title,
  subtitle,
  sections,
  version,
  lastUpdated,
  locale,
  dict,
}: GuideLayoutProps) {
  const guideDict = (dict.guide ?? {}) as Record<string, string>;
  const breadcrumbHome = guideDict.home ?? "Home";
  const lastUpdatedLabel = guideDict.lastUpdated ?? "Last updated";
  const gameVersionLabel = guideDict.gameVersion ?? "Game Version";

  return (
    <article className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-6" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-stone-500">
          <li>
            <Link
              href={`/${locale}`}
              className="transition-colors hover:text-amber-400"
            >
              {breadcrumbHome}
            </Link>
          </li>
          <li aria-hidden="true" className="text-stone-700">
            /
          </li>
          <li>
            <span className="text-stone-300">{title}</span>
          </li>
        </ol>
      </nav>

      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-stone-100 sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 text-lg text-stone-400">{subtitle}</p>
        )}

        {/* Meta Row */}
        <div className="mt-4 flex flex-wrap items-center gap-4">
          {version && (
            <span className="inline-flex items-center rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400 ring-1 ring-amber-500/20">
              {gameVersionLabel}: {version}
            </span>
          )}
          {lastUpdated && (
            <span className="text-xs text-stone-500">
              {lastUpdatedLabel}: {lastUpdated}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mt-5">
          <GuideActions dict={dict} />
        </div>
      </header>

      {/* Top Ad Banner */}
      <div className="mb-8">
        <AdBanner slot="top" />
      </div>

      {/* Main Content + Sidebar Layout */}
      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Table of Contents - Desktop Sidebar */}
        <aside className="hidden w-64 shrink-0 lg:block">
          <TableOfContents sections={sections} dict={dict} />
        </aside>

        {/* Mobile TOC */}
        <div className="lg:hidden">
          <TableOfContents sections={sections} dict={dict} />
        </div>

        {/* Article Body */}
        <div className="min-w-0 flex-1">
          {sections.map((section, index) => (
            <div key={section.id}>
              {/* Section */}
              <section id={section.id} className="scroll-mt-24">
                <h2 className="mb-4 border-b border-stone-800 pb-2 text-xl font-bold text-stone-100 sm:text-2xl">
                  {section.title}
                </h2>
                <div className="space-y-3">
                  {section.content.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-sm leading-relaxed text-stone-300 sm:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>

              {/* Spacing between sections */}
              {index < sections.length - 1 && (
                <div className="my-8" />
              )}

              {/* Middle Ad after 2nd section */}
              {index === 1 && sections.length > 3 && (
                <div className="my-8">
                  <AdBanner slot="middle" />
                </div>
              )}
            </div>
          ))}

          {/* Bottom Ad Banner */}
          <div className="mt-10">
            <AdBanner slot="bottom" />
          </div>
        </div>
      </div>
    </article>
  );
}
