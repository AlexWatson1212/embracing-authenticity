(function(){
  const header = document.querySelector('.site-header');
  const btn = document.querySelector('.nav-toggle');
  const menu = document.getElementById('site-menu');

  if (!header || !btn || !menu) return;

  function toggle(open) {
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    if (open) menu.removeAttribute('hidden');
    else menu.setAttribute('hidden', '');
    header.classList.toggle('is-open', open);
  }

  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') !== 'true';
    toggle(open);
  });

  // Close menu when clicking a link
  menu.addEventListener('click', e => {
    if (e.target.tagName === 'A') toggle(false);
  });

  // Close on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') toggle(false);
  });
})();
