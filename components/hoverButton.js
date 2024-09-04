import {LitElement, html, nothing} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import { BaseButtonMixin } from '/components/baseButtonMixin.js';

export class HoverButton extends BaseButtonMixin(LitElement) {

  constructor() {
    super();
    this.href = this.getAttribute("href");
    this.src = this.getAttribute("src");
  }

  imageTemplate() {
    return this.src ? html`<img src="${this.src}" style="vertical-align: middle; height: 24px;">` : nothing;
  }

  anchorTemplate() {
    return html`<a href=${this.href ?? nothing} aria-current=${this.active ? "page" : nothing}>
                  ${this.imageTemplate()}
                  ${this.iconTemplate()}
                  ${this.msg}
                </a>`;
  }

  render() {
    return this.renderHelper(html`${this.anchorTemplate()}`);
  }
}

customElements.define('hover-button', HoverButton)