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
      } else {
        firstChild.classList.remove('open');
      }

      isOpen = !isOpen;
    });
  }

  template({ title, content }) {
    return `
<article>
  <button class="trigger">
    <slot name="title">
      <h2 class="title">${title}</h2>
    </slot>
    <svg class="chevron" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"></path>
    </svg>
  </button>
  <div class="content-ctn">
    <div class="inner-content-ctn">
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
    grid-template-columns: 1fr 3rem;
    align-items: center;
    cursor: pointer;
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

.chevron {
    fill: var(--color-title);
    transition: all var(--anim-duration-medium) ease-out;
    transition-property: fill, transform;
}
.open .chevron {
    fill: var(--color-action);
    transform: rotate(180deg);
}

.title,
.content {
    font-family: var(--font-family);
    font-weight: normal;
    margin: 0;
}

.title {
    font-size: var(--font-size-l);
    color: var(--color-title);
}

.content {
    font-size: var(--font-size-m);
    color: var(--color-text);
}
`;
  }
}
