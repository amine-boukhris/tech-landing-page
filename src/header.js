const headerLinks = document.querySelectorAll(".header__bar-navigation nav ul li a");
const nav = document.querySelector("nav");

headerLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    if (!link.classList.contains("active")) {
      document.querySelector(".header__bar-navigation nav ul li a.active").classList.add("notHovered");
    }
    headerLinks.forEach((link2) => {
      link2.classList.remove("hovered");
    });
    link.classList.add("hovered");
  });

  link.addEventListener("click", () => {
    document.querySelector(".header__bar-navigation nav ul li a.active").classList.remove("active");
    link.classList.add("active");
  });
});

nav.addEventListener("mouseleave", () => {
  headerLinks.forEach((link) => {
    if (!link.classList.contains("active")) {
      link.classList.remove("hovered");
      document.querySelector(".header__bar-navigation nav ul li a.active").classList.remove("notHovered");
    }
  });
});


const menu = document.querySelector(".header__bar-functionalities i:last-child");
const dropDown = document.querySelector(".header__bar-functionalities i:last-child div")
menu.addEventListener('click', () => {
  if (menu.classList.contains("fa-bars")) {
    menu.classList.remove("fa-bars");
    menu.classList.add("fa-circle-xmark");
    dropDown.style.display = "block"
  } else {
    menu.classList.remove("fa-circle-xmark");
    menu.classList.add("fa-bars");
    dropDown.style.display = "none"
  }
})

const search = document.querySelector(".header__bar-functionalities i:first-child");
const searchBar = document.querySelector(".header__search");
search.addEventListener("click", () => {
  searchBar.classList.toggle("none")
})