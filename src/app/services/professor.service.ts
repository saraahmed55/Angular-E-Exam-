import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Subjects } from '../Models/Subjects';
import { Exams } from '../Models/Exams';
import { Students } from '../Models/Students';
import { Chapters } from '../Models/Chapters';
import { Mcqs } from '../Models/Mcqs';
import { TrueOrFalse } from '../Models/TrueOrFalse';
import { Departments } from '../Models/Departments';
import { EditChaptersModel } from '../Models/EditChaptersModel';
import { AddMCQs } from '../Models/AddMCQs';
import { EditMCQ } from '../Models/EditMCQ';
import { EditTorF } from '../Models/EditTorF';
import { AddTorF } from '../Models/AddTorF';
import { CreateExam } from '../Models/CreateExam';
import { StudentSubjectResults } from '../Models/StudentSubjectResults';
import { ExamInformation } from '../Models/ExamInformation';

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
    return this.httpClient.get<Subjects[]>(this.baseUrl + profcode + '/subjects').pipe();
  }

  getProfessorSubjectExams(prof_code:any, subjectid:any): Observable<Exams[]>{
    return this.httpClient.get<Exams[]>(this.baseUrl + prof_code + '/subject/'+subjectid+'/exams').pipe();
  }

  getStudentsOfSubjects(prof_code:any, subjectid:any): Observable<Students[]>{
    return this.httpClient.get<Students[]>(this.baseUrl + prof_code + '/subject/'+subjectid+'/students').pipe();
  }

  getProfessorSubjectChapters(prof_code:any, subjectid:any): Observable<Chapters[]>{
    return this.httpClient.get<Chapters[]>(this.baseUrl + prof_code + '/subject/'+subjectid+'/chapters').pipe();
  }

  AddNewChapter(model:Chapters,prof_code:any, subjectid:any):Observable<Chapters[]>{
    return this.httpClient.post<Chapters[]>(this.baseUrl+ prof_code + '/subject/'+subjectid+'/createchapter',model).pipe();
  }

  DeleteChapter(chapter_id:any,prof_code:any, subjectid:any){
    return this.httpClient.delete(this.baseUrl+prof_code+'/subject/'+subjectid+'/chapters/'+chapter_id);
  }

  getChapterMCQ(prof_code:any, subjectid:any,chapterid:any): Observable<Mcqs[]>{
    return this.httpClient.get<Mcqs[]>(this.baseUrl + prof_code + '/subject/'+subjectid+'/chapters/'+chapterid+'/mcqs').pipe();
  }

  Deletemcq(prof_code:any, subjectid:any,chapter_id:any,mcq_id:any){
    return this.httpClient.delete(this.baseUrl+prof_code+'/subject/'+subjectid+'/chapters/'+chapter_id+'/mcqs/'+mcq_id);
  }

  getChapterTF(prof_code:any, subjectid:any,chapterid:any): Observable<TrueOrFalse[]>{
    return this.httpClient.get<TrueOrFalse[]>(this.baseUrl + prof_code + '/subject/'+subjectid+'/chapters/'+chapterid+'/torf').pipe();
  }

  DeleteTf(prof_code:any, subjectid:any,chapter_id:any,tf_id:any){
    return this.httpClient.delete(this.baseUrl+prof_code+'/subject/'+subjectid+'/chapters/'+chapter_id+'/torf/'+tf_id);
  }

  subjectInfoDepartment(prof_code:any, subjectid:any): Observable<Departments[]>{
    return this.httpClient.get<Departments[]>(this.baseUrl + prof_code + '/subject/'+subjectid+'/departmentName').pipe();
  }
  getsubjectName(prof_code:any, subjectid:any): Observable<Subjects[]>{
    return this.httpClient.get<Subjects[]>(this.baseUrl + prof_code + '/subject/'+subjectid).pipe();
  }
  getsubjectStudentCount(prof_code:any, subjectid:any): Observable<Students[]>{
    return this.httpClient.get<Students[]>(this.baseUrl + prof_code + '/subject/'+subjectid+'/studentCount').pipe();
  }

  Editchapter(model:EditChaptersModel,prof_code:any, subjectid:any,id:any): Observable<Chapters> {
    return this.httpClient.put<Chapters>(this.baseUrl + prof_code + '/subject/'+subjectid+'/chapters/'+id+'/edit',model).pipe();
  }

  Getchapter(prof_code:any, subjectid:any,id:any){
    return this.httpClient.get(this.baseUrl + prof_code + '/subject/'+subjectid+'/chapters/'+id).pipe();
  }

  GetMCQ(prof_code:any, subjectid:any,chapterid:any,id:any){
    return this.httpClient.get(this.baseUrl + prof_code + '/subject/'+subjectid+'/chapters/'+chapterid+'/mcqs/'+id).pipe();
  }

  EditMcq(model:EditMCQ,prof_code:any, subjectid:any,chapterid:any,id:any): Observable<Mcqs> {
    return this.httpClient.put<Mcqs>(this.baseUrl + prof_code + '/subject/'+subjectid+'/chapters/'+chapterid+'/mcqs/'+id+'/edit',model).pipe();
  }

  GetTorF(prof_code:any, subjectid:any,chapterid:any,id:any){
    return this.httpClient.get(this.baseUrl + prof_code + '/subject/'+subjectid+'/chapters/'+chapterid+'/torf/'+id).pipe();
  }

  EditTorF(model:EditTorF,prof_code:any, subjectid:any,chapterid:any,id:any): Observable<TrueOrFalse> {
    return this.httpClient.put<TrueOrFalse>(this.baseUrl + prof_code + '/subject/'+subjectid+'/chapters/'+chapterid+'/torf/'+id+'/edit',model).pipe();
  }

  AddNewTorF(model:AddTorF,prof_code:any, subjectid:any,chapterid:any):Observable<AddTorF[]>{
    return this.httpClient.post<AddTorF[]>(this.baseUrl + prof_code + '/subject/'+subjectid+'/chapters/'+chapterid+'/createquestions/t&f',model).pipe();
  }

  AddMCQQuestion(model:AddMCQs,prof_code:any, subjectid:any,chapter_id:any):Observable<AddMCQs[]>{
    return this.httpClient.post<AddMCQs[]>(this.baseUrl+ prof_code + '/subject/'+subjectid+'/chapters/'+chapter_id+'/createquestions/mcq',model).pipe();
  }
  CreateExam(model:CreateExam,prof_code:any, subjectid:any):Observable<CreateExam[]>{
    return this.httpClient.post<CreateExam[]>(this.baseUrl+ prof_code + '/subject/'+subjectid+'/createexam',model).pipe();
  }
  GetstudentResult(prof_code:any, subjectid:any,studentcode:any): Observable<StudentSubjectResults[]>{
    return this.httpClient.get<StudentSubjectResults[]>(this.baseUrl + prof_code + '/subject/'+subjectid+'/students/'+studentcode+'/results').pipe();
  }
  GetExamsInformation(prof_code:any, subjectid:any,examId:any): Observable<ExamInformation[]>{
    return this.httpClient.get<ExamInformation[]>(this.baseUrl + prof_code + '/subject/'+subjectid+'/exams/'+examId+'/information').pipe();
  }


  id: any = '';
  public installsubjectStorage(id:any){
    localStorage.setItem('id',id);
    this.id = localStorage.getItem('id');
  }
  student_code: any = '';
  public installstudentStorage(student_code:any){
    localStorage.setItem('student_code',student_code);
    this.student_code = localStorage.getItem('student_code');
  }

  chapter_id: any = '';
  public installChapterStorage(id:any){
    localStorage.setItem('chapter_id',id);
    this.chapter_id = localStorage.getItem('chapter_id');
  }

  exam_id: any = '';
  public installExamStorage(exam_id:any){
    localStorage.setItem('exam_id',exam_id);
    this.exam_id = localStorage.getItem('exam_id');
  }

  mcq_id: any = '';
  public installMCQStorage(id:any){
    localStorage.setItem('mcq_id',id);
    this.mcq_id = localStorage.getItem('mcq_id');
  }

  trueORfalse_id: any = '';
  public installTorFStorage(id:any){
    localStorage.setItem('trueORfalse_id',id);
    this.trueORfalse_id = localStorage.getItem('trueORfalse_id');
  }

}
