import {LitElement, css, html, nothing} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class Navbar extends LitElement {

  static properties = {
    active: {type: Boolean, reflect: true},
    current: {type: String, reflect: true},
  }

  static styles = css`
  :host {
    --grid-rows: 0fr;
    --wrapper-visibility: hidden;
    --extra-padding: 0px;
  }
  :host([active]) {
    --grid-rows: 1fr;
    --wrapper-visibility: visible;
    --extra-padding: 4px;
  }
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
    grid-template-rows: var(--grid-rows);
    visibility: var(--wrapper-visibility);
    transition: all 1000ms ease-in-out;
  }
  ul {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 4px;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: var(--extra-padding);
    transition: inherit;
    position: sticky;
    overflow: hidden;
  }
  button {
    border: unset;
    background-color: unset;
    float: right;
  }
  a {
    color: black;
    text-decoration: none;
  }
  .wide i{
    margin-inline-end: 8px;
  }

  @media screen and (min-width: 700px) {
    .wrapper {
      grid-template-rows: 1fr;
    }
    ul {
      position: sticky;
      flex-direction: row;
      visibility: visible;
    }
    .nav-button.wide {
      margin: 0;
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
    this.active = false;  // bools must default to false
    this.current = this.getAttribute("current");
    this.addEventListener("keyup", e => {
      if (e.code === "Escape") {this.active = false}
    });
  }

  _toggle(e) {this.active = !this.active}

  _icon(status) {return status? "fa-close" : "fa-bars"}

  _current(name) {return (name === this.current)? "page" : ""}

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
      <button @click="${this._toggle}" id="menu-button" type="button" class="nav-button small" aria-label="Menu" aria-expanded="${this.active}" aria-controls="nav-links"><i class="fa fa-fw fa-lg ${this._icon(this.active)}" aria-hidden="true"></i></button>

      <div class="wrapper">
        <ul role="list" id="nav-links">
          <li>
            <a href="/index.html" class="nav-button wide" aria-current=${this._current("index") || nothing}><i class="fa fa-fw fa-lg fa-home"></i>HOME</a>
          </li>
          <li>
            <a href="/pages/about.html" class="nav-button wide" aria-current=${this._current("about") || nothing}><i class="fa fa-fw fa-lg fa-user" aria-hidden="true"></i>ABOUT</a>
          </li>
          <li>
            <a href="/pages/services.html" class="nav-button wide" aria-current=${this._current("services") || nothing}><i class="fa fa-fw fa-lg fa-th-list" aria-hidden="true"></i>SERVICES</a>
          </li>
          <li>
            <a href="/pages/contact.html" class="nav-button wide" aria-current=${this._current("contact") || nothing}><i class="fa fa-fw fa-lg fa-envelope" aria-hidden="true"></i>CONTACT</a>
          </li>
          <li>
            <a href="/pages/gallery.html" class="nav-button wide" aria-current=${this._current("gallery") || nothing}><i class="fa fa-fw fa-lg fa-camera" aria-hidden="true"></i>GALLERY</a>
          </li>
          <li>
            <a href="/pages/faq.html" class="nav-button wide" aria-current=${this._current("faq") || nothing}><i class="fa fa-fw fa-lg fa-question-circle" aria-hidden="true"></i>FAQ</a>
          </li>
        </ul>
      </div>
    </nav>
    `;
  }
}

customElements.define('nav-bar', Navbar)