let menuList = document.querySelectorAll(".menu-list .menu-item");

menuList.forEach((list) => {
  list.querySelector("a").addEventListener("click", function (e) {
    menuList.forEach((item) => item.classList.remove("active"));

    this.classList.add("active");
  });
});
