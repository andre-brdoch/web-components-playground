export class Component extends HTMLElement {
  constructor({ hasShadow = true } = {}) {
    super();

    const props = this._getPropsFromAttributes();
    const html = this.template(props);

    if (!html.length) return;

    // element to apply HTML on
    let target = this;
    if (hasShadow) {
      const shadow = this.attachShadow({ mode: 'open' });
      target = shadow;
    }

    const css = this.css();
    const style = css.length ? `<style>${css}</style>` : '';
    const combined = html + style;
    const combinedTrimmed = combined
      .replace(/^[\s\n\t]*/, '')
      .replace(/[\s\n\t]*$/, '');

    target.innerHTML = combinedTrimmed;
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
