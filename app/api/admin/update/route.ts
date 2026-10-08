import { NextResponse } from "next/server";
import { isAuthed, LEAD_STATUSES, rpc } from "@/lib/admin";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (!isAuthed(request)) return NextResponse.json({ ok: false }, { status: 401 });
  let b: Record<string, unknown> = {};
  try {
    b = await request.json();
  } catch {}
  const id = String(b.id ?? "");
  const status = String(b.status ?? "");
  const notes = String(b.notes ?? "").slice(0, 5000);
  if (!/^[0-9a-f-]{36}$/i.test(id) || !LEAD_STATUSES.some((s) => s.value === status)) {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 422 });
  }
  try {
    await rpc("admin_update_lead", { p_id: id, p_status: status, p_notes: notes });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
