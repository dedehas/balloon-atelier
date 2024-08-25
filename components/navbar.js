import {LitElement, css, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class Navbar extends LitElement {
  static styles = css`
    nav {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
    /* overflow-y: scroll; */
    background-color: var(--color-light-pink);
    border-bottom: 2px solid var(--color-light-grey);
    box-shadow: 0px 4px 16px var(--color-pink);
    padding: 8px;
  }
  .wrapper {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 1000ms ease-in-out;
  }
  ul {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 8px;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: 0;
    position: sticky;
    visibility: hidden;
    overflow: hidden;
    transition: visibility 1000ms ease-in-out;
  }
  button {
    border: unset;
    background-color: unset;
    float: right;
  }
  button:focus-within ~ .wrapper {
    grid-template-rows: 1fr;
  }
  button:focus-within ~ .wrapper ul {
    visibility: visible;
  }
  i.fa {
    margin-inline-end: 8px;
  }
  a {
    /* color: black; */
    text-decoration: none;
  }

  @media screen and (min-width: 650px) {
    .wrapper {
      grid-template-rows: 1fr;
    }
    ul {
      position: sticky;
      flex-direction: row;
      visibility: visible;
    }
    .nav-button.wide {
      display: block;
    }
    .small {
      display: none;
      visibility: hidden;
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
    <nav id="nav" aria-label="Main">
      <a href="/index.html" class="nav-button small">
        <img src="/images/balloon-daisy-icon_clear.svg" style="height: 24px;">
      </a>
      <button id="menu-button" type="button" class="nav-button small" aria-label="Menu" aria-expanded="false" aria-controls="nav-links"><i class="fa fa-bars" style="margin-inline: 8px;" aria-hidden="true"></i></button>

      <div class="wrapper">
        <ul role="list" id="nav-links">
          <li>
            <a href="/index.html" class="nav-button wide"><i class="fa fa-home"></i>HOME</a>
          </li>
          <li>
            <a href="/pages/about.html" class="nav-button wide"><i class="fa fa-user" aria-hidden="true"></i>ABOUT</a>
          </li>
          <li>
            <a href="/pages/services.html" class="nav-button wide"><i class="fa fa-th-list" aria-hidden="true"></i>SERVICES</a>
          </li>
          <li>
            <a href="/pages/contact.html" class="nav-button wide"><i class="fa fa-envelope" aria-hidden="true"></i>CONTACT</a>
          </li>
          <li>
            <a href="/pages/gallery.html" class="nav-button wide"><i class="fa fa-camera" aria-hidden="true"></i>GALLERY</a>
          </li>
          <li>
            <a href="/pages/faq.html" class="nav-button wide"><i class="fa fa-question-circle" aria-hidden="true"></i>FAQ</a>
          </li>
        </ul>
      </div>
    </nav>
    `;
  }
}

customElements.define('nav-bar', Navbar)