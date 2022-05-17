"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var careers_component_1 = require("./careers/careers.component");
var cart_component_1 = require("./cart/cart.component");
var employees_component_1 = require("./employees/employees.component");
var header_component_1 = require("./header/header.component");
var home_component_1 = require("./home/home.component");
var leaves_component_1 = require("./leaves/leaves.component");
var login_component_1 = require("./login/login.component");
var register_component_1 = require("./register/register.component");
var side_menu_component_1 = require("./side-menu/side-menu.component");
var todo_component_1 = require("./todo/todo.component");
var employee_handsontable_component_1 = require("./employee-handontable/employee-handsontable.component");
var animations_1 = require("@angular/platform-browser/animations");
var forms_2 = require("@angular/forms");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var card_1 = require("@angular/material/card");
var button_1 = require("@angular/material/button");
var toolbar_1 = require("@angular/material/toolbar");
var icon_1 = require("@angular/material/icon");
var expansion_1 = require("@angular/material/expansion");
var table_1 = require("@angular/material/table");
var dialog_1 = require("@angular/material/dialog");
var angular_1 = require("@handsontable/angular");
var registry_1 = require("handsontable/registry");
// register Handsontable's modules
registry_1.registerAllModules();
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                home_component_1.HomeComponent,
                header_component_1.HeaderComponent,
                side_menu_component_1.SidemenuComponent,
                employees_component_1.EmployeesComponent,
                careers_component_1.CareersComponent,
                leaves_component_1.LeavesComponent,
                todo_component_1.TodoComponent,
                cart_component_1.CartComponent,
                leaves_component_1.ConfirmDialog,
                employee_handsontable_component_1.employeeHandsontableponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                animations_1.BrowserAnimationsModule,
                forms_2.ReactiveFormsModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                card_1.MatCardModule,
                button_1.MatButtonModule,
                toolbar_1.MatToolbarModule,
                icon_1.MatIconModule,
                expansion_1.MatExpansionModule,
                table_1.MatTableModule,
                dialog_1.MatDialogModule,
                angular_1.HotTableModule,
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
