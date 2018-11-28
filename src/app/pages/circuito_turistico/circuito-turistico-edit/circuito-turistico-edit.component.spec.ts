import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircuitoTuristicoEditComponent } from './circuito-turistico-edit.component';

describe('CircuitoTuristicoEditComponent', () => {
  let component: CircuitoTuristicoEditComponent;
  let fixture: ComponentFixture<CircuitoTuristicoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircuitoTuristicoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircuitoTuristicoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
