// script.js
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const sidebar = document.querySelector('.sidebar');

burger.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});
