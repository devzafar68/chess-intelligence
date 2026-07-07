/* =========================================================
   Chess Intelligence — script.js
   Minimal vanilla JS: menu, board, ticker, chips, reveal, spotlight
   ========================================================= */
(function () {
  'use strict';

  /* ---------- Mobile menu toggle ---------- */
  const menuBtn = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function () {
      const open = mobileMenu.hasAttribute('hidden') ? false : true;
      if (open) {
        mobileMenu.setAttribute('hidden', '');
        menuBtn.setAttribute('aria-expanded', 'false');
      } else {
        mobileMenu.removeAttribute('hidden');
        menuBtn.setAttribute('aria-expanded', 'true');
      }
    });
    mobileMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        mobileMenu.setAttribute('hidden', '');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Cursor spotlight (desktop) ---------- */
  const spot = document.getElementById('cursor-spotlight');
  if (spot && window.matchMedia('(pointer:fine)').matches) {
    window.addEventListener('mousemove', function (e) {
      spot.style.setProperty('--x', e.clientX + 'px');
      spot.style.setProperty('--y', e.clientY + 'px');
    });
  }

  /* ---------- Backdrop dust particles ---------- */
  const particles = document.getElementById('particles');
  if (particles) {
    const N = 26;
    let html = '';
    for (let i = 0; i < N; i++) {
      const left = (i * 37) % 100;
      const top = (i * 53) % 100;
      const dur = 5 + (i % 6);
      const delay = (i * 0.2).toFixed(2);
      html += '<span style="left:' + left + '%; top:' + top + '%; animation-duration:' + dur + 's; animation-delay:' + delay + 's"></span>';
    }
    particles.innerHTML = html;
  }

  /* ---------- Board squares (8x8) ---------- */
  const boardSquares = document.getElementById('board-squares');
  if (boardSquares) {
    const frag = document.createDocumentFragment();
    for (let i = 0; i < 64; i++) {
      const r = Math.floor(i / 8);
      const c = i % 8;
      const dark = (r + c) % 2 === 1;
      const el = document.createElement('div');
      el.className = 'sq ' + (dark ? 'dark' : 'light');
      frag.appendChild(el);
    }
    boardSquares.insertBefore(frag, boardSquares.firstChild);
  }

  /* ---------- Mini board (dossier) ---------- */
  const miniBoard = document.getElementById('mini-board');
  if (miniBoard) {
    const frag = document.createDocumentFragment();
    for (let i = 0; i < 64; i++) {
      const r = Math.floor(i / 8);
      const c = i % 8;
      const dark = (r + c) % 2 === 1;
      const highlight = (i === 28 || i === 36);
      const el = document.createElement('div');
      el.className = 'sq ' + (dark ? 'dark' : 'light') + (highlight ? ' hl' : '');
      frag.appendChild(el);
    }
    miniBoard.appendChild(frag);
  }

  /* ---------- Live ticker ---------- */
  const track = document.getElementById('ticker-track');
  if (track) {
    const rows = [
      { vs: 'Hikaru Nakamura', opening: 'Berlin Defense', year: '2025' },
      { vs: 'Ding Liren', opening: 'Italian Game', year: '2025' },
      { vs: 'Alireza Firouzja', opening: 'Najdorf', year: '2024' },
      { vs: 'Fabiano Caruana', opening: 'Ruy López', year: '2025' },
      { vs: 'Ian Nepomniachtchi', opening: 'Petroff', year: '2024' },
      { vs: 'R. Praggnanandhaa', opening: 'Caro-Kann', year: '2025' },
      { vs: 'D. Gukesh', opening: 'French Defense', year: '2025' },
      { vs: 'Ju Wenjun', opening: 'Sicilian', year: '2024' }
    ];
    const doubled = rows.concat(rows);
    const knightUse = '<svg class="ico"><use href="#i-knight"/></svg>';
    const chevUse = '<svg class="ico"><use href="#i-chevron"/></svg>';
    track.innerHTML = doubled.map(function (it) {
      return '<div class="ticker-item">'
        + '<span class="ticker-icon">' + knightUse + '</span>'
        + '<div class="ticker-info">'
          + '<div class="ticker-title">vs ' + it.vs + '<span class="ticker-year">' + it.year + '</span></div>'
          + '<div class="ticker-sub">' + it.opening + ' · PGN indexed</div>'
        + '</div>'
        + '<a href="#" class="ticker-pgn">View PGN ' + chevUse + '</a>'
      + '</div>';
    }).join('');
  }

  /* ---------- Chip → search input fill ---------- */
  const input = document.getElementById('player-search');
  document.querySelectorAll('.suggestion').forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (input) {
        input.value = btn.getAttribute('data-fill') || '';
        input.focus();
      }
    });
  });

  /* ⌘K / Ctrl+K focus */
  window.addEventListener('keydown', function (e) {
    if ((e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'K')) {
      if (input) { e.preventDefault(); input.focus(); }
    }
  });

  /* ---------- Scroll reveal ---------- */
  const items = document.querySelectorAll('.reveal');
  if (items.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.15 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- Smooth in-page anchor scroll ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      const id = a.getAttribute('href');
      if (id && id.length > 1) {
        const target = document.querySelector(id);
        if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      }
    });
  });
})();
