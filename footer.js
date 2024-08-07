const footerTemplate = document.createElement('template');

class Footer extends HTMLElement {
  constructor() {
    // inherit everything
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    // dynamically get all stylesheets from head
    const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
      if (stylesheets) {
        stylesheets.forEach(x => shadowRoot.appendChild(x.cloneNode()));
    }

    fetch("/components/footer.html")
      .then(response => response.text())
      .then((response) => {
        const data = response.toString();
        footerTemplate.innerHTML = data;
        shadowRoot.appendChild(footerTemplate.content);
      });

  }
}

customElements.define('footer-component', Footer);