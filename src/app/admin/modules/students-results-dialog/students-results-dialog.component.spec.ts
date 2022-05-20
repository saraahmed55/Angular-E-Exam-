import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsResultsDialogComponent } from './students-results-dialog.component';

describe('StudentsResultsDialogComponent', () => {
  let component: StudentsResultsDialogComponent;
  let fixture: ComponentFixture<StudentsResultsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsResultsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsResultsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
