import { Injectable } from '@angular/core';
import { liveQuery, Observable } from 'dexie';
import { AppDB } from '../../database/database';
import { WorkoutPlan } from '../../database/models/workout-plan.model';

@Injectable({
  providedIn: 'root'
})
export class WorkoutPlansService {

  workoutPlans$!: Observable<WorkoutPlan[]>;
  
  constructor(
    private db: AppDB
  ) {
    this.workoutPlans$ = liveQuery(() => this.db.workoutPlans.toArray());
  }

  
}
