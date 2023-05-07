// responsive navbar
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");
const toogleBtn = document.getElementById("toogleBtn");

const resToggle = () => {
  document.body.classList.toggle("overFlowHidden");
  menu.classList.toggle("active");
  overlay.classList.toggle("overlayActive");
};

toogleBtn.addEventListener("click", resToggle);
overlay.addEventListener("click", resToggle);
