/* ============================================================
   La DegOsteria — motion, 3D, scrollytelling & interaction
   ============================================================ */

(function () {
  "use strict";

  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var isTouch = window.matchMedia("(hover: none)").matches;
  var isSmall = window.matchMedia("(max-width: 820px)").matches;
  var hasGSAP = typeof window.gsap !== "undefined";
  var hasST = hasGSAP && typeof window.ScrollTrigger !== "undefined";

  if (hasST) gsap.registerPlugin(ScrollTrigger);

  /* ---------- Smooth scroll ---------- */
  var lenis = null;
  if (!prefersReduced && !isTouch && typeof window.Lenis !== "undefined" && hasST) {
    document.documentElement.style.scrollBehavior = "auto";
    lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 1.0 });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);
  }

  /* ---------- WebGL particle field ---------- */
  var field = { uniforms: null, warmTarget: 0.62, warmHover: null, glowTarget: 1, scroll: 0 };

  function initField() {
    if (prefersReduced || typeof window.THREE === "undefined") { document.body.classList.add("no-webgl"); return; }
    var canvas = document.getElementById("field");
    var renderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: false, powerPreference: "low-power" });
    } catch (e) { document.body.classList.add("no-webgl"); return; }

    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    renderer.setPixelRatio(dpr);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 200);
    camera.position.set(0, 0, 30);

    var count = window.innerWidth < 760 ? 2200 : 5200;
    var positions = new Float32Array(count * 3);
    var seeds = new Float32Array(count);
    var sizes = new Float32Array(count);
    for (var i = 0; i < count; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 56;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 36;
      seeds[i] = Math.random();
      sizes[i] = 0.6 + Math.pow(Math.random(), 2.2) * 2.4;
    }
    var geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("aSeed", new THREE.BufferAttribute(seeds, 1));
    geometry.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));

    var uniforms = {
      uTime: { value: 0 }, uPixelRatio: { value: dpr }, uWarm: { value: 0.62 }, uIntensity: { value: 1.0 },
      uDrift: { value: new THREE.Vector2(0, 0) }, uEmber: { value: new THREE.Color(0xe2a45f) }, uSea: { value: new THREE.Color(0x4d9c8d) }
    };
    field.uniforms = uniforms;

    var material = new THREE.ShaderMaterial({
      uniforms: uniforms, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      vertexShader: [
        "uniform float uTime;", "uniform float uPixelRatio;", "uniform float uIntensity;", "uniform vec2 uDrift;",
        "attribute float aSeed;", "attribute float aSize;", "varying float vSeed;", "varying float vFade;",
        "void main() {",
        "  vec3 p = position;", "  float t = uTime;",
        "  float dir = mix(-0.4, 1.0, step(0.45, aSeed));",
        "  p.y = mod(position.y + t * (0.35 + aSeed * 0.55) * dir + 84.0, 56.0) - 28.0;",
        "  p.x += sin(t * 0.35 + p.y * 0.16 + aSeed * 6.2831) * 1.7;",
        "  p.z += cos(t * 0.27 + p.x * 0.11 + aSeed * 3.1415) * 1.3;",
        "  float a = t * 0.03 + aSeed * 0.35;", "  float ca = cos(a); float sa = sin(a);",
        "  p.xz = mat2(ca, -sa, sa, ca) * p.xz;",
        "  p.x += uDrift.x * (1.0 + aSeed * 2.4);", "  p.y += uDrift.y * (1.0 + aSeed * 2.4);",
        "  vec4 mv = modelViewMatrix * vec4(p, 1.0);", "  gl_Position = projectionMatrix * mv;",
        "  gl_PointSize = max(aSize * uPixelRatio * (26.0 / -mv.z), 1.0);",
        "  vSeed = aSeed;", "  vFade = (1.0 - smoothstep(20.0, 28.0, abs(p.y))) * uIntensity;",
        "}"
      ].join("\n"),
      fragmentShader: [
        "uniform float uWarm;", "uniform vec3 uEmber;", "uniform vec3 uSea;", "varying float vSeed;", "varying float vFade;",
        "void main() {",
        "  vec2 c = gl_PointCoord - 0.5;", "  float d = length(c);", "  float alpha = smoothstep(0.5, 0.06, d);",
        "  float warm = clamp(uWarm + (vSeed - 0.5) * 0.7, 0.0, 1.0);", "  vec3 col = mix(uSea, uEmber, warm);",
        "  col += warm * smoothstep(0.16, 0.0, d) * 0.55;",
        "  gl_FragColor = vec4(col, alpha * vFade * 0.8);",
        "}"
      ].join("\n")
    });

    scene.add(new THREE.Points(geometry, material));

    var mouse = { x: 0, y: 0 };
    if (!isTouch) {
      window.addEventListener("mousemove", function (e) {
        mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
        mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
      }, { passive: true });
    }
    window.addEventListener("resize", function () {
      camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    var clock = new THREE.Clock();
    var warm = 0.62, glow = 1.0;
    function tick() {
      var t = clock.getElapsedTime();
      uniforms.uTime.value = t;
      var warmGoal = field.warmHover !== null ? field.warmHover : field.warmTarget;
      warm += (warmGoal - warm) * 0.035; glow += (field.glowTarget - glow) * 0.045;
      uniforms.uWarm.value = warm; uniforms.uIntensity.value = glow;
      uniforms.uDrift.value.x += (mouse.x * 2.2 - uniforms.uDrift.value.x) * 0.04;
      uniforms.uDrift.value.y += (mouse.y * 1.4 - uniforms.uDrift.value.y) * 0.04;
      var sp = field.scroll;
      camera.position.z = 30 - sp * 7; camera.position.y = -sp * 3.2; camera.rotation.z = sp * 0.16;
      renderer.render(scene, camera);
      requestAnimationFrame(tick);
    }
    tick();
  }
  initField();

  function updateScrollProgress() {
    var max = document.documentElement.scrollHeight - window.innerHeight;
    field.scroll = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
  }
  window.addEventListener("scroll", updateScrollProgress, { passive: true });
  updateScrollProgress();

  /* ---------- per-section warmth ---------- */
  document.querySelectorAll("[data-warm]").forEach(function (sec) {
    var warmValue = parseFloat(sec.getAttribute("data-warm"));
    var glowValue = parseFloat(sec.getAttribute("data-glow") || "0.5");
    if (hasST) {
      ScrollTrigger.create({
        trigger: sec, start: "top 55%", end: "bottom 45%",
        onToggle: function (self) { if (self.isActive) { field.warmTarget = warmValue; field.glowTarget = glowValue; } }
      });
    }
  });
  document.querySelectorAll("[data-warm-hover]").forEach(function (el) {
    var v = parseFloat(el.getAttribute("data-warm-hover"));
    el.addEventListener("mouseenter", function () { field.warmHover = v; });
    el.addEventListener("mouseleave", function () { field.warmHover = null; });
  });

  /* ---------- Scroll choreography ---------- */
  if (hasGSAP && !prefersReduced) {

    // hero entrance
    var heroLines = document.querySelectorAll(".hero-title .line > span");
    gsap.set(heroLines, { yPercent: 110 });
    gsap.set(".hero .reveal", { autoAlpha: 0, y: 26 });
    gsap.set(".site-header", { autoAlpha: 0, y: -16 });
    gsap.set(".hero-stage", { autoAlpha: 0, scale: 0.92 });
    gsap.set(".scroll-cue", { autoAlpha: 0 });

    gsap.timeline({ defaults: { ease: "expo.out" } })
      .to(heroLines, { yPercent: 0, duration: 1.4, stagger: 0.12 }, 0.25)
      .to(".hero .reveal", { autoAlpha: 1, y: 0, duration: 1.1, stagger: 0.12 }, 0.7)
      .to(".hero-stage", { autoAlpha: 1, scale: 1, duration: 1.4 }, 0.6)
      .to(".site-header", { autoAlpha: 1, y: 0, duration: 0.9 }, 1.0)
      .to(".scroll-cue", { autoAlpha: 1, duration: 0.9 }, 1.3);

    if (hasST) {
      // hero stage glides away on scroll, returns on scroll-up (scrub).
      // fromTo + immediateRender:false so the scrub starts from the VISIBLE state
      // (otherwise it captures the entrance's autoAlpha:0 and never restores).
      gsap.fromTo(".hero-stage",
        { yPercent: 0, xPercent: 0, autoAlpha: 1, scale: 1 },
        { yPercent: -42, xPercent: 14, autoAlpha: 0, scale: 0.8, ease: "none", immediateRender: false,
          scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 0.6 } });
      gsap.fromTo(".hero-copy",
        { yPercent: 0, autoAlpha: 1 },
        { yPercent: -16, autoAlpha: 0.15, ease: "none", immediateRender: false,
          scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 0.6 } });

      // masked line reveals below the hero
      document.querySelectorAll("main .line > span").forEach(function (span) {
        if (span.closest(".hero")) return;
        gsap.fromTo(span, { yPercent: 110 }, {
          yPercent: 0, duration: 1.3, ease: "expo.out",
          scrollTrigger: { trigger: span.closest(".line"), start: "top 88%" }
        });
      });

      // fade-up reveals
      document.querySelectorAll("main .reveal, .degostreet .reveal").forEach(function (el) {
        if (el.closest(".hero")) return;
        gsap.fromTo(el, { autoAlpha: 0, y: 30 }, {
          autoAlpha: 1, y: 0, duration: 1.1, ease: "quart.out",
          scrollTrigger: { trigger: el, start: "top 88%" }
        });
      });

      // image curtain reveals
      document.querySelectorAll(".reveal-img").forEach(function (fig) {
        gsap.fromTo(fig, { clipPath: "inset(0 0 100% 0)" }, {
          clipPath: "inset(0 0 0% 0)", duration: 1.5, ease: "expo.out",
          scrollTrigger: { trigger: fig, start: "top 85%" }
        });
      });

      /* ----- LA STORIA: pinned scrollytelling ----- */
      setupStoria();

      /* ----- TERRA & MARE: sequential panel reveal ----- */
      gsap.utils.toArray(".diptych .flip").forEach(function (panel, i) {
        gsap.fromTo(panel, { autoAlpha: 0, y: 60 }, {
          autoAlpha: 1, y: 0, duration: 1.2, ease: "expo.out", delay: i * 0.18,
          scrollTrigger: { trigger: ".diptych", start: "top 78%" }
        });
      });

      // dish rows cascade
      document.querySelectorAll(".menu-panel").forEach(function (panel) {
        gsap.fromTo(panel.querySelectorAll(".dish"), { autoAlpha: 0, y: 18 }, {
          autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.06, ease: "quart.out",
          scrollTrigger: { trigger: "#cucina .menu-panels", start: "top 80%" }
        });
      });

      // wine: scroll-active highlight
      document.querySelectorAll(".wine").forEach(function (w) {
        ScrollTrigger.create({
          trigger: w, start: "top 62%", end: "bottom 42%",
          onToggle: function (self) { w.classList.toggle("is-active", self.isActive); }
        });
      });

      // signature parallax
      var parallaxImg = document.querySelector("[data-parallax]");
      if (parallaxImg) {
        gsap.fromTo(parallaxImg, { yPercent: -10 }, {
          yPercent: 10, ease: "none",
          scrollTrigger: { trigger: ".firma-band", start: "top bottom", end: "bottom top", scrub: true }
        });
      }
    }
  } else {
    document.querySelectorAll(".reveal, .reveal-img, .flip, .hero-stage").forEach(function (el) { el.style.opacity = "1"; });
    document.querySelector(".storia").classList.add("no-pin");
    document.querySelectorAll(".founder").forEach(function (f) { f.classList.add("is-active"); });
  }

  /* ---------- LA STORIA pinned logic ---------- */
  function setupStoria() {
    var storia = document.querySelector(".storia");
    if (!storia) return;
    var stage = storia.querySelector(".storia-stage");
    var imgA = stage.querySelector(".s-img-a");
    var imgB = stage.querySelector(".s-img-b");
    var fLayers = Array.prototype.slice.call(stage.querySelectorAll(".s-founder"));
    var fRows = Array.prototype.slice.call(storia.querySelectorAll(".founder"));

    // small screens: no pin, everything readable
    if (isSmall) {
      storia.classList.add("no-pin");
      fRows.forEach(function (r) { r.classList.add("is-active"); });
      return;
    }

    function setPhase(p) {
      var inFounders = p >= 0.36;
      imgA.classList.toggle("is-active", !inFounders);
      imgB.classList.toggle("is-active", p >= 0.18 && !inFounders);
      var fi = -1;
      if (inFounders) fi = Math.min(2, Math.floor((p - 0.36) / ((1 - 0.36) / 3)));
      fLayers.forEach(function (l, i) { l.classList.toggle("is-active", i === fi); });
      fRows.forEach(function (r, i) { r.classList.toggle("is-active", i === fi); });
    }
    setPhase(0);

    ScrollTrigger.create({
      trigger: storia, start: "top top", end: "+=" + Math.round(window.innerHeight * 3),
      pin: ".storia-pin", pinSpacing: true, scrub: 0.4,
      onUpdate: function (self) { setPhase(self.progress); },
      onRefreshInit: function () { setPhase(0); }
    });
  }

  /* ---------- Flip cards (Terra & Mare) ---------- */
  document.querySelectorAll(".flip").forEach(function (card) {
    var trigger = card.querySelector(".flip-trigger");
    var close = card.querySelector(".flip-close");
    var back = card.querySelector(".flip-back");
    var video = card.querySelector(".prep-video");

    function flip() {
      card.classList.add("is-flipped");
      if (video) {
        var playP = video.play();
        if (playP && playP.catch) playP.catch(function () {});
        video.addEventListener("playing", function onPlay() { back.classList.add("has-video"); video.removeEventListener("playing", onPlay); });
      }
    }
    function unflip() {
      card.classList.remove("is-flipped");
      if (video) { try { video.pause(); } catch (e) {} }
    }
    if (trigger) trigger.addEventListener("click", flip);
    if (close) close.addEventListener("click", unflip);
  });

  /* ---------- Wine flip ---------- */
  document.querySelectorAll(".wine").forEach(function (w) {
    var name = w.querySelector(".wine-name");
    var close = w.querySelector(".wine-close");
    if (name) name.addEventListener("click", function () { w.classList.toggle("is-flipped"); });
    if (close) close.addEventListener("click", function () { w.classList.remove("is-flipped"); });
  });

  /* ---------- Header state ---------- */
  var header = document.querySelector(".site-header");
  function onScrollHeader() { header.classList.toggle("scrolled", window.scrollY > 40); }
  window.addEventListener("scroll", onScrollHeader, { passive: true });
  onScrollHeader();

  /* ---------- Mobile nav ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var mobileNav = document.getElementById("mobile-nav");
  mobileNav.removeAttribute("hidden");   // class-driven from here, so the drawer can animate
  function navOpen() { return mobileNav.classList.contains("open"); }
  function closeNav() {
    toggle.setAttribute("aria-expanded", "false");
    mobileNav.classList.remove("open"); document.body.style.overflow = "";
  }
  function openNav() {
    toggle.setAttribute("aria-expanded", "true");
    mobileNav.classList.add("open"); document.body.style.overflow = "hidden";
    if (hasGSAP && !prefersReduced) {
      gsap.fromTo(mobileNav.querySelectorAll("a, .btn, .lang-row"), { autoAlpha: 0, x: 30 },
        { autoAlpha: 1, x: 0, duration: 0.55, stagger: 0.06, delay: 0.14, ease: "expo.out" });
    }
  }
  toggle.addEventListener("click", function () { navOpen() ? closeNav() : openNav(); });
  mobileNav.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", closeNav); });
  mobileNav.addEventListener("click", function (e) { if (e.target === mobileNav) closeNav(); }); // tap scrim to close
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && navOpen()) closeNav(); });

  /* ---------- Menu tabs ---------- */
  var tablist = document.querySelector(".menu-tabs");
  var tabs = Array.prototype.slice.call(tablist.querySelectorAll("[role='tab']"));
  var ink = tablist.querySelector(".tab-ink");
  function positionInk(tab) { if (!tab) return; ink.style.left = tab.offsetLeft + "px"; ink.style.width = tab.offsetWidth + "px"; }
  function currentTab() { return tabs.filter(function (t) { return t.getAttribute("aria-selected") === "true"; })[0] || tabs[0]; }
  function selectTab(tab) {
    tabs.forEach(function (t) {
      var selected = t === tab;
      t.setAttribute("aria-selected", selected ? "true" : "false");
      t.tabIndex = selected ? 0 : -1;
      var panel = document.getElementById(t.getAttribute("aria-controls"));
      if (selected) {
        panel.hidden = false;
        if (hasGSAP && !prefersReduced) {
          gsap.fromTo(panel, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.6, ease: "quart.out" });
          gsap.fromTo(panel.querySelectorAll(".dish"), { autoAlpha: 0, y: 12 },
            { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.04, ease: "quart.out" });
        }
      } else { panel.hidden = true; }
    });
    positionInk(tab);
  }
  tabs.forEach(function (tab, idx) {
    tab.addEventListener("click", function () { selectTab(tab); });
    tab.addEventListener("keydown", function (e) {
      var next = null;
      if (e.key === "ArrowRight") next = tabs[(idx + 1) % tabs.length];
      if (e.key === "ArrowLeft") next = tabs[(idx - 1 + tabs.length) % tabs.length];
      if (e.key === "Home") next = tabs[0];
      if (e.key === "End") next = tabs[tabs.length - 1];
      if (next) { e.preventDefault(); next.focus(); selectTab(next); }
    });
  });
  positionInk(tabs[0]);
  window.addEventListener("resize", function () { positionInk(currentTab()); });

  /* ---------- Booking ---------- */
  var booking = document.getElementById("booking");
  var bookingForm = booking ? booking.querySelector(".booking-form") : null;
  var bookingSuccess = booking ? booking.querySelector(".booking-success") : null;

  function openBooking() {
    if (!booking) return;
    booking.hidden = false;
    if (bookingForm) bookingForm.hidden = false;
    if (bookingSuccess) bookingSuccess.hidden = true;
    var target = document.getElementById("prenota");
    if (lenis && target) lenis.scrollTo(target, { offset: -40, duration: 1.2 });
    else if (target) target.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "center" });
    if (hasST) setTimeout(function () { ScrollTrigger.refresh(); }, 700);
  }
  document.querySelectorAll("[data-open-booking]").forEach(function (b) {
    b.addEventListener("click", function (e) { e.preventDefault(); openBooking(); if (navOpen()) closeNav(); });
  });
  if (booking) {
    var bx = booking.querySelector(".booking-x");
    if (bx) bx.addEventListener("click", function () { booking.hidden = true; if (hasST) ScrollTrigger.refresh(); });
    if (bookingForm) bookingForm.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!bookingForm.checkValidity()) { bookingForm.reportValidity(); return; }
      bookingForm.hidden = true; bookingSuccess.hidden = false;
    });
    var reset = booking.querySelector(".booking-reset");
    if (reset) reset.addEventListener("click", function () { bookingSuccess.hidden = true; bookingForm.hidden = false; bookingForm.reset(); });
  }

  /* ---------- Language switcher ---------- */
  var langWrap = document.querySelector("[data-lang-switch]");
  var langBtn = langWrap ? langWrap.querySelector(".lang-btn") : null;
  var langCur = langWrap ? langWrap.querySelector(".lang-cur") : null;

  function setLang(lang) {
    if (window.DegoI18N) window.DegoI18N.apply(lang);
    if (langWrap) langWrap.classList.remove("open");
    if (langBtn) langBtn.setAttribute("aria-expanded", "false");
    // realign UI that depends on text width
    setTimeout(function () { positionInk(currentTab()); if (hasST) ScrollTrigger.refresh(); }, 60);
  }
  if (langBtn) {
    langBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = langWrap.classList.toggle("open");
      langBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("click", function () { langWrap.classList.remove("open"); langBtn.setAttribute("aria-expanded", "false"); });
  }
  document.querySelectorAll("[data-lang]").forEach(function (b) {
    b.addEventListener("click", function (e) { e.stopPropagation(); setLang(b.getAttribute("data-lang")); if (navOpen()) closeNav(); });
  });
  document.addEventListener("dego:langchange", function (e) {
    if (langCur) langCur.textContent = e.detail.lang.toUpperCase();
  });
  if (langCur && window.DegoI18N) langCur.textContent = window.DegoI18N.current.toUpperCase();

  /* ---------- Chatbot (demo) ---------- */
  (function chatbot() {
    var root = document.getElementById("chat");
    if (!root) return;
    var launch = root.querySelector(".chat-launch");
    var panel = document.getElementById("chat-panel");
    var log = root.querySelector(".chat-log");
    var form = root.querySelector(".chat-input");
    var input = form.querySelector("input");
    var greeted = false;

    var T = function (k) { return window.DegoI18N ? window.DegoI18N.t(k) : k; };

    var INTENTS = [
      { key: "chat.a_hours", words: ["orari", "ora", "apert", "open", "hour", "horaire", "ouvert", "öffnung", "offnung", "zeit", "geöffnet", "geoffnet"] },
      { key: "chat.a_book", words: ["preno", "book", "reserv", "réserv", "reserv", "tisch", "tavolo", "table", "buchen"] },
      { key: "chat.a_wine", words: ["vino", "vini", "wine", "vin", "wein", "verdicchio", "passerina", "pecorino", "cantina", "cellar", "cave", "keller"] },
      { key: "chat.a_menu", words: ["menu", "menù", "menu", "carta", "piatt", "dish", "plat", "gericht", "karte", "mangia", "eat", "food", "essen", "manger"] },
      { key: "chat.a_where", words: ["dove", "where", "indiriz", "address", "adresse", "wo ", "via ", "map", "arriv", "find", "trouv", "weg", "komme"] }
    ];

    function addMsg(text, who) {
      var el = document.createElement("div");
      el.className = "chat-msg " + who;
      el.innerHTML = text;
      log.appendChild(el);
      log.scrollTop = log.scrollHeight;
      return el;
    }
    function typing() {
      var el = document.createElement("div");
      el.className = "chat-typing";
      el.innerHTML = "<span></span><span></span><span></span>";
      log.appendChild(el); log.scrollTop = log.scrollHeight;
      return el;
    }
    function answerFor(text) {
      var low = " " + text.toLowerCase() + " ";
      for (var i = 0; i < INTENTS.length; i++) {
        for (var j = 0; j < INTENTS[i].words.length; j++) {
          if (low.indexOf(INTENTS[i].words[j]) > -1) return T(INTENTS[i].key);
        }
      }
      return T("chat.a_default");
    }
    function botSay(text) {
      var dots = typing();
      setTimeout(function () {
        dots.remove();
        addMsg(text, "bot");
      }, 650 + Math.random() * 500);
    }
    function userSend(text) {
      if (!text.trim()) return;
      addMsg(text.replace(/</g, "&lt;"), "user");
      botSay(answerFor(text));
    }

    function open() {
      root.classList.add("open");
      panel.hidden = false;
      launch.setAttribute("aria-expanded", "true");
      if (!greeted) { greeted = true; botSay(T("chat.greeting")); }
      setTimeout(function () { input.focus(); }, 200);
    }
    function close() { root.classList.remove("open"); panel.hidden = true; launch.setAttribute("aria-expanded", "false"); }

    launch.addEventListener("click", function () { root.classList.contains("open") ? close() : open(); });
    form.addEventListener("submit", function (e) { e.preventDefault(); userSend(input.value); input.value = ""; });
    root.querySelectorAll(".chat-quick button").forEach(function (b) {
      var map = { hours: "chat.a_hours", book: "chat.a_book", menu: "chat.a_menu", where: "chat.a_where" };
      b.addEventListener("click", function () {
        addMsg(b.textContent, "user");
        botSay(T(map[b.getAttribute("data-intent")]));
      });
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && root.classList.contains("open")) close(); });
  })();

  /* ---------- Anchor scrolling ---------- */
  if (lenis) {
    document.querySelectorAll("a[href^='#']").forEach(function (a) {
      a.addEventListener("click", function (e) {
        var id = a.getAttribute("href");
        if (id.length > 1 && document.querySelector(id)) {
          e.preventDefault();
          lenis.scrollTo(id, { offset: -70, duration: 1.4 });
        }
      });
    });
  }

  /* ---------- Footer year ---------- */
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  window.__dego = { lenis: lenis, field: field };
})();
