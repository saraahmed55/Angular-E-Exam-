import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaptersQuestionsTorFComponent } from './chapters-questions-tor-f.component';

describe('ChaptersQuestionsTorFComponent', () => {
  let component: ChaptersQuestionsTorFComponent;
  let fixture: ComponentFixture<ChaptersQuestionsTorFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaptersQuestionsTorFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaptersQuestionsTorFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
