import {LitElement, css, html, nothing} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import '/components/hoverButton.js';
import '/components/checkButton.js';

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
    display: block;
    box-sizing: border-box;
    top: 0;
    width: 100%;
    z-index: 1;
    color: var(--color-russian-violet);
    background-color: var(--color-pink);
    box-shadow: 0px -8px 24px 2px var(--color-russian-violet);
    padding: 8px;
  }
  .wrapper {
    display: grid;
    grid-template-rows: var(--grid-rows);
    visibility: var(--wrapper-visibility);
    transition: all 400ms ease-in-out;
  }
  ul {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 4px;
    justify-content: space-around;
    list-style: none;
    margin: 0;
    padding: var(--extra-padding);
    transition: inherit;
    position: sticky;
    overflow: hidden;
  }
  check-button {
    float: right;
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
      if (e.code === "Escape") {
        this.active = false;
        const checkButton = this.shadowRoot.querySelector("check-button");
        checkButton.active = false;
      }
    });
    this.addEventListener("check-button-clicked", e => {
      this.active = !this.active;
      e.stopPropagation();
    });
  }

  _icon(status) {return status? "fa-close" : "fa-bars"}

  _current(name) {return (name === this.current)}

  render() {
    return html`
    <link rel="stylesheet" href="/style.css">
    <nav id="nav" aria-label="Main">

      <hover-button class="small" href="/index.html" src="/images/balloon-daisy-icon-clear.svg"></hover-button>
      <check-button class="small" icon="fa-bars" icon-checked="fa-close" aria-label="Menu" aria-controls="nav-links" aria-expanded="${this.active}"></check-button>

      <div class="wrapper">
        <ul role="list" id="nav-links">
          <li>
            <hover-button href="/index.html" active=${this._current("index") || nothing} icon="fa-home" msg="HOME"></hover-button>
          </li>
          <li>
            <hover-button href="/pages/services.html" active=${this._current("services") || nothing} icon="fa-th-list" msg="SERVICES"></hover-button>
          </li>
          <li>
            <hover-button href="/pages/gallery.html" active=${this._current("gallery") || nothing} icon="fa-camera" msg="GALLERY"></hover-button>
          </li>
          <li>
            <hover-button href="/pages/contact.html" active=${this._current("contact") || nothing} icon="fa-envelope" msg="CONTACT"></hover-button>
          </li>
          <li>
            <hover-button href="/pages/faq.html" active=${this._current("faq") || nothing} icon="fa-question-circle" msg="FAQ"></hover-button>
          </li>
          <li>
            <hover-button href="/pages/about.html" active=${this._current("about") || nothing} icon="fa-user" msg="ABOUT"></hover-button>
          </li>
        </ul>
      </div>
    </nav>
    `;
  }
}

customElements.define('nav-bar', Navbar)