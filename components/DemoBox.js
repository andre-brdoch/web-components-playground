import { Component } from '../Component.js';

export class DemoBox extends Component {
  constructor() {
    super();
  }

  template({ title, code }) {
    return `
<section class="demo">
    <div class="meta">
        <title-component data-as="h2" data-size="l">${title}</title-component>
        <slot name="content"></slot>
    </div>
    
    <figure class="component-wrapper">
        <title-component data-as="figcaption" data-size="s">Rendered component:</title-component>
        <slot></slot>
    </figure>


    <div class="code-wrapper">
        <accordion-item data-title="See code">
            <code-block slot="content" class="code" data-code="${code}" />
        </accordion-item>
    <div>
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
    grid-template-columns: 1fr 1fr;
    gap: var(--space-m);
}

.meta {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr;
    gap: var(--space-m);
    align-items: start;
}

.meta > * {
    min-width: 0;
}

.component-wrapper {
    display: grid;
    gap: var(--space-s);
    margin: 0;
}

.code-wrapper {
    grid-column-end: span 2;
}

.code {
    max-width: 100%;
    min-width: 0;
}
    `;
  }
}
