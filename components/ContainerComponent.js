import { Component } from '../Component.js';

export class ContainerComponent extends Component {
  constructor() {
    super();
  }

  template() {
    return `
<div class="container">
    <slot></slot>
</div>
    `;
  }

  css() {
    return `
.container {
    max-width: 90rem;
    padding: 0 var(--space-l);
    margin: 0 auto;
}
`;
  }
}
