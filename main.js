"use strict";

let btnHamburger = document.querySelector(".hamburger"),
  btnClose = document.querySelector(".close"),
  menu = document.querySelector(".navbar-menu"),
  menuItems = document.querySelectorAll(".menu-item"),
  subMenu = document.querySelector(".sub-menu");

btnHamburger.onclick = function () {
  this.style.display = "none";
  btnClose.style.display = "block";
  menu.style.display = "flex";
};

btnClose.onclick = function () {
  this.style.display = "none";
  btnHamburger.style.display = "block";
  menu.style.display = "none";
};

menuItems.forEach((itemLink) => {
  itemLink.addEventListener("mouseenter", showSubMenu);
  itemLink.addEventListener("mouseleave", showSubMenu);
});

function showSubMenu() {
  setTimeout(() => {
    this.classList.toggle("opened");
  }, 50);

  console.log(this.style.height);
}
