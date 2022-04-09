import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Exams } from '../Models/Exams';
import { SaveResults } from '../Models/SaveResults';
import { StudentInfo } from '../Models/StudentInfo';
import { Students } from '../Models/Students';
import { StudentSubjectResults } from '../Models/StudentSubjectResults';
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

  GetStudentSubjectResults(studentcode: any, subjectid: any): Observable<StudentSubjectResults[]> {
    return this.httpClient.get<StudentSubjectResults[]>(this.baseUrl + studentcode + '/subject/' + subjectid + '/results').pipe();
  }

  GetStudentSubjectExams(studentcode: any, subjectid: any): Observable<Exams[]> {
    return this.httpClient.get<Exams[]>(this.baseUrl + studentcode + '/subject/' + subjectid + '/exams').pipe();
  }

  GetExamQuestions(studentcode: any, examid: any) {
    return this.httpClient.get(this.baseUrl + studentcode + '/getexam/' + examid).pipe();
  }

  SaveExamResult(studentcode: any, model: SaveResults):  Observable<SaveResults>{
    return this.httpClient.post<SaveResults>(this.baseUrl + studentcode + '/saveresult/', model).pipe();
  }

}
// Route::get('/students/{studentcode}/getexam/{examid}', [StudentController::class,'getExamQuestions']);
// Route::post('/students/{studentcode}/saveresult', [StudentController::class,'PostExam']);