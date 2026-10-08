// @ts-nocheck
/* eslint-disable */
"use client";
/**
 * Interaction layer ported 1:1 from the approved design runtime
 * ("iDentical Lab v2"): reveal/mask/line animations, scroll progress and
 * auto-hiding header, Servicii mega menu, search (Cmd/Ctrl+K), mobile drawer,
 * offer modal, portfolio filter + before/after comparators, testimonial
 * carousel, blog filter + article view, card hover effects, magnetic buttons.
 * Form submission (Supabase + Resend) is the only addition (_initForms).
 */
import { useEffect } from "react";

class SiteBehaviors {
  root: ParentNode | null = null;
  mount() {
    const els = Array.from(this.root ? this.root.querySelectorAll("[data-reveal]") : document.querySelectorAll("[data-reveal]"));
    els.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(18px)";
      el.style.transition =
        "opacity .8s cubic-bezier(.2,.7,.2,1) " + (i % 4) * 70 + "ms, transform .8s cubic-bezier(.2,.7,.2,1) " + (i % 4) * 70 + "ms";
    });
    const show = (el) => {
      el.style.opacity = "1";
      el.style.transform = "none";
    };
    if (!("IntersectionObserver" in window)) {
      els.forEach(show);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            show(e.target);
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));
    this._fallback = setTimeout(() => els.forEach(show), 2500);
    this._io = io;
    const root = this.root || document;
    this._initLines(root);
    this._initScroll(root);
    this._initMagnetic(root);
    this._initCases(root);
    this._initCompare(root);
    this._initFooter(root);
    this._initHeaderExtras(root);
    this._initSearch(root);
    this._initSteps(root);
    this._initMasks(root);
    this._initCards(root);
    this._initBlog(root);
    this._initTestimonials(root);
    this._initFormModal(root);
    this._initDrawer(root);
    this._initForms(root);
  }

  _initDrawer(root) {
    const btn = root.querySelector("[data-burger]");
    const drawer = root.querySelector("[data-drawer]");
    if (!btn || !drawer) return;
    const open = () => {
      drawer.style.display = "flex";
      document.body.style.overflow = "hidden";
    };
    const close = () => {
      drawer.style.display = "none";
      document.body.style.overflow = "";
    };
    btn.addEventListener("click", open);
    const closeBtn = drawer.querySelector("[data-drawer-close]");
    if (closeBtn) closeBtn.addEventListener("click", close);
    Array.from(drawer.querySelectorAll("[data-drawer-link]")).forEach((a) => a.addEventListener("click", close));
    const cta = drawer.querySelector("[data-drawer-cta]");
    if (cta)
      cta.addEventListener("click", () => {
        close();
        const hb = root.querySelector("header [data-open-form]");
        if (hb) hb.click();
      });
    this._onDrawerKey = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", this._onDrawerKey);
    this._closeDrawer = close;
  }

  _initFormModal(root) {
    const modal = root.querySelector("[data-form-modal]");
    if (!modal) return;
    const subject = modal.querySelector("[data-form-subject]");
    const card = modal.querySelector("[data-form-card]");
    const open = (subj) => {
      if (subject && subj) subject.value = subj;
      modal.style.display = "block";
      document.body.style.overflow = "hidden";
      if (card) {
        card.style.transition = "none";
        card.style.opacity = "0";
        card.style.transform = "translateY(14px)";
        requestAnimationFrame(() => {
          card.style.transition = "opacity .35s ease, transform .45s cubic-bezier(.2,.7,.2,1)";
          card.style.opacity = "1";
          card.style.transform = "none";
        });
      }
    };
    const close = () => {
      modal.style.display = "none";
      document.body.style.overflow = "";
    };
    Array.from(root.querySelectorAll("[data-open-form]")).forEach((b) => {
      b.addEventListener("click", (e) => {
        e.preventDefault();
        open(b.getAttribute("data-open-form"));
      });
    });
    Array.from(modal.querySelectorAll("[data-form-close]")).forEach((b) => b.addEventListener("click", close));
    modal.addEventListener("click", (e) => {
      if (e.target === modal) close();
    });
    this._onFormKey = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", this._onFormKey);
    this._closeFormModal = close;
  }

  _initTestimonials(root) {
    const wrap = root.querySelector("[data-tq-track-wrap]");
    const track = root.querySelector("[data-tq-track]");
    if (!wrap || !track) return;
    const bar = root.querySelector("[data-tq-bar]");
    const cur = root.querySelector("[data-tq-cursor]");
    const cards = Array.from(track.querySelectorAll("[data-tq]"));
    let x = 0,
      drag = false,
      startX = 0,
      startPos = 0,
      auto = true;

    const maxScroll = () => Math.max(0, track.scrollWidth - wrap.clientWidth);
    const apply = () => {
      const m = maxScroll();
      x = Math.min(0, Math.max(-m, x));
      track.style.transform = "translateX(" + x.toFixed(1) + "px)";
      if (bar) bar.style.width = Math.max(8, m ? (-x / m) * 80 + 20 : 100) + "%";
    };
    const step = () => (cards[0] ? cards[0].getBoundingClientRect().width + 24 : 380);
    const glide = (dx) => {
      track.style.transition = "transform .6s cubic-bezier(.2,.7,.2,1)";
      x += dx;
      apply();
      setTimeout(() => {
        track.style.transition = "";
      }, 620);
    };

    wrap.addEventListener("pointerdown", (e) => {
      drag = true;
      auto = false;
      startX = e.clientX;
      startPos = x;
      wrap.setPointerCapture(e.pointerId);
      if (cur) cur.style.background = "#26B7BC";
    });
    wrap.addEventListener("pointermove", (e) => {
      if (cur) {
        cur.style.left = e.clientX + "px";
        cur.style.top = e.clientY + "px";
      }
      if (!drag) return;
      x = startPos + (e.clientX - startX);
      apply();
    });
    const stop = () => {
      drag = false;
      if (cur) cur.style.background = "#0F0053";
    };
    wrap.addEventListener("pointerup", stop);
    wrap.addEventListener("pointercancel", stop);
    wrap.addEventListener("pointerenter", () => {
      auto = false;
      if (cur) cur.style.display = "flex";
    });
    wrap.addEventListener("pointerleave", () => {
      stop();
      auto = true;
      if (cur) cur.style.display = "none";
    });

    const prev = root.querySelector("[data-tq-prev]");
    const next = root.querySelector("[data-tq-next]");
    if (prev)
      prev.addEventListener("click", () => {
        auto = false;
        glide(step());
      });
    if (next)
      next.addEventListener("click", () => {
        auto = false;
        glide(-step());
      });

    this._tqTimer = setInterval(() => {
      if (!auto) return;
      const m = maxScroll();
      if (m <= 0) return;
      x = -x >= m - 2 ? 0 : x - 0.5;
      apply();
    }, 32);
    this._onTqResize = apply;
    window.addEventListener("resize", apply);
    apply();
  }

  _initBlog(root) {
    const wrap = root.querySelector("[data-posts]");
    if (!wrap) return;
    const posts = Array.from(wrap.querySelectorAll("[data-post]"));
    const empty = root.querySelector("[data-posts-empty]");
    const btns = Array.from(root.querySelectorAll("[data-blog-filter]"));
    btns.forEach((b) =>
      b.addEventListener("click", () => {
        const f = b.getAttribute("data-blog-filter");
        btns.forEach((o) => {
          const on = o === b;
          o.style.background = on ? "#0F0053" : "transparent";
          o.style.color = on ? "#FFFFFF" : "#3A3A44";
          o.style.borderColor = on ? "transparent" : "rgba(26,26,26,0.18)";
        });
        let shown = 0;
        posts.forEach((p) => {
          const ok = f === "Toate" || p.getAttribute("data-post") === f;
          p.style.display = ok ? "flex" : "none";
          if (ok) shown++;
        });
        if (empty) empty.style.display = shown ? "none" : "block";
      }),
    );

    const view = root.querySelector("[data-article]");
    if (!view) return;
    const close = () => {
      view.style.display = "none";
      document.body.style.overflow = "";
    };
    posts.forEach((p) =>
      p.addEventListener("click", () => {
        const cat = p.getAttribute("data-post");
        const h = p.querySelector("h3");
        const meta = p.querySelector("div > div > span:last-child");
        view.querySelector("[data-article-cat]").textContent = cat;
        view.querySelector("[data-article-title]").textContent = h ? h.textContent : "";
        view.querySelector("[data-article-meta]").textContent = meta ? meta.textContent : "";
        view.style.display = "block";
        view.scrollTop = 0;
        document.body.style.overflow = "hidden";
      }),
    );
    Array.from(view.querySelectorAll("[data-article-close]")).forEach((b) => b.addEventListener("click", close));
    this._onArticleKey = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", this._onArticleKey);
  }

  _initCards(root) {
    const bars = (el, color) => {
      const mk = (css, origin) => {
        const b = document.createElement("span");
        b.setAttribute("data-bar", "");
        b.style.cssText =
          "position:absolute;background:" +
          color +
          ";pointer-events:none;transition:transform .34s ease;transform-origin:" +
          origin +
          ";" +
          css;
        el.appendChild(b);
        return b;
      };
      return [
        mk("top:0;left:0;right:0;height:1px;transform:scaleX(0);", "left center"),
        mk("top:0;right:0;bottom:0;width:1px;transform:scaleY(0);", "center top"),
        mk("bottom:0;left:0;right:0;height:1px;transform:scaleX(0);", "right center"),
        mk("top:0;left:0;bottom:0;width:1px;transform:scaleY(0);", "center bottom"),
      ];
    };
    const draw = (list, on) =>
      list.forEach((b, i) => {
        setTimeout(
          () => {
            const axis = i % 2 === 0 ? "scaleX" : "scaleY";
            b.style.transform = axis + "(" + (on ? 1 : 0) + ")";
          },
          (on ? i : list.length - 1 - i) * 90,
        );
      });

    Array.from(root.querySelectorAll("[data-card]")).forEach((card) => {
      if (card.dataset.cardReady === "1") return;
      card.dataset.cardReady = "1";
      const list = bars(card, "#26B7BC");
      const texts = Array.from(card.querySelectorAll("h3, p, span, div")).filter((e) => !e.hasAttribute("data-bar"));
      const orig = texts.map((e) => e.style.color);
      const bg = card.style.background;
      card.addEventListener("pointerenter", () => {
        card.style.background = "#0F0053";
        card.style.color = "#FFFFFF";
        texts.forEach((e) => {
          const cs = getComputedStyle(e);
          e.style.color = /(15, 0, 83)|(166, 82, 82)/.test(cs.color) ? "#26B7BC" : "#FFFFFF";
          if (/rgb\(15, 0, 83\)/.test(cs.backgroundColor)) {
            e.dataset.bgSwap = "1";
            e.style.background = "#26B7BC";
          }
        });
        draw(list, true);
      });
      card.addEventListener("pointerleave", () => {
        card.style.background = bg;
        card.style.color = "";
        texts.forEach((e, i) => {
          e.style.color = orig[i];
          if (e.dataset.bgSwap === "1") {
            e.style.background = "#0F0053";
            delete e.dataset.bgSwap;
          }
        });
        draw(list, false);
      });
    });

    Array.from(root.querySelectorAll("[data-lift]")).forEach((card) => {
      if (card.dataset.liftReady === "1") return;
      card.dataset.liftReady = "1";
      const list = bars(card, "#26B7BC");
      card.addEventListener("pointerenter", () => {
        draw(list, true);
      });
      card.addEventListener("pointerleave", () => {
        draw(list, false);
      });
    });
  }

  _initMasks(root) {
    const els = Array.from(root.querySelectorAll("[data-mask]"));
    els.forEach((el) => {
      el.style.clipPath = "inset(100% 0 0 0)";
      el.style.transition = (el.style.transition ? el.style.transition + ", " : "") + "clip-path 1.15s cubic-bezier(.16,.84,.2,1)";
    });
    const show = (el) => {
      el.style.clipPath = "inset(0 0 0 0)";
    };
    if (!("IntersectionObserver" in window)) {
      els.forEach(show);
      return;
    }
    const io = new IntersectionObserver(
      (es) => {
        es.forEach((e) => {
          if (e.isIntersecting) {
            show(e.target);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    this._maskIo = io;
    this._maskFallback = setTimeout(() => els.forEach(show), 3000);
  }

  _initHeaderExtras(root) {
    /* submeniu Servicii */
    const wrap = root.querySelector("[data-svc-wrap]");
    const panel = root.querySelector("[data-svc-panel]");
    const img = root.querySelector("[data-svc-img]");
    if (wrap && panel) {
      let t = null;
      const show = () => {
        clearTimeout(t);
        panel.style.display = "grid";
      };
      const hide = () => {
        t = setTimeout(() => {
          panel.style.display = "none";
        }, 160);
      };
      wrap.addEventListener("pointerenter", show);
      wrap.addEventListener("pointerleave", hide);
      panel.addEventListener("pointerenter", show);
      panel.addEventListener("pointerleave", hide);
      Array.from(panel.querySelectorAll("[data-svc]")).forEach((b) => {
        b.addEventListener("pointerenter", () => {
          if (img) img.textContent = "[ FOTO ] " + b.getAttribute("data-svc");
        });
        b.addEventListener("click", () => {
          panel.style.display = "none";
          const dest = b.getAttribute("data-href");
          if (dest) {
            window.location.href = dest;
            return;
          }
          const s = root.querySelector("#servicii");
          if (!s) {
            window.location.href = "/#servicii";
            return;
          }
          window.scrollTo({ top: window.scrollY + s.getBoundingClientRect().top - 90, behavior: "smooth" });
        });
      });
    }
  }

  _initSearch(root) {
    const openBtn = root.querySelector("[data-search-open]");
    const overlay = root.querySelector("[data-search-overlay]");
    const input = root.querySelector("[data-search-input]");
    const out = root.querySelector("[data-search-results]");
    const closeBtn = root.querySelector("[data-search-close]");
    if (!openBtn || !overlay || !input || !out) return;
    const index = [];
    Array.from(root.querySelectorAll("section[id]")).forEach((sec) => {
      const label = (sec.querySelector("h2, h1") || {}).textContent || sec.id;
      Array.from(sec.querySelectorAll("h1, h2, h3, summary, p")).forEach((el) => {
        const text = (el.textContent || "").trim();
        if (text.length > 12) index.push({ text, section: label.trim(), id: sec.id, el });
      });
    });
    const render = (q) => {
      const needle = q.trim().toLowerCase();
      out.innerHTML = "";
      if (needle.length < 2) return;
      const hits = index.filter((i) => i.text.toLowerCase().includes(needle)).slice(0, 12);
      if (!hits.length) {
        out.innerHTML =
          '<div style="padding:18px 0;color:rgba(255,255,255,0.6);font-size:16px;">Nimic găsit. Scrie-ne direct și răspundem.</div>';
        return;
      }
      hits.forEach((h) => {
        const b = document.createElement("button");
        b.type = "button";
        b.style.cssText =
          "text-align:left;padding:16px 18px;border:none;border-radius:10px;background:rgba(255,255,255,0.06);color:#FFFFFF;font-family:Outfit,Helvetica,sans-serif;cursor:pointer;";
        b.onmouseenter = () => {
          b.style.background = "rgba(38,183,188,0.22)";
        };
        b.onmouseleave = () => {
          b.style.background = "rgba(255,255,255,0.06)";
        };
        b.innerHTML =
          '<span style="display:block;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#26B7BC;margin-bottom:6px;">' +
          h.section +
          "</span>" +
          '<span style="display:block;font-size:16px;line-height:1.45;font-weight:300;">' +
          (h.text.length > 130 ? h.text.slice(0, 130) + "…" : h.text) +
          "</span>";
        b.addEventListener("click", () => {
          overlay.style.display = "none";
          window.scrollTo({ top: window.scrollY + h.el.getBoundingClientRect().top - 110, behavior: "smooth" });
        });
        out.appendChild(b);
      });
    };
    const open = () => {
      overlay.style.display = "block";
      input.value = "";
      out.innerHTML = "";
      setTimeout(() => input.focus(), 40);
    };
    const close = () => {
      overlay.style.display = "none";
    };
    openBtn.addEventListener("click", open);
    if (closeBtn) closeBtn.addEventListener("click", close);
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) close();
    });
    input.addEventListener("input", () => render(input.value));
    this._onKey = (e) => {
      if (e.key === "Escape") close();
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        open();
      }
    };
    window.addEventListener("keydown", this._onKey);
  }

  _initSteps(root) {
    const words = Array.from(root.querySelectorAll("[data-word]"));
    words.forEach((w) => {
      w.style.transition = "color .3s ease, opacity .3s ease";
    });
    Array.from(root.querySelectorAll("[data-step]")).forEach((h) => {
      const row = h.parentElement;
      const key = h.getAttribute("data-step");
      const on = () => {
        h.style.color = "#0F0053";
        words.forEach((w) => {
          const hit = w.getAttribute("data-word") === key;
          w.style.color = hit ? "#26B7BC" : "";
          w.style.opacity = hit ? "1" : "0.35";
        });
      };
      const off = () => {
        h.style.color = "";
        words.forEach((w) => {
          w.style.color = "";
          w.style.opacity = "";
        });
      };
      (row || h).addEventListener("pointerenter", on);
      (row || h).addEventListener("pointerleave", off);
    });
  }

  _initFooter(root) {
    const top = root.querySelector("[data-to-top]");
    if (top) top.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    const dot = root.querySelector("[data-status-dot]");
    const txt = root.querySelector("[data-status-text]");
    const update = () => {
      const d = new Date();
      const open = d.getDay() >= 1 && d.getDay() <= 5 && d.getHours() >= 9 && d.getHours() < 17;
      if (dot) dot.style.background = open ? "#26B7BC" : "rgba(255,255,255,0.35)";
      if (txt) txt.textContent = (open ? "Laboratorul lucrează acum" : "Laboratorul este închis acum") + " · L–V, 09:00–17:00";
    };
    update();
    this._statusTimer = setInterval(update, 60000);
  }

  get _root() {
    return this.root || document;
  }

  _initLines(root) {
    const heads = Array.from(root.querySelectorAll("[data-lines]"));
    heads.forEach((h) => {
      if (h.dataset.linesReady === "1") return;
      const parts = h.innerHTML.split(/<br[^>]*>/i).filter((p) => p.trim() !== "");
      h.innerHTML = parts
        .map(
          (p) =>
            '<span data-line style="display:block;overflow:hidden;padding-bottom:.2em;margin-bottom:-.2em;"><span style="display:block;transform:translateY(112%);transition:transform 1s cubic-bezier(.16,.84,.2,1);">' +
            p +
            "</span></span>",
        )
        .join("");
      h.dataset.linesReady = "1";
      h.style.opacity = "1";
      h.style.transform = "none";
    });
    const reveal = (h) =>
      Array.from(h.querySelectorAll("[data-line] > span")).forEach((s, i) => {
        setTimeout(() => {
          s.style.transform = "none";
          setTimeout(() => {
            if (s.parentNode) s.parentNode.style.overflow = "visible";
          }, 1050);
        }, i * 110);
      });
    if (!("IntersectionObserver" in window)) {
      heads.forEach(reveal);
      return;
    }
    const io = new IntersectionObserver(
      (es) => {
        es.forEach((e) => {
          if (e.isIntersecting) {
            reveal(e.target);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.2 },
    );
    heads.forEach((h) => io.observe(h));
    this._lineIo = io;
    this._lineFallback = setTimeout(() => heads.forEach(reveal), 3000);
  }

  _initScroll(root) {
    const bar = root.querySelector("[data-progress]");
    const links = Array.from(root.querySelectorAll("header nav a"));
    const targets = links.map((a) => {
      const h = (a.getAttribute("href") || "").replace(/^\/(?=#)/, "");
      if (h.charAt(0) !== "#" || h.length < 2) return null;
      try {
        return root.querySelector(h);
      } catch (e) {
        return null;
      }
    });
    const parallax = Array.from(root.querySelectorAll("[data-parallax]"));
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight || 1;
      const p = Math.min(1, Math.max(0, h.scrollTop / max));
      if (bar) bar.style.width = (p * 100).toFixed(2) + "%";
      let active = -1;
      targets.forEach((t, i) => {
        if (!t) return;
        const r = t.getBoundingClientRect();
        if (r.top <= 180 && r.bottom > 180) active = i;
      });
      links.forEach((a, i) => {
        a.style.color = i === active ? "#0F0053" : "";
        a.style.borderBottom = i === active ? "1px solid #26B7BC" : "";
        a.style.paddingBottom = i === active ? "2px" : "";
      });
      const header = root.querySelector("[data-header]");
      const y = document.documentElement.scrollTop;
      if (header) {
        const down = y > (this._lastY || 0) + 6;
        const up = y < (this._lastY || 0) - 6;
        if (down && y > 220) header.style.transform = "translateY(-110%)";
        else if (up || y < 120) header.style.transform = "translateY(0)";
        if (down || up) this._lastY = y;
      }
      parallax.forEach((el) => {
        const r = el.getBoundingClientRect();
        const off = (r.top + r.height / 2 - window.innerHeight / 2) * -0.08;
        el.style.backgroundPosition = "0 " + off.toFixed(1) + "px";
      });
    };
    this._onScroll = onScroll;
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
  }

  _initMagnetic(root) {
    const els = Array.from(root.querySelectorAll("[data-magnetic]"));
    els.forEach((el) => {
      el.style.transition = "transform .35s cubic-bezier(.2,.7,.2,1), background .3s ease";
      el.style.willChange = "transform";
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
        const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
        el.style.transform = "translate(" + (dx * 10).toFixed(1) + "px," + (dy * 6).toFixed(1) + "px)";
      });
      el.addEventListener("pointerleave", () => {
        el.style.transform = "none";
      });
    });
  }

  _initCases(root) {
    const wrap = root.querySelector("[data-cases]");
    if (!wrap) return;
    const cards = Array.from(wrap.querySelectorAll("[data-case]"));
    const empty = root.querySelector("[data-cases-empty]");
    const buttons = Array.from(root.querySelectorAll("[data-filter]"));
    buttons.forEach((b) =>
      b.addEventListener("click", () => {
        const f = b.getAttribute("data-filter");
        buttons.forEach((o) => {
          const on = o === b;
          o.style.background = on ? "#0F0053" : "transparent";
          o.style.color = on ? "#FFFFFF" : "#3A3A44";
          o.style.borderColor = on ? "transparent" : "rgba(26,26,26,0.18)";
        });
        let shown = 0;
        cards.forEach((c) => {
          const ok = f === "Toate" || c.getAttribute("data-case") === f;
          c.style.display = ok ? "flex" : "none";
          if (ok) shown++;
        });
        if (empty) empty.style.display = shown ? "none" : "block";
      }),
    );
    const cur = root.querySelector("[data-drag-cursor]");
    Array.from(root.querySelectorAll("[data-ba]")).forEach((ba) => {
      if (cur) {
        ba.addEventListener("pointerenter", () => {
          cur.style.display = "flex";
        });
        ba.addEventListener("pointerleave", () => {
          cur.style.display = "none";
        });
        ba.addEventListener("pointermove", (e) => {
          cur.style.left = e.clientX + "px";
          cur.style.top = e.clientY + "px";
        });
        ba.addEventListener("pointerdown", () => {
          cur.style.background = "#26B7BC";
        });
        ba.addEventListener("pointerup", () => {
          cur.style.background = "#0F0053";
        });
      }
      const top = ba.querySelector("[data-ba-top]");
      const handle = ba.querySelector("[data-ba-handle]");
      const range = ba.querySelector("[data-ba-range]");
      const set = (v) => {
        if (top) top.style.width = v + "%";
        if (handle) handle.style.left = v + "%";
      };
      if (range) range.addEventListener("input", () => set(range.value));
      const drag = (e) => {
        const r = ba.getBoundingClientRect();
        const v = Math.min(100, Math.max(0, ((e.clientX - r.left) / r.width) * 100));
        if (range) range.value = String(v);
        set(v);
      };
      ba.addEventListener("pointerdown", (e) => {
        ba.setPointerCapture(e.pointerId);
        drag(e);
      });
      ba.addEventListener("pointermove", (e) => {
        if (e.buttons === 1) drag(e);
      });
    });
  }

  _initCompare(root) {
    const btns = Array.from(root.querySelectorAll("[data-cmp-btn]"));
    btns.forEach((b) =>
      b.addEventListener("click", () => {
        const key = b.getAttribute("data-cmp-btn");
        btns.forEach((o) => {
          const on = o === b;
          o.style.background = on ? "#0F0053" : "transparent";
          o.style.color = on ? "#FFFFFF" : "#3A3A44";
          o.style.borderColor = on ? "transparent" : "rgba(26,26,26,0.18)";
        });
        Array.from(root.querySelectorAll("[data-cmp-panel]")).forEach((p) => {
          p.style.display = p.getAttribute("data-cmp-panel") === key ? "block" : "none";
        });
      }),
    );
  }

  _initForms(root) {
    const forms = Array.from(root.querySelectorAll("form[data-form]"));
    const MESSAGES = {
      sent: {
        offer: "Mulțumim. Am primit cererea și revenim în cel mai scurt timp.",
        contact: "Mulțumim. Am primit cererea și revenim în cel mai scurt timp.",
        newsletter: "Te-ai abonat. Mulțumim.",
      },
      error: "Nu am putut trimite acum. Încearcă din nou sau scrie-ne la gabriel.musetescu@identical.ro.",
    };
    forms.forEach((form) => {
      const kind = form.getAttribute("data-form");
      const btn = form.querySelector('button[type="submit"]');
      const label = btn ? btn.textContent : "";
      const dark = !!form.closest("#contact, footer");
      const status = document.createElement("p");
      status.setAttribute("role", "status");
      status.setAttribute("aria-live", "polite");
      status.style.cssText = "display:none;margin:14px 0 0;font-size:14px;line-height:1.5;";
      form.insertAdjacentElement("afterend", status);
      const show = (text, ok) => {
        status.textContent = text;
        status.style.display = text ? "block" : "none";
        status.style.color = ok ? "inherit" : dark ? "#FF9C9C" : "#A65252";
      };
      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        if (btn && btn.disabled) return;
        const data = Object.fromEntries(new FormData(form).entries());
        const url = kind === "newsletter" ? "/api/newsletter" : "/api/leads";
        const payload =
          kind === "newsletter" ? { email: data.email, website: data.website } : { ...data, source: kind, pageUrl: location.href };
        if (btn) {
          btn.disabled = true;
          btn.textContent = "Se trimite…";
        }
        show("", true);
        try {
          const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });
          if (!res.ok) throw new Error("HTTP " + res.status);
          form.reset();
          show(MESSAGES.sent[kind], true);
        } catch (err) {
          show(MESSAGES.error, false);
        } finally {
          if (btn) {
            btn.disabled = false;
            btn.textContent = label;
          }
        }
      });
    });
  }

  unmount() {
    clearTimeout(this._fallback);
    clearTimeout(this._lineFallback);
    clearInterval(this._statusTimer);
    clearTimeout(this._maskFallback);
    clearInterval(this._tqTimer);
    if (this._onTqResize) window.removeEventListener("resize", this._onTqResize);
    if (this._maskIo) this._maskIo.disconnect();
    if (this._io) this._io.disconnect();
    if (this._lineIo) this._lineIo.disconnect();
    if (this._onScroll) {
      window.removeEventListener("scroll", this._onScroll);
      window.removeEventListener("resize", this._onScroll);
    }
    if (this._onKey) window.removeEventListener("keydown", this._onKey);
    if (this._onArticleKey) window.removeEventListener("keydown", this._onArticleKey);
    if (this._onFormKey) window.removeEventListener("keydown", this._onFormKey);
    if (this._onDrawerKey) window.removeEventListener("keydown", this._onDrawerKey);
    document.body.style.overflow = "";
  }
}

export default function SiteBehaviorsMount() {
  useEffect(() => {
    const b = new SiteBehaviors();
    b.mount();
    return () => b.unmount();
  }, []);
  return null;
}
