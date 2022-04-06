import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDepartComponent } from './dialog-depart.component';

describe('DialogDepartComponent', () => {
  let component: DialogDepartComponent;
  let fixture: ComponentFixture<DialogDepartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDepartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
