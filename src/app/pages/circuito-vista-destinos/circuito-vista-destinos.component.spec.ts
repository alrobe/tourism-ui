import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircuitoVistaDestinosComponent } from './circuito-vista-destinos.component';

describe('CircuitoVistaDestinosComponent', () => {
  let component: CircuitoVistaDestinosComponent;
  let fixture: ComponentFixture<CircuitoVistaDestinosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircuitoVistaDestinosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircuitoVistaDestinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
