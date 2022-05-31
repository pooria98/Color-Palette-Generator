// menu animation

const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('ul');


menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle('open');
    navMenu.classList.toggle('open');
});