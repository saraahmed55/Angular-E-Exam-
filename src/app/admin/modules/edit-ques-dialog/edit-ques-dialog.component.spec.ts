import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditQuesDialogComponent } from './edit-ques-dialog.component';

describe('EditQuesDialogComponent', () => {
  let component: EditQuesDialogComponent;
  let fixture: ComponentFixture<EditQuesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditQuesDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditQuesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
