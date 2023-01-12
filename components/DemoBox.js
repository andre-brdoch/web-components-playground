import { Component } from '../Component.js';

export class DemoBox extends Component {
  constructor() {
    super();
  }

  template({ title, code }) {
    return `
<section class="demo">
    <title-component data-as="h2" data-size="l">${title}</title-component>

    <slot name="content"></slot>
    
    <slot></slot>

    <accordion-item data-title="See code">
        <code-block slot="content" class="code" data-code="${code}" />
    </accordion-item>
</section>
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

.code {
    max-width: 100%;
    min-width: 0;
}
    `;
  }
}
