export function Faq() {
  return (
    <section id="intrebari" style={{ padding: "70px 40px 130px" }}>
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
              Ce informații sunt necesare pentru a trimite un caz?
              <span style={{ color: "#0F0053" }}>+</span>
            </summary>
            <p style={{ margin: "16px 0 0", maxWidth: "60ch", fontSize: "16px", lineHeight: "1.6", color: "#3A3A44", fontWeight: "300" }}>
              Fișierele scanării intraorale, fotografiile de documentare și informațiile aferente comenzii. Suntem prezenți pe platformele cloud ale principalilor producători de scanere, astfel încât să ne poți transmite fișierele direct.
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
              Care este termenul de execuție?
              <span style={{ color: "#0F0053" }}>+</span>
            </summary>
            <p style={{ margin: "16px 0 0", maxWidth: "60ch", fontSize: "16px", lineHeight: "1.6", color: "#3A3A44", fontWeight: "300" }}>
              Termenul mediu de execuție este de 5 zile lucrătoare.
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
              Cum se stabilește necesarul de componente protetice?
              <span style={{ color: "#0F0053" }}>+</span>
            </summary>
            <p style={{ margin: "16px 0 0", maxWidth: "60ch", fontSize: "16px", lineHeight: "1.6", color: "#3A3A44", fontWeight: "300" }}>
              Odată ce cazul intră în etapa de proiectare, selectăm componentele necesare și îți transmitem lista pentru a le comanda.
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
              Cum pot solicita catalogul de produse și lista de prețuri?
              <span style={{ color: "#0F0053" }}>+</span>
            </summary>
            <p style={{ margin: "16px 0 0", maxWidth: "60ch", fontSize: "16px", lineHeight: "1.6", color: "#3A3A44", fontWeight: "300" }}>
              Completează formularul de contact, iar noi te vom contacta pentru a-ți oferi catalogul de produse și lista de prețuri.
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
              Colaborați cu clinici din afara țării?
              <span style={{ color: "#0F0053" }}>+</span>
            </summary>
            <p style={{ margin: "16px 0 0", maxWidth: "60ch", fontSize: "16px", lineHeight: "1.6", color: "#3A3A44", fontWeight: "300" }}>
              Da, colaborăm cu clinici atât din România, cât și din Europa. Livrările sunt realizate prin servicii externe de curierat.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
