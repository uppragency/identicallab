export function Workflow() {
  return (
    <section
      id="proces"
      style={{
        padding: "110px 40px 130px",
        backgroundColor: "#F4F7F9",
        backgroundImage:
          "linear-gradient(to bottom, #FFFFFF 0%, rgba(255,255,255,0) 12%, rgba(255,255,255,0) 82%, #FFFFFF 100%), repeating-linear-gradient(90deg, rgba(15,0,83,0.05) 0 1px, rgba(255,255,255,0) 1px 96px)",
        animation: "idl-pan 40s linear infinite",
      }}
    >
      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
        <div data-reveal style={{ maxWidth: "none", marginBottom: "72px" }}>
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
            [ Workflow ]
          </div>
          <h2
            className="m-nowrap"
            style={{
              margin: "0",
              fontFamily: "var(--font-outfit), Helvetica, sans-serif",
              fontWeight: "200",
              fontSize: "clamp(44px, 5.8vw, 96px)",
              lineHeight: "1",
              letterSpacing: "-0.02em",
              whiteSpace: "nowrap",
            }}
            data-lines
          >
            {"Patru pași de la fișier la "}
            <span style={{ color: "#26B7BC" }}>obiect</span>
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            className="m-grid"
            data-reveal
            style={{
              display: "grid",
              gridTemplateColumns: "90px 1fr 1fr",
              gap: "40px",
              alignItems: "start",
              padding: "34px 0",
              borderTop: "1px solid rgba(26,26,26,0.12)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-outfit), Helvetica, sans-serif",
                fontSize: "22px",
                fontWeight: "400",
                color: "#0F0053",
                lineHeight: "1",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "62px",
                height: "62px",
                border: "1px solid rgba(15,0,83,0.25)",
                borderRadius: "999px",
              }}
            >
              01
            </span>
            <h3
              style={{
                margin: "0",
                fontFamily: "var(--font-outfit), Helvetica, sans-serif",
                fontWeight: "400",
                fontSize: "32px",
                letterSpacing: "-0.015em",
              }}
              data-step="DICOM"
            >
              DICOM
            </h3>
            <p style={{ margin: "0", maxWidth: "56ch", fontSize: "17px", lineHeight: "1.6", color: "#3A3A44", fontWeight: "300" }}>
              Primim setul de imagini CBCT al pacientului, împreună cu indicațiile cazului și zona de interes.
            </p>
          </div>
          <div
            className="m-grid"
            data-reveal
            style={{
              display: "grid",
              gridTemplateColumns: "90px 1fr 1fr",
              gap: "40px",
              alignItems: "start",
              padding: "34px 0",
              borderTop: "1px solid rgba(26,26,26,0.12)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-outfit), Helvetica, sans-serif",
                fontSize: "22px",
                fontWeight: "400",
                color: "#0F0053",
                lineHeight: "1",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "62px",
                height: "62px",
                border: "1px solid rgba(15,0,83,0.25)",
                borderRadius: "999px",
              }}
            >
              02
            </span>
            <h3
              style={{
                margin: "0",
                fontFamily: "var(--font-outfit), Helvetica, sans-serif",
                fontWeight: "400",
                fontSize: "32px",
                letterSpacing: "-0.015em",
              }}
              data-step="Segmentare"
            >
              Segmentare
            </h3>
            <p style={{ margin: "0", maxWidth: "56ch", fontSize: "17px", lineHeight: "1.6", color: "#3A3A44", fontWeight: "300" }}>
              Separăm structurile anatomice relevante și verificăm corespondența cu imaginile radiologice.
            </p>
          </div>
          <div
            className="m-grid"
            data-reveal
            style={{
              display: "grid",
              gridTemplateColumns: "90px 1fr 1fr",
              gap: "40px",
              alignItems: "start",
              padding: "34px 0",
              borderTop: "1px solid rgba(26,26,26,0.12)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-outfit), Helvetica, sans-serif",
                fontSize: "22px",
                fontWeight: "400",
                color: "#0F0053",
                lineHeight: "1",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "62px",
                height: "62px",
                border: "1px solid rgba(15,0,83,0.25)",
                borderRadius: "999px",
              }}
            >
              03
            </span>
            <h3
              style={{
                margin: "0",
                fontFamily: "var(--font-outfit), Helvetica, sans-serif",
                fontWeight: "400",
                fontSize: "32px",
                letterSpacing: "-0.015em",
              }}
              data-step="STL"
            >
              STL
            </h3>
            <p style={{ margin: "0", maxWidth: "56ch", fontSize: "17px", lineHeight: "1.6", color: "#3A3A44", fontWeight: "300" }}>
              Modelul digital este pregătit pentru printare și poate fi folosit și pentru analiză pe ecran.
            </p>
          </div>
          <div
            className="m-grid"
            data-reveal
            style={{
              display: "grid",
              gridTemplateColumns: "90px 1fr 1fr",
              gap: "40px",
              alignItems: "start",
              padding: "34px 0",
              borderTop: "1px solid rgba(26,26,26,0.12)",
              borderBottom: "1px solid rgba(26,26,26,0.12)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-outfit), Helvetica, sans-serif",
                fontSize: "22px",
                fontWeight: "400",
                color: "#0F0053",
                lineHeight: "1",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "62px",
                height: "62px",
                border: "1px solid rgba(15,0,83,0.25)",
                borderRadius: "999px",
              }}
            >
              04
            </span>
            <h3
              style={{
                margin: "0",
                fontFamily: "var(--font-outfit), Helvetica, sans-serif",
                fontWeight: "400",
                fontSize: "32px",
                letterSpacing: "-0.015em",
              }}
              data-step="Printare 3D"
            >
              Printare 3D
            </h3>
            <p style={{ margin: "0", maxWidth: "56ch", fontSize: "17px", lineHeight: "1.6", color: "#3A3A44", fontWeight: "300" }}>
              Modelul fizic ajunge în cabinet pentru măsurători, planificarea intervenției și discuția cu pacientul.
            </p>
          </div>
        </div>
        <div data-reveal style={{ marginTop: "48px" }}>
          <button
            className="idl-hover-4"
            type="button"
            data-open-form="Cerere de ofertă — trimitere fișier CBCT"
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
            {"Trimite primul fișier "}
            <span style={{ color: "#26B7BC" }}>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
