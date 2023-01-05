export class Component extends HTMLElement {
  constructor() {
    super();

    const props = this._getPropsFromAttributes();
    const shadow = this.attachShadow({ mode: 'open' });
    const html = this.template(props);
    if (html.length) {
      const css = this.css();
      const style = css.length ? `<style>${css}</style>` : '';
      const combined = html + style;
      // remove surrounding empty spaces
      shadow.innerHTML = combined
        .replace(/^[\s\n\t]*/, '')
        .replace(/[\s\n\t]*$/, '');
    }
  }

  /** Returns the components innerHTML contents. */
  template(props) {
    return '';
  }

  /** Returns the components style tags innerHTML contents. */
  css() {
    return '';
  }

  /** Converts `data-` attributes to props */
  _getPropsFromAttributes() {
    return [...this.attributes].reduce((result, attr) => {
      const match = attr.nodeName.match(/data-(.*)/);
      if (!match || match.length < 2) return result;
      return {
        ...result,
        [match[1]]: attr.nodeValue,
      };
    }, {});
  }
}
