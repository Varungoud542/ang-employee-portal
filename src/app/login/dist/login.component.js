"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, employeesService, formBuilder, loginService) {
        this.router = router;
        this.employeesService = employeesService;
        this.formBuilder = formBuilder;
        this.loginService = loginService;
        this.errorMsg = '';
    }
    LoginComponent.prototype.register = function () {
        this.router.navigateByUrl('register');
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    LoginComponent.prototype.buildForm = function () {
        this.loginForm = this.formBuilder.group({
            name: ['', [forms_1.Validators.required]],
            id: ['', [forms_1.Validators.required]],
            password: ['', forms_1.Validators.required]
        });
    };
    LoginComponent.prototype.login = function () {
        var loginFormValues = this.loginForm.value;
        for (var _i = 0, _a = this.employeesService.employees; _i < _a.length; _i++) {
            var employee = _a[_i];
            if (loginFormValues.id === Number(employee.id)) {
                // localStorage.setItem('appUserName', employee.name);
                // localStorage.setItem('appUserRole', employee.role);
                localStorage.setItem('appUser', JSON.stringify(employee));
                this.loginService.loggedInSubject.next(true);
                this.router.navigateByUrl('home');
                return;
            }
        }
        if (!localStorage.getItem('appUserRole')) {
            this.errorMsg = 'user not Found';
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
