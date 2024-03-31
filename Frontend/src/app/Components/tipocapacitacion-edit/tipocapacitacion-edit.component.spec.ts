import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipocapacitacionEditComponent } from './tipocapacitacion-edit.component';

describe('TipocapacitacionEditComponent', () => {
  let component: TipocapacitacionEditComponent;
  let fixture: ComponentFixture<TipocapacitacionEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipocapacitacionEditComponent]
    });
    fixture = TestBed.createComponent(TipocapacitacionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
