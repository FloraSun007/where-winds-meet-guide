"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n";

interface HeaderProps {
  locale: Locale;
  dict: Record<string, unknown>;
}

type NavLinkKey =
  | "home"
  | "builds"
  | "bosses"
  | "equipment"
  | "systems"
  | "faq"
  | "exploration"
  | "membership";

const NAV_KEYS: NavLinkKey[] = [
  "home",
  "builds",
  "equipment",
  "exploration",
  "bosses",
  "systems",
  "faq",
  "membership",
];

const NAV_PATHS: Record<NavLinkKey, string> = {
  home: "",
  builds: "builds",
  bosses: "bosses",
  equipment: "quests",
  systems: "systems",
  faq: "faq",
  exploration: "exploration",
  membership: "membership",
};

export default function Header({ locale, dict }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const nav = (dict.nav ?? {}) as Record<string, string>;
  const meta = (dict.meta ?? {}) as Record<string, string>;
  const siteTitle =
    (meta.siteTitle as string) ?? (dict.siteTitle as string) ?? "Where Winds Meet Guide";

  const toggleLocale: Locale = locale === "en" ? "zh" : "en";
  const toggleLabel = locale === "en" ? "中文" : "EN";

  // Replace locale in current path for language switcher
  const switchPath = pathname.replace(`/${locale}`, `/${toggleLocale}`) || `/${toggleLocale}`;

  return (
    <header className="sticky top-0 z-50 border-b border-stone-800 bg-stone-950/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2 text-amber-400 transition-colors hover:text-amber-300"
        >
          <span className="text-2xl" role="img" aria-label="swords">
            &#9876;&#65039;
          </span>
          <span className="hidden text-lg font-bold tracking-wide sm:inline">
            {siteTitle}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {NAV_KEYS.map((key) => {
            const path = NAV_PATHS[key];
            const href = path ? `/${locale}/${path}` : `/${locale}`;
            return (
              <Link
                key={key}
                href={href}
                className="rounded-md px-3 py-2 text-sm font-medium text-stone-300 transition-colors hover:bg-stone-800 hover:text-amber-400"
              >
                {nav[key] ?? key}
              </Link>
            );
          })}
        </nav>

        {/* Right side: Language switcher + mobile menu button */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <Link
            href={switchPath}
            className="flex h-8 items-center rounded-md border border-stone-700 bg-stone-900 px-3 text-xs font-semibold text-stone-300 transition-colors hover:border-amber-700 hover:text-amber-400"
            locale={false}
          >
            {toggleLabel}
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-stone-400 lg:hidden hover:text-amber-400 focus:outline-none"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="border-t border-stone-800 bg-stone-950 px-4 pb-4 pt-2">
          {NAV_KEYS.map((key) => {
            const path = NAV_PATHS[key];
            const href = path ? `/${locale}/${path}` : `/${locale}`;
            return (
              <Link
                key={key}
                href={href}
                className="block rounded-md px-3 py-2.5 text-sm font-medium text-stone-300 transition-colors hover:bg-stone-800 hover:text-amber-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                {nav[key] ?? key}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
