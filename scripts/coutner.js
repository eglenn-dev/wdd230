// Getting the visits element
const visitsElement = document.querySelector('#visits');
// Getting the visit count from local storage
let visitCount = Number(localStorage.getItem('local-visit-count')) || 0;
// If the visit count is not 0, display the visit count, otherwise display a welcome message
if (visitCount != 0) {
    visitsElement.textContent = visitCount;
} else {
    visitsElement.textContent = 'This is your first visit, welcome!';
}
// Increment the visit count and save it to local storage
visitCount++;
localStorage.setItem('local-visit-count', visitCount);