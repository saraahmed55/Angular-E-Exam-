import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaptersQuestionsComponent } from './chapters-questions.component';

describe('ChaptersQuestionsComponent', () => {
  let component: ChaptersQuestionsComponent;
  let fixture: ComponentFixture<ChaptersQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaptersQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaptersQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
