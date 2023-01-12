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
        content: `<div slot="content">
            <text-component>TBD</text-component>
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
        content: `<div slot="content">
            <text-component>TBD</text-component>
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

a {
    color: var(--color-action);
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
