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
    background-color: var(--card-color, var(--color-blue));
    border-radius: var(--card-radius, 15px);
    margin: 16px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
  }

  .card:hover {
    box-shadow: 0 12px 24px 0 rgba(0,0,0,0.2);
  }

  img, ::slotted(img) {
    width: 100%;
    height: inherit;
    object-fit: cover;
    padding: 2%;
    border-radius: 15px;
    aspect-ratio: 1 / 1;
  }

  .card-image {
    align-self: center;
    flex: 1;
  }

  .card-text {
    padding: var(--card-padding, 2px 16px);
  }

  @media screen and (min-width: 601px) {
    .card {
      flex-direction: row;
    }

    .card-text {
      flex: 2;
    }
  }

  @media screen and (min-width: 769px) {
    .card-text {
      flex: 3
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