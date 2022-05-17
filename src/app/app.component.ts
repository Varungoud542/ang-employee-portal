import { Component } from '@angular/core';
import { LoginService } from './services/login.services';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'projector';
  isloggedIn = false;
  constructor(public loginService: LoginService) {}

  ngOnInit() {
    this.loginService.loggedInSubject.subscribe(
      (res) => (this.isloggedIn = res)
    );
  }
}
