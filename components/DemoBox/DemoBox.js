import { Component } from '../../Component.js';

export class DemoBox extends Component {
  constructor() {
    super({ stylesheet: '/components/DemoBox/DemoBox.css' });
  }

  template({ title, code }) {
    return `
<section class="demo">
    <div class="meta">
        <title-component data-as="h2" data-size="l">${title}</title-component>
        <slot name="content"></slot>
    </div>
    
    <figure class="component-wrapper">
        <title-component data-as="figcaption">Rendered component:</title-component>
        <slot></slot>
        <accordion-item data-title="See code">
            <code-block slot="content" class="code" data-code="${code}" />
        </accordion-item>
    </figure>
</section>
    `;
  }
}
