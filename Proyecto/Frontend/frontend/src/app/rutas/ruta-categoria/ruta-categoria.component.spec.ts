import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCategoriaComponent } from './ruta-categoria.component';

describe('RutaCategoriaComponent', () => {
  let component: RutaCategoriaComponent;
  let fixture: ComponentFixture<RutaCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
