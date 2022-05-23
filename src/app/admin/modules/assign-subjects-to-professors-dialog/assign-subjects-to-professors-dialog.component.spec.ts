import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignSubjectsToProfessorsDialogComponent } from './assign-subjects-to-professors-dialog.component';

describe('AssignSubjectsToProfessorsDialogComponent', () => {
  let component: AssignSubjectsToProfessorsDialogComponent;
  let fixture: ComponentFixture<AssignSubjectsToProfessorsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignSubjectsToProfessorsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignSubjectsToProfessorsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
