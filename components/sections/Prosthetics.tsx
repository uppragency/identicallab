export function Prosthetics() {
  return (
    <section style={{ padding: "0 40px 130px" }}>
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
        <div
          className="m-sticky"
          data-reveal
          style={{
            fontFamily: "var(--font-outfit), Helvetica, sans-serif",
            fontSize: "12px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#0F0053",
            position: "sticky",
            top: "120px",
          }}
        >
          [ Restaurări protetice ]
        </div>
        <div data-reveal>
          <h2
            style={{
              margin: "0",
              fontFamily: "var(--font-outfit), Helvetica, sans-serif",
              fontWeight: "200",
              fontSize: "clamp(36px, 4.2vw, 68px)",
              lineHeight: "1.08",
              letterSpacing: "-0.02em",
              maxWidth: "24ch",
            }}
          >
            Detaliile fac diferența.
          </h2>
          <p
            style={{
              margin: "32px 0 0",
              maxWidth: "62ch",
              fontSize: "18px",
              lineHeight: "1.6",
              color: "#3A3A44",
              fontWeight: "300",
              textWrap: "pretty",
            }}
          >
            O restaurare protetică reușită începe cu atenția acordată fiecărui detaliu: formă, proporții, morfologie, ocluzie și integrare
            estetică. În laborator, fiecare element este analizat și ajustat pentru ca rezultatul final să fie cât mai natural și
            predictibil.
          </p>
          <p
            style={{
              margin: "24px 0 0",
              maxWidth: "62ch",
              fontSize: "18px",
              lineHeight: "1.6",
              color: "#3A3A44",
              fontWeight: "300",
              textWrap: "pretty",
            }}
          >
            La iDentical Lab, transformăm planificarea și precizia tehnică în restaurări care se integrează armonios în zâmbet.
          </p>
          <p style={{ margin: "28px 0 0", maxWidth: "52ch", fontSize: "15px", lineHeight: "1.6", color: "#6E6E78", fontWeight: "300" }}>
            Fiecare lucrare care iese din laboratorul nostru poartă o poveste: a unui pacient care își recapătă zâmbetul și, odată cu el,
            siguranța de a zâmbi din nou fără rezerve.
          </p>
        </div>
      </div>
    </section>
  );
}
