import {css, html, nothing} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export const BaseButtonMixin = (superClass) => class extends superClass {

  static properties = {
    active: {type: Boolean}
  }

  static styles = css` 
  a, button {
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    font: inherit;
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
  :host(.accent) {
    --hover-button-primary: var(--color-dogwood-rose);
    --hover-button-secondary: var(--color-light-pink);
    --hover-button-border: 2px solid;
    --hover-button-margin: 12px 24px;
    --hover-button-padding: 8px 24px;
  }
  `;

  constructor() {
    super();
    this.msg = this.getAttribute("msg");
    this.solo = this.msg ? "" : "solo";
    this.icon = this.getAttribute("icon")
    this.active = false; // bools default to false
  }

  _icon(_status) {
    return this.icon;
  }

  iconTemplate() {
    return this.icon ? html`<i class="fa fa-fw fa-lg ${this._icon(this.active)} ${this.solo}" aria-hidden="true"></i>` : nothing;
  }

  renderHelper(content) {
    return html`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                ${content}`;
  }

};