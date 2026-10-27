import { Accent, Eyebrow, font, pillGhost, pillPrimary } from "@/components/ui";
import { wrap } from "@/components/pages/blocks";

const navy = "#0F0053";

export const FAQ_GROUPS: { id: string; title: string; items: [string, string][] }[] = [
  {
    id: "trimiterea-cazului",
    title: "Trimiterea cazului",
    items: [
      ["Cum trimit un caz?", "Completezi formularul de contact sau ne suni la 0724 065 767. Descrie pe scurt lucrarea și zona de interes; fișierele le trimiți la primul răspuns, pe canalul agreat."],
      ["Ce informații sunt necesare pentru a trimite un caz?", "Fișierele scanării intraorale, fotografiile de documentare și informațiile aferente comenzii. Suntem prezenți pe platformele cloud ale principalilor producători de scanere, astfel încât să ne poți transmite fișierele direct."],
      ["Ce se întâmplă dacă lipsesc date?", "Verificăm fișierele la primire. Dacă lipsește ceva, te sunăm și îți spunem exact ce trebuie retrimis."],
      ["Pot trimite doar o descriere, fără fișiere?", "Da, pentru a discuta cazul. Termenele se stabilesc după ce vedem datele reale ale cazului."],
    ],
  },
  {
    id: "servicii",
    title: "Servicii",
    items: [
      ["Pot comanda un singur serviciu?", "Da. Reabilitările totale înșurubate, fațetele dentare, coroanele și punțile, bonturile personalizate, SmileCloud wax up și ghidurile chirurgicale se pot comanda separat sau într-un flux complet."],
      ["Pot vedea designul înainte de producție?", "Da. Proiectul digital îți este trimis pentru validare, iar execuția începe după acordul tău."],
      ["Cum se stabilește necesarul de componente protetice?", "Odată ce cazul intră în etapa de proiectare, selectăm componentele necesare și îți transmitem lista pentru a le comanda."],
    ],
  },
  {
    id: "termene-si-livrare",
    title: "Termene și livrare",
    items: [
      ["Care este termenul de execuție?", "Termenul mediu de execuție este de 5 zile lucrătoare."],
      ["Există regim de urgență?", "Spune-ne la trimiterea cazului. Disponibilitatea depinde de volumul de lucru din laborator."],
      ["Cum ajunge lucrarea la cabinet?", "Lucrarea este verificată la finisare și expediată către cabinet, împreună cu documentația cazului."],
    ],
  },
  {
    id: "catalog-si-colaborare",
    title: "Catalog și colaborare",
    items: [
      ["Cum pot solicita catalogul de produse și lista de prețuri?", "Completează formularul de contact, iar noi te vom contacta pentru a-ți oferi catalogul de produse și lista de prețuri."],
      ["Colaborați cu clinici din afara țării?", "Da, colaborăm cu clinici atât din România, cât și din Europa. Livrările sunt realizate prin servicii externe de curierat."],
      ["Cum încep o colaborare?", "Trimite primul caz prin formular sau sună-ne. Nu este nevoie de un contract înainte de primul caz."],
    ],
  },
  {
    id: "date-si-confidentialitate",
    title: "Date și confidențialitate",
    items: [
      ["Ce date ale pacientului trebuie să trimit?", "Doar ce este necesar lucrării. Recomandăm să trimiți fișierele fără date de identificare ale pacientului, de exemplu cu un cod intern al cabinetului."],
      ["Publicați cazurile în portofoliu?", "Doar pe cele pentru care avem acordul cabinetului. Spune-ne dacă un caz nu poate fi folosit în portofoliu."],
    ],
  },
];

export function FaqHero() {
  return (
    <section
      id="top"
      style={{
        position: "relative",
        padding: "96px 40px 60px",
        backgroundImage:
          "radial-gradient(1100px 620px at 88% -12%, rgba(38,183,188,0.18), rgba(255,255,255,0) 62%), repeating-linear-gradient(0deg, rgba(15,0,83,0.045) 0 1px, rgba(255,255,255,0) 1px 64px)",
      }}
    >
      <div style={wrap}>
        <Eyebrow style={{ marginBottom: "28px" }}>
          <a href="/" style={{ opacity: 0.6 }}>Acasă</a>
          {" / Întrebări"}
        </Eyebrow>
        <h1 data-reveal data-lines style={{ margin: "0", fontFamily: font, fontWeight: "200", fontSize: "clamp(52px, 8.6vw, 140px)", lineHeight: "0.92", letterSpacing: "-0.035em" }}>
          {"Înainte de "}
          <Accent>primul caz</Accent>.
        </h1>
        <div className="m-grid m-gap" style={{ display: "grid", gridTemplateColumns: "0.55fr 0.45fr", gap: "64px", marginTop: "52px", alignItems: "end" }}>
          <p data-reveal style={{ margin: "0", fontSize: "19px", lineHeight: "1.55", color: "#3A3A44", fontWeight: "300", maxWidth: "52ch" }}>
            Răspunsuri la întrebările pe care le primim cel mai des de la cabinete. Caută după cuvânt sau alege o categorie.
          </p>
          <label data-reveal style={{ display: "block" }}>
            <span style={{ position: "absolute", left: "-9999px" }}>Caută în întrebări</span>
            <input
              data-faq-search
              type="search"
              placeholder="Caută, de exemplu: scanare, termen, catalog"
              style={{ width: "100%", padding: "16px 0", background: "transparent", border: "none", borderBottom: "1px solid rgba(26,26,26,0.3)", fontFamily: font, fontSize: "17px", outline: "none", color: "#1A1A1A" }}
            />
          </label>
        </div>
        <div data-reveal style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "40px" }}>
          {FAQ_GROUPS.map((g) => (
            <a key={g.id} className="idl-hover-7" href={`#${g.id}`} style={{ padding: "10px 18px", borderRadius: "999px", border: "1px solid rgba(26,26,26,0.18)", fontSize: "14px", color: "#3A3A44" }}>
              {g.title}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqGroups() {
  return (
    <section id="raspunsuri" style={{ padding: "40px 40px 110px" }}>
      <div style={wrap}>
        {FAQ_GROUPS.map((g, gi) => (
          <div
            key={g.id}
            id={g.id}
            data-faq-group
            className="m-grid m-gap"
            style={{ display: "grid", gridTemplateColumns: "0.34fr 0.66fr", gap: "64px", alignItems: "start", padding: "64px 0 40px", borderTop: "1px solid rgba(26,26,26,0.14)", scrollMarginTop: "90px" }}
          >
            <div className="m-sticky" data-reveal style={{ position: "sticky", top: "120px" }}>
              <div style={{ fontFamily: font, fontWeight: "200", fontSize: "56px", lineHeight: "1", color: "#26B7BC", letterSpacing: "-0.03em", marginBottom: "18px" }}>{String(gi + 1).padStart(2, "0")}</div>
              <h2 style={{ margin: "0", fontFamily: font, fontWeight: "200", fontSize: "clamp(30px, 3vw, 46px)", lineHeight: "1.05", letterSpacing: "-0.02em" }}>{g.title}</h2>
            </div>
            <div data-reveal>
              {g.items.map(([q, a]) => (
                <details key={q} data-faq-item style={{ borderTop: "1px solid rgba(26,26,26,0.12)", padding: "26px 0" }}>
                  <summary className="m-sb" style={{ display: "flex", justifyContent: "space-between", gap: "20px", fontSize: "19px", fontWeight: "500", letterSpacing: "-0.01em", cursor: "pointer" }}>
                    {q}
                    <span style={{ color: navy }}>+</span>
                  </summary>
                  <p style={{ margin: "16px 0 0", maxWidth: "62ch", fontSize: "16px", lineHeight: "1.6", color: "#3A3A44", fontWeight: "300" }}>{a}</p>
                </details>
              ))}
              <div style={{ borderTop: "1px solid rgba(26,26,26,0.12)" }} />
            </div>
          </div>
        ))}
        <p data-faq-empty style={{ display: "none", margin: "40px 0", fontSize: "17px", color: "#6E6E78" }}>
          Nu am găsit nicio întrebare pentru căutarea ta. Scrie-ne direct și îți răspundem.
        </p>
      </div>
    </section>
  );
}

export function FaqCta() {
  return (
    <section
      id="nu-ai-gasit"
      style={{ position: "relative", overflow: "hidden", padding: "110px 40px", background: "linear-gradient(140deg, #0F0053 0%, #17206E 55%, #26B7BC 130%)", color: "#FFFFFF" }}
    >
      <div className="m-grid m-gap" style={{ ...wrap, display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "64px", alignItems: "end" }}>
        <h2 data-reveal data-lines style={{ margin: "0", fontFamily: font, fontWeight: "200", fontSize: "clamp(38px, 5vw, 84px)", lineHeight: "1", letterSpacing: "-0.03em", maxWidth: "16ch" }}>
          {"Nu ai găsit "}
          <Accent>răspunsul</Accent>?
        </h2>
        <div data-reveal>
          <p style={{ margin: "0 0 30px", fontSize: "18px", lineHeight: "1.6", color: "rgba(255,255,255,0.78)", fontWeight: "300" }}>
            Scrie-ne despre cazul tău. Un tehnician îți răspunde direct, fără formule standard.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <button className="idl-hover-b" type="button" data-open-form="Întrebare despre un caz" data-magnetic style={{ ...pillPrimary, background: "#FFFFFF", color: navy }}>
              Pune o întrebare
            </button>
            <a href="/contact" data-magnetic style={{ ...pillGhost, border: "1px solid rgba(255,255,255,0.3)", color: "#FFFFFF" }}>
              {"Contact "}
              <span style={{ color: "#26B7BC" }}>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
