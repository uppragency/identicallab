import "./globals.css";
import { headers } from "next/headers";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "404 | iDentical Lab", robots: { index: false, follow: false } };

const TEXT = {
  ro: { h: "Pagina nu a fost găsită", p: "Adresa nu există sau a fost mutată.", cta: "Înapoi la prima pagină", home: "/" },
  en: { h: "Page not found", p: "This address does not exist or has been moved.", cta: "Back to the home page", home: "/en" },
};

export default async function GlobalNotFound() {
  const h = await headers();
  const lang = h.get("x-site-lang") === "en" ? "en" : "ro";
  const T = TEXT[lang];
  return (
    <html lang={lang}>
      <body>
        <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: "40px", fontFamily: "Helvetica, Arial, sans-serif", textAlign: "center", color: "#1A1A1A" }}>
          <div>
            <div style={{ fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#0F0053" }}>[ 404 ]</div>
            <h1 style={{ fontWeight: 200, fontSize: "clamp(36px, 6vw, 72px)", margin: "16px 0", color: "#0F0053" }}>{T.h}</h1>
            <p style={{ fontWeight: 300, color: "#3A3A44" }}>{T.p}</p>
            <Link href={T.home} style={{ display: "inline-block", marginTop: "24px", padding: "13px 28px", borderRadius: "999px", background: "#0F0053", color: "#fff", textDecoration: "none" }}>
              {T.cta}
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
