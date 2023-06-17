import { AfterConnected, Connected, child, web } from '@sabadao/shared/ui-web';
import './app.element.scss';
import { ProductFacade } from '@sabadao/shared/data-access';

const facade = new ProductFacade();

@web({ selector: 'app-root' })
export class AppElement
  extends HTMLElement
  implements Connected, AfterConnected
{
  static observedAttributes = ['version'];

  version = '';

  styles = `:host { display: flex; flex-direction: column; background: #f5f5f5; }`;
  template = `
    <h1>Web Component</h1>
    <table>
      <tbody>
      </tbody>
    </table>
  `;

  @child('tbody')
  tbody!: HTMLTableSectionElement;

  connected() {
    facade.loading$.subscribe(console.log);
    facade.loadProducts();
  }

  afterConnected(): void {
    console.log(`this.tbody: `, this.tbody);

    facade.products$.subscribe((products) => {
      products.map((product, i) => {
        const row = this.tbody.insertRow(i);
        Object.values(product)
          .slice(0, 3)
          .forEach((prop, p) => {
            const cell = row.insertCell(p);
            cell.innerText = prop;
          });
      });
    });
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
