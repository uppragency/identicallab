import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const description =
  "Laborator dentar high-end pentru cabinete stomatologice: scanare 3D, design CAD/CAM, ghiduri chirurgicale și modele printate. 30 de ani de experiență, peste 700 de cabinete partenere.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://identicallab.vercel.app"),
  title: "iDentical Lab | Laborator dentar digital în București",
  description,
  openGraph: {
    type: "website",
    locale: "ro_RO",
    siteName: "iDentical Lab",
    title: "iDentical Lab | Identically Crafted, Uniquely Yours.",
    description,
  },
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
      <body>{children}</body>
    </html>
  );
}
