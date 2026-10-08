export function OfferModal() {
  return (
    <div
      data-form-modal
      style={{
        display: "none",
        position: "fixed",
        inset: "0",
        zIndex: "80",
        background: "rgba(15,0,83,0.55)",
        backdropFilter: "blur(6px)",
        padding: "6vh 24px",
        overflowY: "auto",
      }}
    >
      <div
        data-form-card
        style={{ maxWidth: "620px", margin: "0 auto", background: "#FFFFFF", borderRadius: "16px", padding: "44px 44px 40px" }}
      >
        <div
          className="m-sb"
          style={{ display: "flex", justifyContent: "space-between", alignItems: "start", gap: "24px", marginBottom: "26px" }}
        >
          <div>
            <div style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#0F0053", marginBottom: "14px" }}>
              [ Cerere de ofertă ]
            </div>
            <h2
              style={{
                margin: "0",
                fontFamily: "var(--font-outfit), Helvetica, sans-serif",
                fontWeight: "200",
                fontSize: "clamp(30px, 3.4vw, 44px)",
                lineHeight: "1.02",
                letterSpacing: "-0.025em",
              }}
            >
              Trimite cazul,
              <br />
              primești oferta.
            </h2>
          </div>
          <button
            className="idl-hover-2"
            type="button"
            data-form-close
            aria-label="Închide"
            style={{
              flex: "0 0 auto",
              width: "38px",
              height: "38px",
              borderRadius: "999px",
              border: "1px solid rgba(26,26,26,0.18)",
              background: "transparent",
              color: "#1A1A1A",
              fontSize: "15px",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
        </div>
        <p style={{ margin: "0 0 26px", fontSize: "16px", lineHeight: "1.6", color: "#3A3A44", fontWeight: "300" }}>
          Descrie-ne pe scurt cazul și zona de interes. Revenim cu termenul de execuție și cu prețul înainte să începem.
        </p>
        <form style={{ display: "grid", gap: "14px" }} data-form="offer">
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
              padding: "14px 0",
              background: "transparent",
              border: "none",
              borderBottom: "1px solid rgba(26,26,26,0.2)",
              color: "#1A1A1A",
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
              padding: "14px 0",
              background: "transparent",
              border: "none",
              borderBottom: "1px solid rgba(26,26,26,0.2)",
              color: "#1A1A1A",
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
              padding: "14px 0",
              background: "transparent",
              border: "none",
              borderBottom: "1px solid rgba(26,26,26,0.2)",
              color: "#1A1A1A",
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
              padding: "14px 0",
              background: "transparent",
              border: "none",
              borderBottom: "1px solid rgba(26,26,26,0.2)",
              color: "#1A1A1A",
              fontFamily: "var(--font-outfit), Helvetica, sans-serif",
              fontSize: "16px",
              outline: "none",
            }}
          />
          <input
            name="workType"
            aria-label="Tip de lucrare"
            data-form-subject
            type="text"
            placeholder="Tip de lucrare"
            style={{
              padding: "14px 0",
              background: "transparent",
              border: "none",
              borderBottom: "1px solid rgba(26,26,26,0.2)",
              color: "#1A1A1A",
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
              padding: "14px 0",
              background: "transparent",
              border: "none",
              borderBottom: "1px solid rgba(26,26,26,0.2)",
              color: "#1A1A1A",
              fontFamily: "var(--font-outfit), Helvetica, sans-serif",
              fontSize: "16px",
              outline: "none",
              resize: "vertical",
            }}
          />
          <p style={{ margin: "4px 0 0", fontSize: "13px", lineHeight: "1.5", color: "#9AA3AA" }}>
            După trimitere primești pe email confirmarea.
          </p>
          <button
            className="idl-hover-4"
            type="submit"
            data-magnetic
            style={{
              justifySelf: "start",
              marginTop: "10px",
              padding: "16px 32px",
              border: "none",
              borderRadius: "999px",
              background: "#0F0053",
              color: "#FFFFFF",
              fontFamily: "var(--font-outfit), Helvetica, sans-serif",
              fontSize: "15px",
              cursor: "pointer",
            }}
          >
            Trimite cererea
          </button>
        </form>
      </div>
    </div>
  );
}
