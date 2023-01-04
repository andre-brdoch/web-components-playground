const CLASS_OPEN = 'open';

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
    const contentInnerCtnEl = document.createElement('div');
    const contentEl = document.createElement('p');

    buttonEl.classList.add('trigger');
    buttonEl.addEventListener('click', () => {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        element.classList.add(CLASS_OPEN);
      } else {
        element.classList.remove(CLASS_OPEN);
      }
    });

    const title = this.getAttribute('title');
    const titleSlot = this.querySelector('[slot="title"');
    if (titleSlot) {
      buttonEl.appendChild(titleSlot);
    } else {
      titleEl.innerText = title;
      buttonEl.appendChild(titleEl);
    }
    titleEl.classList.add('title');

    contentCtnEl.classList.add('content-ctn');
    contentInnerCtnEl.classList.add('inner-content-ctn');
    contentCtnEl.appendChild(contentInnerCtnEl);

    const content = this.getAttribute('content');
    const contentSlot = this.querySelector('[slot="content"');
    if (contentSlot) {
      contentInnerCtnEl.appendChild(contentSlot);
    } else {
      contentEl.textContent = content;
      contentInnerCtnEl.appendChild(contentEl);
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

        .content-ctn {
            display: grid;
            transition: grid-template-rows var(--anim-duration-medium), opacity var(--anim-duration-slow);
            transition-timing-function: ease-out;
            overflow: hidden;
            grid-template-rows: 0fr;
            opacity: 0;
        }
        .open .content-ctn {
            grid-template-rows: 1fr;
            opacity: 1;
        }

        .inner-content-ctn {
            min-height: 0;
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
