import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionBankExamAllQuestionsComponent } from './question-bank-exam-all-questions.component';

describe('QuestionBankExamAllQuestionsComponent', () => {
  let component: QuestionBankExamAllQuestionsComponent;
  let fixture: ComponentFixture<QuestionBankExamAllQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionBankExamAllQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionBankExamAllQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
