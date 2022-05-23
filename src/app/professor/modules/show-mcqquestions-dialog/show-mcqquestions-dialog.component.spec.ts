import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMCQQuestionsDialogComponent } from './show-mcqquestions-dialog.component';

describe('ShowMCQQuestionsDialogComponent', () => {
  let component: ShowMCQQuestionsDialogComponent;
  let fixture: ComponentFixture<ShowMCQQuestionsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMCQQuestionsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMCQQuestionsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
