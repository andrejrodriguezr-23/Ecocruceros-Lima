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
