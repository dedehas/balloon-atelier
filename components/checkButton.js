import {css, html, nothing} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import {HoverButton} from '/components/hoverButton.js';

export class CheckButton extends HoverButton {

  static properties = {
    active: {type: Boolean}
  }

  static styles = css` 
  a, button {
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    text-decoration: none;
    margin: var(--hover-button-margin, 0px);
    border: var(--hover-button-border, none);
    padding: var(--hover-button-padding, 8px);
    color: var(--hover-button-primary, var(--color-russian-violet));
    background-color: var(--hover-button-secondary, transparent);
    border-radius: var(--hover-button-radius, 8px);
  }
  a:hover, button:hover {
    color: var(--hover-button-secondary, var(--color-light-pink));
    background-color: var(--hover-button-primary, var(--color-russian-violet));
    border-color: var(--hover-button-primary)
  }
  i:not(.solo) {
    margin-right: 8px;
  }
  :host(.contact) {
    --hover-button-primary: var(--color-dogwood-rose);
    --hover-button-secondary: var(--color-light-pink);
    --hover-button-border: 2px solid;
    --hover-button-margin: 12px 24px;
    --hover-button-padding: 8px 24px;
  }
  `;

  constructor() {
    super();
    // no href
    this.msg = this.getAttribute("msg");
    this.solo = this.msg ? "" : "solo";
    this.iconOff = this.getAttribute("icon-off") ?? "fa-bars";
    this.iconOn = this.getAttribute("icon-on") ?? "fa-close";
    // no src
    this.active = false; // bools default to false
    this.addEventListener("keyup", e => {
      if (e.code === "Escape") {this.active = false}
    });
  }

  _icon(status) {return status? this.iconOn : this.iconOff}

  iconTemplate() {
    return html`<i class="fa fa-fw fa-lg ${this._icon(this.active)} ${this.solo}" aria-hidden="true"></i>`;
  }

  //no imgTemplate

  // no anchorTemplate

  _toggle() {this.active = !this.active}

  buttonTemplate() {
    return html`<button @click="${this._toggle}" type="button" aria-label="Menu" aria-expanded="${this.active}" aria-controls="nav-links">
                  ${this.iconTemplate()}
                  ${this.msg}
                </button>`;
  }

  render() {
    return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="/style.css">
    ${this.buttonTemplate()}
    `;
  }
}

customElements.define('check-button', CheckButton)