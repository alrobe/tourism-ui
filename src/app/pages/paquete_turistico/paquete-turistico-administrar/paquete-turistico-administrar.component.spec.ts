import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaqueteTuristicoAdministrarComponent } from './paquete-turistico-administrar.component';

describe('PaqueteTuristicoAdministrarComponent', () => {
  let component: PaqueteTuristicoAdministrarComponent;
  let fixture: ComponentFixture<PaqueteTuristicoAdministrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaqueteTuristicoAdministrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaqueteTuristicoAdministrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
