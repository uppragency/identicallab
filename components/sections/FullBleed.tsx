export function FullBleed() {
  return (
    <section style={{ padding: "0 0 130px", overflow: "hidden" }}>
      <div
        data-reveal
        data-parallax
        data-mask
        style={{
          height: "62vh",
          animation: "idl-zoom 22s ease-in-out infinite alternate",
          minHeight: "420px",
          backgroundColor: "#EDF1F3",
          backgroundImage: "repeating-linear-gradient(135deg, rgba(26,26,26,0.05) 0 1px, transparent 1px 11px)",
          display: "flex",
          alignItems: "flex-end",
          padding: "28px 40px",
        }}
      >
        <span
          style={{ fontFamily: "var(--font-outfit), Helvetica, sans-serif", fontSize: "11px", letterSpacing: "0.1em", color: "#6E6E78" }}
        >
          [ FOTO15 ]
        </span>
      </div>
    </section>
  );
}
