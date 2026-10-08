export function About() {
  return (
    <section
      id="despre"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "130px 40px 140px",
        backgroundColor: "#0F0053",
        color: "#FFFFFF",
        backgroundImage: "radial-gradient(880px 520px at 6% 6%, rgba(38,183,188,0.3), rgba(15,0,83,0) 62%)",
      }}
    >
      <div
        className="m-nowrap m-26vw"
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-2%",
          bottom: "-6%",
          fontFamily: "var(--font-outfit), Helvetica, sans-serif",
          fontWeight: "200",
          fontSize: "26vw",
          lineHeight: "0.8",
          letterSpacing: "-0.04em",
          color: "rgba(255,255,255,0.04)",
          pointerEvents: "none",
          whiteSpace: "nowrap",
        }}
      >
        identical
      </div>
      <div
        className="m-grid m-gap"
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          display: "grid",
          position: "relative",
          gridTemplateColumns: "0.48fr 0.52fr",
          gap: "72px",
          alignItems: "start",
        }}
      >
        <div
          data-reveal
          data-mask
          style={{
            aspectRatio: "4/5",
            borderRadius: "4px",
            backgroundColor: "rgba(255,255,255,0.06)",
            backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,0.12) 0 1px, transparent 1px 9px)",
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
              color: "rgba(255,255,255,0.6)",
            }}
          >
            [ FOTO ] tehnician la lucru, detaliu de finisare
          </span>
        </div>
        <div data-reveal>
          <div
            style={{
              fontFamily: "var(--font-outfit), Helvetica, sans-serif",
              fontSize: "12px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#26B7BC",
              marginBottom: "22px",
            }}
          >
            [ Despre noi ]
          </div>
          <h2
            style={{
              margin: "0",
              fontFamily: "var(--font-outfit), Helvetica, sans-serif",
              fontWeight: "300",
              fontSize: "clamp(30px, 3.4vw, 52px)",
              lineHeight: "1.06",
              letterSpacing: "-0.02em",
              maxWidth: "24ch",
            }}
            data-lines
          >
            {"Un laborator complet digital, construit pe "}
            <span style={{ color: "#26B7BC" }}>detalii</span>.
          </h2>
          <p
            style={{
              margin: "32px 0 0",
              maxWidth: "60ch",
              fontSize: "18px",
              lineHeight: "1.6",
              color: "rgba(255,255,255,0.8)",
              fontWeight: "300",
              textWrap: "pretty",
            }}
          >
            Am crescut împreună cu tehnologia digitală, dar felul în care lucrăm a rămas același: analizăm fiecare caz, discutăm cu medicul
            și verificăm lucrarea la fiecare etapă, până când forma, ocluzia și integrarea estetică sunt cele potrivite.
          </p>
          <p
            style={{
              margin: "22px 0 0",
              maxWidth: "60ch",
              fontSize: "18px",
              lineHeight: "1.6",
              color: "rgba(255,255,255,0.8)",
              fontWeight: "300",
              textWrap: "pretty",
            }}
          >
            Colaborăm cu medici stomatologi și clinici din România și din afara ei, de la fațete individuale la reabilitări orale complete.
            Comunicarea directă cu cabinetul este parte din proces, nu un pas suplimentar.
          </p>
          <p
            style={{
              margin: "22px 0 0",
              maxWidth: "56ch",
              fontSize: "16px",
              lineHeight: "1.6",
              color: "rgba(255,255,255,0.58)",
              fontWeight: "300",
            }}
          >
            Tehnologie de ultimă generație, mâna tehnicianului și o predictibilitate pe care medicul o poate promite pacientului.
          </p>
          <button
            type="button"
            data-open-form="Începe o colaborare"
            style={{
              display: "inline-block",
              marginTop: "32px",
              padding: "0 0 3px",
              border: "none",
              background: "transparent",
              fontFamily: "var(--font-outfit), Helvetica, sans-serif",
              fontSize: "15px",
              color: "#FFFFFF",
              borderBottom: "1px solid rgba(255,255,255,0.4)",
              cursor: "pointer",
            }}
          >
            {"Începe o colaborare "}
            <span style={{ color: "#26B7BC" }}>→</span>
          </button>
          <a
            className="idl-hover-9 link-after"
            href="/despre-noi"
            style={{
              display: "inline-block",
              marginLeft: "26px", fontSize: "15px",
              color: "#FFFFFF",
              borderBottom: "1px solid rgba(255,255,255,0.4)",
              paddingBottom: "3px",
            }}
          >
            {"Despre noi "}
            <span style={{ color: "#26B7BC" }}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
