import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamsResultComponent } from './exams-result.component';

describe('ExamsResultComponent', () => {
  let component: ExamsResultComponent;
  let fixture: ComponentFixture<ExamsResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamsResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamsResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
