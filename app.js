/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
const menu = document.getElementById('hamburger');
const navContainer = document.getElementById('navContainer');
const closeNav = document.getElementById('close');
const navLink = document.querySelectorAll('.navLink');

menu.addEventListener('click', () => {
  navContainer.style.display = 'block';
  menu.style.display = 'none';
});
closeNav.addEventListener('click', () => {
  menu.style.display = 'block';
  navContainer.style.display = 'none';
});
navLink.forEach((link) => {
  link.addEventListener('click', () => {
    menu.style.display = 'block';
    navContainer.style.display = 'none';
  });
});