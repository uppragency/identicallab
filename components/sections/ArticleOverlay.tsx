export function ArticleOverlay() {
  return (
    <div data-article style={{ display: "none", position: "fixed", inset: "0", zIndex: "70", overflowY: "auto", background: "#FFFFFF" }}>
      <div
        className="m-sb"
        style={{
          position: "sticky",
          top: "0",
          zIndex: "2",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
          padding: "18px 40px",
          background: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(26,26,26,0.08)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-outfit), Helvetica, sans-serif",
            fontSize: "22px",
            fontWeight: "500",
            letterSpacing: "-0.02em",
            color: "#0F0053",
          }}
        >
          {"identical "}
          <span style={{ fontWeight: "200", color: "#26B7BC" }}>lab</span>
        </span>
        <button
          className="idl-hover-2"
          type="button"
          data-article-close
          style={{
            padding: "10px 20px",
            borderRadius: "999px",
            border: "1px solid rgba(26,26,26,0.18)",
            background: "transparent",
            color: "#1A1A1A",
            fontFamily: "var(--font-outfit), Helvetica, sans-serif",
            fontSize: "14px",
            cursor: "pointer",
          }}
        >
          Închide ✕
        </button>
      </div>
      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 40px 120px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            marginBottom: "26px",
            fontSize: "11px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          <span data-article-cat style={{ color: "#0F0053" }}>
            Categorie
          </span>
          <span data-article-meta style={{ color: "#9AA3AA" }}>
            dată · timp de citire
          </span>
        </div>
        <h1
          data-article-title
          style={{
            margin: "0 0 34px",
            fontFamily: "var(--font-outfit), Helvetica, sans-serif",
            fontWeight: "200",
            fontSize: "clamp(36px, 4.6vw, 62px)",
            lineHeight: "1.06",
            letterSpacing: "-0.03em",
          }}
        >
          Titlu articol
        </h1>
        <div
          data-mask
          style={{
            aspectRatio: "16/9",
            borderRadius: "10px",
            marginBottom: "44px",
            backgroundColor: "#EDF1F3",
            backgroundImage: "repeating-linear-gradient(135deg, rgba(26,26,26,0.05) 0 1px, transparent 1px 9px)",
            display: "flex",
            alignItems: "flex-end",
            padding: "16px",
          }}
        >
          <span style={{ fontSize: "11px", letterSpacing: "0.08em", color: "#6E6E78" }}>[ FOTO ] imagine principală articol</span>
        </div>
        <p style={{ margin: "0 0 24px", fontSize: "21px", lineHeight: "1.55", color: "#1A1A1A", fontWeight: "300" }}>
          [ intro: două-trei propoziții care spun despre ce e articolul și pentru cine e util ]
        </p>
        <p style={{ margin: "0 0 22px", fontSize: "17px", lineHeight: "1.72", color: "#3A3A44", fontWeight: "300" }}>
          [ corpul articolului. Conținutul se editează din WordPress, iar structura de aici este șablonul: intro, subtitluri, imagini
          intercalate, citat și concluzie. ]
        </p>
        <h2
          style={{
            margin: "44px 0 16px",
            fontFamily: "var(--font-outfit), Helvetica, sans-serif",
            fontWeight: "300",
            fontSize: "30px",
            letterSpacing: "-0.02em",
          }}
        >
          Subtitlu de secțiune
        </h2>
        <p style={{ margin: "0 0 22px", fontSize: "17px", lineHeight: "1.72", color: "#3A3A44", fontWeight: "300" }}>[ paragraf ]</p>
        <blockquote
          style={{
            margin: "36px 0",
            padding: "28px 28px 28px 32px",
            background: "#F4F7F9",
            borderLeft: "2px solid #26B7BC",
            borderRadius: "4px",
          }}
        >
          <p
            style={{
              margin: "0",
              fontFamily: "var(--font-outfit), Helvetica, sans-serif",
              fontWeight: "300",
              fontSize: "24px",
              lineHeight: "1.4",
              color: "#1A1A1A",
            }}
          >
            [ citat sau idee-cheie din articol ]
          </p>
        </blockquote>
        <h2
          style={{
            margin: "44px 0 16px",
            fontFamily: "var(--font-outfit), Helvetica, sans-serif",
            fontWeight: "300",
            fontSize: "30px",
            letterSpacing: "-0.02em",
          }}
        >
          Concluzie
        </h2>
        <p style={{ margin: "0 0 44px", fontSize: "17px", lineHeight: "1.72", color: "#3A3A44", fontWeight: "300" }}>
          [ paragraf de final ]
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "16px",
            paddingTop: "34px",
            borderTop: "1px solid rgba(26,26,26,0.12)",
          }}
        >
          <a
            className="idl-hover-4"
            href="#contact"
            data-article-close
            style={{ padding: "15px 28px", borderRadius: "999px", background: "#0F0053", color: "#FFFFFF", fontSize: "15px" }}
          >
            Trimite un caz
          </a>
          <button
            type="button"
            data-article-close
            style={{
              padding: "15px 28px",
              borderRadius: "999px",
              border: "1px solid rgba(26,26,26,0.22)",
              background: "transparent",
              color: "#1A1A1A",
              fontFamily: "var(--font-outfit), Helvetica, sans-serif",
              fontSize: "15px",
              cursor: "pointer",
            }}
          >
            Înapoi la jurnal
          </button>
        </div>
      </article>
    </div>
  );
}
