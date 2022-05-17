import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/logins.service';
@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.scss']
})
export class SidemenuComponent {
    public isToggled = false;
    constructor(public router:Router ,public loginService:LoginService){}

    panelOpenState=false;
    goToCareers(){
        this.router.navigateByUrl('careers')
    }
    goToleaves(){
        this.router.navigateByUrl('leaves',)
    }
    goToEmployees(){
        this.router.navigateByUrl('employees')
    }
    gpTohome(){
        this.router.navigateByUrl('home')
    }
    toggleMenu() {
        this.isToggled = !this.isToggled;
    }
    todo(){
        this.router.navigateByUrl('goToToDo')
    }
    cart(){
        this.router.navigateByUrl('cart')
    }
    logout(){
        localStorage.removeItem('appUserName')
        localStorage.removeItem('appUserRole')
        this.router.navigateByUrl('login')
        this.loginService.isLogedIn.next(false);

    }
    goToHandsontable(){
        this.router.navigateByUrl('hondsontable')
    }
   
}