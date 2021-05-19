import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLineComponent } from './student-line.component';

describe('StudentLineComponent', () => {
  let component: StudentLineComponent;
  let fixture: ComponentFixture<StudentLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
