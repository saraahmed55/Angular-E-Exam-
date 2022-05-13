import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionBankExamQuestionsComponent } from './question-bank-exam-questions.component';

describe('QuestionBankExamQuestionsComponent', () => {
  let component: QuestionBankExamQuestionsComponent;
  let fixture: ComponentFixture<QuestionBankExamQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionBankExamQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionBankExamQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
