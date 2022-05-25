import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminExams } from 'src/app/Models/AdminExams';
import { StudentInfo } from 'src/app/Models/StudentInfo';
import { StudentService } from 'src/app/services/student.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { SaveResults } from 'src/app/Models/SaveResults';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  @ViewChild("minutes") minutes: ElementRef;
  @ViewChild("seconds") seconds: ElementRef
  isOpen:boolean=false;
  student: StudentInfo;
  examForm: FormGroup;
  exam:AdminExams;
  answers: any =[];
  gradesOfCorrectAnswers = 0;
  totalGrades =0;
  saveResult: SaveResults
  public questionList: any =[];
  public numberOfQuestions:number =0;
  id = this.activatedroute.snapshot.paramMap.get("id");

  constructor(
    private service:StudentService,
    private route: Router,
    private activatedroute:ActivatedRoute,
    private formBuilder: FormBuilder,
    private auth: AuthService,
    ) { }

  ngOnInit(): void {
    this.examForm = this.formBuilder.group({
    });
    this.exam = new AdminExams();
    this.saveResult = new SaveResults();
    this.student = new StudentInfo();
    this.getInfo();
    this.getExamInfo();
    this.getAllQuestions();

  }

  toggleNav(){
    this.isOpen= !this.isOpen
  }

  createExamForm(questionsNumber: number){
    for (let i = 0; i < questionsNumber; i++){
      this.examForm.addControl('question' + i.toString(), new FormControl('') );
      this.totalGrades += this.questionList[i].grade;
    }
  }

  getAllQuestions(){
    const studentcode = localStorage.getItem('student_code');
    if(studentcode != null){
      this.service.GetExamQuestions(studentcode, this.id).subscribe(success=>{
        this.questionList= success;
        this.numberOfQuestions = this.questionList.length;
        this.createExamForm(this.numberOfQuestions);
      }, err=>console.log(err));
    }
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

  getExamInfo(){
    const studentcode = localStorage.getItem('student_code');
    if(studentcode != null){
      this.service.GetExamInfo(studentcode, this.id).subscribe(success=>{
        this.exam=success;
        this.startTimer(this.exam.duration_minutes);
      }, err =>{
          console.log(err);
        });
    }
  }

  startTimer(time:number) {
    var timeInSeconds = time * 60;
    var minutes;
    var seconds;

    let timeinterval = setInterval(()=>{
      minutes = Math.floor(timeInSeconds / 60);
      seconds = Math.floor(timeInSeconds % 60);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;


      this.minutes.nativeElement.innerHTML = minutes;
      this.seconds.nativeElement.innerHTML = seconds;

      --timeInSeconds;
      if (timeInSeconds < 0) {
          clearInterval(timeinterval);
          this.submitexam();
      }
    }, 1000)
  }


  submitexam(){
    for(let i = 0; i < this.numberOfQuestions; i++){
      if(this.questionList[i].type == 'mcq'){
        if(this.questionList[i].CorrectAnswer == this.examForm.get('question' + i.toString())?.value){
          this.gradesOfCorrectAnswers+=this.questionList[i].grade;
        }
      } else if(this.questionList[i].type == 'true or false') {
        if(this.questionList[i].CorrectAnswer == 'true' &&  this.examForm.get('question' + i.toString())?.value == 'answer1'){
          this.gradesOfCorrectAnswers+= this.questionList[i].grade;
        } else if(this.questionList[i].CorrectAnswer == 'false' &&  this.examForm.get('question' + i.toString())?.value == 'answer2'){
          this.gradesOfCorrectAnswers+=this.questionList[i].grade;
        }

      }
    }
    const result = Math.ceil((this.gradesOfCorrectAnswers / this.totalGrades) * 100);

    this.saveResult.exams_id = this.id;
    this.saveResult.result = result;
    const studentcode = localStorage.getItem('student_code');
    this.service.SaveExamResult(studentcode, this.saveResult).subscribe(success=>{
      this.route.navigate(['/student/submit']);
    }, err=> {console.log});

    this.route.navigateByUrl('/student/submit', { state: {result:result} });
  }

  logout(){
    this.auth.Logout().subscribe(success=>{
      localStorage.clear();
      this.route.navigate(['/logout']);
    }, err=>console.log(err) );
  }

}
