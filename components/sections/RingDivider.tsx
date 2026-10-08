export function RingDivider() {
  return (
    <div
      aria-hidden="true"
      style={{
        height: "110px",
        background:
          "repeating-radial-gradient(circle at 50% 210%, rgba(15,0,83,0) 0 40px, rgba(15,0,83,0.10) 40px 41px, rgba(15,0,83,0) 41px 42px)",
      }}
    ></div>
  );
}
