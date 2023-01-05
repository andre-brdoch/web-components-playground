import { Component } from '../Component.js';

export class AppComponent extends Component {
  constructor() {
    super();
  }

  template() {
    return `
<div class="container">
  <accordion-item data-title="Via attributes" data-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"></accordion-item>

  <accordion-item>
    <h3 slot="title" class="title">Created via <i>slot</i></h3>
    <p slot="content" class="text">Some content <b>created via slot</b></p>
  </accordion-item>
</div>
    `;
  }

  css() {
    return `
.container {
  max-width: 30rem;
}

.text {
    font-family: var(--font-family);
    font-size: var(--font-size-m);
    font-weight: normal;
    color: var(--color-danger);
    margin: 0;
}

.title {
    font-family: var(--font-family);
    font-size: var(--font-size-s);
    color: var(--color-danger);
    margin: 0;
}
`;
  }
}
