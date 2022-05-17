import { Component } from '@angular/core';
import { LoginService } from './services/logins.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'projector';
  isloggedIn: any;
  constructor(public loginService: LoginService) {}

  ngOnInit() {
    // this.isloggedIn = JSON.parse(localStorage.getItem('isLogedIn') as string);
    this.loginService.isLogedIn.subscribe((res) => (this.isloggedIn = res));
  }
}
