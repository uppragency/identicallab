import { Accent, Eyebrow, H2, Photo, cardStyle, font, pillGhost, pillPrimary } from "@/components/ui";

const wrap = { maxWidth: "1440px", margin: "0 auto" } as const;
const lead = { margin: "0", fontSize: "19px", lineHeight: "1.55", color: "#3A3A44", fontWeight: "300", textWrap: "pretty" } as const;

export function AboutHero() {
  return (
    <section
      id="top"
      style={{
        position: "relative",
        padding: "96px 40px 110px",
        backgroundImage:
          "radial-gradient(1100px 620px at 88% -12%, rgba(38,183,188,0.18), rgba(255,255,255,0) 62%), repeating-linear-gradient(90deg, rgba(15,0,83,0.055) 0 1px, rgba(255,255,255,0) 1px 128px)",
        animation: "idl-pan 34s linear infinite",
      }}
    >
      <div style={wrap}>
        <Eyebrow style={{ marginBottom: "28px" }}>
          <a href="/" style={{ opacity: 0.6 }}>Acasă</a>
          {" / Despre noi"}
        </Eyebrow>
        <div className="m-grid m-gap" style={{ display: "grid", gridTemplateColumns: "1.25fr 0.75fr", gap: "64px", alignItems: "end" }}>
          <h1
            data-reveal
            data-lines
            style={{
              margin: "0",
              fontFamily: font,
              fontWeight: "200",
              fontSize: "clamp(52px, 7.2vw, 116px)",
              lineHeight: "0.94",
              letterSpacing: "-0.035em",
              textWrap: "balance",
            }}
          >
            {"Partea invizibilă a "}
            <Accent>zâmbetului</Accent>
            {", făcută cu grijă."}
          </h1>
          <div data-reveal>
            <p style={lead}>
              iDentical Lab este un laborator dentar digital din București. Lucrăm cu medici și clinici care au nevoie de precizie, de
              răspunsuri rapide și de o lucrare pe care o pot promite pacientului.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "20px", marginTop: "36px", flexWrap: "wrap" }}>
              <button className="idl-hover-5" type="button" data-open-form="Începe o colaborare" data-magnetic style={pillPrimary}>
                Începe o colaborare
              </button>
              <a className="idl-hover-2" href="/#servicii" data-magnetic style={pillGhost}>
                {"Vezi serviciile "}
                <span style={{ color: "#26B7BC" }}>→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="m-grid m-rep"
          data-reveal
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
            marginTop: "88px",
            borderTop: "1px solid rgba(26,26,26,0.12)",
            paddingTop: "28px",
          }}
        >
          {[
            ["30", "ani de experiență în tehnica dentară"],
            ["700+", "cabinete stomatologice partenere"],
            ["1", "flux digital complet, sub același acoperiș"],
          ].map(([n, l]) => (
            <div key={n}>
              <div className="m-nowrap" style={{ fontFamily: font, fontWeight: "200", fontSize: "clamp(48px, 5vw, 84px)", lineHeight: "1", letterSpacing: "-0.03em" }}>
                {n}
              </div>
              <div style={{ marginTop: "10px", fontSize: "15px", color: "#6E6E78", fontWeight: "300" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutBand() {
  return (
    <section style={{ padding: "0 0 130px", overflow: "hidden" }}>
      <Photo label="laboratorul iDentical, vedere de ansamblu" height="62vh" style={{ minHeight: "420px", padding: "28px 40px", animation: "idl-zoom 22s ease-in-out infinite alternate" }} />
    </section>
  );
}

export function AboutStory() {
  const steps = [
    ["01", "Tehnica dentară clasică", "Începem cu meșteșugul: ceară, ghips, mână sigură. Aici se formează ochiul pentru formă, ocluzie și detaliu, pe care îl păstrăm și azi."],
    ["02", "Trecerea la digital", "Introducem scanarea 3D și designul CAD/CAM. Procesele devin măsurabile, repetabile și mai rapide, fără să pierdem controlul tehnicianului."],
    ["03", "Laborator complet digital", "Segmentare CBCT, modele mandibulare printate 3D, ghiduri chirurgicale și planificare implantară, într-un singur lanț de răspundere."],
    ["04", "Astăzi", "Peste 700 de cabinete lucrează cu noi. Fiecare caz este analizat, discutat cu medicul și verificat la fiecare etapă."],
  ];
  return (
    <section id="povestea" style={{ padding: "110px 40px 130px", backgroundColor: "#F4F7F9" }}>
      <div className="m-grid m-gap" style={{ ...wrap, display: "grid", gridTemplateColumns: "0.42fr 0.58fr", gap: "72px", alignItems: "start" }}>
        <div className="m-sticky" data-reveal style={{ position: "sticky", top: "120px" }}>
          <Eyebrow style={{ marginBottom: "22px" }}>[ Povestea noastră ]</Eyebrow>
          <H2 max="16ch">
            {"De la meșteșug la un laborator "}
            <Accent>digital</Accent>
          </H2>
          <p style={{ ...lead, marginTop: "28px", maxWidth: "40ch", fontSize: "17px" }}>
            Am crescut împreună cu tehnologia, dar felul în care lucrăm a rămas același: atenție la detaliu și comunicare directă cu
            medicul.
          </p>
        </div>
        <ol style={{ listStyle: "none", margin: "0", padding: "0" }}>
          {steps.map(([n, t, d]) => (
            <li
              key={n}
              data-reveal
              className="m-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "88px 1fr",
                gap: "24px",
                padding: "34px 0",
                borderTop: "1px solid rgba(26,26,26,0.14)",
              }}
            >
              <div style={{ fontFamily: font, fontWeight: "200", fontSize: "44px", lineHeight: "1", color: "#26B7BC" }}>{n}</div>
              <div>
                <h3 style={{ margin: "0 0 12px", fontFamily: font, fontWeight: "300", fontSize: "30px", letterSpacing: "-0.02em" }}>{t}</h3>
                <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#3A3A44", fontWeight: "300", maxWidth: "58ch" }}>{d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function AboutMethod() {
  const items = [
    ["Analizăm fiecare caz", "Înainte de orice etapă de lucru, tehnicianul studiază datele cazului: scan, CBCT, fotografii, indicații clinice."],
    ["Discutăm cu medicul", "Dacă un caz are nevoie de o altă abordare, spunem asta direct și propunem alternativa, înainte de execuție."],
    ["Verificăm la fiecare etapă", "Forma, ocluzia și integrarea estetică sunt controlate pe parcurs, nu doar la final."],
    ["Livrăm predictibil", "Termene clare, lucrare perfect adaptată și un obiect fizic pe care clinicianul îl poate ține în mână."],
  ];
  return (
    <section
      id="metoda"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "130px 40px 140px",
        backgroundColor: "#0F0053",
        color: "#FFFFFF",
        backgroundImage: "radial-gradient(880px 520px at 94% 8%, rgba(38,183,188,0.3), rgba(15,0,83,0) 62%)",
      }}
    >
      <div
        className="m-nowrap m-26vw"
        aria-hidden="true"
        style={{ position: "absolute", left: "-2%", bottom: "-6%", fontFamily: font, fontWeight: "200", fontSize: "26vw", lineHeight: "0.8", letterSpacing: "-0.04em", color: "rgba(255,255,255,0.04)", pointerEvents: "none", whiteSpace: "nowrap" }}
      >
        method
      </div>
      <div style={{ ...wrap, position: "relative" }}>
        <div className="m-sb" data-reveal style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: "40px", marginBottom: "56px" }}>
          <H2 light max="20ch">
            {"Cum lucrăm, de la primul fișier la "}
            <Accent>livrare</Accent>
          </H2>
          <span className="m-nowrap" style={{ fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#26B7BC", whiteSpace: "nowrap" }}>
            [ Metoda ]
          </span>
        </div>
        <div className="m-grid m-rep" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}>
          {items.map(([t, d], i) => (
            <div
              key={t}
              data-reveal
              style={{ padding: "34px 28px", border: "1px solid rgba(255,255,255,0.16)", borderRadius: "10px", background: "rgba(255,255,255,0.03)" }}
            >
              <div style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#26B7BC", marginBottom: "40px" }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 style={{ margin: "0 0 14px", fontFamily: font, fontWeight: "300", fontSize: "26px", letterSpacing: "-0.02em", lineHeight: "1.15" }}>{t}</h3>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "rgba(255,255,255,0.72)", fontWeight: "300" }}>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutTech() {
  const items = [
    ["Scanare 3D", "Scanare intraorală și de laborator, cu fișiere compatibile cu fluxurile cabinetelor partenere."],
    ["Segmentare CBCT", "Reconstrucția 3D a anatomiei osoase a pacientului, pregătită pentru planificare și printare."],
    ["Design CAD/CAM", "Proiectare digitală a lucrărilor protetice, cu control asupra formei, ocluziei și grosimilor."],
    ["Printare 3D", "Modele mandibulare, modele de lucru și ghiduri chirurgicale, realizate în laborator."],
    ["Planificare implantară", "Poziționare digitală a implanturilor, discutată cu medicul înainte de etapa chirurgicală."],
    ["Finisare manuală", "Mâna tehnicianului pentru caracterizare, culoare și integrare estetică."],
  ];
  return (
    <section id="tehnologie" style={{ padding: "130px 40px" }}>
      <div style={wrap}>
        <div className="m-grid m-gap" style={{ display: "grid", gridTemplateColumns: "0.5fr 0.5fr", gap: "72px", alignItems: "end", marginBottom: "56px" }}>
          <div data-reveal>
            <Eyebrow style={{ marginBottom: "22px" }}>[ Tehnologie și dotare ]</Eyebrow>
            <H2>
              {"Tehnologia susține experiența, nu "}
              <Accent>o înlocuiește</Accent>
            </H2>
          </div>
          <p data-reveal style={{ ...lead, maxWidth: "52ch" }}>
            Tot lanțul de producție este în aceeași casă. Asta înseamnă un singur interlocutor pentru cabinet și o responsabilitate clară
            pentru fiecare lucrare.
          </p>
        </div>
        <div className="m-grid m-rep" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          {items.map(([t, d], i) => (
            <div key={t} data-reveal data-card style={cardStyle}>
              <div style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#0F0053", marginBottom: "26px" }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 style={{ margin: "0 0 14px", fontFamily: font, fontWeight: "300", fontSize: "28px", letterSpacing: "-0.02em" }}>{t}</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3A3A44", fontWeight: "300" }}>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutTeam() {
  const team = [
    ["Nume Prenume", "Fondator, tehnician dentar"],
    ["Nume Prenume", "Coordonator producție"],
    ["Nume Prenume", "Specialist CAD/CAM"],
    ["Nume Prenume", "Specialist planificare digitală"],
  ];
  return (
    <section id="echipa" style={{ padding: "0 40px 130px" }}>
      <div style={wrap}>
        <div className="m-sb" data-reveal style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: "40px", marginBottom: "48px" }}>
          <H2 max="18ch">
            {"Oamenii din spatele "}
            <Accent>lucrărilor</Accent>
          </H2>
          <span className="m-nowrap" style={{ fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#0F0053", whiteSpace: "nowrap" }}>
            [ Echipa ]
          </span>
        </div>
        <div className="m-grid m-rep" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}>
          {team.map(([n, r], i) => (
            <div key={i}>
              <Photo label="portret" ratio="4/5" />
              <div style={{ marginTop: "16px", borderTop: "1px solid rgba(26,26,26,0.12)", paddingTop: "14px" }}>
                <div style={{ fontFamily: font, fontSize: "20px", fontWeight: "300" }}>{n}</div>
                <div style={{ marginTop: "4px", fontSize: "13px", letterSpacing: "0.04em", color: "#6E6E78" }}>{r}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutCta() {
  return (
    <section
      id="contact"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "120px 40px",
        backgroundColor: "#0F0053",
        color: "#FFFFFF",
        backgroundImage: "radial-gradient(760px 460px at 92% 118%, rgba(38,183,188,0.34), rgba(15,0,83,0) 62%), repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0 1px, rgba(255,255,255,0) 1px 96px)",
      }}
    >
      <div className="m-grid m-gap" style={{ ...wrap, display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "64px", alignItems: "end" }}>
        <H2 light max="18ch">
          {"Trimite primul caz. Vezi "}
          <Accent>diferența</Accent>.
        </H2>
        <div data-reveal>
          <p style={{ margin: "0 0 32px", fontSize: "18px", lineHeight: "1.6", color: "rgba(255,255,255,0.78)", fontWeight: "300" }}>
            Spune-ne ce lucrare ai nevoie și revenim rapid cu un răspuns clar, direct de la laborator.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <button className="idl-hover-b" type="button" data-open-form="Cerere de ofertă" data-magnetic style={{ ...pillPrimary, background: "#FFFFFF", color: "#0F0053" }}>
              Cere o ofertă
            </button>
            <a href="tel:+40724065767" style={{ padding: "16px 30px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.3)", fontSize: "15px" }}>
              0724 065 767
            </a>
            <a href="https://wa.me/40724065767" style={{ padding: "16px 30px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.3)", fontSize: "15px" }}>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
