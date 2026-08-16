"use strict";

const favoriteBtns = document.querySelectorAll(".favorite-btn, .like");

favoriteBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
  });
});
const saveBtn = document.querySelectorAll(".actions-post__icon-save");
saveBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
  });
});

// burger-menu
document.addEventListener('click', documentActions)

function documentActions(e) {
	const targetElement = e.target

	if (targetElement.closest('.icon-menu')) {
		document.documentElement.toggleAttribute('data-menu-open')
	}
}


