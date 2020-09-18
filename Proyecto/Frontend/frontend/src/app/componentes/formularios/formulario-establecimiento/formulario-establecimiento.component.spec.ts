import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEstablecimientoComponent } from './formulario-establecimiento.component';

describe('FormularioEstablecimientoComponent', () => {
  let component: FormularioEstablecimientoComponent;
  let fixture: ComponentFixture<FormularioEstablecimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioEstablecimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioEstablecimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
