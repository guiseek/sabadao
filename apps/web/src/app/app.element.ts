import { Connected, web } from '@sabadao/shared/ui-web';
import './app.element.scss';
import { ProductFacade } from '@sabadao/shared/data-access';

const facade = new ProductFacade()

@web({ selector: 'app-root' })
export class AppElement
  extends HTMLElement
  implements Connected
{
  static observedAttributes = ['version'];

  version = '';

  styles = `:host { display: flex; background: #f5f5f5; }`;
  template = `<h1>Web Component</h1>`;

  connected() {
    facade.loading$.subscribe(console.log)
    facade.products$.subscribe(console.log)
    facade.loadProducts()
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
