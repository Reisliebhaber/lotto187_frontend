import { UserService } from './../../service/user.service';
import { Router } from '@angular/router';
import { LoginDto } from './../shared/login.dto';
import { AuthService } from './../shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.compose([Validators.required, Validators.min(5)])),
  });
  constructor(private fb: FormBuilder,
    private _auth: AuthService,
    private _userServ: UserService,
    private _router: Router) { }

  ngOnInit(): void {
  }

  login() {
    const loginDto = this.loginForm.value as LoginDto;
    this._auth.login(this.loginForm.get('username')?.value, this.loginForm.get('password')?.value)
      .subscribe(token => {
        if (token && token.access_token) {
          this._router.navigateByUrl('');
          this.setIsSignIn(true);
        }
        //console.log('Token: ', token);
      });
    //console.log('loginfo: ', this.loginForm.get('username')?.value)
  }

  saveCurrentUser() {
    const loginDto = this.loginForm.value as LoginDto;
    this.saveUser(this.loginForm.get('username')?.value);/*
    this.saveUser("lami");*/
  }

  saveUser(username: string) {
    this._userServ.getUser(username).subscribe();
  }

  setIsSignIn(signIn: boolean): void {
    this._auth.setIsSignIn(signIn);
  }

}
