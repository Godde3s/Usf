/* Usf — shared interactions: theme, typewriter, carousel, scrollers, lang menu */
(function () {
  'use strict';

  /* ---------- theme ---------- */
  var THEME_KEY = 'usf-theme';
  function applyTheme(t) {
    document.documentElement.classList.toggle('dark', t === 'dark');
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', t === 'dark' ? '#1b1b1f' : '#ffffff');
  }
  var stored = null;
  try { stored = localStorage.getItem(THEME_KEY); } catch (e) {}
  applyTheme(stored || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
  window.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('theme-toggle');
    if (btn) btn.addEventListener('click', function () {
      var dark = document.documentElement.classList.toggle('dark');
      try { localStorage.setItem(THEME_KEY, dark ? 'dark' : 'light'); } catch (e) {}
      updateThemeIcon();
    });
    updateThemeIcon();
  });
  function updateThemeIcon() {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    var dark = document.documentElement.classList.contains('dark');
    var sun = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.5 4.9 4.9 3.5l2.1 2.1-1.4 1.4-2.1-2.1zm13.5 13.6 1.4-1.4 2.1 2.1-1.4 1.4-2.1-2.1zm2.1-15.6 1.4 1.4-2.1 2.1-1.4-1.4 2.1-2.1zM4.9 20.5l-1.4-1.4 2.1-2.1 1.4 1.4-2.1 2.1zM1 11h3v2H1v-2zm19 0h3v2h-3v-2z"/></svg>';
    var moon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 8.7A8.5 8.5 0 0 1 9.3 19c-3.9 0-7-3.1-7-7A8.5 8.5 0 0 1 14.7 2.3 6.6 6.6 0 0 0 20 8.7z"/></svg>';
    btn.innerHTML = dark ? sun : moon;
  }

  /* ---------- nav shadow ---------- */
  var nav = document.querySelector('.nav');
  function onScroll() { if (nav) nav.classList.toggle('scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- mobile menu ---------- */
  window.addEventListener('DOMContentLoaded', function () {
    var burger = document.getElementById('nav-burger');
    var links = document.getElementById('nav-links');
    if (burger && links) {
      burger.addEventListener('click', function () { links.classList.toggle('open'); });
      links.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () { links.classList.remove('open'); });
      });
    }
  });

  /* ---------- language menu ---------- */
  window.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('lang-btn');
    var menu = document.getElementById('lang-menu');
    if (btn && menu) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        menu.classList.toggle('open');
      });
      document.addEventListener('click', function (e) {
        if (!menu.contains(e.target)) menu.classList.remove('open');
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') menu.classList.remove('open');
      });
    }
  });

  /* ---------- typewriter ---------- */
  window.addEventListener('DOMContentLoaded', function () {
    var el = document.getElementById('typed');
    if (!el) return;
    var words = [];
    try { words = JSON.parse(el.getAttribute('data-words')); } catch (e) { return; }
    if (!words.length) return;
    var wi = 0, ci = 0, deleting = false;
    var TYPE_MS = 62, DELETE_MS = 26, HOLD_MS = 2100;
    function tick() {
      var word = words[wi];
      if (!deleting) {
        ci++;
        el.textContent = word.slice(0, ci);
        if (ci === word.length) { deleting = true; return setTimeout(tick, HOLD_MS); }
        setTimeout(tick, TYPE_MS);
      } else {
        ci--;
        el.textContent = word.slice(0, ci);
        if (ci === 0) { deleting = false; wi = (wi + 1) % words.length; return setTimeout(tick, 420); }
        setTimeout(tick, DELETE_MS);
      }
    }
    setTimeout(tick, 500);
  });

  /* ---------- stories carousel ---------- */
  window.addEventListener('DOMContentLoaded', function () {
    var carousel = document.getElementById('stories');
    if (!carousel) return;
    var slides = carousel.querySelectorAll('.story-slide');
    var dotsBox = carousel.parentElement.querySelector('.carousel-dots');
    if (slides.length < 2) return;
    var idx = 0, timer = null, DELAY = 5200;
    slides.forEach(function (s, i) { s.style.display = i === 0 ? '' : 'none'; });
    if (dotsBox) {
      slides.forEach(function (_, i) {
        var b = document.createElement('button');
        b.setAttribute('aria-label', (i + 1));
        if (i === 0) b.className = 'active';
        b.addEventListener('click', function () { go(i, true); });
        dotsBox.appendChild(b);
      });
    }
    function go(n, manual) {
      idx = (n + slides.length) % slides.length;
      slides.forEach(function (s, i) { s.style.display = i === idx ? '' : 'none'; });
      if (dotsBox) dotsBox.querySelectorAll('button').forEach(function (b, i) {
        b.classList.toggle('active', i === idx);
      });
      if (manual) restart();
    }
    function restart() { clearInterval(timer); timer = setInterval(function () { go(idx + 1); }, DELAY); }
    restart();
    var x0 = null;
    carousel.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    carousel.addEventListener('touchend', function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 48) go(idx + (dx < 0 ? 1 : -1), true);
      x0 = null;
    }, { passive: true });
  });

  /* ---------- horizontal scrollers (projects + skills) ---------- */
  window.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-scroller]').forEach(function (box) {
      var row = box.querySelector('.scroll-row, .skills-scroll');
      var prev = box.querySelector('.scroll-btn.prev');
      var next = box.querySelector('.scroll-btn.next');
      var bar = box.querySelector('.scroll-progress .bar');
      if (!row) return;
      var RTL = document.documentElement.getAttribute('dir') === 'rtl';
      function step() { return Math.max(row.clientWidth * 0.72, 280); }
      function scrollBy(dir) {
        row.scrollBy({ left: dir * step() * (RTL ? -1 : 1), behavior: 'smooth' });
      }
      if (prev) prev.addEventListener('click', function () { scrollBy(-1); });
      if (next) next.addEventListener('click', function () { scrollBy(1); });
      function updateBar() {
        if (!bar) return;
        var max = row.scrollWidth - row.clientWidth;
        var pct = max > 0 ? row.scrollLeft < 0 ? -row.scrollLeft : row.scrollLeft : 0;
        var r = max > 0 ? Math.min(Math.max(Math.abs(pct) / max, 0), 1) : 1;
        bar.style.width = (25 + r * 75) + '%';
      }
      row.addEventListener('scroll', updateBar, { passive: true });
      updateBar();
    });
  });

  /* ---------- reveal on scroll ---------- */
  window.addEventListener('DOMContentLoaded', function () {
    var els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(function (el) { io.observe(el); });
  });

  /* ---------- year ---------- */
  window.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.yr').forEach(function (el) { el.textContent = new Date().getFullYear(); });
  });
})();
