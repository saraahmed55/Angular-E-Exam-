import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsResultsComponent } from './students-results.component';

describe('StudentsResultsComponent', () => {
  let component: StudentsResultsComponent;
  let fixture: ComponentFixture<StudentsResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
