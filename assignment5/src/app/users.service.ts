import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()

export class UsersService {

  activeUsers = ['Jenny', 'Andes'];
  inactiveUser = ['Ceejay', 'De La Cruz'];

  constructor(private counterService: CounterService) { }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUser[id]);
    this.inactiveUser.splice(id, 1);
    this.counterService.incrementInactiveToActive();
  }

  setToInactive(id: number) {
    this.inactiveUser.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.incrementActiveToInactive();
  }
}
