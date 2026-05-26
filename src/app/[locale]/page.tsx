import Link from "next/link";
import { getDictionary, isValidLocale, defaultLocale, type Locale } from "@/i18n";
import AdBanner from "@/components/AdBanner";


const OFFICIAL_URL = "https://wherewindsmeet.163.com";

/* ---------- Inline SVG Icons ---------- */
const Icons: Record<string, (props: React.SVGProps<SVGSVGElement>) => React.ReactElement> = {
  players: (p) => (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="11" cy="10" r="4" /><path d="M4 26c0-4.4 3.1-8 7-8s7 3.6 7 8" />
      <circle cx="23" cy="10" r="3.5" /><path d="M17 26c0-4.4 2.7-8 6-8s6 3.6 6 8" />
    </svg>
  ),
  guides: (p) => (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" {...p}>
      <path d="M6 6c0 2-1 3.5-2.5 4C5 10.5 6 12 6 14" />
      <path d="M26 6c0 2 1 3.5 2.5 4C27 10.5 26 12 26 14" />
      <line x1="6" y1="10" x2="26" y2="10" /><line x1="10" y1="16" x2="22" y2="16" /><line x1="10" y1="20" x2="18" y2="20" />
    </svg>
  ),
  classes: (p) => (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M16 4L14 10h-5l4 3-1.5 6L16 15l4.5 4L19 13l4-3h-5L16 4z" />
      <line x1="16" y1="20" x2="16" y2="28" /><line x1="10" y1="24" x2="22" y2="24" />
    </svg>
  ),
  regions: (p) => (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="16" cy="16" r="12" /><path d="M16 4c3 3 5 7 5 12s-2 9-5 12" /><path d="M16 4c-3 3-5 7-5 12s2 9 5 12" />
      <line x1="4" y1="16" x2="28" y2="16" />
    </svg>
  ),
  scroll: (p) => (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" {...p}>
      <path d="M7 4v24M25 4v24M7 8h18M7 14h18M7 20h12M7 26h18" />
      <path d="M4 4c0 2 1 3 3 3M25 4c0 2 1 3 3 3M4 28c0-2 1-3 3-3M25 28c0-2 1-3 3-3" />
    </svg>
  ),
  swords: (p) => (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M6 26L22 10M10 6l16 16M6 26l4-4M26 6l-4 4" />
      <circle cx="16" cy="16" r="2" />
      <path d="M8 24l-4 4M24 8l4-4" />
    </svg>
  ),
  compass: (p) => (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="16" cy="16" r="12" />
      <polygon points="16,6 18,14 16,16 14,14" fill="currentColor" opacity={0.3} />
      <polygon points="16,26 14,18 16,16 18,18" fill="currentColor" opacity={0.3} />
      <line x1="16" y1="2" x2="16" y2="6" /><line x1="16" y1="26" x2="16" y2="30" />
      <line x1="2" y1="16" x2="6" y2="16" /><line x1="26" y1="16" x2="30" y2="16" />
    </svg>
  ),
  robe: (p) => (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 4h8v3l4 2-2 8h-2v11H12V17h-2L8 9l4-2V4z" />
      <line x1="16" y1="7" x2="16" y2="17" /><line x1="13" y1="11" x2="19" y2="11" />
    </svg>
  ),
  skull: (p) => (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M16 4C10 4 6 8 6 14c0 4 2 7 5 9v3h10v-3c3-2 5-5 5-9 0-6-4-10-10-10z" />
      <circle cx="12" cy="13" r="2" /><circle cx="20" cy="13" r="2" />
      <path d="M12 22v2M16 22v3M20 22v2" />
    </svg>
  ),
  play: (p) => (
    <svg viewBox="0 0 32 32" fill="currentColor" {...p}>
      <path d="M12 6l14 10-14 10V6z" />
    </svg>
  ),
  arrow: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  ),
};

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale: Locale = isValidLocale(localeParam) ? localeParam : defaultLocale;
  const dict = await getDictionary(locale);
  const hp = dict.homepage as Record<string, unknown>;
  const hero = hp.hero as Record<string, string>;
  const hpStats = hp.stats as Record<string, { label: string; value: string }>;
  const hpFeatures = hp.features as Record<string, { title: string; desc: string }>;
  const news = hp.news as Record<string, unknown>;
  const newsDownload = news.download as Record<string, string>;
  const newsItems = (news.newsItems ?? []) as Array<{ title: string; date: string; image: string; slug: string }>;
  const guideCategories = hp.guideCategories as {
    title: string;
    sections: Array<{
      key: string;
      title: string;
      links: Array<{ title: string; href: string }>;
    }>;
  };
  const cta = hp.cta as Record<string, unknown>;
  const ctaCategories = cta.categories as Record<string, { title: string }>;

  const featureCards = [
    { key: "quests", href: `/${locale}/quests`, icon: "scroll" },
    { key: "builds", href: `/${locale}/builds`, icon: "swords" },
    { key: "exploration", href: `/${locale}/exploration`, icon: "compass" },
    { key: "costume", href: `/${locale}/equipment`, icon: "robe" },
    { key: "bosses", href: `/${locale}/bosses`, icon: "skull" },
  ];

  const statItems = [
    { key: "players", icon: "players", href: OFFICIAL_URL, external: true },
    { key: "guides", icon: "guides", href: `/${locale}/beginners`, external: false },
    { key: "classes", icon: "classes", href: `/${locale}/classes`, external: false },
    { key: "regions", icon: "regions", href: `/${locale}/exploration`, external: false },
  ];

  const ctaButtons = [
    { key: "beginners", href: `/${locale}/beginners` },
    { key: "builds", href: `/${locale}/builds` },
    { key: "classes", href: `/${locale}/classes` },
    { key: "equipment", href: `/${locale}/equipment` },
    { key: "bosses", href: `/${locale}/bosses` },
    { key: "exploration", href: `/${locale}/exploration` },
  ];

  const LinkWrapper = ({ href, external, children }: { href: string; external: boolean; children: React.ReactNode }) =>
    external ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">{children}</a>
    ) : (
      <Link href={href} className="block">{children}</Link>
    );

  return (
    <>
      {/* ========== Hero Section ========== */}
      <section className="relative min-h-[420px] overflow-hidden border-b border-amber-900/20 sm:min-h-[520px] lg:min-h-[620px]">
        {/* Background image — focus on face/upper area */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')", backgroundPosition: "center 25%" }}
        />
        {/* Bottom gradient for text readability */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />

        {/* Title + Subtitle — centered, small */}
        <div className="absolute inset-x-0 bottom-16 z-10 flex flex-col items-center gap-2 px-6 text-center sm:bottom-20">
          <h1 className="gold-shimmer-text text-xl font-bold tracking-widest drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] sm:text-2xl lg:text-3xl">
            {hero.title}
          </h1>
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-amber-500/40" />
            <p className="text-xs font-medium tracking-wider text-amber-300/70 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] sm:text-sm">
              {hero.subtitle}
            </p>
            <div className="h-px w-8 bg-amber-500/40" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute inset-x-0 bottom-3 z-10 flex justify-center sm:bottom-4">
          <div className="scroll-indicator flex flex-col items-center gap-1.5">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400/70 drop-shadow-[0_0_8px_rgba(212,160,23,0.4)]">
              <path d="m19 12-7 7-7-7" />
            </svg>
            <div className="h-5 w-px bg-gradient-to-b from-amber-400/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* ========== CTA — Guides + Download ========== */}
      <section className="border-b border-amber-900/15 bg-gradient-to-b from-stone-900/40 to-stone-950">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
            {/* Left — Categorized Guide Buttons */}
            <div>
              <h3 className="text-2xl font-bold text-amber-400">{cta.title as string}</h3>
              <p className="mt-2 text-sm text-stone-500">{cta.subtitle as string}</p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {ctaButtons.map((btn) => {
                  const cat = ctaCategories[btn.key];
                  return (
                    <Link
                      key={btn.key}
                      href={btn.href}
                      className="group flex items-center gap-3 rounded-lg border border-amber-900/15 bg-gradient-to-r from-stone-900 to-stone-950 px-4 py-3.5 transition-all hover:border-amber-600/40 hover:bg-stone-900/80 hover:shadow-lg hover:shadow-amber-900/10 sm:px-5"
                    >
                      <span className="text-sm font-semibold text-amber-400 group-hover:text-amber-300">
                        {cat.title}
                      </span>
                      <span className="ml-auto h-4 w-4 text-amber-600/40 transition-colors group-hover:text-amber-400">
                        <Icons.arrow />
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Right — Download */}
            <div>
              <div className="mb-6 border-l-4 border-amber-500 pl-4">
                <h2 className="text-2xl font-bold text-amber-400">{newsDownload.title}</h2>
                <p className="mt-1 text-sm text-stone-500">{newsDownload.subtitle}</p>
              </div>
              <div className="flex flex-col gap-4">
                {/* Global Official */}
                <a
                  href="https://www.wherewindsmeetgame.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-amber-900/15 bg-gradient-to-r from-stone-900 to-stone-950 p-5 transition-all hover:border-amber-600/40 hover:bg-stone-900/80 hover:shadow-lg hover:shadow-amber-900/10"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-amber-600/10 text-amber-500 transition-colors group-hover:bg-amber-600/20 group-hover:text-amber-400">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                      <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-amber-400 group-hover:text-amber-300">{newsDownload.global}</p>
                    <p className="text-xs text-stone-500">wherewindsmeetgame.com</p>
                  </div>
                  <span className="h-4 w-4 text-amber-600/40 transition-colors group-hover:text-amber-400"><Icons.arrow /></span>
                </a>
                {/* Steam */}
                <a
                  href="https://store.steampowered.com/app/3564740/Where_Winds_Meet/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-amber-900/15 bg-gradient-to-r from-stone-900 to-stone-950 p-5 transition-all hover:border-amber-600/40 hover:bg-stone-900/80 hover:shadow-lg hover:shadow-amber-900/10"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-amber-600/10 text-amber-500 transition-colors group-hover:bg-amber-600/20 group-hover:text-amber-400">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-amber-400 group-hover:text-amber-300">{newsDownload.steam}</p>
                    <p className="text-xs text-stone-500">Steam Store</p>
                  </div>
                  <span className="h-4 w-4 text-amber-600/40 transition-colors group-hover:text-amber-400"><Icons.arrow /></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AdBanner slot="top" />

      {/* ========== Feature Cards ========== */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-5">
          {featureCards.map((card) => {
            const feature = hpFeatures[card.key];
            const Icon = Icons[card.icon];
            return (
              <Link key={card.key} href={card.href} className="group">
                <div className="corner-accent flex h-full flex-col overflow-hidden rounded-xl border border-amber-900/15 bg-gradient-to-b from-stone-900/80 to-stone-950/80 transition-all hover:border-amber-600/40 hover:shadow-xl hover:shadow-amber-900/10">
                  <div className="flex h-24 items-center justify-center bg-gradient-to-br from-stone-900 to-stone-950 sm:h-28">
                    <span className="h-12 w-12 text-amber-500/80 drop-shadow-[0_0_8px_rgba(212,160,23,0.3)] transition-all group-hover:text-amber-400 group-hover:drop-shadow-[0_0_16px_rgba(212,160,23,0.5)] sm:h-14 sm:w-14">
                      <Icon />
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-bold text-amber-400 group-hover:text-amber-300 sm:text-lg">
                      {feature.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-stone-500 sm:text-sm">{feature.desc}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <AdBanner slot="middle" />

      {/* ========== Hot News + Guide Categories ========== */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Left — Hot News */}
          <div className="flex flex-col">
            <div className="mb-6 flex items-end justify-between">
              <div className="border-l-4 border-amber-500 pl-4">
                <h2 className="text-2xl font-bold text-amber-400">{news.title as string}</h2>
                <p className="mt-1 text-sm text-stone-500">{news.subtitle as string}</p>
              </div>
              <span className="text-sm text-amber-600/60">{news.viewAll as string} &rarr;</span>
            </div>
            <div className="space-y-3">
              {newsItems.map((item, i) => (
                <Link
                  key={i}
                  href={`/${locale}/news/${item.slug}`}
                  className="group flex items-center gap-4 rounded-xl border border-amber-900/10 bg-stone-900/50 p-4 transition-all hover:border-amber-600/20"
                >
                  <div className="h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-gradient-to-br from-stone-800 to-stone-900">
                    <img src={item.image} alt="" className="h-full w-full object-cover" loading="lazy" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="line-clamp-2 text-sm font-medium text-stone-300 transition-colors group-hover:text-amber-300">
                      {item.title}
                    </p>
                    <p className="mt-1.5 text-xs text-stone-600">{item.date}</p>
                  </div>
                </Link>
              ))}
              {newsItems.length === 0 && (
                <div className="flex items-center justify-center rounded-xl border border-amber-900/10 bg-stone-900/50 p-8">
                  <p className="text-sm text-stone-600">{news.placeholder as string}</p>
                </div>
              )}
            </div>
          </div>

          {/* Right — Guide Categories (scrollable to match left height) */}
          <div className="flex flex-col">
            <div className="mb-6 border-l-4 border-amber-500 pl-4">
              <h2 className="text-2xl font-bold text-amber-400">{guideCategories.title}</h2>
            </div>
            <div className="flex-1 space-y-5 overflow-y-auto pr-1 lg:max-h-none">
              {guideCategories.sections.map((section) => (
                <div key={section.key}>
                  <h3 className="mb-2.5 border-b border-amber-900/20 pb-1.5 text-sm font-bold text-amber-400/80">
                    {section.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {section.links.map((link) => (
                      <Link
                        key={link.title}
                        href={`/${locale}${link.href}`}
                        className="rounded-md border border-amber-900/10 bg-stone-900/60 px-3 py-1.5 text-xs text-stone-400 transition-all hover:border-amber-600/30 hover:bg-stone-800/80 hover:text-amber-300"
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AdBanner slot="bottom" />
    </>
  );
}
