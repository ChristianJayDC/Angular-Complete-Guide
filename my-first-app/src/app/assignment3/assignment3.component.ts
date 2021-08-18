import { Component, OnInit } from '@angular/core';
// import { log } from 'console';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
// export class Assignment3Component implements OnInit {
export class Assignment3Component {

  showSecret = false;
  log = [];

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date()); //Timestap
  }

}
