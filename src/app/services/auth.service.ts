import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { AfterProfLogin } from '../Models/AfterProfLogin';
import { AfterStudentLogin } from '../Models/AfterStudentLogin';
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

  StudentLogin(logmodel: LoginModel): Observable<AfterStudentLogin> {
    return this.httpClient.post<AfterStudentLogin>(this.baseUrl + 'login/student', logmodel).pipe();
  }

  ProfessorLogin(logmodel: LoginModel): Observable<AfterProfLogin> {
    return this.httpClient.post<AfterProfLogin>(this.baseUrl + 'login/professor', logmodel).pipe();
  }

  GetprofessorCode(email:any):Observable<professors>{
    return this.httpClient.get<professors>(this.baseUrl + 'professors/'+email).pipe();
  }

  public prof_code: any = '';
  public installProfessorStorage(email:string, prof_code:string, role_name:string){
    localStorage.setItem('email',email);
    localStorage.setItem('prof_code',prof_code);
    localStorage.setItem('role_name',role_name);
    this.prof_code = localStorage.getItem('prof_code');
  }


  student_code: any = '';
  public installStudentStorage(email:string, student_code:string){
    localStorage.setItem('email',email);
    localStorage.setItem('student_code',student_code);
    this.student_code = localStorage.getItem('student_code');
  }


  Logout(){
    return this.httpClient.get(this.baseUrl + 'logout').pipe()
  }
}
