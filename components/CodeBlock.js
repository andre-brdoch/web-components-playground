import { Component } from '../Component.js';
import { escapeHtml } from '../utils.js';

export class CodeBlock extends Component {
  constructor() {
    super();
  }

  template({ code }) {
    const escapedCode = escapeHtml(decodeURIComponent(code));

    return `
<pre class="code-ctn"><code class="code">${escapedCode}</code></pre>
    `;
  }

  css() {
    return `
.code-ctn {
    display: block;
    max-width: 100%;
    min-width: 0;
    background: var(--color-palette-super-light-gray);
    padding: var(--space-m);
    overflow-x: auto;
}

.code {
    font-family: monospace;
    font-size: var(--font-size-xs);
    color: var(--color-title);
    line-height: 1.5;
    margin: 0;
    max-width: 100%;
}
    `;
  }
}
