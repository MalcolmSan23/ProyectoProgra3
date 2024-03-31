import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiponiveleduEditComponent } from './tiponiveledu-edit.component';

describe('TiponiveleduEditComponent', () => {
  let component: TiponiveleduEditComponent;
  let fixture: ComponentFixture<TiponiveleduEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TiponiveleduEditComponent]
    });
    fixture = TestBed.createComponent(TiponiveleduEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
