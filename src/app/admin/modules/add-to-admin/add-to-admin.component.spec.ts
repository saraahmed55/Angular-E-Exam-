import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToAdminComponent } from './add-to-admin.component';

describe('AddToAdminComponent', () => {
  let component: AddToAdminComponent;
  let fixture: ComponentFixture<AddToAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
