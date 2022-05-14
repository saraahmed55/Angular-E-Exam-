import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { StudentService } from 'src/app/services/student.service';
import { StudentInfo } from 'src/app/Models/StudentInfo';
import { AdminExams } from 'src/app/Models/AdminExams';


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
  selector: 'app-student-exams',
  templateUrl: './student-exams.component.html',
  styleUrls: ['./student-exams.component.css']
})
export class StudentExamsComponent implements OnInit {
  isOpen:boolean=false;

  displayedColumns: string[]=['id' , 'subject' , 'examName', 'duration' ,'sDate' ,'eDate' , "action"]
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;


  student: StudentInfo;
  exams:AdminExams[];
  timenow:Date;

  constructor(private studentservice:StudentService) { }

  ngOnInit(): void {
    this.timenow = new Date();
    this.dataSource.paginator = this.paginator;
    this.student = new StudentInfo();
    this.exams = [];
    this.getInfo();
    this.getExams();


  }


  toggleNav(){
    this.isOpen= !this.isOpen
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
      this.studentservice.GetStudentExams(studentcode).subscribe(success=>{
        this.exams=success;}, err =>{
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
