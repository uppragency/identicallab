export function Values() {
  return (
    <section id="valori" style={{ padding: "110px 40px 130px" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
        <div
          className="m-sb"
          data-reveal
          style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: "40px", marginBottom: "48px" }}
        >
          <h2
            style={{
              margin: "0",
              fontFamily: "var(--font-outfit), Helvetica, sans-serif",
              fontWeight: "200",
              fontSize: "clamp(34px, 4vw, 64px)",
              lineHeight: "1.02",
              letterSpacing: "-0.025em",
              maxWidth: "24ch",
            }}
            data-lines
          >
            {"Pe ce se sprijină fiecare "}
            <span style={{ color: "#26B7BC" }}>lucrare</span>
          </h2>
          <span
            className="m-nowrap"
            style={{ fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#0F0053", whiteSpace: "nowrap" }}
          >
            [ Trei piloni ]
          </span>
        </div>
        <div className="m-grid m-rep" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          <div
            data-reveal
            data-card
            style={{
              position: "relative",
              padding: "38px 32px",
              background: "#FFFFFF",
              border: "1px solid rgba(26,26,26,0.1)",
              borderRadius: "10px",
              transition: "background .4s ease",
            }}
          >
            <div style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#0F0053", marginBottom: "26px" }}>
              01 · Experiență
            </div>
            <h3
              style={{
                margin: "0 0 14px",
                fontFamily: "var(--font-outfit), Helvetica, sans-serif",
                fontWeight: "300",
                fontSize: "30px",
                letterSpacing: "-0.02em",
              }}
            >
              Expertiză
            </h3>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3A3A44", fontWeight: "300" }}>
              Treizeci de ani de practică în tehnica dentară, transferați într-un flux complet digital. Cazurile complexe trec prin mâinile
              tehnicienilor cu cea mai multă experiență din laborator.
            </p>
          </div>
          <div
            data-reveal
            data-card
            style={{
              position: "relative",
              padding: "38px 32px",
              background: "#FFFFFF",
              border: "1px solid rgba(26,26,26,0.1)",
              borderRadius: "10px",
              transition: "background .4s ease",
            }}
          >
            <div style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#0F0053", marginBottom: "26px" }}>
              02 · Dotare
            </div>
            <h3
              style={{
                margin: "0 0 14px",
                fontFamily: "var(--font-outfit), Helvetica, sans-serif",
                fontWeight: "300",
                fontSize: "30px",
                letterSpacing: "-0.02em",
              }}
            >
              Tehnologie
            </h3>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3A3A44", fontWeight: "300" }}>
              Scanare 3D, design CAD/CAM, planificare implantară și printare, toate în aceeași casă. Un singur lanț de răspundere, de la
              fișier la lucrarea din cutie.
            </p>
          </div>
          <div
            data-reveal
            data-card
            style={{
              position: "relative",
              padding: "38px 32px",
              background: "#FFFFFF",
              border: "1px solid rgba(26,26,26,0.1)",
              borderRadius: "10px",
              transition: "background .4s ease",
            }}
          >
            <div style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#0F0053", marginBottom: "26px" }}>
              03 · Colaborare
            </div>
            <h3
              style={{
                margin: "0 0 14px",
                fontFamily: "var(--font-outfit), Helvetica, sans-serif",
                fontWeight: "300",
                fontSize: "30px",
                letterSpacing: "-0.02em",
              }}
            >
              Relații
            </h3>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3A3A44", fontWeight: "300" }}>
              Peste 700 de cabinete lucrează cu noi pentru că răspundem repede și spunem lucrurile pe față, inclusiv când un caz are nevoie
              de o altă abordare.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
