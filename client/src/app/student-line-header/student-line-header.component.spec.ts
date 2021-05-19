import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLineHeaderComponent } from './student-line-header.component';

describe('StudentLineHeaderComponent', () => {
  let component: StudentLineHeaderComponent;
  let fixture: ComponentFixture<StudentLineHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentLineHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentLineHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
