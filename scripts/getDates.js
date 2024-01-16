document.addEventListener('DOMContentLoaded', () => {
    // Getting the year and inserting it into the footer
    const year = new Date().getFullYear();
    let footerYear = document.getElementById('footer-year');
    footerYear.textContent = year;

    // Getting the last modified date for the document and inserting it into the footer
    const docLastMod = new Date(document.lastModified);
    let footerMod = document.getElementById('last-updated');
    footerMod.textContent = `${docLastMod.toDateString()} ${docLastMod.getHours()}:${docLastMod.getMinutes()}:${docLastMod.getSeconds()}`;
    // footerMod.textContent = docLastMod;
});