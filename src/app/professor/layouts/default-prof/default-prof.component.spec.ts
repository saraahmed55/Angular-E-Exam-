import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultProfComponent } from './default-prof.component';

describe('DefaultProfComponent', () => {
  let component: DefaultProfComponent;
  let fixture: ComponentFixture<DefaultProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultProfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
