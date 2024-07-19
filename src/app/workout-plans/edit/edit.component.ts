import { Component, effect, OnDestroy, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppDB } from '../../../database/database';
import { Exercise } from '../../../database/models/exercise.model';
import { WorkoutPlan } from '../../../database/models/workout-plan.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'workout-plans-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class WorkoutPlansEditComponent implements OnInit, OnDestroy {

  workout = signal<FlatWorkoutPlan>({name: '', exercises: []});
  routeSub?: Subscription;

  constructor(
    private db: AppDB,
    private activatedRoute: ActivatedRoute
  ) { 
    effect(() => console.log(this.workout()))
  }

  ngOnInit() {
    this.routeSub = this.activatedRoute.params.subscribe(params => {
      const id = Number(params['id']);
      if (id !== undefined) {
        console.log(id);
        this.db.workoutPlans.get(id).then(async (plan) => {
          if (plan) {
            const exerciseIds = plan.exercises as number[];
            const exercises = await this.db.exercises.bulkGet(exerciseIds);
            this.workout.set({
              ...plan, 
              exercises: exercises as Exercise[]
            })
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.routeSub?.unsubscribe();
  }

  handleSubmit(e: NgForm) {
    console.log(e, this.workout())
    
  }
}

interface FlatWorkoutPlan extends Omit<WorkoutPlan, 'exercises'> {
  exercises: Exercise[]
}