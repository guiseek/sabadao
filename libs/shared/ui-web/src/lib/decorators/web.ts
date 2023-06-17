import { WebOptions } from '../interfaces/web-options';
import { getCycle } from '../utilities/get-cycle';

export function web(options: WebOptions) {
  return <T extends CustomElementConstructor>(target: T) => {
    const cycle = getCycle(target);

    target.prototype.attributeChangedCallback = function (
      name: string,
      prev: string,
      next: string
    ) {
      if (prev !== next) {
        this[name] = next;
      }
      if (this.attrChanged) {
        this.attrChanged.call(this, { name, prev, next });
      }
      cycle.attrChanged.call(this, name, prev, next);
    };

    target.prototype.connectedCallback = function () {
      if (this.connected) {
        this.connected.call(this);
      }
      cycle.connected.call(this);
    };

    target.prototype.connectedCallback = function () {
      const { template, styles } = this;

      if (this.connected) {
        this.connected.call(this);
      }

      const shadow = this.attachShadow({ mode: 'open' });
      const element = document.createElement('template');
      element.innerHTML = template;
      const html = element.content.cloneNode(true);

      if (styles) {
        const style = document.createElement('style');
        style.innerHTML = styles;
        html.appendChild(style);
      }

      shadow.appendChild(html);

      cycle.connected.call(this);

      if (this.afterConnected) {
        this.afterConnected.call(this);
      }

      queueMicrotask(() => {
        if (this.afterQueued) {
          this.afterQueued.call(this);
        }
      });
    };

    target.prototype.disconnectedCallback = function () {
      if (this.disconnected) {
        this.disconnected.call(this);
      }
    };

    customElements.define(options.selector, target);
  };
}
