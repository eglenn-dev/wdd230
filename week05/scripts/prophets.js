const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData(url) {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data);
    return data;
}

const displayProphets = async (prophets) => {
    prophets.forEach(prophet => {
        const card = document.createElement('section');
        const fullName = document.createElement('h2');
        const portrait = document.createElement('img');
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '262');
        portrait.setAttribute('height', '340');
        const bd = document.createElement('p');
        bd.textContent = `Date of Birth: ${prophet.birthdate}`
        const bp = document.createElement('p');
        bp.textContent = `Place of Birth: ${prophet.birthplace}`
        card.appendChild(fullName);
        card.appendChild(bd);
        card.appendChild(bp);
        card.appendChild(portrait);
        cards.appendChild(card);
    });
}

async function main() {
    const data = await getProphetData(url);
    await displayProphets(data.prophets);
}

main();