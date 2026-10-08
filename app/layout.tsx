import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { SEO } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { orgGraph } from "@/lib/jsonld";

const description = SEO["/"].description;

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://identicallab.vercel.app"),
  title: SEO["/"].title,
  description,
  openGraph: {
    type: "website",
    locale: "ro_RO",
    siteName: "iDentical Lab",
    title: SEO["/"].title,
    description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "iDentical Lab, laborator dentar digital" }],
  },
  twitter: { card: "summary_large_image", title: SEO["/"].title, description, images: ["/og.png"] },
  // Keep the preview out of search engines until the production domain is live.
  robots: process.env.ALLOW_INDEXING === "true" ? { index: true, follow: true } : { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F0053",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ro">
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <link rel="preload" href="/fonts/outfit-latin-200-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/outfit-latin-300-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/outfit-latin-400-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>
        <JsonLd data={orgGraph()} />
        {children}
      </body>
    </html>
  );
}
