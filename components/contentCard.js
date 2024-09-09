import {LitElement, css, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class ContentCard extends LitElement {

  static styles = css`
  h4 {
    font-weight: bold;
  }

  ::slotted(p) {
    margin-top: 0px;
    text-align: justify;
  }

  .card {
    display: flex;
    flex-direction: var(--card-flex-direction, column);
    height: var(--card-height, 100%);
    background-color: var(--card-background-color, var(--color-blue));
    border-radius: var(--card-radius, 15px);
    color: var(--card-color, var(--color-yale-blue));
    margin: var(--card-margin, 16px);
    box-shadow: var(--card-shadow, 0 4px 8px 0 rgba(0,0,0,0.2));
    transition: 0.3s;
  }

  .card:hover {
    box-shadow: var(--card-shadow-hover, 0 12px 24px 0 rgba(0,0,0,0.2));
  }

  :host(.carousel-cell) {
    --card-flex-direction: column;
    --card-height: 100%;
    --card-background-color: white;
    --card-image-flex: 1 1 auto;
    --card-image-aspect-ratio: 3 / 4;
    --card-text-flex: 0 0 0;
  }

  :host(.simple) {
    --card-radius: 0px;
    --card-margin: 0px;
    --card-image-padding: 0px;
    --card-shadow: none;
    --card-shadow-hover: none;
  }

  :host(.clear) {
    --card-color: var(--color-russian-violet);
    --card-background-color: transparent;
  }

  :host(.swap) {
    --card-order: 1;
  }

  img, ::slotted(img) {
    width: 100%;
    height: 100%;
    padding: var(--card-image-padding, 4%);
    object-fit: cover;
    border-radius: var(--card-radius, 15px);
    aspect-ratio: var(--card-image-aspect-ratio, 1 / 1);
    min-height: 0;
  }

  .card-image {
    align-self: center;
    flex: var(--card-image-flex, 1);
    min-height: 0;
    order: var(--card-order, 0);
  }

  .card-text {
    padding: var(--card-text-padding, 2px 16px);
    flex: var(--card-text-flex, initial);
  }

  @media screen and (min-width: 601px) {
    :host{
      --card-flex-direction: row;
      --card-text-flex: 2;
    }
    :host(.half) {
      --card-image-flex: 2 1 0;
    }
  }

  @media screen and (min-width: 769px) {
    :host {
      --card-text-flex: 3
    }
    :host(.half) {
      --card-image-flex: 3 1 0;
    }
  }
  `;

  constructor() {
    super();
  }

  render() {
    return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="/style.css">

    <div class="card">

        <div class="card-image">
          <slot name="card-image">
            <img src="/images/defualt-balloon-clipart.png" alt="">
          </slot>
        </div> 

        <div class="card-text">
          <div class="card-title">
            <slot name="card-title">
              <h4>Default Card Title</h4>
            </slot>
          </div>
          <div class="card-body">
            <slot name="card-body">
              <p>Default Card Body</p> 
            </slot>
          </div>
        </div>
          
    </div>
    `;
  }
}

customElements.define('content-card', ContentCard)