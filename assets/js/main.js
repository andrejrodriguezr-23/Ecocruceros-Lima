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

  /* ---- Founder video: poster -> play ---- */
  document.querySelectorAll("[data-video]").forEach(function (block) {
    block.addEventListener("click", function () {
      var src = block.getAttribute("data-video");
      if (!src) return;
      var v = document.createElement("video");
      v.src = src; v.controls = true; v.autoplay = true; v.setAttribute("playsinline", "");
      v.style.width = "100%"; v.style.height = "100%"; v.style.objectFit = "cover";
      block.innerHTML = ""; block.appendChild(v);
    });
  });
})();
