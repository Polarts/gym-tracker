import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CardioExercise, Exercise, RepsExercise } from '../../../database/models/exercise.model';
import { CardioExerciseFormGroup, ExerciseFormGroup, RepsExerciseFormGroup } from './exercise-dialog.types';
import { Subscription } from 'rxjs';
import { AppDB } from '../../../database/database';

@Component({
  selector: 'workout-plans-exercise-dialog',
  templateUrl: './exercise-dialog.component.html',
  styleUrl: './exercise-dialog.component.scss'
})
export class ExerciseDialogComponent implements OnInit, OnDestroy {

  readonly dialogRef = inject(MatDialogRef<ExerciseDialogComponent>);
  readonly data = inject<{ exercise: Exercise | null }>(MAT_DIALOG_DATA);
  readonly db = inject(AppDB);
  exerciseForm: FormGroup<ExerciseFormGroup>;
  typeSubscription?: Subscription;

  constructor() {
    const exercise = this.data.exercise;
    this.exerciseForm = new FormGroup<ExerciseFormGroup>({
      name: new FormControl<string | null>(exercise?.name ?? null),
      type: new FormControl<string | null>(exercise?.type ?? null),
      cardio: new FormGroup<CardioExerciseFormGroup>({
        duration: new FormControl<number | null>(null),
        distance: new FormControl<number | null>(null),
        speed: new FormControl<number | null>(null),
      }),
      reps: new FormGroup<RepsExerciseFormGroup>({
        repetitions: new FormControl<number | null>(null),
        sets: new FormControl<number | null>(null),
        weight: new FormControl<number | null>(null)
      })
    });
  }

  ngOnInit(): void {
    this.typeSubscription = this.exerciseForm.controls.type.valueChanges.subscribe((value) => {
      if (value === 'reps') {
        this.exerciseForm.controls.cardio.disable();
        this.exerciseForm.controls.reps.enable();
      } else {
        this.exerciseForm.controls.reps.disable();
        this.exerciseForm.controls.cardio.enable();
      }
    })
  }

  ngOnDestroy(): void {
    this.typeSubscription?.unsubscribe();
  }
  

  async handleAddClick() {
    this.exerciseForm.updateValueAndValidity();
    if (this.exerciseForm.valid) {
      const value = this.exerciseForm.value;
      if (this.exerciseForm.value.type === 'reps') {
        const repsExercise: RepsExercise = {
          name: value.name ?? '',
          type: 'reps',
          repetitions: value.reps?.repetitions ?? 0,
          sets: value.reps?.sets ?? 0,
          weight: value.reps?.weight ?? 0
        }
        const id = await this.db.exercises.add(repsExercise);
        this.dialogRef.close({
          ...repsExercise,
          id
        });
      } else {
        const cardioExercise: CardioExercise = {
          name: value.name ?? '',
          type: 'cardio',
          duration: value.cardio?.duration ?? 0,
          distance: value.cardio?.distance ?? undefined,
          speed: value.cardio?.speed ?? undefined
        }
        const id = await this.db.exercises.add(cardioExercise);
        this.dialogRef.close({
          ...cardioExercise,
          id
        });
      }
    }
  }

}
