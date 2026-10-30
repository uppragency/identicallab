import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import "../../globals.css";
import { alternatesFor, OG_LOCALE, seoFor, SITE_NAME } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { orgGraph } from "@/lib/jsonld";
import { isLang, LANGS, type Lang } from "@/lib/i18n/config";
import { setPage } from "@/lib/i18n/store";

type Props = { children: ReactNode; params: Promise<{ lang: string }> };

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

const OG_ALT: Record<Lang, string> = { ro: "iDentical Lab, laborator dentar digital", en: "iDentical Lab, digital dental laboratory" };

export async function generateMetadata({ params }: Pick<Props, "params">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const { title, description } = seoFor("/", lang);
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://identicallab.vercel.app"),
    title,
    description,
    alternates: alternatesFor("/", lang),
    openGraph: {
      type: "website",
      locale: OG_LOCALE[lang],
      siteName: SITE_NAME,
      title,
      description,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: OG_ALT[lang] }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
    // Keep the preview out of search engines until the production domain is live.
    robots: process.env.ALLOW_INDEXING === "true" ? { index: true, follow: true } : { index: false, follow: false },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F0053",
};

export default async function RootLayout({ children, params }: Props) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  setPage(lang);
  return (
    <html lang={lang}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <link rel="preload" href="/fonts/outfit-latin-200-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/outfit-latin-300-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/outfit-latin-400-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>
        <JsonLd data={orgGraph(lang)} />
        {children}
      </body>
    </html>
  );
}
