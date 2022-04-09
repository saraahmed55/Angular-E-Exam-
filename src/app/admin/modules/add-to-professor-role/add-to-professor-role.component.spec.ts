import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToProfessorRoleComponent } from './add-to-professor-role.component';

describe('AddToProfessorRoleComponent', () => {
  let component: AddToProfessorRoleComponent;
  let fixture: ComponentFixture<AddToProfessorRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToProfessorRoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToProfessorRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
