import { Component, OnInit , ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { SubjectDetails } from 'src/app/Models/SubjectDetails';
import { StudentInfo } from 'src/app/Models/StudentInfo';
import { AdminExams } from 'src/app/Models/AdminExams';
import { StudentSubjectResults } from 'src/app/Models/StudentSubjectResults';

export interface PeriodicElement {
  id:string;
  examName?:string;
  subject?:string;
  qCount?:string;
  grad?:string;
  duration?:string;
  sDate?:string;
  eDate?:string;



}

const ELEMENT_DATA: PeriodicElement[] = [
  {id:'1' ,  examName:'midterm', subject:'VB' , qCount:'15' ,grad:'30' , duration:'15',sDate:'12/12/2022  9am' , eDate:'15/12/2022   9am' },
  {id:'2' ,  examName:'midterm' },


];

@Component({
  selector: 'app-subject-details',
  templateUrl: './subject-details.component.html',
  styleUrls: ['./subject-details.component.css']
})
export class SubjectDetailsComponent implements OnInit {
  isOpen:boolean=false;
  value = 30;
  id = this.activatedroute.snapshot.paramMap.get("id");
  subject: SubjectDetails;
  student:StudentInfo;
  exams:AdminExams[];
  results:StudentSubjectResults[];
  timenow:Date;

  displayedColumns: string[]=['id' ,'examName', 'duration' ,'sDate' ,'eDate' , "action"]
  resultDisplayedColumns: string[]=['id' ,'examName', 'result']
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;



  constructor(
    private activatedroute:ActivatedRoute,
    private studentservice:StudentService
    ) { }

  ngOnInit(): void {
    this.timenow = new Date();
    this.dataSource.paginator = this.paginator;
    this.subject = new SubjectDetails();
    this.student = new StudentInfo();
    this.exams = [];
    this.results = [];
    this.getInfo();
    this.getSubjectDetails(this.id)
    this.getExams();
    this.getResults();
  }

  toggleNav(){
    this.isOpen= !this.isOpen
  }

  getSubjectDetails(id:any){
    this.studentservice.GetSubjectDetails(id).subscribe(success=>{
      this.subject=success;}, err =>{
        console.log(err);
      });
  }

  getInfo(){
    const studentcode = localStorage.getItem('student_code');
    if(studentcode != null){
      this.studentservice.GetStudentInfo(studentcode).subscribe(success=>{
        this.student=success;}, err =>{
          console.log(err);
        });
    }
  }

  getExams() {
    const studentcode = localStorage.getItem('student_code');
    if(studentcode != null){
      this.studentservice.GetStudentSubjectExams(studentcode, this.id).subscribe(success=>{
        this.exams=success;}, err =>{
          console.log(err);
        });
    }
  }

  getResults() {
    const studentcode = localStorage.getItem('student_code');
    if(studentcode != null){
      this.studentservice.GetStudentSubjectResults(studentcode, this.id).subscribe(success=>{
        this.results=success;}, err =>{
          console.log(err);
        });
    }
  }

  start(exam: AdminExams):boolean {
    if(new Date(exam.start_time).getTime() <= this.timenow.getTime() ){
      return true;
    }
    return false;
  }
}
