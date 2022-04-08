import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Students } from '../Models/Students';
import { Departments } from '../Models/Departments';
import { StudentsModel } from '../Models/StudentsModel';
import { Subjects } from '../Models/Subjects';
import { ProfessorsModel } from '../Models/ProfessorsModel';
import { Mcqs } from '../Models/Mcqs';
import { TrueOrFalse } from '../Models/TrueOrFalse';
import { Roles } from '../Models/Roles';
import { professors } from '../Models/professors';
import { Exams } from '../Models/Exams';
import { AdminResults } from '../Models/AdminResults';
import { AdminExams } from '../Models/AdminExams';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }

  baseUrl= 'http://127.0.0.1:8000/api/admin/';
  headers = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    }),
    withCredentials: true,
  };

  GetAllStudents(): Observable<Students[]> {
    return this.httpClient.get<Students[]>(this.baseUrl+'students').pipe();
  }

  AddNewStudent(model:StudentsModel):Observable<StudentsModel[]>{
    return this.httpClient.post<StudentsModel[]>(this.baseUrl+'addstudent/',model).pipe();
  }

  GetDepartments(): Observable<Departments[]> {
    return this.httpClient.get<Departments[]>(this.baseUrl + 'departments').pipe();
  }

  GetStudent(id:any){
    return this.httpClient.get(this.baseUrl+'students/'+id).pipe();
  }

  DeleteStudent(id:any){
    return this.httpClient.delete(this.baseUrl+'deletestudent/'+id);
  }

  EditStudent(model:StudentsModel,id:any): Observable<StudentsModel> {
    return this.httpClient.put<StudentsModel>(this.baseUrl + 'editstudent/'+id,model).pipe();
  }

  GetAllSubjects(): Observable<Subjects[]> {
    return this.httpClient.get<Subjects[]>(this.baseUrl+'subjects').pipe();
  }

  AddNewSubject(model:Subjects):Observable<Subjects[]>{
    return this.httpClient.post<Subjects[]>(this.baseUrl+'addsubject/',model).pipe();
  }

  DeleteSubject(id:any){
    return this.httpClient.delete(this.baseUrl+'deletesubject/'+id);
  }

  GetAllDepartments(): Observable<Departments[]> {
    return this.httpClient.get<Departments[]>(this.baseUrl+'departments').pipe();
  }

  AddNewdepartment(model:Departments):Observable<Departments[]>{
    return this.httpClient.post<Departments[]>(this.baseUrl+'adddepartment/',model).pipe();
  }

  DeleteDepartment(id:any){
    return this.httpClient.delete(this.baseUrl+'deletedepartment/'+id);
  }

  GetAllprofessors(): Observable<ProfessorsModel[]> {
    return this.httpClient.get<ProfessorsModel[]>(this.baseUrl+'professors').pipe();
  }

  AddNewProfessor(model:ProfessorsModel):Observable<ProfessorsModel[]>{
    return this.httpClient.post<ProfessorsModel[]>(this.baseUrl+'addprofessor/',model).pipe();
  }

  DeleteProfessor(id:any){
    return this.httpClient.delete(this.baseUrl+'deleteprofessor/'+id);
  }

  GetAllMCQQuestions(): Observable<Mcqs[]> {
    return this.httpClient.get<Mcqs[]>(this.baseUrl+'questionsmcq').pipe();
  }

  DeleteMCQQuestion(id:any){
    return this.httpClient.delete(this.baseUrl+'deletemcqquestion/'+id);
  }

  GetAllTorFQuestions(): Observable<TrueOrFalse[]> {
    return this.httpClient.get<TrueOrFalse[]>(this.baseUrl+'questionstorf').pipe();
  }

  DeleteTorFQuestion(id:any){
    return this.httpClient.delete(this.baseUrl+'deletetorfquestion/'+id);
  }

  GetAllRoles(): Observable<Roles[]> {
    return this.httpClient.get<Roles[]>(this.baseUrl+'user_roles').pipe();
  }
  GetRolesProfessors(role_id:any): Observable<professors[]> {
    return this.httpClient.get<professors[]>(this.baseUrl+'user_roles/'+role_id+'/professors').pipe();
  }
  GetExams(): Observable<AdminExams[]> {
    return this.httpClient.get<AdminExams[]>(this.baseUrl+'exams').pipe();
  }

  GetAvgResults(): Observable<AdminResults[]>{
    return this.httpClient.get<AdminResults[]>(this.baseUrl+'results').pipe();
  }

}
