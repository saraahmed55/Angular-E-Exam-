import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditQComponent } from './edit-q.component';

describe('EditQComponent', () => {
  let component: EditQComponent;
  let fixture: ComponentFixture<EditQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
