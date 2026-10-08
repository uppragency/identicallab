import type { AdminLead, AdminSub } from "./admin-shared";
import { LEAD_STATUSES } from "./admin-shared";
export { LEAD_STATUSES };
export type { AdminLead, AdminSub };
import { createHash, createHmac, timingSafeEqual } from "node:crypto";

export const ADMIN_COOKIE = "idl_admin";
const TTL_S = 12 * 60 * 60;

function secret(): string | null {
  const p = process.env.ADMIN_PASSWORD;
  const t = process.env.ADMIN_DB_TOKEN;
  if (!p || !t) return null;
  return createHash("sha256").update(`${p}|${t}`).digest("hex");
}

function sign(exp: number, key: string) {
  return createHmac("sha256", key).update(String(exp)).digest("hex");
}

export function checkPassword(input: string): boolean {
  const p = process.env.ADMIN_PASSWORD;
  if (!p) return false;
  const a = createHash("sha256").update(input).digest();
  const b = createHash("sha256").update(p).digest();
  return timingSafeEqual(a, b);
}

export function makeSession(): { value: string; maxAge: number } | null {
  const key = secret();
  if (!key) return null;
  const exp = Math.floor(Date.now() / 1000) + TTL_S;
  return { value: `${exp}.${sign(exp, key)}`, maxAge: TTL_S };
}

export function verifySession(value: string | undefined): boolean {
  const key = secret();
  if (!key || !value) return false;
  const [expS, mac] = value.split(".");
  const exp = Number(expS);
  if (!exp || !mac || exp < Date.now() / 1000) return false;
  const good = sign(exp, key);
  if (mac.length !== good.length) return false;
  return timingSafeEqual(Buffer.from(mac), Buffer.from(good));
}

export function cookieFromRequest(request: Request): string | undefined {
  const raw = request.headers.get("cookie") || "";
  const m = raw.split(/;\s*/).find((c) => c.startsWith(ADMIN_COOKIE + "="));
  return m ? decodeURIComponent(m.slice(ADMIN_COOKIE.length + 1)) : undefined;
}

export function isAuthed(request: Request) {
  return verifySession(cookieFromRequest(request));
}

/** Best-effort in-memory limiter (per server instance). */
const hits = new Map<string, { n: number; t: number }>();
export function rateLimited(ip: string, max = 5, windowMs = 15 * 60 * 1000): boolean {
  const now = Date.now();
  const h = hits.get(ip);
  if (!h || now - h.t > windowMs) {
    hits.set(ip, { n: 1, t: now });
    return false;
  }
  h.n += 1;
  return h.n > max;
}
export function clearLimit(ip: string) {
  hits.delete(ip);
}

export async function rpc<T = unknown>(fn: string, args: Record<string, unknown>): Promise<T> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY;
  const token = process.env.ADMIN_DB_TOKEN;
  if (!url || !key || !token) throw new Error("not_configured");
  const res = await fetch(`${url}/rest/v1/rpc/${fn}`, {
    method: "POST",
    headers: { apikey: key, Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ p_token: token, ...args }),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`rpc_${res.status}`);
  const text = await res.text();
  return (text ? JSON.parse(text) : null) as T;
}

export function clientIp(request: Request) {
  return (request.headers.get("x-forwarded-for") || "unknown").split(",")[0].trim();
}
