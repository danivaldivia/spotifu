import {
  profileBtn,
  profileMenu,
  profile,
} from "../constant/profile-selectors.js";

function showMenu(e, profileMenu) {
  e.stopPropagation();
  profileMenu.classList.toggle("is-open");
}

function hiddenMenu(e, profile, profileMenu) {
  if (!profile.contains(e.target)) {
    profileMenu.classList.remove("is-open");
  }
}

export function initProfileMenu() {
  profileBtn.addEventListener("click", (event) => {
    showMenu(event, profileMenu);
  });
  document.addEventListener("click", (event) => {
    hiddenMenu(event, profile, profileMenu);
  });
}
