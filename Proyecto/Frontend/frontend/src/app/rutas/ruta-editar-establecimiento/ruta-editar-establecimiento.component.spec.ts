import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEditarEstablecimientoComponent } from './ruta-editar-establecimiento.component';

describe('RutaEditarEstablecimientoComponent', () => {
  let component: RutaEditarEstablecimientoComponent;
  let fixture: ComponentFixture<RutaEditarEstablecimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaEditarEstablecimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEditarEstablecimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
