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
import { SimpleProfessor } from '../Models/SimpleProfessor';
import { EditStudentModel } from '../Models/EditStudentModel';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EditProfessorModel } from '../Models/EditProfessorModel';
import { RolesModel } from '../Models/RolesModel';
import { EditSubjectModel } from '../Models/EditSubjectModel';
import { EditDepartmentModel } from '../Models/EditDepartmentModel';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }

  form:FormGroup=new FormGroup({
    $key:new FormControl(null),
    student_code:new FormControl('',Validators.required),
    first_name:new FormControl(''),
    last_name:new FormControl(''),
    level:new FormControl(''),
    email:new FormControl('',Validators.required),

  })

  baseUrl= 'http://127.0.0.1:8000/api/admin/';
  headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": "Bearer " +localStorage.getItem('token'),
    });

  GetAllStudents(): Observable<Students[]> {
    return this.httpClient.get<Students[]>(this.baseUrl+'students',{headers: this.headers}).pipe();
  }

  AddNewStudent(model:StudentsModel):Observable<StudentsModel[]>{
    return this.httpClient.post<StudentsModel[]>(this.baseUrl+'addstudent/',model, {headers: this.headers}).pipe();
  }

  GetDepartments(): Observable<Departments[]> {
    return this.httpClient.get<Departments[]>(this.baseUrl + 'departments', {headers: this.headers}).pipe();
  }

  GetRoles(): Observable<RolesModel[]> {
    return this.httpClient.get<RolesModel[]>(this.baseUrl + 'roles', {headers: this.headers}).pipe();
  }

  GetStudent(code:any){
    return this.httpClient.get(this.baseUrl+'students/'+code, {headers: this.headers}).pipe();
  }

  DeleteStudent(id:any){
    return this.httpClient.delete(this.baseUrl+'deletestudent/'+id, {headers: this.headers});
  }

  EditStudent(model:EditStudentModel,id:any): Observable<Students> {
    return this.httpClient.put<Students>(this.baseUrl + 'editstudent/'+id,model, {headers: this.headers}).pipe();
  }

  GetAllSubjects(): Observable<Subjects[]> {
    console.log(this.headers)
    return this.httpClient.get<Subjects[]>(this.baseUrl+'subjects', {headers: this.headers}).pipe();
  }

  AddNewSubject(model:Subjects):Observable<Subjects[]>{
    return this.httpClient.post<Subjects[]>(this.baseUrl+'addsubject/',model, {headers: this.headers}).pipe();
  }

  DeleteSubject(id:any){
    return this.httpClient.delete(this.baseUrl+'deletesubject/'+id, {headers: this.headers});
  }

  GetAllDepartments(): Observable<Departments[]> {
    return this.httpClient.get<Departments[]>(this.baseUrl+'departments', {headers: this.headers}).pipe();
  }

  AddNewdepartment(model:Departments):Observable<Departments[]>{
    return this.httpClient.post<Departments[]>(this.baseUrl+'adddepartment/',model, {headers: this.headers}).pipe();
  }

  DeleteDepartment(id:any){
    return this.httpClient.delete(this.baseUrl+'deletedepartment/'+id, {headers: this.headers});
  }

  GetAllprofessors(): Observable<ProfessorsModel[]> {
    return this.httpClient.get<ProfessorsModel[]>(this.baseUrl+'professors', {headers: this.headers}).pipe();
  }

  GetProfessor(code:any){
    return this.httpClient.get(this.baseUrl+'professors/'+code, {headers: this.headers}).pipe();
  }
  GetSubject(code:any){
    return this.httpClient.get(this.baseUrl+'subjects/'+code, {headers: this.headers}).pipe();
  }
  GetDepartment(code:any){
    return this.httpClient.get(this.baseUrl+'departments/'+code, {headers: this.headers}).pipe();
  }

  EditProfessor(model:EditProfessorModel,id:any): Observable<professors> {
    return this.httpClient.put<professors>(this.baseUrl + 'editprofessor/'+id,model, {headers: this.headers}).pipe();
  }
  EditSubject(model:EditSubjectModel,id:any): Observable<Subjects> {
    return this.httpClient.put<Subjects>(this.baseUrl + 'editsubject/'+id,model, {headers: this.headers}).pipe();
  }
  EditDepartment(model:EditDepartmentModel,id:any): Observable<Departments> {
    return this.httpClient.put<Departments>(this.baseUrl + 'editdepartment/'+id,model, {headers: this.headers}).pipe();
  }

  AddNewProfessor(model:ProfessorsModel):Observable<ProfessorsModel[]>{
    return this.httpClient.post<ProfessorsModel[]>(this.baseUrl+'addprofessor/',model, {headers: this.headers}).pipe();
  }

  DeleteProfessor(id:any){
    return this.httpClient.delete(this.baseUrl+'deleteprofessor/'+id, {headers: this.headers});
  }

  GetAllMCQQuestions(): Observable<Mcqs[]> {
    return this.httpClient.get<Mcqs[]>(this.baseUrl+'questionsmcq', {headers: this.headers}).pipe();
  }

  DeleteMCQQuestion(id:any){
    return this.httpClient.delete(this.baseUrl+'deletemcqquestion/'+id, {headers: this.headers});
  }

  GetAllTorFQuestions(): Observable<TrueOrFalse[]> {
    return this.httpClient.get<TrueOrFalse[]>(this.baseUrl+'questionstorf', {headers: this.headers}).pipe();
  }

  DeleteTorFQuestion(id:any){
    return this.httpClient.delete(this.baseUrl+'deletetorfquestion/'+id, {headers: this.headers});
  }

  GetAllRoles(): Observable<Roles[]> {
    return this.httpClient.get<Roles[]>(this.baseUrl+'user_roles', {headers: this.headers}).pipe();
  }
  GetRolesProfessors(role_id:any): Observable<professors[]> {
    return this.httpClient.get<professors[]>(this.baseUrl+'user_roles/'+role_id+'/professors', {headers: this.headers}).pipe();
  }
  GetExams(): Observable<AdminExams[]> {
    return this.httpClient.get<AdminExams[]>(this.baseUrl+'exams', {headers: this.headers}).pipe();
  }

  GetAvgResults(): Observable<AdminResults[]>{
    return this.httpClient.get<AdminResults[]>(this.baseUrl+'results', {headers: this.headers}).pipe();
  }

  GetAdminProfessors(): Observable<SimpleProfessor[]>{
    return this.httpClient.get<SimpleProfessor[]>(this.baseUrl+'user_roles/admins', {headers: this.headers}).pipe();
  }

  GetProfessorProfessors(): Observable<SimpleProfessor[]>{
    return this.httpClient.get<SimpleProfessor[]>(this.baseUrl+'user_roles/professors', {headers: this.headers}).pipe();
  }

  ChangeToAdmin(id: any){
    return this.httpClient.get(this.baseUrl+'user_roles/toadmin/' + id, {headers: this.headers}).pipe();
  }

  ChangeToProfessor(id:any){
    return this.httpClient.get(this.baseUrl+'user_roles/toprofessor/' + id, {headers: this.headers}).pipe();
  }


  populateForm(student:any){
    this.form.setValue(student);
  }
}
