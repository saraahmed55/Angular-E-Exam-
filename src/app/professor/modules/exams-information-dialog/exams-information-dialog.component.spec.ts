import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamsInformationDialogComponent } from './exams-information-dialog.component';

describe('ExamsInformationDialogComponent', () => {
  let component: ExamsInformationDialogComponent;
  let fixture: ComponentFixture<ExamsInformationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamsInformationDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamsInformationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
