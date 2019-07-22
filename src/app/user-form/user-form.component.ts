import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  name = "";

  isHighlight = false;

  eventStyle = { color: 'red', fontSize: '30px'  };

  oldStyle = { color: 'green', fontSize: '20px' };
  currentClass = { circle: !this.isHighlight, square: this.isHighlight}
  
}
