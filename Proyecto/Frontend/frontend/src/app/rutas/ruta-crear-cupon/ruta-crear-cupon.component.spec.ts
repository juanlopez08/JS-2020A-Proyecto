import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearCuponComponent } from './ruta-crear-cupon.component';

describe('RutaCrearCuponComponent', () => {
  let component: RutaCrearCuponComponent;
  let fixture: ComponentFixture<RutaCrearCuponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaCrearCuponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCrearCuponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
