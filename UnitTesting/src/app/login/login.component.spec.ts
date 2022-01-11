import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

//describe - specification means test case
describe('LoginComponent Test Cases', () => {

  //created an Object
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  //TestBed is used to create a dummy Modules.. before each test case is running it creates a Module and compile all the components.
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent]
    })
      .compileComponents(); //compile all the
  });

  //beforeEach -whenever the test case is run, before every test case if you want to execute some logic that we can write it here..
  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //first Test Cases..expecting component object to be created or not.
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //second test case -- Login success
  it("Login Success", async () => {
    component.username = "admin";
    component.password = "admin";
    component.CheckLogin();
    //expect(component.msg).toBe("Login Success")
    expect(component.msg).toBe("Welcome Admin")
  });

  //Third test case -- Login Fail
  it("Login Fail", async () => {
    component.username = "xyz";
    component.password = "xyz";
    component.CheckLogin();
    expect(component.msg).toBe("Invalid Credentials")
  });


});
