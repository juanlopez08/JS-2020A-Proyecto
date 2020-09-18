import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearEstablecimientoComponent } from './ruta-crear-establecimiento.component';

describe('RutaCrearEstablecimientoComponent', () => {
  let component: RutaCrearEstablecimientoComponent;
  let fixture: ComponentFixture<RutaCrearEstablecimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaCrearEstablecimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCrearEstablecimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
