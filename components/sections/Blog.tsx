export function Blog() {
  return (
    <section id="blog" style={{ padding: "120px 40px 130px" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
        <div
          className="m-sb"
          data-reveal
          style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: "40px", marginBottom: "34px" }}
        >
          <h2
            style={{
              margin: "0",
              fontFamily: "var(--font-outfit), Helvetica, sans-serif",
              fontWeight: "200",
              fontSize: "clamp(36px, 4.2vw, 68px)",
              lineHeight: "1.02",
              letterSpacing: "-0.025em",
            }}
            data-lines
          >
            {"Jurnal "}
            <span style={{ color: "#26B7BC" }}>tehnic</span>
          </h2>
          <span
            className="m-nowrap"
            style={{ fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#0F0053", whiteSpace: "nowrap" }}
          >
            [ Blog ]
          </span>
        </div>
        <p
          data-reveal
          style={{ margin: "0 0 30px", maxWidth: "58ch", fontSize: "17px", lineHeight: "1.6", color: "#3A3A44", fontWeight: "300" }}
        >
          Protocoale, cazuri comentate și noutăți din laborator. Scriem pentru medici, nu pentru pacienți.
        </p>
        <div data-reveal style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "40px" }}>
          <button
            type="button"
            data-blog-filter="Toate"
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
            Toate
          </button>
          <button
            type="button"
            data-blog-filter="Implantologie digitală"
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
            Implantologie digitală
          </button>
          <button
            type="button"
            data-blog-filter="Protetică"
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
            Protetică
          </button>
          <button
            type="button"
            data-blog-filter="Materiale"
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
            Materiale
          </button>
          <button
            type="button"
            data-blog-filter="Din laborator"
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
            Din laborator
          </button>
        </div>
        <div className="m-grid m-rep" data-posts style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "44px 28px" }}>
          <article
            data-post="Implantologie digitală"
            data-reveal
            data-lift
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              padding: "14px",
              margin: "-14px",
              borderRadius: "12px",
              transition: "background .4s ease",
              cursor: "pointer",
            }}
          >
            <div
              data-mask
              style={{
                aspectRatio: "16/10",
                borderRadius: "8px",
                backgroundColor: "#EDF1F3",
                backgroundImage: "repeating-linear-gradient(135deg, rgba(26,26,26,0.05) 0 1px, transparent 1px 9px)",
                display: "flex",
                alignItems: "flex-end",
                padding: "14px",
              }}
            >
              <span style={{ fontSize: "10px", letterSpacing: "0.08em", color: "#6E6E78" }}>[ FOTO26 ]</span>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "10px",
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#0F0053",
                }}
              >
                <span>Implantologie digitală</span>
                <span style={{ color: "#9AA3AA" }}>12 mai 2026 · 6 min</span>
              </div>
              <h3
                style={{
                  margin: "0 0 8px",
                  fontFamily: "var(--font-outfit), Helvetica, sans-serif",
                  fontWeight: "400",
                  fontSize: "21px",
                  lineHeight: "1.25",
                  letterSpacing: "-0.015em",
                }}
              >
                Dual scan technique: de ce suprapunem două CT-uri
              </h3>
              <span style={{ fontSize: "14px", color: "#0F0053" }}>
                {"Citește articolul "}
                <span style={{ color: "#26B7BC" }}>→</span>
              </span>
            </div>
          </article>
          <article
            data-post="Protetică"
            data-reveal
            data-lift
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              padding: "14px",
              margin: "-14px",
              borderRadius: "12px",
              transition: "background .4s ease",
              cursor: "pointer",
            }}
          >
            <div
              data-mask
              style={{
                aspectRatio: "16/10",
                borderRadius: "8px",
                backgroundColor: "#EDF1F3",
                backgroundImage: "repeating-linear-gradient(135deg, rgba(26,26,26,0.05) 0 1px, transparent 1px 9px)",
                display: "flex",
                alignItems: "flex-end",
                padding: "14px",
              }}
            >
              <span style={{ fontSize: "10px", letterSpacing: "0.08em", color: "#6E6E78" }}>[ FOTO27 ]</span>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "10px",
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#0F0053",
                }}
              >
                <span>Protetică</span>
                <span style={{ color: "#9AA3AA" }}>28 aprilie 2026 · 5 min</span>
              </div>
              <h3
                style={{
                  margin: "0 0 8px",
                  fontFamily: "var(--font-outfit), Helvetica, sans-serif",
                  fontWeight: "400",
                  fontSize: "21px",
                  lineHeight: "1.25",
                  letterSpacing: "-0.015em",
                }}
              >
                Profilul de emergență, explicat pe un caz real
              </h3>
              <span style={{ fontSize: "14px", color: "#0F0053" }}>
                {"Citește articolul "}
                <span style={{ color: "#26B7BC" }}>→</span>
              </span>
            </div>
          </article>
          <article
            data-post="Materiale"
            data-reveal
            data-lift
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              padding: "14px",
              margin: "-14px",
              borderRadius: "12px",
              transition: "background .4s ease",
              cursor: "pointer",
            }}
          >
            <div
              data-mask
              style={{
                aspectRatio: "16/10",
                borderRadius: "8px",
                backgroundColor: "#EDF1F3",
                backgroundImage: "repeating-linear-gradient(135deg, rgba(26,26,26,0.05) 0 1px, transparent 1px 9px)",
                display: "flex",
                alignItems: "flex-end",
                padding: "14px",
              }}
            >
              <span style={{ fontSize: "10px", letterSpacing: "0.08em", color: "#6E6E78" }}>[ FOTO28 ]</span>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "10px",
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#0F0053",
                }}
              >
                <span>Materiale</span>
                <span style={{ color: "#9AA3AA" }}>9 aprilie 2026 · 7 min</span>
              </div>
              <h3
                style={{
                  margin: "0 0 8px",
                  fontFamily: "var(--font-outfit), Helvetica, sans-serif",
                  fontWeight: "400",
                  fontSize: "21px",
                  lineHeight: "1.25",
                  letterSpacing: "-0.015em",
                }}
              >
                Zirconiu multistrat sau disilicat: cum alegem
              </h3>
              <span style={{ fontSize: "14px", color: "#0F0053" }}>
                {"Citește articolul "}
                <span style={{ color: "#26B7BC" }}>→</span>
              </span>
            </div>
          </article>
          <article
            data-post="Din laborator"
            data-reveal
            data-lift
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              padding: "14px",
              margin: "-14px",
              borderRadius: "12px",
              transition: "background .4s ease",
              cursor: "pointer",
            }}
          >
            <div
              data-mask
              style={{
                aspectRatio: "16/10",
                borderRadius: "8px",
                backgroundColor: "#EDF1F3",
                backgroundImage: "repeating-linear-gradient(135deg, rgba(26,26,26,0.05) 0 1px, transparent 1px 9px)",
                display: "flex",
                alignItems: "flex-end",
                padding: "14px",
              }}
            >
              <span style={{ fontSize: "10px", letterSpacing: "0.08em", color: "#6E6E78" }}>[ FOTO29 ]</span>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "10px",
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#0F0053",
                }}
              >
                <span>Din laborator</span>
                <span style={{ color: "#9AA3AA" }}>21 martie 2026 · 4 min</span>
              </div>
              <h3
                style={{
                  margin: "0 0 8px",
                  fontFamily: "var(--font-outfit), Helvetica, sans-serif",
                  fontWeight: "400",
                  fontSize: "21px",
                  lineHeight: "1.25",
                  letterSpacing: "-0.015em",
                }}
              >
                Ce verificăm înainte să iasă o lucrare din laborator
              </h3>
              <span style={{ fontSize: "14px", color: "#0F0053" }}>
                {"Citește articolul "}
                <span style={{ color: "#26B7BC" }}>→</span>
              </span>
            </div>
          </article>
          <article
            data-post="Implantologie digitală"
            data-reveal
            data-lift
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              padding: "14px",
              margin: "-14px",
              borderRadius: "12px",
              transition: "background .4s ease",
              cursor: "pointer",
            }}
          >
            <div
              data-mask
              style={{
                aspectRatio: "16/10",
                borderRadius: "8px",
                backgroundColor: "#EDF1F3",
                backgroundImage: "repeating-linear-gradient(135deg, rgba(26,26,26,0.05) 0 1px, transparent 1px 9px)",
                display: "flex",
                alignItems: "flex-end",
                padding: "14px",
              }}
            >
              <span style={{ fontSize: "10px", letterSpacing: "0.08em", color: "#6E6E78" }}>[ FOTO30 ]</span>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "10px",
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#0F0053",
                }}
              >
                <span>Implantologie digitală</span>
                <span style={{ color: "#9AA3AA" }}>2 martie 2026 · 8 min</span>
              </div>
              <h3
                style={{
                  margin: "0 0 8px",
                  fontFamily: "var(--font-outfit), Helvetica, sans-serif",
                  fontWeight: "400",
                  fontSize: "21px",
                  lineHeight: "1.25",
                  letterSpacing: "-0.015em",
                }}
              >
                Ghiduri stackable: ordinea corectă de utilizare
              </h3>
              <span style={{ fontSize: "14px", color: "#0F0053" }}>
                {"Citește articolul "}
                <span style={{ color: "#26B7BC" }}>→</span>
              </span>
            </div>
          </article>
          <article
            data-post="Protetică"
            data-reveal
            data-lift
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              padding: "14px",
              margin: "-14px",
              borderRadius: "12px",
              transition: "background .4s ease",
              cursor: "pointer",
            }}
          >
            <div
              data-mask
              style={{
                aspectRatio: "16/10",
                borderRadius: "8px",
                backgroundColor: "#EDF1F3",
                backgroundImage: "repeating-linear-gradient(135deg, rgba(26,26,26,0.05) 0 1px, transparent 1px 9px)",
                display: "flex",
                alignItems: "flex-end",
                padding: "14px",
              }}
            >
              <span style={{ fontSize: "10px", letterSpacing: "0.08em", color: "#6E6E78" }}>[ FOTO31 ]</span>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "10px",
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#0F0053",
                }}
              >
                <span>Protetică</span>
                <span style={{ color: "#9AA3AA" }}>14 februarie 2026 · 5 min</span>
              </div>
              <h3
                style={{
                  margin: "0 0 8px",
                  fontFamily: "var(--font-outfit), Helvetica, sans-serif",
                  fontWeight: "400",
                  fontSize: "21px",
                  lineHeight: "1.25",
                  letterSpacing: "-0.015em",
                }}
              >
                Wax-up digital: de la simulare la probă în cabinet
              </h3>
              <span style={{ fontSize: "14px", color: "#0F0053" }}>
                {"Citește articolul "}
                <span style={{ color: "#26B7BC" }}>→</span>
              </span>
            </div>
          </article>
        </div>
        <p data-reveal data-posts-empty style={{ display: "none", margin: "40px 0 0", fontSize: "16px", color: "#6E6E78" }}>
          Nu am publicat încă un articol pe această categorie.
        </p>
        <div data-reveal style={{ marginTop: "48px" }}>
          <a
            className="idl-hover-2"
            href="#blog"
            style={{
              padding: "15px 28px",
              borderRadius: "999px",
              border: "1px solid rgba(26,26,26,0.22)",
              color: "#1A1A1A",
              fontSize: "15px",
            }}
          >
            {"Toate articolele "}
            <span style={{ color: "#26B7BC" }}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
