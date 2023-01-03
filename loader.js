// Single file web component setup.
// Inspired by: https://ckeditor.com/blog/implementing-single-file-web-components/

window.loadComponent = (function () {
  const fetchAndParse = (url) => {
    return fetch(url)
      .then((response) => response.text())
      .then((html) => {
        const parser = new DOMParser();
        const { head } = parser.parseFromString(html, 'text/html');
        const template = head.querySelector('template');
        const style = head.querySelector('style');
        const script = head.querySelector('script');
        return { template, style, script };
      });
  };

  const registerComponent = ({ template, style, script }) => {
    class Component extends HTMLElement {
      connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(style.cloneNode(true));
        shadow.appendChild(document.importNode(template.content, true));
      }
    }

    // todo: set up to automatically define all components
    return customElements.define('accordion-item', Component);
  };

  const loadComponent = (url) => {
    return fetchAndParse(url).then(registerComponent);
  };

  return loadComponent;
})();
