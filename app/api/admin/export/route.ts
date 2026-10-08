import { NextResponse } from "next/server";
import { isAuthed, rpc, type AdminLead, type AdminSub } from "@/lib/admin";

export const runtime = "nodejs";

const esc = (v: unknown) => {
  let s = v == null ? "" : String(v);
  if (/^[=+\-@\t\r]/.test(s)) s = "'" + s; // neutralise spreadsheet formulas
  return `"${s.replace(/"/g, '""')}"`;
};

export async function GET(request: Request) {
  if (!isAuthed(request)) return new NextResponse("Unauthorized", { status: 401 });
  const type = new URL(request.url).searchParams.get("type") === "subscribers" ? "subscribers" : "leads";
  try {
    let csv: string;
    if (type === "leads") {
      const rows = await rpc<AdminLead[]>("admin_list_leads", {});
      const head = ["Data", "Sursa", "Status", "Nume", "Clinica", "Email", "Telefon", "Tip lucrare", "Mesaj", "Pagina", "Notite"];
      csv = [head.map(esc).join(",")]
        .concat(rows.map((r) => [r.created_at, r.source, r.status, r.name, r.clinic, r.email, r.phone, r.work_type, r.message, r.page_url, r.notes].map(esc).join(",")))
        .join("\r\n");
    } else {
      const rows = await rpc<AdminSub[]>("admin_list_subscribers", {});
      csv = [["Data", "Email"].map(esc).join(",")].concat(rows.map((r) => [r.created_at, r.email].map(esc).join(","))).join("\r\n");
    }
    return new NextResponse("﻿" + csv, {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="${type}-${new Date().toISOString().slice(0, 10)}.csv"`,
        "Cache-Control": "no-store",
      },
    });
  } catch {
    return new NextResponse("Error", { status: 500 });
  }
}
