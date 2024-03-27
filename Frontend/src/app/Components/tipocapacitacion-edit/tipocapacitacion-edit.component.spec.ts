import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipocapacitacionEditComponent } from './tipocapacitacion-edit.component';

describe('TipocapacitacionEditComponent', () => {
  let component: TipocapacitacionEditComponent;
  let fixture: ComponentFixture<TipocapacitacionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipocapacitacionEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipocapacitacionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
