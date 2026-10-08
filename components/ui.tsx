import type { CSSProperties, ReactNode } from "react";

export const font = "var(--font-outfit), Helvetica, sans-serif";

export function Eyebrow({ children, light, style }: { children: ReactNode; light?: boolean; style?: CSSProperties }) {
  return (
    <div
      style={{
        fontFamily: font,
        fontSize: "12px",
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: light ? "#26B7BC" : "#0F0053",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function H2({ children, light, max = "24ch", style }: { children: ReactNode; light?: boolean; max?: string; style?: CSSProperties }) {
  return (
    <h2
      data-lines
      style={{
        margin: "0",
        fontFamily: font,
        fontWeight: "200",
        fontSize: "clamp(34px, 4vw, 64px)",
        lineHeight: "1.02",
        letterSpacing: "-0.025em",
        maxWidth: max,
        color: light ? "#FFFFFF" : "#1A1A1A",
        ...style,
      }}
    >
      {children}
    </h2>
  );
}

export const Accent = ({ children }: { children: ReactNode }) => <span style={{ color: "#26B7BC" }}>{children}</span>;

/** Photo placeholder in the design's hatched style. */
export function Photo({
  label,
  ratio = "4/5",
  dark,
  height,
  style,
}: {
  label: string;
  ratio?: string;
  dark?: boolean;
  height?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      data-reveal
      data-mask
      data-ph={label}
      style={{
        aspectRatio: height ? undefined : ratio,
        height,
        borderRadius: "4px",
        backgroundColor: dark ? "rgba(255,255,255,0.06)" : "#EDF1F3",
        backgroundImage: `repeating-linear-gradient(135deg, ${dark ? "rgba(255,255,255,0.12)" : "rgba(26,26,26,0.05)"} 0 1px, transparent 1px 9px)`,
        display: "flex",
        alignItems: "flex-end",
        padding: "20px",
        ...style,
      }}
    >
      <span style={{ fontFamily: font, fontSize: "14px", fontWeight: 500, letterSpacing: "0.08em", color: dark ? "rgba(255,255,255,0.7)" : "#6E6E78" }}>
        [ {label} ]
      </span>
    </div>
  );
}

export const pillPrimary: CSSProperties = {
  padding: "16px 30px",
  border: "none",
  borderRadius: "999px",
  background: "#0F0053",
  color: "#FFFFFF",
  fontFamily: font,
  fontSize: "15px",
  cursor: "pointer",
};

export const pillGhost: CSSProperties = {
  padding: "16px 30px",
  borderRadius: "999px",
  border: "1px solid rgba(26,26,26,0.22)",
  color: "#1A1A1A",
  fontSize: "15px",
};

export const cardStyle: CSSProperties = {
  position: "relative",
  padding: "38px 32px",
  background: "#FFFFFF",
  border: "1px solid rgba(26,26,26,0.1)",
  borderRadius: "10px",
  transition: "background .4s ease",
};
