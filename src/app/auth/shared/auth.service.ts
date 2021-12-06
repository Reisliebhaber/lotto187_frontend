import { environment } from './../../../environments/environment';
import { TokenDto } from './token.dto';
import { Observable, tap } from 'rxjs';
import { LoginDto } from './login.dto';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //authenticated = false;
  constructor(private _http: HttpClient) { }

  loginn(loginDto: LoginDto): Observable<TokenDto> {
    return this._http.post<TokenDto>(environment.api + '/api/login', loginDto);
  }
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
        if (token && token.access_token && token.refresh_token) {
          localStorage.setItem('jwtToken', token.access_token);
          localStorage.setItem('refreshToken', token.refresh_token);
        }
      })
    );
  }

  getToken(): string | null{
    return localStorage.getItem('jwtToken');
  }

}
