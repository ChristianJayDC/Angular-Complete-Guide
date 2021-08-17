import { Component } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})

export class ServerComponent {
  serverID = 261998;
  serverName = 'Naning Server';
  serverStatus = 'Offline';

  getServerStatus() {
    return this.serverStatus;
  }
}
