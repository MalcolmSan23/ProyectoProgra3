import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiponiveleduComponent } from './tiponiveledu.component';

describe('TiponiveleduComponent', () => {
  let component: TiponiveleduComponent;
  let fixture: ComponentFixture<TiponiveleduComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TiponiveleduComponent]
    });
    fixture = TestBed.createComponent(TiponiveleduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
