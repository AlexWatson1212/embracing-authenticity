(function () {
  const header = document.querySelector(".site-header");
  const btn = document.querySelector(".nav-toggle");
  const menu = document.getElementById("site-menu");
  const mobileQuery = window.matchMedia("(max-width: 768px)");

  if (!header || !btn || !menu) return;

  function setMenu(open) {
    header.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);

    btn.setAttribute("aria-expanded", open ? "true" : "false");
    btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  function closeMenu() {
    setMenu(false);
  }

  btn.addEventListener("click", function () {
    const isOpen = btn.getAttribute("aria-expanded") === "true";
    setMenu(!isOpen);
  });

  menu.addEventListener("click", function (event) {
    if (event.target.closest("a")) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  mobileQuery.addEventListener("change", function (event) {
    if (!event.matches) {
      closeMenu();
    }
  });
})();