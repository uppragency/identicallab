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
            {"Patru pași de la scanare la "}
            <span style={{ color: "#26B7BC" }}>lucrare</span>
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
              data-step="Scanare intraorală"
            >
              Scanare intraorală
            </h3>
            <p style={{ margin: "0", maxWidth: "56ch", fontSize: "17px", lineHeight: "1.6", color: "#3A3A44", fontWeight: "300" }}>
              Primim fișierele scanării intraorale, împreună cu indicațiile cazului și informațiile comenzii.
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
              data-step="Fotografii documentare"
            >
              Fotografii documentare
            </h3>
            <p style={{ margin: "0", maxWidth: "56ch", fontSize: "17px", lineHeight: "1.6", color: "#3A3A44", fontWeight: "300" }}>
              Fotografiile de documentare completează scanarea și ne ajută să reproducem corect forma, culoarea și aspectul natural.
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
              data-step="Validare proiect design"
            >
              Validare proiect design
            </h3>
            <p style={{ margin: "0", maxWidth: "56ch", fontSize: "17px", lineHeight: "1.6", color: "#3A3A44", fontWeight: "300" }}>
              Îți trimitem proiectul digital pentru validare, iar execuția începe doar după acordul tău.
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
              data-step="Execuție și finisare"
            >
              Execuție și finisare
            </h3>
            <p style={{ margin: "0", maxWidth: "56ch", fontSize: "17px", lineHeight: "1.6", color: "#3A3A44", fontWeight: "300" }}>
              Lucrarea este executată, finisată și verificată, apoi livrată către cabinet.
            </p>
          </div>
        </div>
        <div data-reveal style={{ marginTop: "48px" }}>
          <button
            className="idl-hover-4"
            type="button"
            data-open-form="Cerere de ofertă — trimitere caz"
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
            {"Trimite primul caz "}
            <span style={{ color: "#26B7BC" }}>→</span>
          </button>
          <a
            className="idl-hover-9 link-after"
            href="/cum-lucram#proces"
            style={{
              display: "inline-block",
              marginLeft: "26px", fontSize: "15px",
              color: "#0F0053",
              borderBottom: "1px solid rgba(15,0,83,0.4)",
              paddingBottom: "3px",
            }}
          >
            {"Cum lucrăm, pas cu pas "}
            <span style={{ color: "#26B7BC" }}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
