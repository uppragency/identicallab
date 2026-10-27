import { Accent, Eyebrow, Photo, font } from "@/components/ui";
import { SERVICES, SectionHead, svcHref, wrap } from "@/components/pages/blocks";

const details: Record<string, { bullets: string[]; photo: string }> = {
  "reabilitari-totale-insurubate": {
    bullets: ["Restaurări complete pe implanturi", "Proiectate digital, verificate în fiecare etapă", "Planificare protetică înainte de execuție"],
    photo: "FOTO39",
  },
  "fatete-dentare": {
    bullets: ["Formă, culoare și aspect natural", "Proiectate digital, validate de medic", "Adaptare precisă la dinții pacientului"],
    photo: "FOTO40",
  },
  "coroane-si-punti": {
    bullets: ["Zirconiu, disilicat de litiu, ceramică, compozit", "Materiale alese în funcție de caz", "Formă și ocluzie controlate digital"],
    photo: "FOTO41",
  },
  "bonturi-personalizate": {
    bullets: ["Realizate pe măsura implantului", "Profil de emergență adaptat țesuturilor moi", "Proiectate digital"],
    photo: "FOTO70",
  },
  "smilecloud-wax-up": {
    bullets: ["Wax up digital al zâmbetului", "Rezultat vizibil înainte de execuție", "Validat de medic și de pacient"],
    photo: "FOTO71",
  },
  "ghiduri-chirurgicale": {
    bullets: ["Din planificarea implantară aprobată", "Poziționare ghidată a implanturilor", "Verificare de potrivire înainte de livrare"],
    photo: "FOTO42",
  },
};

/** Alternating rows, one per service, for the /servicii index. */
export function ServiceRows() {
  return (
    <section id="servicii" style={{ padding: "40px 40px 130px" }}>
      <div style={wrap}>
        {SERVICES.map((s, i) => {
          const d = details[s.slug];
          const flip = i % 2 === 1;
          return (
            <article
              id={s.slug}
              key={s.slug}
              className="m-grid m-gap"
              style={{ display: "grid", gridTemplateColumns: flip ? "0.9fr 1.1fr" : "1.1fr 0.9fr", gap: "72px", alignItems: "center", padding: "56px 0", borderTop: "1px solid rgba(26,26,26,0.14)" }}
            >
              <div style={{ order: flip ? 2 : 1 }} data-reveal>
                <Photo label={d.photo} ratio="16/11" />
              </div>
              <div style={{ order: flip ? 1 : 2 }} data-reveal>
                <div style={{ fontFamily: font, fontWeight: "200", fontSize: "64px", lineHeight: "1", color: "#26B7BC", letterSpacing: "-0.03em" }}>{s.n}</div>
                <h2 style={{ margin: "22px 0 16px", fontFamily: font, fontWeight: "200", fontSize: "clamp(34px, 3.6vw, 56px)", lineHeight: "1.04", letterSpacing: "-0.025em" }}>{s.title}</h2>
                <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.6", color: "#3A3A44", fontWeight: "300", maxWidth: "46ch" }}>{s.short}</p>
                <ul style={{ listStyle: "none", margin: "26px 0 0", padding: "0", display: "grid", gap: "0" }}>
                  {d.bullets.map((b) => (
                    <li key={b} style={{ display: "flex", gap: "12px", padding: "12px 0", borderTop: "1px solid rgba(26,26,26,0.1)", fontSize: "15px", color: "#3A3A44", fontWeight: "300" }}>
                      <span style={{ color: "#26B7BC" }}>→</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div style={{ display: "flex", alignItems: "center", gap: "24px", marginTop: "30px", flexWrap: "wrap" }}>
                  {s.page && (<a className="idl-hover-5" href={svcHref(s)} data-magnetic style={{ padding: "15px 28px", borderRadius: "999px", background: "#0F0053", color: "#FFFFFF", fontSize: "15px" }}>
                    {"Vezi serviciul "}
                    <span style={{ color: "#26B7BC" }}>→</span>
                  </a>)}
                  <button type="button" data-open-form={s.title} style={s.page ? { padding: "0 0 3px", border: "none", background: "transparent", fontFamily: font, fontSize: "15px", color: "#0F0053", borderBottom: "1px solid rgba(15,0,83,0.4)", cursor: "pointer" } : { padding: "15px 28px", border: "none", borderRadius: "999px", background: "#0F0053", color: "#FFFFFF", fontFamily: font, fontSize: "15px", cursor: "pointer" }}>
                    Cere o ofertă
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function ServicesIntroHead() {
  return (
    <SectionHead eyebrow="Servicii">
      {"Șase servicii, un singur "}
      <Accent>flux digital</Accent>
    </SectionHead>
  );
}
export { Eyebrow };
