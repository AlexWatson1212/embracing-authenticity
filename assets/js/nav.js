(function(){
  const header = document.querySelector('.site-header');
  const btn = document.querySelector('.nav-toggle');
  const menu = document.getElementById('site-menu');
  if(!header || !btn || !menu) return;

  btn.addEventListener('click', () => {
    const open = header.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', String(open));
  });

  // Close menu after clicking a link (mobile)
  menu.addEventListener('click', e => {
    if(e.target.matches('a') && header.classList.contains('is-open')){
      header.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
})();
