import type { CSSProperties, ReactNode } from "react";
import { Accent, Eyebrow, H2, Photo, cardStyle, font, pillGhost, pillPrimary } from "@/components/ui";

export const wrap = { maxWidth: "1440px", margin: "0 auto" } as const;
export const lead: CSSProperties = { margin: "0", fontSize: "19px", lineHeight: "1.55", color: "#3A3A44", fontWeight: "300", textWrap: "pretty" };
const body: CSSProperties = { margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3A3A44", fontWeight: "300" };
const navy = "#0F0053";

export const SERVICES = [
  { slug: "modele-mandibulare-3d", title: "Modele mandibulare 3D", short: "Replici printate 3D ale anatomiei osoase, pornind de la CBCT-ul pacientului.", n: "01" },
  { slug: "segmentare-cbct", title: "Segmentare CBCT", short: "Izolarea structurilor de interes din setul DICOM, cu verificare a acurateței.", n: "02" },
  { slug: "design-cad-cam", title: "Design CAD/CAM", short: "Proiectare digitală a lucrărilor protetice, aprobată de medic înainte de producție.", n: "03" },
  { slug: "ghiduri-chirurgicale", title: "Ghiduri chirurgicale", short: "Ghiduri pentru poziționarea implanturilor, din planificarea digitală aprobată.", n: "04" },
];

const crumb = (items: [string, string?][], dark?: boolean) => (
  <Eyebrow style={{ marginBottom: "28px", color: dark ? "#FFFFFF" : undefined }}>
    {items.map(([t, h], i) => (
      <span key={t}>
        {i > 0 && " / "}
        {h ? (
          <a href={h} style={{ opacity: dark ? 0.75 : 0.6, color: dark ? "#FFFFFF" : undefined }}>
            {t}
          </a>
        ) : (
          t
        )}
      </span>
    ))}
  </Eyebrow>
);

const gridBg =
  "radial-gradient(1100px 620px at 88% -12%, rgba(38,183,188,0.18), rgba(255,255,255,0) 62%), repeating-linear-gradient(90deg, rgba(15,0,83,0.055) 0 1px, rgba(255,255,255,0) 1px 128px)";

type HeroProps = {
  crumbs: [string, string?][];
  title: ReactNode;
  intro: string;
  cta: string;
  photo: string;
  chips?: string[];
  variant: "split" | "dark" | "centered" | "photoLeft";
};

function Chips({ chips, dark }: { chips?: string[]; dark?: boolean }) {
  if (!chips?.length) return null;
  return (
    <div data-reveal style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "34px" }}>
      {chips.map((c) => (
        <span
          key={c}
          style={{
            padding: "9px 16px",
            borderRadius: "999px",
            border: `1px solid ${dark ? "rgba(255,255,255,0.28)" : "rgba(26,26,26,0.18)"}`,
            fontSize: "13px",
            color: dark ? "rgba(255,255,255,0.82)" : "#3A3A44",
          }}
        >
          {c}
        </span>
      ))}
    </div>
  );
}

function HeroCtas({ cta, dark }: { cta: string; dark?: boolean }) {
  return (
    <div data-reveal style={{ display: "flex", alignItems: "center", gap: "20px", marginTop: "40px", flexWrap: "wrap" }}>
      <button
        className={dark ? "idl-hover-b" : "idl-hover-5"}
        type="button"
        data-open-form={cta}
        data-magnetic
        style={dark ? { ...pillPrimary, background: "#FFFFFF", color: navy } : pillPrimary}
      >
        Cere o ofertă
      </button>
      <a
        className={dark ? undefined : "idl-hover-2"}
        href="#contact"
        data-magnetic
        style={dark ? { ...pillGhost, border: "1px solid rgba(255,255,255,0.3)", color: "#FFFFFF" } : pillGhost}
      >
        {"Trimite un caz "}
        <span style={{ color: "#26B7BC" }}>↓</span>
      </a>
    </div>
  );
}

export function ServiceHero({ crumbs, title, intro, cta, photo, chips, variant }: HeroProps) {
  const h1: CSSProperties = {
    margin: "0",
    fontFamily: font,
    fontWeight: "200",
    fontSize: "clamp(48px, 6.6vw, 108px)",
    lineHeight: "0.95",
    letterSpacing: "-0.035em",
    textWrap: "balance",
  };
  if (variant === "dark") {
    return (
      <section
        id="top"
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "96px 40px 0",
          backgroundColor: navy,
          color: "#FFFFFF",
          backgroundImage:
            "radial-gradient(900px 560px at 85% 0%, rgba(38,183,188,0.34), rgba(15,0,83,0) 62%), repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0 1px, rgba(255,255,255,0) 1px 96px)",
        }}
      >
        <div style={wrap}>
          {crumb(crumbs, true)}
          <h1 data-reveal data-lines style={{ ...h1, maxWidth: "16ch" }}>
            {title}
          </h1>
          <div className="m-grid m-gap" style={{ display: "grid", gridTemplateColumns: "0.55fr 0.45fr", gap: "64px", marginTop: "44px", alignItems: "start" }}>
            <div>
              <p data-reveal style={{ ...lead, color: "rgba(255,255,255,0.8)", maxWidth: "52ch" }}>
                {intro}
              </p>
              <HeroCtas cta={cta} dark />
            </div>
            <Chips chips={chips} dark />
          </div>
          <div style={{ marginTop: "72px" }}>
            <Photo label={photo} height="52vh" dark style={{ minHeight: "340px", borderRadius: "4px 4px 0 0" }} />
          </div>
        </div>
      </section>
    );
  }
  if (variant === "centered") {
    return (
      <section id="top" style={{ position: "relative", padding: "110px 40px 0", backgroundImage: gridBg, animation: "idl-pan 34s linear infinite", textAlign: "center" }}>
        <div style={wrap}>
          <div style={{ display: "flex", justifyContent: "center" }}>{crumb(crumbs)}</div>
          <h1 data-reveal data-lines style={{ ...h1, margin: "0 auto", maxWidth: "15ch" }}>
            {title}
          </h1>
          <p data-reveal style={{ ...lead, margin: "36px auto 0", maxWidth: "56ch" }}>
            {intro}
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <HeroCtas cta={cta} />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Chips chips={chips} />
          </div>
          <div className="m-grid m-rep" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr 1fr", gap: "20px", marginTop: "72px", alignItems: "end" }}>
            <Photo label="detaliu" ratio="3/4" />
            <Photo label={photo} ratio="4/5" />
            <Photo label="detaliu" ratio="3/4" />
          </div>
        </div>
      </section>
    );
  }
  const left = variant === "photoLeft";
  const text = (
    <div>
      {crumb(crumbs)}
      <h1 data-reveal data-lines style={h1}>
        {title}
      </h1>
      <p data-reveal style={{ ...lead, marginTop: "32px", maxWidth: "50ch" }}>
        {intro}
      </p>
      <HeroCtas cta={cta} />
      <Chips chips={chips} />
    </div>
  );
  const pic = (
    <div style={{ display: "grid", gap: "16px" }}>
      <Photo label={photo} ratio="4/5" />
      <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid rgba(26,26,26,0.12)", paddingTop: "14px", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6E6E78" }}>
        <span>iDentical Lab</span>
        <span>București</span>
      </div>
    </div>
  );
  return (
    <section id="top" style={{ position: "relative", padding: "96px 40px 110px", backgroundImage: gridBg, animation: "idl-pan 34s linear infinite" }}>
      <div className="m-grid m-gap" style={{ ...wrap, display: "grid", gridTemplateColumns: left ? "0.8fr 1.2fr" : "1.2fr 0.8fr", gap: "64px", alignItems: "center" }}>
        {left ? pic : text}
        {left ? text : pic}
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, children, light, aside, max }: { eyebrow: string; children: ReactNode; light?: boolean; aside?: ReactNode; max?: string }) {
  return (
    <div className="m-sb" data-reveal style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: "40px", marginBottom: "52px" }}>
      <div>
        <Eyebrow light={light} style={{ marginBottom: "22px" }}>
          [ {eyebrow} ]
        </Eyebrow>
        <H2 light={light} max={max ?? "22ch"}>
          {children}
        </H2>
      </div>
      {aside && <div style={{ maxWidth: "46ch", ...body, color: light ? "rgba(255,255,255,0.75)" : "#3A3A44" }}>{aside}</div>}
    </div>
  );
}

/** Cards grid (white cards, hover to navy). */
export function CardGrid({ id, eyebrow, title, aside, items, cols = 4, tint }: { id?: string; eyebrow: string; title: ReactNode; aside?: ReactNode; items: [string, string][]; cols?: number; tint?: boolean }) {
  return (
    <section id={id} style={{ padding: "120px 40px", backgroundColor: tint ? "#F4F7F9" : undefined }}>
      <div style={wrap}>
        <SectionHead eyebrow={eyebrow} aside={aside}>
          {title}
        </SectionHead>
        <div className="m-grid m-rep" style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: "24px" }}>
          {items.map(([t, d], i) => (
            <div key={t} data-reveal data-card style={{ ...cardStyle, padding: "34px 28px", background: "#FFFFFF" }}>
              <div style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: navy, marginBottom: "34px" }}>{String(i + 1).padStart(2, "0")}</div>
              <h3 style={{ margin: "0 0 14px", fontFamily: font, fontWeight: "300", fontSize: "25px", letterSpacing: "-0.02em", lineHeight: "1.15" }}>{t}</h3>
              <p style={{ ...body, fontSize: "15px" }}>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Dark horizontal process with a connecting line. */
export function FlowDark({ id, eyebrow, title, steps }: { id?: string; eyebrow: string; title: ReactNode; steps: [string, string][] }) {
  return (
    <section
      id={id}
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "130px 40px 140px",
        backgroundColor: navy,
        color: "#FFFFFF",
        backgroundImage: "radial-gradient(880px 520px at 6% 0%, rgba(38,183,188,0.3), rgba(15,0,83,0) 62%)",
      }}
    >
      <div style={wrap}>
        <SectionHead eyebrow={eyebrow} light>
          {title}
        </SectionHead>
        <div className="flow-scroll" style={{ display: "grid", gridTemplateColumns: `repeat(${steps.length}, 1fr)`, gap: "0", position: "relative" }}>
          {steps.map(([t, d], i) => (
            <div key={t} data-reveal style={{ position: "relative", padding: "0 28px 0 0" }}>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "30px" }}>
                <span style={{ width: "14px", height: "14px", borderRadius: "50%", background: "#26B7BC", flex: "none" }} />
                <span style={{ height: "1px", flex: "1", background: i === steps.length - 1 ? "transparent" : "rgba(255,255,255,0.25)", marginLeft: "12px" }} />
              </div>
              <div style={{ fontSize: "12px", letterSpacing: "0.14em", color: "#26B7BC", marginBottom: "12px" }}>{String(i + 1).padStart(2, "0")}</div>
              <h3 style={{ margin: "0 0 12px", fontFamily: font, fontWeight: "300", fontSize: "24px", letterSpacing: "-0.02em", lineHeight: "1.15" }}>{t}</h3>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "rgba(255,255,255,0.7)", fontWeight: "300" }}>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Sticky heading on the left, numbered rows on the right. */
export function StickyList({ id, eyebrow, title, intro, items, tint, cta }: { id?: string; eyebrow: string; title: ReactNode; intro?: string; items: [string, string][]; tint?: boolean; cta?: string }) {
  return (
    <section id={id} style={{ padding: "120px 40px 130px", backgroundColor: tint ? "#F4F7F9" : undefined }}>
      <div className="m-grid m-gap" style={{ ...wrap, display: "grid", gridTemplateColumns: "0.42fr 0.58fr", gap: "72px", alignItems: "start" }}>
        <div className="m-sticky" data-reveal style={{ position: "sticky", top: "120px" }}>
          <Eyebrow style={{ marginBottom: "22px" }}>[ {eyebrow} ]</Eyebrow>
          <H2 max="16ch">{title}</H2>
          {intro && <p style={{ ...lead, marginTop: "28px", maxWidth: "40ch", fontSize: "17px" }}>{intro}</p>}
          {cta && (
            <button type="button" data-open-form={cta} style={{ marginTop: "30px", padding: "0 0 3px", border: "none", background: "transparent", fontFamily: font, fontSize: "15px", color: navy, borderBottom: "1px solid rgba(15,0,83,0.4)", cursor: "pointer" }}>
              {"Discută cazul tău "}
              <span style={{ color: "#26B7BC" }}>→</span>
            </button>
          )}
        </div>
        <ol style={{ listStyle: "none", margin: "0", padding: "0" }}>
          {items.map(([t, d], i) => (
            <li key={t} data-reveal className="m-grid" style={{ display: "grid", gridTemplateColumns: "88px 1fr", gap: "24px", padding: "34px 0", borderTop: "1px solid rgba(26,26,26,0.14)" }}>
              <div style={{ fontFamily: font, fontWeight: "200", fontSize: "44px", lineHeight: "1", color: "#26B7BC" }}>{String(i + 1).padStart(2, "0")}</div>
              <div>
                <h3 style={{ margin: "0 0 12px", fontFamily: font, fontWeight: "300", fontSize: "28px", letterSpacing: "-0.02em" }}>{t}</h3>
                <p style={{ ...body, fontSize: "17px", maxWidth: "58ch" }}>{d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** Two-column comparison table. */
export function Compare({ id, eyebrow, title, heads, rows, note }: { id?: string; eyebrow: string; title: ReactNode; heads: [string, string, string]; rows: [string, string, string][]; note?: string }) {
  return (
    <section id={id} style={{ padding: "120px 40px" }}>
      <div style={wrap}>
        <SectionHead eyebrow={eyebrow}>{title}</SectionHead>
        <div data-reveal style={{ border: "1px solid rgba(26,26,26,0.12)", borderRadius: "10px", overflow: "hidden" }}>
          <div className="m-grid" style={{ display: "grid", gridTemplateColumns: "0.8fr 1fr 1fr", background: "#F4F7F9", fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            {heads.map((h, i) => (
              <div key={h} style={{ padding: "20px 28px", color: i === 2 ? "#0F0053" : "#6E6E78", fontWeight: i === 2 ? "500" : "400" }}>
                {h}
              </div>
            ))}
          </div>
          {rows.map(([a, b, c]) => (
            <div key={a} className="m-grid" style={{ display: "grid", gridTemplateColumns: "0.8fr 1fr 1fr", borderTop: "1px solid rgba(26,26,26,0.1)" }}>
              <div style={{ padding: "24px 28px", fontSize: "16px", fontWeight: "500" }}>{a}</div>
              <div style={{ padding: "24px 28px", ...body, color: "#6E6E78" }}>{b}</div>
              <div style={{ padding: "24px 28px", ...body, color: "#1A1A1A", background: "rgba(38,183,188,0.06)" }}>{c}</div>
            </div>
          ))}
        </div>
        {note && <p style={{ ...body, marginTop: "20px", fontSize: "14px", color: "#6E6E78" }}>{note}</p>}
      </div>
    </section>
  );
}

/** What you send / what you get. */
export function InOut({ id, send, get, cta }: { id?: string; send: { title: string; items: string[] }; get: { title: string; items: string[] }; cta: string }) {
  const col = (c: { title: string; items: string[] }, dark: boolean) => (
    <div
      data-reveal
      style={{
        padding: "44px 40px",
        borderRadius: "10px",
        background: dark ? navy : "#FFFFFF",
        color: dark ? "#FFFFFF" : "#1A1A1A",
        border: dark ? "none" : "1px solid rgba(26,26,26,0.12)",
        backgroundImage: dark ? "radial-gradient(520px 320px at 100% 100%, rgba(38,183,188,0.35), rgba(15,0,83,0) 65%)" : undefined,
      }}
    >
      <Eyebrow light={dark} style={{ marginBottom: "26px", color: dark ? "#26B7BC" : navy }}>
        {dark ? "Ce primești" : "Ce ne trimiți"}
      </Eyebrow>
      <h3 style={{ margin: "0 0 28px", fontFamily: font, fontWeight: "200", fontSize: "clamp(28px, 2.8vw, 42px)", letterSpacing: "-0.02em", lineHeight: "1.1" }}>{c.title}</h3>
      <ul style={{ listStyle: "none", margin: "0", padding: "0", display: "grid", gap: "0" }}>
        {c.items.map((it) => (
          <li key={it} style={{ display: "flex", gap: "14px", padding: "16px 0", borderTop: `1px solid ${dark ? "rgba(255,255,255,0.16)" : "rgba(26,26,26,0.1)"}`, fontSize: "16px", fontWeight: "300", lineHeight: "1.5", color: dark ? "rgba(255,255,255,0.86)" : "#3A3A44" }}>
            <span style={{ color: "#26B7BC", flex: "none" }}>→</span>
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <section id={id} style={{ padding: "0 40px 130px" }}>
      <div style={wrap}>
        <div className="m-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
          {col(send, false)}
          {col(get, true)}
        </div>
        <div data-reveal style={{ marginTop: "32px", textAlign: "center" }}>
          <button type="button" data-open-form={cta} style={{ padding: "0 0 3px", border: "none", background: "transparent", fontFamily: font, fontSize: "15px", color: navy, borderBottom: "1px solid rgba(15,0,83,0.4)", cursor: "pointer" }}>
            {"Întreabă ce format preferăm "}
            <span style={{ color: "#26B7BC" }}>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

/** Tag cloud style grid: large rows of short items. */
export function TagWall({ id, eyebrow, title, items, aside, tint }: { id?: string; eyebrow: string; title: ReactNode; items: [string, string][]; aside?: ReactNode; tint?: boolean }) {
  return (
    <section id={id} style={{ padding: "120px 40px", backgroundColor: tint ? "#F4F7F9" : undefined }}>
      <div style={wrap}>
        <SectionHead eyebrow={eyebrow} aside={aside}>
          {title}
        </SectionHead>
        <div className="m-grid m-rep" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderTop: "1px solid rgba(26,26,26,0.14)" }}>
          {items.map(([t, d]) => (
            <div key={t} data-reveal style={{ padding: "30px 28px 34px 0", borderBottom: "1px solid rgba(26,26,26,0.14)" }}>
              <div style={{ fontFamily: font, fontWeight: "200", fontSize: "32px", letterSpacing: "-0.02em", marginBottom: "10px" }}>{t}</div>
              <p style={{ ...body, fontSize: "15px", color: "#6E6E78", maxWidth: "36ch" }}>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Large statement band. */
export function Statement({ id, text, sub, cta, photo }: { id?: string; text: ReactNode; sub: string; cta: string; photo: string }) {
  return (
    <section
      id={id}
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "120px 40px",
        background: "linear-gradient(140deg, #0F0053 0%, #17206E 55%, #26B7BC 130%)",
        color: "#FFFFFF",
      }}
    >
      <div className="m-grid m-gap" style={{ ...wrap, display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "72px", alignItems: "center" }}>
        <div data-reveal>
          <h2 data-lines style={{ margin: "0", fontFamily: font, fontWeight: "200", fontSize: "clamp(36px, 4.6vw, 76px)", lineHeight: "1.02", letterSpacing: "-0.03em", maxWidth: "18ch" }}>
            {text}
          </h2>
          <p style={{ margin: "30px 0 0", maxWidth: "46ch", fontSize: "18px", lineHeight: "1.6", color: "rgba(255,255,255,0.78)", fontWeight: "300" }}>{sub}</p>
          <button className="idl-hover-b" type="button" data-open-form={cta} data-magnetic style={{ ...pillPrimary, background: "#FFFFFF", color: navy, marginTop: "36px" }}>
            Cere o ofertă
          </button>
        </div>
        <Photo label={photo} ratio="4/3" dark />
      </div>
    </section>
  );
}

/** Per-service FAQ. */
export function ServiceFaq({ id, title, items, cta }: { id?: string; title: ReactNode; items: [string, string][]; cta: string }) {
  return (
    <section id={id} style={{ padding: "120px 40px 130px" }}>
      <div className="m-grid m-gap" style={{ ...wrap, display: "grid", gridTemplateColumns: "0.36fr 0.64fr", gap: "64px", alignItems: "start" }}>
        <div className="m-sticky" data-reveal style={{ position: "sticky", top: "120px" }}>
          <Eyebrow style={{ marginBottom: "20px" }}>[ Întrebări frecvente ]</Eyebrow>
          <h2 style={{ margin: "0 0 24px", fontFamily: font, fontWeight: "200", fontSize: "clamp(34px, 4vw, 60px)", lineHeight: "1.05", letterSpacing: "-0.02em" }}>{title}</h2>
          <button type="button" data-open-form={cta} style={{ padding: "0 0 3px", border: "none", background: "transparent", fontFamily: font, fontSize: "15px", color: navy, borderBottom: "1px solid rgba(15,0,83,0.4)", cursor: "pointer" }}>
            {"Scrie-ne despre cazul tău "}
            <span style={{ color: "#26B7BC" }}>→</span>
          </button>
        </div>
        <div data-reveal style={{ display: "flex", flexDirection: "column" }}>
          {items.map(([q, a], i) => (
            <details key={q} style={{ borderTop: "1px solid rgba(26,26,26,0.12)", padding: "26px 0", borderBottom: i === items.length - 1 ? "1px solid rgba(26,26,26,0.12)" : undefined }}>
              <summary className="m-sb" style={{ display: "flex", justifyContent: "space-between", gap: "20px", fontSize: "19px", fontWeight: "500", letterSpacing: "-0.01em", cursor: "pointer" }}>
                {q}
                <span style={{ color: navy }}>+</span>
              </summary>
              <p style={{ ...body, margin: "16px 0 0", maxWidth: "60ch" }}>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Links to the other services. */
export function RelatedServices({ current }: { current?: string }) {
  const list = SERVICES.filter((s) => s.slug !== current);
  return (
    <section id="alte-servicii" style={{ padding: "0 40px 130px" }}>
      <div style={wrap}>
        <SectionHead eyebrow="Alte servicii">
          {"Continuă fluxul "}
          <Accent>digital</Accent>
        </SectionHead>
        <div className="m-grid m-rep" style={{ display: "grid", gridTemplateColumns: `repeat(${list.length}, 1fr)`, gap: "24px" }}>
          {list.map((s) => (
            <a key={s.slug} href={`/servicii/${s.slug}`} data-reveal data-lift style={{ display: "block" }}>
              <Photo label={s.title.toLowerCase()} ratio="4/3" />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "16px", borderTop: "1px solid rgba(26,26,26,0.12)", marginTop: "16px", paddingTop: "16px" }}>
                <h3 style={{ margin: "0", fontSize: "21px", fontWeight: "500", letterSpacing: "-0.01em" }}>{s.title}</h3>
                <span style={{ color: "#26B7BC", fontSize: "20px" }}>→</span>
              </div>
              <p style={{ ...body, marginTop: "8px", fontSize: "15px", color: "#6E6E78" }}>{s.short}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

const field: CSSProperties = {
  padding: "16px 0",
  background: "transparent",
  border: "none",
  borderBottom: "1px solid rgba(255,255,255,0.25)",
  color: "#FFFFFF",
  fontFamily: font,
  fontSize: "16px",
  outline: "none",
};

/** Closing request form (same endpoint and behaviours as the homepage contact form). */
export function ServiceForm({ workType, intro, checklist }: { workType: string; intro: string; checklist: string[] }) {
  return (
    <section id="contact" style={{ background: "linear-gradient(140deg, #0F0053 0%, #17206E 55%, #26B7BC 130%)", color: "#FFFFFF", padding: "110px 40px" }}>
      <div className="m-grid" style={{ ...wrap, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
        <div data-reveal>
          <div style={{ fontFamily: font, fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "26px" }}>
            [ Cerere de ofertă ]
          </div>
          <h2 data-lines style={{ margin: "0", fontFamily: font, fontWeight: "200", fontSize: "clamp(44px, 5.6vw, 96px)", lineHeight: "0.98", letterSpacing: "-0.025em" }}>
            Trimite cazul,
            <br />
            primești oferta.
          </h2>
          <p style={{ margin: "30px 0 0", maxWidth: "44ch", fontSize: "18px", lineHeight: "1.6", color: "rgba(255,255,255,0.72)", fontWeight: "300" }}>{intro}</p>
          <ul style={{ listStyle: "none", margin: "34px 0 0", padding: "0", display: "grid", gap: "10px", fontSize: "15px", color: "rgba(255,255,255,0.8)", fontWeight: "300" }}>
            {checklist.map((c) => (
              <li key={c} style={{ display: "flex", gap: "12px" }}>
                <span style={{ color: "#26B7BC" }}>→</span>
                {c}
              </li>
            ))}
          </ul>
          <div style={{ marginTop: "40px", display: "flex", flexDirection: "column", gap: "10px", fontSize: "15px", color: "rgba(255,255,255,0.72)" }}>
            <a className="idl-hover-9" href="mailto:gabriel.musetescu@identical.ro" style={{ color: "#FFFFFF" }}>
              gabriel.musetescu@identical.ro
            </a>
            <span>0724 065 767 · București</span>
          </div>
        </div>
        <form data-reveal style={{ display: "grid", gap: "18px" }} data-form="contact">
          <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }} />
          <input name="name" aria-label="Nume și prenume" autoComplete="name" required type="text" placeholder="Nume și prenume" style={field} />
          <input name="clinic" aria-label="Clinică / cabinet" autoComplete="organization" type="text" placeholder="Clinică / cabinet" style={field} />
          <input name="email" aria-label="Email" autoComplete="email" required type="email" placeholder="Email" style={field} />
          <input name="phone" aria-label="Telefon" autoComplete="tel" type="tel" placeholder="Telefon" style={field} />
          <input name="workType" aria-label="Tip de lucrare" type="text" placeholder="Tip de lucrare" defaultValue={workType} style={field} />
          <textarea name="message" aria-label="Descrierea cazului și zona de interes" rows={4} placeholder="Descrierea cazului și zona de interes" style={{ ...field, resize: "vertical" }} />
          <p style={{ margin: "6px 0 0", fontSize: "13px", lineHeight: "1.5", color: "rgba(255,255,255,0.5)" }}>
            După trimitere primești pe email confirmarea. Fișierele CBCT le trimiți la primul răspuns, pe canalul agreat.
          </p>
          <button className="idl-hover-4" type="submit" data-magnetic style={{ justifySelf: "start", marginTop: "12px", padding: "17px 34px", border: "none", borderRadius: "999px", background: "#FFFFFF", color: "#1A1A1A", fontFamily: font, fontSize: "15px", cursor: "pointer" }}>
            Trimite cererea
          </button>
        </form>
      </div>
    </section>
  );
}
