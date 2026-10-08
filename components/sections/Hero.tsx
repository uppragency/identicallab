export function Hero() {
  return (
    <section
      id="top"
      style={{
        position: "relative",
        padding: "96px 40px 0",
        backgroundImage:
          "radial-gradient(1100px 620px at 88% -12%, rgba(38,183,188,0.18), rgba(255,255,255,0) 62%), repeating-linear-gradient(90deg, rgba(15,0,83,0.055) 0 1px, rgba(255,255,255,0) 1px 128px)",
        backgroundSize: "auto, auto",
        animation: "idl-pan 34s linear infinite",
      }}
    >
      <div
        className="m-grid m-gap"
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.15fr 0.85fr",
          gap: "64px",
          alignItems: "end",
        }}
      >
        <div>
          <div
            data-reveal
            style={{
              fontFamily: "var(--font-outfit), Helvetica, sans-serif",
              fontSize: "12px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#0F0053",
              marginBottom: "28px",
            }}
          >
            Unul dintre cele mai mari laboratoare dentare din București · 30 de ani de experiență
          </div>
          <h1
            data-reveal
            style={{
              fontFamily: "var(--font-outfit), Helvetica, sans-serif",
              fontWeight: "200",
              fontSize: "clamp(58px, 8.6vw, 138px)",
              lineHeight: "0.92",
              letterSpacing: "-0.035em",
              margin: "0",
              textWrap: "balance",
            }}
            data-lines
          >
            Identically Crafted,
            <br />
            {"Uniquely "}
            <span style={{ color: "#26B7BC" }}>Yours.</span>
          </h1>
          <p
            data-reveal
            style={{
              maxWidth: "48ch",
              margin: "34px 0 0",
              fontSize: "19px",
              lineHeight: "1.55",
              color: "#3A3A44",
              fontWeight: "300",
              textWrap: "pretty",
            }}
          >
            Laborator dentar high-end pentru cabinete stomatologice: scanare 3D, design CAD/CAM, ghiduri chirurgicale și modele printate.
            Fiecare lucrare este verificată în fiecare etapă și livrată rapid.
          </p>
          <p
            data-reveal
            style={{ maxWidth: "48ch", margin: "18px 0 0", fontSize: "16px", lineHeight: "1.6", color: "#6E6E78", fontWeight: "300" }}
          >
            30 de ani de experiență, peste 700 de cabinete stomatologice partenere.
          </p>
          <div data-reveal style={{ display: "flex", alignItems: "center", gap: "20px", margin: "44px 0 0" }}>
            <button
              className="idl-hover-5"
              type="button"
              data-open-form="Cerere de ofertă"
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
              Cere o ofertă
            </button>
            <a
              className="idl-hover-2"
              href="/servicii"
              data-magnetic
              style={{
                padding: "16px 30px",
                borderRadius: "999px",
                border: "1px solid rgba(26,26,26,0.22)",
                color: "#1A1A1A",
                fontSize: "15px",
              }}
            >
              {"Vezi serviciile "}
              <span style={{ color: "#26B7BC" }}>→</span>
            </a>
          </div>
        </div>
        <div data-reveal style={{ display: "grid", gap: "18px" }}>
          <div
            data-mask
            style={{
              aspectRatio: "4/5",
              borderRadius: "4px",
              backgroundColor: "#EDF1F3",
              backgroundImage: "repeating-linear-gradient(135deg, rgba(26,26,26,0.05) 0 1px, transparent 1px 9px)",
              display: "flex",
              alignItems: "flex-end",
              padding: "20px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-outfit), Helvetica, sans-serif",
                fontSize: "11px",
                letterSpacing: "0.08em",
                color: "#6E6E78",
              }}
            >
              [ FOTO ] model mandibular printat, prim-plan
            </span>
          </div>
          <div
            className="m-sb"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              borderTop: "1px solid rgba(26,26,26,0.12)",
              paddingTop: "14px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-outfit), Helvetica, sans-serif",
                fontSize: "11px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#6E6E78",
              }}
            >
              Precizie anatomică
            </span>
            <span style={{ fontFamily: "var(--font-outfit), Helvetica, sans-serif", fontSize: "30px" }}>1:1</span>
          </div>
        </div>
      </div>
    </section>
  );
}
