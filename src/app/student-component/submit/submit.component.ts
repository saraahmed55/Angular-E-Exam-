import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule, FaIconLibrary  } from '@fortawesome/angular-fontawesome';
import { faSmile, fas } from '@fortawesome/free-solid-svg-icons';
import { StudentInfo } from 'src/app/Models/StudentInfo';
import { StudentService } from 'src/app/services/student.service';


@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})

export class SubmitComponent implements OnInit {
  isOpen:boolean=false;
  faSmile=faSmile;
  result =this.router.getCurrentNavigation()?.extras.state;
  student: StudentInfo;

  constructor(
    private router: Router,
    private service: StudentService
    ) { }

  ngOnInit(): void {
    this.student = new StudentInfo();
    this.getInfo();
  }
  toggleNav(){
    this.isOpen= !this.isOpen
  }

  getInfo(){
    const studentcode = localStorage.getItem('student_code');
    if(studentcode != null){
      this.service.GetStudentInfo(studentcode).subscribe(success=>{
        this.student=success;}, err =>{
          console.log(err);
        });
    }
  }
}
