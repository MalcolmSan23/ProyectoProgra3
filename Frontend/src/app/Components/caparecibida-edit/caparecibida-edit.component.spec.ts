import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaparecibidaEditComponent } from './caparecibida-edit.component';

describe('CaparecibidaEditComponent', () => {
  let component: CaparecibidaEditComponent;
  let fixture: ComponentFixture<CaparecibidaEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaparecibidaEditComponent]
    });
    fixture = TestBed.createComponent(CaparecibidaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
