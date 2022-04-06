import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProfDialogComponent } from './new-prof-dialog.component';

describe('NewProfDialogComponent', () => {
  let component: NewProfDialogComponent;
  let fixture: ComponentFixture<NewProfDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProfDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProfDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
