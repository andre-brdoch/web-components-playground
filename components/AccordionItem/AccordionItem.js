import { Component } from '../../Component.js';

export class AccordionItem extends Component {
  constructor() {
    super({ stylesheet: '/components/AccordionItem/AccordionItem.css' });
  }

  _isOpen = false;

  open = () => {
    this._changeOpenState(true);
  };

  close = () => {
    this._changeOpenState(false);
  };

  toggle = () => {
    if (this._isOpen) {
      this.close();
    } else {
      this.open();
    }
  };

  _changeOpenState(isOpen) {
    this.shadowRoot.firstChild.classList[isOpen ? 'add' : 'remove']('open');
    this.shadowRoot
      .querySelector('button')
      .setAttribute('aria-expanded', isOpen);
    this._isOpen = isOpen;
    const event = new CustomEvent(`accordion-${isOpen ? 'open' : 'close'}`, {
      composed: true,
      detail: this,
    });
    this.dispatchEvent(event);
  }

  connectedCallback() {
    const buttonEl = this.shadowRoot.querySelector('button');
    let isOpen = false;
    const firstChild = this.shadowRoot.firstChild;

    buttonEl.addEventListener('click', this.toggle);
  }

  template({ title, content }) {
    const hasIcon = !!this.getSlots().icon;
    return `
<article ${hasIcon ? 'class="has-icon"' : ''}>
  <button aria-controls="content" aria-expanded="false" class="trigger">
    <slot name="icon"></slot>
  
    <slot name="title">
      <title-component data-as="h3">${title}</title-component>
    </slot>

    <div class="chevron">
      <icon-chevron></icon-chevton>
    </div>
  </button>

  <div class="content-ctn">
    <div id="content" class="inner-content-ctn">
      <slot name="content">
        <text-component>${content}</text-component>
      </slot>
    </div>
  </div>
</article>
    `;
  }
}
