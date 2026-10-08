export function MobileDrawer() {
  return (
    <div
      data-drawer
      style={{
        display: "none",
        position: "fixed",
        inset: "0",
        zIndex: "70",
        background: "#FFFFFF",
        padding: "20px 20px 32px",
        flexDirection: "column",
        overflowY: "auto",
      }}
    >
      <div
        className="m-sb"
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", marginBottom: "26px" }}
      >
        <span
          style={{
            fontFamily: "var(--font-outfit), Helvetica, sans-serif",
            fontSize: "24px",
            fontWeight: "500",
            letterSpacing: "-0.02em",
            color: "#0F0053",
          }}
        >
          {"identical "}
          <span style={{ fontWeight: "200", color: "#26B7BC" }}>lab</span>
        </span>
        <button
          type="button"
          data-drawer-close
          aria-label="Închide"
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "999px",
            border: "1px solid rgba(26,26,26,0.18)",
            background: "transparent",
            color: "#1A1A1A",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          ✕
        </button>
      </div>
      <nav style={{ display: "flex", flexDirection: "column" }}>
        <a
          href="#despre"
          data-drawer-link
          style={{
            padding: "16px 0",
            borderTop: "1px solid rgba(26,26,26,0.1)",
            fontFamily: "var(--font-outfit), Helvetica, sans-serif",
            fontSize: "26px",
            fontWeight: "200",
            letterSpacing: "-0.02em",
          }}
        >
          Despre noi
        </a>
        <a
          href="#servicii"
          data-drawer-link
          style={{
            padding: "16px 0",
            borderTop: "1px solid rgba(26,26,26,0.1)",
            fontFamily: "var(--font-outfit), Helvetica, sans-serif",
            fontSize: "26px",
            fontWeight: "200",
            letterSpacing: "-0.02em",
          }}
        >
          Servicii
        </a>
        <a
          href="#portofoliu"
          data-drawer-link
          style={{
            padding: "16px 0",
            borderTop: "1px solid rgba(26,26,26,0.1)",
            fontFamily: "var(--font-outfit), Helvetica, sans-serif",
            fontSize: "26px",
            fontWeight: "200",
            letterSpacing: "-0.02em",
          }}
        >
          Portofoliu
        </a>
        <a
          href="#proces"
          data-drawer-link
          style={{
            padding: "16px 0",
            borderTop: "1px solid rgba(26,26,26,0.1)",
            fontFamily: "var(--font-outfit), Helvetica, sans-serif",
            fontSize: "26px",
            fontWeight: "200",
            letterSpacing: "-0.02em",
          }}
        >
          Proces
        </a>
        <a
          href="#planificare"
          data-drawer-link
          style={{
            padding: "16px 0",
            borderTop: "1px solid rgba(26,26,26,0.1)",
            fontFamily: "var(--font-outfit), Helvetica, sans-serif",
            fontSize: "26px",
            fontWeight: "200",
            letterSpacing: "-0.02em",
          }}
        >
          Planificare
        </a>
        <a
          href="#livrare"
          data-drawer-link
          style={{
            padding: "16px 0",
            borderTop: "1px solid rgba(26,26,26,0.1)",
            fontFamily: "var(--font-outfit), Helvetica, sans-serif",
            fontSize: "26px",
            fontWeight: "200",
            letterSpacing: "-0.02em",
          }}
        >
          Livrare
        </a>
        <a
          href="#ghiduri"
          data-drawer-link
          style={{
            padding: "16px 0",
            borderTop: "1px solid rgba(26,26,26,0.1)",
            fontFamily: "var(--font-outfit), Helvetica, sans-serif",
            fontSize: "26px",
            fontWeight: "200",
            letterSpacing: "-0.02em",
          }}
        >
          Ghiduri
        </a>
        <a
          href="#blog"
          data-drawer-link
          style={{
            padding: "16px 0",
            borderTop: "1px solid rgba(26,26,26,0.1)",
            fontFamily: "var(--font-outfit), Helvetica, sans-serif",
            fontSize: "26px",
            fontWeight: "200",
            letterSpacing: "-0.02em",
          }}
        >
          Blog
        </a>
        <a
          href="#intrebari"
          data-drawer-link
          style={{
            padding: "16px 0",
            borderTop: "1px solid rgba(26,26,26,0.1)",
            borderBottom: "1px solid rgba(26,26,26,0.1)",
            fontFamily: "var(--font-outfit), Helvetica, sans-serif",
            fontSize: "26px",
            fontWeight: "200",
            letterSpacing: "-0.02em",
          }}
        >
          Întrebări
        </a>
      </nav>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "28px" }}>
        <button
          type="button"
          data-drawer-cta
          style={{
            padding: "17px 26px",
            border: "none",
            borderRadius: "999px",
            background: "#0F0053",
            color: "#FFFFFF",
            fontFamily: "var(--font-outfit), Helvetica, sans-serif",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Cere ofertă
        </button>
        <a
          href="tel:+40724065767"
          style={{
            padding: "16px 26px",
            border: "1px solid rgba(26,26,26,0.18)",
            borderRadius: "999px",
            textAlign: "center",
            fontSize: "16px",
          }}
        >
          Sună laboratorul
        </a>
      </div>
    </div>
  );
}
