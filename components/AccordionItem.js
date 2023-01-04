export class AccordionItem extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const element = document.createElement('article');
    const button = document.createElement('button');
    const title = document.createElement('h2');
    const textCtn = document.createElement('div');
    const text = document.createElement('p');

    button.classList.add('trigger');
    element.appendChild(button);
    element.appendChild(textCtn);

    title.textContent = 'This is a test.';
    title.classList.add('title');
    button.appendChild(title);

    text.textContent = 'Some text';
    text.classList.add('text');
    textCtn.appendChild(text);

    shadow.appendChild(element);
    const style = this.getStyle();
    shadow.appendChild(style);
  }

  getStyle() {
    const style = document.createElement('style');
    style.innerText = `
        .trigger {
            appearance: none;
            display: block;
            border: none;
            padding: 0;
            background: transparent;
            width: 100%;
            text-align: left;
            cursor: pointer;
        }
        
        .title,
        .text {
            font-family: var(--font-family);
            margin: 0;
        }
        
        .title {
            font-size: var(--font-size-l);
            color: var(--color-title);
        }
        
        .text {
            font-size: var(--font-size-m);
            color: var(--color-title);
        }
`;
    return style;
  }
}
