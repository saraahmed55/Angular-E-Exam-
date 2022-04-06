import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionTrueOrfalseComponent } from './question-true-orfalse.component';

describe('QuestionTrueOrfalseComponent', () => {
  let component: QuestionTrueOrfalseComponent;
  let fixture: ComponentFixture<QuestionTrueOrfalseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionTrueOrfalseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionTrueOrfalseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
