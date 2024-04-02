import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosconsulComponent } from './empleadosconsul.component';

describe('EmpleadosconsulComponent', () => {
  let component: EmpleadosconsulComponent;
  let fixture: ComponentFixture<EmpleadosconsulComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpleadosconsulComponent]
    });
    fixture = TestBed.createComponent(EmpleadosconsulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
