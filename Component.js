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

    this._bindCustomInlineEvents();
  }

  /** Returns the components innerHTML contents. */
  template(props) {
    return '';
  }

  /** Returns the components style tags innerHTML contents. */
  css() {
    return '';
  }

  /** Returns the filled slot contents by name. */
  getSlots() {
    return [...this.children].reduce((result, node) => {
      const newResult = { ...result };
      const slotName = node.getAttribute('slot');
      if (slotName) {
        newResult[slotName] = node;
      } else if (!('default' in newResult)) {
        newResult.default = [node];
      } else {
        newResult.default.push(node);
      }
      return newResult;
    }, {});
  }

  /** Converts `data-` attributes to props */
  _getPropsFromAttributes() {
    return [...this.attributes].reduce((result, attr) => {
      const match = attr.nodeName.match(/data-(.*)/);
      if (!match || match.length < 2) return result;
      let val;
      try {
        // attempt to parse objects, arrays, booleans, numbers:
        val = JSON.parse(attr.nodeValue);
      } catch (err) {
        // no json, use as string
        val = attr.nodeValue;
      }
      return {
        ...result,
        [match[1]]: val,
      };
    }, {});
  }

  _bindCustomInlineEvents() {
    [...this.attributes]
      .filter((attr) => attr.nodeName.startsWith('on-'))
      .forEach((attr) => {
        const eventName = attr.nodeName.split(/^on-/)[1];
        const cb = eval(attr.nodeValue);
        if (typeof cb === 'function') {
          this.addEventListener(eventName, cb);
        }
      });
  }
}
