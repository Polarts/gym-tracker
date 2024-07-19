import { Location } from '@angular/common';
import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppDB } from '../../../database/database';
import { AnyExercise, Exercise } from '../../../database/models/exercise.model';
import { WorkoutPlan } from '../../../database/models/workout-plan.model';
import { ExerciseDialogComponent } from '../exercise-dialog/exercise-dialog.component';

@Component({
  selector: 'workout-plans-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class WorkoutPlansEditComponent implements OnInit, OnDestroy {

  readonly db = inject(AppDB);
  readonly activatedRoute = inject(ActivatedRoute);
  readonly location = inject(Location);
  readonly dialog = inject(MatDialog);

  readonly workout = signal<FlatWorkoutPlan>({ name: '', exercises: [] });
  routeSub?: Subscription;

  ngOnInit() {
    this.routeSub = this.activatedRoute.params.subscribe(async (params) => {
      const id = Number(params['id']);
      if (id !== undefined) {
        const workoutPlan = await this.db.workoutPlans.get(id);
        if (workoutPlan) {
          const exerciseIds = workoutPlan.exercises as number[];
          const exercises = await this.db.exercises.bulkGet(exerciseIds);
          this.workout.set({
            ...workoutPlan,
            exercises: exercises as AnyExercise[]
          })
        }
      }
    });
  }

  ngOnDestroy() {
    this.routeSub?.unsubscribe();
  }

  handleSubmit(e: NgForm) {
    console.log(e, this.workout())

  }

  handleBackClick() {
    this.location.back();
  }

  handleAddExercise() {
    const dialog = this.dialog.open(ExerciseDialogComponent, {data: { exercise: null }});
    dialog.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.workout().exercises.push(result);
      }
    })
  }

  handleDeleteClick(exercise: Exercise) {
    this.db.exercises.delete(exercise.id!);
    this.workout().exercises = this.workout().exercises.filter(e => e.id !== exercise.id);
  }
}

interface FlatWorkoutPlan extends Omit<WorkoutPlan, 'exercises'> {
  exercises: AnyExercise[]
}