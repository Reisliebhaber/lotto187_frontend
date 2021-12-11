import { Tip } from './../interface/Tip';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TipService {

  constructor(private _http: HttpClient) { }


  getTips(): Observable<Tip> {
    const currentUser = localStorage.getItem("user");
    return this._http.post<Tip>(environment.api + '/api/tips', JSON.parse((currentUser) ? currentUser : ""))
      .pipe(
        tap(console.log),
        catchError(this.handleError)
      );
  }

  tips$ = <Observable<Tip[]>>this._http.post<Tip>(environment.api + '/api/tips', localStorage.getItem("user"))
    .pipe(
      tap(console.log),
      catchError(this.handleError)
    );

  save$ = (tip: Tip) => <Observable<Tip>>this._http.post<Tip>(environment.api + '/api/tip/save', tip)
    .pipe(
      tap(console.log),
      catchError(this.handleError)
    );

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error);
    return throwError(() => `An error occured. ${error.message} - Error code: ${error.status}`);
  }
}
