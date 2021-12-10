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
    return this._http.get<Tip>(environment.api + '/api/tips')
    .pipe(
      tap(console.log),
      catchError(this.handleError)
    );
  }/*
    const body = new HttpParams()
      .set('username', username)
      .set('password', password);

    return this._http.post<TokenDto>(environment.api + '/api/login',
      body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }*/
  tips$ = <Observable<Tip[]>>this._http.get<Tip>(environment.api + '/api/tips')
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
