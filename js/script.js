"use strict"

let menuBurger = document.querySelector(".menu__burger");
let menuBody = document.querySelector(".menu__body");
let body = document.querySelector("body");
let headerContainer = document.querySelector(".header__container");

menuBurger.addEventListener("click", function (e) {
   menuBurger.classList.toggle("_active");
   menuBody.classList.toggle("_active");
   body.classList.toggle("_lock");
   headerContainer.classList.toggle("_pad");
})

let menuLinks = document.querySelectorAll(".menu__link");

menuLinks.forEach(function (menuLink) {
   menuLink.addEventListener("click", function (e) {
      menuBurger.classList.remove("_active");
      menuBody.classList.remove("_active");
      body.classList.remove("_lock");
      headerContainer.classList.remove("_pad");
   })
})