import { Connected, web } from '@sabadao/shared/ui-web';
import './app.element.scss';

@web({ selector: 'app-root' })
export class AppElement
  extends HTMLElement
  implements Connected
{
  static observedAttributes = ['version'];

  version = '';

  styles = `:host { display: flex; background: #f5f5f5; }`;
  template = `<h1>Web Component</h1>`;

  connected(): void {
    console.log('oie')
  }

  // attrChanged({ name, next }: AttrChangedValue): void {
  //   console.log(name, next);
  // }

  // afterConnected() {
  //   console.log('afterConnected:', this.shadowRoot?.innerHTML);
  // }

  // afterQueued() {
  //   console.log('afterQueued', this.shadowRoot?.innerHTML);
  // }

  // disconnected() {
  //   console.log('BYE BYE');
  // }
}
