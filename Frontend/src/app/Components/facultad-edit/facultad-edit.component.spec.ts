import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultadEditComponent } from './facultad-edit.component';

describe('FacultadEditComponent', () => {
  let component: FacultadEditComponent;
  let fixture: ComponentFixture<FacultadEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacultadEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FacultadEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
