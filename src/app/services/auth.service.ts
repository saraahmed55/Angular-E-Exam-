import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginModel } from '../Models/LoginModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient,
    ) { }

  baseUrl= 'http://127.0.0.1:8000/api/';
  headers = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    }),
    withCredentials: true,
  };

  StudentLogin(logmodel: LoginModel): Observable<LoginModel> {
    return this.httpClient.post<LoginModel>(this.baseUrl + 'login/student', logmodel).pipe();
  }

  ProfessorLogin(logmodel: LoginModel): Observable<LoginModel> {
    return this.httpClient.post<LoginModel>(this.baseUrl + 'login/professor', logmodel).pipe();
  }

  Logout(){
    return this.httpClient.get(this.baseUrl + 'Logout', {withCredentials: true}).pipe();
  }
}
