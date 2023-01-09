import { Component } from '../Component.js';

export class IconHtml extends Component {
  constructor() {
    super({ hasShadow: false });
  }

  template() {
    return `
<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="M0 30V18h2.4v4.45h5.4V18h2.4v12H7.8v-5.15H2.4V30Zm15.8 0v-9.6h-3.5V18h9.4v2.4h-3.5V30Zm8 0V19.7q0-.75.475-1.225Q24.75 18 25.5 18h10q.75 0 1.225.475.475.475.475 1.225V30h-2.4v-9.6h-3.1v7.5h-2.4v-7.5h-3.1V30Zm16.3 0V18h2.4v9.6H48V30Z"/>
</svg>
    `;
  }
}
