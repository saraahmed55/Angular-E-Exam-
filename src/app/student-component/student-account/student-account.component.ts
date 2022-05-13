import { Component, OnInit } from '@angular/core';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { faBookMedical } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { StudentInfo } from 'src/app/Models/StudentInfo';
import { Subjects } from 'src/app/Models/Subjects';
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
  constructor(private studentservice: StudentService) { }

  ngOnInit(): void {
    this.student = new StudentInfo();
    this.subjects = [];
    this.getInfo();
    this.getSubjects();

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


}
