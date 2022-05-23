import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSubjectsofProfessorDialogComponent } from './get-subjectsof-professor-dialog.component';

describe('GetSubjectsofProfessorDialogComponent', () => {
  let component: GetSubjectsofProfessorDialogComponent;
  let fixture: ComponentFixture<GetSubjectsofProfessorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetSubjectsofProfessorDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSubjectsofProfessorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
