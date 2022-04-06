import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsubjectDialogComponent } from './newsubject-dialog.component';

describe('NewsubjectDialogComponent', () => {
  let component: NewsubjectDialogComponent;
  let fixture: ComponentFixture<NewsubjectDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsubjectDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsubjectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
