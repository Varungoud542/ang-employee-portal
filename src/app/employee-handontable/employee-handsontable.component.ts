import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-handsontable',
  templateUrl: './employee-handsontable.component.html',
  styleUrls: ['./employee-handsontable.component.scss'],
})
export class employeeHandsontableponent {
  employees: any = [];
  settings = {};
  ngOnInit() {
    this.employees = JSON.parse(localStorage.getItem('employees') as string);
    this.settings = {
      data: this.formattedEmps,
      afterOnCellMouseDown: (event: any, coords: any, TD: any) => {
        if (event.target.name === 'approveBtn') {
          // this.formattedEmp[6]='Approved'
        } else if (event.target.name === 'rejectBtn') {
          // this.formattedEmp='Rejected'
        }
      },
      columns: [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {
          data: 'actions',
          readOnly: true,
          renderer: (
            instance: any,
            TD: any,
            row: any,
            col: any,
            prop: any,
            value: any,
            cellProperties: any
          ) => {
            TD.innerHTML = `<button name="approveBtn">Approve</button><button name="rejectBtn">Reject</button>`;
            return TD;
          },
        },
      ],
    };
  }

  formattedEmps() {
    let keys = [
      'id',
      'name',
      'role',
      'position',
      'leaveType',
      'leaveDuration',
      'status',
      'actions',
    ];
    const formattedEmp = this.employees.map((emp: any) => {
      let empArr = [];
      for (let key of keys) {
        empArr.push(emp[key]);
      }
      return empArr;
    });
    return formattedEmp;
  }
}
