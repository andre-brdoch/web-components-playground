import { Component } from '../../Component.js';

export class TitleComponent extends Component {
  constructor() {
    super({ stylesheet: '/components/TitleComponent/TitleComponent.css' });
  }

  template({ as = 'h2', size = 'm' }) {
    return `
<${as} class="title size-${size}">
    <slot></slot>
</${as}>
    `;
  }
}
