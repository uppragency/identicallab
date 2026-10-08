export function Accreditations() {
  return (
    <section
      id="acreditari"
      style={{
        padding: "110px 40px 130px",
        backgroundColor: "#F4F7F9",
        backgroundImage:
          "linear-gradient(to bottom, #FFFFFF 0%, rgba(255,255,255,0) 12%, rgba(255,255,255,0) 86%, #FFFFFF 100%), repeating-linear-gradient(135deg, rgba(15,0,83,0.04) 0 1px, rgba(255,255,255,0) 1px 22px)",
      }}
    >
      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
        <div
          className="m-sb"
          data-reveal
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            gap: "40px",
            borderBottom: "1px solid rgba(26,26,26,0.12)",
            paddingBottom: "24px",
            marginBottom: "48px",
          }}
        >
          <h2
            style={{
              margin: "0",
              fontFamily: "var(--font-outfit), Helvetica, sans-serif",
              fontWeight: "300",
              fontSize: "clamp(30px, 3.2vw, 46px)",
              lineHeight: "1.05",
              letterSpacing: "-0.02em",
              maxWidth: "26ch",
            }}
          >
            Certificări, acreditări și parteneriate
          </h2>
          <span
            style={{
              fontFamily: "var(--font-outfit), Helvetica, sans-serif",
              fontSize: "12px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#0F0053",
            }}
          >
            [ Încredere ]
          </span>
        </div>
        <p
          data-reveal
          style={{ margin: "0 0 40px", maxWidth: "60ch", fontSize: "17px", lineHeight: "1.6", color: "#3A3A44", fontWeight: "300" }}
        >
          Lucrăm cu echipamente și materiale de la producători recunoscuți, iar procesele noastre respectă standardele declarate mai jos.
        </p>
        <div
          className="m-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "1px",
            background: "rgba(26,26,26,0.1)",
            border: "1px solid rgba(26,26,26,0.1)",
          }}
        >
          <div
            data-reveal
            style={{
              background: "#FFFFFF",
              aspectRatio: "3/2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "11px",
              letterSpacing: "0.08em",
              color: "#9AA3AA",
            }}
          >
            [ LOGO ]
          </div>
          <div
            data-reveal
            style={{
              background: "#FFFFFF",
              aspectRatio: "3/2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "11px",
              letterSpacing: "0.08em",
              color: "#9AA3AA",
            }}
          >
            [ LOGO ]
          </div>
          <div
            data-reveal
            style={{
              background: "#FFFFFF",
              aspectRatio: "3/2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "11px",
              letterSpacing: "0.08em",
              color: "#9AA3AA",
            }}
          >
            [ LOGO ]
          </div>
          <div
            data-reveal
            style={{
              background: "#FFFFFF",
              aspectRatio: "3/2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "11px",
              letterSpacing: "0.08em",
              color: "#9AA3AA",
            }}
          >
            [ LOGO ]
          </div>
          <div
            data-reveal
            style={{
              background: "#FFFFFF",
              aspectRatio: "3/2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "11px",
              letterSpacing: "0.08em",
              color: "#9AA3AA",
            }}
          >
            [ LOGO ]
          </div>
          <div
            data-reveal
            style={{
              background: "#FFFFFF",
              aspectRatio: "3/2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "11px",
              letterSpacing: "0.08em",
              color: "#9AA3AA",
            }}
          >
            [ LOGO ]
          </div>
        </div>
        <div
          className="m-grid m-rep"
          data-reveal
          style={{ marginTop: "24px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}
        >
          <div
            data-card
            style={{ position: "relative", padding: "26px", background: "#F4F7F9", borderRadius: "6px", transition: "background .4s ease" }}
          >
            <div style={{ fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#0F0053", marginBottom: "10px" }}>
              Certificare
            </div>
            <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "#3A3A44", fontWeight: "300" }}>
              [ denumire certificare și organism emitent ]
            </p>
          </div>
          <div
            data-card
            style={{ position: "relative", padding: "26px", background: "#F4F7F9", borderRadius: "6px", transition: "background .4s ease" }}
          >
            <div style={{ fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#0F0053", marginBottom: "10px" }}>
              Acreditare
            </div>
            <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "#3A3A44", fontWeight: "300" }}>
              [ denumire acreditare ]
            </p>
          </div>
          <div
            data-card
            style={{ position: "relative", padding: "26px", background: "#F4F7F9", borderRadius: "6px", transition: "background .4s ease" }}
          >
            <div style={{ fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#0F0053", marginBottom: "10px" }}>
              Parteneriat
            </div>
            <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "#3A3A44", fontWeight: "300" }}>
              [ brand de aparatură / materiale ]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
