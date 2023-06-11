import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustH1Component } from './just-h1.component';

describe('JustH1Component', () => {
  let component: JustH1Component;
  let fixture: ComponentFixture<JustH1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JustH1Component]
    });
    fixture = TestBed.createComponent(JustH1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
