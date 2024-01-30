let menuOpen = false;
const menu = document.querySelector('#menu');
const navList = document.querySelector('#nav-list');

function openMenu() {
    navList.style.display = 'block';
    menu.innerHTML = 'X';
    menuOpen = true;
}

function closeMenu() {
    navList.style.display = 'none';
    menu.innerHTML = '&#9776;';
    menuOpen = false;
}


document.addEventListener("DOMContentLoaded", function () {
    menu.addEventListener('click', function () {
        if (menuOpen) { // Menu is open
            closeMenu();
        } else if (!menuOpen) { // Menu is close
            openMenu();
        }
    });
    window.addEventListener('resize', function () {
        if (window.innerWidth > 700) { // Desktop view
            openMenu();
            navList.style.display = 'flex';
            menu.innerHTML = '&#9776;';
            menu.display = 'none';

        } else if (window.innerWidth <= 700) { // Mobile view
            navList.style.display = 'none';
            closeMenu();
        }
    });
});