import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEstablecimientoComponent } from './ruta-establecimiento.component';

describe('RutaEstablecimientoComponent', () => {
  let component: RutaEstablecimientoComponent;
  let fixture: ComponentFixture<RutaEstablecimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaEstablecimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEstablecimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
