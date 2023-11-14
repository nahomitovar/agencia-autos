import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarRefaccionesComponent } from './agregar-refacciones.component';

describe('AgregarRefaccionesComponent', () => {
  let component: AgregarRefaccionesComponent;
  let fixture: ComponentFixture<AgregarRefaccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarRefaccionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarRefaccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
