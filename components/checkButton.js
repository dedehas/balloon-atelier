import {css, html, nothing} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import {HoverButton} from '/components/hoverButton.js';

export class CheckButton extends HoverButton {

  static properties = {
    active: {type: Boolean}
  }

    static styles = super.styles;

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