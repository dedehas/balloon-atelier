import {LitElement, css, html, nothing} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class HoverButton extends LitElement {

  static properties = {
    current: {type: Boolean}
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
    this.href = this.getAttribute("href");
    this.msg = this.getAttribute("msg");
    this.solo = this.msg ? "" : "solo";
    this.icon = this.getAttribute("icon");
    this.src = this.getAttribute("src");
    this.current = false; // bools default to false
  }

  iconTemplate() {
    return this.icon ? html`<i class="fa fa-fw fa-lg ${this.icon} ${this.solo}" aria-hidden="true"></i>` : nothing;
  }

  imageTemplate() {
    return this.src ? html`<img src="${this.src}" style="vertical-align: middle; height: 24px;">` : nothing;
  }

  anchorTemplate() {
    return html`<a href=${this.href ?? nothing} aria-current=${this.current ? "page" : nothing}>
                  ${this.imageTemplate()}
                  ${this.iconTemplate()}
                  ${this.msg}
                </a>`;
  }

  render() {
    return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="/style.css">
    ${this.anchorTemplate()}
    `;
  }
}

customElements.define('hover-button', HoverButton)