import { features } from "@/lib/features";
export function Header() {
  return (
    <header
      className="m-sb"
      data-header
      style={{
        position: "sticky",
        top: "0",
        zIndex: "50",
        overflow: "visible",
        transition: "transform .45s cubic-bezier(.2,.7,.2,1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "24px",
        padding: "18px 40px",
        background: "rgba(255,255,255,0.86)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(26,26,26,0.08)",
      }}
    >
      <a
        href="/"
        style={{
          fontFamily: "var(--font-outfit), Helvetica, sans-serif",
          fontSize: "25px",
          fontWeight: "500",
          letterSpacing: "-0.02em",
          color: "#0F0053",
        }}
      >
        {"identical "}
        <span style={{ fontWeight: "200", color: "#26B7BC" }}>lab</span>
      </a>
      <nav data-desktop-nav style={{ display: "flex", gap: "30px", fontSize: "14px", letterSpacing: "0.01em" }}>
        <a className="idl-hover-0" href="/despre-noi">
          Despre noi
        </a>
        <span data-svc-wrap style={{ position: "relative", display: "inline-block" }}>
          <a className="idl-hover-0" href="/servicii">
            Servicii
          </a>
          <span
            className="m-grid"
            data-svc-panel
            style={{
              display: "none",
              position: "absolute",
              top: "34px",
              left: "-20px",
              width: "620px",
              padding: "18px",
              borderRadius: "12px",
              background: "#FFFFFF",
              border: "1px solid rgba(26,26,26,0.1)",
              boxShadow: "0 24px 60px rgba(15,0,83,0.14)",
              gridTemplateColumns: "1fr 220px",
              gap: "18px",
            }}
          >
            <span style={{ display: "block" }}>
              <button
                className="idl-hover-1"
                type="button"
                data-svc="model mandibular printat"
                data-href="/servicii/modele-mandibulare-3d"
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  padding: "12px 14px",
                  border: "none",
                  borderRadius: "8px",
                  background: "transparent",
                  fontFamily: "var(--font-outfit), Helvetica, sans-serif",
                  cursor: "pointer",
                }}
              >
                <span style={{ display: "block", fontSize: "15px", color: "#1A1A1A" }}>Modele mandibulare 3D</span>
                <span
                  style={{ display: "block", marginTop: "3px", fontSize: "13px", lineHeight: "1.4", color: "#6E6E78", fontWeight: "300" }}
                >
                  Replici printate ale anatomiei osoase, din CBCT.
                </span>
              </button>
              <button
                className="idl-hover-1"
                type="button"
                data-svc="segmentare CBCT pe ecran"
                data-href="/servicii/segmentare-cbct"
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  padding: "12px 14px",
                  border: "none",
                  borderRadius: "8px",
                  background: "transparent",
                  fontFamily: "var(--font-outfit), Helvetica, sans-serif",
                  cursor: "pointer",
                }}
              >
                <span style={{ display: "block", fontSize: "15px", color: "#1A1A1A" }}>Segmentare CBCT</span>
                <span
                  style={{ display: "block", marginTop: "3px", fontSize: "13px", lineHeight: "1.4", color: "#6E6E78", fontWeight: "300" }}
                >
                  Izolarea structurilor de interes din setul DICOM.
                </span>
              </button>
              <button
                className="idl-hover-1"
                type="button"
                data-svc="design CAD în lucru"
                data-href="/servicii/design-cad-cam"
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  padding: "12px 14px",
                  border: "none",
                  borderRadius: "8px",
                  background: "transparent",
                  fontFamily: "var(--font-outfit), Helvetica, sans-serif",
                  cursor: "pointer",
                }}
              >
                <span style={{ display: "block", fontSize: "15px", color: "#1A1A1A" }}>Design CAD/CAM</span>
                <span
                  style={{ display: "block", marginTop: "3px", fontSize: "13px", lineHeight: "1.4", color: "#6E6E78", fontWeight: "300" }}
                >
                  Formă, proporții, morfologie și ocluzie, digital.
                </span>
              </button>
              <button
                className="idl-hover-1"
                type="button"
                data-svc="ghid chirurgical printat"
                data-href="/servicii/ghiduri-chirurgicale"
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  padding: "12px 14px",
                  border: "none",
                  borderRadius: "8px",
                  background: "transparent",
                  fontFamily: "var(--font-outfit), Helvetica, sans-serif",
                  cursor: "pointer",
                }}
              >
                <span style={{ display: "block", fontSize: "15px", color: "#1A1A1A" }}>Ghiduri chirurgicale</span>
                <span
                  style={{ display: "block", marginTop: "3px", fontSize: "13px", lineHeight: "1.4", color: "#6E6E78", fontWeight: "300" }}
                >
                  Poziționare cu ghidaj protetic.
                </span>
              </button>
            </span>
            <span
              data-svc-img
              style={{
                display: "flex",
                alignItems: "flex-end",
                padding: "14px",
                borderRadius: "8px",
                backgroundColor: "#EDF1F3",
                backgroundImage: "repeating-linear-gradient(135deg, rgba(26,26,26,0.05) 0 1px, transparent 1px 9px)",
                fontSize: "11px",
                letterSpacing: "0.08em",
                color: "#6E6E78",
              }}
            >
              [ FOTO ] model mandibular printat
            </span>
          </span>
        </span>
        <a className="idl-hover-0" href="/portofoliu">
          Portofoliu
        </a>
        <a className="idl-hover-0" href="/cum-lucram">
          Cum lucrăm
        </a>
        <a className="idl-hover-0" href="/ghiduri">
          Ghiduri
        </a>
        {features.blog && (
        <a className="idl-hover-0" href="/#blog">
          Blog
        </a>
        )}
        <a className="idl-hover-0" href="/intrebari">
          Întrebări
        </a>
        <a className="idl-hover-0" href="/contact">
          Contact
        </a>
      </nav>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <button
          className="idl-hover-2"
          type="button"
          data-search-open
          aria-label="Caută în site"
          style={{
            width: "38px",
            height: "38px",
            borderRadius: "999px",
            border: "1px solid rgba(26,26,26,0.18)",
            background: "transparent",
            color: "#1A1A1A",
            fontSize: "15px",
            cursor: "pointer",
          }}
        >
          ⌕
        </button>
        <button
          type="button"
          data-burger
          aria-label="Meniu"
          style={{
            width: "44px",
            height: "44px",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "999px",
            border: "1px solid rgba(26,26,26,0.18)",
            background: "transparent",
            color: "#1A1A1A",
            cursor: "pointer",
          }}
        >
          <span
            style={{
              display: "block",
              width: "18px",
              height: "9px",
              borderTop: "1px solid currentColor",
              borderBottom: "1px solid currentColor",
            }}
          ></span>
        </button>
        <button
          className="idl-hover-3"
          type="button"
          data-open-form="Cerere de ofertă"
          style={{
            padding: "11px 22px",
            border: "none",
            borderRadius: "999px",
            background: "#1A1A1A",
            color: "#FFFFFF",
            fontFamily: "var(--font-outfit), Helvetica, sans-serif",
            fontSize: "14px",
            cursor: "pointer",
          }}
        >
          Cere ofertă
        </button>
      </div>
      <div
        data-progress
        style={{
          position: "absolute",
          left: "0",
          bottom: "-1px",
          height: "2px",
          width: "0%",
          background: "linear-gradient(90deg, #0F0053, #26B7BC)",
        }}
      ></div>
    </header>
  );
}
