import { Component } from '../Component.js';
import { escapeHtml } from '../utils.js';

export class DemoBox extends Component {
  constructor() {
    super();
  }

  template({ title, code }) {
    const escapedCode = escapeHtml(decodeURIComponent(code));
    return `
<figure class="demo">
    <figcaption class="title">${title}</figcaption>
    <slot></slot>

    <code class="code-ctn">
        <pre class="code">${escapedCode}</pre>
    </code>
</figure>
    `;
  }

  css() {
    return `
.demo {
    background: var(--color-palette-light-gray);
    padding: var(--space-m);
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-m);
    overflow: hidden;
}

.title {
    font-family: var(--font-family);
    font-size: var(--font-size-m);
    font-weight: normal;
    color: var(--color-title);
    margin: 0;
}

.code-ctn {
    background: var(--color-palette-white);
    padding: var(--space-m);
    max-width: 100%;
    overflow-x: auto;
}

.code {
    font-family: monospace;
    font-size: var(--font-size-xs);
    color: var(--color-title);
    line-height: 1.5;
    margin: 0;
}
    `;
  }
}
