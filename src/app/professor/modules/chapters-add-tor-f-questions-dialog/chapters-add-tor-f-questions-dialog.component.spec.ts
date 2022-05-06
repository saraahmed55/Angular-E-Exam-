import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaptersAddTorFQuestionsDialogComponent } from './chapters-add-tor-f-questions-dialog.component';

describe('ChaptersAddTorFQuestionsDialogComponent', () => {
  let component: ChaptersAddTorFQuestionsDialogComponent;
  let fixture: ComponentFixture<ChaptersAddTorFQuestionsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaptersAddTorFQuestionsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaptersAddTorFQuestionsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
