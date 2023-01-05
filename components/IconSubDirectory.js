import { Component } from '../Component.js';

export class IconSubDirectory extends Component {
  constructor() {
    super({ hasShadow: false });
  }

  template({ title, content }) {
    return `
<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <path fill="currentColor"  d="m28.3 42-2.15-2.15 8.1-8.1H10V8h3v20.75h21.3l-8.1-8.1 2.15-2.15L40 30.15Z"/>
</svg>
    `;
  }
}
