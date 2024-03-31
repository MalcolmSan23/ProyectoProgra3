import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiveleduComponent } from './niveledu.component';

describe('NiveleduComponent', () => {
  let component: NiveleduComponent;
  let fixture: ComponentFixture<NiveleduComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NiveleduComponent]
    });
    fixture = TestBed.createComponent(NiveleduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
