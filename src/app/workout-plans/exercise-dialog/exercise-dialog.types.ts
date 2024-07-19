import { FormArray, FormControl, FormGroup } from "@angular/forms";

export interface ExerciseFormGroup {
    name: FormControl<string|null>;
    type: FormControl<string|null>;
    reps: FormGroup<RepsExerciseFormGroup>;
    cardio: FormGroup<CardioExerciseFormGroup>;
}

export interface RepsExerciseFormGroup {
    repetitions: FormControl<number|null>;
    sets: FormControl<number|null>;
    weight: FormControl<number|null>;
}

export interface CardioExerciseFormGroup {
    duration: FormControl<number|null>;
    speed: FormControl<number|null>;
    distance: FormControl<number|null>;
}