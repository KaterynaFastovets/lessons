document.addEventListener("click", documentActions);

function documentActions(e) {
  const targetElement = e.target;

  if (targetElement.closest(".menu__button")) {
    document.documentElement.toggleAttribute("data-menu-open");
  }
}
