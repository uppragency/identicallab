import { Accent, Eyebrow, font } from "@/components/ui";
import { wrap } from "@/components/pages/blocks";

export function WorkHero() {
  const tabs: [string, string, string, string][] = [
    ["01", "Proces", "#proces", "De la fișierul primit la modelul din cabinet, în patru pași."],
    ["02", "Planificare", "#planificare", "Scanări, simulări 3D și ghiduri, înainte de intervenție."],
    ["03", "Livrare", "#livrare", "Preluare, design, validare, execuție și expediere."],
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
          {" / Cum lucrăm"}
        </Eyebrow>
        <h1 data-reveal data-lines style={{ margin: "0", fontFamily: font, fontWeight: "200", fontSize: "clamp(52px, 8vw, 132px)", lineHeight: "0.93", letterSpacing: "-0.035em", maxWidth: "14ch", textWrap: "balance" }}>
          {"De la fișier la lucrarea "}
          <Accent>livrată</Accent>.
        </h1>
        <p data-reveal style={{ margin: "36px 0 0", maxWidth: "56ch", fontSize: "19px", lineHeight: "1.55", color: "#3A3A44", fontWeight: "300" }}>
          Un caz trece prin trei etape clare: procesul de lucru, planificarea digitală și livrarea. Le descriem aici, ca să știi exact ce se întâmplă după ce trimiți cazul.
        </p>
        <div className="m-grid m-rep" data-reveal style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", marginTop: "72px" }}>
          {tabs.map(([n, t, h, d]) => (
            <a
              key={t}
              href={h}
              data-card
              data-magnetic
              style={{ display: "block", padding: "32px 30px", background: "#FFFFFF", border: "1px solid rgba(26,26,26,0.1)", borderRadius: "10px", transition: "background .4s ease" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "40px" }}>
                <span style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#0F0053" }}>{n}</span>
                <span style={{ color: "#26B7BC", fontSize: "20px" }}>↓</span>
              </div>
              <h3 style={{ margin: "0 0 10px", fontFamily: font, fontWeight: "300", fontSize: "32px", letterSpacing: "-0.02em" }}>{t}</h3>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "#6E6E78", fontWeight: "300" }}>{d}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Slim divider that introduces each phase of the combined page. */
export function PhaseDivider({ n, title, id }: { n: string; title: string; id?: string }) {
  return (
    <div id={id} style={{ padding: "40px 40px 0" }}>
      <div data-reveal style={{ ...wrap, display: "flex", alignItems: "center", gap: "24px", borderTop: "1px solid rgba(26,26,26,0.14)", paddingTop: "28px" }}>
        <span style={{ fontFamily: font, fontWeight: "200", fontSize: "56px", lineHeight: "1", color: "#26B7BC", letterSpacing: "-0.03em" }}>{n}</span>
        <span style={{ fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#0F0053" }}>{title}</span>
      </div>
    </div>
  );
}
