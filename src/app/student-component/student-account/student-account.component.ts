import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { faBookMedical } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { StudentInfo } from 'src/app/Models/StudentInfo';
import { StudentResults } from 'src/app/Models/StudentResults';
import { Subjects } from 'src/app/Models/Subjects';
import { AuthService } from 'src/app/services/auth.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-account',
  templateUrl: './student-account.component.html',
  styleUrls: ['./student-account.component.css']
})
export class StudentAccountComponent implements OnInit {
  isOpen:boolean=false;
  faLocationArrow=faLocationArrow;
  faBookMedical=faBookMedical;
  faGraduationCap=faGraduationCap;
  faCaretDown =faCaretDown ;

  student: StudentInfo;
  subjects: Subjects[];
  results:StudentResults[];
  constructor(
    private studentservice: StudentService,
    private auth: AuthService,
    private route: Router,
    ) { }

  ngOnInit(): void {
    this.student = new StudentInfo();
    this.subjects = [];
    this.results=[];
    this.getInfo();
    this.getSubjects();
    this.getResults();

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

  getSubjects(){
    const studentcode = localStorage.getItem('student_code');
    if(studentcode != null){
      this.studentservice.GetStudentSubjects(studentcode).subscribe(success=>{
        this.subjects=success;}, err =>{
          console.log(err);
        });
    }
  }

  getResults() {
    const studentcode = localStorage.getItem('student_code');
    if(studentcode != null){
      this.studentservice.GetStudentResults(studentcode).subscribe(success=>{
        this.results=success;}, err =>{
          console.log(err);
        });
    }
  }

  logout(){
    this.auth.Logout().subscribe(success=>{
      localStorage.clear();
      this.route.navigate(['/logout']);
    }, err=>console.log(err) );
  }
}
