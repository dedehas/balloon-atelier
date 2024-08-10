const cardTemplate = document.createElement('template')

class ContentCard extends HTMLElement {
  constructor() {
    super();
    // this.attachShadow({mode: 'open'});
    // this.shadowRoot.appendChild(cardTemplate.content.cloneNode(true))
  }

  connectedCallback() {
    // should mode be open or closed?
    const shadowRoot = this.attachShadow({ mode: "closed" })

    // dynamically get all stylesheets from head
    const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
    if (stylesheets) {
      stylesheets.forEach(x => shadowRoot.appendChild(x.cloneNode()));
    }

    fetch("/components/contentCard.html")
      .then(response => response.text())
      .then((response) => {
        const data = response.toString();
        cardTemplate.innerHTML = data;
        shadowRoot.appendChild(cardTemplate.content);
        // shadowRoot.appendChild(cardTemplate.content.cloneNode(true));
      });

  }
}

// ? what does window do here is it necessary which one to use
// window.customElements.define('content-card', ContentCard)
customElements.define('content-card', ContentCard)
