document.addEventListener('DOMContentLoaded', () => {
    // Getting the year and inserting it into the footer
    const year = new Date().getFullYear();
    const footerYear = document.getElementById('footer-year');
    footerYear.textContent = year;

    // Getting the last modified date for the document and inserting it into the footer
    const docLastMod = new Date(document.lastModified);
    const footerMod = document.getElementById('last-mod');
    footerMod.textContent = `${docLastMod.toDateString()} ${docLastMod.getHours()}:${docLastMod.getMinutes()}:${docLastMod.getSeconds()}`;
    // footerMod.textContent = docLastMod;
});