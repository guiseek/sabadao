import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductFeatureShoppingContainer } from './product-feature-shopping.container';

describe('ProductFeatureShoppingContainer', () => {
  let component: ProductFeatureShoppingContainer;
  let fixture: ComponentFixture<ProductFeatureShoppingContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductFeatureShoppingContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductFeatureShoppingContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
