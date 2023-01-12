import { Component } from '../Component.js';

export class TitleComponent extends Component {
  constructor() {
    super();
  }

  template({ as = 'h2', size = 'm' }) {
    return `
<${as} class="title size-${size}">
    <slot></slot>
</${as}>
    `;
  }

  css() {
    return `
.title {
    font-family: var(--font-family);
    line-height: 1.2;
    font-weight: normal;
    color: var(--color-title);
    margin: 0;
}

.size-l {
    font-size: var(--font-size-l);
}

.size-m {
    font-size: var(--font-size-m);
}

.size-s {
    font-size: var(--font-size-s);
}
`;
  }
}
