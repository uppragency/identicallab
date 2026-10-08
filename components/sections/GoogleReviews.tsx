export function GoogleReviews() {
  return (
    <section id="recenzii" style={{ padding: "0 40px 130px" }}>
      <div
        className="m-grid"
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "44px",
          background: "#F4F7F9",
          borderRadius: "4px",
          display: "grid",
          gridTemplateColumns: "0.4fr 0.6fr",
          gap: "48px",
          alignItems: "center",
        }}
      >
        <div>
          <div style={{ fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#0F0053", marginBottom: "18px" }}>
            [ Recenzii Google ]
          </div>
          <h2
            style={{
              margin: "0",
              fontFamily: "var(--font-outfit), Helvetica, sans-serif",
              fontWeight: "300",
              fontSize: "clamp(28px, 2.8vw, 42px)",
              lineHeight: "1.08",
              letterSpacing: "-0.02em",
            }}
          >
            Recenzii verificate de pe Google Maps
          </h2>
        </div>
        <div
          style={{
            minHeight: "220px",
            borderRadius: "4px",
            background: "#FFFFFF",
            border: "1px dashed rgba(26,26,26,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "12px",
            letterSpacing: "0.08em",
            color: "#9AA3AA",
          }}
        >
          [ WIDGET ] recenzii Google Maps
        </div>
      </div>
    </section>
  );
}
