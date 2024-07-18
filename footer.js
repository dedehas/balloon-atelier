const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
<footer class="w3-center w3-black w3-padding-64 w3-opacity w3-hover-opacity-off">
  <a href="#home" class="w3-button w3-light-grey"><i class="fa fa-arrow-up w3-margin-right"></i>To the top</a>
  <div class="w3-xlarge w3-section">
    <a href="https://www.instagram.com/balloonatelier_/">
      <i class="fa fa-instagram w3-hover-opacity"></i>
    </a>
  </div>
</footer>
`;

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
    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);