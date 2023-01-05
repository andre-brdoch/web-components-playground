import { Component } from '../Component.js';

export class AccordionItem extends Component {
  constructor() {
    super();
  }

  connectedCallback() {
    const buttonEl = this.shadowRoot.querySelector('button');
    let isOpen = false;
    const firstChild = this.shadowRoot.firstChild;

    buttonEl.addEventListener('click', () => {
      if (!isOpen) {
        firstChild.classList.add('open');
        buttonEl.setAttribute('aria-expanded', 'true');
      } else {
        firstChild.classList.remove('open');
        buttonEl.setAttribute('aria-expanded', 'false');
      }

      isOpen = !isOpen;
    });
  }

  template({ title, content }) {
    const hasIcon = !!this.getSlots().icon;
    return `
<article ${hasIcon ? 'class="has-icon"' : ''}>
  <button aria-controls="content" aria-expanded="false" class="trigger">
    <slot name="icon"></slot>
  
    <slot name="title">
      <h2 class="title">${title}</h2>
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
    grid-template-columns: 1fr 2rem;
    gap: 1rem;
    align-items: center;
    cursor: pointer;
}

.has-icon .trigger {
    grid-template-columns: 2rem 1fr 2rem;
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
  }
  
.has-icon .inner-content-ctn {
    padding-left: 3rem;
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

.title,
.content {
    font-family: var(--font-family);
    font-weight: normal;
    margin: 0;
}

.title {
    font-size: var(--font-size-m);
    color: var(--color-title);
}

.content {
    font-size: var(--font-size-s);
    color: var(--color-text);
}
`;
  }
}
