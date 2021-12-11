import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, tap } from 'rxjs';
import { User } from '../interface/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  getUser(username: string): Observable<User> {
    return this._http.get<User>(environment.api + `/api/currentUser/${username}`)
      .pipe(
        tap(user => {
          if (user && user.id) {
            localStorage.setItem("user", JSON.stringify(user));
            console.log(JSON.stringify(user));
          } else {
            console.log(JSON.stringify(user));
          }
        })
      );
  }
}
