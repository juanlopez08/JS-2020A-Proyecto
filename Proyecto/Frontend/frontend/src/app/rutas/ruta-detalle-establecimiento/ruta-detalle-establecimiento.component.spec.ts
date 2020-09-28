import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaDetalleEstablecimientoComponent } from './ruta-detalle-establecimiento.component';

describe('RutaDetalleEstablecimientoComponent', () => {
  let component: RutaDetalleEstablecimientoComponent;
  let fixture: ComponentFixture<RutaDetalleEstablecimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaDetalleEstablecimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaDetalleEstablecimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
