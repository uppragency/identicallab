import { NextResponse } from "next/server";
import { sendLeadEmails, type Lead } from "@/lib/mail";
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

  // Honeypot: bots fill the hidden field. Pretend success.
  if (clean(body.website, 200)) return NextResponse.json({ ok: true });

  const lead: Lead = {
    source: body.source === "contact" ? "contact" : "offer",
    name: clean(body.name, 200),
    clinic: clean(body.clinic, 200),
    email: clean(body.email, 254).toLowerCase(),
    phone: clean(body.phone, 40),
    workType: clean(body.workType, 300),
    message: clean(body.message, 5000),
    pageUrl: clean(body.pageUrl, 500),
  };

  if (lead.name.length < 2 || !isEmail(lead.email)) {
    return NextResponse.json({ ok: false, error: "invalid_fields" }, { status: 422 });
  }

  const supabase = getSupabase();
  let saved = false;
  if (supabase) {
    const { error } = await supabase.from("leads").insert({
      source: lead.source,
      name: lead.name,
      clinic: lead.clinic || null,
      email: lead.email,
      phone: lead.phone || null,
      work_type: lead.workType || null,
      message: lead.message || null,
      page_url: lead.pageUrl || null,
    });
    if (error) console.error("[leads] insert failed", error.message);
    else saved = true;
  }

  const emailed = await sendLeadEmails(lead);

  // Success if the request reached at least one of the two destinations.
  if (!saved && !emailed) {
    return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
