import {LitElement, css, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class Footer extends LitElement {

  static styles = css`
  #footer-container {
    color: var(--color-light-pink);
    background-color: var(--color-russian-violet);
  }
  a {
    text-decoration: none;
  }
  a:hover {
    opacity: 0.6;
  }
  hr {
    margin: 8px;
  }
  p, ul {
    margin: 0;
    padding: 0;
  }
  li {
    display: inline;
    list-style-type: none;
    padding-inline: 8px;
  }
  li+li {
    border-left: 1px solid #ffffff
  }
  #daisyIcon img {
    margin: 8px;
    max-width: 120px;
  }
  @media screen and (min-width: 600px) {
    #daisyIcon img {
      margin: 0px;
      max-width: 180px;
    }
  }
  `;

  constructor() {
    super();
  }

  render() {
    return html`
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="/style.css">
    <footer class="w3-center">
      <div class="w3-container w3-padding-16" id="footer-container">

        <div class="w3-row" id="footerTopSection" style="width: 100%; height: 180px">

          <div class="w3-col" id="socials" style="width: 50px; height: 100%">
            <div class="w3-bar-block w3-xlarge">
              <a class="w3-bar-item w3-container" href="https://www.facebook.com/" target="_blank">
                <i class="fa fa-facebook"></i>
              </a>
              <a class="w3-bar-item w3-container" href="https://www.instagram.com/balloonatelier_/" target="_blank">
                <i class="fa fa-instagram"></i>
              </a>
              <a class="w3-bar-item w3-container" href="https://www.google.com/" target="_blank">
                <i class="fa fa-google"></i>
              </a>
            </div>
          </div>

          <div class="w3-rest" style="height: 100%;">
            <div class="w3-cell-row" style="height: 100%; width: 100%;">

              <div class="w3-cell w3-right w3-mobile" id="buttonToTop" style="width: auto;">
                <button class="w3-button w3-round-large w3-light-grey">
                  <a href="#home"><i class="fa fa-arrow-up w3-margin-right"></i>To the top</a>
                </button>
              </div>
              
              <div class="w3-rest w3-mobile" id="daisyIcon">
                <a href="/index.html"><img src="/images/balloon-daisy-icon_clear.svg" alt="Balloon Daisy Icon"></a>
              </div>

            </div>
          </div>

        </div>

        <hr>

        <div class="w3-row" id="footerBottomSection">
          <div class="w3-half">
            <p>© 2024 Balloon Atelier. All rights reserved.</p>
          </div>
          <div class="w3-half">
            <ul>
              <li><a href="/pages/terms.html">Terms & Conditions</a></li>
              <li><a href="/pages/contact.html">Contact</a></li>
              <li><a href="/pages/sitemap.html">Sitemap</a></li>
            </ul>
          </div>
        </div>
        
      </div>
    </footer>
    `;
  }
}

customElements.define('footer-component', Footer)