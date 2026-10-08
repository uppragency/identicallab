export function SearchOverlay() {
  return (
    <div
      data-search-overlay
      style={{
        display: "none",
        position: "fixed",
        inset: "0",
        zIndex: "60",
        background: "rgba(15,0,83,0.92)",
        backdropFilter: "blur(6px)",
        padding: "12vh 40px 40px",
      }}
    >
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            borderBottom: "1px solid rgba(255,255,255,0.3)",
            paddingBottom: "14px",
          }}
        >
          <span style={{ fontSize: "20px", color: "#26B7BC" }}>⌕</span>
          <input
            data-search-input
            type="text"
            placeholder="Caută protocoale, materiale, întrebări…"
            style={{
              flex: "1",
              padding: "8px 0",
              background: "transparent",
              border: "none",
              color: "#FFFFFF",
              fontFamily: "var(--font-outfit), Helvetica, sans-serif",
              fontSize: "24px",
              fontWeight: "200",
              outline: "none",
            }}
          />
          <button
            type="button"
            data-search-close
            style={{
              padding: "8px 16px",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.3)",
              background: "transparent",
              color: "#FFFFFF",
              fontFamily: "var(--font-outfit), Helvetica, sans-serif",
              fontSize: "13px",
              cursor: "pointer",
            }}
          >
            Esc
          </button>
        </div>
        <div
          data-search-results
          style={{ marginTop: "22px", maxHeight: "60vh", overflowY: "auto", display: "flex", flexDirection: "column", gap: "2px" }}
        ></div>
      </div>
    </div>
  );
}
