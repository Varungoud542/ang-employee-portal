"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SidemenuComponent = void 0;
var core_1 = require("@angular/core");
var SidemenuComponent = /** @class */ (function () {
    function SidemenuComponent(router, loginService) {
        this.router = router;
        this.loginService = loginService;
        this.isToggled = false;
        this.panelOpenState = false;
    }
    SidemenuComponent.prototype.goToCareers = function () {
        this.router.navigateByUrl('careers');
    };
    SidemenuComponent.prototype.goToleaves = function () {
        this.router.navigateByUrl('leaves');
    };
    SidemenuComponent.prototype.goToEmployees = function () {
        this.router.navigateByUrl('employees');
    };
    SidemenuComponent.prototype.gpTohome = function () {
        this.router.navigateByUrl('home');
    };
    SidemenuComponent.prototype.toggleMenu = function () {
        this.isToggled = !this.isToggled;
    };
    SidemenuComponent.prototype.todo = function () {
        this.router.navigateByUrl('goToToDo');
    };
    SidemenuComponent.prototype.cart = function () {
        this.router.navigateByUrl('cart');
    };
    SidemenuComponent.prototype.logout = function () {
        localStorage.removeItem('appUserName');
        localStorage.removeItem('appUserRole');
        this.router.navigateByUrl('login');
        this.loginService.isLogedIn.next(false);
    };
    SidemenuComponent.prototype.goToHandsontable = function () {
        this.router.navigateByUrl('hondsontable');
    };
    SidemenuComponent = __decorate([
        core_1.Component({
            selector: 'app-side-menu',
            templateUrl: './side-menu.component.html',
            styleUrls: ['./side-menu.component.scss']
        })
    ], SidemenuComponent);
    return SidemenuComponent;
}());
exports.SidemenuComponent = SidemenuComponent;
