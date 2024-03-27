import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipocapacitacionComponent } from './tipocapacitacion.component';

describe('TipocapacitacionComponent', () => {
  let component: TipocapacitacionComponent;
  let fixture: ComponentFixture<TipocapacitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipocapacitacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipocapacitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
