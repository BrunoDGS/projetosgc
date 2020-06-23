import {  HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinanceiroC01Service {

  constructor( private http: HttpClient ) { }

  urlListar = 'http://localhost:8080/financeiro';

  getListar(): Observable<any[]> {
    return this.http.get<any[]>(this.urlListar);
  }
}
