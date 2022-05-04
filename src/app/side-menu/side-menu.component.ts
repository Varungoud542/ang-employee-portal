import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.scss']
})
export class SidemenuComponent {
    public isToggled = false;
    constructor(public router:Router){}

    goToCareers(){
        this.router.navigateByUrl('careers')
    }
    goToleaves(){
        this.router.navigateByUrl('leaves')
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
    }
   
}