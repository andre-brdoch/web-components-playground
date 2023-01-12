import { Component } from '../Component.js';

export class AccordionItem extends Component {
  constructor() {
    super();
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
        <p class="content">${content}</p>
      </slot>
    </div>
  </div>
</article>
    `;
  }

  css() {
    return `
.trigger {
    appearance: none;
    border: none;
    padding: 0;
    background: transparent;
    width: 100%;
    text-align: left;

    display: grid;
    grid-template-columns: 1fr var(--space-l);
    gap: var(--space-m);
    align-items: center;
    cursor: pointer;
}

.has-icon .trigger {
    grid-template-columns: var(--space-l) 1fr var(--space-l);
}

.content-ctn {
    display: grid;
    transition: grid-template-rows var(--anim-duration-medium), opacity var(--anim-duration-slow);
    transition-timing-function: ease-out;
    overflow: hidden;
    grid-template-rows: 0fr;
    opacity: 0;
}

.open .content-ctn {
    grid-template-rows: 1fr;
    opacity: 1;
}

.inner-content-ctn {
    min-height: 0;
    min-width: 0;
  }
  
.has-icon .inner-content-ctn {
    padding: 0 var(--space-xl);
}

.chevron {
    color: var(--color-title);
    transition: all var(--anim-duration-medium) ease-out;
    transition-property: fill, transform;
}

.open .chevron {
    color: var(--color-action);
    transform: rotate(180deg);
}

.content {
    font-family: var(--font-family);
    font-weight: normal;
    margin: 0;
    font-size: var(--font-size-s);
    line-height: 1.6;
    color: var(--color-text);
}
`;
  }
}
