import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaArticuloComponent } from './ruta-articulo.component';

describe('RutaArticuloComponent', () => {
  let component: RutaArticuloComponent;
  let fixture: ComponentFixture<RutaArticuloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaArticuloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
