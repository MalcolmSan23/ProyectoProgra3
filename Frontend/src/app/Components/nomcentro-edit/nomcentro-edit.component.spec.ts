import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomcentroEditComponent } from './nomcentro-edit.component';

describe('NomcentroEditComponent', () => {
  let component: NomcentroEditComponent;
  let fixture: ComponentFixture<NomcentroEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NomcentroEditComponent]
    });
    fixture = TestBed.createComponent(NomcentroEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
