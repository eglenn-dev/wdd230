document.addEventListener('DOMContentLoaded', async function () {
    let now = new Date();

    let lastVisit = localStorage.getItem('lastVisit');

    let diffInDays = null;
    if (lastVisit) {
        let diffInMs = now - new Date(lastVisit);
        diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    }

    let sidebarContent = document.getElementById('last-visited-details');

    if (lastVisit === null) {
        sidebarContent.textContent = "Welcome! Let us know if you have any questions.";
    } else if (diffInDays < 1) {
        sidebarContent.textContent = "Back so soon! Awesome!";
    } else {
        sidebarContent.textContent = `You last visited ${diffInDays} day${diffInDays > 1 ? 's' : ''} ago.`;
    }

    localStorage.setItem('lastVisit', now.toString());
});