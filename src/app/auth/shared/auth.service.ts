import { environment } from './../../../environments/environment';
import { TokenDto } from './token.dto';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/interface/User';

const jwtToken = 'jwtToken';
const refreshToken = 'refreshToken';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  signIn: boolean = false;
  isLoggedIn$ = new BehaviorSubject<string | null>(this.getToken());
  constructor(private _http: HttpClient) { }

  login(username: string, password: string): Observable<TokenDto> {
    const body = new HttpParams()
      .set('username', username)
      .set('password', password);

    return this._http.post<TokenDto>(environment.api + '/api/login',
      body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    ).pipe(
      tap(token => {
        if (token && token.access_token) {// && token.refresh_token
          localStorage.setItem(jwtToken, token.access_token);
          localStorage.setItem(refreshToken, token.refresh_token);
          this.isLoggedIn$.next(token.access_token);
        } else {
          this.logout();
        }
      })
    );
  }

  signin(user: User): Observable<User> {
    //alert(user.name + " is weirdchamp!!")
    //return localStorage.
    return this._http.post<User>(environment.api + '/api/register', user);
  }

  getToken(): string | null {
    return localStorage.getItem(jwtToken);
  }
  getRefreshToken(): string | null {
    return localStorage.getItem(refreshToken);
  }

  logout() {
    localStorage.removeItem(jwtToken);
    localStorage.removeItem(refreshToken);
    this.isLoggedIn$.next(null);
    this.signIn = false;
  }

  setIsSignIn(signIn: boolean): void {
    this.signIn = signIn;
  }
  isSignIn(): boolean {
    return this.signIn;
  }

}
