import { Component } from '@angular/core';
import { EmployeesService } from '../services/employees.services';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {
  employee: any[] = [];
  constructor(public employeeService: EmployeesService) { }

  ngOnInit() {
    this.employee = this.employeeService.employees
  }
}