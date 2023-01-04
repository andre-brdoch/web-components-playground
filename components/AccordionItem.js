export class AccordionItem extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    const element = this.render();
    const style = this.getStyle();
    shadow.appendChild(element);
    shadow.appendChild(style);
  }

  render() {
    const element = document.createElement('article');
    const buttonEl = document.createElement('button');
    const titleEl = document.createElement('h2');
    const contentCtnEl = document.createElement('div');
    const contentEl = document.createElement('p');

    buttonEl.classList.add('trigger');

    const title = this.getAttribute('title');
    const titleSlot = this.querySelector('[slot="title"');
    if (titleSlot) {
      buttonEl.appendChild(titleSlot);
    } else {
      titleEl.innerText = title;
      buttonEl.appendChild(titleEl);
    }
    titleEl.classList.add('title');

    const content = this.getAttribute('content');
    const contentSlot = this.querySelector('[slot="content"');
    if (contentSlot) {
      contentCtnEl.appendChild(contentSlot);
    } else {
      contentEl.textContent = content;
      contentCtnEl.appendChild(contentEl);
    }
    contentEl.classList.add('content');

    element.appendChild(buttonEl);
    element.appendChild(contentCtnEl);

    return element;
  }

  getStyle() {
    const style = document.createElement('style');
    style.innerHTML = `
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
        .content {
            font-family: var(--font-family);
            margin: 0;
        }
        
        .title {
            font-size: var(--font-size-l);
            color: var(--color-title);
        }
        
        .content {
            font-size: var(--font-size-m);
            color: var(--color-title);
        }
`;
    return style;
  }
}
