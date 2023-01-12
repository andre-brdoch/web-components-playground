import { Component } from '../Component.js';
import { escapeHtml } from '../utils.js';

export class AppComponent extends Component {
  constructor() {
    super();
  }

  template() {
    const snippets = [
      {
        title: 'Using Slots',
        content: `<div slot="content" class="text-stack">
            <text-component>We can pass content flexibly by using 
                <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots#adding_flexibility_with_slots" target="_blank">slots</a>.
            </text-component>
            <text-component>
                This behavior is very similar to 
                    <a href="https://vuejs.org/guide/components/slots.html" target="_blank">Vue slots</a>, or to
                    <a href="https://reactjs.org/docs/react-api.html#reactchildren" target="_blank">React children</a>,

                as in that they allow us to nest content directly within our web component, 
                and to use rich content.
            </text-component>
            <text-component>
                Using named slots, we can even target multiple slots in the same component.
            </text-component>
            <code-block data-code="${encodeURIComponent(
              `<accordion-item>
    <img slot="icon" src="/some-icon.svg" alt="icon" />
    <text-component slot="content">
        Slots allow for <strong>rich content</strong>
    </text-component>
</accordion-item>`
            )}"></code-block>
        </div>`,
        code: `<accordion-list>
    <accordion-item>
        <title-component slot="title" data-as="h3">Custom Elements</title-component>
        <div slot="content">
            <text-component>APIs to define new HTML elements.</text-component>
            <text-component>
                <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/customElements" target="_blank">Learn more</a>
            </text-component>
        </div>
        <icon-component slot="icon" />
    </accordion-item>

    <accordion-item>
        <title-component slot="title" data-as="h3">Shadow DOM</title-component>
        <div slot="content">
            <text-component>Encapsulated DOM and styling, with composition</text-component>
            <img src="/images/shadowdom.svg" alt="shadow dom" />
        </div>
        <icon-shadow slot="icon" />
    </accordion-item>

    <accordion-item>
        <title-component slot="title" data-as="h3">HTML Templates</title-component>
        <div slot="content">
            <text-component>HTML fragments that are not rendered, but stored until instantiated via JavaScript</text-component>
            <code-block data-code="${encodeURIComponent(
              `<template>
    <h1>
        <slot name="title"></slot>
    </h1>
</template>`
            )}" />
        </div>
        <icon-html slot="icon" />
    </accordion-item>
</accordion-list>`,
      },
      {
        title: 'Using data-attributes',
        content: `<div slot="content" class="text-stack">
            <text-component>
                A less flexible but more convenient way of customizing our web components, is to use data-attributes.
            </text-component>
            <text-component>
                The idea here is imitate a prop-like behavior, that we know from other frontend frameworks:
            </text-component>
            <code-block data-code="${encodeURIComponent(
              '<accordion-item data-title="Some title"></accordion-item>'
            )}"></code-block>
            <text-component>
                Within our web component, we can then read all the data-attributes set on the element, and use them for rendering.
            </text-component>
            <text-component>
                It is important to note that this technique will <strong>only work on the client side</strong>, 
                since it relies on browser APIs. Also, since HTML attributes are always string, it is only possible
                to pass string values this way.
            </text-component>
        </div>`,
        code: `<accordion-list>
    <accordion-item 
        data-title="Custom Elements" 
        data-content="APIs to define new HTML elements"
    >
        <icon-component slot="icon" />
    </accordion-item>

    <accordion-item 
        data-title="Shadow DOM" 
        data-content="Encapsulated DOM and styling, with composition"
    >
        <icon-shadow slot="icon" />
    </accordion-item>

    <accordion-item 
        data-title="HTML Templates" 
        data-content="HTML fragments that are not rendered, but stored until instantiated via JavaScript"
    >
        <icon-html slot="icon" />
    </accordion-item>
</accordion-list>`,
      },
    ];

    return `
<main class="root">
  <div class="container">
      ${snippets
        .map(
          (snippet) => `
          <demo-box data-title="${
            snippet.title
          }" data-code="${encodeURIComponent(snippet.code)}">
              ${snippet.content ?? ''}
            
              ${snippet.code}
          </demo-box>
      `
        )
        .join('')}
  </div>
</main>
    `;
  }

  css() {
    return `
.root {
  background-color: var(--color-palette-gray-200);
  min-height: 100vh;
}

.container {
  max-width: 90rem;
  padding: var(--space-l);
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-xl);
}

.text-stack {
  display: grid;
  gap: var(--space-s);
}

img {
  max-width: 100%;
  width: 100%;
}

img:not(:first-child) {
  margin-top: var(--space-m);
}
`;
  }
}
