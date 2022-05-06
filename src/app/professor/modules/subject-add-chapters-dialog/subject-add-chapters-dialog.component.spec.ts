import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectAddChaptersDialogComponent } from './subject-add-chapters-dialog.component';

describe('SubjectAddChaptersDialogComponent', () => {
  let component: SubjectAddChaptersDialogComponent;
  let fixture: ComponentFixture<SubjectAddChaptersDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectAddChaptersDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectAddChaptersDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
