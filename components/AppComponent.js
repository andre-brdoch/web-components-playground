import { Component } from '../Component.js';

export class AppComponent extends Component {
  constructor() {
    super();
  }

  template() {
    return `
<div class="container">
  <accordion-list>
    <accordion-item data-title="Via attributes" data-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua">
      <icon-sub-directory slot="icon"></icon-sub-directory>
    </accordion-item>

    <accordion-item>
      <icon-code slot="icon"></icon-code>
      <h3 slot="title" class="title">Created via <i>slot</i></h3>
      <p slot="content" class="text">Some content <b>created via slot</b></p>
    </accordion-item>

    <accordion-item data-title="No icon" data-content="Icon can also be left out."></accordion-item>
  </accordion-list>
</div>
    `;
  }

  css() {
    return `
.container {
  max-width: 30rem;
  padding: var(--space-l);
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
