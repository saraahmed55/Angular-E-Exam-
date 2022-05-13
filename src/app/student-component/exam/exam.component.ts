import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  isOpen:boolean=false;
  public questionList: any =[];
  public currentQuestion: number=0;
  id = this.activatedroute.snapshot.paramMap.get("id");

  constructor(
    private questionService:QuestionService,
    private activatedroute:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getAllQ();
  }

  toggleNav(){
    this.isOpen= !this.isOpen
  }

  getAllQ(){
    this.questionService.getQJson().subscribe(res=>{
     this.questionList= res.questions;
    })

  }

  nextQuestion(){
          this.currentQuestion++;
  }

  previousQuestion(){
        this.currentQuestion--;
  }

}
