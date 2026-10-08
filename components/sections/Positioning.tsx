export function Positioning() {
  return (
    <section
      style={{
        padding: "110px 40px 130px",
        backgroundColor: "#F4F7F9",
        backgroundImage:
          "linear-gradient(to bottom, #FFFFFF 0%, rgba(255,255,255,0) 14%, rgba(255,255,255,0) 84%, #FFFFFF 100%), repeating-linear-gradient(0deg, rgba(15,0,83,0.05) 0 1px, rgba(255,255,255,0) 1px 48px)",
        animation: "idl-drift 30s linear infinite",
      }}
    >
      <div
        className="m-grid m-gap"
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "0.64fr 0.36fr",
          gap: "64px",
          alignItems: "end",
        }}
      >
        <div data-reveal>
          <div
            style={{
              fontFamily: "var(--font-outfit), Helvetica, sans-serif",
              fontSize: "12px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#0F0053",
              marginBottom: "28px",
            }}
          >
            [ Poziționare ]
          </div>
          <div
            style={{
              fontFamily: "var(--font-outfit), Helvetica, sans-serif",
              fontSize: "clamp(34px, 4vw, 62px)",
              lineHeight: "1.06",
              letterSpacing: "-0.02em",
            }}
          >
            <div>Dental laboratory.</div>
            <div style={{ color: "#0F0053" }}>{"Aesthetics & Technology lovers."}</div>
            <div style={{}}>Here to build your perfect smile.</div>
          </div>
          <p
            style={{
              margin: "40px 0 0",
              maxWidth: "62ch",
              fontSize: "18px",
              lineHeight: "1.6",
              color: "#3A3A44",
              fontWeight: "300",
              textWrap: "pretty",
            }}
          >
            În spatele fiecărui zâmbet reușit există un proces precis. La iDentical Lab ne ocupăm de partea invizibilă, dar esențială. O
            lucrare dentară digitală trece prin mâinile mai multor specialiști – de la scanare 3D precisă, la design CAD/CAM și realizare în
            laborator. Perfect adaptată, verificată în fiecare etapă și livrată rapid, pentru confortul și siguranța pacientului.
          </p>
        </div>
        <div
          data-reveal
          data-mask
          style={{
            aspectRatio: "1/1",
            borderRadius: "4px",
            backgroundColor: "#EDF1F3",
            backgroundImage: "repeating-linear-gradient(135deg, rgba(26,26,26,0.05) 0 1px, transparent 1px 9px)",
            display: "flex",
            alignItems: "flex-end",
            padding: "20px",
          }}
        >
          <span
            style={{ fontFamily: "var(--font-outfit), Helvetica, sans-serif", fontSize: "11px", letterSpacing: "0.08em", color: "#6E6E78" }}
          >
            [ FOTO14 ]
          </span>
        </div>
      </div>
    </section>
  );
}
