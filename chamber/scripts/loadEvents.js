const getEventData = async () => {
    const res = await fetch('./scripts/events.json');
    const data = await res.json();
    return data
}

const loadEvents = async () => {
    const eventsData = await getEventData();
    const cardSection = document.querySelector('#event-cards');
    for (let i = 0; i < 3; i++) {
        let event = eventsData[i];
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

document.addEventListener('DOMContentLoaded', async function () {
    await loadEvents();
});