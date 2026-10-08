export function Careers() {
  return (
    <section id="cariere" style={{ padding: "0 40px 130px" }}>
      <div
        className="m-grid m-gap"
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          borderTop: "1px solid rgba(26,26,26,0.12)",
          paddingTop: "44px",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "64px",
        }}
      >
        <div data-reveal>
          <div
            style={{
              fontFamily: "var(--font-outfit), Helvetica, sans-serif",
              fontSize: "12px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#0F0053",
              marginBottom: "20px",
            }}
          >
            [ Cariere ]
          </div>
          <h3
            style={{
              margin: "0 0 18px",
              fontFamily: "var(--font-outfit), Helvetica, sans-serif",
              fontWeight: "300",
              fontSize: "clamp(28px, 2.8vw, 40px)",
              lineHeight: "1.1",
              letterSpacing: "-0.02em",
              maxWidth: "22ch",
            }}
          >
            Te-ai gândit vreodată să devii tehnician dentar?
          </h3>
          <p style={{ margin: "0 0 24px", maxWidth: "48ch", fontSize: "17px", lineHeight: "1.6", color: "#3A3A44", fontWeight: "300" }}>
            Transformi materiale în zâmbete și tehnologia în rezultate reale. Iar dacă ai deja experiență, avem o veste bună: angajăm.
          </p>
          <a
            href="#contact"
            style={{ fontSize: "15px", color: "#0F0053", borderBottom: "1px solid rgba(15,0,83,0.4)", paddingBottom: "3px" }}
          >
            {"Trimite-ne CV-ul "}
            <span style={{ color: "#26B7BC" }}>→</span>
          </a>
        </div>
        <div data-reveal>
          <div
            style={{
              fontFamily: "var(--font-outfit), Helvetica, sans-serif",
              fontSize: "12px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#0F0053",
              marginBottom: "20px",
            }}
          >
            [ Educație ]
          </div>
          <h3
            style={{
              margin: "0 0 18px",
              fontFamily: "var(--font-outfit), Helvetica, sans-serif",
              fontWeight: "300",
              fontSize: "clamp(28px, 2.8vw, 40px)",
              lineHeight: "1.1",
              letterSpacing: "-0.02em",
              maxWidth: "22ch",
            }}
          >
            Educație bazată pe practică, tehnologie și rezultate predictibile.
          </h3>
          <p style={{ margin: "0 0 24px", maxWidth: "48ch", fontSize: "17px", lineHeight: "1.6", color: "#3A3A44", fontWeight: "300" }}>
            Publicăm serii educative despre implantologia digitală, printre care Dual Scan Technique. Scrie-ne ce subiecte ai avea nevoie să
            fie abordate.
          </p>
          <a
            href="#contact"
            style={{ fontSize: "15px", color: "#0F0053", borderBottom: "1px solid rgba(15,0,83,0.4)", paddingBottom: "3px" }}
          >
            {"Propune un subiect "}
            <span style={{ color: "#26B7BC" }}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
