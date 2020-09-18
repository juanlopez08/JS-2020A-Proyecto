import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCuponComponent } from './formulario-cupon.component';

describe('FormularioCuponComponent', () => {
  let component: FormularioCuponComponent;
  let fixture: ComponentFixture<FormularioCuponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioCuponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCuponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
