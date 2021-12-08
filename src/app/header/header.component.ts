import { AuthService } from './../auth/shared/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  jwt: string | null | undefined;

  constructor(private _auth: AuthService) {
    _auth.isLoggedIn$.subscribe(jwt => {
      this.jwt = jwt;
    })
  }

  ngOnInit(): void {
  }

  logout() {
    this._auth.logout();
  }

  isSighIn(){
    return this._auth.isSignIn();
  }
}
