import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaqueteTuristicoEditComponent } from './paquete-turistico-edit.component';

describe('PaqueteTuristicoEditComponent', () => {
  let component: PaqueteTuristicoEditComponent;
  let fixture: ComponentFixture<PaqueteTuristicoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaqueteTuristicoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaqueteTuristicoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
