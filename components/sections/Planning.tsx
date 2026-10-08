export function Planning() {
  return (
    <section id="planificare" style={{ padding: "0 40px 130px" }}>
      <div
        className="m-grid m-gap"
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "0.52fr 0.48fr",
          gap: "64px",
          alignItems: "center",
        }}
      >
        <div
          data-reveal
          data-mask
          style={{
            aspectRatio: "4/3",
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
            [ FOTO17 ]
          </span>
        </div>
        <div data-reveal>
          <div
            style={{
              fontFamily: "var(--font-outfit), Helvetica, sans-serif",
              fontSize: "12px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#0F0053",
              marginBottom: "22px",
            }}
          >
            [ Planificare digitală ]
          </div>
          <h2
            style={{
              margin: "0",
              fontFamily: "var(--font-outfit), Helvetica, sans-serif",
              fontWeight: "200",
              fontSize: "clamp(38px, 4.4vw, 74px)",
              lineHeight: "1.04",
              letterSpacing: "-0.02em",
            }}
            data-lines
          >
            {"Viitorul stomatologiei este "}
            <span style={{ color: "#26B7BC" }}>digital</span>.
          </h2>
          <p
            style={{
              margin: "30px 0 0",
              maxWidth: "54ch",
              fontSize: "18px",
              lineHeight: "1.6",
              color: "#3A3A44",
              fontWeight: "300",
              textWrap: "pretty",
            }}
          >
            Prin scanări, simulări 3D și ghiduri chirurgicale, fiecare etapă a tratamentului poate fi planificată înainte de intervenție.
            Rezultatul: mai multă precizie și un tratament personalizat.
          </p>
          <p style={{ margin: "20px 0 0", maxWidth: "54ch", fontSize: "16px", lineHeight: "1.6", color: "#6E6E78", fontWeight: "300" }}>
            Un fișier DICOM nu rămâne doar pe ecran. Prin segmentare, prelucrare digitală și imprimare 3D, informația obținută din CBCT
            poate fi transformată într-un model fizic al anatomiei pacientului.
          </p>
          <div style={{ marginTop: "36px" }}>
            <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
              <button
                type="button"
                data-cmp-btn="ghid"
                style={{
                  padding: "10px 18px",
                  borderRadius: "999px",
                  border: "1px solid transparent",
                  background: "#0F0053",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-outfit), Helvetica, sans-serif",
                  fontSize: "14px",
                  cursor: "pointer",
                }}
              >
                Cu ghidaj protetic
              </button>
              <button
                type="button"
                data-cmp-btn="fara"
                style={{
                  padding: "10px 18px",
                  borderRadius: "999px",
                  border: "1px solid rgba(26,26,26,0.18)",
                  background: "transparent",
                  color: "#3A3A44",
                  fontFamily: "var(--font-outfit), Helvetica, sans-serif",
                  fontSize: "14px",
                  cursor: "pointer",
                }}
              >
                Fără ghidaj
              </button>
            </div>
            <div
              data-cmp-panel="ghid"
              style={{ padding: "26px", background: "#F4F7F9", borderLeft: "2px solid #26B7BC", borderRadius: "4px" }}
            >
              <div
                style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#0F0053", marginBottom: "10px" }}
              >
                Dual scan technique
              </div>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#3A3A44", fontWeight: "300" }}>
                Planificăm implanturile după suprapunerea tuturor datelor și a celor două CT-uri. Poziția este stabilită împreună cu
                proiectul protetic, iar profilul de emergență rezultă corect.
              </p>
            </div>
            <div
              data-cmp-panel="fara"
              style={{ display: "none", padding: "26px", background: "#FDF3F3", borderLeft: "2px solid #C46A6A", borderRadius: "4px" }}
            >
              <div
                style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#A65252", marginBottom: "10px" }}
              >
                Fără ghidaj protetic
              </div>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#3A3A44", fontWeight: "300" }}>
                Poziția poate fi corectă chirurgical, dar adaptarea protetică devine dificilă: profil de emergență incorect, disconfort
                pentru pacient și dificultăți la restaurare.
              </p>
            </div>
          </div>
          <a
            className="idl-hover-9"
            href="/cum-lucram#planificare"
            style={{
              display: "inline-block",
              marginTop: "28px", fontSize: "15px",
              color: "#0F0053",
              borderBottom: "1px solid rgba(15,0,83,0.4)",
              paddingBottom: "3px",
            }}
          >
            {"Despre planificarea digitală "}
            <span style={{ color: "#26B7BC" }}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
