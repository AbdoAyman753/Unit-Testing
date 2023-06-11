import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFormComponent } from './my-form.component';
import { DebugElement } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('MyFormComponent', () => {
  let component: MyFormComponent;
  let fixture: ComponentFixture<MyFormComponent>;
  let debugEl:DebugElement;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyFormComponent],
      imports:[ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(MyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugEl = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Name Control ', () => {
    var name = component.myValidation.controls['name'];
    expect(name.valid).toEqual(false);

    name.setValue('Abdelrahman');
    fixture.detectChanges();
    expect(name.valid).toBeTruthy();
  });

  it('Email Control ', () => {
    var email = component.myValidation.controls['email'];
    expect(email.valid).toEqual(false);

    email.setValue('abdo_100@gmail.com');
    fixture.detectChanges();
    expect(email.valid).toBeTruthy();
  })

  it('userName Control ', () => {
    var userName = component.myValidation.controls['userName'];
    expect(userName.valid).toEqual(false);

    userName.setValue('abdo_100@gmail.com');
    fixture.detectChanges();
    expect(userName.valid).toBeTruthy();
  });

  it('Add button clicked before/after',()=>{

    let addBtn = debugEl.query(By.css('#btn')); // button[type='submit']
    addBtn.triggerEventHandler('click');
    fixture.detectChanges();

    expect(component.userError).toEqual(1);
    expect(component.userNameError).toEqual(1);
    expect(component.emailError).toEqual(1);

    var name = component.myValidation.controls['name'];
    var email = component.myValidation.controls['email'];
    var userName = component.myValidation.controls['userName'];

    name.setValue('Ali');
    email.setValue('ali_100@gmail.com');
    userName.setValue('Ali_Okay');

    addBtn.triggerEventHandler('click');

    expect(component.userError).toEqual(0);
    expect(component.userNameError).toEqual(0);
    expect(component.emailError).toEqual(0);

  })
});
