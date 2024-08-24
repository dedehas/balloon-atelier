import { navbarHTML } from "./components/navbar.js";

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

    // Grab the component HTML
    navbarTemplate.innerHTML = navbarHTML;
    shadowRoot.appendChild(navbarTemplate.content);

    console.log(shadowRoot.querySelector("#menu-button"));
    
    const button = shadowRoot.querySelector("#menu-button");
    button.addEventListener("click", e => {
      console.log("clicked")
      });
    // Attempt 4
    shadowRoot.querySelector('button').onclick = () => {
      console.log("YEAH!")
    };
  }
}

customElements.define('nav-bar', Navbar)