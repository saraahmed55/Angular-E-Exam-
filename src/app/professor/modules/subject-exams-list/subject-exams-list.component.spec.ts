import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectExamsListComponent } from './subject-exams-list.component';

describe('SubjectExamsListComponent', () => {
  let component: SubjectExamsListComponent;
  let fixture: ComponentFixture<SubjectExamsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectExamsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectExamsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
