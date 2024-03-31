import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiveleduEditComponent } from './niveledu-edit.component';

describe('NiveleduEditComponent', () => {
  let component: NiveleduEditComponent;
  let fixture: ComponentFixture<NiveleduEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NiveleduEditComponent]
    });
    fixture = TestBed.createComponent(NiveleduEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
