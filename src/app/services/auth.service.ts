import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginModel } from '../Models/LoginModel';
import { ProfessorCode } from '../Models/ProfessorCode';
import { professors } from '../Models/professors';

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

  GetprofessorCode(email:any):Observable<professors>{
    return this.httpClient.get<professors>(this.baseUrl + 'professors/'+email).pipe();
  }

  prof_code:any="";
  emaill:any;
  public installStorage(email:string){

    localStorage.setItem('email',email);
    this.GetprofessorCode(email).subscribe(success => {
      console.log("sdhsuj");
      localStorage.setItem('prof_code',success.toString());
      // this.prof_code=localStorage.getItem('prof_code');
  }, err => console.log(err));
  }

  Logout(){
    return this.httpClient.get(this.baseUrl + 'Logout', {withCredentials: true}).pipe();
  }
}
