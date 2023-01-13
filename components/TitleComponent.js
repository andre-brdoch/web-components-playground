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
    transition: font-size var(--anim-duration-medium) ease-out;
}

.size-xl {
    font-size: clamp(var(--font-size-m), 4vw, var(--font-size-xl));
}

.size-l {
    font-size: clamp(var(--font-size-m), 4vw, var(--font-size-l));
  }
  
.size-m {
    font-size: clamp(var(--font-size-s), 3vw, var(--font-size-m));
}

.size-s {
    font-size: var(--font-size-s);
}
`;
  }
}
