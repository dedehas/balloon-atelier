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
    background-color: var(--color-blue);
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 15px;
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

  .container {
    padding: 2px 16px;
  }

  @media screen and (min-width: 601px) {
    div.card-image {
      width: 33%;
    }
  }

  @media screen and (min-width: 769px) {
    div.card-image {
      width: 25%;
    }
  }
  `;

  constructor() {
    super();
  }

  render() {
    return html`
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="/style.css">

    <div class="card w3-margin">
      <div class="w3-cell-row">

        <div class="w3-cell w3-cell-middle w3-mobile card-image">
          <slot name="card-image">
            <img src="/images/defualt-balloon-clipart.png" alt="">
          </slot>
        </div> 
        <div class="w3-cell w3-mobile w3-container card-text">
          <div class="card-title">
            <slot name="card-title"><h4>Default Card Title</h4></slot>
          </div>
          <div class="card-body">
            <slot name="card-body">
              <p>Default Card Body</p> 
            </slot>
          </div>
        </div>
          
      </div>
    </div>
    `;
  }
}

customElements.define('content-card', ContentCard)