import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { JustH1Component } from './Components/just-h1/just-h1.component';
import { MyFormComponent } from './Components/my-form/my-form.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent, JustH1Component, MyFormComponent],
    imports:[ReactiveFormsModule]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-testing');
  });

});
