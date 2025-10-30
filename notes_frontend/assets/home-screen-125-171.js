(function () {
  'use strict';

  // Attach basic interactions matching the intent of the design
  const logClick = (el) => {
    const label = el.getAttribute('aria-label') || el.title || el.dataset.id || 'element';
    // eslint-disable-next-line no-console
    console.log(`${label} clicked`);
  };

  const qs = (s) => document.querySelector(s);
  const qsa = (s) => Array.prototype.slice.call(document.querySelectorAll(s));

  // Header icon buttons
  qsa('.icon-btn').forEach((btn) => {
    btn.addEventListener('click', () => logClick(btn));
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.click();
      }
    });
  });

  // Cards as clickable blocks (optional elevation could be added here)
  qsa('.card').forEach((card) => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => logClick(card));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    const label = card.getAttribute('aria-label') || 'Note';
    card.setAttribute('aria-label', label);
  });

  // FAB
  const fab = qs('.fab');
  if (fab) {
    fab.addEventListener('click', () => logClick(fab));
    fab.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        fab.click();
      }
    });
  }
})();
