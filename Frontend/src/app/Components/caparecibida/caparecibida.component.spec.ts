import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaparecibidaComponent } from './caparecibida.component';

describe('CaparecibidaComponent', () => {
  let component: CaparecibidaComponent;
  let fixture: ComponentFixture<CaparecibidaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaparecibidaComponent]
    });
    fixture = TestBed.createComponent(CaparecibidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
