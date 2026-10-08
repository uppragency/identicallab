import { Accent, Eyebrow, H2, font, pillGhost, pillPrimary } from "@/components/ui";
import { SERVICES, wrap } from "@/components/pages/blocks";
import { CATEGORIES, GUIDES, type Guide } from "@/lib/guides";

const navy = "#0F0053";
const body = { margin: "0", fontSize: "17px", lineHeight: "1.7", color: "#3A3A44", fontWeight: "300" } as const;

export function GuidesHero() {
  return (
    <section
      id="top"
      style={{
        position: "relative",
        padding: "96px 40px 70px",
        backgroundImage:
          "radial-gradient(1100px 620px at 12% -12%, rgba(38,183,188,0.18), rgba(255,255,255,0) 62%), repeating-linear-gradient(90deg, rgba(15,0,83,0.055) 0 1px, rgba(255,255,255,0) 1px 128px)",
        animation: "idl-pan 34s linear infinite",
      }}
    >
      <div style={wrap}>
        <Eyebrow style={{ marginBottom: "28px" }}>
          <a href="/" style={{ opacity: 0.6 }}>Acasă</a>
          {" / Ghiduri"}
        </Eyebrow>
        <div className="m-grid m-gap" style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "64px", alignItems: "end" }}>
          <h1 data-reveal data-lines style={{ margin: "0", fontFamily: font, fontWeight: "200", fontSize: "clamp(52px, 7.6vw, 124px)", lineHeight: "0.94", letterSpacing: "-0.035em", textWrap: "balance" }}>
            {"Ghiduri pentru "}
            <Accent>cabinete</Accent>.
          </h1>
          <p data-reveal style={{ margin: "0", fontSize: "19px", lineHeight: "1.55", color: "#3A3A44", fontWeight: "300", maxWidth: "46ch" }}>
            Pași practici, formate de fișiere și verificări utile, scrise de echipa laboratorului. Fiecare ghid se citește în câteva minute.
          </p>
        </div>
      </div>
    </section>
  );
}

const chip = { padding: "10px 18px", borderRadius: "999px", fontFamily: font, fontSize: "14px", cursor: "pointer" } as const;

export function GuidesGrid() {
  const filters = ["Toate", ...CATEGORIES];
  return (
    <section id="ghiduri" style={{ padding: "40px 40px 130px" }}>
      <div style={wrap}>
        <div data-reveal style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "44px" }}>
          {filters.map((f, i) => (
            <button
              key={f}
              className="idl-hover-7"
              type="button"
              data-filter={f}
              style={{ ...chip, border: "1px solid " + (i === 0 ? "transparent" : "rgba(26,26,26,0.18)"), background: i === 0 ? navy : "transparent", color: i === 0 ? "#FFFFFF" : "#3A3A44" }}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="m-grid m-rep" data-cases style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "40px 28px" }}>
          {GUIDES.map((g, i) => (
            <a
              key={g.slug}
              href={`/ghiduri/${g.slug}`}
              data-case={g.category}
              data-reveal
              data-lift
              style={{ position: "relative", display: "flex", flexDirection: "column", gap: "20px", padding: "14px", margin: "-14px", borderRadius: "12px", transition: "background .4s ease" }}
            >
              <div style={{ position: "relative", aspectRatio: "16/10", borderRadius: "6px", backgroundColor: "#EDF1F3", backgroundImage: "repeating-linear-gradient(135deg, rgba(26,26,26,0.05) 0 1px, transparent 1px 9px)", display: "flex", alignItems: "flex-end", justifyContent: "space-between", padding: "16px 18px" }}>
                <span style={{ fontFamily: font, fontWeight: "200", fontSize: "44px", lineHeight: "1", letterSpacing: "-0.03em", color: navy }}>{String(i + 1).padStart(2, "0")}</span>
                <span style={{ fontSize: "11px", letterSpacing: "0.08em", color: "#6E6E78" }}>[ FOTO{String(54+i+1).padStart(2, "0")} ]</span>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: navy, marginBottom: "10px" }}>
                  <span>{g.category}</span>
                  <span style={{ color: "#6E6E78" }}>{g.minutes} min</span>
                </div>
                <h3 style={{ margin: "0 0 8px", fontSize: "21px", fontWeight: "500", letterSpacing: "-0.01em", lineHeight: "1.25" }}>{g.title}</h3>
                <p style={{ margin: "0 0 14px", fontSize: "15px", lineHeight: "1.55", color: "#6E6E78", fontWeight: "300" }}>{g.excerpt}</p>
                <span style={{ fontSize: "14px", color: navy }}>
                  {"Citește ghidul "}
                  <span style={{ color: "#26B7BC" }}>→</span>
                </span>
              </div>
            </a>
          ))}
        </div>
        <p data-reveal data-cases-empty style={{ display: "none", margin: "40px 0 0", fontSize: "16px", color: "#6E6E78" }}>
          Nu există ghiduri în această categorie momentan.
        </p>
      </div>
    </section>
  );
}

export function GuideCta({ cta }: { cta?: string }) {
  return (
    <section id="cta-ghiduri" style={{ padding: "0 40px 130px" }}>
      <div className="m-grid m-gap" style={{ ...wrap, display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "end", borderTop: "1px solid rgba(26,26,26,0.14)", paddingTop: "56px" }}>
        <H2 max="22ch">
          {"Ai o întrebare despre "}
          <Accent>un caz</Accent>?
        </H2>
        <div data-reveal style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
          <button className="idl-hover-5" type="button" data-open-form={cta ?? "Întrebare despre un caz"} data-magnetic style={pillPrimary}>
            Scrie-ne
          </button>
          <a className="idl-hover-2" href="/contact" data-magnetic style={pillGhost}>
            {"Pagina de contact "}
            <span style={{ color: "#26B7BC" }}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export function GuideArticle({ g }: { g: Guide }) {
  const svc = SERVICES.find((s) => s.slug === g.service)!;
  const more = GUIDES.filter((x) => x.slug !== g.slug && x.category === g.category).concat(GUIDES.filter((x) => x.slug !== g.slug && x.category !== g.category)).slice(0, 3);
  return (
    <>
      <section id="top" style={{ position: "relative", padding: "96px 40px 70px", backgroundImage: "radial-gradient(1100px 620px at 88% -12%, rgba(38,183,188,0.18), rgba(255,255,255,0) 62%), repeating-linear-gradient(90deg, rgba(15,0,83,0.055) 0 1px, rgba(255,255,255,0) 1px 128px)" }}>
        <div style={{ ...wrap }}>
          <Eyebrow style={{ marginBottom: "28px" }}>
            <a href="/" style={{ opacity: 0.6 }}>Acasă</a>
            {" / "}
            <a href="/ghiduri" style={{ opacity: 0.6 }}>Ghiduri</a>
            {" / " + g.category}
          </Eyebrow>
          <h1 data-reveal data-lines style={{ margin: "0", fontFamily: font, fontWeight: "200", fontSize: "clamp(42px, 5.8vw, 92px)", lineHeight: "0.98", letterSpacing: "-0.03em", maxWidth: "20ch", textWrap: "balance" }}>
            {g.title}
          </h1>
          <div data-reveal style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "34px", fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#6E6E78" }}>
            <span style={{ color: navy }}>{g.category}</span>
            <span>·</span>
            <span>{g.minutes} min de citit</span>
            <span>·</span>
            <span>iDentical Lab</span>
          </div>
        </div>
      </section>

      <section id="ghid" style={{ padding: "40px 40px 110px" }}>
        <div className="m-grid m-gap" style={{ ...wrap, display: "grid", gridTemplateColumns: "0.3fr 0.7fr", gap: "72px", alignItems: "start" }}>
          <aside className="m-sticky" data-reveal style={{ position: "sticky", top: "120px" }}>
            <div style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: navy, marginBottom: "18px" }}>[ În acest ghid ]</div>
            <nav style={{ display: "flex", flexDirection: "column" }}>
              {g.sections.map((s, i) => (
                <a key={s.h} className="idl-hover-0" href={`#s${i + 1}`} style={{ padding: "12px 0", borderTop: "1px solid rgba(26,26,26,0.1)", fontSize: "15px", color: "#3A3A44", fontWeight: "300" }}>
                  {s.h}
                </a>
              ))}
              <div style={{ borderTop: "1px solid rgba(26,26,26,0.1)" }} />
            </nav>
          </aside>
          <article>
            <p data-reveal style={{ margin: "0 0 56px", fontFamily: font, fontWeight: "200", fontSize: "clamp(24px, 2.4vw, 36px)", lineHeight: "1.3", letterSpacing: "-0.015em", maxWidth: "36ch" }}>
              {g.intro}
            </p>
            {g.sections.map((s, i) => (
              <div key={s.h} id={`s${i + 1}`} data-reveal style={{ padding: "36px 0 40px", borderTop: "1px solid rgba(26,26,26,0.14)", scrollMarginTop: "100px" }}>
                <div style={{ fontFamily: font, fontWeight: "200", fontSize: "20px", color: "#26B7BC", marginBottom: "14px" }}>{String(i + 1).padStart(2, "0")}</div>
                <h2 style={{ margin: "0 0 18px", fontFamily: font, fontWeight: "300", fontSize: "clamp(26px, 2.6vw, 38px)", letterSpacing: "-0.02em", lineHeight: "1.15" }}>{s.h}</h2>
                {s.p && <p style={{ ...body, maxWidth: "62ch" }}>{s.p}</p>}
                {s.list && (
                  <ul style={{ listStyle: "none", margin: s.p ? "20px 0 0" : "0", padding: "0", maxWidth: "62ch" }}>
                    {s.list.map((li) => (
                      <li key={li} style={{ display: "flex", gap: "14px", padding: "13px 0", borderTop: "1px solid rgba(26,26,26,0.08)", ...body, fontSize: "16px", lineHeight: "1.55" }}>
                        <span style={{ color: "#26B7BC" }}>→</span>
                        {li}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <div data-reveal style={{ marginTop: "20px", padding: "36px 36px 40px", borderRadius: "10px", backgroundColor: navy, color: "#FFFFFF", backgroundImage: "radial-gradient(520px 320px at 100% 100%, rgba(38,183,188,0.35), rgba(15,0,83,0) 65%)" }}>
              <div style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#26B7BC", marginBottom: "14px" }}>Serviciu asociat</div>
              <h3 style={{ margin: "0 0 10px", fontFamily: font, fontWeight: "200", fontSize: "clamp(26px, 2.6vw, 40px)", letterSpacing: "-0.02em" }}>{svc.title}</h3>
              <p style={{ margin: "0 0 26px", maxWidth: "52ch", fontSize: "16px", lineHeight: "1.6", color: "rgba(255,255,255,0.78)", fontWeight: "300" }}>{svc.short}</p>
              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                <a className="idl-hover-b" href={`/servicii/${svc.slug}`} data-magnetic style={{ padding: "15px 28px", borderRadius: "999px", background: "#FFFFFF", color: navy, fontSize: "15px" }}>
                  {"Vezi serviciul "}
                  <span style={{ color: "#26B7BC" }}>→</span>
                </a>
                <button type="button" data-open-form={g.cta} data-magnetic style={{ padding: "15px 28px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.3)", background: "transparent", color: "#FFFFFF", fontFamily: font, fontSize: "15px", cursor: "pointer" }}>
                  Cere o ofertă
                </button>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="alte-ghiduri" style={{ padding: "0 40px 130px" }}>
        <div style={wrap}>
          <div className="m-sb" data-reveal style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: "40px", marginBottom: "44px" }}>
            <H2 max="18ch">
              {"Mai multe "}
              <Accent>ghiduri</Accent>
            </H2>
            <a className="idl-hover-9" href="/ghiduri" style={{ fontSize: "15px", color: navy, borderBottom: "1px solid rgba(15,0,83,0.4)", paddingBottom: "3px" }}>
              {"Toate ghidurile "}
              <span style={{ color: "#26B7BC" }}>→</span>
            </a>
          </div>
          <div className="m-grid m-rep" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "28px" }}>
            {more.map((m) => (
              <a key={m.slug} href={`/ghiduri/${m.slug}`} data-reveal data-lift style={{ display: "block", padding: "28px 26px", border: "1px solid rgba(26,26,26,0.1)", borderRadius: "10px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: navy, marginBottom: "18px" }}>
                  <span>{m.category}</span>
                  <span style={{ color: "#6E6E78" }}>{m.minutes} min</span>
                </div>
                <h3 style={{ margin: "0 0 10px", fontSize: "20px", fontWeight: "500", letterSpacing: "-0.01em", lineHeight: "1.25" }}>{m.title}</h3>
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "#6E6E78", fontWeight: "300" }}>{m.excerpt}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
