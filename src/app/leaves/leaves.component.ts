import { Component } from '@angular/core';
import { EmployeesService } from '../services/employees.services';

@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
  styleUrls: ['./leaves.component.scss'],
})
export class LeavesComponent {
  showLeaves = true;
  constructor(public employeesService: EmployeesService) {}
  current: any = {};
  employeesData: any = [];
  employeeLeaveRequst: any = {};
  editedUserLeave: any = {};
  updatedData: any = [];
  approvedUser: any = [];
  updatedUsers: any = [];
  ngOnInit() {
    this.current.name = localStorage.getItem('appUserName');
    this.employeeLeaveRequst.name = this.current.name;
    this.current.role = localStorage.getItem('appUserRole');
    this.updatedUsers = JSON.parse(
      localStorage.getItem('updatedUsers') as string
    );
    if (this.current.role === 'admin') {
      this.employeesData = JSON.parse(
        localStorage.getItem('employees') as string
      );
    } else {
      this.employeesData = JSON.parse(
        localStorage.getItem('employees') as string
      );
      this.employeesData = this.employeesData.filter(
        (user: any) => user.name === this.current.name
      );
    }
      for (let updatedUser of this.updatedUsers) {
        let index = this.employeesData.findIndex(
          (ele: any) => ele.id == updatedUser.id
        );
        this.employeesData[index] = updatedUser;
      }
  }
  submitLeave() {
    this.employeesData.push(this.employeeLeaveRequst);
    this.employeeLeaveRequst = {};
  }

  getEdited(empObj: any) {
    this.editedUserLeave = Object.assign({}, empObj);
    console.log(this.editedUserLeave);
  }
  submitEditedLeave() {
    for (let employeeData of this.employeesData) {
      if (employeeData.id === this.editedUserLeave.id) {
        employeeData.leaveDuration = this.editedUserLeave.leaveDuration;
        employeeData.leaveType = this.editedUserLeave.leaveType;
      }
    }
    this.editedUserLeave = {};
  }
  employeeBtn() {
    this.showLeaves = !this.showLeaves;
  }
  approveOrRejectLeave(employeeData: any, status: string) {
    employeeData.status = status;
    this.updatedData.push(employeeData);
    localStorage.setItem('updatedUsers', JSON.stringify(this.updatedData));
  }


  sortItems() {
    this.employeesData.sort((a: any, b: any) => {
      let nameA = a.name.toUpperCase(); // ignore upper and lowercase
      let nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
  }
}
