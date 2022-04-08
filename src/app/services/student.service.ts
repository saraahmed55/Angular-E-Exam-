import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { StudentInfo } from '../Models/StudentInfo';
import { Students } from '../Models/Students';
import { Subjects } from '../Models/Subjects';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }
  baseUrl= 'http://127.0.0.1:8000/api/students/';
  headers = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    }),
    withCredentials: true,
  };

  GetStudentInfo(studentcode: any): Observable<StudentInfo> {
    return this.httpClient.get<StudentInfo>(this.baseUrl+studentcode+'/info').pipe();
  }

  GetStudentSubjects(studentcode: any): Observable<Subjects[]> {
    return this.httpClient.get<Subjects[]>(this.baseUrl+studentcode+'/subjects').pipe();
  }

}
