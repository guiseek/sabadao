import { Component } from '@angular/core';
import { ProductFacade } from '@sabadao/shared/data-access';

@Component({
  selector: 'sabadao-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular';

  facade = new ProductFacade();

  constructor() {
    this.facade.loadProducts();
  }
}
