import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQComponent } from './add-q.component';

describe('AddQComponent', () => {
  let component: AddQComponent;
  let fixture: ComponentFixture<AddQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
