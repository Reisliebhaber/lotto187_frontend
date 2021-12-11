import { UserService } from './../service/user.service';
import { AuthService } from './../auth/shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../interface/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  testUsername = "lami";
  testUser: User | undefined;
  constructor(private _auth: AuthService,
    private _userServ: UserService) { }

  ngOnInit(): void {
  }

  saveCurrentUser() {
    //console.log(username);
    this._userServ.getUser("arnold").subscribe(user =>{
      this.testUser = user;
      this.testUsername = user.username
    });
  }
}
