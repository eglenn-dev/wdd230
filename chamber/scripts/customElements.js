// Creating a class for a custom HTML element
class loadHeader extends HTMLElement {
    constructor() {
        // Calling the constructor of HTMLElement
        super();
    }
    connectedCallback() {
        // Detailing the HTML of this custom element. Making it a component to be used. 
        this.innerHTML = `
        <header>
            <div>
                <a href="#"><img src="./images/logo.png" width="60" height="60" alt="Calgary Chamber Logo"></a>
                <div id="menu">&#9776;</div>
            </div>
            <nav id="menu-nav">
                <ul>
                    <li><a class="active-page" href="#">Home</a></li>
                    <li><a href="#">Discover</a></li>
                    <li><a href="#">Directory</a></li>
                    <li><a href="#">Join</a></li>
                </ul>
            </nav>
        </header>
      `;
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
window.customElements.define("load-footer", loadFooter);