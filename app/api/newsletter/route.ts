import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { clean, isEmail } from "@/lib/validation";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  if (clean(body.website, 200)) return NextResponse.json({ ok: true });

  const email = clean(body.email, 254).toLowerCase();
  if (!isEmail(email)) return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 422 });

  const supabase = getSupabase();
  if (!supabase) return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });

  const { error } = await supabase.from("newsletter_subscribers").insert({ email });
  // 23505 = already subscribed. Treat as success so the endpoint does not reveal who is on the list.
  if (error && error.code !== "23505") {
    console.error("[newsletter] insert failed", error.message);
    return NextResponse.json({ ok: false, error: "insert_failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
