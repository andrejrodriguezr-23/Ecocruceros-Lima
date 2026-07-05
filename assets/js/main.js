/* Ecocruceros — vanilla JS (no framework). Progressive enhancement. */
(function () {
  "use strict";

  /* ---- Mobile drawer ---- */
  var toggle = document.querySelector("[data-nav-toggle]");
  var drawer = document.querySelector("[data-drawer]");
  if (toggle && drawer) {
    var close = drawer.querySelector("[data-drawer-close]");
    function setDrawer(open) {
      drawer.setAttribute("data-open", open ? "true" : "false");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
      if (open) { var f = drawer.querySelector("a,button"); if (f) f.focus(); }
    }
    toggle.addEventListener("click", function () { setDrawer(drawer.getAttribute("data-open") !== "true"); });
    if (close) close.addEventListener("click", function () { setDrawer(false); toggle.focus(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && drawer.getAttribute("data-open") === "true") { setDrawer(false); toggle.focus(); } });
  }

  /* ---- Desktop dropdowns (click + hover + keyboard) ---- */
  document.querySelectorAll(".nav-group").forEach(function (group) {
    var btn = group.querySelector("button");
    if (!btn) return;
    function open(o) { group.setAttribute("data-open", o ? "true" : "false"); btn.setAttribute("aria-expanded", o ? "true" : "false"); }
    btn.addEventListener("click", function () { open(group.getAttribute("data-open") !== "true"); });
    group.addEventListener("mouseenter", function () { open(true); });
    group.addEventListener("mouseleave", function () { open(false); });
    group.addEventListener("keydown", function (e) { if (e.key === "Escape") { open(false); btn.focus(); } });
    document.addEventListener("click", function (e) { if (!group.contains(e.target)) open(false); });
  });

  /* ---- Pricing tabs ---- */
  document.querySelectorAll("[data-price-tabs]").forEach(function (wrap) {
    var tabs = wrap.querySelectorAll("[role=tab]");
    var panels = wrap.querySelectorAll("[role=tabpanel]");
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        tabs.forEach(function (t) { t.setAttribute("aria-selected", "false"); });
        panels.forEach(function (p) { p.hidden = true; });
        tab.setAttribute("aria-selected", "true");
        var panel = wrap.querySelector("#" + tab.getAttribute("aria-controls"));
        if (panel) panel.hidden = false;
      });
    });
  });

  /* ---- Rotating hero taglines (auto-advancing marquee of phrases) ---- */
  document.querySelectorAll("[data-rotator]").forEach(function (rot) {
    var items = rot.querySelectorAll(".rot");
    if (items.length < 2) return;
    var i = 0;
    var delay = parseInt(rot.getAttribute("data-interval"), 10) || 4500;
    setInterval(function () {
      items[i].classList.remove("is-on");
      i = (i + 1) % items.length;
      items[i].classList.add("is-on");
    }, delay);
  });

  /* ---- Lightbox: click any .zoomable image to enlarge (client request) ---- */
  (function () {
    var box = document.createElement("div");
    box.className = "lightbox";
    box.setAttribute("data-open", "false");
    box.innerHTML =
      '<button class="lightbox__close" aria-label="Cerrar / Close">&times;</button>' +
      '<img alt=""><p class="lightbox__cap"></p>';
    var img = box.querySelector("img");
    var cap = box.querySelector(".lightbox__cap");
    var closeBtn = box.querySelector(".lightbox__close");
    var added = false;
    function open(src, alt) {
      if (!added) { document.body.appendChild(box); added = true; }
      img.src = src; img.alt = alt || ""; cap.textContent = alt || "";
      box.setAttribute("data-open", "true");
      document.body.style.overflow = "hidden";
      closeBtn.focus();
    }
    function close() {
      box.setAttribute("data-open", "false");
      document.body.style.overflow = "";
      img.src = "";
    }
    document.addEventListener("click", function (e) {
      var z = e.target.closest(".zoomable");
      if (z && z.tagName === "IMG") { open(z.getAttribute("data-full") || z.currentSrc || z.src, z.alt); return; }
      if (e.target === box || e.target === closeBtn) close();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && box.getAttribute("data-open") === "true") close();
    });
  })();

  /* ---- Reviews carousel (arrows scroll one card left/right) ---- */
  document.querySelectorAll("[data-carousel]").forEach(function (c) {
    var track = c.querySelector("[data-carousel-track]");
    if (!track) return;
    var prev = c.querySelector("[data-carousel-prev]");
    var next = c.querySelector("[data-carousel-next]");
    function step() {
      var slide = track.querySelector(".review-slide");
      return slide ? slide.getBoundingClientRect().width + 16 : track.clientWidth;
    }
    if (prev) prev.addEventListener("click", function () { track.scrollBy({ left: -step(), behavior: "smooth" }); });
    if (next) next.addEventListener("click", function () { track.scrollBy({ left: step(), behavior: "smooth" }); });
  });

  /* ---- Scroll reveal (respects reduced motion) ---- */
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var reveals = document.querySelectorAll(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ---- Fauna cards: mark missing photos so a branded placeholder shows ---- */
  document.querySelectorAll(".fauna-card__media img").forEach(function (img) {
    function mark() { var c = img.closest(".fauna-card"); if (c) c.classList.add("is-empty"); }
    if (img.complete && img.naturalWidth === 0) mark();
    img.addEventListener("error", mark);
  });

  /* ---- Fauna detail modal (tap a species card to expand its info) ---- */
  (function () {
    var modal = document.querySelector("[data-fmodal]");
    if (!modal) return;
    var panel = modal.querySelector("[data-fmodal-panel]");
    var closeBtn = modal.querySelector("[data-fmodal-close]");
    var lastFocus = null;
    function open(slug) {
      var detail = document.querySelector('.fauna-detail[data-detail="' + slug + '"]');
      if (!detail) return;
      var old = panel.querySelector(".fauna-detail-mount");
      if (old) old.remove();
      var mount = document.createElement("div");
      mount.className = "fauna-detail-mount";
      mount.innerHTML = detail.innerHTML;
      panel.appendChild(mount);
      modal.setAttribute("data-open", "true");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      lastFocus = document.activeElement;
      closeBtn.focus();
    }
    function close() {
      modal.setAttribute("data-open", "false");
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }
    document.addEventListener("click", function (e) {
      var card = e.target.closest("[data-fauna]");
      if (card) { open(card.getAttribute("data-fauna")); return; }
      if (e.target === modal || e.target.closest("[data-fmodal-close]")) close();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modal.getAttribute("data-open") === "true") close();
    });
  })();

  /* ---- Count-up numbers (animate stats into view) ---- */
  (function () {
    var els = document.querySelectorAll("[data-count]");
    if (!els.length) return;
    function fmt(n, el) {
      var s = Math.round(n).toLocaleString(el.getAttribute("data-locale") || "en-US");
      return (el.getAttribute("data-prefix") || "") + s + (el.getAttribute("data-suffix") || "");
    }
    function run(el) {
      var target = parseFloat(el.getAttribute("data-count"));
      if (isNaN(target)) return;
      if (reduce) { el.textContent = fmt(target, el); return; }
      var dur = 1100, start = null;
      function stepFn(ts) {
        if (!start) start = ts;
        var p = Math.min((ts - start) / dur, 1);
        el.textContent = fmt(target * (1 - Math.pow(1 - p, 3)), el);
        if (p < 1) requestAnimationFrame(stepFn);
      }
      requestAnimationFrame(stepFn);
    }
    if (!("IntersectionObserver" in window)) { els.forEach(run); return; }
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { run(en.target); cio.unobserve(en.target); } });
    }, { threshold: 0.4 });
    els.forEach(function (el) { cio.observe(el); });
  })();

  /* ---- WhatsApp click tracking hook (inert until analytics added) ---- */
  document.addEventListener("click", function (e) {
    var a = e.target.closest('a[href*="wa.me"]');
    if (!a) return;
    var detail = { page: location.pathname, lang: document.documentElement.lang, section: a.getAttribute("data-wa-source") || "unknown" };
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "whatsapp_click", whatsapp: detail });
    document.dispatchEvent(new CustomEvent("wa:click", { detail: detail }));
  });
})();
