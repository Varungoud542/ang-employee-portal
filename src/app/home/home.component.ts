import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { dateValidator } from 'handsontable/validators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(public router: Router) {}
  public showPositions = true;
   dob= new Date()
  positions = [
    { position: 'JR.Developer', name: 'Dylan greene' },
    { position: 'Developer', name: 'Dyayana rooma' },
    { position: 'backend developer', name: 'chikky dud'  },
  ];
  stats = [
    { position: 'developer', name: 'varun',  },
    { position: 'backend developer', name: 'sandeep'},
    { position: 'CEO', name: 'tinku'},
    { position: 'clener', name: 'chinni' },
  ];
  
  showPositionsOrStats(flag: any) {
    this.showPositions = flag;
  }
}
