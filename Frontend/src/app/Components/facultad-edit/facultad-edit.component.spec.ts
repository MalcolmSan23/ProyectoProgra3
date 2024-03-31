import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultadEditComponent } from './facultad-edit.component';

describe('FacultadEditComponent', () => {
  let component: FacultadEditComponent;
  let fixture: ComponentFixture<FacultadEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacultadEditComponent]
    });
    fixture = TestBed.createComponent(FacultadEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
