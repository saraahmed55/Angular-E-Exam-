import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subjects } from '../Models/Subjects';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  constructor(private httpClient: HttpClient) { }
  baseUrl= 'http://127.0.0.1:8000/api/professors/';
  headers = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    }),
    withCredentials: true,
  };

  getProfessorSubjects(profcode: any): Observable<Subjects[]> {
    return this.httpClient.get<Subjects[]>(this.baseUrl + profcode + 'subjects').pipe();
  }
}
