import { Component } from '../Component.js';

export class AccordionList extends Component {
  constructor() {
    super();
  }

  connectedCallback() {
    const childItems = this.shadowRoot
      .querySelector('slot')
      .assignedNodes()
      .filter((node) => node.tagName === 'ACCORDION-ITEM');

    childItems.forEach((item) => {
      item.addEventListener('accordion-open', (e) => {
        const otherItems = childItems.filter((otherItem) => otherItem !== item);
        otherItems.forEach((otherItem) => {
          otherItem.close();
        });
      });
    });
  }

  template() {
    return `
<div class="list">
    <slot></slot>
</div>
    `;
  }

  css() {
    return `
.list {
    display: grid;
    grid-template-columns: 1fr;
    background: var(--color-palette-white);
    border: 2px solid var(--color-border);
    border-radius: 4px;
    padding: 1rem 0.5rem;
    overflow: hidden;
    box-shadow: 0.5rem 0.5rem 2rem 0 rgb(0 0 0 / 7%);
}

::slotted(:not(:last-child)) {
    padding-bottom: 0.5rem;
    margin-bottom: 0.5rem;
    border-bottom: 2px solid var(--color-border);
}
    `;
  }
}
