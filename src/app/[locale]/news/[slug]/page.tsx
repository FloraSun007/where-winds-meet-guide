import Link from "next/link";
import { getDictionary, isValidLocale, defaultLocale, type Locale } from "@/i18n";
import { getNewsArticle } from "@/data/news";

export function generateStaticParams() {
  return [{ locale: "en", slug: "pc-performance-review" }, { locale: "zh", slug: "pc-performance-review" }];
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: localeParam, slug } = await params;
  const locale: Locale = isValidLocale(localeParam) ? localeParam : defaultLocale;
  const dict = await getDictionary(locale);
  const article = getNewsArticle(slug);

  if (!article) {
    return (
      <div className="mx-auto flex min-h-[50vh] max-w-3xl flex-col items-center justify-center px-4">
        <p className="text-lg text-stone-500">{locale === "zh" ? "文章未找到" : "Article not found"}</p>
        <Link href={`/${locale}`} className="mt-4 text-amber-500 hover:text-amber-400">
          {locale === "zh" ? "返回首页" : "Back to Home"}
        </Link>
      </div>
    );
  }

  const t = (field: { zh: string; en: string }) => (locale === "zh" ? field.zh : field.en);

  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 text-sm text-stone-500">
        <Link href={`/${locale}`} className="hover:text-amber-400">
          {locale === "zh" ? "首页" : "Home"}
        </Link>
        <span>/</span>
        <span className="text-stone-400">{locale === "zh" ? "热门资讯" : "Hot News"}</span>
        <span>/</span>
        <span className="truncate text-stone-400">{t(article.title)}</span>
      </nav>

      {/* Header */}
      <header className="mb-10 border-b border-amber-900/20 pb-8">
        <h1 className="text-2xl font-bold leading-tight text-amber-100 sm:text-3xl lg:text-4xl">
          {t(article.title)}
        </h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-stone-500">
          <span>{article.date}</span>
          <span className="h-3 w-px bg-stone-700" />
          <span>{t(article.source)}</span>
        </div>
      </header>

      {/* Content */}
      <div className="space-y-6">
        {article.content.map((block, i) => {
          if (block.type === "paragraph") {
            return (
              <p key={i} className="text-base leading-relaxed text-stone-300 sm:text-lg">
                {t(block.text)}
              </p>
            );
          }
          return (
            <figure key={i} className="my-8">
              <div className="overflow-hidden rounded-xl border border-amber-900/10">
                <img
                  src={block.src}
                  alt={block.alt}
                  className="w-full object-cover"
                  loading="lazy"
                />
              </div>
            </figure>
          );
        })}
      </div>

      {/* Back link */}
      <div className="mt-12 border-t border-amber-900/15 pt-8">
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-2 text-sm text-amber-500 transition-colors hover:text-amber-400"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          {locale === "zh" ? "返回首页" : "Back to Home"}
        </Link>
      </div>
    </article>
  );
}
