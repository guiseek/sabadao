import { Cycle } from '../interfaces/cycle';
import { noop } from './noop';

export function getCycle(target: CustomElementConstructor): Cycle {
  return {
    connected: target.prototype.connectedCallback ?? noop,
    disconnected: target.prototype.disconnectedCallback ?? noop,
    attrChanged: target.prototype.attributeChangedCallback ?? noop,
  };
}
