"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ConfirmDialog = exports.LeavesComponent = void 0;
var core_1 = require("@angular/core");
var table_1 = require("@angular/material/table");
var LeavesComponent = /** @class */ (function () {
    function LeavesComponent(employeesService, dialog) {
        this.employeesService = employeesService;
        this.dialog = dialog;
        this.rejectedLeaveReqst = {};
        this.appUser = {};
        this.employeesData = [];
        this.employeeLeaveRequst = {};
        this.editedUserLeave = {};
        this.showLeaves = true;
        this.today = new Date();
        this.displayedColumns = [
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
    }
    LeavesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appUser = JSON.parse(localStorage.getItem('appUser'));
        if (this.appUser.role === 'admin') {
            this.employeesData = JSON.parse(localStorage.getItem('employees'));
        }
        else {
            this.employeesData = JSON.parse(localStorage.getItem('employees'));
            this.employeesData = this.employeesData.filter(function (user) { return user.name === _this.appUser.name; });
        }
        this.dataSource = new table_1.MatTableDataSource(this.employeesData);
    };
    LeavesComponent.prototype.submitLeave = function () {
        this.employeesData.push(this.employeeLeaveRequst);
        this.employeeLeaveRequst = {};
    };
    LeavesComponent.prototype.getEdited = function (empObj) {
        this.editedUserLeave = Object.assign({}, empObj);
        console.log(this.editedUserLeave);
    };
    LeavesComponent.prototype.submitEditedLeave = function () {
        for (var _i = 0, _a = this.employeesData; _i < _a.length; _i++) {
            var employeeData = _a[_i];
            if (employeeData.id === this.editedUserLeave.id) {
                employeeData.leaveDuration = this.editedUserLeave.leaveDuration;
                employeeData.leaveType = this.editedUserLeave.leaveType;
            }
        }
        this.editedUserLeave = {};
    };
    LeavesComponent.prototype.employeeBtn = function () {
        this.showLeaves = !this.showLeaves;
    };
    LeavesComponent.prototype.approveOrRejectLeave = function (employeeData, status) {
        var _this = this;
        this.rejectedLeaveReqst = employeeData;
        if (status == 'Approved') {
            employeeData.status = status;
            localStorage.setItem('employees', JSON.stringify(this.employeesData));
        }
        else {
            var dialogRef_1 = this.dialog.open(ConfirmDialog);
            dialogRef_1.componentInstance.onReject.subscribe(function (res) {
                _this.rejectedLeaveReqst.status = 'Rejected';
                dialogRef_1.close();
            });
        }
    };
    LeavesComponent.prototype.sortItems = function () {
        this.employeesData.sort(function (a, b) {
            var nameA = a.name.toUpperCase(); // ignore upper and lowercase
            var nameB = b.name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            // names must be equal
            return 0;
        });
    };
    LeavesComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    LeavesComponent = __decorate([
        core_1.Component({
            selector: 'app-leaves',
            templateUrl: './leaves.component.html',
            styleUrls: ['./leaves.component.scss']
        })
    ], LeavesComponent);
    return LeavesComponent;
}());
exports.LeavesComponent = LeavesComponent;
var ConfirmDialog = /** @class */ (function () {
    function ConfirmDialog(dialogRef) {
        this.dialogRef = dialogRef;
        this.onReject = new core_1.EventEmitter();
    }
    ConfirmDialog.prototype.reject = function () {
        this.onReject.emit();
    };
    ConfirmDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ConfirmDialog = __decorate([
        core_1.Component({
            selector: 'app-confirm-dialog',
            templateUrl: './confirm-dialog.component.html'
        })
    ], ConfirmDialog);
    return ConfirmDialog;
}());
exports.ConfirmDialog = ConfirmDialog;
