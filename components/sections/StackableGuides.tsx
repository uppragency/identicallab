export function StackableGuides() {
  return (
    <section
      id="ghiduri"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "130px 40px 140px",
        backgroundColor: "#0F0053",
        color: "#FFFFFF",
        backgroundImage:
          "radial-gradient(880px 520px at 92% 8%, rgba(38,183,188,0.3), rgba(15,0,83,0) 62%), repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0 1px, rgba(255,255,255,0) 1px 96px)",
      }}
    >
      <div style={{ position: "relative", maxWidth: "1440px", margin: "0 auto" }}>
        <div
          className="m-grid m-gap"
          style={{ display: "grid", gridTemplateColumns: "0.55fr 0.45fr", gap: "64px", alignItems: "end", marginBottom: "64px" }}
        >
          <div data-reveal>
            <div style={{ fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#26B7BC", marginBottom: "24px" }}>
              [ Ghiduri stackable ]
            </div>
            <h2
              style={{
                margin: "0",
                fontFamily: "var(--font-outfit), Helvetica, sans-serif",
                fontWeight: "200",
                fontSize: "clamp(40px, 5vw, 84px)",
                lineHeight: "1",
                letterSpacing: "-0.03em",
                color: "#FFFFFF",
              }}
              data-lines
            >
              Ghiduri stackable,
              <br />
              {"pas cu "}
              <span style={{ color: "#26B7BC" }}>pas</span>
            </h2>
          </div>
          <div data-reveal>
            <p
              style={{
                margin: "0",
                maxWidth: "50ch",
                fontSize: "18px",
                lineHeight: "1.6",
                color: "rgba(255,255,255,0.8)",
                fontWeight: "300",
                textWrap: "pretty",
              }}
            >
              Ghidurile stackable se așează unul peste altul și păstrează aceeași referință pe tot parcursul intervenției: osteotomie,
              poziționare, inserție. Poziția planificată digital rămâne aceeași și în sala de operație.
            </p>
            <p
              style={{
                margin: "20px 0 0",
                maxWidth: "50ch",
                fontSize: "16px",
                lineHeight: "1.6",
                color: "rgba(255,255,255,0.6)",
                fontWeight: "300",
              }}
            >
              Le realizăm din rezine biocompatibile, pe baza planificării făcute împreună cu medicul.
            </p>
          </div>
        </div>
        <div className="m-grid m-rep" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
          <div
            data-reveal
            data-card
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              background: "#FFFFFF",
              border: "1px solid rgba(26,26,26,0.1)",
              borderRadius: "12px",
              overflow: "hidden",
              transition: "background .4s ease",
            }}
          >
            <div
              data-mask
              style={{
                aspectRatio: "4/3",
                backgroundColor: "#EDF1F3",
                backgroundImage: "repeating-linear-gradient(135deg, rgba(26,26,26,0.05) 0 1px, transparent 1px 9px)",
                display: "flex",
                alignItems: "flex-end",
                padding: "14px",
              }}
            >
              <span style={{ fontSize: "10px", letterSpacing: "0.08em", color: "#6E6E78" }}>[ FOTO18 ]</span>
            </div>
            <div style={{ padding: "26px 24px 30px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "34px",
                    height: "34px",
                    borderRadius: "999px",
                    background: "#0F0053",
                    color: "#FFFFFF",
                    fontSize: "13px",
                  }}
                >
                  1
                </span>
                <span style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#0F0053" }}>Pasul 1</span>
              </div>
              <h3
                style={{
                  margin: "0 0 10px",
                  fontFamily: "var(--font-outfit), Helvetica, sans-serif",
                  fontWeight: "300",
                  fontSize: "26px",
                  letterSpacing: "-0.015em",
                  color: "#1A1A1A",
                }}
              >
                Scanare
              </h3>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#3A3A44", fontWeight: "300" }}>
                Preluăm CBCT-ul și amprenta digitală, apoi suprapunem datele prin dual scan technique.
              </p>
            </div>
          </div>
          <div
            data-reveal
            data-card
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              background: "#FFFFFF",
              border: "1px solid rgba(26,26,26,0.1)",
              borderRadius: "12px",
              overflow: "hidden",
              transition: "background .4s ease",
            }}
          >
            <div
              data-mask
              style={{
                aspectRatio: "4/3",
                backgroundColor: "#EDF1F3",
                backgroundImage: "repeating-linear-gradient(135deg, rgba(26,26,26,0.05) 0 1px, transparent 1px 9px)",
                display: "flex",
                alignItems: "flex-end",
                padding: "14px",
              }}
            >
              <span style={{ fontSize: "10px", letterSpacing: "0.08em", color: "#6E6E78" }}>[ FOTO19 ]</span>
            </div>
            <div style={{ padding: "26px 24px 30px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "34px",
                    height: "34px",
                    borderRadius: "999px",
                    background: "#0F0053",
                    color: "#FFFFFF",
                    fontSize: "13px",
                  }}
                >
                  2
                </span>
                <span style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#0F0053" }}>Pasul 2</span>
              </div>
              <h3
                style={{
                  margin: "0 0 10px",
                  fontFamily: "var(--font-outfit), Helvetica, sans-serif",
                  fontWeight: "300",
                  fontSize: "26px",
                  letterSpacing: "-0.015em",
                  color: "#1A1A1A",
                }}
              >
                Design 3D
              </h3>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#3A3A44", fontWeight: "300" }}>
                Planificăm poziția implanturilor împreună cu proiectul protetic și desenăm setul de ghiduri.
              </p>
            </div>
          </div>
          <div
            data-reveal
            data-card
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              background: "#FFFFFF",
              border: "1px solid rgba(26,26,26,0.1)",
              borderRadius: "12px",
              overflow: "hidden",
              transition: "background .4s ease",
            }}
          >
            <div
              data-mask
              style={{
                aspectRatio: "4/3",
                backgroundColor: "#EDF1F3",
                backgroundImage: "repeating-linear-gradient(135deg, rgba(26,26,26,0.05) 0 1px, transparent 1px 9px)",
                display: "flex",
                alignItems: "flex-end",
                padding: "14px",
              }}
            >
              <span style={{ fontSize: "10px", letterSpacing: "0.08em", color: "#6E6E78" }}>[ FOTO20 ]</span>
            </div>
            <div style={{ padding: "26px 24px 30px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "34px",
                    height: "34px",
                    borderRadius: "999px",
                    background: "#0F0053",
                    color: "#FFFFFF",
                    fontSize: "13px",
                  }}
                >
                  3
                </span>
                <span style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#0F0053" }}>Pasul 3</span>
              </div>
              <h3
                style={{
                  margin: "0 0 10px",
                  fontFamily: "var(--font-outfit), Helvetica, sans-serif",
                  fontWeight: "300",
                  fontSize: "26px",
                  letterSpacing: "-0.015em",
                  color: "#1A1A1A",
                }}
              >
                Producție
              </h3>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#3A3A44", fontWeight: "300" }}>
                Printăm ghidurile în rezină biocompatibilă, cu manșoane montate și verificare a potrivirii.
              </p>
            </div>
          </div>
          <div
            data-reveal
            data-card
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              background: "#FFFFFF",
              border: "1px solid rgba(26,26,26,0.1)",
              borderRadius: "12px",
              overflow: "hidden",
              transition: "background .4s ease",
            }}
          >
            <div
              data-mask
              style={{
                aspectRatio: "4/3",
                backgroundColor: "#EDF1F3",
                backgroundImage: "repeating-linear-gradient(135deg, rgba(26,26,26,0.05) 0 1px, transparent 1px 9px)",
                display: "flex",
                alignItems: "flex-end",
                padding: "14px",
              }}
            >
              <span style={{ fontSize: "10px", letterSpacing: "0.08em", color: "#6E6E78" }}>[ FOTO21 ]</span>
            </div>
            <div style={{ padding: "26px 24px 30px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "34px",
                    height: "34px",
                    borderRadius: "999px",
                    background: "#0F0053",
                    color: "#FFFFFF",
                    fontSize: "13px",
                  }}
                >
                  4
                </span>
                <span style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#0F0053" }}>Pasul 4</span>
              </div>
              <h3
                style={{
                  margin: "0 0 10px",
                  fontFamily: "var(--font-outfit), Helvetica, sans-serif",
                  fontWeight: "300",
                  fontSize: "26px",
                  letterSpacing: "-0.015em",
                  color: "#1A1A1A",
                }}
              >
                Chirurgie
              </h3>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#3A3A44", fontWeight: "300" }}>
                Ghidurile ajung în cabinet împreună cu planul cazului și cu ordinea de utilizare.
              </p>
            </div>
          </div>
        </div>
        <div data-reveal style={{ marginTop: "44px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "18px" }}>
          <button
            className="idl-hover-8"
            type="button"
            data-open-form="Cerere de ofertă — ghiduri stackable"
            data-magnetic
            style={{
              padding: "16px 30px",
              border: "none",
              borderRadius: "999px",
              background: "#FFFFFF",
              color: "#0F0053",
              fontFamily: "var(--font-outfit), Helvetica, sans-serif",
              fontSize: "15px",
              cursor: "pointer",
            }}
          >
            Trimite un caz cu ghid
          </button>
          <a
            className="idl-hover-9 link-after"
            href="/servicii/ghiduri-chirurgicale"
            style={{
              display: "inline-block",
              marginLeft: "26px", fontSize: "15px",
              color: "#FFFFFF",
              borderBottom: "1px solid rgba(255,255,255,0.4)",
              paddingBottom: "3px",
            }}
          >
            {"Despre ghidurile chirurgicale "}
            <span style={{ color: "#26B7BC" }}>→</span>
          </a>
          <span style={{ fontSize: "15px", color: "rgba(255,255,255,0.6)", fontWeight: "300" }}>
            [ completează termenul de execuție pentru ghiduri ]
          </span>
        </div>
      </div>
      <div
        className="m-nowrap"
        aria-hidden="true"
        style={{
          position: "absolute",
          right: "-1%",
          bottom: "-8%",
          fontFamily: "var(--font-outfit), Helvetica, sans-serif",
          fontWeight: "200",
          fontSize: "20vw",
          lineHeight: "0.8",
          letterSpacing: "-0.04em",
          color: "rgba(255,255,255,0.04)",
          pointerEvents: "none",
          whiteSpace: "nowrap",
        }}
      >
        stackable
      </div>
    </section>
  );
}
