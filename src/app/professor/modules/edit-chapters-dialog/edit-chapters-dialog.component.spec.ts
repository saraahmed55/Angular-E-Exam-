import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChaptersDialogComponent } from './edit-chapters-dialog.component';

describe('EditChaptersDialogComponent', () => {
  let component: EditChaptersDialogComponent;
  let fixture: ComponentFixture<EditChaptersDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditChaptersDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditChaptersDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
