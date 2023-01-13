import { Component } from '../../Component.js';

export class ContainerComponent extends Component {
  constructor() {
    super({
      stylesheet: '/components/ContainerComponent/ContainerComponent.css',
    });
  }

  template() {
    return `
<div class="container">
    <slot></slot>
</div>
    `;
  }
}
