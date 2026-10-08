"use client";
import { useState } from "react";

const font = "var(--font-outfit), Helvetica, sans-serif";

export function Login() {
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setErr("");
    try {
      const r = await fetch("/api/admin/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password: pw }) });
      if (r.ok) return location.reload();
      setErr(r.status === 429 ? "Prea multe încercări. Reîncearcă peste 15 minute." : "Parolă incorectă.");
    } catch {
      setErr("Eroare de rețea.");
    }
    setBusy(false);
  }

  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 20, background: "#F4F7F9", fontFamily: font }}>
      <form onSubmit={submit} style={{ width: "100%", maxWidth: 380, background: "#fff", border: "1px solid rgba(26,26,26,0.1)", borderRadius: 14, padding: "36px 30px" }}>
        <div style={{ fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "#0F0053", marginBottom: 14 }}>[ iDentical Lab ]</div>
        <h1 style={{ margin: "0 0 24px", fontWeight: 200, fontSize: 34, letterSpacing: "-0.02em" }}>Acces lead-uri</h1>
        <input
          type="password"
          autoFocus
          autoComplete="current-password"
          placeholder="Parolă"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          style={{ width: "100%", boxSizing: "border-box", padding: "14px 16px", border: "1px solid rgba(26,26,26,0.2)", borderRadius: 10, fontSize: 16, fontFamily: font, marginBottom: 14 }}
        />
        {err && <div style={{ color: "#B3261E", fontSize: 14, marginBottom: 14 }}>{err}</div>}
        <button disabled={busy || !pw} style={{ width: "100%", padding: "14px", border: "none", borderRadius: 999, background: "#0F0053", color: "#fff", fontSize: 15, fontFamily: font, cursor: "pointer", opacity: busy || !pw ? 0.6 : 1 }}>
          {busy ? "Se verifică..." : "Intră"}
        </button>
      </form>
    </main>
  );
}
