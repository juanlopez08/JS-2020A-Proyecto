import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCuponesGuardadosComponent } from './ruta-cupones-guardados.component';

describe('RutaCuponesGuardadosComponent', () => {
  let component: RutaCuponesGuardadosComponent;
  let fixture: ComponentFixture<RutaCuponesGuardadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaCuponesGuardadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCuponesGuardadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
