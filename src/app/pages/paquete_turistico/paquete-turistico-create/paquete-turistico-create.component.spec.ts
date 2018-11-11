import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaqueteTuristicoCreateComponent } from './paquete-turistico-create.component';

describe('PaqueteTuristicoCreateComponent', () => {
  let component: PaqueteTuristicoCreateComponent;
  let fixture: ComponentFixture<PaqueteTuristicoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaqueteTuristicoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaqueteTuristicoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
