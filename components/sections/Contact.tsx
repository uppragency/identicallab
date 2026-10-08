export function Contact() {
  return (
    <section
      id="contact"
      style={{ background: "linear-gradient(140deg, #0F0053 0%, #17206E 55%, #26B7BC 130%)", color: "#FFFFFF", padding: "110px 40px" }}
    >
      <div
        className="m-grid"
        style={{ maxWidth: "1440px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}
      >
        <div data-reveal>
          <div
            style={{
              fontFamily: "var(--font-outfit), Helvetica, sans-serif",
              fontSize: "12px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
              marginBottom: "26px",
            }}
          >
            [ Cerere de ofertă ]
          </div>
          <h2
            style={{
              margin: "0",
              fontFamily: "var(--font-outfit), Helvetica, sans-serif",
              fontWeight: "200",
              fontSize: "clamp(48px, 6vw, 104px)",
              lineHeight: "0.98",
              letterSpacing: "-0.025em",
            }}
            data-lines
          >
            Trimite cazul,
            <br />
            primești oferta.
          </h2>
          <p
            style={{
              margin: "30px 0 0",
              maxWidth: "44ch",
              fontSize: "18px",
              lineHeight: "1.6",
              color: "rgba(255,255,255,0.72)",
              fontWeight: "300",
            }}
          >
            Descrie-ne pe scurt cazul și zona de interes. Revenim cu termenul de execuție și cu prețul înainte să începem.
          </p>
          <div
            style={{
              marginTop: "44px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              fontSize: "15px",
              color: "rgba(255,255,255,0.72)",
            }}
          >
            <a className="idl-hover-9" href="mailto:gabriel.musetescu@identical.ro" style={{ color: "#FFFFFF" }}>
              gabriel.musetescu@identical.ro
            </a>
            <span>0724 065 767 · București</span>
          </div>
          <a
            className="idl-hover-9"
            href="/contact"
            style={{
              display: "inline-block",
              marginTop: "28px", fontSize: "15px",
              color: "#FFFFFF",
              borderBottom: "1px solid rgba(255,255,255,0.4)",
              paddingBottom: "3px",
            }}
          >
            {"Toate datele de contact "}
            <span style={{ color: "#26B7BC" }}>→</span>
          </a>
        </div>
        <form data-reveal style={{ display: "grid", gap: "18px" }} data-form="contact">
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }}
          />
          <input
            name="name"
            aria-label="Nume și prenume"
            autoComplete="name"
            required
            type="text"
            placeholder="Nume și prenume"
            style={{
              padding: "16px 0",
              background: "transparent",
              border: "none",
              borderBottom: "1px solid rgba(255,255,255,0.25)",
              color: "#FFFFFF",
              fontFamily: "var(--font-outfit), Helvetica, sans-serif",
              fontSize: "16px",
              outline: "none",
            }}
          />
          <input
            name="clinic"
            aria-label="Clinică / cabinet"
            autoComplete="organization"
            type="text"
            placeholder="Clinică / cabinet"
            style={{
              padding: "16px 0",
              background: "transparent",
              border: "none",
              borderBottom: "1px solid rgba(255,255,255,0.25)",
              color: "#FFFFFF",
              fontFamily: "var(--font-outfit), Helvetica, sans-serif",
              fontSize: "16px",
              outline: "none",
            }}
          />
          <input
            name="email"
            aria-label="Email"
            autoComplete="email"
            required
            type="email"
            placeholder="Email"
            style={{
              padding: "16px 0",
              background: "transparent",
              border: "none",
              borderBottom: "1px solid rgba(255,255,255,0.25)",
              color: "#FFFFFF",
              fontFamily: "var(--font-outfit), Helvetica, sans-serif",
              fontSize: "16px",
              outline: "none",
            }}
          />
          <input
            name="phone"
            aria-label="Telefon"
            autoComplete="tel"
            type="tel"
            placeholder="Telefon"
            style={{
              padding: "16px 0",
              background: "transparent",
              border: "none",
              borderBottom: "1px solid rgba(255,255,255,0.25)",
              color: "#FFFFFF",
              fontFamily: "var(--font-outfit), Helvetica, sans-serif",
              fontSize: "16px",
              outline: "none",
            }}
          />
          <input
            name="workType"
            aria-label="Tip de lucrare"
            type="text"
            placeholder="Tip de lucrare"
            style={{
              padding: "16px 0",
              background: "transparent",
              border: "none",
              borderBottom: "1px solid rgba(255,255,255,0.25)",
              color: "#FFFFFF",
              fontFamily: "var(--font-outfit), Helvetica, sans-serif",
              fontSize: "16px",
              outline: "none",
            }}
          />
          <textarea
            name="message"
            aria-label="Descrierea cazului și zona de interes"
            rows={4}
            placeholder="Descrierea cazului și zona de interes"
            style={{
              padding: "16px 0",
              background: "transparent",
              border: "none",
              borderBottom: "1px solid rgba(255,255,255,0.25)",
              color: "#FFFFFF",
              fontFamily: "var(--font-outfit), Helvetica, sans-serif",
              fontSize: "16px",
              outline: "none",
              resize: "vertical",
            }}
          />
          <p style={{ margin: "6px 0 0", fontSize: "13px", lineHeight: "1.5", color: "rgba(255,255,255,0.5)" }}>
            După trimitere primești pe email confirmarea. Fișierele CBCT le trimiți la primul răspuns, pe canalul agreat.
          </p>
          <button
            className="idl-hover-4"
            type="submit"
            data-magnetic
            style={{
              justifySelf: "start",
              marginTop: "12px",
              padding: "17px 34px",
              border: "none",
              borderRadius: "999px",
              background: "#FFFFFF",
              color: "#1A1A1A",
              fontFamily: "var(--font-outfit), Helvetica, sans-serif",
              fontSize: "15px",
              cursor: "pointer",
            }}
          >
            Trimite cererea
          </button>
        </form>
      </div>
    </section>
  );
}
