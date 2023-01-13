import { Component } from '../../Component.js';
import { escapeHtml } from '../../utils.js';

export class CodeBlock extends Component {
  constructor() {
    super({ stylesheet: '/components/CodeBlock/CodeBlock.css' });
  }

  template({ code }) {
    const escapedCode = escapeHtml(decodeURIComponent(code));

    return `
<pre class="code-ctn"><code class="code">${escapedCode}</code></pre>
    `;
  }
}
