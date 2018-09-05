import { Injectable } from '@angular/core';
import { Project } from './models/project.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class ProjectService {
  users: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
  this.users = database.list('users')
  }

  getUsers(){
    return this.users;
  }

  getUserById(userId: string) {
    return this.database.object('users/' + userId);
  }

  updateDatabase(newUser: Project){
    this.users.push(newUser);
  }

}
