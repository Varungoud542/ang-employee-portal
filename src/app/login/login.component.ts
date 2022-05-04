import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { EmployeesService } from '../services/employees.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(public router: Router, public employeesService: EmployeesService) { }
  errorMsg="";
  currentUser: any = {};
  currentUserRole="";
  currentUserName="";

  register() {
    this.router.navigateByUrl('register')
  }

  login() {
    for (let employee of this.employeesService.employees) {
      if (employee.id === Number(this.currentUser.id)) {
        localStorage.setItem('appUserName', this.currentUser.name);
        localStorage.setItem('appUserRole',employee.role);
        this.router.navigateByUrl('home');
        return; 
      }
    }
    if(!localStorage.getItem('appUserRole')) {
      this.errorMsg="user not Found";
    }
  }


}