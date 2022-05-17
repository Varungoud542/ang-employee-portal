"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.employeeHandsontableponent = void 0;
var core_1 = require("@angular/core");
var employeeHandsontableponent = /** @class */ (function () {
    function employeeHandsontableponent() {
        this.employees = [];
        this.settings = {};
    }
    employeeHandsontableponent.prototype.ngOnInit = function () {
        this.employees = JSON.parse(localStorage.getItem('employees'));
        this.fromtedValues();
        this.settings = {
            data: this.formattedEmp,
            afterOnCellMouseDown: function (event, coords, TD) {
                if (event.target.name === 'approveBtn') {
                    // this.formattedEmp[6]='Approved'
                    ;
                }
                else if (event.target.name === 'rejectBtn') {
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
                    renderer: function (instance, TD, row, col, prop, value, cellProperties) {
                        TD.innerHTML = "<button name=\"approveBtn\">Approve</button><button name=\"rejectBtn\">Reject</button>";
                        return TD;
                    }
                },
            ]
        };
    };
    employeeHandsontableponent.prototype.fromtedValues = function () {
        var keys = [
            'id',
            'name',
            'role',
            'position',
            'leaveType',
            'leaveDuration',
            'status',
            'actions',
        ];
        this.formattedEmp = this.employees.map(function (emp) {
            var empArr = [];
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                empArr.push(emp[key]);
            }
            return empArr;
        });
    };
    employeeHandsontableponent = __decorate([
        core_1.Component({
            selector: 'app-employee-handsontable',
            templateUrl: './employee-handsontable.component.html',
            styleUrls: ['./employee-handsontable.component.scss']
        })
    ], employeeHandsontableponent);
    return employeeHandsontableponent;
}());
exports.employeeHandsontableponent = employeeHandsontableponent;
