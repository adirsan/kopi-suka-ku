// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
// kilik di luar sideber untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  !hamburger.contains(e.target) && !navbarNav.contains(e.target);
  {
    navbarNav.classList.remove(active);
  }
});
