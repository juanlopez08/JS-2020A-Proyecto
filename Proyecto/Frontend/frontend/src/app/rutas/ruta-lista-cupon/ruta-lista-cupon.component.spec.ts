import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaListaCuponComponent } from './ruta-lista-cupon.component';

describe('RutaListaCuponComponent', () => {
  let component: RutaListaCuponComponent;
  let fixture: ComponentFixture<RutaListaCuponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaListaCuponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaListaCuponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
