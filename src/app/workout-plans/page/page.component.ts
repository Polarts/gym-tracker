import { Component, signal } from '@angular/core';
import { AppDB } from '../../../database/database';
import { liveQuery, Observable } from 'dexie';
import { WorkoutPlan } from '../../../database/models/workout-plan.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'workout-plans-page',
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss'
})
export class WorkoutPlansPageComponent {

  workoutPlans$: Observable<WorkoutPlan[]>;
  selectedPlanId = signal<WorkoutPlan['id']>(-1);

  constructor(
    private db: AppDB,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.workoutPlans$ = liveQuery(() => this.db.workoutPlans.toArray());
  }

  handleEditClick(id: WorkoutPlan['id']) {
    this.router.navigate(['edit', id], { relativeTo: this.activatedRoute })
  }
}
