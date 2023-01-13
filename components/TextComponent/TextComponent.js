import { Component } from '../../Component.js';

export class TextComponent extends Component {
  constructor() {
    super({ stylesheet: '/components/TextComponent/TextComponent.css' });
  }

  template({ as = 'p', size = 'm' }) {
    return `
<${as} class="text size-${size}">
    <slot></slot>
</${as}>
    `;
  }
}
