let menuOpen = false;
const menu = document.querySelector('#menu');
menu.addEventListener('click', menuClick);

function menuClick() {
    const nav = document.querySelector('#menu-nav');
    menuOpen ? nav.style.display = 'none' : nav.style.display = 'block';
    menuOpen ? menuOpen = false : menuOpen = true;
}
