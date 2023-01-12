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
        code: `<accordion-list>
    <accordion-item>
        <h3 slot="title" class="title">Custom Elements</h3>
        <div slot="content">
            <p class="text">APIs to define new HTML elements.</p>
            <p class="text">
                <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/customElements" target="_blank">Learn more</a>
            </p>
        </div>
        <icon-component slot="icon" />
    </accordion-item>

    <accordion-item>
        <h3 slot="title" class="title">Shadow DOM</h3>
        <div slot="content">
            <p class="text">Encapsulated DOM and styling, with composition</p>
            <img src="/images/shadowdom.svg" alt="shadow dom" />
        </div>
        <icon-shadow slot="icon" />
    </accordion-item>

    <accordion-item 
        data-title="HTML Templates" 
        data-content="HTML fragments that are not rendered, but stored until instantiated via JavaScript"
    >
        <h3 slot="title" class="title">HTML Templates</h3>
        <div slot="content">
            <p class="text">HTML fragments that are not rendered, but stored until instantiated via JavaScript</p>
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
<div class="container">
    ${snippets
      .map(
        (snippet) => `
        <demo-box data-title="${snippet.title}" data-code="${encodeURIComponent(
          snippet.code
        )}">
          ${snippet.code}
        </demo-box>
    `
      )
      .join('')}
</div>
    `;
  }

  css() {
    return `
.container {
  max-width: 90rem;
  padding: var(--space-l);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-m);
  align-items: stretch;
}

.title {
    font-family: var(--font-family);
    font-size: var(--font-size-m);
    font-weight: normal;
    line-height: 1.2;
    color: var(--color-title);
    margin: 0;
}

.text {
    font-family: var(--font-family);
    font-size: var(--font-size-s);
    line-height: 1.6;
    color: var(--color-text);
    margin: 0;
}

.text a {
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
