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
                Within our web component, we can then 
                <a href="https://github.com/andre-brdoch/web-components-playground/blob/65a39a12466dee81bdaaabdc98147e4726e0af55/Component.js#L30" target="_blank">
                    read all the data-attributes set on the element</a>, and use them for rendering.
            </text-component>
            <text-component>
                It is important to note that this technique will <strong>only work on the client side</strong>, 
                since it relies on browser APIs.
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
      {
        title: 'Passing non-string data',
        content: `<div slot="content" class="text-stack">
            <text-component>
                Since all HTML attributes are strings, we can not directly pass non-string data into web components.
            </text-component>
            <text-component>
                However, we can use a trick: We can pass the content as JSON. This allows us to pass objects, arrays, 
                numbers, and booleans.
            </text-component>
            <text-component>
                We simply have to attempt to <code>JSON.parse()</code> the attribute:
                <a href="https://github.com/andre-brdoch/web-components-playground/blob/db1249a94a068767e617a6061e08acb16baacffb/Component.js#L60" target="_blank">implementation</a>
            </text-component>
            <text-component>
                Note that this is an <strong>inefficient</strong> way of passing data, 
                since serialization of large objects can be expensive. The proper way would be
                to set actual properties (instead of attributes) on the custom element, like so:
            </text-component>
            <code-block data-code="${escapeHtml(`const el = document.querySelector('some-component');
el.someProperty = { test: true };`)}"></code-block>
            <text-component>
                However, this would not be possible directly from within the template
                and is therefore very non-expressive, unless we use a framework like
                <a href="https://stenciljs.com/" target="_blank">Stencil</a>
                or <a href="https://lit.dev/" target="_blank">Lit</a>.

            </text-component>
        </div>`,
        code: `<!-- Generated by applying JSON.parse() and escaping the result: -->
<accordion-list
    data-items="${escapeHtml(
      JSON.stringify([
        { title: 'A', content: 'Content A' },
        { title: 'B', content: 'Content B' },
        { title: 'C', content: 'Content C' },
      ])
    )}"
></accordion-list>`,
      },
      {
        title: 'Event handeling',
        content: `<div slot="content" class="text-stack">
            <text-component>
                Our components can communicate with the outer world by dispatching
                <a href="https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events" target="_blank">
                    Custom Events</a>.
            </text-component>
            <text-component>
                To be able to pierce through the shadow-DOM boundaries, it is important to set the
                <code>composed</code> option to <code>true</code>.
            </text-component>
            <code-block data-code="${escapeHtml(
              `this.dispatchEvent(new CustomEvent('some-event', {
    composed: true,
    details: 'some data for the outer world',
}));`
            )}"></code-block>
            <text-component>
                We can then listen to our custom events:
            </text-component>
            <code-block data-code="${escapeHtml(
              `document.querySelector('some-component').addEventListener('some-event', () => {});`
            )}"></code-block>
            <text-component>
                Or via <a href="https://github.com/andre-brdoch/web-components-playground/blob/0b7043ea563378b90ec73bd4e37246146f06600c/Component.js#L75" target="_blank">inline listeners</a>:
            </text-component>
            <code-block data-code="${escapeHtml(
              `<some-component on-some-event="() => {}"></some-component>`
            )}"></code-block>
        </div>`,
        code: `<div>
    <accordion-item
        data-title="Triggers events"
        data-content="Hello world"
        on-accordion-open="() => alert('Opened the accordion')"
        on-accordion-close="() => alert('Closed the accordion')"
      ></accordion-item>
</div>`,
      },
      {
        title: 'Scoped Styles',
        content: `<div slot="content" class="text-stack">
            <text-component>
                With web components, we get scoped styles for free, thanks to the <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM" target="_blank">shadow DOM</a>.
            </text-component>
            <text-component>
                We are using 
                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties" target="_blank">CSS custom properties</a>
                to make the common theme accessible, since those pierce through the shadow DOM.
            </text-component>
        </div>`,
        code: `<!-- Example on how to overwrite the theme: -->
<accordion-list style="--color-title: var(--color-danger); --color-border: var(--color-action);">
    <accordion-item data-title="Shadow DOM" data-content="Encapsulated DOM and styling, with composition">
        <icon-shadow slot="icon" />
    </accordion-item>
</accordion-list>`,
      },
    ];

    return `
<main class="root">
    <nav-bar></nav-bar>

    <container-component>
        <div class="large-stack">
            <header class="text-stack">
                <text-component>
                    With this project, I was learning about and playing around with 
                    <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank">web components</a>.
                </text-component>
                <text-component>
                    The goal was to get to know the technology, without using any depencies at all. 
                </text-component>
                <text-component>This is what I learned!</text-component>
            </header>
        
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
    <container-component>
</main>
    `;
  }

  css() {
    return `  
.root {
  background-color: var(--color-palette-gray-200);
  min-height: 100vh;
  padding: var(--space-m) 0 var(--space-xl);
}

.large-stack {
  display: grid;
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
