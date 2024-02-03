const getSpotlightData = async () => {
    const res = await fetch('./scripts/spotlight.json');
    const data = await res.json();
    return data
}

const loadSpotlight = async () => {
    const eventsData = await getSpotlightData();
    const cardSection = document.querySelector('#spotlight-cards');
    for (let i = 0; i < 3; i++) {
        let item = eventsData[i];
        const card = `
            <img src="${item.imagePath}" alt="${item.companyName}" width="50" height="50">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <a class="event-button" target="_blank" href="${item.link}">About ${item.companyName}</a>
        `
        newDiv = document.createElement('div');
        newDiv.classList.add('card');
        newDiv.innerHTML = card;
        cardSection.appendChild(newDiv);
    }
}

document.addEventListener('DOMContentLoaded', async function () {
    await loadSpotlight();
});