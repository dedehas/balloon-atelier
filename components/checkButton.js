import {LitElement, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import { BaseButtonMixin } from '/components/baseButtonMixin.js';

export class CheckButton extends BaseButtonMixin(LitElement) {

  constructor() {
    super();
    this.iconChecked = this.getAttribute("icon-checked");
  }

  _icon(status) {return status? this.iconChecked : this.icon}

  _clicked() {
    this.active = !this.active;
    const eventOptions = {bubbles: true, composed: true, detail: {status: this.active}};
    const event = new CustomEvent("check-button-clicked", eventOptions);
    this.dispatchEvent(event);
  }

  buttonTemplate() {
    return html`<button @click="${this._clicked}" type="button">
                  ${this.iconTemplate()}
                  ${this.msg}
                </button>`;
  }

  render() {
    return this.renderHelper(html`${this.buttonTemplate()}`);
  }
}

customElements.define('check-button', CheckButton)