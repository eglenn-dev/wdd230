const url = './data/members.json';

async function getMembers() {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`An error occurred: ${response.status}`);
    }
    const data = await response.json();
    return data;
}

function displayGridMembers(members) {
    const main = document.querySelector('main');
    const section = document.createElement('section');
    section.classList.add('directory-grid');
    members.forEach(member => {
        const div = document.createElement('div');
        div.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h2>${member.name}</h2>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}">${member.website}</a>
        `;
        section.appendChild(div);
    });
    main.appendChild(section);
}

function displayListMembers(members) {
    const main = document.querySelector('main');
    const section = document.createElement('section');
    section.classList.add('directory-list');
    section.classList.add('hidden');
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    const headerRow = document.createElement('tr');
    ['Name', 'Address', 'Phone Number', 'Website'].forEach(text => {
        const th = document.createElement('th');
        th.textContent = text;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    members.forEach(member => {
        const tr = document.createElement('tr');
        [member.name, member.address, member.phone, member.website].forEach(text => {
            const td = document.createElement('td');
            if (text === member.website) {
                const a = document.createElement('a');
                a.href = text;
                a.textContent = text;
                td.appendChild(a);
            } else {
                td.textContent = text;
            }
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);

    section.appendChild(table);
    main.appendChild(section);
}

function displayGrid() {
    const grid = document.querySelector('.directory-grid');
    const list = document.querySelector('.directory-list');
    grid.classList.remove('hidden');
    list.classList.add('hidden');
}

function displayList() {
    const grid = document.querySelector('.directory-grid');
    const list = document.querySelector('.directory-list');
    grid.classList.add('hidden');
    list.classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', async () => {
    const data = await getMembers();
    displayGridMembers(data.members);
    displayListMembers(data.members);
    const gridButton = document.querySelector('.grid-button');
    const listButton = document.querySelector('.list-button');
    gridButton.addEventListener('click', displayGrid);
    listButton.addEventListener('click', displayList);
});
