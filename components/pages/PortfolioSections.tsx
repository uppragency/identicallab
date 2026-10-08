import type { CSSProperties } from "react";
import { Accent, Eyebrow, H2, font, pillGhost, pillPrimary } from "@/components/ui";
import { SectionHead, wrap } from "@/components/pages/blocks";

const navy = "#0F0053";
const hatch = "repeating-linear-gradient(135deg, rgba(26,26,26,0.05) 0 1px, transparent 1px 9px)";
const hatchBefore = "repeating-linear-gradient(45deg, rgba(15,0,83,0.09) 0 1px, transparent 1px 9px)";

const pill: CSSProperties = { position: "absolute", top: "12px", padding: "5px 12px", borderRadius: "999px", background: "rgba(255,255,255,0.9)", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase" };

/** Before/after slider (behaviour comes from SiteBehaviors: [data-ba]). */
export function BeforeAfter({ id, ratio = "4/3", radius = "8px" }: { id: string; ratio?: string; radius?: string }) {
  return (
    <div data-ba style={{ position: "relative", aspectRatio: ratio, borderRadius: radius, overflow: "hidden", backgroundColor: "#EDF1F3", cursor: "none" }}>
      <div style={{ position: "absolute", inset: "0", backgroundColor: "#EDF1F3", backgroundImage: hatch }} />
      <div style={{ ...pill, right: "14px", color: navy }}>după</div>
      <span data-ph={id} style={{ position: "absolute", right: "14px", bottom: "14px", fontSize: "11px", letterSpacing: "0.08em", color: "#6E6E78", pointerEvents: "none" }}>[ {id} ]</span>
      <div data-ba-top style={{ position: "absolute", left: "0", top: "0", bottom: "0", width: "50%", overflow: "hidden", backgroundColor: "#E4EAEE", backgroundImage: hatchBefore }}>
        <div className="m-nowrap" style={{ ...pill, left: "14px", color: "#6E6E78", whiteSpace: "nowrap" }}>înainte</div>
      </div>
      <div data-ba-handle style={{ position: "absolute", top: "0", bottom: "0", left: "50%", width: "2px", background: "#26B7BC", pointerEvents: "none" }}>
        <span style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "34px", height: "34px", borderRadius: "999px", background: "#FFFFFF", border: "1px solid rgba(15,0,83,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", color: navy }}>
          ↔
        </span>
      </div>
      <input data-ba-range type="range" min={0} max={100} defaultValue="50" aria-label="Comparație înainte / după" style={{ position: "absolute", left: "0", right: "0", bottom: "10px", width: "100%", opacity: "0.001", height: "28px", cursor: "ew-resize" }} />
    </div>
  );
}

export function DragCursor() {
  return (
    <div
      className="m-nowrap"
      data-drag-cursor
      style={{ position: "fixed", left: "0", top: "0", zIndex: "60", display: "none", alignItems: "center", gap: "8px", padding: "9px 16px", borderRadius: "999px", background: navy, color: "#FFFFFF", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", transform: "translate(-50%, -50%)", pointerEvents: "none", whiteSpace: "nowrap" }}
    >
      {"trage "}
      <span style={{ color: "#26B7BC" }}>↔</span>
    </div>
  );
}

export function PortfolioHero() {
  const cats: [string, string][] = [
    ["Coroane și fațete", "04"],
    ["Fațete feldspatice", "01"],
    ["Ghiduri chirurgicale", "02"],
    ["Modele 3D", "03"],
    ["Segmentare CBCT", "02"],
  ];
  return (
    <section
      id="top"
      style={{
        position: "relative",
        padding: "96px 40px 100px",
        backgroundImage: "radial-gradient(1100px 620px at 12% -12%, rgba(38,183,188,0.18), rgba(255,255,255,0) 62%), repeating-linear-gradient(0deg, rgba(15,0,83,0.045) 0 1px, rgba(255,255,255,0) 1px 64px)",
      }}
    >
      <div style={wrap}>
        <Eyebrow style={{ marginBottom: "28px" }}>
          <a href="/" style={{ opacity: 0.6 }}>Acasă</a>
          {" / Portofoliu"}
        </Eyebrow>
        <h1 data-reveal data-lines style={{ margin: "0", fontFamily: font, fontWeight: "200", fontSize: "clamp(56px, 9.4vw, 156px)", lineHeight: "0.9", letterSpacing: "-0.04em" }}>
          {"Cazuri, "}
          <Accent>înainte</Accent>
          <br />
          și după.
        </h1>
        <div className="m-grid m-gap" style={{ display: "grid", gridTemplateColumns: "0.5fr 0.5fr", gap: "64px", marginTop: "56px", alignItems: "start" }}>
          <p data-reveal style={{ margin: "0", fontSize: "19px", lineHeight: "1.55", color: "#3A3A44", fontWeight: "300", maxWidth: "50ch" }}>
            Lucrări realizate pentru cabinete partenere, de la fațete individuale la reabilitări complete. Trage cursorul peste imagine ca să compari situația inițială cu rezultatul final.
          </p>
          <div data-reveal>
            {cats.map(([c, n]) => (
              <div key={c} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "14px 0", borderTop: "1px solid rgba(26,26,26,0.14)", fontSize: "17px", fontWeight: "300" }}>
                <span>{c}</span>
                <span style={{ fontFamily: font, fontWeight: "200", fontSize: "26px", color: "#26B7BC" }}>{n}</span>
              </div>
            ))}
            <div style={{ borderTop: "1px solid rgba(26,26,26,0.14)" }} />
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeaturedCase() {
  const rows: [string, string][] = [
    ["Provocarea", "Descrierea situației clinice de la care a pornit cazul. De completat."],
    ["Abordarea", "Pașii urmați în laborator, de la date digitale la lucrarea finală. De completat."],
    ["Rezultatul", "Ce a obținut cabinetul și ce a însemnat pentru pacient. De completat."],
  ];
  return (
    <section
      id="caz-principal"
      style={{ position: "relative", overflow: "hidden", padding: "120px 40px 130px", backgroundColor: navy, color: "#FFFFFF", backgroundImage: "radial-gradient(880px 520px at 100% 0%, rgba(38,183,188,0.3), rgba(15,0,83,0) 62%)" }}
    >
      <div style={wrap}>
        <SectionHead eyebrow="Cazul lunii" light>
          {"Reabilitare frontală "}
          <Accent>superioară</Accent>
        </SectionHead>
        <div className="m-grid m-gap" style={{ display: "grid", gridTemplateColumns: "1.25fr 0.75fr", gap: "64px", alignItems: "start" }}>
          <div data-reveal>
            <BeforeAfter id="CAZ07" ratio="16/11" radius="6px" />
          </div>
          <div data-reveal>
            {rows.map(([t, d]) => (
              <div key={t} style={{ padding: "26px 0", borderTop: "1px solid rgba(255,255,255,0.18)" }}>
                <div style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#26B7BC", marginBottom: "10px" }}>{t}</div>
                <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "rgba(255,255,255,0.8)", fontWeight: "300" }}>{d}</p>
              </div>
            ))}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.18)", paddingTop: "30px" }}>
              <button className="idl-hover-b" type="button" data-open-form="Cerere de ofertă, caz similar din portofoliu" data-magnetic style={{ ...pillPrimary, background: "#FFFFFF", color: navy }}>
                Am un caz similar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const CASES: [string, string, string][] = [
  ["Coroane și fațete", "Reabilitare frontală superioară", "Șase coroane și fațete, integrare cromatică cu dinții vecini."],
  ["Fațete feldspatice", "Fațete feldspatice, caz estetic", "Stratificare manuală pe refractar, grosime minimă."],
  ["Ghiduri chirurgicale", "Ghid pentru două implanturi", "Poziționare cu ghidaj protetic, profil de emergență planificat."],
  ["Modele 3D", "Model mandibular din CBCT", "Model printat pentru măsurători și planificare preoperatorie."],
  ["Coroane și fațete", "Reabilitare orală completă", "Plan în etape, verificare a ocluziei pe parcurs."],
  ["Modele 3D", "Wax-up digital și model de studiu", "Simulare digitală transformată în model fizic pentru probă."],
  ["Segmentare CBCT", "Segmentare mandibulară pentru planificare", "Structuri izolate din DICOM, pregătite pentru model și ghid."],
  ["Coroane și fațete", "Punte pe implanturi", "Design CAD/CAM orientat de poziția implanturilor."],
  ["Ghiduri chirurgicale", "Ghid pentru implant unic", "Ghid dento-purtat, verificat pe model înainte de livrare."],
  ["Coroane și fațete", "Coroane unitare în zona estetică", "Culoare și formă armonizate cu dentiția existentă."],
  ["Segmentare CBCT", "Segmentare sinus și canal mandibular", "Structuri marcate pentru evitare în planificarea implantară."],
  ["Modele 3D", "Model pentru intervenție complexă", "Replică a zonei de interes, folosită pentru repetarea pașilor."],
];

const filterBase: CSSProperties = { padding: "10px 18px", borderRadius: "999px", fontFamily: font, fontSize: "14px", cursor: "pointer" };

export function CasesGrid() {
  const filters = ["Toate", "Coroane și fațete", "Fațete feldspatice", "Ghiduri chirurgicale", "Modele 3D", "Segmentare CBCT"];
  return (
    <section id="portofoliu" style={{ padding: "120px 40px 130px" }}>
      <div style={wrap}>
        <SectionHead eyebrow="Toate cazurile" aside="Cazurile sunt publicate cu acordul cabinetului. Imaginile și descrierile de mai jos sunt placeholdere.">
          {"Lucrări "}
          <Accent>din laborator</Accent>
        </SectionHead>
        <div data-reveal style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "40px" }}>
          {filters.map((f, i) => (
            <button
              key={f}
              className="idl-hover-7"
              type="button"
              data-filter={f}
              style={{ ...filterBase, border: "1px solid " + (i === 0 ? "transparent" : "rgba(26,26,26,0.18)"), background: i === 0 ? navy : "transparent", color: i === 0 ? "#FFFFFF" : "#3A3A44" }}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="m-grid m-rep" data-cases style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px 28px" }}>
          {CASES.map(([cat, title, text], ci) => (
            <article
              key={title}
              data-case={cat}
              data-reveal
              data-lift
              style={{ position: "relative", display: "flex", flexDirection: "column", gap: "18px", padding: "14px", margin: "-14px", borderRadius: "12px", transition: "background .4s ease" }}
            >
              <BeforeAfter id={`CAZ${String(7+ci+1).padStart(2, "0")}`} />
              <div>
                <div style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: navy, marginBottom: "8px" }}>{cat}</div>
                <h3 style={{ margin: "0 0 6px", fontSize: "19px", fontWeight: "500", letterSpacing: "-0.01em" }}>{title}</h3>
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "#6E6E78", fontWeight: "300" }}>{text}</p>
              </div>
            </article>
          ))}
        </div>
        <p data-reveal data-cases-empty style={{ display: "none", margin: "40px 0 0", fontSize: "16px", color: "#6E6E78" }}>
          Nu există cazuri în această categorie momentan.
        </p>
      </div>
    </section>
  );
}

export function PortfolioCta() {
  return (
    <section id="cta-portofoliu" style={{ padding: "100px 40px 130px" }}>
      <div className="m-grid m-gap" style={{ ...wrap, display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "end", }}>
        <H2 max="22ch">
          {"Cazul tău poate fi "}
          <Accent>următorul</Accent>.
        </H2>
        <div data-reveal style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
          <button className="idl-hover-5" type="button" data-open-form="Cerere de ofertă, caz din portofoliu" data-magnetic style={pillPrimary}>
            Cere o ofertă
          </button>
          <a className="idl-hover-2" href="#contact" data-magnetic style={pillGhost}>
            {"Trimite un caz "}
            <span style={{ color: "#26B7BC" }}>↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
