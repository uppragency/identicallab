import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { font } from "@/components/ui";

export const metadata: Metadata = { title: "Pagina nu a fost găsită | iDentical Lab" };

const links: [string, string][] = [
  ["Servicii", "/servicii"],
  ["Portofoliu", "/portofoliu"],
  ["Cum lucrăm", "/cum-lucram"],
  ["Ghiduri", "/ghiduri"],
  ["Întrebări", "/intrebari"],
  ["Contact", "/contact"],
];

export default function NotFound() {
  return (
    <PageShell>
      <section
        id="top"
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "110px 40px 130px",
          backgroundImage:
            "radial-gradient(1100px 620px at 88% -12%, rgba(38,183,188,0.18), rgba(255,255,255,0) 62%), repeating-linear-gradient(90deg, rgba(15,0,83,0.055) 0 1px, rgba(255,255,255,0) 1px 128px)",
        }}
      >
        <div
          aria-hidden="true"
          className="m-nowrap"
          style={{ position: "absolute", right: "-2%", top: "6%", fontFamily: font, fontWeight: "200", fontSize: "34vw", lineHeight: "0.8", letterSpacing: "-0.05em", color: "rgba(15,0,83,0.05)", pointerEvents: "none", whiteSpace: "nowrap" }}
        >
          404
        </div>
        <div style={{ maxWidth: "1440px", margin: "0 auto", position: "relative" }}>
          <div style={{ fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#0F0053", marginBottom: "28px" }}>[ Eroare 404 ]</div>
          <h1 data-reveal data-lines style={{ margin: "0", fontFamily: font, fontWeight: "200", fontSize: "clamp(52px, 8.6vw, 140px)", lineHeight: "0.94", letterSpacing: "-0.035em", maxWidth: "12ch" }}>
            Pagina nu <span style={{ color: "#26B7BC" }}>există</span>.
          </h1>
          <p data-reveal style={{ margin: "34px 0 0", maxWidth: "46ch", fontSize: "19px", lineHeight: "1.55", color: "#3A3A44", fontWeight: "300" }}>
            Linkul este greșit sau pagina a fost mutată. Te ducem înapoi pe un drum cunoscut.
          </p>
          <div data-reveal style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "40px" }}>
            <a className="idl-hover-5" href="/" data-magnetic style={{ padding: "16px 30px", borderRadius: "999px", background: "#0F0053", color: "#FFFFFF", fontSize: "15px" }}>
              Înapoi acasă
            </a>
            <button className="idl-hover-2" type="button" data-open-form="Cerere de ofertă" data-magnetic style={{ padding: "16px 30px", borderRadius: "999px", border: "1px solid rgba(26,26,26,0.22)", background: "transparent", color: "#1A1A1A", fontFamily: font, fontSize: "15px", cursor: "pointer" }}>
              Cere o ofertă
            </button>
          </div>
          <div data-reveal style={{ marginTop: "80px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderTop: "1px solid rgba(26,26,26,0.14)" }} className="m-grid m-rep">
            {links.map(([t, h]) => (
              <a key={h} className="idl-hover-9" href={h} style={{ display: "flex", justifyContent: "space-between", padding: "22px 20px 22px 0", borderBottom: "1px solid rgba(26,26,26,0.14)", fontFamily: font, fontWeight: "300", fontSize: "22px", letterSpacing: "-0.01em" }}>
                {t}
                <span style={{ color: "#26B7BC" }}>→</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
