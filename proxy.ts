import { NextResponse, type NextRequest } from "next/server";
import { enToRo, roToEn } from "@/lib/i18n/config";

/**
 * Language routing. Romanian lives at the root (/servicii), English under /en with English slugs (/en/services).
 * Both are served from app/(site)/[lang]/<romanian folder>: the proxy rewrites public URLs to that internal shape
 * and redirects the internal shapes (/ro/..., /en/servicii) to their public equivalents.
 */
export function proxy(req: NextRequest) {
  const { pathname, search } = req.nextUrl;
  const go = (path: string, redirect = false) => {
    const url = req.nextUrl.clone();
    url.pathname = path;
    url.search = search;
    if (redirect) return NextResponse.redirect(url, 308);
    const headers = new Headers(req.headers);
    headers.set("x-site-lang", path === "/en" || path.startsWith("/en/") ? "en" : "ro");
    return NextResponse.rewrite(url, { request: { headers } });
  };

  if (pathname === "/ro" || pathname.startsWith("/ro/")) return go(pathname.slice(3) || "/", true);

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const rest = pathname.slice(3) || "/";
    const ro = enToRo(rest);
    if (ro !== null) return go("/en" + (ro === "/" ? "" : ro));
    const en = roToEn(rest);
    if (en !== null && en !== rest) return go("/en" + (en === "/" ? "" : en), true);
    return go(pathname);
  }

  return go("/ro" + (pathname === "/" ? "" : pathname));
}

export const config = {
  // Skips the API, Next internals, the admin dashboard and every file with an extension (images, fonts, robots.txt, sitemap.xml).
  matcher: ["/((?!api|_next|leads-x7k2p9w4tq|.*\\..*).*)"],
};
