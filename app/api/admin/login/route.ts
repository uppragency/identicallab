import { NextResponse } from "next/server";
import { ADMIN_COOKIE, checkPassword, clearLimit, clientIp, makeSession, rateLimited } from "@/lib/admin";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const ip = clientIp(request);
  if (rateLimited(ip)) return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  let pass = "";
  try {
    pass = String((await request.json()).password ?? "");
  } catch {}
  if (!pass || !checkPassword(pass)) {
    await new Promise((r) => setTimeout(r, 600));
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 401 });
  }
  const s = makeSession();
  if (!s) return NextResponse.json({ ok: false, error: "not_configured" }, { status: 500 });
  clearLimit(ip);
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, s.value, { httpOnly: true, secure: true, sameSite: "strict", path: "/", maxAge: s.maxAge });
  return res;
}
