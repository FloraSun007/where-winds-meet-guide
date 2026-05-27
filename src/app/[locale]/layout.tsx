import type { Metadata } from "next";
import { getDictionary, isValidLocale, defaultLocale } from "@/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(isValidLocale(locale) ? locale : defaultLocale);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://wherewindsmeet-guide.vercel.app";
  const title = (dict.meta as Record<string, string>).siteTitle;
  const description = (dict.meta as Record<string, string>).siteDescription;

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: title,
      template: `%s | ${title}`,
    },
    description,
    alternates: {
      canonical: `/${locale}`,
      languages: { en: "/en", zh: "/zh" },
    },
    openGraph: {
      title,
      description,
      locale: locale === "zh" ? "zh_CN" : "en_US",
      type: "website",
      siteName: "Where Winds Meet Guide",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    verification: {
      google: "W1x36O27yuNEII1adhl7-6p0faAgTQi1wmYAkX8CzPA",
    },
  };
}

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "zh" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const dict = await getDictionary(validLocale);

  return (
    <html lang={validLocale} className="dark">
      <body className="min-h-screen bg-stone-950 text-stone-300 antialiased">
        <Header locale={validLocale} dict={dict} />
        <main className="min-h-[calc(100vh-4rem)]">{children}</main>
        <Footer locale={validLocale} dict={dict} />
      </body>
    </html>
  );
}
