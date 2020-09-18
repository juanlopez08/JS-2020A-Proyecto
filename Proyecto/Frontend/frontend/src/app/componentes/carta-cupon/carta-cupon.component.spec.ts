import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaCuponComponent } from './carta-cupon.component';

describe('CartaCuponComponent', () => {
  let component: CartaCuponComponent;
  let fixture: ComponentFixture<CartaCuponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartaCuponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaCuponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
