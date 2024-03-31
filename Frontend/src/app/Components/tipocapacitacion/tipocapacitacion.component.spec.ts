import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipocapacitacionComponent } from './tipocapacitacion.component';

describe('TipocapacitacionComponent', () => {
  let component: TipocapacitacionComponent;
  let fixture: ComponentFixture<TipocapacitacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipocapacitacionComponent]
    });
    fixture = TestBed.createComponent(TipocapacitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
