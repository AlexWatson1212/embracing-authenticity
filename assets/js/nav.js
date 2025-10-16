// assets/js/nav.js
(function(){
  const header = document.querySelector('.site-header');
  const btn = document.querySelector('.nav-toggle');
  const menu = document.getElementById('site-menu');
  if(!header || !btn || !menu) return;

  // start collapsed on mobile
  menu.setAttribute('data-collapsible', ''); // marker for CSS/JS
  btn.addEventListener('click', () => {
    const open = header.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', String(open));
  });

  // close when a link is clicked (mobile)
  menu.addEventListener('click', e => {
    if(e.target.matches('a') && header.classList.contains('is-open')){
      header.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
})();
