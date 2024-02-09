import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFilterByCategoryComponent } from './product-filter-by-category.component';

describe('ProductFilterByCategoryComponent', () => {
  let component: ProductFilterByCategoryComponent;
  let fixture: ComponentFixture<ProductFilterByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductFilterByCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductFilterByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
