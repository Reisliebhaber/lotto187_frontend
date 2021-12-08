import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/User';
import { AuthService } from '../shared/auth.service';
import { LoginDto } from '../shared/login.dto';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginForm = this.fb.group({
    name: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.compose([Validators.required, Validators.min(5)])),
  });

  constructor(private fb: FormBuilder,
    private _auth: AuthService,
    private _router: Router) {
  }

  ngOnInit(): void {
  }

  signin() {
    const user: User = {
      id: null,
      name: this.loginForm.get('name')?.value,
      username: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value,
      roles: []//TODO add default user role
    };
    this._auth.signin(user).subscribe(responseUser => {
      if (responseUser && responseUser.id) {
        this._router.navigateByUrl('auth/login');
        console.log('User: ', responseUser);
        this.setIsSignIn(true);
      }
    });
  }

  setIsSignIn(signIn: boolean): void {
    this._auth.setIsSignIn(signIn);
  }
}
