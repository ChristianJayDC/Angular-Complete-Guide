import { Component } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .onlineClass {
      color: white;
    }
  `]
})

export class ServerComponent {
  serverID = Math.floor((Math.random() * 100000) + 1);
  randomNum = Math.floor((Math.random() * 100) + 1);
  serverName = 'Server' + this.randomNum;
  serverStatus = 'Offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
