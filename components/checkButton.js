import {LitElement, html, nothing} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import { BaseButtonMixin } from '/components/baseButtonMixin.js';

export class CheckButton extends BaseButtonMixin(LitElement) {

  constructor() {
    super();
    this.iconChecked = this.getAttribute("icon-checked");
    this.addEventListener("keyup", e => {
      if (e.code === "Escape") {this.active = false}
    });
  }

  _icon(status) {return status? this.iconChecked : this.icon}

  _toggle() {this.active = !this.active}

  buttonTemplate() {
    return html`<button @click="${this._toggle}" type="button" aria-label="Menu" aria-expanded="${this.active}" aria-controls="nav-links">
                  ${this.iconTemplate()}
                  ${this.msg}
                </button>`;
  }

  render() {
    return this.renderHelper(html`${this.buttonTemplate()}`);
  }
}

customElements.define('check-button', CheckButton)