export function AboutIntro() {
  return (
    <section style={{ padding: "130px 40px" }}>
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
          [ Despre laborator ]
        </div>
        <div data-reveal>
          <p
            style={{
              margin: "0",
              fontFamily: "var(--font-outfit), Helvetica, sans-serif",
              fontSize: "clamp(26px, 2.6vw, 38px)",
              lineHeight: "1.28",
              letterSpacing: "-0.015em",
              textWrap: "pretty",
            }}
          >
            În laboratorul nostru realizăm modele mandibulare personalizate, printate 3D pe baza investigațiilor CBCT ale pacientului.
          </p>
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
            Aceste modele reproduc fidel anatomia osoasă și oferă clinicianului posibilitatea de a analiza cazul în detaliu, de a efectua
            măsurători și de a planifica intervenția înainte de etapa chirurgicală. Prin precizie, colaborare și tehnologie digitală,
            contribuim la realizarea unor tratamente mai predictibile.
          </p>
          <p style={{ margin: "28px 0 0", maxWidth: "52ch", fontSize: "15px", lineHeight: "1.6", color: "#6E6E78", fontWeight: "300" }}>
            Tehnologia nu înlocuiește experiența clinicianului — o susține cu date și cu un obiect pe care îl poți ține în mână.
          </p>
        </div>
      </div>
    </section>
  );
}
