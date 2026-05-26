import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary, isValidLocale, defaultLocale, type Locale } from "@/i18n";
import AdBanner from "@/components/AdBanner";
import MembershipClient from "./MembershipClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(isValidLocale(locale) ? locale : defaultLocale);
  const membership = dict.membership as Record<string, unknown>;
  return {
    title: membership.title as string,
    description: membership.subtitle as string,
  };
}

export default async function MembershipPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale: Locale = isValidLocale(localeParam) ? localeParam : defaultLocale;
  const dict = await getDictionary(locale);
  const nav = dict.nav as Record<string, string>;
  const membership = dict.membership as Record<string, unknown>;

  const features = membership.features as Array<{ title: string; desc: string }>;
  const pricing = membership.pricing as Record<string, { price: string; label: string }>;

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
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
        <h1 className="text-3xl font-bold text-amber-400 sm:text-4xl">
          {membership.title as string}
        </h1>
        <p className="mt-2 text-lg text-stone-400">{membership.subtitle as string}</p>
      </div>

      <AdBanner slot="top" />

      {/* Features */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="rounded-xl border border-amber-900/20 bg-stone-900/50 p-6"
          >
            <h3 className="font-semibold text-amber-400">{feature.title}</h3>
            <p className="mt-2 text-sm text-stone-400">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Pricing */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {Object.entries(pricing).map(([key, plan]) => (
          <div
            key={key}
            className={`rounded-xl border p-8 ${
              key === "annual"
                ? "border-amber-600/50 bg-gradient-to-br from-amber-900/20 to-stone-900/50"
                : "border-amber-900/20 bg-stone-900/50"
            }`}
          >
            {key === "annual" && (
              <span className="mb-3 inline-block rounded-full bg-amber-600 px-3 py-1 text-xs font-semibold text-white">
                {locale === "zh" ? "推荐" : "Best Value"}
              </span>
            )}
            <h3 className="text-xl font-bold text-stone-200">{plan.label}</h3>
            <p className="mt-3 text-3xl font-bold text-amber-400">{plan.price}</p>
            <MembershipClient planKey={key} cta={membership.cta as string} />
          </div>
        ))}
      </div>

      <div className="mt-8">
        <AdBanner slot="bottom" />
      </div>
    </div>
  );
}
