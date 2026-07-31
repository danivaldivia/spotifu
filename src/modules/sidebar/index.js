document.addEventListener("DOMContentLoaded", () => {
  const menuLink = document.querySelectorAll(".menu__link");

  menuLink.forEach((link) => {
    const currentPath = window.location.pathname;
    const linkPath = link.getAttribute("href").replace("./", "");

    if (currentPath.includes(linkPath)) {
      activeIcon(link);
    }
  });

  function activeIcon(activeLink) {
    const icons = activeLink.querySelectorAll("svg");

    icons.forEach((svg) => {
      if (svg.id.includes("--active")) {
        svg.classList.add("icon--active");
        svg.classList.remove("icon--hidden");
      } else {
        svg.classList.add("icon--hidden");
        svg.classList.remove("icon--active");
      }
    });

    const menuItem = activeLink.closest(".menu__item");
    if (menuItem) {
      menuItem.classList.add("menu__item--active");
    }
  }
});
