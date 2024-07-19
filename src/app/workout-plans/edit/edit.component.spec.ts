import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutPlansEditComponent } from './edit.component';

describe('EditComponent', () => {
  let component: WorkoutPlansEditComponent;
  let fixture: ComponentFixture<WorkoutPlansEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkoutPlansEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutPlansEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
