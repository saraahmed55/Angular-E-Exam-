import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepatementComponent } from './depatement.component';

describe('DepatementComponent', () => {
  let component: DepatementComponent;
  let fixture: ComponentFixture<DepatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepatementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
