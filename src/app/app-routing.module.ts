import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareersComponent } from './careers/careers.component';
import { CartComponent } from './cart/cart.component';
import { employeeHandsontableponent } from './employee-handontable/employee-handsontable.component';
import { EmployeesComponent } from './employees/employees.component';
import { HomeComponent } from './home/home.component';
import { LeavesComponent } from './leaves/leaves.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'home',component:HomeComponent,data:{page:"1"}},
  {path:'login',component:LoginComponent,data:{page:"-1"}},
  {path:'register',component:RegisterComponent,data:{page:"2"}},
  {path:'careers',component:CareersComponent,data:{page:"3"}},
  {path:'leaves',component:LeavesComponent,data:{page:"4"}},
  {path:'employees',component:EmployeesComponent,data:{page:"5"}},
  {path:'goToToDo',component:TodoComponent,data:{page:"6"}},
  {path:'cart',component:CartComponent,data:{page:"7"}},
  {path:'hondsontable',component:employeeHandsontableponent,data:{page:"8"}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
