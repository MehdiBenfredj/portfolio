// Theme toggle + small enhancements.
(function () {
  const root = document.documentElement;
  const stored = localStorage.getItem('theme');
  if (stored) root.setAttribute('data-theme', stored);

  function setTheme(mode) {
    root.setAttribute('data-theme', mode);
    localStorage.setItem('theme', mode);
    document.querySelectorAll('[data-theme-toggle]').forEach((b) => {
      b.textContent = mode === 'dark' ? '☀' : '☾';
      b.setAttribute('aria-label', mode === 'dark' ? 'Switch to light' : 'Switch to dark');
    });
  }

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-theme-toggle]');
    if (!btn) return;
    const cur = root.getAttribute('data-theme') || 'light';
    setTheme(cur === 'dark' ? 'light' : 'dark');
  });

  // Initialize toggle label
  document.addEventListener('DOMContentLoaded', () => {
    const cur = root.getAttribute('data-theme') || 'light';
    setTheme(cur);
  });

})();
