import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CareersComponent } from './careers/careers.component';
import { CartComponent } from './cart/cart.component';
import { EmployeesComponent } from './employees/employees.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LeavesComponent } from './leaves/leaves.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SidemenuComponent } from './side-menu/side-menu.component';
import { TodoComponent } from './todo/todo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    SidemenuComponent,
    EmployeesComponent,
    CareersComponent,
    LeavesComponent,
    TodoComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
