const navbarTemplate = document.createElement('template')

class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "closed" })

    // dynamically get all stylesheets from head
    const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
    if (stylesheets) {
      stylesheets.forEach(x => shadowRoot.appendChild(x.cloneNode()));
    }

    fetch("/components/navbar.html")
      .then(response => response.text())
      .then((response) => {
        const data = response.toString();
        navbarTemplate.innerHTML = data;
        shadowRoot.appendChild(navbarTemplate.content);
      });

  }
}

customElements.define('nav-bar', Navbar)