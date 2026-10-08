"use client";
import { useMemo, useState } from "react";
import { LEAD_STATUSES, type AdminLead, type AdminSub } from "@/lib/admin-shared";

const font = "var(--font-outfit), Helvetica, sans-serif";
const navy = "#0F0053";
const teal = "#26B7BC";
const statusColor: Record<string, string> = { nou: "#26B7BC", contactat: "#B7791F", ofertat: "#5B4BC4", castigat: "#2E7D32", pierdut: "#8A8A94" };
const fmt = (s: string) => new Date(s).toLocaleString("ro-RO", { dateStyle: "short", timeStyle: "short" });
const input: React.CSSProperties = { padding: "10px 14px", border: "1px solid rgba(26,26,26,0.2)", borderRadius: 10, fontSize: 15, fontFamily: font, background: "#fff" };

export function Dashboard({ initialLeads, subscribers, error }: { initialLeads: AdminLead[]; subscribers: AdminSub[]; error: boolean }) {
  const [leads, setLeads] = useState(initialLeads);
  const [tab, setTab] = useState<"leads" | "subs">("leads");
  const [q, setQ] = useState("");
  const [fs, setFs] = useState("");
  const [fsrc, setFsrc] = useState("");
  const [open, setOpen] = useState<string | null>(null);

  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    return leads.filter(
      (l) =>
        (!fs || l.status === fs) &&
        (!fsrc || l.source === fsrc) &&
        (!s || [l.name, l.clinic, l.email, l.phone, l.work_type, l.message, l.notes].some((v) => (v || "").toLowerCase().includes(s)))
    );
  }, [leads, q, fs, fsrc]);

  const counts = useMemo(() => {
    const c: Record<string, number> = {};
    leads.forEach((l) => (c[l.status] = (c[l.status] || 0) + 1));
    return c;
  }, [leads]);

  async function save(l: AdminLead, status: string, notes: string) {
    const r = await fetch("/api/admin/update", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: l.id, status, notes }) });
    if (!r.ok) return false;
    setLeads((p) => p.map((x) => (x.id === l.id ? { ...x, status, notes, updated_at: new Date().toISOString() } : x)));
    return true;
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    location.reload();
  }

  return (
    <main style={{ minHeight: "100vh", background: "#F4F7F9", fontFamily: font, color: "#1A1A1A" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "28px 20px 80px" }}>
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap", marginBottom: 24 }}>
          <div>
            <div style={{ fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: navy }}>[ iDentical Lab ]</div>
            <h1 style={{ margin: "6px 0 0", fontWeight: 200, fontSize: 34, letterSpacing: "-0.02em" }}>Lead-uri</h1>
          </div>
          <button onClick={logout} style={{ ...input, cursor: "pointer", borderRadius: 999 }}>Ieșire</button>
        </header>

        {error && <div style={{ background: "#FDECEA", color: "#B3261E", padding: 14, borderRadius: 10, marginBottom: 16 }}>Datele nu au putut fi încărcate.</div>}

        <div style={{ display: "flex", gap: 8, marginBottom: 18 }}>
          {([["leads", `Lead-uri (${leads.length})`], ["subs", `Newsletter (${subscribers.length})`]] as const).map(([k, label]) => (
            <button key={k} onClick={() => setTab(k)} style={{ padding: "10px 20px", borderRadius: 999, border: "1px solid " + (tab === k ? navy : "rgba(26,26,26,0.2)"), background: tab === k ? navy : "#fff", color: tab === k ? "#fff" : "#1A1A1A", fontFamily: font, fontSize: 15, cursor: "pointer" }}>
              {label}
            </button>
          ))}
        </div>

        {tab === "leads" ? (
          <>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: 10, marginBottom: 18 }}>
              {LEAD_STATUSES.map((s) => (
                <button key={s.value} onClick={() => setFs(fs === s.value ? "" : s.value)} style={{ textAlign: "left", padding: "14px 16px", borderRadius: 12, border: "1px solid " + (fs === s.value ? navy : "rgba(26,26,26,0.1)"), background: "#fff", cursor: "pointer", fontFamily: font }}>
                  <div style={{ fontSize: 28, fontWeight: 200, color: statusColor[s.value] }}>{counts[s.value] || 0}</div>
                  <div style={{ fontSize: 13, color: "#6E6E78" }}>{s.label}</div>
                </button>
              ))}
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 16 }}>
              <input placeholder="Caută nume, clinică, email, telefon..." value={q} onChange={(e) => setQ(e.target.value)} style={{ ...input, flex: "1 1 260px" }} />
              <select value={fsrc} onChange={(e) => setFsrc(e.target.value)} style={input}>
                <option value="">Toate sursele</option>
                <option value="offer">Cerere ofertă</option>
                <option value="contact">Contact</option>
              </select>
              <a href="/api/admin/export?type=leads" style={{ ...input, textDecoration: "none", color: navy, borderRadius: 999 }}>Export CSV</a>
            </div>
            <div style={{ fontSize: 13, color: "#6E6E78", marginBottom: 10 }}>{list.length} rezultate</div>
            <div style={{ display: "grid", gap: 10 }}>
              {list.map((l) => (
                <LeadCard key={l.id} l={l} open={open === l.id} onToggle={() => setOpen(open === l.id ? null : l.id)} onSave={save} />
              ))}
              {!list.length && <div style={{ padding: 40, textAlign: "center", color: "#6E6E78" }}>Niciun lead.</div>}
            </div>
          </>
        ) : (
          <>
            <div style={{ marginBottom: 16 }}>
              <a href="/api/admin/export?type=subscribers" style={{ ...input, textDecoration: "none", color: navy, borderRadius: 999, display: "inline-block" }}>Export CSV</a>
            </div>
            <div style={{ background: "#fff", borderRadius: 12, border: "1px solid rgba(26,26,26,0.1)" }}>
              {subscribers.map((s) => (
                <div key={s.id} style={{ display: "flex", justifyContent: "space-between", gap: 12, padding: "14px 18px", borderBottom: "1px solid rgba(26,26,26,0.08)", flexWrap: "wrap" }}>
                  <span style={{ wordBreak: "break-all" }}>{s.email}</span>
                  <span style={{ color: "#6E6E78", fontSize: 14 }}>{fmt(s.created_at)}</span>
                </div>
              ))}
              {!subscribers.length && <div style={{ padding: 40, textAlign: "center", color: "#6E6E78" }}>Niciun abonat.</div>}
            </div>
          </>
        )}
      </div>
    </main>
  );
}

function LeadCard({ l, open, onToggle, onSave }: { l: AdminLead; open: boolean; onToggle: () => void; onSave: (l: AdminLead, s: string, n: string) => Promise<boolean> }) {
  const [status, setStatus] = useState(l.status);
  const [notes, setNotes] = useState(l.notes || "");
  const [msg, setMsg] = useState("");
  const label = LEAD_STATUSES.find((s) => s.value === l.status)?.label;
  const dirty = status !== l.status || notes !== (l.notes || "");

  async function go() {
    setMsg("Se salvează...");
    setMsg((await onSave(l, status, notes)) ? "Salvat." : "Eroare la salvare.");
  }

  return (
    <div style={{ background: "#fff", border: "1px solid rgba(26,26,26,0.1)", borderRadius: 12, overflow: "hidden" }}>
      <button onClick={onToggle} style={{ width: "100%", display: "grid", gridTemplateColumns: "minmax(0,1.4fr) minmax(0,1.6fr) auto", gap: 14, alignItems: "center", padding: "16px 18px", background: "none", border: "none", textAlign: "left", cursor: "pointer", fontFamily: font, fontSize: 15, color: "inherit" }}>
        <span>
          <strong style={{ fontWeight: 500 }}>{l.name}</strong>
          <span style={{ display: "block", color: "#6E6E78", fontSize: 13 }}>{l.clinic || "fără clinică"} · {l.source === "offer" ? "Ofertă" : "Contact"}</span>
        </span>
        <span style={{ color: "#3A3A44", fontSize: 14, overflow: "hidden", textOverflow: "ellipsis" }}>
          {l.work_type || "—"}
          <span style={{ display: "block", color: "#6E6E78", fontSize: 13 }}>{fmt(l.created_at)}</span>
        </span>
        <span style={{ padding: "5px 12px", borderRadius: 999, fontSize: 13, color: "#fff", background: statusColor[l.status] || "#888" }}>{label}</span>
      </button>
      {open && (
        <div style={{ padding: "4px 18px 20px", borderTop: "1px solid rgba(26,26,26,0.08)", display: "grid", gap: 14 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12, paddingTop: 14, fontSize: 15 }}>
            <Field k="Email"><a href={`mailto:${l.email}`} style={{ color: navy }}>{l.email}</a></Field>
            <Field k="Telefon">{l.phone ? <a href={`tel:${l.phone}`} style={{ color: navy }}>{l.phone}</a> : "—"}</Field>
            <Field k="Pagina">{l.page_url || "—"}</Field>
          </div>
          <Field k="Mesaj"><div style={{ whiteSpace: "pre-wrap", lineHeight: 1.55 }}>{l.message || "—"}</div></Field>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "flex-start" }}>
            <select value={status} onChange={(e) => setStatus(e.target.value)} style={input}>
              {LEAD_STATUSES.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
            </select>
            <textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Notițe interne" rows={3} maxLength={5000} style={{ ...input, flex: "1 1 280px", resize: "vertical" }} />
          </div>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <button onClick={go} disabled={!dirty} style={{ padding: "12px 24px", border: "none", borderRadius: 999, background: navy, color: "#fff", fontFamily: font, fontSize: 15, cursor: "pointer", opacity: dirty ? 1 : 0.5 }}>Salvează</button>
            <span style={{ fontSize: 14, color: msg === "Salvat." ? "#2E7D32" : "#6E6E78" }}>{msg}</span>
          </div>
        </div>
      )}
    </div>
  );
}

function Field({ k, children }: { k: string; children: React.ReactNode }) {
  return (
    <div style={{ minWidth: 0, wordBreak: "break-word" }}>
      <div style={{ fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6E6E78", marginBottom: 4 }}>{k}</div>
      {children}
    </div>
  );
}
