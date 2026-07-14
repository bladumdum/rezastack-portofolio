const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menu");
const menuList = document.querySelectorAll(".menu-list .menu-item a");

menuList.forEach((link) => {
  link.addEventListener("click", function () {
    menuList.forEach((item) => item.classList.remove("active"));

    this.classList.add("active");
  });
});

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

menuList.forEach((list) => {
  list.addEventListener("click", function () {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});
