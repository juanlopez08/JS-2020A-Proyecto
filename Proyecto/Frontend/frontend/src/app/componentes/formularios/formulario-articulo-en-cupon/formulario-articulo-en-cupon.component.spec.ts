import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioArticuloEnCuponComponent } from './formulario-articulo-en-cupon.component';

describe('FormularioArticuloEnCuponComponent', () => {
  let component: FormularioArticuloEnCuponComponent;
  let fixture: ComponentFixture<FormularioArticuloEnCuponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioArticuloEnCuponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioArticuloEnCuponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
