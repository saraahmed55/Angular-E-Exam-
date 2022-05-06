import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subjects } from '../Models/Subjects';
import { Exams } from '../Models/Exams';
import { Students } from '../Models/Students';
import { Chapters } from '../Models/Chapters';
import { Mcqs } from '../Models/Mcqs';
import { TrueOrFalse } from '../Models/TrueOrFalse';

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

  AddMCQQuestion(model:Mcqs,prof_code:any, subjectid:any,chapter_id:any):Observable<Mcqs[]>{
    return this.httpClient.post<Mcqs[]>(this.baseUrl+ prof_code + '/subject/'+subjectid+'/chapters/'+chapter_id+'/createquestions/mcq',model).pipe();
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

  id: any = '';
  public installsubjectStorage(id:any){
    localStorage.setItem('id',id);
    this.id = localStorage.getItem('id');
  }

  chapter_id: any = '';
  public installChapterStorage(id:any){
    localStorage.setItem('chapter_id',id);
    this.chapter_id = localStorage.getItem('chapter_id');
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
