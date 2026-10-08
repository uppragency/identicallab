export function Portfolio() {
  return (
    <section id="portofoliu" style={{ padding: "0 40px 130px" }}>
      <div
        className="m-nowrap"
        data-drag-cursor
        style={{
          position: "fixed",
          left: "0",
          top: "0",
          zIndex: "60",
          display: "none",
          alignItems: "center",
          gap: "8px",
          padding: "9px 16px",
          borderRadius: "999px",
          background: "#0F0053",
          color: "#FFFFFF",
          fontSize: "12px",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          whiteSpace: "nowrap",
        }}
      >
        {"trage "}
        <span style={{ color: "#26B7BC" }}>↔</span>
      </div>
      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
        <div
          className="m-sb"
          data-reveal
          style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: "40px", marginBottom: "34px" }}
        >
          <h2
            style={{
              margin: "0",
              fontFamily: "var(--font-outfit), Helvetica, sans-serif",
              fontWeight: "200",
              fontSize: "clamp(36px, 4.2vw, 68px)",
              lineHeight: "1.02",
              letterSpacing: "-0.025em",
            }}
            data-lines
          >
            {"Cazuri, "}
            <span style={{ color: "#26B7BC" }}>înainte și după</span>
          </h2>
          <span
            className="m-nowrap"
            style={{ fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#0F0053", whiteSpace: "nowrap" }}
          >
            [ Portofoliu ]
          </span>
        </div>
        <p
          data-reveal
          style={{ margin: "0 0 30px", maxWidth: "58ch", fontSize: "17px", lineHeight: "1.6", color: "#3A3A44", fontWeight: "300" }}
        >
          Trage cursorul peste imagine ca să compari situația inițială cu lucrarea finală. Cazurile sunt publicate cu acordul cabinetului.
        </p>
        <div data-reveal style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "40px" }}>
          <button
            className="idl-hover-7"
            type="button"
            data-filter="Toate"
            style={{
              padding: "10px 18px",
              borderRadius: "999px",
              border: "1px solid transparent",
              background: "#0F0053",
              color: "#FFFFFF",
              fontFamily: "var(--font-outfit), Helvetica, sans-serif",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            Toate
          </button>
          <button
            className="idl-hover-7"
            type="button"
            data-filter="Coroane și fațete"
            style={{
              padding: "10px 18px",
              borderRadius: "999px",
              border: "1px solid rgba(26,26,26,0.18)",
              background: "transparent",
              color: "#3A3A44",
              fontFamily: "var(--font-outfit), Helvetica, sans-serif",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            Coroane și fațete
          </button>
          <button
            className="idl-hover-7"
            type="button"
            data-filter="Fațete feldspatice"
            style={{
              padding: "10px 18px",
              borderRadius: "999px",
              border: "1px solid rgba(26,26,26,0.18)",
              background: "transparent",
              color: "#3A3A44",
              fontFamily: "var(--font-outfit), Helvetica, sans-serif",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            Fațete feldspatice
          </button>
          <button
            className="idl-hover-7"
            type="button"
            data-filter="Ghiduri chirurgicale"
            style={{
              padding: "10px 18px",
              borderRadius: "999px",
              border: "1px solid rgba(26,26,26,0.18)",
              background: "transparent",
              color: "#3A3A44",
              fontFamily: "var(--font-outfit), Helvetica, sans-serif",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            Ghiduri chirurgicale
          </button>
          <button
            className="idl-hover-7"
            type="button"
            data-filter="Modele 3D"
            style={{
              padding: "10px 18px",
              borderRadius: "999px",
              border: "1px solid rgba(26,26,26,0.18)",
              background: "transparent",
              color: "#3A3A44",
              fontFamily: "var(--font-outfit), Helvetica, sans-serif",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            Modele 3D
          </button>
        </div>
        <div className="m-grid m-rep" data-cases style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px 28px" }}>
          <article
            data-case="Coroane și fațete"
            data-reveal
            data-lift
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              padding: "14px",
              margin: "-14px",
              borderRadius: "12px",
              transition: "background .4s ease",
            }}
          >
            <div
              data-ba
              style={{
                position: "relative",
                aspectRatio: "4/3",
                borderRadius: "8px",
                overflow: "hidden",
                backgroundColor: "#EDF1F3",
                cursor: "none",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: "0",
                  backgroundColor: "#EDF1F3",
                  backgroundImage: "repeating-linear-gradient(135deg, rgba(26,26,26,0.05) 0 1px, transparent 1px 9px)",
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  right: "14px",
                  top: "12px",
                  padding: "5px 12px",
                  borderRadius: "999px",
                  background: "rgba(255,255,255,0.9)",
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#0F0053",
                }}
              >
                după
              </div>
              <div
                data-ba-top
                style={{
                  position: "absolute",
                  left: "0",
                  top: "0",
                  bottom: "0",
                  width: "50%",
                  overflow: "hidden",
                  backgroundColor: "#E4EAEE",
                  backgroundImage: "repeating-linear-gradient(45deg, rgba(15,0,83,0.09) 0 1px, transparent 1px 9px)",
                }}
              >
                <div
                  className="m-nowrap"
                  style={{
                    position: "absolute",
                    left: "14px",
                    top: "12px",
                    padding: "5px 12px",
                    borderRadius: "999px",
                    background: "rgba(255,255,255,0.9)",
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#6E6E78",
                    whiteSpace: "nowrap",
                  }}
                >
                  înainte
                </div>
              </div>
              <div
                data-ba-handle
                style={{
                  position: "absolute",
                  top: "0",
                  bottom: "0",
                  left: "50%",
                  width: "2px",
                  background: "#26B7BC",
                  pointerEvents: "none",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "34px",
                    height: "34px",
                    borderRadius: "999px",
                    background: "#FFFFFF",
                    border: "1px solid rgba(15,0,83,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "12px",
                    color: "#0F0053",
                  }}
                >
                  ↔
                </span>
              </div>
              <input
                data-ba-range
                type="range"
                min={0}
                max={100}
                defaultValue="50"
                aria-label="Comparație înainte / după"
                style={{
                  position: "absolute",
                  left: "0",
                  right: "0",
                  bottom: "10px",
                  width: "100%",
                  opacity: "0.001",
                  height: "28px",
                  cursor: "ew-resize",
                }}
              />
            </div>
            <div>
              <div style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#0F0053", marginBottom: "8px" }}>
                Coroane și fațete
              </div>
              <h3 style={{ margin: "0 0 6px", fontSize: "19px", fontWeight: "500", letterSpacing: "-0.01em" }}>
                <a className="idl-hover-9" href="/portofoliu">Reabilitare frontală superioară</a>
              </h3>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "#6E6E78", fontWeight: "300" }}>
                Șase coroane și fațete, integrare cromatică cu dinții vecini.
              </p>
            </div>
          </article>
          <article
            data-case="Fațete feldspatice"
            data-reveal
            data-lift
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              padding: "14px",
              margin: "-14px",
              borderRadius: "12px",
              transition: "background .4s ease",
            }}
          >
            <div
              data-ba
              style={{
                position: "relative",
                aspectRatio: "4/3",
                borderRadius: "8px",
                overflow: "hidden",
                backgroundColor: "#EDF1F3",
                cursor: "none",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: "0",
                  backgroundColor: "#EDF1F3",
                  backgroundImage: "repeating-linear-gradient(135deg, rgba(26,26,26,0.05) 0 1px, transparent 1px 9px)",
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  right: "14px",
                  top: "12px",
                  padding: "5px 12px",
                  borderRadius: "999px",
                  background: "rgba(255,255,255,0.9)",
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#0F0053",
                }}
              >
                după
              </div>
              <div
                data-ba-top
                style={{
                  position: "absolute",
                  left: "0",
                  top: "0",
                  bottom: "0",
                  width: "50%",
                  overflow: "hidden",
                  backgroundColor: "#E4EAEE",
                  backgroundImage: "repeating-linear-gradient(45deg, rgba(15,0,83,0.09) 0 1px, transparent 1px 9px)",
                }}
              >
                <div
                  className="m-nowrap"
                  style={{
                    position: "absolute",
                    left: "14px",
                    top: "12px",
                    padding: "5px 12px",
                    borderRadius: "999px",
                    background: "rgba(255,255,255,0.9)",
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#6E6E78",
                    whiteSpace: "nowrap",
                  }}
                >
                  înainte
                </div>
              </div>
              <div
                data-ba-handle
                style={{
                  position: "absolute",
                  top: "0",
                  bottom: "0",
                  left: "50%",
                  width: "2px",
                  background: "#26B7BC",
                  pointerEvents: "none",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "34px",
                    height: "34px",
                    borderRadius: "999px",
                    background: "#FFFFFF",
                    border: "1px solid rgba(15,0,83,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "12px",
                    color: "#0F0053",
                  }}
                >
                  ↔
                </span>
              </div>
              <input
                data-ba-range
                type="range"
                min={0}
                max={100}
                defaultValue="50"
                aria-label="Comparație înainte / după"
                style={{
                  position: "absolute",
                  left: "0",
                  right: "0",
                  bottom: "10px",
                  width: "100%",
                  opacity: "0.001",
                  height: "28px",
                  cursor: "ew-resize",
                }}
              />
            </div>
            <div>
              <div style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#0F0053", marginBottom: "8px" }}>
                Fațete feldspatice
              </div>
              <h3 style={{ margin: "0 0 6px", fontSize: "19px", fontWeight: "500", letterSpacing: "-0.01em" }}>
                <a className="idl-hover-9" href="/portofoliu">Fațete feldspatice, caz estetic</a>
              </h3>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "#6E6E78", fontWeight: "300" }}>
                Stratificare manuală pe refractar, grosime minimă.
              </p>
            </div>
          </article>
          <article
            data-case="Ghiduri chirurgicale"
            data-reveal
            data-lift
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              padding: "14px",
              margin: "-14px",
              borderRadius: "12px",
              transition: "background .4s ease",
            }}
          >
            <div
              data-ba
              style={{
                position: "relative",
                aspectRatio: "4/3",
                borderRadius: "8px",
                overflow: "hidden",
                backgroundColor: "#EDF1F3",
                cursor: "none",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: "0",
                  backgroundColor: "#EDF1F3",
                  backgroundImage: "repeating-linear-gradient(135deg, rgba(26,26,26,0.05) 0 1px, transparent 1px 9px)",
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  right: "14px",
                  top: "12px",
                  padding: "5px 12px",
                  borderRadius: "999px",
                  background: "rgba(255,255,255,0.9)",
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#0F0053",
                }}
              >
                după
              </div>
              <div
                data-ba-top
                style={{
                  position: "absolute",
                  left: "0",
                  top: "0",
                  bottom: "0",
                  width: "50%",
                  overflow: "hidden",
                  backgroundColor: "#E4EAEE",
                  backgroundImage: "repeating-linear-gradient(45deg, rgba(15,0,83,0.09) 0 1px, transparent 1px 9px)",
                }}
              >
                <div
                  className="m-nowrap"
                  style={{
                    position: "absolute",
                    left: "14px",
                    top: "12px",
                    padding: "5px 12px",
                    borderRadius: "999px",
                    background: "rgba(255,255,255,0.9)",
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#6E6E78",
                    whiteSpace: "nowrap",
                  }}
                >
                  înainte
                </div>
              </div>
              <div
                data-ba-handle
                style={{
                  position: "absolute",
                  top: "0",
                  bottom: "0",
                  left: "50%",
                  width: "2px",
                  background: "#26B7BC",
                  pointerEvents: "none",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "34px",
                    height: "34px",
                    borderRadius: "999px",
                    background: "#FFFFFF",
                    border: "1px solid rgba(15,0,83,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "12px",
                    color: "#0F0053",
                  }}
                >
                  ↔
                </span>
              </div>
              <input
                data-ba-range
                type="range"
                min={0}
                max={100}
                defaultValue="50"
                aria-label="Comparație înainte / după"
                style={{
                  position: "absolute",
                  left: "0",
                  right: "0",
                  bottom: "10px",
                  width: "100%",
                  opacity: "0.001",
                  height: "28px",
                  cursor: "ew-resize",
                }}
              />
            </div>
            <div>
              <div style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#0F0053", marginBottom: "8px" }}>
                Ghiduri chirurgicale
              </div>
              <h3 style={{ margin: "0 0 6px", fontSize: "19px", fontWeight: "500", letterSpacing: "-0.01em" }}>
                <a className="idl-hover-9" href="/portofoliu">Ghid pentru două implanturi</a>
              </h3>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "#6E6E78", fontWeight: "300" }}>
                Poziționare cu ghidaj protetic, profil de emergență planificat.
              </p>
            </div>
          </article>
          <article
            data-case="Modele 3D"
            data-reveal
            data-lift
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              padding: "14px",
              margin: "-14px",
              borderRadius: "12px",
              transition: "background .4s ease",
            }}
          >
            <div
              data-ba
              style={{
                position: "relative",
                aspectRatio: "4/3",
                borderRadius: "8px",
                overflow: "hidden",
                backgroundColor: "#EDF1F3",
                cursor: "none",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: "0",
                  backgroundColor: "#EDF1F3",
                  backgroundImage: "repeating-linear-gradient(135deg, rgba(26,26,26,0.05) 0 1px, transparent 1px 9px)",
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  right: "14px",
                  top: "12px",
                  padding: "5px 12px",
                  borderRadius: "999px",
                  background: "rgba(255,255,255,0.9)",
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#0F0053",
                }}
              >
                după
              </div>
              <div
                data-ba-top
                style={{
                  position: "absolute",
                  left: "0",
                  top: "0",
                  bottom: "0",
                  width: "50%",
                  overflow: "hidden",
                  backgroundColor: "#E4EAEE",
                  backgroundImage: "repeating-linear-gradient(45deg, rgba(15,0,83,0.09) 0 1px, transparent 1px 9px)",
                }}
              >
                <div
                  className="m-nowrap"
                  style={{
                    position: "absolute",
                    left: "14px",
                    top: "12px",
                    padding: "5px 12px",
                    borderRadius: "999px",
                    background: "rgba(255,255,255,0.9)",
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#6E6E78",
                    whiteSpace: "nowrap",
                  }}
                >
                  înainte
                </div>
              </div>
              <div
                data-ba-handle
                style={{
                  position: "absolute",
                  top: "0",
                  bottom: "0",
                  left: "50%",
                  width: "2px",
                  background: "#26B7BC",
                  pointerEvents: "none",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "34px",
                    height: "34px",
                    borderRadius: "999px",
                    background: "#FFFFFF",
                    border: "1px solid rgba(15,0,83,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "12px",
                    color: "#0F0053",
                  }}
                >
                  ↔
                </span>
              </div>
              <input
                data-ba-range
                type="range"
                min={0}
                max={100}
                defaultValue="50"
                aria-label="Comparație înainte / după"
                style={{
                  position: "absolute",
                  left: "0",
                  right: "0",
                  bottom: "10px",
                  width: "100%",
                  opacity: "0.001",
                  height: "28px",
                  cursor: "ew-resize",
                }}
              />
            </div>
            <div>
              <div style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#0F0053", marginBottom: "8px" }}>
                Modele 3D
              </div>
              <h3 style={{ margin: "0 0 6px", fontSize: "19px", fontWeight: "500", letterSpacing: "-0.01em" }}>
                <a className="idl-hover-9" href="/portofoliu">Model mandibular din CBCT</a>
              </h3>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "#6E6E78", fontWeight: "300" }}>
                Model printat pentru măsurători și planificare preoperatorie.
              </p>
            </div>
          </article>
          <article
            data-case="Coroane și fațete"
            data-reveal
            data-lift
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              padding: "14px",
              margin: "-14px",
              borderRadius: "12px",
              transition: "background .4s ease",
            }}
          >
            <div
              data-ba
              style={{
                position: "relative",
                aspectRatio: "4/3",
                borderRadius: "8px",
                overflow: "hidden",
                backgroundColor: "#EDF1F3",
                cursor: "none",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: "0",
                  backgroundColor: "#EDF1F3",
                  backgroundImage: "repeating-linear-gradient(135deg, rgba(26,26,26,0.05) 0 1px, transparent 1px 9px)",
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  right: "14px",
                  top: "12px",
                  padding: "5px 12px",
                  borderRadius: "999px",
                  background: "rgba(255,255,255,0.9)",
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#0F0053",
                }}
              >
                după
              </div>
              <div
                data-ba-top
                style={{
                  position: "absolute",
                  left: "0",
                  top: "0",
                  bottom: "0",
                  width: "50%",
                  overflow: "hidden",
                  backgroundColor: "#E4EAEE",
                  backgroundImage: "repeating-linear-gradient(45deg, rgba(15,0,83,0.09) 0 1px, transparent 1px 9px)",
                }}
              >
                <div
                  className="m-nowrap"
                  style={{
                    position: "absolute",
                    left: "14px",
                    top: "12px",
                    padding: "5px 12px",
                    borderRadius: "999px",
                    background: "rgba(255,255,255,0.9)",
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#6E6E78",
                    whiteSpace: "nowrap",
                  }}
                >
                  înainte
                </div>
              </div>
              <div
                data-ba-handle
                style={{
                  position: "absolute",
                  top: "0",
                  bottom: "0",
                  left: "50%",
                  width: "2px",
                  background: "#26B7BC",
                  pointerEvents: "none",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "34px",
                    height: "34px",
                    borderRadius: "999px",
                    background: "#FFFFFF",
                    border: "1px solid rgba(15,0,83,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "12px",
                    color: "#0F0053",
                  }}
                >
                  ↔
                </span>
              </div>
              <input
                data-ba-range
                type="range"
                min={0}
                max={100}
                defaultValue="50"
                aria-label="Comparație înainte / după"
                style={{
                  position: "absolute",
                  left: "0",
                  right: "0",
                  bottom: "10px",
                  width: "100%",
                  opacity: "0.001",
                  height: "28px",
                  cursor: "ew-resize",
                }}
              />
            </div>
            <div>
              <div style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#0F0053", marginBottom: "8px" }}>
                Coroane și fațete
              </div>
              <h3 style={{ margin: "0 0 6px", fontSize: "19px", fontWeight: "500", letterSpacing: "-0.01em" }}>
                <a className="idl-hover-9" href="/portofoliu">Reabilitare orală completă</a>
              </h3>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "#6E6E78", fontWeight: "300" }}>
                Plan în etape, verificare a ocluziei pe parcurs.
              </p>
            </div>
          </article>
          <article
            data-case="Modele 3D"
            data-reveal
            data-lift
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              padding: "14px",
              margin: "-14px",
              borderRadius: "12px",
              transition: "background .4s ease",
            }}
          >
            <div
              data-ba
              style={{
                position: "relative",
                aspectRatio: "4/3",
                borderRadius: "8px",
                overflow: "hidden",
                backgroundColor: "#EDF1F3",
                cursor: "none",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: "0",
                  backgroundColor: "#EDF1F3",
                  backgroundImage: "repeating-linear-gradient(135deg, rgba(26,26,26,0.05) 0 1px, transparent 1px 9px)",
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  right: "14px",
                  top: "12px",
                  padding: "5px 12px",
                  borderRadius: "999px",
                  background: "rgba(255,255,255,0.9)",
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#0F0053",
                }}
              >
                după
              </div>
              <div
                data-ba-top
                style={{
                  position: "absolute",
                  left: "0",
                  top: "0",
                  bottom: "0",
                  width: "50%",
                  overflow: "hidden",
                  backgroundColor: "#E4EAEE",
                  backgroundImage: "repeating-linear-gradient(45deg, rgba(15,0,83,0.09) 0 1px, transparent 1px 9px)",
                }}
              >
                <div
                  className="m-nowrap"
                  style={{
                    position: "absolute",
                    left: "14px",
                    top: "12px",
                    padding: "5px 12px",
                    borderRadius: "999px",
                    background: "rgba(255,255,255,0.9)",
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#6E6E78",
                    whiteSpace: "nowrap",
                  }}
                >
                  înainte
                </div>
              </div>
              <div
                data-ba-handle
                style={{
                  position: "absolute",
                  top: "0",
                  bottom: "0",
                  left: "50%",
                  width: "2px",
                  background: "#26B7BC",
                  pointerEvents: "none",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "34px",
                    height: "34px",
                    borderRadius: "999px",
                    background: "#FFFFFF",
                    border: "1px solid rgba(15,0,83,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "12px",
                    color: "#0F0053",
                  }}
                >
                  ↔
                </span>
              </div>
              <input
                data-ba-range
                type="range"
                min={0}
                max={100}
                defaultValue="50"
                aria-label="Comparație înainte / după"
                style={{
                  position: "absolute",
                  left: "0",
                  right: "0",
                  bottom: "10px",
                  width: "100%",
                  opacity: "0.001",
                  height: "28px",
                  cursor: "ew-resize",
                }}
              />
            </div>
            <div>
              <div style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#0F0053", marginBottom: "8px" }}>
                Modele 3D
              </div>
              <h3 style={{ margin: "0 0 6px", fontSize: "19px", fontWeight: "500", letterSpacing: "-0.01em" }}>
                <a className="idl-hover-9" href="/portofoliu">Wax-up digital și model de studiu</a>
              </h3>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "#6E6E78", fontWeight: "300" }}>
                Simulare digitală transformată în model fizic pentru probă.
              </p>
            </div>
          </article>
        </div>
        <div data-reveal style={{ marginTop: "48px" }}>
          <button
            className="idl-hover-4"
            type="button"
            data-open-form="Cerere de ofertă — caz similar din portofoliu"
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
            {"Trimite un caz similar "}
            <span style={{ color: "#26B7BC" }}>→</span>
          </button>
          <a
            className="idl-hover-9 link-after"
            href="/portofoliu"
            style={{
              display: "inline-block",
              marginLeft: "26px", fontSize: "15px",
              color: "#0F0053",
              borderBottom: "1px solid rgba(15,0,83,0.4)",
              paddingBottom: "3px",
            }}
          >
            {"Vezi tot portofoliul "}
            <span style={{ color: "#26B7BC" }}>→</span>
          </a>
        </div>
        <p data-reveal data-cases-empty style={{ display: "none", margin: "40px 0 0", fontSize: "16px", color: "#6E6E78" }}>
          Nu avem încă un caz publicat pe această categorie.
        </p>
      </div>
    </section>
  );
}
