import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearArticuloComponent } from './ruta-crear-articulo.component';

describe('RutaCrearArticuloComponent', () => {
  let component: RutaCrearArticuloComponent;
  let fixture: ComponentFixture<RutaCrearArticuloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaCrearArticuloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCrearArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
