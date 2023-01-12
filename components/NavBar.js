import { Component } from '../Component.js';

export class NavBar extends Component {
  constructor() {
    super();
  }

  template() {
    return `
<nav>
    <container-component>
        <div class="inner">
            <title-component data-as="h1" data-size="xl">Learning Web Components</title-component>
            <a aria-label="See source code" href="https://github.com/andre-brdoch/web-components-playground" target="_blank">
                <img src="/images/github-mark.svg" alt="source code" />
            </a>
        </div>
    </container-component>
</nav>
    `;
  }

  connectedCallback() {
    const observer = new IntersectionObserver(
      ([e]) => e.target.classList.toggle('is-stuck', e.intersectionRatio < 1),
      { threshold: [1] }
    );
    observer.observe(this.shadowRoot.firstChild);
  }

  css() {
    return `
nav {
    height: var(--space-xxl);
    border-bottom: 2px solid transparent;

    position: sticky;
    /* Needed for IntersectionObserver to be able to get triggered: */
    top: -1px;
    left: 0;

    transition: border-bottom-color var(--anim-duration-medium) ease-out;
}

.inner {
    display: grid;
    grid-template-columns: 1fr var(--space-l);
    align-items: center;
    height: var(--space-xxl);
}

.is-stuck {
    --font-size-xl: var(--font-size-m);
    border-bottom-color: var(--color-border);
    background: var(--color-palette-gray-200);
}
`;
  }
}
