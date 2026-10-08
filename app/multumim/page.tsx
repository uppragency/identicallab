import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { font } from "@/components/ui";

export const metadata: Metadata = {
  title: "Mulțumim | iDentical Lab",
  robots: { index: false, follow: false },
};

const steps: [string, string][] = [
  ["Verificăm cererea", "Un specialist iDentical Lab citește detaliile cazului."],
  ["Te contactăm", "Revenim prin telefon sau email, în cel mai scurt timp posibil."],
  ["Stabilim pașii", "Confirmăm fișierele necesare, termenul și oferta."],
];

export default function Page() {
  return (
    <PageShell>
      <section
        id="top"
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "110px 40px 130px",
          backgroundImage:
            "radial-gradient(1100px 620px at 88% -12%, rgba(38,183,188,0.18), rgba(255,255,255,0) 62%), repeating-linear-gradient(90deg, rgba(15,0,83,0.055) 0 1px, rgba(255,255,255,0) 1px 128px)",
        }}
      >
        <div style={{ maxWidth: "1440px", margin: "0 auto", position: "relative" }}>
          <div style={{ fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#0F0053", marginBottom: "28px" }}>[ Cerere trimisă ]</div>
          <h1 data-reveal data-lines style={{ margin: "0", fontFamily: font, fontWeight: "200", fontSize: "clamp(52px, 8.6vw, 140px)", lineHeight: "0.94", letterSpacing: "-0.035em", maxWidth: "12ch" }}>
            Mulțumim<span style={{ color: "#26B7BC" }}>.</span>
          </h1>
          <p data-reveal style={{ margin: "34px 0 0", maxWidth: "50ch", fontSize: "21px", lineHeight: "1.55", color: "#3A3A44", fontWeight: "300" }}>
            Am primit cererea ta. Un specialist iDentical Lab te va contacta în cel mai scurt timp posibil.
          </p>
          <div data-reveal style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "40px" }}>
            <a className="idl-hover-5" href="/" data-magnetic style={{ padding: "16px 30px", borderRadius: "999px", background: "#0F0053", color: "#FFFFFF", fontSize: "15px" }}>
              Înapoi acasă
            </a>
            <a className="idl-hover-2" href="/servicii" data-magnetic style={{ padding: "16px 30px", borderRadius: "999px", border: "1px solid rgba(26,26,26,0.22)", background: "transparent", color: "#1A1A1A", fontSize: "15px" }}>
              Vezi serviciile
            </a>
          </div>
          <div data-reveal className="m-grid m-rep" style={{ marginTop: "80px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {steps.map(([t, d], i) => (
              <div key={t} style={{ padding: "30px 28px", background: "#FFFFFF", border: "1px solid rgba(26,26,26,0.1)", borderRadius: "10px" }}>
                <div style={{ fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#0F0053", marginBottom: "16px" }}>0{i + 1}</div>
                <h2 style={{ margin: "0 0 10px", fontFamily: font, fontWeight: "300", fontSize: "24px", letterSpacing: "-0.015em" }}>{t}</h2>
                <p style={{ margin: 0, fontSize: "16px", lineHeight: "1.6", color: "#3A3A44", fontWeight: "300" }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
