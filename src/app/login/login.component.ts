import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeesService } from '../services/employees.services';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../services/logins.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: any;
  errorMsg = '';

  constructor(
    public router: Router,
    public employeesService: EmployeesService,
    public formBuilder: FormBuilder,
    public loginService:LoginService
  ) {}

  register() {
    this.router.navigateByUrl('register');
  }
  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      id: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }

  login() {
    const loginFormValues = this.loginForm.value;
    for (let employee of this.employeesService.employees) {
      if (loginFormValues.id === Number(employee.id)) {
        // localStorage.setItem('appUserName', employee.name);
        // localStorage.setItem('appUserRole', employee.role);
        localStorage.setItem('appUser', JSON.stringify(employee));
        this.loginService.isLogedIn.next(true);
        this.router.navigateByUrl('home');
        return;
      }
    }
    if (!localStorage.getItem('appUserRole')) {
      this.errorMsg = 'user not Found';
    }
  }
}
