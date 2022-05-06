import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectStudentsListComponent } from './subject-students-list.component';

describe('SubjectStudentsListComponent', () => {
  let component: SubjectStudentsListComponent;
  let fixture: ComponentFixture<SubjectStudentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectStudentsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectStudentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
