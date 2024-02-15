const getData = async () => {
    const res = await fetch('./scripts/pageData.json');
    const data = await res.json();
    return data
}

const loadEvents = async (data) => {
    const cardSection = document.querySelector('#event-cards');
    for (let i = 0; i < 3; i++) {
        let event = data[i];
        const card = `
            <img src="${event.imagePath}" alt="${event.title}" width="50" height="50">
            <h3>${event.title}</h3>
            <p>${event.description}</p>
            <a class="event-button" target="_blank" href="${event.link}">${event.linkText}</a>
        `
        newDiv = document.createElement('div');
        newDiv.classList.add('card');
        newDiv.innerHTML = card;
        cardSection.appendChild(newDiv);
    }
}

const loadSpotlight = async (data) => {
    const cardSection = document.querySelector('#spotlight-cards');
    for (let i = 0; i < 3; i++) {
        let item = data[i];
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
    const data = await getData();
    await loadEvents(data.events);
    await loadSpotlight(data.spotlight);
});