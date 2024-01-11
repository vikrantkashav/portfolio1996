function toggleMenu() {
  const menu = document.querySelector(".links");
  const icon = document.querySelector(".ham-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}