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
    item1.setAttribute('title', 'Via attributes');
    item1.setAttribute(
      'content',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    );
    element.appendChild(item1);

    const itemWithSlots = item1.cloneNode(true);
    const titleSlot = document.createElement('h3');
    titleSlot.classList.add('title');
    titleSlot.setAttribute('slot', 'title');
    titleSlot.innerText = 'Created via slot';
    const textSlot = document.createElement('p');
    textSlot.classList.add('text');
    textSlot.setAttribute('slot', 'content');
    textSlot.innerText = 'Some content created via slot';
    itemWithSlots.appendChild(titleSlot);
    itemWithSlots.appendChild(textSlot);

    element.appendChild(itemWithSlots);
    return element;
  }

  getStyle() {
    const style = document.createElement('style');
    style.innerHTML = `
        .title {
            font-family: var(--font-family);
            font-size: var(--font-size-m);
            color: var(--color-danger);
            margin: 0;
        }
        .text {
            font-family: var(--font-family);
            font-size: var(--font-size-s);
            color: var(--color-danger);
            margin: 0;
        }
`;
    return style;
  }
}
