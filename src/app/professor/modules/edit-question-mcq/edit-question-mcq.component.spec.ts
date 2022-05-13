import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditQuestionMcqComponent } from './edit-question-mcq.component';

describe('EditQuestionMcqComponent', () => {
  let component: EditQuestionMcqComponent;
  let fixture: ComponentFixture<EditQuestionMcqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditQuestionMcqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditQuestionMcqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
