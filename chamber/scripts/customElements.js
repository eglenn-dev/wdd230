// Array of pages

// Creating a class for a custom HTML element
class loadHeader extends HTMLElement {
    constructor() {
        // Calling the constructor of HTMLElement
        super();
    }
    connectedCallback() {
        const pages = ['index.html', 'discover.html', 'directory.html', 'join.html'];
        const activePage = ['', '', '', '']
        pages.forEach(page => {
            if (location.pathname.includes(page)) {
                let index = pages.indexOf(page);
                activePage[index] = 'active-page';
            }
        });
        // Detailing the HTML of this custom element. Making it a component to be used. 
        this.innerHTML = `
        <header>
            <div>
                <a href="/chamber"><img src="./images/logo.png" width="60" height="60" alt="Calgary Chamber Logo"></a>
                <div id="menu">&#9776;</div>
            </div>
            <nav id="menu-nav">
                <ul>
                    <li><a class="${activePage[0]}" href="./index.html">Home</a></li>
                    <li><a class="${activePage[1]}" href="./discover.html">Discover</a></li>
                    <li><a class="${activePage[2]}" href="./directory.html">Directory</a></li>
                    <li><a class="${activePage[3]}" href="./join.html">Join</a></li>
                </ul>
            </nav>
        </header>
      `;
    }
}

function createCalendarUrl(eventDetails) {
    const { eventName, startDate, endDate, details, location } = eventDetails;
    const start = startDate.toISOString().replace(/-|:|\.\d\d\d/g, '');
    const end = endDate.toISOString().replace(/-|:|\.\d\d\d/g, '');
    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventName)}&dates=${start}/${end}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}&sf=true&output=xml`;
    return url;
}

function getNextWednesday() {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const daysUntilNextWednesday = (3 - dayOfWeek + 7) % 7 || 7;
    now.setDate(now.getDate() + daysUntilNextWednesday);
    return now;
}

class loadPopup extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const nextWednesday = getNextWednesday();
        const eventDetails = {
            eventName: 'Calgary Chamber Meet and Greet',
            startDate: new Date(nextWednesday.setHours(19, 0, 0)),
            endDate: new Date(nextWednesday.setHours(21, 0, 0)),
            details: 'For details, link here: https://eglenn-dev.github.io/wdd230/chamber/',
            location: '123 Street, Calgary AB',
        };
        const newCalLink = createCalendarUrl(eventDetails)
        this.innerHTML = `
        <div id="popup" class="hidden">
            <div id="popup-content">
                <span id="close-popup">&times;</span>
                <h2>Weekly Meet and Greet</h2>
                <p>Come and join us at our weekly meet and greet! It is held every Wednesday at 7:00 PM. Come and meet with other business owners and chamber members in Calgary!</p>
                <a class="call-to-action" href="${newCalLink}" target="_blank" style="padding: 1em;"><b>Add to Calendar</b></a>
            </div>
        </div>
      `;
        const closeButton = document.querySelector('#close-popup');
        closeButton.addEventListener('click', () => {
            this.style.display = 'none';
        });
        const dayOfWeek = new Date().getDay();
        if (dayOfWeek === 1 || dayOfWeek === 2 || dayOfWeek === 3) {
            const popupElement = document.querySelector('#popup');
            popupElement.classList.remove('hidden');
        }
    }
}

// Creating a class for a custom HTML element
class loadFooter extends HTMLElement {
    constructor() {
        // Calling the constructor of HTMLElement
        super();
    }
    connectedCallback() {
        // Detailing the HTML of this custom element. Making it a component to be used. 
        this.innerHTML = `
        <footer>
            <div class="footer-grid">
                <img src="" alt="" width="100" height="100">
                <div id="site-map">
                    <h3>Contact Information</h3>
                    <ul>
                        <li>555-123-4567</li>
                        <li>info@calgarychamber.ca</li>
                        <li>123 Street, Calgary AB</li>
                    </ul>
                </div>
                <div id="follow-us">
                    <h3>About this page</h3>
                    <p>This page is for a WDD 230 class assignment for BYU-Idaho. This page was developed by Ethan Glenn.
                    </p>
                </div>
            </div>
            <div class="last-mod">
                <p>&copy; <span id="footer-year"></span> Ethan Glenn</p>
                <p>Last Modified: <span id="last-mod"></span></p>
            </div>
        </footer>
      `;
    }
}

// Defining the custom element to be used in HTML docs
window.customElements.define("load-header", loadHeader);
window.customElements.define("load-popup", loadPopup);
window.customElements.define("load-footer", loadFooter);