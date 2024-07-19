export type ExerciseTypes = 'reps' | 'cardio';

export interface Exercise {
    id?: number;
    name: string;
    type: ExerciseTypes;
}

export interface RepsExercise extends Exercise {
    type: 'reps';
    repetitions: number;
    sets: number;
    weight: number;
}

export interface CardioExercise extends Exercise {
    type: 'cardio';
    duration: number;
    speed?: number;
    distance?: number;
}