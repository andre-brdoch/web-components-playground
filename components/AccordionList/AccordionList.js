import { Component } from '../../Component.js';

export class AccordionList extends Component {
  constructor() {
    super({ stylesheet: '/components/AccordionList/AccordionList.css' });
  }

  connectedCallback() {
    const childItems =
      // if filled via slot:
      this.getSlots().default ??
      // if filled via `items` prop:
      Array.from(this.shadowRoot.querySelectorAll('accordion-item'));

    childItems.forEach((item) => {
      item.addEventListener('accordion-open', (e) => {
        const otherItems = childItems.filter((otherItem) => otherItem !== item);
        otherItems.forEach((otherItem) => {
          otherItem.close();
        });
      });
    });
  }

  template({ items = [], num }) {
    return `
<div class="list">
    <slot>
      ${items
        .map(
          (item) =>
            `<accordion-item data-title="${item.title ?? ''}" data-content="${
              item.content ?? ''
            }"></accordion-item>`
        )
        .join('')}
    </slot>
</div>
    `;
  }
}
