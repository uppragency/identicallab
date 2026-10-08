export function Delivery() {
  return (
    <section
      id="livrare"
      style={{
        padding: "120px 40px 130px",
        backgroundColor: "#F4F7F9",
        backgroundImage:
          "linear-gradient(to bottom, #FFFFFF 0%, rgba(255,255,255,0) 12%, rgba(255,255,255,0) 86%, #FFFFFF 100%), repeating-linear-gradient(0deg, rgba(15,0,83,0.045) 0 1px, rgba(255,255,255,0) 1px 56px)",
      }}
    >
      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
        <div data-reveal style={{ maxWidth: "38ch", marginBottom: "56px" }}>
          <div style={{ fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#0F0053", marginBottom: "20px" }}>
            [ Livrare ]
          </div>
          <h2
            style={{
              margin: "0",
              fontFamily: "var(--font-outfit), Helvetica, sans-serif",
              fontWeight: "200",
              fontSize: "clamp(36px, 4.2vw, 68px)",
              lineHeight: "1.02",
              letterSpacing: "-0.025em",
            }}
            data-lines
          >
            Ce se întâmplă în
            <br />
            <span style={{ color: "#26B7BC" }}>primele trei zile</span>
          </h2>
        </div>
        <div className="m-grid m-rep" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          <div
            data-reveal
            data-card
            style={{
              position: "relative",
              padding: "34px 30px",
              background: "#FFFFFF",
              border: "1px solid rgba(26,26,26,0.1)",
              borderRadius: "10px",
              transition: "background .4s ease",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "22px" }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "46px",
                  height: "46px",
                  borderRadius: "999px",
                  background: "#0F0053",
                  color: "#FFFFFF",
                  fontSize: "16px",
                }}
              >
                1
              </span>
              <span style={{ fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#0F0053" }}>Ziua 1</span>
            </div>
            <h3
              style={{
                margin: "0 0 12px",
                fontFamily: "var(--font-outfit), Helvetica, sans-serif",
                fontWeight: "300",
                fontSize: "26px",
                letterSpacing: "-0.015em",
              }}
            >
              Preluare și verificare
            </h3>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3A3A44", fontWeight: "300" }}>
              Primim fișierele și indicațiile, verificăm calitatea scanării și confirmăm cazul. Dacă lipsește ceva, te sunăm în aceeași zi.
            </p>
          </div>
          <div
            data-reveal
            data-card
            style={{
              position: "relative",
              padding: "34px 30px",
              background: "#FFFFFF",
              border: "1px solid rgba(26,26,26,0.1)",
              borderRadius: "10px",
              transition: "background .4s ease",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "22px" }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "46px",
                  height: "46px",
                  borderRadius: "999px",
                  background: "#0F0053",
                  color: "#FFFFFF",
                  fontSize: "16px",
                }}
              >
                2
              </span>
              <span style={{ fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#0F0053" }}>Ziua 2</span>
            </div>
            <h3
              style={{
                margin: "0 0 12px",
                fontFamily: "var(--font-outfit), Helvetica, sans-serif",
                fontWeight: "300",
                fontSize: "26px",
                letterSpacing: "-0.015em",
              }}
            >
              Design și validare
            </h3>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3A3A44", fontWeight: "300" }}>
              Realizăm designul digital și îl trimitem spre validare, împreună cu observațiile tehnice acolo unde sunt necesare.
            </p>
          </div>
          <div
            data-reveal
            data-card
            style={{
              position: "relative",
              padding: "34px 30px",
              background: "#FFFFFF",
              border: "1px solid rgba(26,26,26,0.1)",
              borderRadius: "10px",
              transition: "background .4s ease",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "22px" }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "46px",
                  height: "46px",
                  borderRadius: "999px",
                  background: "#0F0053",
                  color: "#FFFFFF",
                  fontSize: "16px",
                }}
              >
                3
              </span>
              <span style={{ fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#0F0053" }}>Ziua 3</span>
            </div>
            <h3
              style={{
                margin: "0 0 12px",
                fontFamily: "var(--font-outfit), Helvetica, sans-serif",
                fontWeight: "300",
                fontSize: "26px",
                letterSpacing: "-0.015em",
              }}
            >
              Execuție și expediere
            </h3>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3A3A44", fontWeight: "300" }}>
              Lucrarea intră în producție, este verificată la finisare și pleacă spre cabinet cu documentația cazului.
            </p>
          </div>
        </div>
        <p
          data-reveal
          style={{ margin: "34px 0 0", maxWidth: "60ch", fontSize: "16px", lineHeight: "1.6", color: "#6E6E78", fontWeight: "300" }}
        >
          [ completează termenele reale pe tip de lucrare și regimul de urgență ]
        </p>
        <div data-reveal style={{ marginTop: "48px" }}>
          <button
            className="idl-hover-4"
            type="button"
            data-open-form="Cerere de ofertă — termen de livrare"
            data-magnetic
            style={{
              padding: "16px 30px",
              border: "none",
              borderRadius: "999px",
              background: "#0F0053",
              color: "#FFFFFF",
              fontFamily: "var(--font-outfit), Helvetica, sans-serif",
              fontSize: "15px",
              cursor: "pointer",
            }}
          >
            {"Verifică termenul pentru cazul tău "}
            <span style={{ color: "#26B7BC" }}>→</span>
          </button>
          <a
            className="idl-hover-9 link-after"
            href="/cum-lucram#livrare"
            style={{
              display: "inline-block",
              marginLeft: "26px", fontSize: "15px",
              color: "#0F0053",
              borderBottom: "1px solid rgba(15,0,83,0.4)",
              paddingBottom: "3px",
            }}
          >
            {"Despre livrare "}
            <span style={{ color: "#26B7BC" }}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
