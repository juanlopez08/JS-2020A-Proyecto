import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEditarArticuloComponent } from './ruta-editar-articulo.component';

describe('RutaEditarArticuloComponent', () => {
  let component: RutaEditarArticuloComponent;
  let fixture: ComponentFixture<RutaEditarArticuloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaEditarArticuloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEditarArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
