import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { StudentService } from 'src/app/services/student.service';
import { StudentInfo } from 'src/app/Models/StudentInfo';
import { AdminExams } from 'src/app/Models/AdminExams';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student-exams',
  templateUrl: './student-exams.component.html',
  styleUrls: ['./student-exams.component.css']
})
export class StudentExamsComponent implements OnInit {
  isOpen:boolean=false;

  displayedColumns: string[]=['id' , 'subject' , 'examName', 'duration' ,'sDate' ,'eDate' , "action"]
  dataSource: MatTableDataSource<AdminExams>;

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;


  student: StudentInfo;
  exams:AdminExams[];
  timenow:Date;

  constructor(
    private studentservice:StudentService,
    private auth: AuthService,
    private route: Router,) { }

  ngOnInit(): void {
    this.timenow = new Date();
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
        this.exams=success;
        this.dataSource = new MatTableDataSource(this.exams);
        this.dataSource.paginator = this.paginator;
      }, err =>{
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

  logout(){
    this.auth.Logout().subscribe(success=>{
      localStorage.clear();
      this.route.navigate(['/logout']);
    }, err=>console.log(err) );
  }

}
