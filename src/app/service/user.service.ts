import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { User } from '../interface/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  getUser(username: string): Observable<User> {
    //console.log("Test in UserService: " + environment.api + `/api/currentUser/${username}`);
    return this._http.get<User>(environment.api + `/api/currentUser/${username}`)
      .pipe(
        tap(user => {
          console.log("Test in UserService TAP: " + JSON.stringify(user),
            catchError(this.handleError)
          );/*
          if (user && user.id) {
            localStorage.setItem("user", JSON.stringify(user));
            console.log(JSON.stringify(user));

          } else {
            console.log(JSON.stringify(user));
          }*/
        })
      );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
 */

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error);
    return throwError(() => `An error occured. ${error.message} - Error code: ${error.status}`);
  }
}
