import { Component } from '../Component.js';

export class IconComponent extends Component {
  constructor() {
    super({ hasShadow: false });
  }

  template() {
    return `
<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <path fill="currentColor" d="m18.95 30.85 2.2-2.2L16.5 24l4.6-4.6-2.2-2.2-6.8 6.8Zm10.1 0L35.9 24l-6.85-6.85-2.2 2.2L31.5 24l-4.65 4.65ZM9 42q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h30q1.2 0 2.1.9.9.9.9 2.1v30q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h30V9H9v30ZM9 9v30V9Z"/>
</svg>
    `;
  }
}
