import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { StudentInfo } from 'src/app/Models/StudentInfo';
import { AuthService } from 'src/app/services/auth.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {
  isOpen:boolean=false;
  faSmile=faSmile;
  faBook=faBook;
  student:StudentInfo;


  constructor(
    private studentservice:StudentService,
    private auth: AuthService,
    private route: Router,
  ) { }

  ngOnInit(): void {
    this.student = new StudentInfo()
    this.getInfo();
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

  logout(){
    this.auth.Logout().subscribe(success=>{
      localStorage.clear();
      this.route.navigate(['/logout']);
    }, err=>console.log(err) );
  }

}
