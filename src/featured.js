const featuredContent = document.querySelector(".featured__content");
const image = document.querySelector(".featured__img img");

featuredContent.addEventListener('mouseover', () => {
  image.style.rotate = "20deg";
  image.style.translate = "0 -10px";
  image.style.scale = "1.015";
})

featuredContent.addEventListener('mouseout', () => {
  image.removeAttribute('style');
})