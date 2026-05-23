// STEL — subtle interactivity
(function () {
  'use strict';

  // ---------- Year in footer ----------
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---------- Header: scrolled state + hide-on-scroll-down ----------
  var header = document.getElementById('siteHeader');
  var lastY = window.scrollY;
  var ticking = false;

  function onScroll() {
    var y = window.scrollY;
    if (!header) return;

    if (y > 24) header.classList.add('is-scrolled');
    else header.classList.remove('is-scrolled');

    // hide when scrolling down past the hero, show when scrolling up
    if (y > 320 && y > lastY + 6) {
      header.classList.add('is-hidden');
    } else if (y < lastY - 4) {
      header.classList.remove('is-hidden');
    }
    lastY = y;
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });

  // ---------- Scroll reveal ----------
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var reveals = document.querySelectorAll('.reveal');

  if (reduced || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('in-view'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach(function (el) { io.observe(el); });
  }

  // ---------- FAQ: close other open <details> when one opens ----------
  var allDetails = document.querySelectorAll('.faq-list details');
  allDetails.forEach(function (d) {
    d.addEventListener('toggle', function () {
      if (d.open) {
        allDetails.forEach(function (other) {
          if (other !== d) other.open = false;
        });
      }
    });
  });

  // ---------- Smooth scroll polish for anchor links ----------
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href');
      if (id.length > 1) {
        var target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
          // update focus for a11y
          target.setAttribute('tabindex', '-1');
          target.focus({ preventScroll: true });
        }
      }
    });
  });
})();
