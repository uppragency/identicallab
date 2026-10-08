export function FooterMarquee() {
  return (
    <div
      style={{
        padding: "16px 0",
        borderTop: "1px solid rgba(26,26,26,0.1)",
        borderBottom: "1px solid rgba(26,26,26,0.1)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: "idl-marquee 34s linear infinite",
          fontSize: "14px",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "#6E6E78",
        }}
      >
        <div style={{ display: "flex", gap: "28px", paddingRight: "28px", alignItems: "center" }}>
          <span data-word="DICOM">DICOM</span>
          <span style={{ color: "#26B7BC" }}>→</span>
          <span data-word="Segmentare">Segmentare</span>
          <span style={{ color: "#26B7BC" }}>→</span>
          <span data-word="STL">STL</span>
          <span style={{ color: "#26B7BC" }}>→</span>
          <span data-word="Printare 3D">Printare 3D</span>
          <span style={{ color: "#26B7BC" }}>→</span>
          <span>Livrare în cabinet</span>
          <span style={{ color: "#26B7BC" }}>→</span>
        </div>
        <div style={{ display: "flex", gap: "28px", paddingRight: "28px", alignItems: "center" }}>
          <span data-word="DICOM">DICOM</span>
          <span style={{ color: "#26B7BC" }}>→</span>
          <span data-word="Segmentare">Segmentare</span>
          <span style={{ color: "#26B7BC" }}>→</span>
          <span data-word="STL">STL</span>
          <span style={{ color: "#26B7BC" }}>→</span>
          <span data-word="Printare 3D">Printare 3D</span>
          <span style={{ color: "#26B7BC" }}>→</span>
          <span>Livrare în cabinet</span>
          <span style={{ color: "#26B7BC" }}>→</span>
        </div>
      </div>
    </div>
  );
}
