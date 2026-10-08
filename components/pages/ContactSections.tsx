import { Accent, Eyebrow, Photo, font } from "@/components/ui";
import { SectionHead, wrap } from "@/components/pages/blocks";

const navy = "#0F0053";
const MAPS = "https://www.google.com/maps/search/?api=1&query=Str.+Fabricii+46,+Bucharest,+013141";

export function ContactHero() {
  const big: [string, string, string][] = [
    ["Telefon", "0724 065 767", "tel:+40724065767"],
    ["Email", "gabriel.musetescu@identical.ro", "mailto:gabriel.musetescu@identical.ro"],
  ];
  return (
    <section
      id="top"
      style={{
        position: "relative",
        padding: "96px 40px 90px",
        backgroundImage:
          "radial-gradient(1100px 620px at 88% -12%, rgba(38,183,188,0.18), rgba(255,255,255,0) 62%), repeating-linear-gradient(90deg, rgba(15,0,83,0.055) 0 1px, rgba(255,255,255,0) 1px 128px)",
        animation: "idl-pan 34s linear infinite",
      }}
    >
      <div style={wrap}>
        <Eyebrow style={{ marginBottom: "28px" }}>
          <a href="/" style={{ opacity: 0.6 }}>Acasă</a>
          {" / Contact"}
        </Eyebrow>
        <h1 data-reveal data-lines style={{ margin: "0", fontFamily: font, fontWeight: "200", fontSize: "clamp(52px, 8.6vw, 140px)", lineHeight: "0.92", letterSpacing: "-0.035em" }}>
          {"Hai să "}
          <Accent>vorbim</Accent>
          <br />
          despre cazul tău.
        </h1>
        <div style={{ marginTop: "64px" }}>
          {big.map(([l, v, h]) => (
            <a key={l} href={h} data-reveal className="m-sb idl-hover-9" style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "24px", padding: "26px 0", borderTop: "1px solid rgba(26,26,26,0.14)" }}>
              <span style={{ fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: navy }}>{l}</span>
              <span style={{ fontFamily: font, fontWeight: "200", fontSize: "clamp(26px, 4.2vw, 68px)", letterSpacing: "-0.025em", overflowWrap: "anywhere" }}>{v}</span>
            </a>
          ))}
          <div style={{ borderTop: "1px solid rgba(26,26,26,0.14)" }} />
        </div>
      </div>
    </section>
  );
}

export function ContactDetails() {
  const cards: { t: string; lines: string[]; link?: [string, string] }[] = [
    { t: "Laborator", lines: ["Str. Fabricii 46", "București, 013141"], link: ["Deschide în Google Maps", MAPS] },
    { t: "Program", lines: ["Luni - Vineri", "09:00 - 17:00"] },
    { t: "WhatsApp", lines: ["Scrie-ne direct", "0724 065 767"], link: ["Deschide conversația", "https://wa.me/40724065767"] },
    { t: "Social", lines: ["@identical.lab"] },
  ];
  const social: [string, string][] = [
    ["Instagram", "https://www.instagram.com/identical.lab/"],
    ["Facebook", "https://www.facebook.com/identical.lab"],
    ["TikTok", "https://www.tiktok.com/@identical.lab"],
  ];
  return (
    <section id="detalii" style={{ padding: "40px 40px 120px" }}>
      <div style={wrap}>
        <div className="m-grid m-rep" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}>
          {cards.map((c) => (
            <div key={c.t} data-reveal data-card style={{ position: "relative", padding: "34px 28px", background: "#FFFFFF", border: "1px solid rgba(26,26,26,0.1)", borderRadius: "10px", transition: "background .4s ease" }}>
              <div style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: navy, marginBottom: "34px" }}>{c.t}</div>
              {c.lines.map((l) => (
                <div key={l} style={{ fontFamily: font, fontWeight: "300", fontSize: "22px", letterSpacing: "-0.01em", lineHeight: "1.35" }}>
                  {l}
                </div>
              ))}
              {c.link && (
                <a href={c.link[1]} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", marginTop: "22px", fontSize: "14px", borderBottom: "1px solid currentColor", paddingBottom: "2px" }}>
                  {c.link[0]}
                </a>
              )}
              {c.t === "Social" && (
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "18px", fontSize: "15px" }}>
                  {social.map(([n, h]) => (
                    <a key={n} href={h} target="_blank" rel="noopener noreferrer">
                      {n + " "}
                      <span style={{ color: "#26B7BC" }}>↗</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactMap() {
  return (
    <section id="harta" style={{ padding: "0 40px 130px" }}>
      <div className="m-grid m-gap" style={{ ...wrap, display: "grid", gridTemplateColumns: "0.38fr 0.62fr", gap: "64px", alignItems: "stretch" }}>
        <div data-reveal style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "32px" }}>
          <div>
            <Eyebrow style={{ marginBottom: "22px" }}>[ Cum ne găsești ]</Eyebrow>
            <h2 data-lines style={{ margin: "0", fontFamily: font, fontWeight: "200", fontSize: "clamp(34px, 4vw, 60px)", lineHeight: "1.04", letterSpacing: "-0.025em" }}>
              Laboratorul din <Accent>București</Accent>
            </h2>
            <p style={{ margin: "26px 0 0", fontSize: "17px", lineHeight: "1.6", color: "#3A3A44", fontWeight: "300", maxWidth: "40ch" }}>
              Cazurile se trimit digital, iar lucrările ajung la cabinet prin expediere. Dacă vrei să ne vizitezi, sună-ne înainte, ca să fim siguri că te așteaptă cineva.
            </p>
          </div>
          <a className="idl-hover-5" href={MAPS} target="_blank" rel="noopener noreferrer" data-magnetic style={{ alignSelf: "flex-start", padding: "16px 30px", borderRadius: "999px", background: navy, color: "#FFFFFF", fontSize: "15px" }}>
            {"Deschide harta "}
            <span style={{ color: "#26B7BC" }}>↗</span>
          </a>
        </div>
        <Photo label="FOTO67" ratio="16/10" />
      </div>
    </section>
  );
}

export function ContactSteps() {
  const steps: [string, string][] = [
    ["Primim cererea", "Un tehnician citește mesajul tău. Nu există formule standard și nici răspunsuri automate lungi."],
    ["Revenim cu întrebări", "Dacă lipsesc informații, te contactăm în aceeași zi, pe telefon sau pe email, după preferința ta."],
    ["Primești oferta", "Cu termenul de execuție și prețul, înainte să începem orice lucru."],
  ];
  return (
    <section id="dupa" style={{ padding: "110px 40px 130px", backgroundColor: "#F4F7F9" }}>
      <div style={wrap}>
        <SectionHead eyebrow="După ce ne scrii">
          {"Trei pași până la "}
          <Accent>ofertă</Accent>
        </SectionHead>
        <div className="m-grid m-rep" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          {steps.map(([t, d], i) => (
            <div key={t} data-reveal style={{ padding: "36px 30px", background: "#FFFFFF", borderRadius: "10px", border: "1px solid rgba(26,26,26,0.08)" }}>
              <div style={{ fontFamily: font, fontWeight: "200", fontSize: "52px", lineHeight: "1", color: "#26B7BC", marginBottom: "28px" }}>{String(i + 1).padStart(2, "0")}</div>
              <h3 style={{ margin: "0 0 12px", fontFamily: font, fontWeight: "300", fontSize: "26px", letterSpacing: "-0.02em" }}>{t}</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3A3A44", fontWeight: "300" }}>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CompanyStrip() {
  const rows: [string, string][] = [
    ["Denumire", "DISTINGUISH DENT SRL"],
    ["CUI", "38260814"],
    ["Sediu", "Str. Trotușului 31, București, Sector 1"],
    ["Laborator", "Str. Fabricii 46, București, 013141"],
  ];
  return (
    <section id="date-firma" style={{ padding: "100px 40px 120px" }}>
      <div className="m-grid m-gap" style={{ ...wrap, display: "grid", gridTemplateColumns: "0.34fr 0.66fr", gap: "64px", alignItems: "start" }}>
        <Eyebrow>[ Date firmă ]</Eyebrow>
        <div data-reveal>
          {rows.map(([k, v]) => (
            <div key={k} className="m-sb" style={{ display: "flex", justifyContent: "space-between", gap: "24px", padding: "18px 0", borderTop: "1px solid rgba(26,26,26,0.14)", fontSize: "17px", fontWeight: "300" }}>
              <span style={{ color: "#6E6E78" }}>{k}</span>
              <span style={{ textAlign: "right" }}>{v}</span>
            </div>
          ))}
          <div style={{ borderTop: "1px solid rgba(26,26,26,0.14)" }} />
        </div>
      </div>
    </section>
  );
}
