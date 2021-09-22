const menuBtn = document.getElementById("hamburger-logo");
const mobileNav = document.getElementById("mobile-nav");
const closeMenu = document.getElementById("close");

let isOpen = false;

menuBtn.addEventListener("click", () => {
  if (!isOpen) {
    mobileNav.style.display = "flex";
    isOpen = true;
  }
});

closeMenu.addEventListener("click", () => {
  if (isOpen) {
    mobileNav.style.display = "none";
    isOpen = false;
  }
});
