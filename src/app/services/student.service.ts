import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AdminExams } from '../Models/AdminExams';
import { Exams } from '../Models/Exams';
import { SaveResults } from '../Models/SaveResults';
import { StudentInfo } from '../Models/StudentInfo';
import { StudentResults } from '../Models/StudentResults';
import { Students } from '../Models/Students';
import { StudentSubjectResults } from '../Models/StudentSubjectResults';
import { SubjectDetails } from '../Models/SubjectDetails';
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
    return this.httpClient.get<StudentInfo>(this.baseUrl + studentcode + '/info').pipe();
  }

  GetStudentSubjects(studentcode: any): Observable<Subjects[]> {
    return this.httpClient.get<Subjects[]>(this.baseUrl + studentcode + '/subjects').pipe();
  }

  GetSubjectDetails(id: any): Observable<SubjectDetails> {
    return this.httpClient.get<SubjectDetails>(this.baseUrl + 'subjects/' + id).pipe();
  }

  GetStudentSubjectResults(studentcode: any, subjectid: any): Observable<StudentSubjectResults[]> {
    return this.httpClient.get<StudentSubjectResults[]>(this.baseUrl + studentcode + '/subject/' + subjectid + '/results').pipe();
  }

  GetStudentResults(studentcode: any): Observable<StudentResults[]> {
    return this.httpClient.get<StudentResults[]>(this.baseUrl + studentcode + '/results').pipe();
  }

  GetStudentSubjectExams(studentcode: any, subjectid: any): Observable<AdminExams[]> {
    return this.httpClient.get<AdminExams[]>(this.baseUrl + studentcode + '/subject/' + subjectid + '/exams').pipe();
  }

  GetExamInfo(studentcode: any, examid: any): Observable<AdminExams> {
    return this.httpClient.get<AdminExams>(this.baseUrl + studentcode  +'/getexaminfo/' + examid).pipe();
  }

  GetStudentExams(studentcode: any): Observable<AdminExams[]> {
    return this.httpClient.get<AdminExams[]>(this.baseUrl + studentcode + '/exams').pipe();
  }

  GetExamQuestions(studentcode: any, examid: any) {
    return this.httpClient.get(this.baseUrl + studentcode + '/getexam/' + examid).pipe();
  }

  SaveExamResult(studentcode: any, model: SaveResults):  Observable<SaveResults>{
    return this.httpClient.post<SaveResults>(this.baseUrl + studentcode + '/saveresult/', model).pipe();
  }

}
