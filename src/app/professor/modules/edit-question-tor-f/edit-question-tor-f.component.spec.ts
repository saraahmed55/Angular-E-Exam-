import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditQuestionTorFComponent } from './edit-question-tor-f.component';

describe('EditQuestionTorFComponent', () => {
  let component: EditQuestionTorFComponent;
  let fixture: ComponentFixture<EditQuestionTorFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditQuestionTorFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditQuestionTorFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
