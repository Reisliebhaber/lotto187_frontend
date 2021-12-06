import { LoginDto } from './../shared/login.dto';
import { AuthService } from './../shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    username: [''],
    password: [''],
  });
  constructor(private fb: FormBuilder,
    private _auth: AuthService) { }

  ngOnInit(): void {
  }

  login() {
    const loginDto = this.loginForm.value as LoginDto;
    this._auth.login(this.loginForm.get('username')?.value, this.loginForm.get('password')?.value)
      .subscribe(token => {
        console.log('Token: ', token);
      });
    //console.log('loginfo: ', this.loginForm.value)
  }

}
