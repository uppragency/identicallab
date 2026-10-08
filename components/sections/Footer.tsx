export function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#0F0053",
        color: "rgba(255,255,255,0.7)",
        backgroundImage:
          "radial-gradient(760px 460px at 96% 4%, rgba(38,183,188,0.26), rgba(15,0,83,0) 60%), repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0 1px, rgba(255,255,255,0) 1px 96px)",
        padding: "96px 40px 0",
      }}
    >
      <div style={{ position: "relative", maxWidth: "1440px", margin: "0 auto" }}>
        <div
          className="m-grid m-gap"
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "72px",
            paddingBottom: "64px",
            borderBottom: "1px solid rgba(255,255,255,0.16)",
          }}
        >
          <div>
            <h2
              style={{
                margin: "0",
                fontFamily: "var(--font-outfit), Helvetica, sans-serif",
                fontWeight: "200",
                fontSize: "clamp(34px, 4vw, 64px)",
                lineHeight: "1.02",
                letterSpacing: "-0.03em",
                color: "#FFFFFF",
              }}
              data-lines
            >
              Trimite primul caz.
              <br />
              Vezi diferența.
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "34px" }}>
              <button
                className="idl-hover-8"
                type="button"
                data-open-form="Cerere de ofertă"
                data-magnetic
                style={{
                  padding: "15px 28px",
                  border: "none",
                  borderRadius: "999px",
                  background: "#FFFFFF",
                  color: "#0F0053",
                  fontFamily: "var(--font-outfit), Helvetica, sans-serif",
                  fontSize: "15px",
                  cursor: "pointer",
                }}
              >
                Cere o ofertă
              </button>
              <a
                className="idl-hover-a"
                href="tel:+40000000000"
                style={{
                  padding: "15px 28px",
                  borderRadius: "999px",
                  border: "1px solid rgba(255,255,255,0.3)",
                  color: "#FFFFFF",
                  fontSize: "15px",
                }}
              >
                [ telefon ]
              </a>
              <a
                className="idl-hover-a"
                href="https://wa.me/40000000000"
                style={{
                  padding: "15px 28px",
                  borderRadius: "999px",
                  border: "1px solid rgba(255,255,255,0.3)",
                  color: "#FFFFFF",
                  fontSize: "15px",
                }}
              >
                WhatsApp
              </a>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "30px", fontSize: "14px" }}>
              <span
                data-status-dot
                style={{ width: "9px", height: "9px", borderRadius: "999px", background: "#26B7BC", display: "block" }}
              ></span>
              <span data-status-text style={{ color: "rgba(255,255,255,0.72)" }}>
                Laboratorul lucrează acum · L–V, 09:00–17:00
              </span>
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: "11px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.45)",
                marginBottom: "16px",
              }}
            >
              Newsletter pentru cabinete
            </div>
            <p
              style={{
                margin: "0 0 22px",
                maxWidth: "42ch",
                fontSize: "16px",
                lineHeight: "1.6",
                fontWeight: "300",
                color: "rgba(255,255,255,0.78)",
              }}
            >
              Protocoale, cazuri comentate și noutăți din laborator. O dată pe lună, fără insistențe.
            </p>
            <form style={{ display: "flex", gap: "12px", alignItems: "end", flexWrap: "wrap" }} data-form="newsletter">
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }}
              />
              <input
                name="email"
                aria-label="Email de cabinet"
                autoComplete="email"
                required
                type="email"
                placeholder="Email de cabinet"
                style={{
                  flex: "1 1 240px",
                  padding: "14px 0",
                  background: "transparent",
                  border: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.3)",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-outfit), Helvetica, sans-serif",
                  fontSize: "16px",
                  outline: "none",
                }}
              />
              <button
                className="idl-hover-b"
                type="submit"
                style={{
                  padding: "14px 26px",
                  border: "none",
                  borderRadius: "999px",
                  background: "#26B7BC",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-outfit), Helvetica, sans-serif",
                  fontSize: "15px",
                  cursor: "pointer",
                }}
              >
                Abonează-te
              </button>
            </form>
            <a
              className="idl-hover-9"
              href="#contact"
              style={{
                display: "inline-block",
                marginTop: "26px",
                fontSize: "15px",
                color: "#FFFFFF",
                borderBottom: "1px solid rgba(255,255,255,0.35)",
                paddingBottom: "3px",
              }}
            >
              {"Descarcă brosura PDF "}
              <span style={{ color: "#26B7BC" }}>↓</span>
            </a>
          </div>
        </div>
        <div
          className="m-grid m-rep"
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr) 1.1fr", gap: "40px", padding: "56px 0" }}
        >
          <div>
            <div
              style={{
                fontSize: "11px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.45)",
                marginBottom: "18px",
              }}
            >
              Navigație
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "15px" }}>
              <a className="idl-hover-9" href="#despre" style={{ color: "rgba(255,255,255,0.82)" }}>
                Despre noi
              </a>
              <a className="idl-hover-9" href="#servicii" style={{ color: "rgba(255,255,255,0.82)" }}>
                Servicii
              </a>
              <a className="idl-hover-9" href="#portofoliu" style={{ color: "rgba(255,255,255,0.82)" }}>
                Portofoliu
              </a>
              <a className="idl-hover-9" href="#proces" style={{ color: "rgba(255,255,255,0.82)" }}>
                Proces
              </a>
              <a className="idl-hover-9" href="#intrebari" style={{ color: "rgba(255,255,255,0.82)" }}>
                Întrebări
              </a>
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: "11px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.45)",
                marginBottom: "18px",
              }}
            >
              Servicii
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "15px" }}>
              <a className="idl-hover-9" href="#servicii" style={{ color: "rgba(255,255,255,0.82)" }}>
                Modele mandibulare 3D
              </a>
              <a className="idl-hover-9" href="#servicii" style={{ color: "rgba(255,255,255,0.82)" }}>
                Segmentare CBCT
              </a>
              <a className="idl-hover-9" href="#servicii" style={{ color: "rgba(255,255,255,0.82)" }}>
                Design CAD/CAM
              </a>
              <a className="idl-hover-9" href="#servicii" style={{ color: "rgba(255,255,255,0.82)" }}>
                Ghiduri chirurgicale
              </a>
              <a className="idl-hover-9" href="#planificare" style={{ color: "rgba(255,255,255,0.82)" }}>
                Planificare digitală
              </a>
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: "11px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.45)",
                marginBottom: "18px",
              }}
            >
              Pentru cabinete
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "15px" }}>
              <a className="idl-hover-9" href="#intrebari" style={{ color: "rgba(255,255,255,0.82)" }}>
                Cum trimiți un caz
              </a>
              <a className="idl-hover-9" href="#materiale" style={{ color: "rgba(255,255,255,0.82)" }}>
                Materiale și tehnologii
              </a>
              <a className="idl-hover-9" href="#livrare" style={{ color: "rgba(255,255,255,0.82)" }}>
                Termene de livrare
              </a>
              <a className="idl-hover-9" href="#acreditari" style={{ color: "rgba(255,255,255,0.82)" }}>
                Certificări și parteneri
              </a>
              <a className="idl-hover-9" href="#cariere" style={{ color: "rgba(255,255,255,0.82)" }}>
                Cariere: angajăm
              </a>
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: "11px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.45)",
                marginBottom: "18px",
              }}
            >
              Contact
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "15px" }}>
              <a className="idl-hover-9" href="mailto:contact@identicallab.ro" style={{ color: "rgba(255,255,255,0.82)" }}>
                contact@identicallab.ro
              </a>
              <a className="idl-hover-9" href="tel:+40000000000" style={{ color: "rgba(255,255,255,0.82)" }}>
                [ telefon ]
              </a>
              <a className="idl-hover-9" href="#contact" style={{ color: "rgba(255,255,255,0.82)" }}>
                [ adresă laborator ]
              </a>
              <a className="idl-hover-9" href="https://instagram.com" style={{ color: "rgba(255,255,255,0.82)" }}>
                Instagram
              </a>
              <a className="idl-hover-9" href="https://facebook.com" style={{ color: "rgba(255,255,255,0.82)" }}>
                Facebook
              </a>
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: "11px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.45)",
                marginBottom: "18px",
              }}
            >
              Date firmă
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                fontSize: "14px",
                lineHeight: "1.5",
                color: "rgba(255,255,255,0.72)",
                fontWeight: "300",
              }}
            >
              <span style={{ color: "#FFFFFF" }}>DISTINGUISH DENT SRL</span>
              <span>CUI 38260814</span>
              <span>[ adresă sediu social ]</span>
              <span>[ oraș, județ ]</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "22px", fontSize: "13px" }}>
              <span style={{ padding: "6px 12px", border: "1px solid rgba(255,255,255,0.25)", borderRadius: "999px", color: "#FFFFFF" }}>
                RO
              </span>
              <a
                className="idl-hover-c"
                href="#top"
                style={{
                  padding: "6px 12px",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "999px",
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                EN
              </a>
            </div>
          </div>
        </div>
        <div
          className="m-sb"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            padding: "26px 0 34px",
            borderTop: "1px solid rgba(255,255,255,0.16)",
            fontSize: "13px",
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", gap: "22px" }}>
            <a className="idl-hover-9" href="#top" style={{ color: "rgba(255,255,255,0.6)" }}>
              Termeni și condiții
            </a>
            <a className="idl-hover-9" href="#top" style={{ color: "rgba(255,255,255,0.6)" }}>
              Politica de confidențialitate
            </a>
            <a className="idl-hover-9" href="#top" style={{ color: "rgba(255,255,255,0.6)" }}>
              Cookie-uri
            </a>
            <a className="idl-hover-9" href="https://anpc.ro" style={{ color: "rgba(255,255,255,0.6)" }}>
              ANPC
            </a>
            <a className="idl-hover-9" href="https://ec.europa.eu/consumers/odr" style={{ color: "rgba(255,255,255,0.6)" }}>
              SOL
            </a>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <span style={{ color: "rgba(255,255,255,0.45)" }}>© 2026 iDentical Lab</span>
            <button
              className="idl-hover-a"
              type="button"
              data-to-top
              style={{
                padding: "9px 16px",
                border: "1px solid rgba(255,255,255,0.25)",
                borderRadius: "999px",
                background: "transparent",
                color: "#FFFFFF",
                fontFamily: "var(--font-outfit), Helvetica, sans-serif",
                fontSize: "13px",
                cursor: "pointer",
              }}
            >
              Sus ↑
            </button>
          </div>
        </div>
      </div>
      <div
        className="m-nowrap"
        aria-hidden="true"
        style={{
          margin: "0 -40px -2.2vw",
          fontFamily: "var(--font-outfit), Helvetica, sans-serif",
          fontWeight: "200",
          fontSize: "20vw",
          lineHeight: "0.78",
          letterSpacing: "-0.045em",
          color: "rgba(255,255,255,0.07)",
          whiteSpace: "nowrap",
          textAlign: "center",
          pointerEvents: "none",
        }}
      >
        identical lab
      </div>
    </footer>
  );
}
