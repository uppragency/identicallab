import { Eyebrow, font } from "@/components/ui";
import { wrap } from "@/components/pages/blocks";
import { LEGAL_DOCS, type LegalDoc } from "@/lib/legal";

const navy = "#0F0053";
const body = { margin: "0 0 16px", fontSize: "17px", lineHeight: "1.7", color: "#3A3A44", fontWeight: "300", maxWidth: "66ch" } as const;

export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <>
      <section id="top" style={{ padding: "96px 40px 60px", backgroundImage: "radial-gradient(1100px 620px at 88% -12%, rgba(38,183,188,0.14), rgba(255,255,255,0) 62%)" }}>
        <div style={wrap}>
          <Eyebrow style={{ marginBottom: "28px" }}>
            <a href="/" style={{ opacity: 0.6 }}>Acasă</a>
            {" / " + doc.title}
          </Eyebrow>
          <h1 data-reveal data-lines style={{ margin: "0", fontFamily: font, fontWeight: "200", fontSize: "clamp(44px, 6.4vw, 104px)", lineHeight: "0.96", letterSpacing: "-0.035em", maxWidth: "16ch", textWrap: "balance" }}>
            {doc.title}
          </h1>
          <p data-reveal style={{ margin: "32px 0 0", maxWidth: "56ch", fontSize: "19px", lineHeight: "1.55", color: "#3A3A44", fontWeight: "300" }}>{doc.intro}</p>
          <div data-reveal style={{ marginTop: "28px", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6E6E78" }}>Ultima actualizare: {doc.updated}</div>
        </div>
      </section>

      <section id="document" style={{ padding: "30px 40px 130px" }}>
        <div className="m-grid m-gap" style={{ ...wrap, display: "grid", gridTemplateColumns: "0.3fr 0.7fr", gap: "72px", alignItems: "start" }}>
          <aside className="m-sticky" style={{ position: "sticky", top: "120px" }}>
            <div style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: navy, marginBottom: "18px" }}>[ Cuprins ]</div>
            <nav style={{ display: "flex", flexDirection: "column" }}>
              {doc.sections.map((s, i) => (
                <a key={s.h} className="idl-hover-0" href={`#s${i + 1}`} style={{ padding: "11px 0", borderTop: "1px solid rgba(26,26,26,0.1)", fontSize: "14px", color: "#3A3A44", fontWeight: "300" }}>
                  {i + 1}. {s.h}
                </a>
              ))}
              <div style={{ borderTop: "1px solid rgba(26,26,26,0.1)" }} />
            </nav>
            <div style={{ marginTop: "30px", display: "flex", flexDirection: "column", gap: "10px", fontSize: "14px" }}>
              {LEGAL_DOCS.filter((d) => d.slug !== doc.slug).map((d) => (
                <a key={d.slug} className="idl-hover-9" href={`/${d.slug}`} style={{ color: navy }}>
                  {d.title + " "}
                  <span style={{ color: "#26B7BC" }}>→</span>
                </a>
              ))}
            </div>
          </aside>
          <article>
            {doc.sections.map((s, i) => (
              <div key={s.h} id={`s${i + 1}`} style={{ padding: "34px 0 30px", borderTop: "1px solid rgba(26,26,26,0.14)", scrollMarginTop: "100px" }}>
                <h2 style={{ margin: "0 0 20px", fontFamily: font, fontWeight: "300", fontSize: "clamp(24px, 2.4vw, 34px)", letterSpacing: "-0.02em", lineHeight: "1.2" }}>
                  <span style={{ color: "#26B7BC", marginRight: "12px" }}>{String(i + 1).padStart(2, "0")}</span>
                  {s.h}
                </h2>
                {s.p?.map((t) => (
                  <p key={t} style={body}>
                    {t}
                  </p>
                ))}
                {s.list && (
                  <ul style={{ listStyle: "none", margin: "8px 0 0", padding: "0", maxWidth: "66ch" }}>
                    {s.list.map((li) => (
                      <li key={li} style={{ display: "flex", gap: "14px", padding: "12px 0", borderTop: "1px solid rgba(26,26,26,0.08)", ...body, margin: "0", fontSize: "16px", lineHeight: "1.55" }}>
                        <span style={{ color: "#26B7BC" }}>→</span>
                        {li}
                      </li>
                    ))}
                  </ul>
                )}
                {doc.slug === "politica-cookie" && i === 2 && (
                  <button type="button" data-cookie-settings className="idl-hover-5" style={{ marginTop: "12px", padding: "15px 28px", border: "none", borderRadius: "999px", background: navy, color: "#FFFFFF", fontFamily: font, fontSize: "15px", cursor: "pointer" }}>
                    Modifică preferințele
                  </button>
                )}
              </div>
            ))}
            <div style={{ borderTop: "1px solid rgba(26,26,26,0.14)", paddingTop: "28px", fontSize: "14px", color: "#6E6E78", lineHeight: 1.6 }}>
              Întrebări despre acest document? Scrie-ne la{" "}
              <a href="mailto:gabriel.musetescu@identical.ro" style={{ color: navy, borderBottom: "1px solid rgba(15,0,83,0.4)" }}>
                gabriel.musetescu@identical.ro
              </a>
              .
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
