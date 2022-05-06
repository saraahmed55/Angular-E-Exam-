import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaptersQuestionsMcqComponent } from './chapters-questions-mcq.component';

describe('ChaptersQuestionsMcqComponent', () => {
  let component: ChaptersQuestionsMcqComponent;
  let fixture: ComponentFixture<ChaptersQuestionsMcqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaptersQuestionsMcqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaptersQuestionsMcqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
