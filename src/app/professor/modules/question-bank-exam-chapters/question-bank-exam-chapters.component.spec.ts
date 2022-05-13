import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionBankExamChaptersComponent } from './question-bank-exam-chapters.component';

describe('QuestionBankExamChaptersComponent', () => {
  let component: QuestionBankExamChaptersComponent;
  let fixture: ComponentFixture<QuestionBankExamChaptersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionBankExamChaptersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionBankExamChaptersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
