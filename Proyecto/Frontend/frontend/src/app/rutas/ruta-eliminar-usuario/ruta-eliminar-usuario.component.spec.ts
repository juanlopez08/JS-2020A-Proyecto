import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEliminarUsuarioComponent } from './ruta-eliminar-usuario.component';

describe('RutaEliminarUsuarioComponent', () => {
  let component: RutaEliminarUsuarioComponent;
  let fixture: ComponentFixture<RutaEliminarUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaEliminarUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEliminarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
