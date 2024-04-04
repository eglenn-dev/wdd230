async function getMemberData() {
    const res = await fetch('./data/members.json');
    const data = await res.json();
    return data
}

async function getCalendarData() {
    const res = await fetch('./data/calendar.json');
    const data = await res.json();
    return data
}

function displayCalendarEvents(events) {
    const eventTarget = document.querySelector('#event-cards');
    events.forEach(event => {
        const card = `
            <h3>${event.title}</h3>
            <p>${event.description}</p>
            <p class="bold">Details: ${event.date}</p>
        `
        newDiv = document.createElement('div');
        newDiv.classList.add('card');
        newDiv.innerHTML = card;
        eventTarget.appendChild(newDiv);
    });

}

function displayRandomMembers(members) {
    let goldAndSilverMembers = members.filter(member => member.membershipLevel === "Gold" || member.membershipLevel === "Silver");
    for (let i = goldAndSilverMembers.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [goldAndSilverMembers[i], goldAndSilverMembers[j]] = [goldAndSilverMembers[j], goldAndSilverMembers[i]];
    }
    const randomThreeMembers = goldAndSilverMembers.slice(0, 3);
    const spotlightTarget = document.querySelector('#spotlight-cards');
    randomThreeMembers.forEach(item => {
        const card = `
            <img src="${item.image}" alt="${item.name}" width="100" height="100" loading="lazy">
            <h3>${item.name}</h3>
            <p>${item.address}</p>
            <a class="event-button" target="_blank" href="${item.website}">About ${item.name}</a>
        `
        newDiv = document.createElement('div');
        newDiv.classList.add('card');
        newDiv.innerHTML = card;
        spotlightTarget.appendChild(newDiv);
    });
}

document.addEventListener('DOMContentLoaded', async function () {
    const calendarData = await getCalendarData();
    displayCalendarEvents(calendarData.events);
    const memberData = await getMemberData();
    displayRandomMembers(memberData.members);
});