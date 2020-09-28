import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaDetalleCuponComponent } from './ruta-detalle-cupon.component';

describe('RutaDetalleCuponComponent', () => {
  let component: RutaDetalleCuponComponent;
  let fixture: ComponentFixture<RutaDetalleCuponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaDetalleCuponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaDetalleCuponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
