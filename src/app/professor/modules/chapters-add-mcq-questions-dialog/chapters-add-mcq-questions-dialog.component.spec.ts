import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaptersAddMcqQuestionsDialogComponent } from './chapters-add-mcq-questions-dialog.component';

describe('ChaptersAddMcqQuestionsDialogComponent', () => {
  let component: ChaptersAddMcqQuestionsDialogComponent;
  let fixture: ComponentFixture<ChaptersAddMcqQuestionsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaptersAddMcqQuestionsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaptersAddMcqQuestionsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
