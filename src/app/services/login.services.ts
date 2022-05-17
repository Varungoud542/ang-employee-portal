import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class LoginService {
  loggedInSubject = new BehaviorSubject(false);
}