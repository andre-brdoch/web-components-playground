import { Component } from '../Component.js';

export class IconCode extends Component {
  constructor() {
    super({ hasShadow: false });
  }

  template({ title, content }) {
    return `
<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path fill="currentColor" d="M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path>
</svg>
    `;
  }
}