export class AppComponent extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    const element = this.render();
    const style = this.getStyle();
    shadow.appendChild(element);
    shadow.appendChild(style);
  }

  render() {
    const element = document.createElement('main');
    const item1 = document.createElement('accordion-item');

    element.innerHTML = `
    <div class="container">
      <accordion-item title="Via attributes" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"></accordion-item>

      <accordion-item>
        <h3 slot="title" part="title" class="App_title">Created via <i>slot</i></h3>
        <p slot="content" part="content" class="App_text">Some content <b>created via slot</b></p>
      </accordion-item>
    </div>
    `;

    return element;
  }

  getStyle() {
    const style = document.createElement('style');
    style.innerHTML = `
        .container {
          max-width: 40rem;
        }

        ::part(title) {
            font-family: var(--font-family);
            font-size: var(--font-size-m);
            color: var(--color-danger);
            margin: 0;
          }
          ::part(content) {
            font-family: var(--font-family);
            font-size: var(--font-size-s);
            color: var(--color-danger);
            margin: 0;
        }
`;
    return style;
  }
}
