export function ProcessMarquee() {
  return (
    <section
      style={{
        marginTop: "96px",
        padding: "22px 0",
        borderTop: "1px solid rgba(26,26,26,0.1)",
        borderBottom: "1px solid rgba(26,26,26,0.1)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: "idl-marquee 26s linear infinite",
          fontFamily: "var(--font-outfit), Helvetica, sans-serif",
          fontSize: "34px",
          color: "#1A1A1A",
        }}
      >
        <div style={{ display: "flex", gap: "44px", paddingRight: "44px", alignItems: "center" }}>
          <span data-word="DICOM">DICOM</span>
          <span style={{ color: "#0F0053" }}>→</span>
          <span data-word="Segmentare">Segmentare</span>
          <span style={{ color: "#0F0053" }}>→</span>
          <span data-word="STL">STL</span>
          <span style={{ color: "#0F0053" }}>→</span>
          <span data-word="Printare 3D">Printare 3D</span>
          <span style={{ color: "#0F0053" }}>→</span>
        </div>
        <div style={{ display: "flex", gap: "44px", paddingRight: "44px", alignItems: "center" }}>
          <span data-word="DICOM">DICOM</span>
          <span style={{ color: "#0F0053" }}>→</span>
          <span data-word="Segmentare">Segmentare</span>
          <span style={{ color: "#0F0053" }}>→</span>
          <span data-word="STL">STL</span>
          <span style={{ color: "#0F0053" }}>→</span>
          <span data-word="Printare 3D">Printare 3D</span>
          <span style={{ color: "#0F0053" }}>→</span>
        </div>
      </div>
    </section>
  );
}
