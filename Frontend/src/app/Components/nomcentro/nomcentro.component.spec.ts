import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomcentroComponent } from './nomcentro.component';

describe('NomcentroComponent', () => {
  let component: NomcentroComponent;
  let fixture: ComponentFixture<NomcentroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NomcentroComponent]
    });
    fixture = TestBed.createComponent(NomcentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
