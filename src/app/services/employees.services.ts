import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  userRole = '';
  employees = [
    {
      name: 'varun',
      age: 21,
      position: 'developer',
      leaveDuration: '20-23 jan',
      leaveType: 'common',
      role: 'admin',
      id: 201,
      status: 'Pending',
    },
    {
      name: 'sucharitha',
      age: 29,
      position: 'developer',
      leaveDuration: '20-23 fab',
      leaveType: 'common',
      role: 'admin',
      id: 202,
      status: 'Pending',
    },
    {
      name: 'kanny',
      age: 21,
      position: 'ceo',
      leaveDuration: '20-23 mar',
      leaveType: 'common',
      role: 'user',
      id: 203,
      status: 'Pending',
    },
    {
      name: 'siddagoud',
      age: 49,
      position: 'developer',
      leaveDuration: '20-23 apl',
      leaveType: 'common',
      role: 'admin',
      id: 204,
      status: 'Pending',
    },
    {
      name: 'tinku',
      age: 29,
      position: 'developer',
      leaveDuration: '20-23 may',
      leaveType: 'common',
      role: 'member',
      id: 205,
      status: 'Pending',
    },
    {
      name: 'chinni',
      age: 21,
      position: 'developer',
      leaveDuration: '20-23 jun',
      leaveType: 'common',
      role: 'admin',
      id: 206,
      status: 'Pending',
    },
    {
      name: 'padhma',
      age: 39,
      position: 'developer',
      leaveDuration: '20-23 July',
      leaveType: 'common',
      role: 'member',
      id: 207,
      status: 'Pending',
    },
  ];
}
