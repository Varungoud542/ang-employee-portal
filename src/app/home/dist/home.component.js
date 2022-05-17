"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomeComponent = void 0;
var core_1 = require("@angular/core");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
        this.showPositions = true;
        this.dob = new Date();
        this.positions = [
            { position: 'JR.Developer', name: 'Dylan greene' },
            { position: 'Developer', name: 'Dyayana rooma' },
            { position: 'backend developer', name: 'chikky dud' },
        ];
        this.stats = [
            { position: 'developer', name: 'varun' },
            { position: 'backend developer', name: 'sandeep' },
            { position: 'CEO', name: 'tinku' },
            { position: 'clener', name: 'chinni' },
        ];
    }
    HomeComponent.prototype.showPositionsOrStats = function (flag) {
        this.showPositions = flag;
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
