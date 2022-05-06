import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectChaptersListComponent } from './subject-chapters-list.component';

describe('SubjectChaptersListComponent', () => {
  let component: SubjectChaptersListComponent;
  let fixture: ComponentFixture<SubjectChaptersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectChaptersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectChaptersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
