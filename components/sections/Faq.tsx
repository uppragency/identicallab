export function Faq() {
  return (
    <section id="intrebari" style={{ padding: "0 40px 130px" }}>
      <div
        className="m-grid m-gap"
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "0.36fr 0.64fr",
          gap: "64px",
          alignItems: "start",
        }}
      >
        <div className="m-sticky" data-reveal style={{ position: "sticky", top: "120px" }}>
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
            [ Întrebări frecvente ]
          </div>
          <h2
            style={{
              margin: "0 0 24px",
              fontFamily: "var(--font-outfit), Helvetica, sans-serif",
              fontWeight: "200",
              fontSize: "clamp(34px, 4vw, 64px)",
              lineHeight: "1.05",
              letterSpacing: "-0.02em",
            }}
          >
            Înainte de primul caz
          </h2>
          <button
            type="button"
            data-open-form="Întrebare despre un caz"
            style={{
              padding: "0 0 3px",
              border: "none",
              background: "transparent",
              fontFamily: "var(--font-outfit), Helvetica, sans-serif",
              fontSize: "15px",
              color: "#0F0053",
              borderBottom: "1px solid rgba(15,0,83,0.4)",
              cursor: "pointer",
            }}
          >
            {"Scrie-ne despre cazul tău "}
            <span style={{ color: "#26B7BC" }}>→</span>
          </button>
          <a
            className="idl-hover-9 link-after"
            href="/intrebari"
            style={{
              display: "inline-block",
              marginLeft: "26px", fontSize: "15px",
              color: "#0F0053",
              borderBottom: "1px solid rgba(15,0,83,0.4)",
              paddingBottom: "3px",
            }}
          >
            {"Toate întrebările "}
            <span style={{ color: "#26B7BC" }}>→</span>
          </a>
        </div>
        <div data-reveal style={{ display: "flex", flexDirection: "column" }}>
          <details style={{ borderTop: "1px solid rgba(26,26,26,0.12)", padding: "26px 0" }}>
            <summary
              className="m-sb"
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
                fontSize: "19px",
                fontWeight: "500",
                letterSpacing: "-0.01em",
              }}
            >
              Ce fișiere trebuie să trimit?
              <span style={{ color: "#0F0053" }}>+</span>
            </summary>
            <p style={{ margin: "16px 0 0", maxWidth: "60ch", fontSize: "16px", lineHeight: "1.6", color: "#3A3A44", fontWeight: "300" }}>
              Setul complet de imagini DICOM din investigația CBCT, plus o scurtă descriere a zonei de interes și a scopului clinic.
            </p>
          </details>
          <details style={{ borderTop: "1px solid rgba(26,26,26,0.12)", padding: "26px 0" }}>
            <summary
              className="m-sb"
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
                fontSize: "19px",
                fontWeight: "500",
                letterSpacing: "-0.01em",
              }}
            >
              Cât durează realizarea unui model?
              <span style={{ color: "#0F0053" }}>+</span>
            </summary>
            <p style={{ margin: "16px 0 0", maxWidth: "60ch", fontSize: "16px", lineHeight: "1.6", color: "#3A3A44", fontWeight: "300" }}>
              [ completează termenul obișnuit de livrare și opțiunea de urgență, dacă există ]
            </p>
          </details>
          <details style={{ borderTop: "1px solid rgba(26,26,26,0.12)", padding: "26px 0" }}>
            <summary
              className="m-sb"
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
                fontSize: "19px",
                fontWeight: "500",
                letterSpacing: "-0.01em",
              }}
            >
              Primesc și fișierul STL?
              <span style={{ color: "#0F0053" }}>+</span>
            </summary>
            <p style={{ margin: "16px 0 0", maxWidth: "60ch", fontSize: "16px", lineHeight: "1.6", color: "#3A3A44", fontWeight: "300" }}>
              [ completează: dacă STL-ul se livrează separat sau împreună cu modelul printat ]
            </p>
          </details>
          <details style={{ borderTop: "1px solid rgba(26,26,26,0.12)", padding: "26px 0" }}>
            <summary
              className="m-sb"
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
                fontSize: "19px",
                fontWeight: "500",
                letterSpacing: "-0.01em",
              }}
            >
              Cum se stabilește prețul?
              <span style={{ color: "#0F0053" }}>+</span>
            </summary>
            <p style={{ margin: "16px 0 0", maxWidth: "60ch", fontSize: "16px", lineHeight: "1.6", color: "#3A3A44", fontWeight: "300" }}>
              Prețul depinde de complexitatea cazului și de volumul modelului. Trimite fișierele și primești o ofertă înainte de începerea
              lucrului.
            </p>
          </details>
          <details style={{ borderTop: "1px solid rgba(26,26,26,0.12)", borderBottom: "1px solid rgba(26,26,26,0.12)", padding: "26px 0" }}>
            <summary
              className="m-sb"
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
                fontSize: "19px",
                fontWeight: "500",
                letterSpacing: "-0.01em",
              }}
            >
              Lucrați cu clinici din toată țara?
              <span style={{ color: "#0F0053" }}>+</span>
            </summary>
            <p style={{ margin: "16px 0 0", maxWidth: "60ch", fontSize: "16px", lineHeight: "1.6", color: "#3A3A44", fontWeight: "300" }}>
              [ completează zona acoperită și modul de livrare ]
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
