async function getData() {
    const res = await fetch('./data/members.json');
    const data = await res.json();
    return data
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
    const data = await getData();
    displayRandomMembers(data.members);
});