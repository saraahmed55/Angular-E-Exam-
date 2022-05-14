import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainExamsInformationDialogComponent } from './main-exams-information-dialog.component';

describe('MainExamsInformationDialogComponent', () => {
  let component: MainExamsInformationDialogComponent;
  let fixture: ComponentFixture<MainExamsInformationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainExamsInformationDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainExamsInformationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
