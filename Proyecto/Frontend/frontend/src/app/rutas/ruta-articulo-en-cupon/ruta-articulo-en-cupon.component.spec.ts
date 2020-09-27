import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaArticuloEnCuponComponent } from './ruta-articulo-en-cupon.component';

describe('RutaArticuloEnCuponComponent', () => {
  let component: RutaArticuloEnCuponComponent;
  let fixture: ComponentFixture<RutaArticuloEnCuponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaArticuloEnCuponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaArticuloEnCuponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
