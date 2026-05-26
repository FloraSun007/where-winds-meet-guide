import Link from "next/link";
import type { Locale } from "@/i18n";

interface FooterProps {
  locale: Locale;
  dict: Record<string, unknown>;
}

export default function Footer({ locale, dict }: FooterProps) {
  const footer = (dict.footer ?? {}) as Record<string, unknown>;
  const nav = (dict.nav ?? {}) as Record<string, string>;
  const meta = (dict.meta ?? {}) as Record<string, string>;

  const columns = (footer.columns ?? []) as Array<{
    title: string;
    links: Array<{ label: string; href: string }>;
  }>;

  const disclaimer = (footer.disclaimer ?? "") as string;
  const copyright = (footer.copyright ?? "") as string;

  return (
    <footer className="border-t border-stone-800 bg-stone-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Footer Columns */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-amber-400">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={`/${locale}${link.href}`}
                      className="text-sm text-stone-400 transition-colors hover:text-amber-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Fallback if no columns configured */}
          {columns.length === 0 && (
            <>
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-amber-400">
                  {nav.guide ?? "Guides"}
                </h3>
                <ul className="space-y-2.5">
                  {(
                    [
                      { key: "beginners", path: "/beginners" },
                      { key: "classes", path: "/classes" },
                      { key: "equipment", path: "/equipment" },
                      { key: "dungeons", path: "/dungeons" },
                    ] as const
                  ).map((item) => (
                    <li key={item.key}>
                      <Link
                        href={`/${locale}${item.path}`}
                        className="text-sm text-stone-400 transition-colors hover:text-amber-400"
                      >
                        {nav[item.key] ?? item.key}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-amber-400">
                  {nav.systems ?? "Systems"}
                </h3>
                <ul className="space-y-2.5">
                  {(
                    [
                      { key: "systems", path: "/systems" },
                      { key: "faq", path: "/faq" },
                      { key: "membership", path: "/membership" },
                    ] as const
                  ).map((item) => (
                    <li key={item.key}>
                      <Link
                        href={`/${locale}${item.path}`}
                        className="text-sm text-stone-400 transition-colors hover:text-amber-400"
                      >
                        {nav[item.key] ?? item.key}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-amber-400">
                  Resources
                </h3>
                <ul className="space-y-2.5">
                  <li>
                    <Link
                      href={`/${locale}`}
                      className="text-sm text-stone-400 transition-colors hover:text-amber-400"
                    >
                      {nav.home ?? "Home"}
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-amber-400">
                  {locale === "zh" ? "关于" : "About"}
                </h3>
                <ul className="space-y-2.5">
                  <li>
                    <Link
                      href={`/${locale}`}
                      className="text-sm text-stone-400 transition-colors hover:text-amber-400"
                    >
                      {locale === "zh" ? "关于本站" : "About This Site"}
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>

        {/* Disclaimer */}
        {disclaimer && (
          <div className="mt-10 border-t border-stone-800 pt-6">
            <p className="text-xs leading-relaxed text-stone-500">
              {disclaimer}
            </p>
          </div>
        )}

        {/* Copyright */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-stone-800 pt-6 sm:flex-row">
          <div className="flex items-center gap-2 text-amber-400">
            <span role="img" aria-label="swords">
              &#9876;&#65039;
            </span>
            <span className="text-sm font-semibold">
              {(meta.siteTitle as string) ?? (dict.siteTitle as string) ?? "Where Winds Meet Guide"}
            </span>
          </div>
          <p className="text-xs text-stone-500">
            {copyright ||
              `© ${new Date().getFullYear()} Where Winds Meet Guide. All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  );
}
