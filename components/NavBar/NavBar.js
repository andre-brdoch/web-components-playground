import { Component } from '../../Component.js';

export class NavBar extends Component {
  constructor() {
    super({ stylesheet: '/components/NavBar/NavBar.css' });
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
}
