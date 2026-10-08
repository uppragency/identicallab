import { NextResponse } from "next/server";
import { rpc, type AdminLead } from "@/lib/admin";
import { sendOverdueReminder } from "@/lib/mail";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Vercel Cron: emails leads still in status "nou" after 24h. */
export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET;
  if (!secret || request.headers.get("authorization") !== `Bearer ${secret}`) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }
  try {
    const leads = await rpc<AdminLead[]>("admin_list_leads", {});
    const overdue = leads.filter((l) => l.status === "nou" && Date.now() - new Date(l.created_at).getTime() > 24 * 36e5);
    const sent = overdue.length ? await sendOverdueReminder(overdue) : false;
    return NextResponse.json({ ok: true, overdue: overdue.length, sent });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
