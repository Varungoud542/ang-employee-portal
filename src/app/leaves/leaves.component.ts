import { Component, EventEmitter } from '@angular/core';
import { EmployeesService } from '../services/employees.services';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
  styleUrls: ['./leaves.component.scss'],
})
export class LeavesComponent {
  rejectedLeaveReqst: any = {};
  appUser: any = {};
  employeesData: any = [];
  employeeLeaveRequst: any = {};
  editedUserLeave: any = {};
  showLeaves = true;
  today = new Date();
  displayedColumns: any[] = [
    'id',
    'name',
    'position',
    'leaveType',
    'leaveDuration',
    'role',
    'status',
    'time',
    'actions',
  ];
  dataSource: any;
  constructor(
    public employeesService: EmployeesService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.appUser = JSON.parse(localStorage.getItem('appUser') as string);
    // this.appUser.name = localStorage.getItem('appUserName');
    // this.employeeLeaveRequst.name = this.appUser.name;
    // this.appUser.role = localStorage.getItem('appUserRole');
    // this.updatedUsers = JSON.parse(
    //   localStorage.getItem('updatedUsers') as string
    // );
    if (this.appUser.role === 'admin') {
      this.employeesData = JSON.parse(
        localStorage.getItem('employees') as string
      );
    } else {
      this.employeesData = JSON.parse(
        localStorage.getItem('employees') as string
      );
      this.employeesData = this.employeesData.filter(
        (user: any) => user.name === this.appUser.name
      );
    }
    this.dataSource = new MatTableDataSource(this.employeesData);
    // for (let updatedUser of this.updatedUsers) {
    //   let index = this.employeesData.findIndex(
    //     (ele: any) => ele.id == updatedUser.id
    //   );
    //   this.employeesData[index] = updatedUser;
    // }
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
    this.rejectedLeaveReqst = employeeData;
    if (status == 'Approved') {
      employeeData.status = status;
      localStorage.setItem('employees', JSON.stringify(this.employeesData));
    } else {
      let dialogRef = this.dialog.open(ConfirmDialog);
      dialogRef.componentInstance.onReject.subscribe((res: any) => {
        this.rejectedLeaveReqst.status = 'Rejected';
        dialogRef.close();
      });
    }
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
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
})
export class ConfirmDialog {
  constructor(public dialogRef: MatDialogRef<ConfirmDialog>) {}
  onReject = new EventEmitter();
  reject() {
    this.onReject.emit();
  }
  onNoClick() {
    this.dialogRef.close();
  }
}
