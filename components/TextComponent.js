import { Component } from '../Component.js';

export class TextComponent extends Component {
  constructor() {
    super();
  }

  template({ as = 'p', size = 'm' }) {
    return `
<${as} class="text size-${size}">
    <slot></slot>
</${as}>
    `;
  }

  css() {
    return `
.text {
    font-family: var(--font-family);
    line-height: 1.6;
    font-weight: normal;
    color: var(--color-text);
    margin: 0;
}

.size-l {
    font-size: var(--font-size-m);
}

.size-m {
    font-size: var(--font-size-s);
}

.size-s {
    font-size: var(--font-size-xs);
}
`;
  }
}
