let darkMode = false;

document.addEventListener('DOMContentLoaded', function () {
    const themeBox = document.querySelector('#theme-box');
    themeBox.addEventListener('click', function () {
        if (darkMode) { // Dark mode is enabled
            document.body.classList.remove('dark-mode');
            darkMode = false;
            themeBox.textContent = 'Theme: Light';
        } else if (!darkMode) { // Light mode is enables
            document.body.classList.add('dark-mode');
            darkMode = true;
            themeBox.textContent = 'Theme: Dark';
        }
    });
});