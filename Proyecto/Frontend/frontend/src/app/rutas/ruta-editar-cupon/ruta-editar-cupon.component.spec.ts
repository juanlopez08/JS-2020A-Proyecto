import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEditarCuponComponent } from './ruta-editar-cupon.component';

describe('RutaEditarCuponComponent', () => {
  let component: RutaEditarCuponComponent;
  let fixture: ComponentFixture<RutaEditarCuponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaEditarCuponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEditarCuponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
