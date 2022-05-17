"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EmployeesService = void 0;
var core_1 = require("@angular/core");
var EmployeesService = /** @class */ (function () {
    function EmployeesService() {
        this.userRole = '';
        this.employees = [
            {
                name: 'varun',
                age: 21,
                position: 'developer',
                leaveDuration: '20-23 jan',
                leaveType: 'common',
                role: 'admin',
                id: 201,
                status: 'Pending'
            },
            {
                name: 'sucharitha',
                age: 29,
                position: 'developer',
                leaveDuration: '20-23 fab',
                leaveType: 'common',
                role: 'admin',
                id: 202,
                status: 'Pending'
            },
            {
                name: 'kanny',
                age: 21,
                position: 'ceo',
                leaveDuration: '20-23 mar',
                leaveType: 'common',
                role: 'user',
                id: 203,
                status: 'Pending'
            },
            {
                name: 'siddagoud',
                age: 49,
                position: 'developer',
                leaveDuration: '20-23 apl',
                leaveType: 'common',
                role: 'admin',
                id: 204,
                status: 'Pending'
            },
            {
                name: 'tinku',
                age: 29,
                position: 'developer',
                leaveDuration: '20-23 may',
                leaveType: 'common',
                role: 'member',
                id: 205,
                status: 'Pending'
            },
            {
                name: 'chinni',
                age: 21,
                position: 'developer',
                leaveDuration: '20-23 jun',
                leaveType: 'common',
                role: 'admin',
                id: 206,
                status: 'Pending'
            },
            {
                name: 'padhma',
                age: 39,
                position: 'developer',
                leaveDuration: '20-23 July',
                leaveType: 'common',
                role: 'member',
                id: 207,
                status: 'Pending'
            },
        ];
    }
    EmployeesService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], EmployeesService);
    return EmployeesService;
}());
exports.EmployeesService = EmployeesService;
