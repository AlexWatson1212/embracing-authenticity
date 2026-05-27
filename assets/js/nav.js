(function () {
  const header = document.querySelector(".site-header");
  const btn = document.querySelector(".nav-toggle");
  const menu = document.getElementById("site-menu");

  if (!header || !btn || !menu) return;

  function setMenu(open) {
    header.classList.toggle("is-open", open);
    menu.classList.toggle("is-open", open);

    btn.setAttribute("aria-expanded", open ? "true" : "false");
    btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  btn.addEventListener("click", function () {
    const isOpen = btn.getAttribute("aria-expanded") === "true";
    setMenu(!isOpen);
  });

  menu.addEventListener("click", function (event) {
    if (event.target.closest("a")) setMenu(false);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") setMenu(false);
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 860) setMenu(false);
  });
})();