"use client";

import { useCallback, useEffect, useState } from "react";

const KEY = "idl-cookie-consent";
const VERSION = 1;
type Consent = { v: number; necessary: true; analytics: boolean; marketing: boolean; ts: number };

declare global {
  interface Window {
    idlConsent?: Consent | null;
  }
}

function read(): Consent | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const c = JSON.parse(raw) as Consent;
    return c && c.v === VERSION ? c : null;
  } catch {
    return null;
  }
}

function save(c: Consent) {
  try {
    localStorage.setItem(KEY, JSON.stringify(c));
  } catch {
    /* storage unavailable: the choice only lasts for this page view */
  }
  window.idlConsent = c;
  window.dispatchEvent(new CustomEvent("idl:consent", { detail: c }));
}

const font = "var(--font-outfit), Helvetica, sans-serif";

export default function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const existing = read();
    window.idlConsent = existing;
    if (existing) {
      setAnalytics(existing.analytics);
      setMarketing(existing.marketing);
    } else {
      const t = setTimeout(() => setOpen(true), 700);
      return () => clearTimeout(t);
    }
  }, []);

  const openSettings = useCallback(() => {
    const c = read();
    setAnalytics(!!c?.analytics);
    setMarketing(!!c?.marketing);
    setSettings(true);
    setOpen(true);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest("[data-cookie-settings]");
      if (el) {
        e.preventDefault();
        openSettings();
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [openSettings]);

  const decide = (a: boolean, m: boolean) => {
    save({ v: VERSION, necessary: true, analytics: a, marketing: m, ts: Date.now() });
    setOpen(false);
    setSettings(false);
  };

  if (!open) return null;

  const btn = (primary: boolean) =>
    ({
      flex: "1 1 auto",
      padding: "13px 20px",
      borderRadius: "999px",
      border: primary ? "none" : "1px solid rgba(26,26,26,0.22)",
      background: primary ? "#0F0053" : "transparent",
      color: primary ? "#FFFFFF" : "#1A1A1A",
      fontFamily: font,
      fontSize: "14px",
      cursor: "pointer",
    }) as const;

  const row = (label: string, text: string, on: boolean, set?: (v: boolean) => void) => (
    <label style={{ display: "flex", justifyContent: "space-between", gap: "16px", alignItems: "flex-start", padding: "14px 0", borderTop: "1px solid rgba(26,26,26,0.1)", cursor: set ? "pointer" : "default" }}>
      <span>
        <span style={{ display: "block", fontSize: "15px", fontWeight: 500 }}>{label}</span>
        <span style={{ display: "block", marginTop: "3px", fontSize: "13px", lineHeight: 1.45, color: "#6E6E78", fontWeight: 300 }}>{text}</span>
      </span>
      <input
        type="checkbox"
        checked={on}
        disabled={!set}
        onChange={(e) => set?.(e.target.checked)}
        aria-label={label}
        style={{ width: "20px", height: "20px", marginTop: "2px", accentColor: "#0F0053", flex: "none" }}
      />
    </label>
  );

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Preferințe cookie"
      data-cookie-banner
      className="idl-cookie"
      style={{
        position: "fixed",
        left: "24px",
        bottom: "24px",
        zIndex: 75,
        width: "min(440px, calc(100vw - 32px))",
        padding: "26px 26px 22px",
        borderRadius: "16px",
        background: "rgba(255,255,255,0.96)",
        backdropFilter: "blur(14px)",
        border: "1px solid rgba(26,26,26,0.1)",
        boxShadow: "0 24px 60px rgba(15,0,83,0.18)",
        color: "#1A1A1A",
        fontFamily: font,
      }}
    >
      <div style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#0F0053", marginBottom: "12px" }}>[ Cookie-uri ]</div>
      {!settings ? (
        <>
          <p style={{ margin: "0 0 18px", fontSize: "15px", lineHeight: 1.55, fontWeight: 300, color: "#3A3A44" }}>
            Folosim doar stocare necesară funcționării site-ului. Cu acordul tău, putem activa și măsurarea vizitelor sau marketingul. Detalii în{" "}
            <a href="/politica-cookie" style={{ color: "#0F0053", borderBottom: "1px solid rgba(15,0,83,0.4)" }}>
              Politica de cookie-uri
            </a>
            .
          </p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <button type="button" onClick={() => decide(true, true)} style={btn(true)}>
              Acceptă toate
            </button>
            <button type="button" onClick={() => decide(false, false)} style={btn(false)}>
              Doar necesare
            </button>
          </div>
          <button type="button" onClick={() => setSettings(true)} style={{ marginTop: "14px", padding: "0 0 2px", border: "none", background: "transparent", fontFamily: font, fontSize: "13px", color: "#0F0053", borderBottom: "1px solid rgba(15,0,83,0.4)", cursor: "pointer" }}>
            Setări
          </button>
        </>
      ) : (
        <>
          <div style={{ marginBottom: "6px" }}>
            {row("Necesare", "Rețin alegerea ta privind cookie-urile. Mereu active.", true)}
            {row("Analitice", "Ne ajută să înțelegem cum este folosit site-ul. Dezactivate până alegi.", analytics, setAnalytics)}
            {row("Marketing", "Măsurarea campaniilor publicitare. Dezactivate până alegi.", marketing, setMarketing)}
            <div style={{ borderTop: "1px solid rgba(26,26,26,0.1)" }} />
          </div>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "16px" }}>
            <button type="button" onClick={() => decide(analytics, marketing)} style={btn(true)}>
              Salvează alegerea
            </button>
            <button type="button" onClick={() => decide(true, true)} style={btn(false)}>
              Acceptă toate
            </button>
          </div>
        </>
      )}
    </div>
  );
}
