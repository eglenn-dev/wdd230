async function getLinksData() {
    try {
        const response = await fetch('https://eglenn-dev.github.io/wdd230/data/links.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was an error:', error);
    }
}

function displayData(data) {
    const linksContainer = document.querySelector('#activity-list');
    data.weeks.forEach(week => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = `Week ${week.week}: `;
        li.appendChild(span);
        week.links.forEach((link, index, array) => {
            const linkElement = document.createElement('a');
            linkElement.href = link.url;
            linkElement.textContent = link.title;
            li.appendChild(linkElement);
            if (index !== array.length - 1) {
                const separator = document.createTextNode(' | ');
                li.appendChild(separator);
            }
        });
        linksContainer.appendChild(li);
    });
}

async function links() {
    const data = await getLinksData();
    displayData(data);
}

links();