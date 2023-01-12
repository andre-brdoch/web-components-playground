import { Component } from '../Component.js';

export class DemoBox extends Component {
  constructor() {
    super();
  }

  template({ title, code }) {
    return `
<figure class="demo">
    <figcaption class="title">${title}</figcaption>
    <slot></slot>

    <code-block class="code" data-code="${code}" />
</figure>
    `;
  }

  css() {
    return `
.demo {
    background: var(--color-palette-white);
    border: 2px solid var(--color-border);
    border-radius: 4px;
    padding: var(--space-m);
    margin: 0;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr;
    gap: var(--space-m);
    align-items: start;
}

.demo > * {
    min-width: 0;
}

.title {
    font-family: var(--font-family);
    font-size: var(--font-size-m);
    font-weight: normal;
    color: var(--color-title);
    margin: 0;
}
    `;
  }
}
