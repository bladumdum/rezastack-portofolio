let menuList = document.querySelectorAll(".menu-list .menu-item");

menuList.forEach((list) => {
  list.addEventListener("click", function (e) {
    e.preventDefault();

    menuList.forEach((item) => item.classList.remove("active"));

    this.classList.add("active");
  });
});
