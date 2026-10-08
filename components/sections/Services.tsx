export function Services() {
  return (
    <section id="servicii" style={{ padding: "0 40px 130px" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
        <div
          className="m-sb"
          data-reveal
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            gap: "40px",
            borderBottom: "1px solid rgba(26,26,26,0.12)",
            paddingBottom: "24px",
            marginBottom: "56px",
          }}
        >
          <h2
            style={{
              margin: "0",
              fontFamily: "var(--font-outfit), Helvetica, sans-serif",
              fontWeight: "200",
              fontSize: "clamp(44px, 5.8vw, 96px)",
              lineHeight: "1",
              letterSpacing: "-0.02em",
            }}
            data-lines
          >
            {"Ce livrăm "}
            <span style={{ color: "#26B7BC" }}>clinicii</span>
          </h2>
          <span
            style={{
              fontFamily: "var(--font-outfit), Helvetica, sans-serif",
              fontSize: "12px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#0F0053",
            }}
          >
            [ Servicii ]
          </span>
        </div>
        <div className="m-grid m-rep" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "28px 28px" }}>
          <article
            data-reveal
            data-lift
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              padding: "14px",
              margin: "-14px",
              borderRadius: "10px",
              transition: "background .4s ease",
            }}
          >
            <div style={{ position: "relative", aspectRatio: "3/4", borderRadius: "4px", overflow: "hidden" }}>
              <div
                style={{
                  position: "absolute",
                  inset: "0",
                  backgroundColor: "#E4EAEE",
                  backgroundImage: "repeating-linear-gradient(45deg, rgba(15,0,83,0.07) 0 1px, transparent 1px 9px)",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "16px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-outfit), Helvetica, sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.08em",
                    color: "#0F0053",
                  }}
                >
                  [ FOTO ] proces în laborator
                </span>
              </div>
              <div
                className="idl-hover-6"
                style={{
                  position: "absolute",
                  inset: "0",
                  backgroundColor: "#EDF1F3",
                  backgroundImage: "repeating-linear-gradient(135deg, rgba(26,26,26,0.05) 0 1px, transparent 1px 9px)",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "16px",
                  transition: "opacity .5s ease",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-outfit), Helvetica, sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.08em",
                    color: "#6E6E78",
                  }}
                >
                  [ FOTO ] model mandibular
                </span>
              </div>
            </div>
            <div>
              <h3 style={{ margin: "0 0 8px", fontSize: "19px", fontWeight: "500", letterSpacing: "-0.01em" }}>Modele mandibulare</h3>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "#6E6E78", fontWeight: "300" }}>
                Replici printate 3D ale anatomiei osoase, pornind de la CBCT-ul pacientului.
              </p>
            </div>
          </article>
          <article
            data-reveal
            data-lift
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              padding: "14px",
              margin: "-14px",
              borderRadius: "10px",
              transition: "background .4s ease",
            }}
          >
            <div style={{ position: "relative", aspectRatio: "3/4", borderRadius: "4px", overflow: "hidden" }}>
              <div
                style={{
                  position: "absolute",
                  inset: "0",
                  backgroundColor: "#E4EAEE",
                  backgroundImage: "repeating-linear-gradient(45deg, rgba(15,0,83,0.07) 0 1px, transparent 1px 9px)",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "16px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-outfit), Helvetica, sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.08em",
                    color: "#0F0053",
                  }}
                >
                  [ FOTO ] proces în laborator
                </span>
              </div>
              <div
                className="idl-hover-6"
                style={{
                  position: "absolute",
                  inset: "0",
                  backgroundColor: "#EDF1F3",
                  backgroundImage: "repeating-linear-gradient(135deg, rgba(26,26,26,0.05) 0 1px, transparent 1px 9px)",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "16px",
                  transition: "opacity .5s ease",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-outfit), Helvetica, sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.08em",
                    color: "#6E6E78",
                  }}
                >
                  [ CAPTURĂ ] segmentare CBCT
                </span>
              </div>
            </div>
            <div>
              <h3 style={{ margin: "0 0 8px", fontSize: "19px", fontWeight: "500", letterSpacing: "-0.01em" }}>Segmentare CBCT</h3>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "#6E6E78", fontWeight: "300" }}>
                Izolarea structurilor de interes din setul DICOM, cu verificare a acurateței.
              </p>
            </div>
          </article>
          <article
            data-reveal
            data-lift
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              padding: "14px",
              margin: "-14px",
              borderRadius: "10px",
              transition: "background .4s ease",
            }}
          >
            <div style={{ position: "relative", aspectRatio: "3/4", borderRadius: "4px", overflow: "hidden" }}>
              <div
                style={{
                  position: "absolute",
                  inset: "0",
                  backgroundColor: "#E4EAEE",
                  backgroundImage: "repeating-linear-gradient(45deg, rgba(15,0,83,0.07) 0 1px, transparent 1px 9px)",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "16px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-outfit), Helvetica, sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.08em",
                    color: "#0F0053",
                  }}
                >
                  [ FOTO ] proces în laborator
                </span>
              </div>
              <div
                className="idl-hover-6"
                style={{
                  position: "absolute",
                  inset: "0",
                  backgroundColor: "#EDF1F3",
                  backgroundImage: "repeating-linear-gradient(135deg, rgba(26,26,26,0.05) 0 1px, transparent 1px 9px)",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "16px",
                  transition: "opacity .5s ease",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-outfit), Helvetica, sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.08em",
                    color: "#6E6E78",
                  }}
                >
                  [ CAPTURĂ ] fișier STL
                </span>
              </div>
            </div>
            <div>
              <h3 style={{ margin: "0 0 8px", fontSize: "19px", fontWeight: "500", letterSpacing: "-0.01em" }}>Prelucrare digitală</h3>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "#6E6E78", fontWeight: "300" }}>
                Curățare și pregătire a modelului STL pentru printare sau pentru planificare pe ecran.
              </p>
            </div>
          </article>
          <article
            data-reveal
            data-lift
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              padding: "14px",
              margin: "-14px",
              borderRadius: "10px",
              transition: "background .4s ease",
            }}
          >
            <div style={{ position: "relative", aspectRatio: "3/4", borderRadius: "4px", overflow: "hidden" }}>
              <div
                style={{
                  position: "absolute",
                  inset: "0",
                  backgroundColor: "#E4EAEE",
                  backgroundImage: "repeating-linear-gradient(45deg, rgba(15,0,83,0.07) 0 1px, transparent 1px 9px)",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "16px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-outfit), Helvetica, sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.08em",
                    color: "#0F0053",
                  }}
                >
                  [ FOTO ] proces în laborator
                </span>
              </div>
              <div
                className="idl-hover-6"
                style={{
                  position: "absolute",
                  inset: "0",
                  backgroundColor: "#EDF1F3",
                  backgroundImage: "repeating-linear-gradient(135deg, rgba(26,26,26,0.05) 0 1px, transparent 1px 9px)",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "16px",
                  transition: "opacity .5s ease",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-outfit), Helvetica, sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.08em",
                    color: "#6E6E78",
                  }}
                >
                  [ FOTO ] imprimantă 3D
                </span>
              </div>
            </div>
            <div>
              <h3 style={{ margin: "0 0 8px", fontSize: "19px", fontWeight: "500", letterSpacing: "-0.01em" }}>Printare 3D</h3>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "#6E6E78", fontWeight: "300" }}>
                Execuție în laborator și livrare către cabinet, cu documentația cazului.
              </p>
            </div>
          </article>
          <article
            data-reveal
            data-lift
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              padding: "14px",
              margin: "-14px",
              borderRadius: "10px",
              transition: "background .4s ease",
            }}
          >
            <div style={{ position: "relative", aspectRatio: "3/4", borderRadius: "4px", overflow: "hidden" }}>
              <div
                style={{
                  position: "absolute",
                  inset: "0",
                  backgroundColor: "#E4EAEE",
                  backgroundImage: "repeating-linear-gradient(45deg, rgba(15,0,83,0.07) 0 1px, transparent 1px 9px)",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "16px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-outfit), Helvetica, sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.08em",
                    color: "#0F0053",
                  }}
                >
                  [ FOTO ] proces în laborator
                </span>
              </div>
              <div
                className="idl-hover-6"
                style={{
                  position: "absolute",
                  inset: "0",
                  backgroundColor: "#EDF1F3",
                  backgroundImage: "repeating-linear-gradient(135deg, rgba(26,26,26,0.05) 0 1px, transparent 1px 9px)",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "16px",
                  transition: "opacity .5s ease",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-outfit), Helvetica, sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.08em",
                    color: "#6E6E78",
                  }}
                >
                  [ CAPTURĂ ] design CAD
                </span>
              </div>
            </div>
            <div>
              <h3 style={{ margin: "0 0 8px", fontSize: "19px", fontWeight: "500", letterSpacing: "-0.01em" }}>Design CAD/CAM</h3>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "#6E6E78", fontWeight: "300" }}>
                Formă, proporții, morfologie și ocluzie, proiectate digital și verificate în fiecare etapă.
              </p>
            </div>
          </article>
          <article
            data-reveal
            data-lift
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              padding: "14px",
              margin: "-14px",
              borderRadius: "10px",
              transition: "background .4s ease",
            }}
          >
            <div style={{ position: "relative", aspectRatio: "3/4", borderRadius: "4px", overflow: "hidden" }}>
              <div
                style={{
                  position: "absolute",
                  inset: "0",
                  backgroundColor: "#E4EAEE",
                  backgroundImage: "repeating-linear-gradient(45deg, rgba(15,0,83,0.07) 0 1px, transparent 1px 9px)",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "16px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-outfit), Helvetica, sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.08em",
                    color: "#0F0053",
                  }}
                >
                  [ FOTO ] proces în laborator
                </span>
              </div>
              <div
                className="idl-hover-6"
                style={{
                  position: "absolute",
                  inset: "0",
                  backgroundColor: "#EDF1F3",
                  backgroundImage: "repeating-linear-gradient(135deg, rgba(26,26,26,0.05) 0 1px, transparent 1px 9px)",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "16px",
                  transition: "opacity .5s ease",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-outfit), Helvetica, sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.08em",
                    color: "#6E6E78",
                  }}
                >
                  [ FOTO ] ghid chirurgical
                </span>
              </div>
            </div>
            <div>
              <h3 style={{ margin: "0 0 8px", fontSize: "19px", fontWeight: "500", letterSpacing: "-0.01em" }}>Ghiduri chirurgicale</h3>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "#6E6E78", fontWeight: "300" }}>
                Planificarea implanturilor cu ghidaj protetic, pentru un profil de emergență corect.
              </p>
            </div>
          </article>
        </div>
        <div data-reveal style={{ marginTop: "48px" }}>
          <button
            className="idl-hover-4"
            type="button"
            data-open-form="Cerere de ofertă — servicii"
            data-magnetic
            style={{
              padding: "16px 30px",
              border: "none",
              borderRadius: "999px",
              background: "#0F0053",
              color: "#FFFFFF",
              fontFamily: "var(--font-outfit), Helvetica, sans-serif",
              fontSize: "15px",
              cursor: "pointer",
            }}
          >
            {"Cere ofertă pentru un serviciu "}
            <span style={{ color: "#26B7BC" }}>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
